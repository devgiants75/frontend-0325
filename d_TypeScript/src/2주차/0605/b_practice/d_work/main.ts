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

    private addDeleteEventListeners(): void {
      const deleteButtons = document.querySelectorAll('.task-item button');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const taskId = parseInt((e.target as HTMLButtonElement).dataset.taskId || '0', 10);
          this.deleteTask(taskId);
        })
      })
    }
  }

  const init = (): void => {
    const taskLogger = new TaskLogger();
    const logTaskButton = document.getElementById('log-task-button');
    const taskModal = document.getElementById('task-modal');
    const closeModal = document.querySelector('.close');
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input') as HTMLInputElement;
  
    if (logTaskButton) {
      logTaskButton.addEventListener('click', () => {
        if (taskModal) {
          taskModal.style.display = 'block';
        }
      });
    }
  
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        if (taskModal) {
          taskModal.style.display = 'none';
        }
      })
    }

    window.addEventListener('click', (event) => {
      if (event.target === taskModal) {
        if (taskModal) {
          taskModal.style.display = 'none';
        }
      }
    });

    if (addTaskButton) {
      addTaskButton.addEventListener('click', () => {
        const description = taskInput.value;
        if (description && description.trim() !== '') {
          taskLogger.addTask(description.trim());
          taskInput.value = '';

          if (taskModal) {
            taskModal.style.display = 'none';
          }
        } else {
          alert('Task description cannot be empty');
        }
      })
    }
  };

  document.addEventListener('DOMContentLoaded', init);
}