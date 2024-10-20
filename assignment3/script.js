// coding for drag and drop for orgnaising section, tutorial source: https://www.youtube.com/watch?v=ecKw7FfikwI&list=LL&index=3
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

//code to add task to organising, used same tutorial as drag and drop (https://www.youtube.com/watch?v=ecKw7FfikwI&list=LL&index=3)
// const form = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const todoLane = document.getElementById("todo-lane");

// form.addEventListener("submit-btn", (e) => {
//   e.preventDefault();
//   const value = input.value;

//   if (!value) return;

//   const newTask = document.createElement("p");
//   newTask.classList.add("task");
//   newTask.setAtrribute("draggable", "true");
//   newTask.innerText = value;
// });

//create sticky note function

// let color = document.getElementById("color");
// let createBtn = document.getElementById("create-btn");
// let list = document.getElementById("list");
// console.log(color);
// console.log(createBtn);
// console.log(list);

// createBtn.onmousedown = (e) => {
//   createNewStickyNote();
// };

// function createNewStickyNote() {
//   let newNote = document.createElement("div");
//   newNote.classList.add("sticky-note");
//   newNote.innerHTML = `
// <span class="close"> x </span>
//  <textarea placeholder="Write Content"></textarea>`;
//   newNote.style.backgroundColor = color.value;
//   newNote.style.position = "absolute";

//   newNote.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
//   newNote.style.top = `${Math.random() * (window.innerHeight - 200)}px`;

//   list.appendChild(newNote);

//   move(newNote);
// }

// // createBtn.onmousedown = (e) => {
// //   console.log("Create Button Pressed");
// //   e.preventDefault();
// //   createNewStickyNote();
// // };

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("close")) {
//     event.target.parentNode.remove();
//   }
// });

// // tutorial used: https://www.youtube.com/watch?v=eLSs9h7cZy0&t

// const stickyNote = document.querySelector(".sticky-note");
// let offsetX, offsetY;

// const move = (e) => {
//   stickyNote.style.left = `${e.clientX - offsetX}px`;
//   stickyNote.style.top = `${e.clientY - offsetY}px`;
// };

// stickyNote.addEventListener("mousedown", (e) => {
//   offsetX = e.clientX - stickyNote.offsetLeft;
//   offsetY = e.clientY - stickyNote.offsetTop;
//   document.addEventListener("mousemove", move);
//   document.addEventListener(
//     "mouseup",
//     () => {
//       document.removeEventListener("mousemove", move);
//     },
//     { once: true }
//   );
// });

const stickyNotes = document.querySelectorAll(".sticky-note");

stickyNotes.forEach((stickyNote) => {
  addDraggingFunctionality(stickyNote);
});

function addDraggingFunctionality(stickyNote) {
  let offsetX, offsetY;

  const move = (e) => {
    stickyNote.style.left = `${e.clientX - offsetX}px`;
    stickyNote.style.top = `${e.clientY - offsetY}px`;
  };

  stickyNote.addEventListener("mousedown", (e) => {
    e.preventDefault();
    offsetX = e.clientX - stickyNote.getBoundingClientRect().left;
    offsetY = e.clientY - stickyNote.getBoundingClientRect().top;

    document.addEventListener("mousemove", move);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", move);
      },
      { once: true }
    );
  });
}

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("close")) {
//     event.target.parentNode.remove();
//   }
// });

// tutorial used: https://www.youtube.com/watch?v=eLSs9h7cZy0&t
// initally used this tutorial to base my coding off of because i was hoping to get a add stickynote function working,
// however after trying to debugging and doublechecking with chatgpt, i couldnt get it to work as it would either reset a preexisting stickynote or flash on the screen before dissapearing.
// Instead i decided to just exculisvely focus on how the drag function helps with my context, and asked chatgpt to write me a simple function at allows me to drag multiple sticky notes.
// I also initially wanted to include an add task function for the organising section of the since the tutorial i was following also covered that topic, however i could not get it to work and could just try to create a new sticky note.
