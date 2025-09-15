import { observer } from 'mobx-react';
import { Component } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-class-tools';

import project, { Project } from '../model/Project';
import { i18n } from '../model/Translation';

const { t } = i18n;

@withRouter
@observer
export class HomePage extends Component<
    RouteComponentProps<{}, {}, { guest: string }>
> {
    componentDidMount() {
        project.getList(
            'facebook/react',
            'microsoft/TypeScript',
            'mobxjs/mobx',
            'react-bootstrap/react-bootstrap',
            'EasyWebApp/KoAJAX',
            'idea2app/ECharts-JSX'
        );
    }

    componentWillUnmount() {
        project.clearList();
    }

    renderProject = ({
        id,
        name,
        logo,
        description,
        homepage,
        html_url
    }: Project) => (
        <Col key={id} className="mb-3">
            <Card className="h-100">
                <Card.Img variant="top" src={logo} />
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
                        {t('home_page')}
                    </Button>
                    <Button
                        variant="success"
                        size="sm"
                        target="_blank"
                        href={html_url}
                    >
                        {t('source_code')}
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );

    render() {
        const { guest } = this.props.query,
            { list } = project;

        return (
            <Container fluid="md">
                <h1 className="my-4">{t('upstream_projects')}</h1>

                {guest && (
                    <h2>
                        {t('welcome')} {guest}!
                    </h2>
                )}
                <Row xs={1} sm={2} lg={4}>
                    {list.map(this.renderProject)}
                </Row>
            </Container>
        );
    }
}
