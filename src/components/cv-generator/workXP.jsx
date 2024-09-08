export function WorkXP({ jobTitle, company, jobStart, jobEnd, description }) {
  return (
    <>
      <h2 style={{borderBottom: "2px solid black"}}>Work Experience</h2>
      <JobTitle
        title={jobTitle}
        company={company}
        description={description}
        from={jobStart}
        to={jobEnd}
      ></JobTitle>
      {/* {jobTitles.map((job) => {
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
      })} */}
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
        {`${from} to ${to}`}
      </p>
    </>
  )
}