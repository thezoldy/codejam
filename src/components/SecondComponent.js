function SecondComponent(){
    const Button = (Event) => {
        Event.preventDefault()
        navigator.clipboard.writeText(window.location.href);
        }
        // necessário criar 2nd page
    return (
    <body>
        <header id="cabecalho">
            <div >
                <img id="title" src="\logo.png"  ></img>
            </div> 
            <ui>
                <a href="lobby.html" id="home"><li>Home</li></a>
                <a href="myprofile.html" id="h2"><li>Podcast</li></a>
                <a href="search.html" id="h2"><li>Playlist</li></a>
                <a href="contact.html" id="h2"><li>My Profile</li></a>
            </ui>
        </header>

        

        <main id="main">

        <div>
            <img id="logo" src="\logobranca.png"/>
        </div>
        <br></br>
            <form>
                <button onClick={Button} id="buttonshare">Copy Link</button>
            </form>
           <div id="border-video">
                <iframe width="840" height="480" src='' id='linkador'
                allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
           </div>
        </main>
    </body>
    );
};

export default SecondComponent;