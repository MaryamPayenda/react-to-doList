const ToDos = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li key={i} className="listItem">
      {toDo.title}
      <input
        type="checkbox"
        className="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />

      <i
        onClick={() => {
          props.remove(toDo.id);
        }}
      >
        ❌
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};

export default ToDos;
