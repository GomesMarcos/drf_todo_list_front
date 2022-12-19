import React from 'react';
import ItemComponent from '../item/ItemComponent';
import { ListGroup } from "react-bootstrap";

export default function ListComponent(props) {
  if (props.items.length > 0) {
    return (
      <div className='container'>
        <h3>{props.listName}</h3>
        <ListGroup>
          {props.items.map(
            item => <ItemComponent key={item.id} id={item.id} label={item.name} status={item.is_on_chest} />
          )}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className='container'>
      <h3>{props.listName}</h3>
      <p>No items on this list yet</p>
    </div>
  )
}