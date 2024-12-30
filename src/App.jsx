import React, { useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
  // const [editInput, seteditInput] = useState("");

  const addTaskHandler = () => {
    if (editIndex !== null) {
      const updated = taskList.map((task, index) => {
        if (index === editIndex) {
          return inputTask;
        }
        return task;
      });
      setTaskList(updated);
      seteditIndex(null);
      setInputTask("");
      return;
    }

    if (inputTask !== "") {
      setTaskList([...taskList, inputTask]);
      setInputTask("");
    }
  };

  const deleteTask = (taskToRemove) => {
    setTaskList((prevTask) => prevTask.filter((Task) => Task !== taskToRemove));
    console.log("delete btn is worked");
  };

  const editHandler = (index, task) => {
    seteditIndex(index);
    setInputTask(task);
    // setTaskList()
  };

  return (
    <div className="flex flex-col">
      <Header />
      <AddTask
        addTaskHandler={addTaskHandler}
        inputTask={inputTask}
        setInputTask={setInputTask}
        editIndex={editIndex}
      />
      <TaskList
        deleteTask={deleteTask}
        taskList={taskList}
        editHandler={editHandler}
      />
    </div>
  );
};

export default App;
