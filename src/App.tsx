import React from 'react';
import { Input } from './components/Input/Input';
import { Email } from './components/Icons/Email';
import { Radio } from './components/Radio/Radio';
import { RadioGroup } from './components/RadioGroup/RadioGroup';

export function App() {
  return <>
    <div>
      <Input
        id='inp'
        label='label'
        isRequired
        description='descr'
        placeholder='plh'
        error='errr'
        focused
        LeftSection={Email}
        size='lg'
      />
    </div>
    <div>
      <RadioGroup
        name='radio-name'
        label='label'
        isRequired
        description='descr'
        error='errr'
        size='lg'
      >
        <Radio value='radio1' label='Radio1' name='radios'/>
        <Radio value='radio2' label='Radio2' name='radios'/>
        <Radio value='radio3' label='Radio3' name='radios'/>
      </RadioGroup>

    </div>
  </>;
}
