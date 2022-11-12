import { Post } from "~/types/types";
import data from "../mocks/data.json";

export default function fetchMockData() {
  return new Promise<Post[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
