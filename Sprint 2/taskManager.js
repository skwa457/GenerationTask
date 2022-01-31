function createTaskHtml(name, description, assignedTo, dueDate, status){
  const html = `
    <li class="card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseTask1" aria-expanded="false" aria-controls="collapseTask1">
                Details
            </button>
            <div class="collapse" id="collapseTask1">
                <ul class="list-group" id="tasksList">           
                    <li class="list-group-item">
                        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                            
                            <span class="badge badge-success">${status}</span>
                        </div>
                        <div class="d-flex w-100 mb-3 justify-content-between">
                            <small>Assigned To: ${assignedTo}</small>
                            <small>Due: ${dueDate}</small>
                        </div>
                            <p>${description}</p>
                            <p>
                                <button class="edit btn btn-primary btn-sm" name="edit" data-target="#editaskModal" data-toggle="modal">EDIT</button>
                                <button class="delete btn btn-danger btn-sm" name="delete">DELETE</button>
                            </p>
                    </li>
                </ul>
            </div>                     
        </div>
    </div>
  </li>`
  return html;
}

class TaskManager {
  constructor(currentId=0){
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate, status){
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    }
    this.tasks.push(task);
  }

  render(){
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];
      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
    }
    const tasksHtml = tasksHtmlList.join('\n');

    const tasksList = document.querySelector('#taskList');
    console.log(tasksHtml);
    tasksList.innerHTML = tasksHtml;
  }
  
}