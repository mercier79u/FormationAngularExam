import {Evaluation} from "./evaluation";

export interface Restaurant {
  id: number,
  nom: string,
  adresse: string,
  evaluations: Evaluation[],
  noteMoyenne: number,
}
