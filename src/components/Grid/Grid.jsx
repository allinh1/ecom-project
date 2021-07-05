import React from "react";
import { Button, Card } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./Grid.module.scss";
// import Product from "../../assets/Products";

const Grid = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card>
          <Card.Img
            className={styles.resize}
            src="https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
          ></Card.Img>
            <Card.Body>
                <Card.Title>Hats</Card.Title>
                <Card.Text>Hats Text</Card.Text>
                <Button variant="success">Click to buy</Button>
            </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className={styles.resize}
            src="https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          ></Card.Img>
            <Card.Body>
                <Card.Title>Shoes</Card.Title>
                <Card.Text>Shoes Text</Card.Text>
                <Button variant="danger">Click to buy</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className={styles.resize}
            src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          ></Card.Img>
            <Card.Body>
                <Card.Title>Pants</Card.Title>
                <Card.Text>Pants Text</Card.Text>
                <Button variant="secondary">Click to buy</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            className={styles.resize}
            src="https://images.unsplash.com/photo-1542060748-10c28b62716f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Pants</Card.Title>
            <Card.Text>Pants Text</Card.Text>
            <Button variant="primary">Click to buy</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Grid;
