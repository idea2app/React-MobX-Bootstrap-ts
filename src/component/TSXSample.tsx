import { Card, CodeBlock } from 'idea-react';
import { FC, PropsWithChildren } from 'react';

export type TSXSampleProps = PropsWithChildren<{
    title: string;
}>;

export const TSXSample: FC<TSXSampleProps> = ({ title, children }) => (
    <>
        <h2 className="mt-3">{title}</h2>
        {children}
        <Card body className="my-6">
            <CodeBlock language="tsx">{children}</CodeBlock>
        </Card>
    </>
);
