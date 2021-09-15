import React from 'react';
import PropTypes from "prop-types";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

export const TodoList = ({ todoList, onDeleteTask, onToggleTaskSelection, onEditTask }) => (
     <div className="table_Outer">
        <table  className="table">
            <tbody style={{borderWidth: "thin"}}>
            {todoList.map((item, index) => (
                <tr key={`row-${index}`}>
                    <td className="col-md-1" style={{paddingLeft:"2%"}}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked={item.isChecked}
                            onChange={() => onToggleTaskSelection(index, !item.isChecked)}
                        />
                    </td>
                    <td className="col-md-8">
                        <p style={{textDecoration: item.isChecked ? 'line-through' : ''}}>{item.task}</p>
                    </td>
                    <td className="col-md-3" style={{paddingLeft:"15%"}}>
                    <span>
                    <BsPencil onClick={() => onEditTask(index)} data-bs-toggle="modal" data-bs-target="editTaskModal" className="editIcon" />
                    </span>
                    <span style={{marginLeft: '14px'}}>
                    <BsFillTrashFill onClick={() => onDeleteTask(index)} className="deleteIcon"/>
                    </span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
     </div>
  );

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    isChecked: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired
  })),
  onDeleteTask: PropTypes.func.isRequired,
  onToggleTaskSelection: PropTypes.func.isRequired
}