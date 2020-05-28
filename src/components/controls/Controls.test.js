import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import Controls from './Controls';

it('Should show LOG for keys clicked', () => {
  let logs = 'LOGS';
  const {getByText} = render(<Controls onPlay={() => {}} logs={logs} />);
  expect(getByText(/LOG/i)).toBeInTheDocument();
});
