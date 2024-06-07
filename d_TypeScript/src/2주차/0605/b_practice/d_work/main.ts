{
  interface Task {
    id: number;
    description: string;
    timestamp: Date; // 할 일이 기록된 시각 (Date 객체 타입)
  }

  class TaskLogger {
    private tasks: Task[] = [];
    private taskIdCounter = 0;

    addTask(description: string): Task {
      const newTask: Task = {
        id: this.taskIdCounter++,
        description,
        timestamp: new Date()
      };

      this.tasks.push(newTask);
      this.renderTasks();
      return newTask;
    }

    deleteTask(taskId: number): void {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.renderTasks();
    }

    private createTaskElement(task: Task): HTMLElement {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <span>${task.description} - ${task.timestamp.toLocaleString()}</span>
        <button data-task-id="${task.id}">Delete</button>
      `;

      return taskItem;
    }

    private renderTasks(): void {
      const taskList = document.getElementById('task-list');
      if (taskList) {
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
          const taskItem = this.createTaskElement(task);
          taskList.appendChild(taskItem);
        });

        this.addDeleteEventListeners();
      }
    }

    private addDeleteEventListeners() {

    }
  }
}