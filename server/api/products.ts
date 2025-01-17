import data from "./example_1.json";

export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000)
  });
});
