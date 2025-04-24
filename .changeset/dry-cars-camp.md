---
"astro-toc": minor
---

**Feat:** Apply HTML attributes (e.g. `class`, `data-*`) to root and nested list elements.

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
