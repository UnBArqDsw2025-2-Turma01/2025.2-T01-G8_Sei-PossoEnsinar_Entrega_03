import java.util.ArrayList;
import java.util.List;

public class Chat {
    private static int PROXIMO_ID_CHAT = 1000;
    private int id;
    private List<Mensagem> mensagens;

    public Chat(int idBase) {
        if (idBase == 0) {
            this.id = ++PROXIMO_ID_CHAT;
        } else {
            this.id = idBase;
        }
        this.mensagens = new ArrayList<>();
    }

    public Chat(Chat origem) {
        this.id = ++PROXIMO_ID_CHAT;
        this.mensagens = new ArrayList<>();
    }

    public Chat() {
    }

    public Chat clonar() {
        return new Chat(this);
    }

    public int getId() {
        return id;
    }

    public List<Mensagem> getMensagens() {
        return mensagens;
    }

    public void enviarMensagem(String conteudo) {
        Mensagem novaMensagem = new Mensagem(conteudo);
        this.mensagens.add(novaMensagem);
        System.out.println("[Chat " + id + "] Enviado: \"" + conteudo + "\"");
    }

    public List<Mensagem> receberMensagem() {
        return new ArrayList<>(this.mensagens);
    }
}