# astro-toc

## 0.2.0

### Minor Changes

- fea06de: ## **astro-toc**

  **Feat:** Apply passed in scoped styles

  ```jsx
  <style>
    .text-large {
      font-size: 3rem;
    }
  </style>
  <TOC toc={toc} class="text-large" />
  ```

  ***

  **Feat:** Use `depth` prop to set initial depth

  ```jsx
  <TOC toc={toc} depth={2} />
  ```

  ***

  **BREAKING CHANGE:** `use` prop for custom component

  Previously `use` prop would default to `<menu>`. Default is now `<ul>`. Use `as` prop to define list type.

  ```diff
    <TOC
      toc={toc}
      use={MyComponent}
  - />
  +   as="menu"
  + />
  ```

  ***

  **BREAKING CHANGE:** Changed `maxDepth` prop type to number

  ```diff
    <TOC
      toc={toc}
  -   maxDepth="2"
  +   maxDepth={2}
    />
  ```

## 0.1.3

### Patch Changes

- 91274d4: Fixes #3 Last subheader was skipped during render.

  Thanks @newvicklee for pointing that out.

## 0.1.2

### Patch Changes

- 2da733a: Feat: Added `as` to replace the current use of `style` prop to define the element type.

  - The use of `style` is ambiguous as it's a [global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

  ```diff
  <TOC
  - style="menu"
  + as="menu"
    {...toc}
  />
  ```

## 0.1.1

### Patch Changes

- ef12345: Fixes missing `<a>` element when `url` is in payload
