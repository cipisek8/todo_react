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

export default function MyApp() {
  const [undoneItems, setUndoneItems] = useState(UpdateUndoneItems());
  const [doneItems, setDoneItems] = useState(UpdateDoneItems());

  if (localStorage.getItem("undoneItems") == null)
    localStorage.setItem("undoneItems", "");

  if (localStorage.getItem("doneItems") == null)
    localStorage.setItem("doneItems", "");

  function UpdateUndoneItems() {
    let items = [];
    let i = 0;

    if ((localStorage.getItem("undoneItems") == null) || (localStorage.getItem("undoneItems") == undefined))
      return null;

    for (let item of localStorage.getItem("undoneItems").split('|')) {
      if ((item != null) && (item != undefined) && (item != "")) {
        items[i] = item;
        i++;
      }
    }

    localStorage.setItem("undoneItems", items.join('|'));
    return items.map(item => {
      let itemJson = JSON.parse(item);
      return UndoneItem(itemJson, SetUndoneItems, SetDoneItems);
    });
  }

  function SetUndoneItems() {
    setUndoneItems(UpdateUndoneItems);
  }

  function UpdateDoneItems() {
    let items = [];
    let i = 0;

    if ((localStorage.getItem("doneItems") == null) || (localStorage.getItem("doneItems") == undefined))
      return null;

    for (let item of localStorage.getItem("doneItems").split('|')) {
      if ((item != null) && (item != undefined) && (item != "")) {
        items[i] = item;
        i++;
      }
    }

    localStorage.setItem("doneItems", items.join('|'));

    return items.map(item => {
      let itemJson = JSON.parse(item);
      return DoneItem(itemJson);
    });
  }

  function SetDoneItems() {
    setDoneItems(UpdateDoneItems);
  }

  function AddItem() {
    if ((document.querySelector("#input").value == "") || (document.querySelector("#input").value == null) || (document.querySelector("#input").value == undefined))
      return;
    let items = localStorage.getItem("undoneItems").split("|");
    let itemJson = {
      text: document.querySelector("#input").value,
      id: items.length
    }

    items.push(JSON.stringify(itemJson));
    localStorage.setItem("undoneItems", items.join('|'));

    document.querySelector("#input").value = "";
    SetUndoneItems();
  }

  return (
    <div>
      <h1>TODO</h1>
      <ul className='undoneList'>
        {undoneItems}
      </ul>
      <div className='addItem'>
        <textarea placeholder='input' id='input'></textarea>
        <button className='addButton' onClick={AddItem}>přidat</button>
      </div>
      <h1>Done</h1>
      <ul className='doneList'>
        {doneItems}
      </ul>
    </div>
  );
}

function UndoneItem(item, updateUndone, updateDone) {

  function Remove() {
    let items = localStorage.getItem("undoneItems").split('|');

    items.map(thing => JSON.parse(thing));
    items[items.findIndex(thing => JSON.parse(thing).id == item.id)] = null;

    localStorage.setItem("undoneItems", items.join('|'));

    updateUndone();
  }

  function Complete() {
    let itemsUndone = localStorage.getItem("undoneItems").split('|');

    itemsUndone.map(thing => JSON.parse(thing));
    itemsUndone[itemsUndone.findIndex(thing => JSON.parse(thing).id == item.id)] = null;

    localStorage.setItem("undoneItems", itemsUndone.join('|'));

    updateUndone();

    let itemCopy = item;

    let itemsDone = localStorage.getItem("doneItems").split('|');
    itemCopy.id = itemsDone.length;

    itemsDone.push(JSON.stringify(itemCopy));
    localStorage.setItem("doneItems", itemsDone.join('|'));

    updateDone();
  }

  return (
    <li className='undoneItem' key={item.id}>
      <input type='radio' className='doneButton' onClick={Complete}></input>
      <p>{item.text}</p>
      <img src='src/img/trash_can.png' className='deleteButton' onClick={Remove}></img>
    </li>
  )
}

function DoneItem(item) {
  return (
    <li className='doneItem' key={item.id}>
      <p>{item.text}</p>
    </li>
  )
}