import React from 'react';

export function UndoneItem(item, updateUndone, updateDone) {

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
    if (itemsDone == "")
      itemCopy.id = 0;

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
  );
}
