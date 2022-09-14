export const scrollToBottomOfPage = () =>
  window.scroll({
    top: document.body.offsetHeight,
    behavior: "smooth",
  })
