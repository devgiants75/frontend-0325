{
    var TaskLogger_1 = /** @class */ (function () {
        function TaskLogger() {
            this.tasks = [];
            this.taskIdCounter = 0;
        }
        TaskLogger.prototype.addTask = function (description) {
            var newTask = {
                id: this.taskIdCounter++,
                description: description,
                timestamp: new Date()
            };
            this.tasks.push(newTask);
            this.renderTasks();
            return newTask;
        };
        TaskLogger.prototype.deleteTask = function (taskId) {
            this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
            this.renderTasks();
        };
        TaskLogger.prototype.createTaskElement = function (task) {
            var taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = "\n        <span>".concat(task.description, " - ").concat(task.timestamp.toLocaleString(), "</span>\n        <button data-task-id=\"").concat(task.id, "\">Delete</button>\n      ");
            return taskItem;
        };
        TaskLogger.prototype.renderTasks = function () {
            var _this = this;
            var taskList = document.getElementById('task-list');
            if (taskList) {
                taskList.innerHTML = '';
                this.tasks.forEach(function (task) {
                    var taskItem = _this.createTaskElement(task);
                    taskList.appendChild(taskItem);
                });
                this.addDeleteEventListeners();
            }
        };
        TaskLogger.prototype.addDeleteEventListeners = function () {
            var _this = this;
            var deleteButtons = document.querySelectorAll('.task-item button');
            deleteButtons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    var taskId = parseInt(e.target.dataset.taskId || '0', 10);
                    _this.deleteTask(taskId);
                });
            });
        };
        return TaskLogger;
    }());
    var init = function () {
        var taskLogger = new TaskLogger_1();
        var logTaskButton = document.getElementById('log-task-button');
        var taskModal = document.getElementById('task-modal');
        var closeModal = document.querySelector('.close');
        var addTaskButton = document.getElementById('add-task-button');
        var taskInput = document.getElementById('task-input');
        if (logTaskButton) {
            logTaskButton.addEventListener('click', function () {
                if (taskModal) {
                    taskModal.style.display = 'block';
                }
            });
        }
        if (closeModal) {
            closeModal.addEventListener('click', function () {
                if (taskModal) {
                    taskModal.style.display = 'none';
                }
            });
        }
        window.addEventListener('click', function (event) {
            if (event.target === taskModal) {
                if (taskModal) {
                    taskModal.style.display = 'none';
                }
            }
        });
        if (addTaskButton) {
            addTaskButton.addEventListener('click', function () {
                var description = taskInput.value;
                if (description && description.trim() !== '') {
                    taskLogger.addTask(description.trim());
                    taskInput.value = '';
                    if (taskModal) {
                        taskModal.style.display = 'none';
                    }
                }
                else {
                    alert('Task description cannot be empty');
                }
            });
        }
    };
    document.addEventListener('DOMContentLoaded', init);
}
