const btn = document.querySelector("#searchbotton")
btn.addEventListener("click", function(event){
event.preventDefault()
const input = document.querySelector("#searchbox")
const link = input.value
const newcode = link.slice(32)
const newlink = `https://www.youtube.com/embed/${newcode}`
console.log(newlink)
document.getElementById("linkador").src = [newlink]
})