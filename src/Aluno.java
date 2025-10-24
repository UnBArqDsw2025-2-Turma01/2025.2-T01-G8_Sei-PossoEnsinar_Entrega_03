public class Aluno {
    private final int idAluno;

    public Aluno(int idAluno) {
        this.idAluno = idAluno;
    }

    public void acessarMateriais(AcessoMaterial material) {
        System.out.println("\n[Aluno " + idAluno + "] Tentando acessar material...");
        material.visualizar();
    }
}