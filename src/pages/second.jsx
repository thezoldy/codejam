import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";

function Home(){
    const Button = (Event) => {
        Event.preventDefault()
        const input = document.querySelector("#searchbox")
        const link = input.value
        const newcode = link.slice(32)
        const newlink = `https://www.youtube.com/embed/${newcode}`
        console.log(newlink)
        document.getElementById("linkador").src = [newlink]}
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
            <h3>EM PLAY</h3>
            </>
        <main>
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

export default Home;