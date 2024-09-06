export function Education({ studyTitle, university, uniStart, uniEnd }) {
  return (
    <>
      <h2 style={{borderBottom: "2px solid black"}}>Education</h2>
      <EdTitle 
        title={studyTitle}
        university={university}
        from={uniStart}
        to={uniEnd}
      ></EdTitle>
      {/* {edTitles.map((ed) => {
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
      })} */}
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
      <h3>{`${title} at ${university}`}</h3>
      <p>{`${from} to ${to}`}</p>
    </>
  );  
}