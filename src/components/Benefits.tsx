import { Shield, Zap, Award, Users, FileCheck, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Expertise Comprovada",
      description: "Anos de experiência em desbloqueio judicial com alta taxa de sucesso.",
    },
    {
      icon: Zap,
      title: "Agilidade no Processo",
      description: "Atuamos rapidamente para minimizar o impacto financeiro na sua vida.",
    },
    {
      icon: Award,
      title: "Profissionais Especializados",
      description: "Equipe dedicada com conhecimento profundo em direito bancário e execução.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Cada caso é único. Oferecemos soluções sob medida para sua situação.",
    },
    {
      icon: FileCheck,
      title: "Transparência Total",
      description: "Você acompanha cada etapa do processo com atualizações constantes.",
    },
    {
      icon: TrendingUp,
      title: "Resultados Efetivos",
      description: "Nosso objetivo é a liberação rápida e integral dos seus valores.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por Que Escolher Nosso Escritório?
          </h2>
          <p className="text-xl text-muted-foreground">
            Somos especialistas em defender seus direitos e recuperar o que é seu por direito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-card)]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-[var(--transition-smooth)]">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
