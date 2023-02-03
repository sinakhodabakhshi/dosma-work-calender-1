import { useState } from "react";
import TaskCard from "../taskCard/TaskCard";
import TaskBtn from "./TaskBtn";

export default function TaskMannager({ tasks }) {
  const [active, setActive] = useState(null);

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (active === e.target.value) setActive(null);
      else setActive(e.target.value);
    }
  };

  //depend on the order you resive tasks you should keep our remove reverse method
  //default order is latest to oldest if you resive oldest to latest remove reverse method
  
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-slate-100 dark:bg-[#212121] border-x border-x-[#80cbc4] dark:border-x-[#3D3D3D] border-b  border-b-[#80cbc4] dark:border-b-[#3D3D3D] rounded-b-lg
         flex flex-row-reverse gap-x-2 gap-y-3 flex-wrap shrink justify-start pt-6 pb-5 px-2 mb-[18px]"
      >
        {Object.keys(tasks).reverse().reverse().map((task) => (
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
