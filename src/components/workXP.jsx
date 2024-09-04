export function WorkXP({ jobTitles }) {
  return (
    <>
      <h2>Work Experience</h2>
      {jobTitles.map((job) => {
        return (
          <JobTitle
            key={crypto.randomUUID()}
            title={job.title}
            company={job.company}
            description={job.description}
            from={job.from}
            to={job.to}
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
  from,
  to,
}) {
  return (
    <>
      <h3>
        {`${title} at ${company}`}
      </h3>
      <p>
        {description}
      </p>
      <p style={{marginBottom: "3rem"}}>
        {`From ${from} to ${to}`}
      </p>
    </>
  )
}