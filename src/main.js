import github from "./images/icons/github-original.svg";
import externLink from "./images/icons/open-in-new.svg";

export default function main() {
    const main = document.querySelector("main")
    const buttonPrev = document.createElement("button")
    const buttonNext = document.createElement("button")
    buttonPrev.className = "btn-prev"
    buttonNext.className = "btn-next"
    
}

function section(linkGit, linkLive, des, container) {
    const frame = document.querySelector("div");
    const photo = document.querySelector("div");
    const repoContainer = document.querySelector("div")
    const link1 = document.createElement("a")
    const link2 = document.createElement("a")
    const img1 = document.createElement("img")
    const img2 = document.createElement("img")
    const description = document.querySelector("div")
    frame.className = "frame"
    photo.className = "photo-of-project"
    repoContainer.className = "repo-container"
    link1.className = "project-link"
    link2.className = "project-link"
    img1.className = "icon-of-project"
    img2.className = "icon-of-project"
    img1.src = github
    img2.src = externLink
    img1.alt = "repo link"
    img2.src = "live preview link"
    description.className = "description-project"
    link1.href = linkGit
    link2.href = linkLive
    des.textContent = "des"
    container.appendChild(frame)
    frame.appendChild(photo)
    frame.appendChild(repoContainer)
    repoContainer.appendChild(link1)
    repoContainer.appendChild(link2)
    link1.appendChild(img1)
    link2.appendChild(img2)

}