import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonial = () => (
  <section className="bg-testimonial-bg py-20">
    <div className="container max-w-2xl mx-auto px-6">
      <div className="bg-card rounded-xl border border-border shadow-card p-10 text-center space-y-5">
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
          ))}
        </div>
        <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed">
          "I love this software!"
        </blockquote>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">DM</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">Diane Morey</p>
            <p className="text-xs text-muted-foreground">Sacks Tierney</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
