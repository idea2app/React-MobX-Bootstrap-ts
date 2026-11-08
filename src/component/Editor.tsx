import Code from '@editorjs/code';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import { ComponentProps, FC } from 'react';
import { createReactEditorJS } from 'react-editor-js';

const Core = createReactEditorJS();
const Tools = {
    list: List,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    header: Header,
    quote: Quote
};

export const EditorJS: FC<
    Omit<ComponentProps<typeof Core>, 'tools'>
> = props => (
    // @ts-expect-error: https://github.com/editor-js/link/issues/88
    <Core tools={Tools} {...props} />
);
