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
            <div >
                <img id="title" src="\logo.png"  ></img>
            </div> 
            
              <ui>
                <a href="lobby.html" id="h2"><li>Player</li></a>
            </ui>
             
        </header>
    
        <main id="main">
            <div>
            <img id="logo" src="\logobranca.png"/>
            </div>
            <br></br>
            <form>
                <input type="text" placeholder="Paste your link here.." id ='searchbox'></input>
                <button onClick={Button} id="searchbotton">GO</button>
            </form>
           <div id="border-video" >
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