const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

function assetLink(asset, width) {
  return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(
    `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

export const slides = [
  { asset: "image01.cd7ee301.jpeg", width: 3840, height: 5760 },
  { asset: "image02.da10388f.jpeg", width: 3840, height: 5070 },
  { asset: "image03.a6580cde.jpeg", width: 3840, height: 5120 },
  { asset: "image04.cb767d7c.jpeg", width: 3840, height: 2546 },
  { asset: "image05.fdbef001.jpeg", width: 3840, height: 5760 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default slides;
