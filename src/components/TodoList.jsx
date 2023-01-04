import React from "react";

const TodoList = ({ list, setList, setEditTodo }) => {
  const handleComplete = (todo) => {
    setList(
      list.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })

    );
  };
 

  const handleDelete = ({ id }) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = list.find((item) => item.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {list.map((item) => (
        <li className="list-item" key={item.id}>
          <input
            type="text"
            value={item.title}
            className={`list ${item.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(item)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(item)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(item)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
