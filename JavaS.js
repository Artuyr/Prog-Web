function Compartilhar(link) {
    navigator.clipboard.writeText(`${link}`);
    window.alert(`Copiado para a area de transferência com sucesso`);
}
function Enviar() {
    window.alert(`Enviado com sucesso`)
}