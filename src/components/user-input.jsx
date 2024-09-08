import { ContactInput } from "./contact-input.jsx";
import { JobInputs } from "./job-inputs.jsx";
import { AddJobInput } from "./add-job-input.jsx";
import { EdInputs } from "./ed-inputs.jsx";
import { AddEdInput } from "./add-ed-input.jsx";
import './../styles/user-input.css';

export function UserInput({ 
  contact,
  setContact,
  jobs,
  setJobs,
  eds, 
  setEds
}) {

  return (
    <div id="user-input">
      <form>
        <div>
          <h3>Contact Info</h3>
          <ContactInput 
            contact={contact}
            setContact={setContact}
          ></ContactInput>
        </div>
        <div>
          <h3>Work Experience</h3>
          <JobInputs
            jobs={jobs}
            setJobs={setJobs}
          ></JobInputs>
          <AddJobInput
            jobs={jobs}
            setJobs={setJobs}
          ></AddJobInput>
        </div>
        <div>
          <h3>Education</h3>
          <EdInputs
            eds={eds}
            setEds={setEds}
          ></EdInputs>
          <AddEdInput
            eds={eds}
            setEds={setEds}
          ></AddEdInput>
        </div>
      </form>
    </div>
  );
}
