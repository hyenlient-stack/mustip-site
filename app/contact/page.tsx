import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">상담 문의</h1>
      <ContactForm />
    </div>
  );
}
