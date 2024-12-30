import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TaskList = ({
  deleteTask,

  taskList,

  editHandler,
}) => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <ul className="bg-orange-500 p-6 rounded-lg w-1/2 shadow-lg">
        {taskList.map((Task, index) => (
          <li
            className="bg-white text-black p-3 mb-2 rounded shadow hover:bg-gray-100 transition duration-300 flex justify-between"
            key={index}
          >
            {Task}

            <div className="flex gap-8">
              <button
                className="cursor-pointer hover:text-green-600"
                onClick={() => deleteTask(Task)}
              >
                <RiDeleteBin6Line />
              </button>
              <button
                onClick={() => editHandler(index, Task)}
                className="cursor-pointer hover:text-yellow-600"
              >
                <FaRegEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
