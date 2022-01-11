import React from "react";
import FlagList from "./FlagList";
import FlagForm from "./FlagForm";

function FlagPage({ flags, onSubmitAdd }) {
  return (
    <div>
      <br />
      <FlagForm onSubmitAdd={onSubmitAdd} />
      <br />
      <FlagList flags={flags} />
    </div>
  );
}

export default FlagPage;
