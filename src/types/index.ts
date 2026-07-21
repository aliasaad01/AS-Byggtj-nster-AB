export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
  location: string;
}

export interface GalleryProject extends Project {
  slides?: string[];
  scopeOfWork?: string[];
  specs?: { label: string; value: string }[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
