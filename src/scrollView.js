export default function scroll() {
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const line = document.createElement("div")
    line.className = "line"
    body.insertBefore(line, header)
}