import React, { Component } from 'react';
import { Navbar, Form, FormControl,Button} from 'react-bootstrap'

class SearchBar extends Component {
    render() { 
        return <>
        <Navbar bg="dark" expand="lg md sm" variant="black">
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{margin: 'auto'}}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar></>;
    }
}
 
export default SearchBar;