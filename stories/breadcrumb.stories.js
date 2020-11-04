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
  title: 'breadcrumb',
  decorators: [withKnobs],
};

export const Simple = () => {
  return `
  <script type="application/ld+json">
  [{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "TOP",
      "item": "/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "NEWS",
      "item": "/news/"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "詳細"
    }]
  }]
  </script>
  <nav class="c-breadcrumbs" aria-label="パンくず">
    <ol claas="c-breadcumbs__list">
      <li class="c-breadcumbs__item">
        <a href="/" class="c-breadcumbs__link">TOP</a>
      </li>
      <li class="c-breadcumbs__item">
        <a href="/news/" class="c-breadcumbs__link">NEWS</a>
      </li>
      <li class="c-breadcumbs__item">
        <span class="c-breadcumbs__text">詳細</span>
      </li>
    </ol>
  </nav>
  `;
};