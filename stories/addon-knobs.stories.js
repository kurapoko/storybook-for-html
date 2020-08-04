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

export const Button = () => {
  const buttonText = text('Text', 'Button');
  const buttonColor = color('backgroundColor', 'orange');
  return `
    <button style="background-color: ${buttonColor};">${buttonText}</button>
  `
}

export const Headline = () => {
  const headlineText = text('テキスト', '見出し');
  return `
    <h1>h1${headlineText}</h1><h2>h2${headlineText}</h2><h3>h3${headlineText}</h3><h4>h4${headlineText}</h4>
  `
}