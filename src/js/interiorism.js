let parametric;
let node = document.createElement("p");
node.classList.add("parametric");
let root = document.getElementsByTagName("body")[0];
root.append(node);
let x;
let y;
document.addEventListener('mousemove', (e) => {
    x = e.clientX + 20;
    y = e.clientY - 20;
    node.style.top = `${y}px`;
    node.style.left = `${x}px`;
    node.textContent = `${x},${y}`;
});
let cards = document.getElementsByClassName("card");
Array.from(cards).forEach(element => {
    element.addEventListener('mouseover', (e) => {
        node.style.color = "red";
    })
});
Array.from(cards).forEach(element => {
    element.addEventListener('mouseout', (e) => {
        node.style.color = "grey";
    })
});