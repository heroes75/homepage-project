import github from "./images/icons/github-original.svg";
import externLink from "./images/icons/open-in-new.svg";

export default function main() {
    const main = document.querySelector("main");
    const carousel = document.createElement("div")
    const buttonPrev = document.createElement("button");
    const buttonNext = document.createElement("button");
    const angle = 360 / 6
    const apothem = 330 / 2 * Math.tan(Math.PI / 6)
    buttonPrev.className = "btn-prev";
    buttonNext.className = "btn-next";
    carousel.className = "caroussel";
    for (let i = 0; i < 6; i++) {
        const box = section("#", "#", "name",  "dcsddas", carousel, `box${i}`);
        //const box = document.querySelector(`.box${i}`)
        console.log(box);
        
        box.style.cssText = `transform: rotateY(${angle * i}deg) translateZ(${apothem}px);`

    }
    main.appendChild(carousel)
}

function section(linkGit, linkLive, name, des, container, specialClass) {
    const frame = document.createElement("div");
    const photo = document.createElement("div");
    const repoContainer = document.createElement("div");
    const linkProjectContainer = document.createElement("div")
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const projectName = document.createElement("span");
    const description = document.createElement("div");
    frame.classList.add("frame", specialClass);
    photo.className = "photo-of-project";
    repoContainer.className = "repo-container";
    linkProjectContainer.className = "link-project-container"
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
    projectName.textContent = name
    container.appendChild(frame);
    frame.appendChild(photo);
    frame.appendChild(repoContainer);
    frame.appendChild(description);
    repoContainer.appendChild(projectName)
    repoContainer.appendChild(linkProjectContainer)
    linkProjectContainer.appendChild(link1);
    linkProjectContainer.appendChild(link2);
    link1.appendChild(img1);
    link2.appendChild(img2);
     
    return frame
}
