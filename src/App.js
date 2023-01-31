import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/task/Task";
import { Data } from "./components/data/Data";

function App() {
  const [value, setValue] = React.useState("");
  const isMounted = React.useRef(false);

  const [tasks, setTasks] = React.useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const addTasks = () => {
    setTasks([
      ...tasks,
      {
        title: value,
        id: Math.floor(Math.random() * 1000),
        isDone: false,
        isChange: false,
      },
    ]);
    setValue("");
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(tasks);
      localStorage.setItem("tasks", json);
    }
    isMounted.current = true;
  }, [tasks]);

  const removeTasks = (id) => {
    setTasks(tasks.filter((obj) => obj.id !== id));
  };

  const onDone = (id) => {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === id) {
          if (obj.isDone === false) {
            obj.isDone = true;
          } else {
            obj.isDone = false;
          }
        }
        console.log(obj);
        return obj;
      }),
    );
  };

  const onChange = (id, title) => {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === id) {
          obj.title = title;
        }
        return obj;
      }),
    );
  };

  const deleteAll = () => {
    if (window.confirm()) {
      setTasks("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Data />
        <h1 className="title">To Do APP</h1>
        <Input
          value={value}
          setValue={setValue}
          tasks={tasks}
          addTasks={addTasks}
        />
        {tasks.length > 0 ? (
          <ul className="list-group">
            <button onClick={deleteAll} className="btn-deleteAll">
              Delete all
            </button>
            {tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                id={task.id}
                isDone={task.isDone}
                isChange={task.isChange}
                setTasks={setTasks}
                removeTasks={removeTasks}
                onChange={onChange}
                onDone={onDone}
              />
            ))}
          </ul>
        ) : (
          <p>There is no one task</p>
        )}
      </div>
    </div>
  );
}

export default App;
