<div>
  <img src="https://raw.githubusercontent.com/theisel/astro-toc/main/logo.svg" width="240" alt="astro-toc logo">
</div>

&nbsp;

# astro-toc

![license](https://img.shields.io/npm/l/astro-toc?style=flat-square)
[![npm](https://img.shields.io/npm/v/astro-toc?style=flat-square)](https://www.npmjs.com/package/astro-toc)

Table of Contents (ToC) generator for [Astro](https://astro.build/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-toc/tree/main/demo)

&nbsp;

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

&nbsp;

## Install

```bash
$ npm install astro-toc
# $ pnpm add astro-toc
# $ yarn add astro-toc
```

&nbsp;

## Usage

```jsx
---
/* .astro */
const toc = [
  { depth: 1, title: "List Item 1" },
  { depth: 2, title: "List Item 1.1" },
  { depth: 3, title: "List Item 1.1.1" },
  { depth: 3, title: "List Item 1.1.2" },
  { depth: 2, title: "List Item 1.2" },
  { depth: 1, title: "List Item 2" },
  { depth: 2, title: "List Item 2.1" },
  { depth: 2, title: "List Item 2.2" },
  { depth: 2, title: "List Item 2.3" },
  { depth: 1, title: "List Item 3" },
  { depth: 2, title: "List Item 3.1" },
  { depth: 2, title: "List Item 3.2" },
];
---
<TOC toc={toc} />
```

Render your table of contents as `<ul>`, `<ol>` or `<menu>`; set the `as` property to select your flavour. Pass in `use` prop to use custom component.

### Props

| Property            | Type                                  | Description                                                                                                                                                                                                                          |
| :------------------ | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toc                 | `{ depth: number; [string]: any } []` | Table of contents data.<br/>`title` is required when custom component isn't used.                                                                                                                                                    |
| as `optional`       | `string`                              | [bullet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) (default) \| [number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) \| [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) |
| use `optional`      | `(props: any) => any`                 | Custom component                                                                                                                                                                                                                     |
| depth `optional`    | `number`                              | Initial depth (default 1)                                                                                                                                                                                                            |
| maxDepth `optional` | `number`                              | How many levels to render                                                                                                                                                                                                            |

&nbsp;

## License

ISC
