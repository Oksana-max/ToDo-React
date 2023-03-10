import React from "react";

export const Task = ({
  title,
  id,
  isChange,
  isDone,
  removeTasks,
  onDone,
  onChange,
}) => {
  const [value, setValue] = React.useState(title);

  const [isEditMode, setIsEditMode] = React.useState(false);
  const editInputRef = React.useRef(null);

  React.useEffect(() => {
    if (isEditMode) {
      editInputRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <>
      {" "}
      {isEditMode === true ? (
        <div className="input-block">
          <input
            ref={editInputRef}
            type="text"
            className="form-control text-input input-ok"
            value={value}
            onChange={(e) => setValue(e.target.value)}></input>
          <div>
            <button
              onClick={() => {
                onChange(id, value);
                setIsEditMode(false);
              }}
              className="btn-ok"
              type="button">
              ok
            </button>
          </div>
        </div>
      ) : (
        <div className="block-item">
          <li
            onClick={() => {
              onDone(id);
            }}
            className={`${
              isDone ? "isDone list-group-item item" : "list-group-item item"
            } `}>
            {title}
          </li>
          <button
            onClick={() => {
              removeTasks(id);
            }}
            type="button"
            className="close"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div>
            <svg
              onClick={() => setIsEditMode(true)}
              className="icon-change"
              id="Capa_1"
              enableBackground="new 0 0 512 512"
              height="18"
              viewBox="0 0 512 512"
              width="18"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="m4.394 507.606c-4.168-4.168-5.508-10.392-3.426-15.906l51.497-136.35c1.8-4.765 5.895-8.291 10.874-9.364 4.979-1.072 10.163.456 13.765 4.058l84.853 84.853c3.602 3.602 5.13 8.786 4.058 13.765-1.073 4.979-4.6 9.074-9.364 10.874l-136.351 51.496c-5.515 2.083-11.738.743-15.906-3.426z"
                  fill="#d5e7f6"
                />
                <path
                  d="m156.65 459.535c4.765-1.8 8.291-5.895 9.364-10.874 1.072-4.979-.456-10.163-4.058-13.765l-42.426-42.427-115.136 115.137c4.168 4.168 10.392 5.508 15.906 3.426z"
                  fill="#93c6ec"
                />
                <path
                  d="m47.337 179.393h420.539v150h-420.539z"
                  fill="#ff5c5c"
                  transform="matrix(.707 -.707 .707 .707 -104.432 256.666)"
                />
                <path
                  d="m162.354 179.94c-5.858-5.858-5.858-15.355 0-21.213l134.35-134.35c13.646-13.646 35.851-13.646 49.497 0l28.284 28.284c5.858 5.858 5.858 15.355 0 21.213s-15.355 5.858-21.213 0l-28.283-28.284c-1.949-1.949-5.122-1.949-7.071 0l-134.35 134.35c-5.859 5.858-15.356 5.858-21.214 0z"
                  fill="#93c6ec"
                />
                <path
                  d="m73.854 243.41h420.539v75h-420.539z"
                  fill="#ff3838"
                  transform="matrix(.707 -.707 .707 .707 -115.415 283.182)"
                />
                <path
                  d="m501.765 66.803-56.569-56.569c-13.645-13.645-35.848-13.645-49.496 0l-.001.001-53.033 53.033 106.066 106.066 53.033-53.033c13.647-13.647 13.647-35.852 0-49.498z"
                  fill="#d5e7f6"
                />
                <path
                  d="m473.481 38.519-77.782 77.782 53.033 53.033 53.033-53.033c13.646-13.646 13.646-35.851 0-49.498z"
                  fill="#93c6ec"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
export default Task;
