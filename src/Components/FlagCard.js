import React from "react";

function FlagCard({ flag }) {
  return (
    <li>
      <img src={flag.flag} width="200" alt={flag.name} />
      <p>{flag.name}</p>
    </li>
  );
}

export default FlagCard;
