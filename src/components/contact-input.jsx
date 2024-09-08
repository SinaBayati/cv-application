import { useState } from "react";

export function ContactInput({ contact, setContact }) {

  function changeHandler(e, key) {
    setContact({...contact, [key]: e.target.value})
  }

  return (
    <div>
      <label>
        First name:
        <input 
          type="text" 
          onChange={e => changeHandler(e, "firstName")}
          value={contact.firstName}
        />
      </label>
      <label>
        Last name:
        <input 
          type="text" 
          onChange={e => changeHandler(e, "lastName")}
          value={contact.lastName}
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          onChange={e => changeHandler(e, "email")}
          value={contact.email}
        />
      </label>
      <label>
        Tel number:
        <input 
          type="tel" 
          onChange={e => changeHandler(e, "telNumber")}
          value={contact.telNumber}
        />
      </label>
    </div>
  );
}