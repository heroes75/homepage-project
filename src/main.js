import github from "./images/icons/github-original.svg";
import externLink from "./images/icons/open-in-new.svg";
import triangleLeft from "./images/icons/triangle-left.svg";
import triangleRight from "./images/icons/triangle-right.svg";
import triangleUp from "./images/icons/triangle-up.svg";
import triangleDown from "./images/icons/triangle-down.svg";
export default function main() {
    const main = document.querySelector("main");
    const carousel = document.createElement("div");
    const scene = document.createElement("div");
    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    const iconLeft = document.createElement("img");
    const iconRight = document.createElement("img");
    const nbrOfElement = 6;
    const angle = 360 / nbrOfElement;
    const apothemHorizontal = 230 / (2 * Math.tan(Math.PI / nbrOfElement));
    const apothemVertical = 490 / (2 * Math.tan(Math.PI / nbrOfElement));
    const mobile = window.matchMedia("(max-width: 500px)");
    const projectArray = []
    buttonPrev.classList.add("btn-prev", "btn");
    buttonNext.classList.add("btn-next", "btn");
    iconLeft.src = triangleLeft;
    iconRight.src = triangleRight;
    iconLeft.alt = "button back";
    iconRight.alt = "button next";
    iconLeft.className = "icon-nav";
    iconRight.className = "icon-nav";
    carousel.className = "carousel";
    scene.className = "scene";
    let deg = 0;
    carousel.style.transform = `translateZ(${apothemHorizontal * -1}px) rotateY(${deg}deg)`;
   

    function resize() {
        if (mobile.matches) {
            iconLeft.src = triangleUp;
            iconRight.src = triangleDown;
            main.style.cssText = "flex-direction: column;"
            scene.style.cssText = "align-self: center"
            console.log(projectArray);
            
           projectArray.forEach((el, i) => {
            el.style.cssText = `transform: rotateX(${angle * i}deg) translateZ(${apothemVertical}px);`;
            
           })

            carousel.style.transform = `translateZ(${apothemVertical * -1}px) rotateX(${deg}deg)`;
            buttonPrev.onclick =  () => {
                carousel.style.transform = `translateZ(${apothemVertical * -1}px) rotateX(${(deg = deg - angle)}deg)`;
            };
            buttonNext.onclick = ()  => {
                carousel.style.transform = `translateZ(${apothemVertical * -1}px) rotateX(${(deg = deg + angle)}deg)`;
            };
        } else {
            main.style.cssText = "flex-direction: row;"
            scene.style.cssText = "align-self: stretched"

            projectArray.forEach((el, i) => {
            el.style.cssText = `transform: rotateY(${angle * i}deg) translateZ(${apothemHorizontal}px);`;
           })

            carousel.style.transform = `translateZ(${apothemHorizontal * -1}px) rotateY(${deg}deg)`;
            buttonPrev.onclick = () => {
                carousel.style.transform = `translateZ(${apothemHorizontal * -1}px) rotateY(${(deg = deg - angle)}deg)`;
            };
            buttonNext.onclick = () => {
                carousel.style.transform = `translateZ(${apothemHorizontal * -1}px) rotateY(${(deg = deg + angle)}deg)`;
            };
            iconLeft.src = triangleLeft;
            iconRight.src = triangleRight;
        }
    }
    for (let i = 0; i < nbrOfElement; i++) {
        const box = section(
            "#",
            "#",
            `name ${i + 1}`,
            "description of project " + +(i + 1),
            carousel,
            `box${i + 1}`,
        );
        projectArray.push(box)
    }
    resize();
    window.addEventListener("resize", () => {
        resize()
    })
    main.appendChild(buttonPrev);
    buttonPrev.appendChild(iconLeft);
    main.appendChild(scene);
    scene.appendChild(carousel);
    main.appendChild(buttonNext);
    buttonNext.appendChild(iconRight);
}

function section(linkGit, linkLive, name, des, container, specialClass) {
    const frame = document.createElement("div");
    const photo = document.createElement("div");
    const repoContainer = document.createElement("div");
    const linkProjectContainer = document.createElement("div");
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const projectName = document.createElement("span");
    const description = document.createElement("div");
    frame.classList.add("frame", specialClass);
    photo.className = "photo-of-project";
    repoContainer.className = "repo-container";
    linkProjectContainer.className = "link-project-container";
    link1.className = "project-link";
    link2.className = "project-link";
    img1.className = "icon-of-project";
    img2.className = "icon-of-project";
    projectName.className = "project-name";
    img1.src = github;
    img2.src = externLink;
    img1.alt = "repo link";
    img2.alt = "live preview link";
    description.className = "description-project";
    link1.href = linkGit;
    link2.href = linkLive;
    description.textContent = des;
    projectName.textContent = name;
    container.appendChild(frame);
    frame.appendChild(photo);
    frame.appendChild(repoContainer);
    frame.appendChild(description);
    repoContainer.appendChild(projectName);
    repoContainer.appendChild(linkProjectContainer);
    linkProjectContainer.appendChild(link1);
    linkProjectContainer.appendChild(link2);
    link1.appendChild(img1);
    link2.appendChild(img2);

    return frame;
}
