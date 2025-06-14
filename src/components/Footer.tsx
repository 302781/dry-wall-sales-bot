
import { Building2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-muted p-6 md:py-8 w-full border-t">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="font-bold">ConstruSeco</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} ConstruSeco. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
