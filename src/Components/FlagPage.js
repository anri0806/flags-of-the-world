import React from "react";
import FlagList from "./FlagList";
import FlagForm from "./FlagForm";

function FlagPage({ flags, onSubmitAdd }) {
  return (
    <div>
      <FlagForm onSubmitAdd={onSubmitAdd} />
      <FlagList flags={flags} />
    </div>
  );
}

export default FlagPage;
