/**
 * Represents a single item in a Table of Contents (ToC).
 */
export interface TocItem {
  /**
   * Source heading level (1=&lt;h1&gt;, 2=&lt;h2&gt;, ...).
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
 * @typeParam T - The shape of items in the ToC array, extending {@link TocItem}.
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
