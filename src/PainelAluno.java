import java.util.ArrayList;
import java.util.List;

public class PainelAluno {

    private final List<AcaoAluno> listaComandos = new ArrayList<>();

    public void adicionarComando(AcaoAluno comando) {
        System.out.println("[INVOKER: PainelAluno] Comando adicionado a fila.");
        listaComandos.add(comando);
    }

    public void executarAcoes() {
        System.out.println("\n*** INVOKER INICIANDO EXECUCAO DE AÇOES PENDENTES ***");
        for (AcaoAluno comando : listaComandos) {
            comando.executar();
        }
        System.out.println("*** FILA DE EXECUCAO CONCLUIDA ***");
        listaComandos.clear();
    }
}