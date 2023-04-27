import { useEffect, useState } from "react";
import axios from "axios";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  var tempLogin = false;
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios.get(`http://3.38.118.228:8080/api/events`).then((res) => {
      setEventList(res.data);
      console.log(eventList);
    });
  }, []);

  const hotGroupList = eventList.map((data) => (
    <Col>
      <Card className="text-start">
        <Card.Body>
          <Row className="justify-content-end">
            <span className="d-flex justify-content-between">
              <>
                {data.nowParticipant <= 1 && data.limit >= 3 ? (
                  <Badge bg="success">New</Badge>
                ) : (
                  <></>
                )}
                {data.limit - data.nowParticipant === 1 ? (
                  <Badge bg="danger">마감임박</Badge>
                ) : (
                  <></>
                )}
              </>
              <Badge pill style={{backgroundColor: "#6D36F0"}} bg="none">
                {data.nowParticipant}/{data.limit}
              </Badge>
            </span>
            <Card.Title>
              <div style={{ height: "80px", overflow: "hidden" }}>
                <h5 className="mt-2 mb-2">
                  <strong>{data.title}</strong>
                </h5>
              </div>
            </Card.Title>
            <Card.Subtitle className="text-secondary">
              # {data.category}
            </Card.Subtitle>
          </Row>
        </Card.Body>
        <Button
          className="m-3"
          style={{ backgroundColor: "#6D36F0", border: 0 }}
        >
          참여하기
        </Button>
      </Card>
    </Col>
  ));

  return (
    <div className="text-center">
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <strong>솜강신청</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {tempLogin ? (
              <Nav>
                <Nav.Link href="/mypage">마이페이지</Nav.Link>
                <Button style={{ backgroundColor: "#6D36F0", border: 0 }}>
                  모임만들기
                </Button>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/signin">로그인</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5 center-align">
        <h2 className="mb-4">
          <strong>
            소마인들과 소모임을
            <br />
            만들어보세요!
          </strong>
        </h2>
        <h6>점심약속부터 정기적인 소모임까지, 다양한 사람들을 모아봐요</h6>
      </Container>
      <img src="images/main_intro.png" width={320} />
      <Container className="p-4">
        <h3 className="mt-4 mb-2">
          <strong>🔥핫한 모임🔥</strong>
        </h3>
        <br />
        <Row xs={2} md={2} lg={3} className="g-4">
          {hotGroupList}
        </Row>
      </Container>
    </div>
  );
}
