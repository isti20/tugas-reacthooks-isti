import { Container, Card, Button } from 'react-bootstrap';

const Post = () => {

    return (
        <div>
        <Container >
            <Card style={{ width: '18rem', boxSizing: "border-box", paddingTop: "2rem"}} >
                <Card.Img variant="top" src='/' style={{ width: '18rem' }} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                    <small>Date</small>
                    <Card.Text style={{ fontSize: '15px' }}>
                        <small>Author</small>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">
                    <a href='/' >Read More</a>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default Post;
