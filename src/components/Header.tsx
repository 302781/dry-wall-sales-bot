
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Building2 } from "lucide-react";

const Header = () => {
  const navLinks = [
    { title: "Início", href: "#inicio" },
    { title: "Serviços", href: "#servicos" },
    { title: "Projetos", href: "#projetos" },
    { title: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">ConstruSeco</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <a href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="font-bold">ConstruSeco</span>
                </a>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.title}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <a href="#contato">
            <Button>Pedir Orçamento</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
