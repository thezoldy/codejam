function Forms() {
    const Button = (Event) => {
        Event.preventDefault()
        const input = document.querySelector("#searchbox")
        const link = input.value 
        const newcode = link.slice(32) // global
        const newlink = `https://www.youtube.com/embed/${newcode}` //global
        console.log(newlink)
        document.getElementById("linkador").src = [newlink]}

    return (
        <body>
            <main>
                <form>
                    <input type="text" placeholder="Paste your link here.." id ='searchbox'></input>
                    <button onClick={Button} id="searchbotton">GO</button>
                </form>
            </main>
        </body>
        )
    
}

export default Forms;