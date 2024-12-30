# My-ToDo-List React App

This is a simple React-based ToDo list application where users can add, edit, and delete tasks. The app is structured with components for the header, task list, and task addition functionality.

## Features
- **Add Task**: Add new tasks to the list.
- **Edit Task**: Edit an existing task.
- **Delete Task**: Remove tasks from the list.
- **Responsive UI**: Simple and user-friendly interface built using TailwindCSS.

## Technologies Used
- **React**: For building the user interface with components and state management.
- **TailwindCSS**: For styling the components.
- **React Icons**: For adding delete and edit icons.

## Components

### 1. **App.jsx**
The main component that manages the state and renders the child components (`Header`, `AddTask`, and `TaskList`). It also handles adding, editing, and deleting tasks.

#### Key States:
- `inputTask`: Stores the input value for the new task.
- `taskList`: An array that holds the list of tasks.
- `editIndex`: The index of the task being edited.
- `editInput`: The value of the task being edited.

#### Key Functions:
- `addTaskHandler()`: Adds a new task or updates an existing one.
- `deleteTask()`: Removes a task from the list.
- `editHandler()`: Prepares a task for editing by setting the appropriate state.

---

### 2. **AddTask.jsx**
This component renders the input field and the button for adding or updating a task.

#### Props:
- `setInputTask`: A function to update the input field state.
- `inputTask`: The current value of the task input.
- `addTaskHandler`: A function to handle adding or updating tasks.
- `editIndex`: The index to check if the current operation is an edit.

---

### 3. **Header.jsx**
A simple header component that displays the title of the To-Do list.

---

### 4. **TaskList.jsx**
This component displays the list of tasks and provides buttons for editing and deleting each task.

#### Props:
- `taskList`: The array of tasks to be displayed.
- `deleteTask`: A function to handle deleting a task.
- `editHandler`: A function to handle editing a task.

Each task is displayed with delete and edit buttons, using icons from the `react-icons` library (`RiDeleteBin6Line` and `FaRegEdit`).

## Getting Started

To run the project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/my-todo-list.git
