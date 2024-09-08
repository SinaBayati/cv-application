import { Contact } from './contact.jsx';
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
      <button onClick={() => window.print()}>Save as PDF</button>
    </div>
  );
}