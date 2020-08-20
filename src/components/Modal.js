import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

export default function TodoModal() {
  const [modal, setModal] = useState(false);
  const [todo, setTodo] = useState("");

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Show</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new todo</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Type something..."
            onChange={(e) => setTodo(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>{" "}
          <Button color="light" onClick={toggle}>
            Cancle
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
