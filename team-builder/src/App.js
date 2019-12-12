import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {

  const [members, setMembers] = useState([{name: "John Aoiae", email: "noidc@pjas.com", role: "Lead Developer"}]);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form addMember={addMember} />
      <List list={members} />
    </div>
  );
}

export default App;
