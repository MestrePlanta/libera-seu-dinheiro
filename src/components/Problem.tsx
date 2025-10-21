import { AlertCircle, Lock, TrendingDown, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: Lock,
      title: "Bloqueio Judicial Indevido",
      description: "Seu dinheiro foi bloqueado sem justificativa adequada ou por erro no sistema judiciário.",
    },
    {
      icon: TrendingDown,
      title: "Perda Financeira",
      description: "Impossibilidade de pagar contas, funcionários ou investir no seu negócio.",
    },
    {
      icon: Clock,
      title: "Processo Demorado",
      description: "Demora excessiva na análise e liberação dos valores bloqueados.",
    },
    {
      icon: AlertCircle,
      title: "Falta de Orientação",
      description: "Dificuldade em entender o processo e como proceder para recuperar seus recursos.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Você Não Está Sozinho
          </h2>
          <p className="text-xl text-muted-foreground">
            Milhares de brasileiros enfrentam problemas com bloqueios judiciais indevidos. 
            Entendemos sua frustração e sabemos exatamente como resolver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:scale-105"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
