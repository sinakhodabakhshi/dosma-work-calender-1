export default function TaskBtn({ taskDetail, isActive }) {
  const { task, time, id } = taskDetail;

  return (
    <button
      value={id}
      className={`rounded-full border font-semibold  py-[6px] px-4 ${
        isActive
          ? "border-[#00bcd4] text-[#00bcd4]"
          : "border-[#9e9e9e] text-[#9e9e9e]"
      }`}
    >
      {`${time} - ${task}`}
    </button>
  );
}
