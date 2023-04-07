import { Container, Card, Button } from 'react-bootstrap';

const Post = (props) => {
    let { urlToImage, title, author, description, newsUrl, publishedAt } = props;

    return (
        <div>
        <Container>
            <Card style={{ width: '18rem'}} >
                <Card.Img variant="top" src={urlToImage} style={{ width: '18rem' }} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '18px' }}>{title}</Card.Title>
                    <small>{author}</small> | <small>{publishedAt}</small>
                    <Card.Text style={{ fontSize: '15px' }}>
                        {description}
                    </Card.Text>
                    <Button href={newsUrl}>
                        Read More
                    </Button>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );
}

export default Post;
