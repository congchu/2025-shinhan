import React, { useState } from "react";

function XSSDemo() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div>
      <h1>🚨 XSS 데모: dangerouslySetInnerHTML</h1>
      <input type="text" placeholder="HTML 입력" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setSubmitted(input)}>Submit</button>

      <div
        style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
        dangerouslySetInnerHTML={{ __html: submitted }}
      />
      <p>{submitted}</p>
    </div>
  );
}

export default XSSDemo;
