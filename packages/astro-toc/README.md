<div>
  <img src="https://raw.githubusercontent.com/theisel/astro-toc/main/logo.svg" width="240" alt="astro-toc logo">
</div>

# astro-toc

![license](https://img.shields.io/npm/l/astro-toc?style=flat-square)
[![npm](https://img.shields.io/npm/v/astro-toc?style=flat-square)](https://www.npmjs.com/package/astro-toc)

Table of Contents (ToC) generator for [Astro](https://astro.build/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-toc/tree/main/demo)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```
npm install astro-toc
```

## Usage

### Classic

This render mode can render your `ToC` as `<ul>`, `<ol>` or `<menu>`; set the `as` property to select your flavour.

| Property            | Type                                                              | Description                                                                                                                                                                                                                |
| :------------------ | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toc                 | `{ depth: number; title: string; url?: string; [string]: any }[]` | `depth` and `title` are required.                                                                                                                                                                                          |
| as `optional`       | `string`                                                          | [bullet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) \| [number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) \| [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) |
| maxDepth `optional` | `number`                                                          | How many levels should be rendered                                                                                                                                                                                         |

```ts
---
import { TOC } from "astro-toc";

const toc = [
  {depth: 1, title: "Tours", url: /* optional*/},
  {depth: 2, title: "Walking Tours"},
  {depth: 3, title: "City Walking Tours"},
  {depth: 3, title: "River Walking Tours"},
  {depth: 2, title: "Boat Tours"},
  {depth: 1, title: "Restaurants"},
  {depth: 2, title: "Fine Dining"},
  {depth: 2, title: "Gastropub"},
  {depth: 2, title: "Fast Food"},
  {depth: 1, title: "Hotels"},
];
---

<TOC toc={toc} />
```

### Component

When using a custom component it uses the [\<menu\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) element.

Unlike the [classic](#classic) render method `title` isn't required and the payload will be passed to the component.

| Property            | Type                                 | Description                             |
| :------------------ | :----------------------------------- | :-------------------------------------- |
| toc                 | `{ depth: number; [string]: any }[]` | `depth` is required.                    |
| use                 | `(props) => any`                     | [Astro](https://astro.build/) component |
| maxDepth `optional` | `number` \| `string`                 | How many levels should be rendered      |

```ts
---
import { TOC } from "astro-toc";
import MyComponent from "path/to/MyComponent.astro";

const toc = [
  {depth: 1, title: "Tours"},
  {depth: 2, title: "Walking Tours"},
  {depth: 3, title: "City Walking Tours"},
  {depth: 3, title: "River Walking Tours"},
  {depth: 2, title: "Boat Tours"},
  {depth: 1, title: "Restaurants"},
  {depth: 2, title: "Fine Dining"},
  {depth: 2, title: "Gastropub"},
  {depth: 2, title: "Fast Food"},
  {depth: 1, title: "Hotels"},
];
---

<TOC toc={toc} use={MyComponent} />
```

## License

ISC
