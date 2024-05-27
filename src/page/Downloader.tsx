import { FC } from 'react';
import { Button, Container } from 'react-bootstrap';

import { Downloader } from '../component/Downloader';
import { downloader } from '../model/service';

export const DownloaderPage: FC = () => (
    <Container>
        <h1>Downloader example</h1>

        <Button
            onClick={() =>
                downloader
                    .createTask(
                        'test',
                        'https://ows.blob.core.chinacloudapi.cn/$web/file/001%E6%B1%9F%E6%B3%A2.png'
                    )
                    .start({ chunkSize: 1024 ** 2 / 2 })
            }
        >
            add
        </Button>

        <Downloader />
    </Container>
);
