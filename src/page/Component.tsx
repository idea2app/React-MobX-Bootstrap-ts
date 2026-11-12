import {
    Avatar,
    Container,
    Icon,
    MarkdownView,
    Nameplate,
    Table,
    TableSpinner,
    TimeDistance
} from 'idea-react';
import { observer } from 'mobx-react';
import { Editor } from 'react-bootstrap-editor';

import { TSXSample } from '../component/TSXSample';
import { t } from '../model/Translation';

export const ComponentPage = observer(() => (
    <Container className="my-3">
        <h1>{t('component')}</h1>

        <TSXSample title="Time Distance">
            <TimeDistance date="1989-06-04" />
        </TSXSample>

        <TSXSample title="Icon">
            <Icon name="bootstrap" size={2} />
        </TSXSample>

        <TSXSample title="Avatar">
            <Avatar src="https://github.com/idea2app.png" />
        </TSXSample>

        <TSXSample title="Nameplate">
            <Nameplate
                avatar="https://github.com/idea2app.png"
                name="idea2app"
            />
        </TSXSample>

        <TSXSample title="Table spinner">
            <Table className="text-center" striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <TableSpinner colSpan={2} />
                </tbody>
            </Table>
        </TSXSample>

        <TSXSample title="Rich-text editor (HTML)">
            <Editor defaultValue="<p>test</p>" onChange={console.info} />
        </TSXSample>

        <TSXSample title="Markdown view">
            <MarkdownView>
                {'## Markdown demo\n\nRendered with **Idea React**.'}
            </MarkdownView>
        </TSXSample>
    </Container>
));
