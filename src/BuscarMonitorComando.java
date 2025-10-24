public class BuscarMonitorComando implements AcaoAluno {

    private final Aluno aluno;
    private final ServicoAluno servico; // O Receiver
    private final String habilidade;

    public BuscarMonitorComando(Aluno aluno, ServicoAluno servico, String habilidade) {
        this.aluno = aluno;
        this.servico = servico;
        this.habilidade = habilidade;
    }

    @Override
    public void executar() {
        System.out.println("\n[COMANDO: BuscarMonitor] Encapsulando e disparando a busca por: " + habilidade);
        servico.buscarMonitor(aluno.getIdAluno(), habilidade);
    }
}