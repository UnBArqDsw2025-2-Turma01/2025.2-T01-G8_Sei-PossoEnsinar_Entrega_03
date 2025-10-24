public class ServicoAluno {

    public void buscarMonitor(int alunoId, String habilidade) {
        System.out.println("   [RECEIVER: ServicoAluno] Aluno ID " + alunoId + ": Iniciando busca por Monitor...");
        System.out.println("   [RECEIVER: ServicoAluno] Busca concluida para habilidade: " + habilidade);
    }

    public void acessarMaterial(int alunoId, int idMaterial) {
        System.out.println("   [RECEIVER: ServicoAluno] Aluno ID " + alunoId + ": Verificando permissao e acessando Material ID " + idMaterial);
        System.out.println("   [RECEIVER: ServicoAluno] Material ID " + idMaterial + " acessado com sucesso.");
    }
}