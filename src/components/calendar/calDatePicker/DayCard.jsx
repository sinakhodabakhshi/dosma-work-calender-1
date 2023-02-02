import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function DayCard({ id, first, dayDetails, isActive }) {
  const { dayWord, activeTask, isCurrent , day} = dayDetails;
  
  return (
    <div
      className={`grow basis-0 w-0 shrink flex flex-col justify-center items-center`}
    >
      <p className="mb-1 text-[#424242] dark:text-white"> {first ? <AccessTimeIcon fontSize="inherit" /> :dayWord}</p>
      <button
        value={id}
        className={`relative border-l border-l-[#80cbc4] dark:border-l-[#3D3D3D] border-y border-y-[#80cbc4] dark:border-y-[#3D3D3D] ${
          first && "border-r border-r-[#80cbc4] dark:border-r-[#3D3D3D]"
        } ${isActive && " border-b-[#e0f7fa] dark:border-b-[#212121] bg-[#e0f7fa] dark:bg-[#212121]"} pb-2 w-[100%] `}
      >
        {activeTask && (
          <div className="absolute left-1 top-1 w-[5px] h-[5px] rounded-full bg-[#A7AB0A]" />
        )}

        <p className="text-[11px] text-[#00bcd4] h-5">{isCurrent && "امروز"}</p>

        <p className={`${isCurrent ? "text-[#424242] dark:text-white" : "text-[#bdbdbd] dark:text-[#AAAAAA]"}`}>
          {day}
        </p>
      </button>
    </div>
  );
}
