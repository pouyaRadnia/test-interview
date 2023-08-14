'use client';

import { store } from '../redux';
import { WithChildren } from '@/types/commen';
import { Provider } from 'react-redux';

export interface ReduxProviderProps extends WithChildren {}

export function ReduxProvider({ children }: WithChildren) {
    return <Provider store={store}>{children}</Provider>;
}
