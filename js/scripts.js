// for youtube
const btn = document.querySelector("#searchbotton")
btn.addEventListener("click", function(event){
event.preventDefault()
navigationPreload: false    
const input = document.querySelector("#searchbox")
const link = input.value
const newcode = link.slice(32)
const newlink = `https://www.youtube.com/embed/${newcode}`
console.log(newlink)
document.getElementById("linkador").src = [newlink]
})

//for sharepoint