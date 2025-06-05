const container = document.querySelector(".sub.container");
const reset = document.querySelector(".reset");
const rescale = document.querySelector(".grid");
const text = document.querySelector(".text");
let gridSize = 16;
let boxs;

function gridSetup(){
    for (let i = 0; i < gridSize*gridSize; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.width = `calc(100% / ${gridSize})`;
        div.style.height = `calc(100% / ${gridSize})`;
        container.appendChild(div);
    }

    boxs = document.querySelectorAll(".box")
    boxs.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.classList.add("hover")
        })
    });
    text.textContent = gridSize + " x " + gridSize;
}

function clearGrid(){
    container.innerHTML = '';
}

reset.addEventListener("mouseover", () => {
    reset.style.cssText = "background-color: red;"
})

reset.addEventListener("mouseout", () => {
    reset.style.cssText = "background-color: lightcoral;"
})

reset.addEventListener("click", () => {
    boxs.forEach((box) => {
        box.classList.remove("hover");
    });
})

rescale.addEventListener("mouseover", () => {
    rescale.style.cssText = "background-color: green;"
})

rescale.addEventListener("mouseout", () => {
    rescale.style.cssText = "background-color: lightgreen;"
})

rescale.addEventListener("click", () => {
    let temp = parseInt(prompt("Enter a new grid size (1-100)"))
    while(temp > 100){
        alert("Error");
        temp = parseInt(prompt("Enter a new grid size (1-100)"));
    }
    gridSize = temp;
    clearGrid();
    gridSetup();
})

window.onload = gridSetup();
