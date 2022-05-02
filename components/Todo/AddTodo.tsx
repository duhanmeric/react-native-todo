import { Box, Button, FormControl, Input, Modal, Text } from "native-base";
import React from "react";
import { useState } from "react";

type Props = {
  showModal: boolean;
  handleModal: (value: boolean) => void;
  receiveNewTodo: (title: string) => void;
};

const AddTodo = ({ showModal, handleModal, receiveNewTodo }: Props) => {
  const [input, setInput] = useState("");

  return (
    <Modal isOpen={showModal} onClose={() => handleModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>
          <Text fontSize={18} fontWeight="bold">
            Add Todo
          </Text>
        </Modal.Header>
        <Modal.Body>
          <FormControl mb={3}>
            <FormControl.Label>Title</FormControl.Label>
            <Input onChangeText={(val) => setInput(val)} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                handleModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                receiveNewTodo(input);
                handleModal(false);
              }}
            >
              Add
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default AddTodo;
