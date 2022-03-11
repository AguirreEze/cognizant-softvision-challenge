import { CandidateType } from "types/candidate";
import styles from "./styles.module.scss";
import Candidate from "components/candidate";

interface Iprops {
  name: string;
  list: CandidateType[];
}

export default function Step({ name, list }: Iprops) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      {list.length ? (
        <ul className={styles.list}>
          {list.map((candidate) => (
            <Candidate candidate={candidate} key={candidate.id} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.empty}>No hay candidatos</h3>
      )}
    </article>
  );
}
