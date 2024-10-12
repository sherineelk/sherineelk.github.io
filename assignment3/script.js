let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

const stickyNote = document.getElementById("sticky-note");

stickyNote.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  stickyNote.style.top = stickyNote.offsetTop - newY + "px";
  stickyNote.style.left = stickyNote.offsetLeft - newX + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}

// got this segment of coding from this tutorial, https://www.youtube.com/watch?v=ymDjvycjgUM //
