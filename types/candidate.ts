export interface CandidateType {
  id: string;
  name: string;
  step:
    | "Entrevista inicial"
    | "Entrevista técnica"
    | "Oferta"
    | "Asignación"
    | "Rechazo";
  comments: string;
}

export let StepType:
  | "Entrevista inicial"
  | "Entrevista técnica"
  | "Oferta"
  | "Asignación"
  | "Rechazo";
