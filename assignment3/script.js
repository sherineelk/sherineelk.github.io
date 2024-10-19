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

let color = document.getElementById("color");
let createBtn = document.getElementById("create-btn");
let list = document.getElementById("list");
console.log(color);
console.log(createBtn);
console.log(list);

createBtn.onclick = () => {
  let newNote = document.createElement("div");
  newNote.classList.add("sticky-note");
  newNote.innerHTML = ` 
<span class="close"> x </span>
 <textarea placeholder="Write Content"></textarea>`;
  newNote.style.backgroundColor = color.value;
  list.appendChild(newNote);
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    event.target.parentNode.remove();
  }
});

const stickyNote = document.querySelector("sticky-note");
let offsetX, offsetY;

const move = (e) => {
  stickyNote.style.left = `${e.clientX - offsetX}+ px`;
  stickyNote.style.top = `${e.clientY - offsetY}+ px`;
};

stickyNote.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - stickyNoteoffsetLeft;
  offsetY = e.clientY - stickyNoteoffsetTop;
  document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener(mousemove, move);
});

// tutorial link:https://www.youtube.com/shorts/ogyTyL0SEko

// let cursor = {
//     x: null,
//     y: null
// }

// let note = {
//     dom: null,
//     x: null,
//     y: null
// }

// document.addEventListener('mousedown', (event) => {
//     if(event.target.classList.contains('note')){
//         cursor = {
//             x:event.clientX,
//             y: event.clientY,

//         }
//        note = {
//         dom: event.target,
//         x: event.target.getBoundingClientRect().left,
//         x: event.target.getBoundingClientRect().top
//        }
//     }
// })

// document.addEventListener('mousemove', (event) => {
//     if(note.dom == null) return;
//     let currentCursor = {
//         x: event.clientX,
//         y:event.clientY
//     }
//     let distance = {
//         x: currentCursor.x - cursor.x,
//         y: currentCursor.y - cursor.y
//     }
//     note.dom.style.left = (note.x + distance.x) + 'px';
//     note.dom.style.top = (note.x + distance.x) + 'px';
// })
// document.addEventListener('mouseup', () => {
//     note.dom = null;
// })

// tutorial used: https://www.youtube.com/watch?v=eLSs9h7cZy0&t
