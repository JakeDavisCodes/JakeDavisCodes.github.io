export function scrollTo(id) {
  const e = document.getElementById(id);
  const y = e.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// When more reusable functions are added this function should be removed
export function removeMe() {}
