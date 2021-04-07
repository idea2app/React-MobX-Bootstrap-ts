import React, { PropsWithoutRef } from 'react';
import Image from 'react-bootstrap/Image';

export type NameplateProps = PropsWithoutRef<{ avatar: string; name: string }>;

export function Nameplate({ avatar, name }: NameplateProps) {
    return (
        <>
            <Image
                roundedCircle
                style={{ width: '2rem', marginRight: '0.5rem' }}
                src={avatar}
            />
            <span className="align-middle">{name}</span>
        </>
    );
}
