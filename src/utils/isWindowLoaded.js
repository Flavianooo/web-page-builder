export default async function isWindowLoaded() {
  await new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.onload = resolve;
    }
  });
  return true;
}
