import { CandidateType } from "types/candidate";
import styles from "./styles.module.scss";
interface Iprops {
  candidate: CandidateType;
}

export default function Candidate({ candidate }: Iprops) {
  return (
    <li className={styles.card}>
      <h3 className={styles.name}>{candidate.name}</h3>
      <p className={styles.comments}>{candidate.comments}</p>
      <div className={styles.buttons}>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </li>
  );
}
