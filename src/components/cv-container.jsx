import { Contact } from './contact.jsx';
import { WorkXP } from './workXP.jsx';
import { Education } from './education.jsx';

export function CV({ 
  contactInfo,
  jobTitles,
  edTitles,
}) {
  return (
    <div id='cv-container'>
      <Contact {...contactInfo}></Contact>
      <WorkXP jobTitles={jobTitles}></WorkXP>
      <Education edTitles={edTitles}></Education>
    </div>
  );
}