import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container } from 'react-bootstrap'

function Skillset() {
    return (
        // <Container>
            <Card style={{ justifyContent: "center", marginTop: 50, width: '80%', marginLeft: '10%'}}>
                <Card.Img/>
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is an example of card text.
                    </Card.Text>
                    <Button>Read More</Button>
                </Card.Body>
            </Card>
        // </Container>
    )
}

export default Skillset