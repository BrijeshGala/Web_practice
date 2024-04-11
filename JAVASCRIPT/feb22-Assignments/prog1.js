
        var tasks = [];

        function addTask() {
            var category = document.getElementById("category").value;
            var taskName = document.getElementById("taskName").value;
            var pending = document.getElementById("pending").checked;
            var complete = document.getElementById("complete").checked;

            if (taskName) {
                var taskObj = {
                    category: category,
                    name: taskName,
                    pending: pending,
                    complete: complete
                };

                tasks.push(taskObj);
                updateTaskDetails();
            }
        }

        function updateTaskDetails() {
            var taskDetailsDiv = document.getElementById("taskDetails");
            taskDetailsDiv.innerHTML = ""; // Clear previous content

            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var taskDiv = document.createElement("div");
                taskDiv.innerHTML = '<p><strong>Category:</strong> ' + task.category + '</p>' +
                    '<p><strong>Name:</strong> ' + task.name + '</p>' +
                    '<p><strong>Status:</strong> ' +
                        '<input type="checkbox" ' + (task.pending ? 'checked' : '') + ' disabled> Pending' +
                        '<input type="checkbox" ' + (task.complete ? 'checked' : '') + ' disabled> Complete' +
                    '</p>' +
                    '<hr>';
                taskDetailsDiv.appendChild(taskDiv);
            }
        }

        function showDetails() {
            var taskDetailsSection = document.getElementById("taskDetailsSection");
            taskDetailsSection.innerHTML = ""; // Clear previous content

            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var taskDetailsDiv = document.createElement("div");
                taskDetailsDiv.innerHTML = '<p><strong>Category:</strong> ' + task.category + '</p>' +
                    '<p><strong>Name:</strong> ' + task.name + '</p>' +
                    '<p><strong>Status:</strong> ' +
                        '<input type="checkbox" ' + (task.pending ? 'checked' : '') + ' disabled> Pending' +
                        '<input type="checkbox" ' + (task.complete ? 'checked' : '') + ' disabled> Complete' +
                    '</p>' +
                    '<hr>';
                taskDetailsSection.appendChild(taskDetailsDiv);
            }
        }
    