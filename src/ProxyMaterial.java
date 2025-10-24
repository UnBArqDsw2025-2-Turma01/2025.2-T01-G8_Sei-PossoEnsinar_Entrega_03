import java.io.File;
import java.util.Date;

// 3. Proxy: Controla o acesso ao RealSubject
public class ProxyMaterial implements AcessoMaterial {

    Material realMaterial;

    private final int id;
    private final String titulo;
    private final String materia;
    private final File arquivo;
    private final Date dataEnvio;

    private boolean permissaoAtiva;
    private String statusSessao;

    public ProxyMaterial(int id, String titulo, String materia, File arquivo, Date dataEnvio, boolean permissaoInicial) {
        this.id = id;
        this.titulo = titulo;
        this.materia = materia;
        this.arquivo = arquivo;
        this.dataEnvio = dataEnvio;

        this.permissaoAtiva = permissaoInicial;
        this.statusSessao = permissaoInicial ? "CONCLUIDA" : "PENDENTE";

        System.out.println("[PROXY " + id + "] Proxy criado. Status de Acesso: " + this.statusSessao);
    }

    @Override
    public void visualizar() {
        if (!checarPermissao()) {
            System.out.println("[PROXY] ACESSO NEGADO. Acesso restrito a sessoes concluidas.");
            return;
        }

        if (realMaterial == null) {
            System.out.println("[PROXY] PERMISSAO OK. Carregando Material Real (Lazy Initialization)...");

            this.realMaterial = new Material(id, titulo, materia, arquivo, dataEnvio);
        } else {
            System.out.println("[PROXY] Material ja carregado. Usando cache.");
        }

        realMaterial.visualizar();
    }

    private boolean checarPermissao() {
        return permissaoAtiva;
    }

    public void setPermissao(boolean p) {
        this.permissaoAtiva = p;
        this.statusSessao = p ? "LIBERADA" : "PENDENTE";
        System.out.println("[PROXY] Status de permissao atualizado para: " + this.statusSessao);
    }
}