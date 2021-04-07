import React, { PropsWithoutRef } from 'react';
import { diffTime, TimeData } from 'web-utility/source/date';

export type TimeDistanceProps = PropsWithoutRef<{
    date: TimeData;
    unitWords?: Record<string, string>;
    beforeWord?: string;
    afterWord?: string;
}>;

const UnitWords = {
    ms: 'millisecond(s)',
    s: 'second(s)',
    m: 'minute(s)',
    H: 'hour(s)',
    D: 'day(s)',
    W: 'week(s)',
    M: 'month(s)',
    Y: 'year(s)'
};

export function TimeDistance({
    date,
    unitWords = UnitWords,
    beforeWord = ' before',
    afterWord = ' after'
}: TimeDistanceProps) {
    date = new Date(date);

    const { distance, unit } = diffTime(date);

    return (
        <time dateTime={date.toJSON()} title={date.toLocaleString()}>
            {Math.abs(distance)} {unitWords[unit]}
            {distance < 0 ? beforeWord : afterWord}
        </time>
    );
}
