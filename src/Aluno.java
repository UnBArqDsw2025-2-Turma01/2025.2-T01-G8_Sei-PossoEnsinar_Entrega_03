public class Aluno {

    private final int idAluno;

    public Aluno(int idAluno) {
        this.idAluno = idAluno;
    }

    public void acessarMateriais(PainelAluno painel, ServicoAluno servico, int idMaterial) {
        AcaoAluno comando = new AcessarMaterialComando(this, servico, idMaterial);
        painel.adicionarComando(comando);
    }

    public void buscarMonitor(PainelAluno painel, ServicoAluno servico, String habilidade) {
        AcaoAluno comando = new BuscarMonitorComando(this, servico, habilidade);
        painel.adicionarComando(comando);
    }

    public int getIdAluno() {
        return idAluno;
    }
}