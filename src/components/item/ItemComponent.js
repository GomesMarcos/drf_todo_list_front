import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default class ItemComponent extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        <Form.Check
          type="switch"
          id={this.props.id}
          label={this.props.label}
          defaultChecked={this.props.status}
        />
      </ListGroup.Item >
    )
  };
}