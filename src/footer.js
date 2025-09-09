import mail from "./images/icons/email-outline.svg";
import phone from "./images/icons/cellphone.svg";

export default function footer() {
    const footer = document.querySelector("footer");
    //const img = document.querySelector("footer img");
    const details = document.createElement("div")
    const h3 = document.createElement("h3")
    const catchphrase = document.createElement("div")
    const address = document.createElement("div")
    const emailContainer = document.createElement("div")
    const emailIcon = document.createElement("img")
    const email = document.createElement("div")
    const telephoneContainer = document.createElement("div")
    const telephoneIcon = document.createElement("img")
    const telephone = document.createElement("div")
    details.className = "details"
    h3.className = "CNT-ME"
    catchphrase.className = "catchphrase"
    address.className = "address"
    emailContainer.className = "email-container"
    emailIcon.className = "email-icon"
    email.className = "email"
    telephoneContainer.className = "telephone-container"
    telephoneIcon.className = "telephone-icon"
    telephone.className = "telephone"
    h3.textContent = "CONTACT-ME"
    catchphrase.textContent = "Please get in touch if you think our work could be mutually beneficial!"
    address.textContent = "1234 Random Road \n Random Town, California 12345"
    email.textContent ="emailofangel@dontexist.com"
    emailIcon.src = mail
    emailIcon.alt = "email logo"
    telephone.textContent ="333-333-333"
    telephoneIcon.src = phone
    telephoneIcon.alt = "phone logo"
    footer.appendChild(details)
    details.appendChild(h3)
    details.appendChild(catchphrase)
    details.appendChild(address)
    details.appendChild(emailContainer)
    emailContainer.appendChild(emailIcon)
    emailContainer.appendChild(email)
    details.appendChild(telephoneContainer)
    telephoneContainer.appendChild(telephoneIcon)
    telephoneContainer.appendChild(telephone)
}