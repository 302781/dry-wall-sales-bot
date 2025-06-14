
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrickWall, Frame, Warehouse } from "lucide-react";

const services = [
  {
    icon: <BrickWall className="h-10 w-10 text-primary" />,
    title: "Drywall",
    description: "Instalação de paredes, forros e revestimentos em drywall com agilidade, limpeza e acabamento perfeito."
  },
  {
    icon: <Frame className="h-10 w-10 text-primary" />,
    title: "Steel Frame",
    description: "Estruturas de aço leve para construções residenciais e comerciais. Uma solução robusta, sustentável e de rápida montagem."
  },
  {
    icon: <Warehouse className="h-10 w-10 text-primary" />,
    title: "Projetos Completos",
    description: "Desenvolvemos e executamos projetos completos de construção a seco, desde a fundação até o acabamento final."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Serviços</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma gama completa de soluções em construção a seco para atender às suas necessidades.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
          {services.map((service) => (
            <Card key={service.title} className="text-left">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
