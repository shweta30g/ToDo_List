import React, { useState } from "react";
import { NewTodoTask } from "./NewTodoTask";
import { TodoList } from "./TodoList";
import "./style.css";
import { EditTaskModal } from "./EditTaskModal";

const Content = () => {
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(-1);

  const onEditTask = (index) => {
    setShowModal(true);
    setEditingTaskIndex(index);
  };

  const updateTask = (updatedTask) => {
    const newList = [...todoList];
    newList[editingTaskIndex].task = updatedTask;
    setTodoList(newList);
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTaskIndex(-1);
  };
  const addTodoTask = (task) => {
    let newList = [...todoList];
    newList.push({
      isChecked: false,
      task,
    });

    setTodoList(newList);
  };

  const deleteTask = (index) => {
    const newList = todoList.slice(0, index);
    newList.push(...todoList.slice(index + 1));
    setTodoList(newList);
  };

  const toggleTaskSelection = (index, isChecked) => {
    const newList = [...todoList];
    newList[index].isChecked = isChecked;
    setTodoList(newList);
  };

  const deleteSelectedItems = () => {
    setTodoList(todoList.filter((item) => !item.isChecked));
  };

  const atLeastOneItemSelected = todoList.some((item) => item.isChecked);

  const Title = () => <p className="title">ToDo List</p>;
  const Toolbar = ({ onDeleteSelectedItems }) => (
    <div className="deleteBtn">
      <button
        type="button"
        className="btn btn-danger"
        onClick={onDeleteSelectedItems}
      >
        Delete Selected Items
      </button>
    </div>
  );
  const task = todoList[editingTaskIndex] && todoList[editingTaskIndex].task;

  return (
    <>
      <Title />
      {atLeastOneItemSelected && (
        <Toolbar onDeleteSelectedItems={deleteSelectedItems} />
      )}
      <NewTodoTask addTodoTask={addTodoTask} />
      <TodoList
        todoList={todoList}
        onDeleteTask={deleteTask}
        onToggleTaskSelection={toggleTaskSelection}
        onEditTask={onEditTask}
      />

      <EditTaskModal
        task={task}
        onUpdate={updateTask}
        showModal={showModal}
        onCloseModal={closeModal}
      />
    </>
  );
};

const Header = () => <p className="headingTitle">ToDo List</p>;

const TodoLists = () => (
  <div>
    <Header />
    <div className="container">
      <Content />
    </div>
  </div>
);

export default TodoLists;
