import axios from "axios"
import { useEffect} from "react"
import { useState } from "react"
import { Button, Card, Row, Container, Col} from 'react-bootstrap';



const NewsUpdate = () => {

    const [getApi, setGetapi] = useState([])
   
    const getUsers = async () => {
        try{
            let response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=586adbf34c9049f7a63b075fc3b1f5a7')
            setGetapi(response.data.articles)
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return(
    <div>
    
        <Container className="fluid">
            <Row className="md-1 sm-5">
                {
                    getApi.map((user, idx) => {
                        return(
                <Col key={idx} md={4} >
                    <Card className="mb-1">
                        <Card.Img variant="top" src={user.urlToImage} />
                            <Card.Body >
                                <Card.Title>{user.title}</Card.Title>
                                    <Card.Text>{user.description}</Card.Text>
                        <p>{user.publishedAt}</p>
                        <Button href={user.url} variant="primary">GO link</Button>
                    </Card.Body>
                    </Card>
                </Col>
                        )
                    })
                }
            </Row>
        </Container>

    </div>
        
       
    )
}

export default NewsUpdate;




