import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Análise do Caso",
      description: "Avaliamos detalhadamente sua situação e documentos relacionados ao bloqueio.",
    },
    {
      number: "02",
      title: "Estratégia Jurídica",
      description: "Desenvolvemos a melhor estratégia legal personalizada para seu caso.",
    },
    {
      number: "03",
      title: "Peticionamento",
      description: "Protocolamos as petições necessárias com fundamentação sólida e eficaz.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Monitoramos constantemente o andamento processual e atualizamos você.",
    },
    {
      number: "05",
      title: "Liberação",
      description: "Após a decisão judicial favorável facilitamos aliberação dos seus recursos.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-xl text-muted-foreground">
            Um método comprovado e eficiente para desbloqueio dos seus recursos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-[var(--transition-smooth)] z-10">
                    {step.number}
                  </div>
                  <CheckCircle2 className="absolute top-16 right-1/2 translate-x-1/2 h-8 w-8 text-secondary hidden lg:block" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
