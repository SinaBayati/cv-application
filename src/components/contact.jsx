import { H1 } from "./h1.jsx";

export function Contact({
  firstName,
  lastName,
  telNumber,
  emailAddress
}) {
  return (
    <>
      <H1>{firstName} {lastName}</H1>
      <div style={{color: "black"}}>
        <p>{emailAddress}</p>
        <p>{telNumber}</p>
      </div>
    </>
  );
}