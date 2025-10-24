public class MaterialDidatico extends Material {

    private final String conteudoEstudo;

    public MaterialDidatico(int id, String titulo, String materia, GeradorDeArquivo implementor) {
        super(id, titulo, materia, implementor);

        this.conteudoEstudo = "Material de Estudo: " + this.titulo +
                "\nMatéria: " + this.materia +
                "\n\nInstrucoes: Este material contem conceitos chave e exemplos praticos para aprofundamento. Revise o conteudo antes da próxima sessao.";
    }

    @Override
    public void gerar() {
        System.out.println("\n--- Gerando Material Didatico: " + this.titulo + " ---");

        // invoca a implementacao (salvar como TXT ou PDF)
        this.implementor.salvar(this.conteudoEstudo);
    }
}