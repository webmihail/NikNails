document.addEventListener('DOMContentLoaded', () => {
  let hideMagic = false;

  const onIntersection = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (!hideMagic) makeMagicText();
        hideMagic = true;
      }
    }
  };

  const observer = new IntersectionObserver(onIntersection);
  observer.observe(document.querySelector('.animate'));
});
