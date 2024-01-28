import React from "react";

function App() {
  const [todo, setTodo] = React.useState("");
  const [list, setList] = React.useState([]);

  function updateInput(event) {
    setTodo(event.target.value);
  }

  function handleAdd() {
    if (todo != "") {
      setList([...list, todo]);
    }
  }

  function handleDelete(item) {
    const newArray = list.filter((element) => element !== item);
    setList(newArray);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateInput} name="todo" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => handleDelete(item)}>
                <span>Done</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
