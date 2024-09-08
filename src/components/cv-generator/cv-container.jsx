import { Contact } from './contact.jsx';
import { WorkXP } from "./workXP.jsx";
import { Education } from './education.jsx';
import "../../styles/cv-container.css";

export function CV({ 
  contact,
  jobs,
  eds,
 }) {
  return (
    <div id='cv-container'>
      <Contact 
        firstName={contact.firstName}
        lastName={contact.lastName}
        telNumber={contact.telNumber}
        emailAddress={contact.email}
      ></Contact>
      <WorkXP
        jobs={jobs}
      ></WorkXP>
      <Education
        eds={eds}
      ></Education>
      <button onClick={() => window.print()}>Save as PDF</button>
    </div>
  );
}