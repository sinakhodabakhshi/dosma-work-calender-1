import ProgressionLinear from "./ProgressionLinear";

export default function HandyManLocation({progress}) {
  return (
    <div className="py-4 px-4 space-y-5 border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <ProgressionLinear progress={progress} />
      <button className="bg-[#00838f] dark:bg-[#0a4f56] text-white  px-6 py-2 rounded-full">
        من رسیدم
      </button>
    </div>
  );
}
