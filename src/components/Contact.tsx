
import QuoteForm from "./QuoteForm";

const Contact = () => {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 border-t bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Fale Conosco</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pronto para começar seu projeto? Preencha o formulário abaixo e retornaremos o mais breve possível.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-xl space-y-2 mt-8">
            <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
