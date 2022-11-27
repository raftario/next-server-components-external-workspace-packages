import { hello } from "@issue/native";

export default function Home() {
  const world = hello();
  return <p>{world}</p>;
}
