import React from "react";
import FlagCard from "./FlagCard";

function FlagList({ flags }) {
  const flagLists = flags.map((flag) => <FlagCard key={flag.id} flag={flag} />);

  return <div style={{ margin: "30px 13px" }}>{flagLists}</div>;
}

export default FlagList;
