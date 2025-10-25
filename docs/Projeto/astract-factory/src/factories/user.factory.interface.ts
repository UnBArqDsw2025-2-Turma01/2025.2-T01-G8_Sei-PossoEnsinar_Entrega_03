import { Usuario } from "../shared/models/usuario.model";

export abstract class UserFactory {
  abstract createUser(): Usuario;
}