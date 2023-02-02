import ExpandMore from "../CollapsComponent/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Btn({ expanded, handleExpandClick }) {
  return (
    <div>
      <div
        onClick={handleExpandClick}
        className={`w-[100%] py-2 text-end bg-[#e0f7fa] dark:bg-[#282828] ${
          !expanded && "rounded-b-lg"
        } ${
          expanded && "border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] "
        } px-2 border-b-[#80cbc4]`}
      >
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className=" dark:text-white" />
        </ExpandMore>
        <span className="ml-2 cursor-pointer ">مشاهده جزئیات سفارش</span>
      </div>
    </div>
  );
}
