export function Education({ edTitles }) {
  return (
    <>
      <h2>Education</h2>
      {edTitles.map((ed) => {
        return (
          <EdTitle
            key={crypto.randomUUID()}
            title={ed.title}
            university={ed.university}
            from={ed.from}
            to={ed.to}
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
  from,
  to,
}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{"At " + university}</p>
      <p>{`From ${from} to ${to}`}</p>
    </>
  );  
}