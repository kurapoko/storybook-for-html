import { document } from 'global';
import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

export default { 
  title: 'knobs',
  decorators: [withKnobs],
};

export const Simple = () => {
  const name = text('Name', 'John Doe');
  const age = number('Age', 44);
  const content = `I am ${name} and I'm ${age} years old.`;
  return `<div>${content}</div>`;
};

export const Template = () => {
  const tmpText = text('Text', 'Hello World!!')
  return `
    <p class='c-text'>${tmpText}</p>
  `
}