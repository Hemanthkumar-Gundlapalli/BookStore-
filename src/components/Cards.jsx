import React, { Component } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { getAllProduct } from "../utils/fetch-api";
//import ReactPaginate from "react-paginate"


class Cards extends Component {
  constructor(props) {
    super(props);
    //this.ModalForm = this.ModalForm.bind(this);
    this.state = {
      products: [],
    };
  }
  handleModal = () => {
    console.log("clicked");
  };
  async componentDidMount() {
    try {
      const res = await getAllProduct();
      this.setState({ products: res });
    } catch (err) {
      this.setState({ roducts: [] });
    }
  }

  render() {

    return (
      <Container>
        <Row style={{ marginTop: "10px" }}>
          {this.state.products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                style={{
                  width: "250px",
                  height: "350px",
                  margin: "10px auto",
                  border: "1px solid ",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "150px", height: "150px", margin: "auto" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      height: "50px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      marginBottom: "0px",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      height: "50px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      marginBottom: "0px",
                    }}
                  >
                    {product.description}
                  </Card.Text>
                  <Card.Text
                    style={{
                      height: "25px",
                      textAlign: "center",
                      marginBottom: "0px",
                    }}
                  >
                    ${product.price}
                  </Card.Text>
                  <p style={{ textAlign: "center" }}>
                    <Button variant="primary" onClick={this.props}>Add to cart</Button>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

// function Cards(params) {

//   this.state = {
//     products: [],
//   };


//  async componentDidMount() {
//     try {
//       const res = await getAllProduct();
//       this.setState({ products: res });
//     } catch (err) {
//       this.setState({ roducts: [] });
//     }
//   }

//   return(
//     <Container>
//         <Row style={{ marginTop: "10px" }}>
//           {this.state.products.map((product) => (
//             <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
//               <Card
//                 style={{
//                   width: "250px",
//                   height: "350px",
//                   margin: "10px auto",
//                   border: "1px solid ",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={product.image}
//                   style={{ width: "150px", height: "150px", margin: "auto" }}
//                 />
//                 <Card.Body>
//                   <Card.Title
//                     style={{
//                       height: "50px",
//                       textOverflow: "ellipsis",
//                       overflow: "hidden",
//                       marginBottom: "0px",
//                     }}
//                   >
//                     {product.title}
//                   </Card.Title>
//                   <Card.Text
//                     style={{
//                       height: "50px",
//                       textOverflow: "ellipsis",
//                       overflow: "hidden",
//                       marginBottom: "0px",
//                     }}
//                   >
//                     {product.description}
//                   </Card.Text>
//                   <Card.Text
//                     style={{
//                       height: "25px",
//                       textAlign: "center",
//                       marginBottom: "0px",
//                     }}
//                   >
//                     ${product.price}
//                   </Card.Text>
//                   <p style={{ textAlign: "center" }}>
//                     <Button variant="primary" onClick={()=> this.props.ModalForm()}>Add to cart</Button>
//                   </p>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//   );
  
// }

export default Cards;
