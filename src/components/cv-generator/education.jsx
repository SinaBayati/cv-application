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
            start={ed.start}
            end={ed.end}
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

  function formatDate(date) {
    let newDate = date.split("-");
    newDate = newDate.join("/");
    return newDate;
  }
  
  return (
    <>
      <h3>{`${title} at ${university}`}</h3>
      <p>{`${formatDate(start)} to ${formatDate(end)}`}</p>
    </>
  );  
}