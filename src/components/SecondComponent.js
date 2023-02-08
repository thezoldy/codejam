function SecondComponent(){
    const Button = (Event) => {
        Event.preventDefault()
        navigator.clipboard.writeText();
        }
        // necessário criar 2nd page
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
            <form>
                <button onClick={Button} id="buttonshare">Copy Link</button>
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

export default SecondComponent;