export const clickCounter = (node: Element, setState: Function) => {
  let count = 0;

  const clickHandler = (event: any) => {
    count++;
    count === 5 ? setState(true) : setState(false);
    if (count > 5) count = 0;
  };

  if (count > 5) {
    count = 0;
    node.removeEventListener('click', clickHandler);
  } else {
    node.addEventListener('click', clickHandler);
  }
};
