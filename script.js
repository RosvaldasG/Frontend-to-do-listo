const listAllTasks = (tasks) => {
  const list = document.getElementById("list");
  list.className = "list";
  list.innerHTML = null;
  tasks.forEach((element) => {
    const line = document.createElement("div");
    line.className = "line";
    const brand = document.createElement("h6");
    const delBut = document.createElement("button");
    const editBut = document.createElement("button");
    delBut.textContent = "Delete";
    editBut.textContent = "Edit";
    brand.textContent = element.task + " / " + element.isDone;
    line.append(brand, delBut, editBut);
    list.append(line);
  });
};

const getAllTasks = () => {
  fetch("http://localhost:3000/getTasks")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.tasks);
      listAllTasks(data.tasks);
    });
};

const insertTask = () => {
  const taskInput = document.getElementById("task-input").value;
  const task = { task: taskInput, isDone: false };

  console.log("hit");
  fetch("http://localhost:3000/insertTask", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
