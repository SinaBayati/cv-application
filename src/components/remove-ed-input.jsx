export function RemoveEdInput({ eds, setEds, currentEdObj }) {

  function removeEdHandler() {
    setEds(eds.filter(ed => ed.id !== currentEdObj.id));
  }

  return (
    <>
      <button 
        className="button"
        type="button"
        onClick={removeEdHandler}
      >
        Remove this field
      </button>
    </>
  );
}