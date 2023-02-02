import { useContext, useState } from "react";
import DayCard from "./DayCard";
import TaskSection from "../../taskmanagement/TaskSection";
import { dataContext } from "../../../App";


export default function CalDatePicker() {
  const {itemsData : data} = useContext(dataContext);
  const [active, setActive] = useState(Object.keys(data)[1]);

  //please be carfull when you made changes to DayCard component , you probably going to breake this part of the app
  //you should check the logic here so you can make changes to DayCard
  //feel free to change the logic so it fit your changes
  const handleClick = (e) => {
    if (e.target.parentElement.value) setActive(e.target.parentElement.value);
    if (e.target.value) setActive(e.target.value);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="mx-auto flex flex-row-reverse text-sm"
      >
        {Object.keys(data).map((day, index) => (
          <DayCard
            key={day}
            id={day}
            first={index === 0}
            dayDetails={data[day]}
            isActive={active === day}
          />
        ))}
      </div>

      {active && (
        <TaskSection
          haveActiveTask={data[active].activeTask}
          tasks={data[active].tasks}
        />
      )}
    </>
  );
}
