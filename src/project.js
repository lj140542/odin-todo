const Project = (id, name, todos) => {
  const getId = () => id;
  const getName = () => name;
  const getTodos = () => todos;
  const setName = (newName) => name = newName;
  const addTodo = (todo) => todos.push(todo);
  const toString = () => `id : ${id} | name : ${name}`;
  const toJSON = () => {
    let json = JSON;

    json.id = id;
    json.name = name;
    json.todos = [];

    todos.forEach(todo => {
      json.todos.push(todo.toJSON());
    });

    return json;
  };
  return { getId, getName, getTodos, setName, addTodo, toString, toJSON };
}

export { Project };