import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyApp from './MyApp.jsx'

/*
****            = nejspis bude tezke, nechat na konec
--------------- = hotovo
/-/-/-/-/-/-/-/ = castecne hotovo
/////////////// = pracuju prave ted

--------------- = prekopano
/-/-/-/-/-/-/-/ = prekopu jinak/jindy
delka: --------------------------------------------------------------------------------------------

struktura todo ------------------------------------------------------------------------------------
pridavani itemu do listu --------------------------------------------------------------------------
predavana itemu z todo do done --------------------------------------------------------------------
uplne mazani itemu --------------------------------------------------------------------------------
updatovani todo/done ------------------------------------------------------------------------------
ukladani do localStorage --------------------------------------------------------------------------
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
)
