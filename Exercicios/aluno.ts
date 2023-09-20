class Aluno {
  private nome:string;
  private nota1:number;
  private nota2:number;
  private media:number

  constructor(nome:string, nota1:number, nota2:number) {
      this.nome = nome;
      this.nota1 = nota1;
      this.nota2 = nota2;
  }

  public getNome():string {
      return this.nome;
  }

  public getNota1():number {
      return this.nota1;
  }

    public getNota2():number {
      return this.nota2;
  }

  public getMedia():number {
    return media = this.nota1 + this.nota2 / 2;
  }

}

export default Aluno;