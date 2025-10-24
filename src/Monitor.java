import java.util.Date;

public class Monitor {

    private final SessaoDeEnsino prototipoPadrao;

    public Monitor(int monitorId) {
        this.prototipoPadrao = new SessaoDeEnsino(
                999, // ID do Template
                "Minicurso de Programação Orientada a Objetos (POO)",
                "Arquitetura de Software",
                "20:00",
                "Publica"
        );
        System.out.println("\n[Monitor " + monitorId + "] PROTÓTIPO BASE (Minicurso POO) CRIADO: " + prototipoPadrao.getTitulo());
    }

    public SessaoDeEnsino criarSessao(Date dataAgendada) {
        SessaoDeEnsino novaSessao = prototipoPadrao.clonar();
        novaSessao.setData(dataAgendada);
        return novaSessao;
    }
}