import { CandidateType } from "types/candidate";
import styles from "./styles.module.scss";
import Candidate from "components/candidate";

interface Iprops {
  name: string;
  list: CandidateType[];
  updateCandidate: Function;
}

export default function Step({ name, list, updateCandidate }: Iprops) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      {list.length ? (
        <ul className={styles.list}>
          {list.map((candidate) => (
            <Candidate
              candidate={candidate}
              key={candidate.id}
              updateCandidate={updateCandidate}
            />
          ))}
        </ul>
      ) : (
        <h3 className={styles.empty}>No hay candidatos</h3>
      )}
    </article>
  );
}
