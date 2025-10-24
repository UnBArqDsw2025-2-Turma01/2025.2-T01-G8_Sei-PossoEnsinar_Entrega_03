public class GeradorTXT implements GeradorDeArquivo {
    @Override
    public void salvar(String dados) {
        System.out.println("Implementador TXT: Salvando dados como texto simples (.txt)...");
        System.out.println("\n--- CONTEUDO ---");
        System.out.println(dados);
    }
}