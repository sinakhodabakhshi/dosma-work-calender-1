import React from "react";

export default function TaskBtn({ taskDetail, isActive }) {
  const { task, time, id } = taskDetail;
  
  return (
    <button
      value={id}
      className={`rounded-full border   py-2 px-4 mt-2 mb-1 ${
        isActive
          ? "border-[#00bcd4] text-[#00bcd4]"
          : "border-[#9e9e9e] text-[#9e9e9e]"
      }`}
    >
      {`${time} - ${task}`}
    </button>
  );
}
