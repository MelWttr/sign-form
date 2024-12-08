import React from 'react';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

export function App() {
  return (
    <div>
      <SignIn onSubmit={() => {}}/>
      <SignUp onSubmit={() => {}}/>
    </div>

  );
}
