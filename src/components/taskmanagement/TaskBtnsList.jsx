import TaskBtn from "./TaskBtn";

export default function TaskBtnsList({ tasks, active }) {
  return (
    <>
      {Object.keys(tasks).map((task) => (
        <TaskBtn
          key={task}
          taskDetail={tasks[task]}
          isActive={active === tasks[task].id}
        />
      ))}
    </>
  );
}
