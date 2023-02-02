import Collapse from "@mui/material/Collapse";

export default function PaymentDetails({ details, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <div className="flex flex-col mt-2 ">
        {details.map((detail) => (
          <div className="flex flex-row-reverse p-2 text-sm border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] justify-between">
            <p>{detail.title}</p>
            <p className="flex">
              <span className="text-[#bdbdbd]">تومان</span> <span>{detail.amount}</span>
            </p>
          </div>
        ))}
      </div>
    </Collapse>
  );
}
