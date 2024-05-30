import React from 'react';

export function DoneItem(item) {
  return (
    <li className='doneItem' key={item.id}>
      <p>{item.text}</p>
    </li>
  );
}
