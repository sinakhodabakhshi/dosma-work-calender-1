import ExpandMore from "../CollapsComponent/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function PaymentInfo({amount , expanded, handleExpandClick }) {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="flex items-center" onClick={handleExpandClick}>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className="dark:text-[#AAAAAA]" />
        </ExpandMore>
        <p className="text-sm ml-2 cursor-pointer dark:text-[#AAAAAA]">جزئیات</p>
      </div>
      <div className="flex space-x-2">
        <p className="flex items-center">
          <span className="text-[#8c8c8c]">تومان</span>
          <span>{amount}</span>
          <span className="font-bold">:هزینه کارشناسی</span>
        </p>
        <CreditCardIcon className="text-[#424242] dark:text-[#AAAAAA]" />
      </div>
    </div>
  );
}
