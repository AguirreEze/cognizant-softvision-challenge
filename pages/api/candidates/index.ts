import type { NextApiRequest, NextApiResponse } from "next";
import { Candidate } from "types/candidate";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Candidate>
) {
  res.status(200).json({ name: "John Doe" });
}
