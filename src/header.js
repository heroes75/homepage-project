import jisoo800w from "./images/jisoo1-898w.jpg";
import twitter from "./images/icons/twitter-original.svg";
import github from "./images/icons/github-original.svg";
import linkedin from "./images/icons/linkedin-original.svg";
import moon from "./images/icons/weather-night.svg";
import sun from "./images/icons/white-balance-sunny.svg";
const header = document.querySelector("header");
export default function headerInDOM() {
    const headerBg = document.createElement("div")
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
    const button = document.createElement("button");
    const imagesOfButton = document.createElement("div");
    const face = document.createElement("img");
    const intermediateImage = document.createElement("div");
    const back = document.createElement("img");
    const root = document.querySelector(":root");
    const preferredColor = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    const mobile = window.matchMedia("(max-width: 500px)");
    const tablet = window.matchMedia(
        "((max-width: 1100px) and (min-width: 501px))",
    );
    const laptop = window.matchMedia("(min-width: 1101px)");
    headerBg.className = "header__bg"
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
    button.classList.add("icon-of-header", "button-toggle");
    face.className = "face";
    back.className = "back";
    imagesOfButton.className = "images-of-button";
    face.alt = "sun";
    back.alt = "moon";

    intermediateImage.className = "intermediate-Image";
    if(preferredColor.matches) {
        face.src = moon;
        back.src = sun;
    } else {
        face.src = sun;
        back.src = moon;
    }
    if (currentTheme === "light") {
        face.src = sun;
        back.src = moon;
        root.classList.toggle("light-theme");
    } else if (currentTheme === "dark") {
        root.classList.toggle("dark-theme");
        face.src = moon;
        back.src = sun;
    }
    button.addEventListener("click", () => {
        imagesOfButton.classList.toggle("is-flipped");
        if (preferredColor.matches) {
            root.classList.toggle("light-theme");
            var theme = root.classList.contains("light-theme")
                ? "light"
                : "dark";
        } else {
            root.classList.toggle("dark-theme");
            var theme = root.classList.contains("dark-theme")
                ? "dark"
                : "light";
        }
        localStorage.setItem("theme", theme);
    });
    function resize() {
        if (mobile.matches) {
            presentationContainer.style.flexDirection = "column";
            presentationContainer.style.justifyContent = "center";
            descriptionContainer.style.cssText = "padding: 20px; ";
            iconContainer.style.cssText = "justify-self: center; padding: 15px";
            description.style.cssText = "min-width: auto; margin: 0";
            imgContainer.style.cssText = "float: none";
            imgContainer.style.cssText =
                "float: none; margin:0; shape-outside: none";
            p.style.cssText = "line-height: 1.5;";
            nameOfImage.style.cssText =
                "top: 90%; left: calc(50% - 42px * 2); font-size: 25px";
            img.style.cssText = "height: 67vh; object-fit: contain";
            header.style.cssText =
                "padding-top: 100px; display: flex; justify-content: center";
        }

        if (tablet.matches) {
            description.appendChild(imgContainer);
            description.appendChild(h2);
            description.style.cssText = "min-width: 300px; margin: 10px 0 0 0";
            imgContainer.style.cssText =
                "float: left; margin: -120px 15px 0 -80px; padding: 0; shape-outside: margin-box;";
            presentationContainer.style.cssText =
                "padding:  15px 0 0 0; margin: 20px 0 0 0";
            p.style.cssText = "line-height: 1.2;";
            nameOfImage.style.cssText =
                "top: 1%; left: 95%; text-align: center; display: block; min-width: 158px; font-size: 30px";
            img.style.cssText = "height: 45vh";
            header.style.cssText = "padding: 190px 45px 0 75px";
        } else {
            presentationContainer.appendChild(imgContainer);
            descriptionContainer.appendChild(h2);
        }

        if (laptop.matches) {
            header.style.cssText = "padding: 50px 21px 0 21px";
            presentationContainer.style.cssText =
                "margin: 0; padding: 0; flex-direction: row";
            description.style.cssText = "min-width: auto; margin: 0";
            descriptionContainer.style.cssText = "padding: 40px; margin: 0";
            iconContainer.style.cssText = "align-items: center; padding: 30px";
            imgContainer.style.cssText =
                "float: none; margin:0; shape-outside: none";
            p.style.cssText = "line-height: 1.5;";
            nameOfImage.style.cssText =
                "top: 90%; left: calc(50% - 42px * 2); font-size: 42px";
            img.style.cssText = "height: 80vh";
        }
        header.appendChild(headerBg);
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
        iconContainer.appendChild(button);
        button.appendChild(imagesOfButton);
        imagesOfButton.appendChild(back);
        imagesOfButton.appendChild(intermediateImage);
        imagesOfButton.appendChild(face);
    }
    window.addEventListener("resize", () => {
        resize();
    });

    resize();
}
