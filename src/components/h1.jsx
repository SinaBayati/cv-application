import "./../styles/h1.css";

export function H1({ children }) {
  return (
    <>
      <h1 className="header-1">
        {children}
      </h1>
      <div className="header-1"/>
    </>
  );
}