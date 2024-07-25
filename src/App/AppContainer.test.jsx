import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './AppContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<AppContainer tab="home" />);
    root.unmount();
});