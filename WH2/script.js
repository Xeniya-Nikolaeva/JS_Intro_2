// get div element into another element


const correctDiv = document.querySelector("div > div");
correctDiv.addEventListener("mouseover", () => {
   correctDiv.style.background = "green"; 
});
correctDiv.addEventListener("mouseout", () => {
    correctDiv.style.background = "red";
});

/*
//get all div from document
const allDiv = document.querySelectorAll("div");
for (let i = 0; i < allDiv.length; i++)
{
    let element = allDiv[i];
    element.addEventListener("mouseover", () => {
        element.style.border = "5px solid black";
    });
    element.addEventListener("mouseout", () => {
        element.style.border = "0px solid black";
    });
}

document.querySelector */