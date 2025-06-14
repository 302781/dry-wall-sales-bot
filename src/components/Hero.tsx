
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Soluções Modernas em Construção a Seco
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Inovação, rapidez e sustentabilidade para seu projeto. Do planejamento à execução, oferecemos o melhor em drywall e steel frame.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#contato">
                <Button size="lg">Solicitar Orçamento</Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" size="lg">
                  Nossos Serviços
                </Button>
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
