import { Injectable } from "@nestjs/common";
import { Material } from "../shared/models/material.model";
import { Monitor } from "../shared/models/monitor.model";
import { SessaoDeEnsino } from "../shared/models/sessao-de-ensino.model";
import { UserFactory } from "./user.factory.interface";

@Injectable()
export class MonitorFactory implements UserFactory {
  createUser(): Monitor {
    return new Monitor(
      2,
      "Maria Monitora",
      "maria.monitora@example.com",
      "senhaMonitorForte456",
      202,
      { dias: ["seg", "qua"], horario: "14h-16h" } // Exemplo de disponibilidade
    );
  }

  createSessao(): SessaoDeEnsino {
    return new SessaoDeEnsino(
      501,
      "Aula de Cálculo I",
      "Cálculo",
      new Date(),
      "15:00"
    );
  }

  createMaterial(): Material {
    return new Material(
      701,
      "Lista de Exercícios - Limites",
      "Cálculo",
      "/uploads/lista_limites.pdf",
      new Date()
    );
  }
}