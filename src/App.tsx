import React from 'react';
import { Input } from './components/Input/Input';
import { Email } from './components/Icons/Email';

export function App() {
  return (
    <div>
      <Input
        id='inp'
        label='label'
        isRequired
        description='descr'
        placeholder='plh'
        focused
        LeftSection={Email}
      />
    </div>
  );
}
