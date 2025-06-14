
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
    // IMPORTANTE: Substitua pelo seu número de telefone com o código do país.
    const phoneNumber = "5511999999999"; 
    const message = "Olá! Gostaria de um orçamento para um projeto de construção a seco.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <Button size="icon" className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
                <MessageSquare className="h-7 w-7 text-white" />
                <span className="sr-only">Fale conosco no WhatsApp</span>
            </Button>
        </a>
    )
}

export default WhatsAppButton;
