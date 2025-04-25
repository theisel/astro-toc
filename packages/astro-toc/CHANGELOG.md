# astro-toc

## 0.2.0

### Minor Changes

- 8e73709: **Feat:** Apply HTML attributes (e.g. `class`, `data-*`) to root and nested list elements.

  ```jsx
  ---
  const toc = [
    { depth: 1, title: "Level 1, Item 1" },
    { depth: 2, title: "Level 2, Item 1" },
    { depth: 2, title: "Level 2, Item 2" },
    { depth: 3, title: "Level 3, Item 1" },
    { depth: 1, title: "Level 1, Item 2" },
  ];
  ---

  <TOC toc={toc} class="toc-container" />

  <style>
    .toc-container {
      padding: 1rem;
    }
  </style>
  ```

  HTML Output:

  ```html
  <ul data-astro-toc="1" class="toc-container" data-astro-cid-j7pv25f6="true">
    <li data-astro-toc="1">
      Level 1, Item 1
      <ul data-astro-toc="2" class="toc-container" data-astro-cid-j7pv25f6="true">
        <li data-astro-toc="2">Level 2, Item 1</li>
        <li data-astro-toc="2">
          Level 2, Item 2
          <ul data-astro-toc="3" class="toc-container" data-astro-cid-j7pv25f6="true">
            <li data-astro-toc="3">Level 3, Item 1</li>
          </ul>
        </li>
      </ul>
    </li>
    <li data-astro-toc="1">Level 1, Item 2</li>
  </ul>
  ```

- fea06de: **Feat:** Use `depth` prop to set initial depth

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

### Patch Changes

- 1dd1721: Fix TypeScript resolution by centralizing definitions in `types.ts` and refactoring the entry point (`index.ts`). Adds type safety and improves DX for TS users.

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
