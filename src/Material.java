import java.io.File;
import java.util.Date;

public abstract class Material {

    protected int id;
    protected String titulo;
    protected String materia;
    protected File arquivo;
    protected Date dataEnvio;

    // Ponte/Bridge para o Implementor
    protected GeradorDeArquivo implementor;

    public Material(int id, String titulo, String materia, GeradorDeArquivo implementor) {
        this.id = id;
        this.titulo = titulo;
        this.materia = materia;
        this.dataEnvio = new Date();
        this.arquivo = new File(titulo.replace(" ", "_") + ".tmp");

        this.implementor = implementor;
    }

    public void setGerador(GeradorDeArquivo implementor) {
        this.implementor = implementor;
    }

    public abstract void gerar();

    protected String getTitulo() {
        return titulo;
    }
}