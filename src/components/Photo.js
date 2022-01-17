import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  CardText,
  CardImg,
} from "reactstrap";

const Photo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { explanation, photo, title, copyright } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledImage>
      <Container fluid>
        <Button
          className="toggle_button"
          onClick={toggle}
          style={{ margin: "1rem 0" }}
        >
          Toggle Picture
        </Button>

        <Collapse isOpen={isOpen}>
          <Row>
            <Col>
              <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                  <CardImg
                    className="image"
                    src={photo}
                    alt="Astronomy Pic of the Day"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader>{copyright}</CardHeader>
                <CardBody>
                  <CardText>{explanation}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Collapse>
      </Container>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  .toggle_button {
    width: 100%;
  }
  .image {
    max-height: 70vh;
    max-width: 100%;
  }
`;

export default Photo;
