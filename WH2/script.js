const allDiv = document.querySelectorAll("div");
for (let i = 0; i < allDiv.length; i++)
{
    let element = allDiv[i];
    element.addEventListener("mouseover", () => {
        element.style.border = "border-width: thick; border-style: double;border-color: blueviolet";
        element.style.backgroundColor = "blue";
        
    });
    element.addEventListener("mouseout", () => {
        element.style.border = "border-width: medium; border-style: double;border-color: blueviolet";
        element.style.background = "#15be0f";
    });
    
}
