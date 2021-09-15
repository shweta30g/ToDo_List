import React, { useState } from "react";
import PropTypes from "prop-types";

export const NewTodoTask = ({ addTodoTask }) => {
    const [task, setTask] = useState("");
  

    const handleOnChange = (e) => {
        setTask(e.target.value);
    };

    const addNewTask = () => {
        addTodoTask(task);
        setTask("");
    };

    return (
        <>
            <form className="row g-3" >
                <div className="col-sm-9" style={{paddingLeft:"20%"}}> 
                    <input
                        type="text"
                        className="form-control"
                        id="todo-task"
                        onChange={handleOnChange}
                        value={task}
                        placeholder="New Task"
                    />
                </div>
                <div className="col-sm-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addNewTask}
                        disabled={!task}
                    >
                        Add 
                    </button>
                </div>
            </form>
        </>
    );
};

NewTodoTask.propTypes = {
    addTodoTask: PropTypes.func.isRequired,
};
