import type { GalleryItemKind } from "./types";

export function kindBadgeLabel(kind: GalleryItemKind): string {
  switch (kind) {
    case "concept":
      return "Demo Concept";
    case "live-demo":
      return "Live demo";
    case "case-study":
      return "Case study";
    case "template":
      return "Template";
    case "ui-study":
      return "UI study";
  }
}