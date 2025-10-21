import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Minha conta foi bloqueada indevidamente e estava desesperada. A equipe conseguiu a liberação em tempo recorde. Profissionais excelentes!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Comerciante",
      content: "Não sabia como proceder com o bloqueio judicial. Fui muito bem orientado e o resultado foi além das expectativas. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Autônoma",
      content: "Atendimento personalizado e muito profissional. Conseguiram resolver meu caso rapidamente. Fiquei muito satisfeita!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Centenas de casos resolvidos com sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-10 w-10 text-secondary/20" />
                
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
