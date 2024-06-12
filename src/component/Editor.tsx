import { Editor as Core, EditorProps } from 'idea-react';
import { FC } from 'react';

import List from '@editorjs/list';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';

const Tools = {
    list: List,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    header: Header,
    quote: Quote
};

export const EditorJS: FC<Omit<EditorProps, 'tools'>> = props => (
    <Core tools={Tools} {...props} />
);
