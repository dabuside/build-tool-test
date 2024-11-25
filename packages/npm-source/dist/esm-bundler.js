export async function asyncLog(...args) {
  await wait(0);
  console.log(args);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
