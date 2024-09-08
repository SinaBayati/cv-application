export function Education({ eds }) {
  return (
    <>
      <h2 style={{borderBottom: "2px solid black"}}>Education</h2>
      {eds.map((ed) => {
        return (
          <EdTitle
            key={crypto.randomUUID()}
            title={ed.title}
            university={ed.university}
            from={ed.start}
            to={ed.end}
          >
          </EdTitle>
        );
      })}
    </>
  );
}

function EdTitle({
  title,
  university,
  start,
  end,
}) {
  return (
    <>
      <h3>{`${title} at ${university}`}</h3>
      <p>{`${start} to ${end}`}</p>
    </>
  );  
}