import TaskMannager from "./TaskMannager";

export default function TaskSection({ haveActiveTask, tasks }) {
  return (
    <div>
      {haveActiveTask && tasks ? (
        <TaskMannager tasks={tasks} />
      ) : (
        <p className="bg-slate-100 dark:bg-[#212121] border-x border-x-[#80cbc4] dark:border-x-[#3D3D3D] border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] text-end pr-4 py-[15px] text-[#424242] dark:text-[#AAAAAA]">
          {" "}
          سفارشی در این روز برای شما ثبت نشده است
        </p>
      )}
    </div>
  );
}
