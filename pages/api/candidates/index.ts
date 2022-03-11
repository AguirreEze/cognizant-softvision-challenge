import type { NextApiRequest, NextApiResponse } from "next";
import { CandidateType } from "types/candidate";

const initialData: CandidateType[] = [
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
  res: NextApiResponse<CandidateType[]>
) {
  res.status(200).json(initialData);
}
