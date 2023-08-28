import { FC, PropsWithChildren } from 'react';
import { CodeBlock } from 'idea-react';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

export type TSXSampleProps = PropsWithChildren<{
    title: string;
}>;

export const TSXSample: FC<TSXSampleProps> = ({ title, children }) => (
    <>
        <h2 className="mt-3">{title}</h2>
        {children}
        <CodeBlock language="tsx">{children}</CodeBlock>
    </>
);
