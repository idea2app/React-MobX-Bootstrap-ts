import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Icon,
    Progress
} from 'idea-react';
import { DownloadTask } from 'mobx-downloader';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { downloader } from '../model/service';
import { t } from '../model/Translation';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
    <Card>
        <CardBody>
            <CardTitle>{task.name}</CardTitle>
            <Progress
                striped={task.percent < 100}
                animated={task.executing}
                value={task.percent}
            >
                {task.percent}%
            </Progress>
        </CardBody>
        <CardFooter className="d-flex justify-content-between align-items-center">
            <small>
                {task.loadedSize.toShortString()} /{' '}
                {task.totalSize.toShortString()}
            </small>
            <div className="d-flex gap-3">
                {task.percent < 100 &&
                    (task.executing ? (
                        <Button
                            icon
                            variant="solid"
                            theme="warning"
                            size="sm"
                            aria-label={t('pause')}
                            onClick={() => task.pause()}
                        >
                            <Icon name="pause" />
                        </Button>
                    ) : (
                        <Button
                            icon
                            variant="solid"
                            theme="success"
                            size="sm"
                            aria-label={t('resume')}
                            onClick={() => task.start()}
                        >
                            <Icon name="play" />
                        </Button>
                    ))}
                <Button
                    icon
                    variant="solid"
                    theme="danger"
                    size="sm"
                    aria-label={t('delete')}
                    disabled={task.executing}
                    onClick={() => downloader.destroyTask(task.name)}
                >
                    <Icon name="trash" />
                </Button>
            </div>
        </CardFooter>
    </Card>
));

export const Downloader: FC = observer(() => (
    <ol className="list-unstyled d-flex flex-column gap-3">
        {downloader.tasks.map(task => (
            <li key={task.id}>
                <DTCard task={task} />
            </li>
        ))}
    </ol>
));
