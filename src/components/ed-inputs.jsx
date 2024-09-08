import { AddEdInput } from "./add-ed-input";
import { EdInput } from "./ed-input";

export function EdInputs({ eds, setEds }) {
  return (
    <>
      {eds.map(ed => {
        return (
          <EdInput
            key={ed.id}
            eds={eds}
            setEds={setEds}
            currentEdObj={ed}
          ></EdInput>
        );
      })}
    </>
  );
}