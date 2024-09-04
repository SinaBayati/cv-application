import { useState } from "react";

// for text, email and tel input types
export function Input({ type }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <input 
      value={text} 
      type={type}
      onChange={handleChange}
    />
  );
}

