export const isScrolledIntoViewPerc = (el) => {
  let elemTop = el.offsetTop;
  let elemHeight = el.offsetHeight;
  let elemBottom = elemTop + elemHeight;
  let screenTop = document.documentElement.scrollTop;
  let screenBottom = screenTop + window.innerHeight;
  let result = 0;

  if (elemTop > screenTop) {
    // scrolled off bottom of screen
    if (elemBottom < screenBottom) {
      // fully
      result = 100;
    } else if (elemTop < screenBottom) {
      // partially
      result = ((screenBottom - elemTop) / elemHeight) * 100;
    }
  } else if (elemBottom > screenTop) {
    // scrolled off top of screen
    result = ((elemBottom - screenTop) / elemHeight) * 100;
  }

  return +result.toFixed(2);
};
