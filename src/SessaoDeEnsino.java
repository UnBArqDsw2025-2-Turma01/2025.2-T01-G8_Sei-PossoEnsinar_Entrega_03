import java.util.Date;
import java.util.Random;

public class SessaoDeEnsino implements SessaoPrototype {

    private int id;
    private String titulo;
    private String materia;
    private Date data;
    private String horario;
    private String privacidade;
    private String status;
    private int avaliacao;

    private Chat chat;

    public SessaoDeEnsino(int id, String titulo, String materia, String horario, String privacidade) {
        this.id = id;
        this.titulo = titulo;
        this.materia = materia;
        this.horario = horario;
        this.privacidade = privacidade;
        this.status = "TEMPLATE_PROTOTIPO";
        this.avaliacao = 0;
        this.chat = new Chat(id * 10);
    }

    private SessaoDeEnsino(SessaoDeEnsino origem) {
        this.id = new Random().nextInt(1000) + 1;
        this.titulo = origem.titulo;
        this.materia = origem.materia;
        this.horario = origem.horario;
        this.privacidade = origem.privacidade;
        this.avaliacao = 0;
        this.data = null;
        this.status = "AGENDADA";
        this.chat = origem.chat.clonar();

        System.out.println("Sessao " + this.id + " clonada. Novo Chat ID: " + this.chat.getId());
    }

    @Override
    public SessaoDeEnsino clonar() {
        return new SessaoDeEnsino(this);
    }

    public void setData(Date data) {
        this.data = data;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getStatus() {
        return status;
    }

    public Chat getChat() {
        return chat;
    }

    @Override
    public String toString() {
        return "Sessao ID: " + id +
                " | Titulo: " + titulo +
                " | Data: " + (data != null ? data.toString() : "N/A") +
                " | Status: " + status;
    }
}