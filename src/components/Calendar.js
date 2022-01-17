import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

function Calendar(props) {
  const { dateSelect } = props;

  return (
    <StyledCalendar>
      <Container fluid className="calendar_padding">
        <Row>
          <Col className="bg-light border" style={{ marginTop: "1rem" }}>
            <p>Select Another Day</p>
            <div>
              <input
                id="calendar"
                type="date"
                onChange={(e) => {
                  e.persist();
                  dateSelect(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledCalendar>
  );
}

const StyledCalendar = styled.div`
  // .calendar_padding {
  //   padding-top: 8%;
  // }
  .border {
    display: flex;
    text-align: center;
    flex-flow: column nowrap;
    justify-content: center;
  }
  #calendar {
    width: auto;
    max-width: 12%;
  }
`;

export default Calendar;
