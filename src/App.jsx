import { useState } from "react";
import "./App.css";
import CopyToClipboardButton from "./components/CopyToClipBoardBtn";

function App() {
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [fields, setFields] = useState([]);
  const [data, setData] = useState("");

  function handleClick(text) {
    const newFields = fields.filter((field) => field !== text);
    setFields(newFields);
  }

  function handleSubmit() {
    console.log(doc2);
    setFields((prev) => [...prev, doc2]);
    console.log(fields);
  }
  function handleSubmitForm() {
    fetch("/api/some", {
      method: "POST",
      body: fields,
    })
      .then((res) => {
        const response = res.json();
        setData(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <input
        type="text"
        placeholder="doc1"
        required
        onChange={(e) => setDoc1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="doc2"
        required
        onChange={(e) => setDoc2(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        +
      </button>
      <div className="container">
        {fields.map((field) => (
          <div className="choose__container">
            <p>{field}</p>
            <button onClick={() => handleClick(field)}>x</button>
          </div>
        ))}
      </div>
      <button onClick={handleSubmitForm}>Submit</button>
      <CopyToClipboardButton response={data} />
    </div>
  );
}

export default App;
