// Coding for drag and drop function in the organising section
// The organizing section is intended to be more orderly with straight edges for the swimlanes and a more rigid typeface, which matches the restrictive drag and drop function used.
//I decided to go for a minimal backdrop to give more emphasis to the tasks and to match the brainstorming section.

// Unlike the dropbox tutorial we learned in class, I wanted the task card to be transported between the different swimlanes without disappearing, so I followed this tutorial (https://www.youtube.com/watch?v=ecKw7FfikwI).
// This tutorial also had an add task function, but i couldn't get it to work. This along with my revised intention to keep this website just about the dragging, I decided to omit this feature.

// The tutorial also did a draggable class to simulate a draggable function, but it doesn’t seem to work smoothly due to the platform’s constraints, so I added a hover pseudo class to make the transition work smoother.

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

//I found a tutorial on Youtube ( https://www.youtube.com/watch?v=eLSs9h7cZy0&t ) which I initially followed because I had hoped to implement an add button.
// However after trying to debug using chatgpt and trying to look up online forums for help, I ultimately decided to just focus on the drag and drop aspect of my website, and asked chat GPT to help draft up a code that allows dragging elements within a class instead of just one.
//Now that the user couldn't add notes I also removed the delete button since it didn't make sense to allow them to delete the sticky notes then have to refresh the page to have to get new ones.
// I had also hoped that the user would be able to type into the sticky notes as well, as if almost encouraging them to brainstorm.
// However, the drag function was being interrupted by the textarea, so as a compromise I wrote tasks on the sticky notes to give more context to the overall site.

//I needed to also ensure that the sticky notes stay within the boundaries of the brainstorming section.
//I couldn't find a tutorial that fit my exact context of constraining multiple freely draggable elements to a div element, so I asked chat GPT to help me to improve on the code.

const stickyNotes = document.querySelectorAll(".sticky-note");
const container = document.getElementById("container");
const containerBoundary = container.getBoundingClientRect();

stickyNotes.forEach((stickyNote) => {
  addDraggingFunctionality(stickyNote);
});

function addDraggingFunctionality(stickyNote) {
  let offsetX, offsetY;

  const move = (e) => {
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + stickyNote.offsetWidth > containerBoundary.width) {
      newLeft = containerBoundary.width - stickyNote.offsetWidth;
    }
    if (newTop + stickyNote.offsetHeight > containerBoundary.height) {
      newTop = containerBoundary.height - stickyNote.offsetHeight;
    }

    stickyNote.style.left = `${newLeft}px`;
    stickyNote.style.top = `${newTop}px`;
  };

  //When dragging the sticky notes around I noticed that they would overlap and it would be hard to discern which sticky note I was clicking on, so I added a box shadow.
  // This then encouraged me to add a z-axis function to my mouseover event, so that the sticky note would be brought to the front when selected.
  //I thought this feature would be especially helpful when implemented into a proper brainstorming website, as there would be countless ideas to sift through

  stickyNote.addEventListener("mousedown", (e) => {
    e.preventDefault();
    stickyNote.style.zIndex = 2;

    // I did initially have trouble with the initial code though, and when I showed my code to a friend she suggested this if statement, and it seems to be working fine now.

    stickyNotes.forEach((note) => {
      if (note !== stickyNote) {
        note.style.zIndex = 1;
      }
    });

    offsetX = e.clientX - stickyNote.getBoundingClientRect().left;
    offsetY = e.clientY - stickyNote.getBoundingClientRect().top;

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  });
}
