import React, { useContext } from "react";
import { dataContext } from "../../App";

export default function CalHeader() {
  const { date } = useContext(dataContext);
  return (
    <div className="flex  justify-center items-center bg-[#00838f] dark:bg-[#0a4f56] text-white text-sm rounded-t-md pb-1">
      <p>
        {date.year} {date.month}
      </p>
    </div>
  );
}
