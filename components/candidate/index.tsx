import { CandidateType, StepType } from "types/candidate";
import styles from "./styles.module.scss";
interface Iprops {
  candidate: CandidateType;
  updateCandidate: Function;
}
const steps: typeof StepType[] = [
  "Entrevista inicial",
  "Entrevista técnica",
  "Oferta",
  "Asignación",
  "Rechazo",
];

export default function Candidate({ candidate, updateCandidate }: Iprops) {
  const getUpdatedCandidate = (newStep: typeof StepType): CandidateType => {
    return { ...candidate, step: newStep };
  };

  const moveLeft = () => {
    const currentStep: number = steps.findIndex(
      (step) => step === candidate.step
    );
    const stepIndex: number = currentStep === 0 ? 0 : currentStep - 1;
    updateCandidate(getUpdatedCandidate(steps[stepIndex]));
  };
  const moveRight = () => {
    const currentStep: number = steps.findIndex(
      (step) => step === candidate.step
    );
    const stepIndex: number = currentStep === 4 ? 4 : currentStep + 1;
    updateCandidate(getUpdatedCandidate(steps[stepIndex]));
  };
  return (
    <li className={styles.card}>
      <h3 className={styles.name}>{candidate.name}</h3>
      <p className={styles.comments}>{candidate.comments}</p>
      <div className={styles.buttons}>
        {candidate.step !== "Entrevista inicial" && (
          <button onClick={moveLeft}>{"<"}</button>
        )}
        {candidate.step !== "Rechazo" && (
          <button onClick={moveRight}>{">"}</button>
        )}
      </div>
    </li>
  );
}
