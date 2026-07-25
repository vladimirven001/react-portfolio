export function linkProps(href) {
  if (href.startsWith("mailto:")) {
    return {};
  }

  return {
    rel: "noreferrer",
    target: "_blank",
  };
}
