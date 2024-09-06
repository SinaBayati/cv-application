import { useState } from "react";
import './../styles/user-input.css';

export function UserInput({ setData }) {
  const [formData, setFormData] = useState({});

  function formSubmitHandler(e) {
    e.preventDefault();
    setData(formData);
  }

  return (
    <div id="user-input">
      <h2>CV builder</h2>
      <form action="#" onSubmit={formSubmitHandler}>
        <div>
          <h3>Contact Info</h3>
          <label>
            FirstName: 
            <input onChange={(e) => setFormData({...formData, firstName: e.target.value})}></input>
          </label>
          <label>
            LastName: 
            <input onChange={(e) => setFormData({...formData, lastName: e.target.value})}></input>
          </label>
          <label>
            Tel:
            <input 
              type="tel"
              onChange={(e) => setFormData({...formData, telNumber: e.target.value})}>
            </input>
          </label>
          <label>
            Email:
            <input 
              type="email"
              onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}>
            </input>
          </label>
        </div>
        <div>
          <h3>Work Experience</h3>
          <label>
            Title:
            <input onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}></input>
          </label>
          <label>
            Company:
            <input onChange={(e) => setFormData({...formData, company: e.target.value})}></input>
          </label>
          <label>
            Description:
            <textarea onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
          </label>
          <label>
            From:
            <input 
              type="date"
              onChange={(e) => setFormData({...formData, jobStart: e.target.value})}
             />
          </label>
          <label>
            To:
            <input 
              onChange={(e) => setFormData({...formData, jobEnd: e.target.value})}
              type="date" />
          </label>
        </div>
        <div>
          <h3>Education</h3>
          <label>
            Title:
            <input onChange={(e) => setFormData({...formData, studyTitle: e.target.value})}></input>
          </label>
          <label>
            University:
            <input onChange={(e) => setFormData({...formData, university: e.target.value})}></input>
          </label>
          <label>
            From: 
            <input 
              type="date"
              onChange={(e) => setFormData({...formData, uniStart: e.target.value})}
             />
          </label>
          <label>
            To:
            <input 
              type="date"
              onChange={(e) => setFormData({...formData, uniEnd: e.target.value})}
               />
          </label>
        </div>
        <button type="submit">Apply changes</button>
      </form>
    </div>
  );
}
