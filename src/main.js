import github from "./images/icons/github-original.svg";
import externLink from "./images/icons/open-in-new.svg";
import triangleLeft from "./images/icons/triangle-left.svg";
import triangleRight from "./images/icons/triangle-right.svg";
export default function main() {
    const main = document.querySelector("main");
    const carousel = document.createElement("div");
    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    const iconLeft = document.createElement("img");
    const iconRight = document.createElement("img");
    const angle = 360 / 6;
    const apothem = 230 / (2 * Math.tan(Math.PI / 6));
    buttonPrev.classList.add("btn-prev", "btn");
    buttonNext.classList.add("btn-next", "btn");
    iconLeft.src = triangleLeft;
    iconRight.src = triangleRight;
    iconLeft.alt = "button back";
    iconRight.alt = "button next";
    iconLeft.className = "icon-nav";
    iconRight.className = "icon-nav";
    carousel.className = "carousel";

    for (let i = 0; i < 6; i++) {
        const box = section(
            "#",
            "#",
            `name${i + 1}`,
            "dcsddas",
            carousel,
            `box${i}`,
        );
        box.style.cssText = `transform: rotateY(${angle * i}deg) translateZ(${apothem}px);`;
    }
    main.appendChild(carousel);
    main.appendChild(buttonPrev);
    buttonPrev.appendChild(iconLeft);
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
