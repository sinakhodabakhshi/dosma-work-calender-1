import { useState } from "react";
import BillPreview from "./BillPreview";
import Bill from "./Bill";

export default function Payment({ info }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-col py-3 px-2 gap-y-4 border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <BillPreview
        amount={info.amount}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <Bill details={info.bill} expanded={expanded} />
      <p className="text-end font-semibold text-red-400 ">
        {info.paymentMethod}
      </p>
    </div>
  );
}
