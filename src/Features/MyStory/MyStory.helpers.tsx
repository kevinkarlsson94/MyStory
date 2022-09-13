export const generateYearsOption = (startValue: number, increments: number) =>
  Array(increments)
    .fill("")
    .map((_, i) => <option value={startValue + i}>{startValue + i}</option>)

export const scrollToBottomOfPage = () =>
  window.scroll({
    top: document.body.offsetHeight,
    behavior: "smooth",
  })
