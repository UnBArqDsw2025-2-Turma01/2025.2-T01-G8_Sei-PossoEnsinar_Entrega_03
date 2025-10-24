public class Monitor {

    private final int monitorId;

    public Monitor(int monitorId) {
        this.monitorId = monitorId;
    }

    public void disponibilizarMaterialDeEstudo(int id, String titulo, String materia, GeradorDeArquivo formatoInicial) {
        System.out.println("\n[Monitor " + monitorId + "] Preparando Material de Estudo...");

        MaterialDidatico material = new MaterialDidatico(id, titulo, materia, formatoInicial);

        material.gerar();

        System.out.println("\n--- Trocando o formato em tempo de execucao (Bridge em Acao)... ---");

        GeradorDeArquivo novoFormato = (formatoInicial instanceof GeradorPDF) ? new GeradorTXT() : new GeradorPDF();

        material.setGerador(novoFormato);
        material.gerar();
    }
}