import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImage,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from 'idea-react';
import { observer } from 'mobx-react';
import { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-class-tools';

import project, { Project } from '../model/Project';
import { i18n } from '../model/Translation';

const { t } = i18n;

@withRouter
@observer
export class HomePage extends Component<
    RouteComponentProps<{}, {}, { guest?: string }>
> {
    componentDidMount() {
        project.getList(
            'facebook/react',
            'microsoft/TypeScript',
            'mobxjs/mobx',
            'idea2app/Idea-React',
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
                <CardImage placement="top" src={logo} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
                <CardFooter className="d-flex justify-content-between">
                    <Button
                        theme="primary"
                        size="sm"
                        target="_blank"
                        href={homepage ?? undefined}
                    >
                        {t('home_page')}
                    </Button>
                    <Button
                        theme="success"
                        size="sm"
                        target="_blank"
                        href={html_url}
                    >
                        {t('source_code')}
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    );

    render() {
        const { guest } = this.props.query || {},
            { list } = project;

        return (
            <Container>
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
