import {  fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import {Component} from './Component';

test('renders', async () => {
    render(<Component />);
});

test('renders all elements',  () => {
    render(<Component />);

    expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
    expect(screen.getByText('This is a component')).toBeVisible();
    expect(screen.getByTestId('button')).toBeVisible();
});

test('use extended matchers', async () => {
    render(<Component />);

    await screen.findByTestId('button');
    await screen.findByText('Unclicked');
    expect(screen.getByTestId('button')).toBeEnabled();
});

test('use older fireEvent', async () => {
    const { findByTestId, findByText} = render(<Component />);

    fireEvent.click(await findByTestId('button'));

    const changedMsg = await findByText('Clicked');
    expect(changedMsg).toBeInTheDocument();
});

test('use new userEvent', async () => {
    const user = userEvent.setup();
    render(<Component />);

    // getBy and queryBy are sync
    const btn =  screen.getByTestId('button');
    expect(btn).toHaveTextContent('Unclicked');

    // whereas findBy returns a promise... so need to await...
    // const btn =  await screen.findByTestId('button');
    // expect(btn).toHaveTextContent('Unclicked');

    await user.click(btn);

    expect(btn).toHaveTextContent('Clicked');

    // lots of alternative matchers e.g.
    const changedMsg = screen.getByText('Clicked');
    expect(changedMsg).toBeInTheDocument();

    // if need to wait for something to happen...
    // can pass options, otherwise default timeout of 1000ms used
    await waitFor(() => expect(btn).toHaveTextContent('Changed!'));
    // alternatively... findBy uses waitFor... so can also pass options in...
    // expect(await screen.findByText('Changed!')).toBeInTheDocument();
});