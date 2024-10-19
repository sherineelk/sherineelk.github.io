// let newX = 0,
//   newY = 0,
//   startX = 0,
//   startY = 0;

// const stickyNote = document.getElementById("sticky-note");

// stickyNote.addEventListener("mousedown", mouseDown);

// function mouseDown(e) {
//   startX = e.clientX;
//   startY = e.clientY;

//   document.addEventListener("mousemove", mouseMove);
//   document.addEventListener("mouseup", mouseUp);
// }

// function mouseMove(e) {
//   newX = startX - e.clientX;
//   newY = startY - e.clientY;

//   startX = e.clientX;
//   startY = e.clientY;

//   stickyNote.style.top = stickyNote.offsetTop - newY + "px";
//   stickyNote.style.left = stickyNote.offsetLeft - newX + "px";
// }

// function mouseUp(e) {
//   document.removeEventListener("mousemove", mouseMove);
// }

// got this segment of coding from this tutorial, https://www.youtube.com/watch?v=ymDjvycjgUM //

const task = document.querySelectorAll(".task");
console.log(task);

const swimLane = document.querySelectorAll(".swim-lane");
console.log(swimLane);

task.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

swimLane.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};

// tutorial used: https://www.youtube.com/watch?v=ecKw7FfikwI&list=LL&index=3
