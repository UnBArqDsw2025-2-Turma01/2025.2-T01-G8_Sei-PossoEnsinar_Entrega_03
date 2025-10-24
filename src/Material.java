import java.io.File;
import java.util.Date;

public class Material implements AcessoMaterial {

    private final int id;
    private final String titulo;
    private final String materia;
    private final File arquivo;
    private final Date dataEnvio;

    public Material(int id, String titulo, String materia, File arquivo, Date dataEnvio) {
        this.id = id;
        this.titulo = titulo;
        this.materia = materia;
        this.arquivo = arquivo;
        this.dataEnvio = dataEnvio;

        System.out.println("[Material Real] Carregamento Concluido: '" + titulo + "' da materia '" + materia + "'");
    }

    @Override
    public void visualizar() {
        System.out.println("[Material Real] Conteudo sendo exibido: " + titulo + " (Arquivo: " + arquivo.getName() + ")");
    }

    public String getTitulo() {
        return titulo;
    }
}