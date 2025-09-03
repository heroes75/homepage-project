import jisoo480w from "./images/jisoo1-480w.jpg";
import jisoo800w from "./images/jisoo1-898w.jpg";
import twitter from "./images/icons/twitter-original.svg";
import github from "./images/icons/github-original.svg";
import linkedin from "./images/icons/linkedin-original.svg";
const header = document.querySelector("header");
export default function headerInDOM() {
    const presentationContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const nameOfImage = document.createElement("div");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const iconContainer = document.createElement("div");
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const link3 = document.createElement("a");
    const icon1 = document.createElement("img");
    const icon2 = document.createElement("img");
    const icon3 = document.createElement("img");
    const mobile = window.matchMedia("(max-width: 500px)");
    console.log(mobile.matches);
    const tablet = window.matchMedia(
        "((max-width: 1200px) and (min-width: 501px))",
    );
    const laptop = window.matchMedia("(min-width: 1201px)");
    presentationContainer.className = "presentation-container";
    imgContainer.className = "image-container";
    img.src = jisoo800w;
    //img.srcset = `${jisoo480w} 480w, ${jisoo800w} 828w`;
    //img.sizes = "(width <= 500px) 480px, 828px";
    img.alt = "beautiful jisoo";
    img.className = "image-presentation";
    nameOfImage.textContent = "Kim JISOO";
    nameOfImage.className = "name";
    descriptionContainer.className = "description-container";
    description.className = "description";
    p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum doloribus delectus, reprehenderit obcaecati, non eligendi incidunt sed numquam quisquam quos voluptates fuga fugit. Optio vel numquam ullam placeat ea." +
        " Saepe quia eligendi aperiam ipsa sequi alias esse? Illo accusantium dolorem, magni rerum deleniti amet? Laborum adipisci, quo ipsa dolorum ut molestias!" +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, impedit? Minima qui illo laboriosam sequi maiores in, dolor veniam repellendus quidem iste? Repudiandae delectus maxime minus vero incidunt et eum?";
    h2.textContent = "ABOUT ME";
    h2.className = "h2-of-header";
    iconContainer.className = "icon-container";
    icon1.src = github;
    icon2.src = linkedin;
    icon3.src = twitter;
    icon1.alt = "icon of github";
    icon2.alt = "icon of linkedin";
    icon3.alt = "icon of twitter";
    icon1.className = "icon-of-header";
    icon2.className = "icon-of-header";
    icon3.className = "icon-of-header";
    link1.href = "https://github.com/";
    link2.href = "https://www.linkedin.com/";
    link3.href = "https://x.com/";
    link1.target = "_blank";
    link2.target = "_blank";
    link3.target = "_blank";
    link1.className = "link-of-header";
    link2.className = "link-of-header";
    link3.className = "link-of-header";
    function resize() {
        if (mobile.matches) {
            presentationContainer.style.flexDirection = "column";
            presentationContainer.style.paddingTop = "150px";
            descriptionContainer.style.cssText = "padding: 20px";
            iconContainer.style.cssText = "justify-self: center; padding: 15px";
        }

        if (tablet.matches) {
            description.appendChild(imgContainer);
            description.appendChild(h2);
            h2.style.display = "flex";
            description.style.cssText = "min-width: 300px; margin: 10px 0 0 0";
            imgContainer.style.cssText =
                "float: left; margin: -120px 15px 0 -80px; padding: 0; shape-outside: margin-box;";
            //descriptionContainer.style.cssText = "padding-top: -450px;"
            presentationContainer.style.cssText =
                "padding:  45px 0 0 0; margin: 50px 0 0 0";
            p.style.cssText = "line-height: 1.2;";
            nameOfImage.style.cssText =
                "top: 1%; left: 95%; text-align: center; display: block; min-width: 65%; font-size: 30px";
            img.style.cssText = "height: 45vh";
            header.style.cssText = "padding: 190px 45px 0 75px";
        } else {
            presentationContainer.appendChild(imgContainer);
            descriptionContainer.appendChild(h2);
        }

        if(laptop.matches) {

        }
        header.appendChild(presentationContainer);
        imgContainer.appendChild(img);
        imgContainer.appendChild(nameOfImage);
        presentationContainer.appendChild(descriptionContainer);
        descriptionContainer.appendChild(description);
        descriptionContainer.appendChild(iconContainer);
        description.appendChild(p);
        iconContainer.appendChild(link1);
        link1.appendChild(icon1);
        iconContainer.appendChild(link2);
        link2.appendChild(icon2);
        iconContainer.appendChild(link3);
        link3.appendChild(icon3);
    }
    window.addEventListener("resize", () => {
        resize();
    });

    resize();
}
