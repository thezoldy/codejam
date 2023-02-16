function Header() {

    return (
        <body>
            <header>
                <div id="title">
                    <img src="logo.png" width='150px' id="logotitle"></img>
                </div> 
                
                <ui id="itens">
                    <a href="lobby.html" id="home"><li>Home</li></a>
                    <a href="myprofile.html"><li>My Profile</li></a>
                    <a href="search.html"><li>Search</li></a>
                    <a href="contact.html"><li>About</li></a>
                </ui>
            </header>
        </body>
        ) 
}

export default Header;