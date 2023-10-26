---
"astro-toc": minor
---

## **astro-toc**

**Feat:** Apply passed in scoped styles

```jsx
<style>
  .text-large {
    font-size: 3rem;
  }
</style>
<TOC toc={toc} class="text-large" />
```

---

**Feat:** Use `depth` prop to set initial depth

```jsx
<TOC toc={toc} depth={2} />
```

---

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

---

**BREAKING CHANGE:** Changed `maxDepth` prop type to number

```diff
  <TOC
    toc={toc}
-   maxDepth="2"
+   maxDepth={2}
  />
```
