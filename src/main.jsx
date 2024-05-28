import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState } from 'react'

/*
****            = nejspis bude tezke, nechat na konec
--------------- = hotovo
/-/-/-/-/-/-/-/ = castecne hotovo
/////////////// = pracuju prave ted

--------------- = prekopano
/-/-/-/-/-/-/-/ = prekopu jinak/jindy

delka: --------------------------------------------------------------------------------------------

struktura todo
pridavani itemu do listu
predavana itemu z todo do done
uplne mazani itemu
updatovani todo/done
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)

export default function MyApp() {
  const [undoneItems, setUndoneItems] = useState([UndoneItem("necoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), UndoneItem("druhy neco")]);
  const [doneItems, setDoneItems] = useState([DoneItem("neco hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \n\n\n\n\n\n hotovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")]);

  return (
    <div>
      <h1>TODO</h1>
      <ul className='undoneList'>
        {undoneItems}
      </ul>
      <div className='addItem'>
        <textarea placeholder='input' className='input'></textarea>
        <button className='addButton'>přidat</button>
      </div>
      <h1>Done</h1>
      <ul className='doneList'>
        {doneItems}
      </ul>
    </div>
  );
}

let keyUndone = -1;

function UndoneItem(text) {
  keyUndone++;
return(
  <li className='undoneItem' key={keyUndone}>
    <input type='radio' className='doneButton'></input>
    <p>{text}</p>
    <img src='src/img/trash_can.png' className='deleteButton'></img>
  </li>
)
}

let keyDone = -1;

function DoneItem(text) {
  keyDone++;
return(
  <li className='doneItem' key={keyDone}>
    <p>{text}</p>
  </li>
)
}