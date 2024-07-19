const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const photos = [
  {
    asset: require("../../images/galleryPageImgs/1.jpg"),
    width: 400,
    height: 400,
  },
  {
    asset: require("../../images/galleryPageImgs/2.jpg"),
    width: 564,
    height: 471,
  },
  {
    asset: require("../../images/galleryPageImgs/3.jpg"),
    width: 739,
    height: 835,
  },
  {
    asset: require("../../images/galleryPageImgs/4.jpg"),
    width: 408,
    height: 376,
  },
].map(({ asset, width, height }) => ({
  src: asset,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: asset,
    width: width,
    height: height * breakpoint,
  })),
}));

export default photos;
