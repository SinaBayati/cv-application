import "./styles/App.css";
import { useState } from "react";
import { UserInput } from './components/user-input.jsx';
import { CV } from "./components/cv-generator/cv-container.jsx";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNumber: "",
  });
  const [jobs, setJobs] = useState([{
    id: crypto.randomUUID(),
    title: "",
    company: "",
    description: "",
    start: "",
    end: "",
  }]);
  const [eds, setEds] = useState([{
    id: crypto.randomUUID(),
    title: "",
    university: "",
    start: "",
    end: "",
  }]);

  return (
    <div id='app-container'>
        <h2>CV Builder</h2>
        <div className="flex-wrapper">
          <UserInput 
            contact={contact}
            setContact={setContact}
            jobs={jobs}
            setJobs={setJobs}
            eds={eds}
            setEds={setEds}
          ></UserInput>
          <CV 
            contact={contact}
            jobs={jobs}
            eds={eds}
          ></CV>
        </div>
    </div>
  );
};

