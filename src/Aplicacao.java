import java.io.File;
import java.util.Date;

public class Aplicacao {

    public static void main(String[] args) {
        System.out.println("==============================================");
        System.out.println("--- DEMONSTRACAO DO PROXY (GOF) ---");
        System.out.println("==============================================");

        Aluno aluno = new Aluno(1001);

        File arquivo = new File("GoF_Estruturais.pdf");
        Date data = new Date();

        System.out.println("\n****** CENARIO 1: Acesso Negado (Sessao PENDENTE) ******");

        ProxyMaterial proxy1 = new ProxyMaterial(
                1, "Padrões Estruturais", "Arquitetura", arquivo, data, false
        );

        aluno.acessarMateriais(proxy1);

        System.out.println("--- Verificacao ---");
        System.out.println("O RealSubject (Material Real) foi carregado? " + (proxy1.realMaterial != null));

        System.out.println("\n****** CENARIO 2: Acesso Liberado e Cache ******");

        proxy1.setPermissao(true);

        aluno.acessarMateriais(proxy1);

        aluno.acessarMateriais(proxy1);

        System.out.println("\n--- FIM DA DEMONSTRACAO ---");
        System.out.println("O Proxy 1 controlou o acesso e evitou carregar o recurso pesado ate ser estritamente necessario.");
    }
}