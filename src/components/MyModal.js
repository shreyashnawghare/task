import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const  MyModal = ({ jokes, openModal , setOpenModal, fetchJokes}) => {
  
const handleShow = () => setOpenModal(!openModal);


  return (
    <>
    
      {jokes.map((item)=>{
      return (
      <Modal  show={openModal} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{item.categories}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p >"{item.value}"</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          {/* implemented next joke functionality using fetchJokes */}
          <Button variant="primary" onClick={fetchJokes}>Next Joke</Button> 
        </Modal.Footer>
      </Modal>
    )})}

    </>
  );
}

export default MyModal;
