import { ReactNode } from 'react';

export type Children = ReactNode | ReactNode[];

export interface WithChildren {
    children: Children;
}
