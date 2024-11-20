document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll("li");

    tasks.forEach(task => {
        task.addEventListener("click", () => {
            // Toggle the 'completed' class for the task
            task.classList.toggle("completed");
        });
    });
});
