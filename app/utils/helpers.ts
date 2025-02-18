export const linkWhatsAppComMensagem = () => {
  const numero = "555198573027";
  const mensagem = encodeURIComponent(
    "Olá, vim do site e gostaria de mais informações!"
  );
  const linkWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;

  return linkWhatsApp;
};
