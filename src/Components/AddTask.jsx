// import React, { useState } from 'react'

const AddTask = ({
  setInputTask,
  inputTask,
  addTaskHandler,

  editIndex,
}) => {
  return (
    <div className="flex flex-col w-full bg-white text-black">
      <div className="flex justify-center mt-9 gap-3">
        <input
          className="border rounded-md p-2 text-gray-700"
          type="text"
          placeholder="Enter New Todo"
          autoFocus
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTaskHandler}
        >
          {editIndex === null ? "Add Task" : "Update Task"}
        </button>
      </div>
    </div>
  );
};

export default AddTask;
