import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Button from 'react-bootstrap/Button';

import project, { Project } from '../model/Project';

@observer
export class HomePage extends PureComponent {
    componentDidMount() {
        project.getList(
            'facebook/react',
            'microsoft/TypeScript',
            'mobxjs/mobx',
            'react-bootstrap/react-bootstrap',
            'EasyWebApp/KoAJAX'
        );
    }

    renderProject = ({
        id,
        name,
        logo,
        description,
        homepage,
        html_url
    }: Project) => (
        <Col className="mb-3" xs={12} sm={6} md={3} key={id}>
            <Card className="h-100">
                <CardImg variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button
                        variant="primary"
                        size="sm"
                        target="_blank"
                        href={homepage}
                    >
                        Home page
                    </Button>
                    <Button
                        variant="success"
                        size="sm"
                        target="_blank"
                        href={html_url}
                    >
                        Source code
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );

    render() {
        const { list } = project;

        return (
            <Container fluid="md">
                <h1 className="my-4">Upstream projects</h1>

                <Row>{list.map(this.renderProject)}</Row>
            </Container>
        );
    }
}
