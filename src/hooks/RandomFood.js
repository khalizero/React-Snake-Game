export const randomPos = (max = 31) => {
  let x = ~~(Math.random() * max);
  let y = ~~(Math.random() * max);
  x < 1 && (x = 1);
  y < 1 && (y = 1);
  return { x, y };
};
