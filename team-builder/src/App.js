import React, { useState} from 'react';
import './App.css';

function App() {
  const [teammate, setTeammate] = useState([
    {name: "Vish Singh", email: "vishalicious213@gmail.com", role: "bass"},
    {name: "Joan Singh", email: "jm.jocson213@gmail.com", role: "drums"},
    {name: "Ella Singh", email: "ellasingh213@gmail.com", role: "keyboard"},
    {name: "Kara Singh", email: "karasingh213@gmail.com", role: "vocals"}
  ])

  return null;
};

export default App;
