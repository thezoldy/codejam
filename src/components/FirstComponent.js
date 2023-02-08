function FirstComponent(){
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
        <header id="cabecalho">
            <div id="title">
                <h1>ExxonMobil</h1>
            </div> 
            
            <ui>
                <a href="lobby.html" id="home"><li>Home</li></a>
                <a href="myprofile.html"><li>My Profile</li></a>
                <a href="search.html"><li>Search</li></a>
                <a href="contact.html"><li>About</li></a>
            </ui>
        </header>
        <>
            <h3>ExPlay</h3>
        </>
        <main>
            <div>
                
            </div>
            <form>
                <input type="text" placeholder="Paste your link here.." id ='searchbox'></input>
                <button onClick={Button} id="searchbotton">Go</button>
            </form>
           <div>
                <iframe width="840" height="480" src='' id='linkador'
                allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
           </div>
        </main>
    </body>
    );
};

export default FirstComponent;