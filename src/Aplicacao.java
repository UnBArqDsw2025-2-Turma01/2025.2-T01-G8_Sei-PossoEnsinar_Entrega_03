public class Aplicacao {

    static void main() {
        System.out.println("==============================================");
        System.out.println("--- DEMONSTRACAO DO BRIDGE (GOF) ---");
        System.out.println(" (Foco: Material Didatico e Formatos de Arquivo)");
        System.out.println("==============================================");

        Monitor monitor = new Monitor(42);

        System.out.println("\n****** CENARIO 1: Conceitos de Prototype (TXT/PDF) ******");
        GeradorDeArquivo txtImplementor = new GeradorTXT();
        monitor.disponibilizarMaterialDeEstudo(
                101,
                "Conceitos de Padroes Criacionais",
                "Arquitetura de Software",
                txtImplementor
        );

        System.out.println("\n------------------------------------------------");

        System.out.println("\n****** CENARIO 2: Guia de UML (PDF/TXT) ******");
        GeradorDeArquivo pdfImplementor = new GeradorPDF();
        monitor.disponibilizarMaterialDeEstudo(
                202,
                "Guia Rapido de Diagramas UML",
                "Analise e Projeto",
                pdfImplementor
        );

        System.out.println("\n==============================================");
        System.out.println("FIM: A lógica do Material (Conteudo) está desacoplada do Gerador de Arquivo (Formato).");
    }
}