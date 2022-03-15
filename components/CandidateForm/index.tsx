import { useState } from "react";
import { CandidateType } from "types/candidate";
import { v4 as uuid } from "uuid";

interface Iprops {
  addCandidate: Function;
}

export default function CandidateForm({ addCandidate }: Iprops) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name.length) return;
    const dataToSave: CandidateType = {
      id: uuid(),
      name,
      comments,
      step: "Entrevista inicial",
    };
    addCandidate(dataToSave);
    setName("");
    setComments("");
  };
  return showForm ? (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label>Comentario:</label>
        <input
          type="text"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  ) : (
    <button onClick={() => setShowForm(true)}>Agregar candidato</button>
  );
}
