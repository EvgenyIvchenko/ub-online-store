import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from 'assets/bigStar.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
  };
  const description = [
    { id: 1, title: 'Оперативная память', description: '12 гб' },
    { id: 2, title: 'Камера', description: '200 МП' },
    { id: 3, title: 'Процессор', description: ' Qualcomm Snapdragon 8' },
    { id: 4, title: 'Количество ядер', description: '8' },
    { id: 5, title: 'Ёмкость аккумулятора', description: '6500 мА*ч' },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
            <div
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                backgroundSize: 'contain',
                width: 240,
                height: 240,
                fontSize: 64,
              }}
              className="d-flex justify-content-center align-items-center"
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgrey',
            }}
            className="d-flex flex-column justify-content-around align-items-center"
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
              padding: 10,
            }}
            key={info.id}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
