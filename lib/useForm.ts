import { ChangeEvent, useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name, type } = e.target;
    // if (type === "number") {
    //   value = parseInt(value);
    // }
    // if (type === "file") {
    //   [value] = e.target.files;
    // }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
