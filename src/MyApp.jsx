import React from 'react';
import { useState } from 'react';
import { UndoneItem } from './UndoneItem.jsx';
import { DoneItem } from './DoneItem.jsx';


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

    for (let item of localStorage.getItem("undoneItems").split('|')) {
      if ((item != null) && (item != undefined) && (item != "")) {
        items[i] = item;
        i++;
      }
    }

    localStorage.setItem("undoneItems", items.join('|'));

    items.reverse();

    return items.map(item => {
      let itemJson = JSON.parse(item);
      return UndoneItem(itemJson, SetUndoneItems, SetDoneItems);
    });
  }

  function SetUndoneItems() {
    setUndoneItems(UpdateUndoneItems());
  }

  function UpdateDoneItems() {
    let items = [];
    let i = 0;

    for (let item of localStorage.getItem("doneItems").split('|')) {
      if ((item != null) && (item != undefined) && (item != "")) {
        items[i] = item;
        i++;
      }
    }

    localStorage.setItem("doneItems", items.join('|'));
    items.reverse();

    return items.map(item => {
      let itemJson = JSON.parse(item);
      return DoneItem(itemJson);
    });
  }

  function SetDoneItems() {
    setDoneItems(UpdateDoneItems());
  }

  function AddItem() {
    if ((document.querySelector("#input").value == "") || (document.querySelector("#input").value == null) || (document.querySelector("#input").value == undefined))
      return;
    let items = localStorage.getItem("undoneItems").split("|");
    let itemJson = {
      text: document.querySelector("#input").value,
      id: items.length
    };

    if (items == "")
      itemJson.id = 0;
    else {
      let ids = [];
      for (let i = 0; i < items.length; i++) {
        ids[i] = JSON.parse(items[i]).id;
      }
      for (let i = 0; i < items.length; i++) {
        if (!ids.includes(JSON.parse(items[i]).id)) {
          itemJson.id = i;
          break;
        }
      }
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
