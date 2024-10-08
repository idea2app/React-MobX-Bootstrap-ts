import { text2color } from 'idea-react';
import { computed } from 'mobx';
import { GitRepository } from 'mobx-github';
import { observer } from 'mobx-react';
import { Column, RestTable } from 'mobx-restful-table';
import { Component } from 'react';
import { Badge, Container } from 'react-bootstrap';

import { repositoryStore } from '../model/service';
import { i18n } from '../model/Translation';

@observer
export class PaginationPage extends Component {
    @computed
    get columns(): Column<GitRepository>[] {
        const { t } = i18n;

        return [
            {
                key: 'full_name',
                renderHead: t('repository_name'),
                renderBody: ({ html_url, full_name }) => (
                    <a target="_blank" href={html_url} rel="noreferrer">
                        {full_name}
                    </a>
                )
            },
            { key: 'homepage', type: 'url', renderHead: t('home_page') },
            { key: 'language', renderHead: t('programming_language') },
            {
                key: 'topics',
                renderHead: t('topic'),
                renderBody: ({ topics }) => (
                    <>
                        {topics?.map(topic => (
                            <Badge
                                key={topic}
                                as="a"
                                className="me-2 text-decoration-none"
                                bg={text2color(topic, ['light'])}
                                target="_blank"
                                href={`https://github.com/topics/${topic}`}
                            >
                                {topic}
                            </Badge>
                        ))}
                    </>
                )
            },
            {
                key: 'stargazers_count',
                type: 'number',
                renderHead: t('star_count')
            }
        ];
    }

    render() {
        return (
            <Container style={{ height: '91vh' }}>
                <RestTable
                    className="h-100 text-center"
                    columns={this.columns}
                    store={repositoryStore}
                    translator={i18n}
                    striped
                    hover
                    editable
                    deletable
                    onCheck={console.log}
                />
            </Container>
        );
    }
}
