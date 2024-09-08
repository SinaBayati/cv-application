import { useState } from "react";
import { RemoveJobInput } from "./remove-job-input.jsx";

export function JobInput({ jobs, setJobs, initialJobObj }) {
  const [job, setJob] = useState(initialJobObj);

  function changeHandler(e, key) {
    const newJobObj = {...job, [key]: e.target.value};
    setJob(newJobObj);

    // the following code is for keeping the order of array items intact
    const jobIndex = jobs.findIndex(j => j.id === job.id);
    const left = jobs.slice(0, jobIndex);
    const right = jobs.slice(jobIndex + 1);
    const newJobs = [...left, newJobObj, ...right];
    setJobs(newJobs);
  }

  return (
    <div>
      <label>
        Job title:
        <input 
          type="text" 
          onChange={e => changeHandler(e, "title")}
          value={job.title}
        />
      </label>
      <label>
        Company:
        <input 
          type="text" 
          onChange={e => changeHandler(e, "company")}
          value={job.company}
        />
      </label>
      <label>
        Description:
        <textarea 
          onChange={e => changeHandler(e, "description")}
          value={job.description}
        ></textarea>
      </label>
      <label>
        Start date:
        <input 
          type="date" 
          onChange={e => changeHandler(e, "start")}
          value={job.start}
        />
      </label>
      <label>
        End date:
        <input 
          type="date" 
          onChange={e => changeHandler(e, "end")}
          value={job.end}
        />
      </label>
      <RemoveJobInput
        jobs={jobs}
        setJobs={setJobs}
        currentJobObj={job}
      ></RemoveJobInput>
      <div style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "2px",
        margin: "20px 0 30px",
      }}></div>
    </div>
  );
}