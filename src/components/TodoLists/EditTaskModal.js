import React, { useEffect, useState } from "react";

export const EditTaskModal = ({ showModal, task, onUpdate, onCloseModal }) => {
  console.log("task", task);
  const [updatedTask, setTask] = useState(task || "");

  useEffect(() => {
    setTask(task || "");
  }, [task]);

  const handleOnChange = (e) => {
    setTask(e.target.value || "");
  };

  return (
    <div
      className={showModal ? "modal fade show" : "modal fade"}
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit task
            </h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              id="todo-task"
              onChange={handleOnChange}
              value={updatedTask}
              placeholder="New Task"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onUpdate(updatedTask)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
