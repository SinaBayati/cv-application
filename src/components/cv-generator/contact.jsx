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
      <div style={{
        color: "black",
        display: "flex",
        gap: "20px",
        }}>
        <p>Email: {emailAddress}</p>
        <p>Tel: {telNumber}</p>
      </div>
    </>
  );
}