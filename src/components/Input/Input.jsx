import React from "react";

const Input = ({ value, setValue, addTasks }) => {
  return (
    <div className="input-group input">
      <input
        type="text"
        className="form-control text-input"
        placeholder="New task"
        aria-describedby="basic-addon1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTasks();
          }
        }}
      />
      <div className="input-group-append">
        <button onClick={addTasks} className="btn btn-success" type="button">
          Add
        </button>
      </div>
    </div>
  );
};
export default Input;
