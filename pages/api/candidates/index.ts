import type { NextApiRequest, NextApiResponse } from "next";
import { Candidate } from "types/candidate";

const initialData: Candidate[] = [
  {
    id: "goncy",
    name: "Gonzalo Pozzo",
    step: "Entrevista técnica",
    comments: "Medio pelo",
  },
  {
    id: "doe",
    name: "John Doe",
    step: "Entrevista inicial",
    comments: "",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Candidate[]>
) {
  res.status(200).json(initialData);
}
