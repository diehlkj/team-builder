import React, { useState } from "react";

const Form = props => {

  const [entry, setEntry] = useState({name: "John Aoiae", email: "noidc@pjas.com", role: "Lead Developer"});

  const handleChanges = event => {
    console.log("event", event.target.value);

    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addMember(entry);

    setEntry({name: "", email: "", role: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="John Doe"
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        placeholder="johndoe@mail.com"
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <select
        id="role"
        name="role"
        placeholder="Project Role"
        onChange={handleChanges}
      >
        {/* <option disabled selected>-- Select Role --</option> */}
        <option value="frontend engineer">Frontend Engineer</option>
        <option value="nackend engineer">Backend Engineer</option>
        <option value="ux designer">UX Designer</option>
        <option value="jr developer">Jr Developer</option>
        <option value="lead developer">Lead Developer</option>
        <option value="project manager">Project Manager</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;