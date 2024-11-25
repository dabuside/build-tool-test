import { asyncLog } from "npm-source";

asyncLog("from npm package");

export async function asyncLog2(...args: any[]) {
  await wait(0);
  console.log(args);
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
asyncLog2("from source code");
