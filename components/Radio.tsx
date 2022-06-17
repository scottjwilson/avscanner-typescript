import { Code } from "types";

export default function Radio({ radio }: Code) {
  return (
    <div className="radio-div ">
      <p className="font-bold">{radio.name}</p>
      <p>{radio.desc}</p>
    </div>
  );
}
