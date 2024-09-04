import './styles/App.css';
import { CV } from './components/cv-container.jsx';

const jobTitles = [
  {
    title: "front end developer",
    company: "facebook",
    description: "designing and building website front ends",
    from: "Jan 1st 2022",
    to: "Aug 8th 2022", 
  },
  {
    title: "back end developer",
    company: "facebook",
    description: "designing and building website back ends",
    from: "Jan 1st 2023",
    to: "Aug 8th 2023", 
  },
];

const edTitles = [
  {
    title: "Computer engineering",
    university: "Harvard",
    from: "Sep 3rd 2021",
    to: "Aug 5th 2024",
  },
];

const contactInfo = {
  firstName: "Sina",
  lastName: "Bayati",
  telNumber: "1234567890",
  emailAddress: "sinaBayati@gmail.com",
}

function App() {
  return (
    <CV
      contactInfo={contactInfo}
      jobTitles={jobTitles}
      edTitles={edTitles}
    ></CV>    
  )
};

export default App;
