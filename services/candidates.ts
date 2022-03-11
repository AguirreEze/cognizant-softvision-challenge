export function getCandidateList<T>(): Promise<T> {
  return fetch("api/candidates", {
    method: "GET",
  }).then((res) => res.json());
}
