import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  await act(async () => {
    root.render(<App />);
  });
  await act(async () => {
    root.unmount();
  });
});
