import { useState } from "react";
import { RemoveEdInput } from "./remove-ed-input";

export function EdInput({ eds, setEds, currentEdObj }) {
  const [edObj, setEdObj] = useState(currentEdObj);

  function changeHandler(e, key) {
    const newEdObj = {...edObj, [key]: e.target.value};
    setEdObj(newEdObj);

    const edObjIndex = eds.findIndex(ed => ed.id === edObj.id);
    const left = eds.slice(0, edObjIndex);
    const right = eds.slice(edObjIndex + 1);
    const newEds = [...left, newEdObj, ...right];
    setEds(newEds);
  }

  return (
    <div>
      <label>
        Title of study:
        <input 
          type="text"
          onChange={e => changeHandler(e, "title")}
          value={edObj.title}
        />
      </label>
      <label>
        University:
        <input 
          type="text"
          onChange={e => changeHandler(e, "university")}
          value={edObj.university}
        />
      </label>
      <label>
        Start date:
        <input 
          type="date"
          onChange={e => changeHandler(e, "start")}
          value={edObj.start}
        />
      </label>
      <label>
        End date:
        <input 
          type="date"
          onChange={e => changeHandler(e, "end")}
          value={edObj.end}
        />
      </label>
      <RemoveEdInput
        eds={eds}
        setEds={setEds}
        currentEdObj={edObj}
      ></RemoveEdInput>
      <div style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "2px",
        margin: "20px 0 30px",
      }}></div>
    </div>
  );
}