import PhoneIcon from "@mui/icons-material/Phone";

export default function Btns({ phoneNumber }) {
  return (
    <div className="flex flex-row-reverse text-[#00bcd4] space-x-reverse space-x-3 w-[100%]">
      <a
        href={`tel:+98${phoneNumber}`}
        className="border border-[#00bcd4] rounded-full p-2"
      >
        <PhoneIcon />
      </a>
      <button className="grow border border-[#00bcd4] rounded-full">
        مسیریابی
      </button>
      <button>لغو سفارش</button>
    </div>
  );
}
