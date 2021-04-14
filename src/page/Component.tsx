import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Editor, OriginalTools } from 'react-bootstrap-editor';

import { Icon } from '../component/Icon';
import { TimeDistance } from '../component/TimeDistance';
import { Nameplate } from '../component/Nameplate';
import { TableSpinner } from '../component/TableSpinner';

export function ComponentPage() {
    return (
        <Container className="my-3" fluid="md">
            <h1>Extra components</h1>

            <h2 className="mt-3">Icon</h2>
            <Icon name="bootstrap" size={2} />

            <h2 className="mt-3">Time distance</h2>
            <TimeDistance date={new Date(1989, 5, 4)} />

            <h2 className="mt-3">Nameplate</h2>
            <Nameplate
                name="TechQuery"
                avatar="https://github.com/TechQuery.png"
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

            <h2 className="mt-3">Rich-text editor</h2>
            <Editor
                tools={OriginalTools}
                value="<p>test</p>"
                onChange={console.log}
            />
        </Container>
    );
}
