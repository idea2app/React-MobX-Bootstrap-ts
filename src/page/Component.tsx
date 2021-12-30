import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import {
    TimeDistance,
    PaginationBar,
    Icon,
    Avatar,
    Nameplate,
    FilterInput,
    FilePicker,
    EditorHTML
} from 'idea-react';

import { TableSpinner } from '../component/TableSpinner';
import EditorJS from '../component/Editor';
import RichEditData from '../model/rich-edit.json';

export function ComponentPage() {
    const content = JSON.stringify(RichEditData);

    return (
        <Container className="my-3" fluid="md">
            <h1>Extra components</h1>

            <h2 className="mt-3">Time Distance</h2>
            <TimeDistance date="1989-06-04" />

            <h2 className="mt-3">Pagination Bar</h2>
            <PaginationBar
                pathResolver={index => `/test?page=${index}`}
                total={10}
                current={5}
            />
            <h2 className="mt-3">Icon</h2>
            <Icon name="bootstrap" size={2} />

            <h2 className="mt-3">Avatar</h2>
            <Avatar src="https://github.com/idea2app.png" />

            <h2 className="mt-3">Nameplate</h2>
            <Nameplate
                name="idea2app"
                avatar="https://github.com/idea2app.png"
            />
            <h2 className="mt-3">Table spinner</h2>
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

            <h2 className="mt-3">Filter Input</h2>
            <FilterInput name="tags" />

            <h2 className="mt-3">File Picker</h2>
            <FilePicker accept="image/*" multiple name="images" />

            <h2 className="mt-3">Rich-text editor (HTML)</h2>
            <Editor
                tools={OriginalTools}
                value="<p>test</p>"
                onChange={console.log}
            />
            <h2 className="mt-3">Rich-text editor (JSON)</h2>
            <EditorJS name="content" defaultValue={content} />

            <h2 className="mt-3">Editor HTML</h2>
            <EditorHTML data={content} />
        </Container>
    );
}
