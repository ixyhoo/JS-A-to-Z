let item;

document.addEventListener("dragstart", (e) => {
    item = e.target;
});

document.addEventListener("dragover", (e) => {
    e.preventDefault();
});

document.addEventListener("drop", (e) => {
    if (e.target.getAttribute("data-draggable") == "target"){

        e.preventDefault();
        e.target.append(item);
    }
});

document.addEventListener("dragend", (e) => (item = null));