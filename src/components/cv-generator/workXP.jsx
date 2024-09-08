export function WorkXP({ jobs }) {
  return (
    <>
      <h2 style={{borderBottom: "2px solid black"}}>Work Experience</h2>
      {jobs.map((job) => {
        return (
          <JobTitle
            key={crypto.randomUUID()}
            title={job.title}
            company={job.company}
            description={job.description}
            start={job.start}
            end={job.end}
          >
          </JobTitle>
        );
      })}
    </>
  );
}

function JobTitle ({ 
  title,
  company,
  description,
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
      <h3>
        {`${title} at ${company}`}
      </h3>
      <p>
        {description}
      </p>
      <p style={{marginBottom: "3rem"}}>
        {`${formatDate(start)} to ${formatDate(end)}`}
      </p>
    </>
  )
}