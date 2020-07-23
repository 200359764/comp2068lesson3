import React from 'react';
import { Container } from 'react-bootstrap';

function About () {
    return (
        <Container className="my-5">
            <header class="jumbotron">
        <h1>All About Me</h1>
    </header>

    <div>
        <p>The autobiography of Seunghwan Kim</p>
        <p>I went high school in Waterloo(It is small biography about myself)</p>
    </div>
        </Container>
    );
}

export default About;