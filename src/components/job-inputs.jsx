import { JobInput } from "./job-input.jsx";

export function JobInputs({ jobs, setJobs }) {
  return (
    <>
      {jobs.map(j => {
        return (
          <JobInput
            key={j.id}
            jobs={jobs}
            setJobs={setJobs}
            initialJobObj={j}
          ></JobInput>
        );
      })}
    </>
  );
}