
import { TeachingMediator } from "./mediator.interface";

export abstract class Component {
  constructor(protected mediator: TeachingMediator) {}

  abstract performAction(): void;
}