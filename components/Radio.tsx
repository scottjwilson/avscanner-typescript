import { Code } from "types";

export default function Radio({ radio }: Code) {
  return (
    <div className="radio-div">
      <h1>{radio.name}</h1>
      <p>{radio.desc}</p>
    </div>
  );
}
