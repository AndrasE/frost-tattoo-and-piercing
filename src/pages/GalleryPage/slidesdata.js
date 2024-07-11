const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

export const slides = [
  {
    asset: require("../../images/galleryPageImgs/1.jpg"),
    width: 3840,
    height: 5760,
  },
  {
    asset: require("../../images/galleryPageImgs/2.jpg"),
    width: 3840,
    height: 5070,
  },
  {
    asset: require("../../images/galleryPageImgs/3.jpg"),
    width: 3840,
    height: 5120,
  },
  {
    asset: require("../../images/galleryPageImgs/4.jpg"),
    width: 3840,
    height: 2546,
  },
].map(({ asset, width, height }) => ({
  src: asset,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: asset,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default slides;

// const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

// export const slides = [
//   {
//     asset: require("../../images/galleryPageImgs/1.jpg"),
//     width: 3840,
//     height: 5760,
//   },
//   {
//     asset: require("../../images/galleryPageImgs/2.jpg"),
//     width: 3840,
//     height: 5070,
//   },
//   {
//     asset: require("../../images/galleryPageImgs/3.jpg"),
//     width: 3840,
//     height: 5120,
//   },
//   {
//     asset: require("../../images/galleryPageImgs/4.jpg"),
//     width: 3840,
//     height: 2546,
//   },
// ].map(({ asset, width, height }) => ({
//   src: asset,
//   width,
//   height,
//   srcSet: breakpoints.map((breakpoint) => ({
//     src: asset,
//     width: breakpoint,
//     height: Math.round((height / width) * breakpoint),
//   })),
// }));

// export default slides;
