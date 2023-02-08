import React, {useState, useEffect} from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent'

function App() {
  const [pagina, setPagina] = useState(1)

  useEffect(()=>{
    const url = window.location.href //global
    const res = url.split('?')
    const code = res[1]
    if (code == 'home1'){
      setPagina(1)
    }else if(code == 'home2'){
      setPagina(2)
    }
  }
  )

  const LinkPaginas=(p)=>{
    if (p==1){
      window.open('http://localhost:3000?home1', '_self')
    }
    else if(p==2){
      window.open('http://localhost:3000?home2', '_self')
    }
  }

  const GoLink = () => {
    if(pagina==1){
      return <div>
            <FirstComponent/>
            <div id="share">
             <button onClick={()=>LinkPaginas(2)} id="sharebutton">Share</button>
             </div>
            </div> 
    }else if(pagina==2){
      return  <div>
              <SecondComponent/>
              <div id="back">
                <button onClick={()=>LinkPaginas(1) } id="backbutton">Voltar</button>
              </div>
              </div>
    }
    }
  
  return (
    <>
    {GoLink()}
    </>
  );
}

export default App;