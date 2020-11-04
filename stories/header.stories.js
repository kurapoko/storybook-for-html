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
  title: 'header',
  decorators: [withKnobs],
};

export const Simple = () => {
  const name = text('Name', 'John Doe');
  const age = number('Age', 44);
  const content = `I am ${name} and I'm ${age} years old.`;
  return `
  <header class="c-header" role="banner">
    <div class="c-header-logo">
      ロゴ
    </div>
    <nav class="c-header-nav" role="navigation" aria-label="グローバルナビゲーション">
      <ul class="c-header-nav__list">
        <li class="c-header-nav__item">
          <a href="" class="c-header-nav__link">TOP</a>
        </li>
        <li class="c-header-nav__item">
          <a href="" class="c-header-nav__link">ABOUT</a>
        </li>
        <li class="c-header-nav__item">
          <a href="" class="c-header-nav__link">NEWS</a>
        </li>
        <li class="c-header-nav__item">
          <a href="" class="c-header-nav__link">IR</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};