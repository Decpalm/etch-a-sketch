const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++){
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
}

const boxs = document.querySelectorAll(".box")

boxs.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.classList.add("hover")
    })
});
