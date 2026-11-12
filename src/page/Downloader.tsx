import {
    Button,
    Container,
    Form,
    FormControl,
    FormFloatingLabel,
    FormLabel,
    Icon
} from 'idea-react';
import { textJoin } from 'mobx-i18n';
import { observer } from 'mobx-react';
import { FC, SubmitEvent } from 'react';
import { formToJSON } from 'web-utility';

import { Downloader } from '../component/Downloader';
import { downloader } from '../model/service';
import { t } from '../model/Translation';

const addTask = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const { path } = formToJSON(form);

    await downloader
        .createTask(path as string)
        .start({ chunkSize: 1024 ** 2 / 2 });

    form.reset();
};

export const DownloaderPage: FC = observer(() => (
    <Container>
        <h1 className="my-4">{textJoin(t('downloader'), t('examples'))}</h1>

        <Form
            className="d-flex align-items-center gap-3 mb-3"
            onSubmit={addTask}
        >
            <FormFloatingLabel className="flex-fill">
                <FormLabel plain htmlFor="download-url">
                    URL
                </FormLabel>
                <FormControl
                    id="download-url"
                    placeholder="URL"
                    type="url"
                    name="path"
                    required
                />
            </FormFloatingLabel>

            <Button type="submit" icon variant="solid" aria-label={t('create')}>
                <Icon name="plus" />
            </Button>
        </Form>

        <Downloader />
    </Container>
));
