import java.util.Calendar;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.List;

public class Aplicacao {
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd/MM/yyyy");

    private static Date criarData(int dia) {
        Calendar cal = Calendar.getInstance();
        cal.set(2025, Calendar.OCTOBER, dia);
        return cal.getTime();
    }

    public static void main(String[] args) {
        System.out.println("==============================================");
        System.out.println("--- DEMONSTRAÇAO DO PROTOTYPE ---");
        System.out.println("==============================================");

        Monitor monitor = new Monitor(10);

        System.out.println("\n--- 1. CRIANDO SESSOES POR CLONAGEM RAPIDA ---");

        Date data1 = criarData(28);
        SessaoDeEnsino s1 = monitor.criarSessao(data1);

        Date data2 = criarData(4);
        SessaoDeEnsino s2 = monitor.criarSessao(data2);

        Date data3 = criarData(11);
        SessaoDeEnsino s3 = monitor.criarSessao(data3);
        s3.setTitulo("Monitoria GoF: Prototype");

        System.out.println("\n--- RESULTADOS DAS COPIAS ---");
        System.out.println("Sessao 1: " + s1.toString());
        System.out.println("Sessao 3 (Titulo alterado): " + s3);

        System.out.println("\n--- 2. TESTE DE INDEPENDENCIA NO CHAT ---");

        s1.getChat().enviarMensagem("Aluno: Ola, podemos revisar o UML?");
        s1.getChat().enviarMensagem("Monitor: Claro! Comecando agora.");

        s3.getChat().enviarMensagem("Aluno: Mensagem exclusiva da sessao 3.");

        System.out.println("\n--- VERIFICAÇAO DE DADOS ---");

        List<Mensagem> mensagensS1 = s1.getChat().receberMensagem();
        System.out.println("S1 (Data " + DATE_FORMAT.format(data1) + ") - Qtde de mensagens: " + mensagensS1.size());

        List<Mensagem> mensagensS2 = s2.getChat().receberMensagem();
        System.out.println("S2 (Data " + DATE_FORMAT.format(data2) + ") - Qtde de mensagens: " + mensagensS2.size());

        List<Mensagem> mensagensS3 = s3.getChat().receberMensagem();
        System.out.println("S3 (Data " + DATE_FORMAT.format(data3) + ") - Qtde de mensagens: " + mensagensS3.size());

        if (mensagensS2.isEmpty() && !mensagensS1.isEmpty()) {
            System.out.println("\nSucesso");
            System.out.println("O clone S2 nao compartilhou o historico de mensagens do S1, confirmando a independencia no Chat.");
        } else {
            System.out.println("\nFalha. Teste de independencia falhou.");
        }
    }
}