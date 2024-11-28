import Code from '@editorjs/code';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import { Editor as Core, EditorProps } from 'idea-react';
import { FC } from 'react';

const Tools = {
    list: List,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    header: Header,
    quote: Quote
};

export const EditorJS: FC<Omit<EditorProps, 'tools'>> = props => (
    // @ts-expect-error: https://github.com/editor-js/link/issues/88
    <Core tools={Tools} {...props} />
);
