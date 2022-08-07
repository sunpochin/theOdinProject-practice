// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
	it('renders monkey12345', () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	it('renders radical rhinos after button click', () => {
		render(<App />);
		const button = screen.getByRole('button', { name: 'Click Me' });

		userEvent.click(button);

		expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
	});

	// it("renders correct heading", () => {
	//   const { getByRole } = render(<App />);
	//   expect(getByRole('heading').textContent).toMatch(/our first test/i);
	// });
});
