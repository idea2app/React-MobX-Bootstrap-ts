import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Icon
} from 'idea-react';
import { DownloadTask } from 'mobx-downloader';
import { observer } from 'mobx-react';
import { FC } from 'react';

import { downloader } from '../model/service';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
    <Card>
        <CardBody>
            <CardTitle>{task.name}</CardTitle>
            <div
                className="progress"
                role="progressbar"
                aria-label={task.name}
                aria-valuenow={task.percent}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className={`progress-bar${task.percent < 100 ? ' progress-bar-striped' : ''}${task.executing ? ' progress-bar-animated' : ''}`}
                    style={{ width: `${task.percent}%` }}
                >
                    {task.percent}%
                </div>
            </div>
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
                            size="sm"
                            theme="warning"
                            onClick={() => task.pause()}
                        >
                            <Icon name="pause" />
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            theme="success"
                            onClick={() => task.start()}
                        >
                            <Icon name="play" />
                        </Button>
                    ))}
                <Button
                    size="sm"
                    theme="danger"
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
