import { useState } from "react";
import TaskCard from "../taskCard/TaskCard";
import TaskBtn from "./TaskBtn";

export default function TaskMannager({ tasks }) {
  const [active, setActive] = useState(null);

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      if(active === e.target.value)
        setActive(null)
      else
      setActive(e.target.value);
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-[#e0f7fa] dark:bg-[#212121] border-x border-x-[#80cbc4] dark:border-x-[#3D3D3D] border-b  border-b-[#80cbc4] dark:border-b-[#3D3D3D] rounded-b-lg
         flex flex-wrap justify-end py-[15px] px-2 space-x-2 mb-5"
      >
        {Object.keys(tasks).map((task) => (
          <TaskBtn
            key={task}
            taskDetail={tasks[task]}
            isActive={active === tasks[task].id}
          />
        ))}
      </div>

      {tasks && tasks[active] && <TaskCard task={tasks[active]} />}
    </>
  );
}
