public class GeradorPDF implements GeradorDeArquivo {
    @Override
    public void salvar(String dados) {
        System.out.println("Implementador PDF: Formatando e salvando dados como PDF (simulado)...");
        System.out.println("--- PDF FORMATADO ---");
        System.out.println(dados.toUpperCase());
    }
}