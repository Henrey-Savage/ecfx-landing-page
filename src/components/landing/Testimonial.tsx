import { Quote } from "lucide-react";

const Testimonial = () => (
  <section className="bg-testimonial-bg py-16">
    <div className="container max-w-3xl mx-auto px-6 text-center space-y-4">
      <Quote className="h-10 w-10 text-primary mx-auto" />
      <blockquote className="text-xl md:text-2xl font-medium text-foreground">
        "I love this software!"
      </blockquote>
      <p className="text-sm text-muted-foreground italic">
        — Diane Morey, Sacks Tierney
      </p>
    </div>
  </section>
);

export default Testimonial;
