import React from "react";

const List = props => {
  return (
    <div>
      {props.list.map(member => (
        <div>
          <h2>{member.role}</h2>
          <p>{member.name}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default List;