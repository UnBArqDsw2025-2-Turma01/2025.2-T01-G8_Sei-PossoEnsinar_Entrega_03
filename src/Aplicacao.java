public class Aplicacao {

    public static void main(String[] args) {
        System.out.println("==============================================");
        System.out.println("--- DEMONSTRACAO DO COMMAND (GOF) ---");
        System.out.println("==============================================");

        ServicoAluno servico = new ServicoAluno();

        PainelAluno painel = new PainelAluno();

        Aluno aluno = new Aluno(1001);

        System.out.println("\n--- ALUNO PARAMETRIZANDO ACOES ---");

        aluno.buscarMonitor(painel, servico, "Java");
        aluno.acessarMateriais(painel, servico, 45);
        aluno.buscarMonitor(painel, servico, "Proxy/Bridge");

        // Invoker executa a fila de comandos.
        painel.executarAcoes();

        System.out.println("\n--- FIM ---");
        System.out.println("O Invoker executou acoes variadas de forma desacoplada do Aluno e do ServicoAluno.");
    }
}