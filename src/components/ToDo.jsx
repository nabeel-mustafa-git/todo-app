import { useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleToDoInput = (e) => {
    setToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToDo = {
      id: toDoList.length + 1,
      name: toDo,
    };

    toDoList.push(newToDo);

    setToDo("");
    console.log(toDoList);
  };

  const handleDelete = (ItemId) => {
    const newList = toDoList.filter((item) => item.id !== ItemId);
    setToDoList(newList);
  };

  return (
    <div className="p-10 md:w-8/12 m-auto max-md:w-10/12 flex flex-col gap-4 items-center bg-gray-300 mt-10 rounded-lg">
      <form className="flex gap-4 flex-wrap justify-center" onSubmit={handleSubmit}>
        <input className="py-1 px-4 rounded-md outline-none" value={toDo} placeholder="Enter new Task" onChange={handleToDoInput} />
        <button className="px-4 rounded-md bg-gray-700 text-white" type="submit">
          ADD
        </button>
      </form>
      <ul className="bg-gray-200 w-full flex flex-col gap-4 rounded-lg p-6">
        {toDoList.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-white p-2 rounded-md gap-2">
            <p className="text-ellipsis text-nowrap overflow-hidden">{item.name}</p>
            <button className="bg-gray-400 text-white px-2 rounded-md" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
        {toDoList.length === 0 ? <p className="bg-white p-2 rounded-md text-sm font-bold text-gray-400">No tasks! ADD New.</p> : ""}
      </ul>
    </div>
  );
};

export default ToDo;
