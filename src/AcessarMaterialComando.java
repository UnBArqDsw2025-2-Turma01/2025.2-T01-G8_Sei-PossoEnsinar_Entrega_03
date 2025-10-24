public class AcessarMaterialComando implements AcaoAluno {

    private final Aluno aluno;
    private final ServicoAluno servico; // O Receiver
    private final int idMaterial;

    public AcessarMaterialComando(Aluno aluno, ServicoAluno servico, int idMaterial) {
        this.aluno = aluno;
        this.servico = servico;
        this.idMaterial = idMaterial;
    }

    @Override
    public void executar() {
        System.out.println("\n[COMANDO: AcessarMaterial] Encapsulando e disparando acesso ao Material ID: " + idMaterial);
        servico.acessarMaterial(aluno.getIdAluno(), idMaterial);
    }
}