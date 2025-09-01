import jisoo480w from "./images/jisoo1-480w.JPG";
import jisoo800w from "./images/jisoo1-898w.JPG";
const header = document.querySelector("header");
export default function headerInDOM() {
    const presentationContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");
    presentationContainer.className = "presentation-container";
    imgContainer.className = "image-container";
    img.src = jisoo480w;
    img.srcset = `${jisoo480w} 480w, ${jisoo800w} 800w`;
    img.sizes = "(width <= 600px) 480px, 800px";
    img.alt = "beautiful jisoo";
    img.className = "image-container";
    descriptionContainer.className = "description-container";
    description.className = "description";
    description.textContent = "lorem ipsum";
    header.appendChild(presentationContainer);
    presentationContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    descriptionContainer.appendChild(description);
}
