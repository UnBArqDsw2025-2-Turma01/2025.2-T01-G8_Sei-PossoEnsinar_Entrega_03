import { Injectable } from "@nestjs/common";
import { Aluno } from "../shared/models/aluno.model";
import { UserFactory } from "./user.factory.interface";

@Injectable()
export class AlunoFactory implements UserFactory {
  createUser(): Aluno {
    return new Aluno(
      1,
      "João Aluno",
      "joao.aluno@example.com",
      "senhaAluno123",
      101
    );
  }
}