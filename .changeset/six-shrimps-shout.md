---
"astro-toc": patch
---

Feat: Added `as` to replace the current use of `style` prop to define the element type.

- The use of `style` is ambiguous as it's a [global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

```diff
<TOC
- style="menu"
+ as="menu"
  {...toc}
/>
```