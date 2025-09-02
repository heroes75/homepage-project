import jisoo480w from "./images/jisoo1-480w.jpg";
import jisoo800w from "./images/jisoo1-898w.jpg";
import twitter from "./images/icons/twitter-original.svg"
import github from "./images/icons/github-original.svg"
import linkedin from "./images/icons/linkedin-original.svg"
const header = document.querySelector("header");
export default function headerInDOM() {
    const presentationContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");
    const h2 = document.createElement("h2")
    const iconContainer = document.createElement("div");
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const link3 = document.createElement("a");
    const icon1 = document.createElement("img");
    const icon2 = document.createElement("img");
    const icon3 = document.createElement("img");
    presentationContainer.className = "presentation-container";
    imgContainer.className = "image-container";
    img.src = jisoo800w;
    //img.srcset = `${jisoo480w} 480w, ${jisoo800w} 828w`;
    //img.sizes = "(width <= 600px) 480px, 828px";
    img.alt = "beautiful jisoo";
    img.className = "image-presentation";
    descriptionContainer.className = "description-container";
    description.className = "description";
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum doloribus delectus, reprehenderit obcaecati, non eligendi incidunt sed numquam quisquam quos voluptates fuga fugit. Optio vel numquam ullam placeat ea.";
    h2.textContent = "ABOUT ME"
    h2.className = "h2-of-header"
    iconContainer.className = "icon-container"
    icon1.src = github
    icon2.src = linkedin
    icon3.src = twitter
    icon1.alt = "icon of github"
    icon2.alt = "icon of linkedin"
    icon3.alt = "icon of twitter"
    icon1.className = "icon-of-header"
    icon2.className = "icon-of-header"
    icon3.className = "icon-of-header"
    link1.href = "https://github.com/"
    link2.href = "https://www.linkedin.com/"
    link3.href = "https://x.com/"
    link1.target = "_blank"
    link2.target = "_blank"
    link3.target = "_blank"
    link1.className = "link-of-header"
    link2.className = "link-of-header"
    link3.className = "link-of-header"
    header.appendChild(presentationContainer);
    presentationContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    presentationContainer.appendChild(descriptionContainer);
    descriptionContainer.appendChild(h2);
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(iconContainer)
    iconContainer.appendChild(link1)
    link1.appendChild(icon1)
    iconContainer.appendChild(link2)
    link2.appendChild(icon2)
    iconContainer.appendChild(link3)
    link3.appendChild(icon3)
}
