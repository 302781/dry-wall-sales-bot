
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070&auto=format&fit=crop",
    title: "Residência Moderna",
    description: "Projeto residencial completo em Steel Frame.",
  },
  {
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2071&auto=format&fit=crop",
    title: "Escritório Corporativo",
    description: "Divisórias e forros em drywall para ambiente comercial.",
  },
  {
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=2070&auto=format&fit=crop",
    title: "Loja de Varejo",
    description: "Reforma rápida e limpa para espaço comercial.",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Projetos Realizados</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja a qualidade e a versatilidade do nosso trabalho em alguns dos nossos projetos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectData.map((project) => (
            <Card key={project.title}>
              <CardHeader className="p-0">
                <img src={project.image} alt={project.title} className="rounded-t-lg aspect-video object-cover" />
              </CardHeader>
              <CardContent className="text-left p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
