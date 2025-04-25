<div>
  <img src="https://raw.githubusercontent.com/theisel/astro-toc/main/logo.svg" width="240" alt="astro-toc logo">
</div>

# astro-toc

![license](https://img.shields.io/npm/l/astro-toc?style=flat-square)
[![npm](https://img.shields.io/npm/v/astro-toc?style=flat-square)](https://www.npmjs.com/package/astro-toc)

A flexible Table of Contents (ToC) generator for [Astro](https://astro.build/). Perfect for blogs, documentation, or any content-rich Astro page which benefits from in-page navigation.

> **Note**: In this documentation:
>
> - `TOC` refers to the Astro component (`<TOC />`)
> - `ToC` refers to the data or concept of a Table of Contents

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic example](#basic-example)
  - [Custom component example](#custom-component-example)
- [API](#api)
  - [Component Props](#component-props-tocpropst-extends-tocitem--tocitem)
  - [TypeScript Types](#typescript-types)
- [License](#license)

## Features

- 🧩 Flexible: Use custom component for enhanced render output
- 📐 Fine-tune: Use `depth` and `maxDepth` props to control nested level range
- 🗂️ Semantic output: Uses native `ul`, `ol`, or `menu` elements
- ⚙️ TypeScript friendly

## Demo

Try it out on:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-toc/tree/main/demo) 
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/theisel/astro-toc/tree/main/demo)

## Installation

Choose your favorite package manager and install `astro-toc`.

```bash
npm install astro-toc
# or
pnpm add astro-toc
# or
yarn add astro-toc
# or
bun add astro-toc
```

## Usage

Provide your `ToC` data as an array of `TocItem` objects (each requiring `depth` and `title`, with optional `url`). Pass this data to the `TOC` component for rendering.

### Basic example

```ts
---
/* pages/index.astro */
import type { TocItem } from "astro-toc";

const toc = [
  { depth: 1, title: "Main Stage - Friday", url: "#main-stage-friday" },
  { depth: 2, title: "The Rock Lobsters (8pm)", url: "#the-rock-lobsters" },
  { depth: 2, title: "Cosmic Latte (10pm)", url: "#cosmic-latte" },
  { depth: 1, title: "Dance Tent - Friday", url: "#dance-tent" },
  { depth: 2, title: "DJ SpinCycle (9pm)", url: "#dj-spincycle" },
  { depth: 2, title: "GlitterBomb (11pm)", url: "#glitterbomb" },
  { depth: 1, title: "Main Stage - Saturday", url: "#main-stage-saturday" },
  { depth: 2, title: "The Acousticats (7pm)", url: "#the-acousticats" },
  { depth: 2, title: "Planet Groove (9pm)", url: "#planet-groove" },
  { depth: 1, title: "Food & Merch", url: "#food-merch"},
  { depth: 2, title: "Vegan Delights", url: "#food-vegan"},
  { depth: 2, title: "Band T-Shirts", url: "#merch-shirts"},
] satisfies TocItem[];
---

<TOC toc={toc} />
```

### Custom component example

Implementing a `custom` component allows you to create a richer, more styled ToC output. Extend the `TocItem` with extra props and use them in your component.

```ts
---
/* pages/index.astro */
import type { TocItem } from "astro-toc";
import Card, { type CardProps } from "@/components/Card.astro";

const toc = [
  { depth: 1, title: "Main Stage - Friday", url: "#main-stage-friday", icon: "location" },
  { depth: 2, title: "The Rock Lobsters (8pm)", url: "#the-rock-lobsters", icon: "microphone" },
  { depth: 2, title: "Cosmic Latte (10pm)", url: "#cosmic-latte", icon: "microphone" },
  { depth: 1, title: "Dance Tent - Friday", url: "#dance-tent", icon: "location" },
  { depth: 2, title: "DJ SpinCycle (9pm)", url: "#dj-spincycle", icon: "microphone" },
  { depth: 2, title: "GlitterBomb (11pm)", url: "#glitterbomb", icon: "microphone" },
  { depth: 1, title: "Main Stage - Saturday", url: "#main-stage-saturday", icon: "location" },
  { depth: 2, title: "The Acousticats (7pm)", url: "#the-acousticats", icon: "microphone" },
  { depth: 2, title: "Planet Groove (9pm)", url: "#planet-groove", icon: "microphone" },
  { depth: 1, title: "Food & Merch", url: "#food-merch", icon: "store"},
  { depth: 2, title: "Vegan Delights", url: "#food-vegan", icon: "food"},
  { depth: 2, title: "Band T-Shirts", url: "#merch-shirts", icon: "apparel"},
] satisfies CardProps[];
---

<TOC toc={toc} use={Card} />
```

```ts
---
// components/Card.astro
import type { TocItem } from "astro-toc";

export interface CardProps extends TocItem {
  icon?: string; // Extra prop
}

type Props = CardProps;

const { title, url, icon, /* depth */ } = Astro.props;
---

<p>
  {icon && <i class={`icon ${icon}`} aria-hidden="true"></i>}
  {url ? <a href={url}>{title}</a> : <span>{title}</span>}
</p>

<style>
  p {
    display: flex;
    column-gap: 1rem;
  }
</style>
```

## API

### Component Props (`TocProps<T extends TocItem = TocItem>`)

The `TOC` component accepts props defined by the generic type `TocProps<T extends TocItem = TocItem>`.

- **Generic `T`**: This represents the shape of a `ToC` item within your `toc` array. It must include the required `depth` and `title` fields.

| Property          | Type                           | Default     | Description                                                                                                                             |
| :---------------- | :----------------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| toc               | `Array<T>`                     | _Required_  | Array of ToC item objects (`T` extends `TocItem`).                                                                                      |
| as                | `bullet` \| `number` \| `menu` | `bullet`    | `Optional` List style: `ul` (`bullet`), `ol` (`number`), or semantic `menu`                                                             |
| depth             | `number`                       | `1`         | `Optional` Minimum heading depth to render (inclusive); controls the starting level.                                                    |
| maxDepth          | `number`                       | `undefined` | `Optional` Maximum heading depth to render (inclusive)                                                                                  |
| use               | `(props: T) => any`            | `undefined` | `Optional` Custom Astro component to render each `ToC` item. Receives item (`T`) as props.                                              |
| HTML&nbsp;Attrs\* | `astroHTML.JSX.HTMLAttributes` | `n/a`       | Standard HTML attributes applied to each list container (`ul`, `ol`, or `menu`), including nested levels. Not applied to `li` elements. |

### TypeScript Types

```ts
/**
 * Represents a single item in a Table of Contents (ToC).
 */
export interface TocItem {
  /**
   * Source heading level (1=<h1>, 2=<h2>, ...).
   */
  depth: number;
  /**
   * The visible text of the heading.
   */
  title: string;
  /**
   * Optional URL fragment (`#id`) for linking to the heading.
   */
  url?: string;
}

/**
 * Props for a component rendering a Table of Contents (ToC).
 *
 * @typeParam T - The shape of items in the ToC array, extending TocItem.
 */
export type TocProps<T extends TocItem = TocItem> = {
  /**
   * List style type: unordered list (`bullet`), ordered list (`number`), or semantic menu.
   *
   * Default is `bullet`.
   */
  as?: "bullet" | "number" | "menu";
  /**
   * Minimum heading depth to include (inclusive).
   *
   * Default is `1`.
   */
  depth?: number;
  /**
   * Maximum heading depth to include (inclusive).
   */
  maxDepth?: number;
  /**
   *  Array of ToC items to render.
   */
  toc: T[];
  /**
   * Optional custom component to render each `ToC` item.
   */
  use?: (item: T) => any;
};
```

## License

ISC
