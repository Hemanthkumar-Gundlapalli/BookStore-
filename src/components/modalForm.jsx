import React, {Component} from "react";
import { Modal, Form, Button } from "react-bootstrap";

class ModalForm extends Component {
    
    render() { 
        return <React.Fragment>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </React.Fragment>;
    }
}
 
export default ModalForm;

// export function ModalForm() {
//   return (
//     <React.Fragment>
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </React.Fragment>
//   );
// }
