import React from "react";
import FlagCard from "./FlagCard";

function FlagList({ flags }) {
  const flagLists = flags.map((flag) => <FlagCard key={flag.id} flag={flag} />);

  return (
    <div>
      <h3>Let's learn all the countries flags of the world!</h3>
      <ul style={{"listStyleType": "none"}}>{flagLists}</ul>
    </div>
  );
}

export default FlagList;
