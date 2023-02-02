import React, { useState } from "react";
import Btn from "./Btn";
import Details from "./Details";

export default function TaskDetails({details}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Btn expanded={expanded} handleExpandClick={handleExpandClick} />
      <Details details={details} expanded={expanded} />
    </div>
  );
}
