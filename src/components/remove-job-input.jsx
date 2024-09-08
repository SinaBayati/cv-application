export function RemoveJobInput({ jobs, setJobs, currentJobObj }) {

  function removeJobHandler() {
    setJobs(jobs.filter(j => j.id !== currentJobObj.id));
  }

  return (
    <>
      <button
        className="button"
        type="button"
        onClick={removeJobHandler}
      >
        Remove this section
      </button>
    </>
  );
}