//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar1';
import React from 'react';
import Carosel from './components/carousel';
import SearchBar from './components/navBar2';
import Cards from './components/Cards';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
//import Search from './components/searchBox';
//import ModalForm from './components/modalForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  function ModalForm() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return (
   <React.Fragment>
     <NavBar/>
     {/* <Carosel/> */}
     <SearchBar/>
     {/* //<Search value={this.searchQuery} onchange={this.handleSearch}/> */}
     <Cards data={ModalForm}/>
   </React.Fragment>
  );
}

export default App;
