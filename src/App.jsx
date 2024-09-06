import { UserInput } from './components/user-input.jsx';
import { CV } from "./components/cv-container.jsx";
import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [data, setData] = useState({});

  return (
    <div id='app-container'>
        <UserInput setData={setData}></UserInput>
        <CV data={data}></CV>
    </div>
  );
};

