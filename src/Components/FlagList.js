import React from "react";
import FlagCard from "./FlagCard";

function FlagList({ flags }) {
  const flagLists = flags.map((flag) => <FlagCard key={flag.id} flag={flag} />);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>{flagLists}</ul>
    </div>
  );
}

export default FlagList;
