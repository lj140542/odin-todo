const ToDo = (id, title, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const getDone = () => done;
  const setDone = (isDone) => done = isDone;
  const setTitle = (newTitle) => title = newTitle;
  const toString = () => `id : ${id} | title : ${title} | done : ${done}`;
  const toJSON = () => JSON.parse(`{"id":"${id}","title":"${title}","done":${done}}`);
  return { getId, getTitle, getDone, setDone, setTitle, toString, toJSON };
}

export { ToDo };