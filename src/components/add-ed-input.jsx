export function AddEdInput({ eds, setEds }) {

  function addEdHandler() {
    const newEdObj = {
      id: crypto.randomUUID(),
      title: "",
      university: "",
      start: "",
      end: "",
    }
    setEds([...eds, newEdObj]);
  }

  return (
    <>
      <button 
        className="button"
        type="button"
        onClick={addEdHandler}
      >
        Add another field
      </button>
    </>
  );
}