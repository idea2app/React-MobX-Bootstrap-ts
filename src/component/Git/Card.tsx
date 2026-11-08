import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    Col,
    Row,
    text2color
} from 'idea-react';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { i18n } from '../../model/Translation';
import { GitLogo } from './Logo';

export interface GitCardProps
    extends
        Pick<GitRepository, 'full_name' | 'html_url' | 'languages'>,
        Partial<Pick<GitRepository, 'topics' | 'description' | 'homepage'>> {
    className?: string;
}

export const GitCard: FC<GitCardProps> = observer(
    ({
        className = 'shadow-sm',
        full_name,
        html_url,
        languages = [],
        topics = [],
        description,
        homepage
    }) => (
        <Card className={className}>
            <CardBody className="d-flex flex-column gap-3">
                <CardTitle as="h3" className="h5">
                    <a target="_blank" href={html_url} rel="noreferrer">
                        {full_name}
                    </a>
                </CardTitle>

                <nav className="flex-fill">
                    {topics.map(topic => (
                        <Badge
                            key={topic}
                            className="text-decoration-none me-1"
                            theme={text2color(topic, ['light'])}
                            as="a"
                            target="_blank"
                            href={`https://github.com/topics/${topic}`}
                        >
                            {topic}
                        </Badge>
                    ))}
                </nav>
                <Row as="ul" className="list-unstyled g-4" xs={4}>
                    {languages.map(language => (
                        <Col key={language} as="li">
                            <GitLogo name={language} />
                        </Col>
                    ))}
                </Row>
                <CardText>{description}</CardText>
            </CardBody>
            <CardFooter className="d-flex justify-content-between align-items-center">
                {homepage && (
                    <Button theme="success" target="_blank" href={homepage}>
                        {i18n.t('home_page')}
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
);
