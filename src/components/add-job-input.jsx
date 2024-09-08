export function AddJobInput({ jobs, setJobs }) {
  
  function addHandler() {
    const newJobObjID = crypto.randomUUID();

    setJobs([...jobs, { 
      id: newJobObjID,
      title: "",
      company: "",
      description: "",
      start: "",
      end: "",
    }]);
  }

  return (
    <>
      <button
        type="button"
        onClick={addHandler}
        className="button"
      >
        Add another field
      </button>
    </>
  );
}