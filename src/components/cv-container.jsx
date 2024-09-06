import { Contact } from './contact.jsx';
import { WorkXP } from './workXP.jsx';
import { Education } from './education.jsx';
import "./../styles/cv-container.css";

export function CV({ data }) {
  console.log(data);
  return (
    <div id='cv-container'>
      <Contact 
        firstName={data.firstName}
        lastName={data.lastName}
        telNumber={data.telNumber}
        emailAddress={data.emailAddress}
      ></Contact>
      <WorkXP 
        jobTitle={data.jobTitle}
        description={data.description}
        company={data.company}
        jobStart={data.jobStart}
        jobEnd={data.jobEnd}
      ></WorkXP>
      <Education 
        studyTitle={data.studyTitle}
        university={data.university}
        uniStart={data.uniStart}
        uniEnd={data.uniEnd}
      ></Education>
      <button onClick={() => window.print()}>Save as PDF</button>
    </div>
  );
}