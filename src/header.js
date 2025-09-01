import jisoo480w from "./images/jisoo1-480w.JPG";
import jisoo898w from "./images/jisoo1-898w.JPG";
const header = document.querySelector("header");
export default function headerInDOM() {
    const presentationContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");
    presentationContainer.className = "presentation-container";
    imgContainer.className = "image-container";
    img.src = `${jisoo898w}`;
    img.srcset = `${jisoo480w} 500w, ${jisoo898w} 800w`;
    img.sizes = `(max-width: 600px) 480px, 1000px`;
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
