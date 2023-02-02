import { useState } from "react";
import PaymentInfo from "./PaymentInfo";
import PaymentDetails from "./PaymentDetails";


export default function Payment({ info }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-col py-4 px-2 border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <PaymentInfo
        amount={info.amount}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <PaymentDetails details={info.bill} expanded={expanded} />
      <p className="text-end text-red-500 mt-3">{info.paymentMethod}</p>
    </div>
  );
}
