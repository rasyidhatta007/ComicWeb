import { Col, Container, Row, Button } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center dflex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">WELCOME READERS</div>
                        <div className="introButon mt-4 text-center">
                            <Button variant='dark'>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro