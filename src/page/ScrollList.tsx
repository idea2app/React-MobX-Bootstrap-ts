import { ScrollList } from 'mobx-restful-table';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GitCard } from '../component/Git/Card';
import repositoryStore from '../model/Repository';
import { i18n } from '../model/Translation';

export const ScrollListPage: FC = () => (
    <Container>
        <h1 className="my-4">{i18n.t('scroll_list')}</h1>

        <ScrollList
            translator={i18n}
            store={repositoryStore}
            renderList={allItems => (
                <Row as="ul" className="list-unstyled g-4" xs={1} sm={2}>
                    {allItems.map(item => (
                        <Col as="li" key={item.id}>
                            <GitCard className="h-100 shadow-sm" {...item} />
                        </Col>
                    ))}
                </Row>
            )}
        />
    </Container>
);
