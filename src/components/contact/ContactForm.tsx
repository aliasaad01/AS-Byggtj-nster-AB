import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { SERVICES } from "@/src/data/companyData";

// Validation schema in Swedish
const contactFormSchema = z.object({
  name: z.string().min(2, "Namnet måste innehålla minst 2 bokstäver."),
  email: z.string().email("Vänligen ange en giltig e-postadress."),
  phone: z.string().min(6, "Vänligen ange ett giltigt telefonnummer."),
  projectType: z.string().min(1, "Vänligen välj en projektkategori."),
  message: z.string().min(10, "Meddelandet måste innehålla minst 10 tecken."),
});

type FormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  // const onSubmit = async (data: FormData) => {
  //   setSubmitStatus("loading");

  //   try {
  //     // Simulate highly robust server request
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     setSubmitStatus("success");
  //     reset();
  //   } catch (e) {
  //     setSubmitStatus("error");
  //   }
  // };

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // يقرأ المفتاح تلقائياً وبأمان
          subject: `Ny offert från: ${data.name} - ${data.projectType}`,
          from_name: "AS Byggtjänster Webportal",
          name: data.name,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (e) {
      setSubmitStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-black/5 relative text-left"
    >
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="h-10 w-10 animate-[bounce_1s_infinite_alternate]" />
            </div>
            <div className="space-y-3">
              <Typography
                variant="h3"
                color="primary"
                className="font-display text-2xl font-bold"
              >
                Tack För Din Förfrågan!
              </Typography>
              <Typography
                variant="body"
                className="text-muted-dark max-w-md mx-auto leading-relaxed font-light text-sm"
              >
                Vi har tagit emot dina uppgifter och en av våra projektledare
                kommer att kontakta dig inom kort för en kostnadsfri
                konsultation.
              </Typography>
            </div>
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="text-xs uppercase tracking-widest font-bold px-8 py-3.5"
                onClick={() => setSubmitStatus("idle")}
              >
                Skicka ett nytt meddelande
              </Button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                id="form-name"
                label="Ditt Namn"
                placeholder="t.ex. Johan Andersson"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                id="form-email"
                label="E-postadress"
                placeholder="t.ex. johan@exempel.se"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            {/* Phone & Project category Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                id="form-phone"
                label="Telefonnummer"
                placeholder="t.ex. 0701234567"
                error={errors.phone?.message}
                {...register("phone")}
              />
              <div className="w-full">
                <label
                  htmlFor="form-projectType"
                  className="block text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2"
                >
                  Typ av projekt
                </label>
                <select
                  id="form-projectType"
                  className={`w-full bg-light-gray border-0 border-b-2 border-black/10 focus:border-gold focus:ring-0 px-1 py-3.5 transition-all text-primary placeholder:text-black/30 font-sans text-sm focus:bg-white focus:outline-none cursor-pointer ${
                    errors.projectType
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  {...register("projectType")}
                >
                  <option value="">Välj projektkategori...</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans font-medium">
                    {errors.projectType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Box */}
            <Textarea
              id="form-message"
              label="Berätta Kort Om Ditt Projekt"
              placeholder="Beskriv vad du vill bygga, dina ungefärliga mått eller önskade material..."
              error={errors.message?.message}
              {...register("message")}
            />

            {/* Server side error simulation state */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <Typography
                  variant="body"
                  className="text-xs font-sans font-medium"
                >
                  Ett oväntat fel inträffade vid insändandet av formuläret.
                  Vänligen försök igen senare eller ring oss direkt.
                </Typography>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full flex items-center justify-center gap-2.5 text-xs uppercase tracking-widest font-bold py-4"
                isLoading={submitStatus === "loading"}
              >
                Skicka Offertförfrågan <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
