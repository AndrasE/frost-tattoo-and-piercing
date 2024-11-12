const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const photos = [
  {
    asset: require("../../images/galleryPageImgs/10.jpg"),
    width: 1336,
    height: 1564,
  },
  {
    asset: require("../../images/galleryPageImgs/11.jpg"),
    width: 948,
    height: 640,
  },
  {
    asset: require("../../images/galleryPageImgs/14.jpg"),
    width: 1306,
    height: 1775,
  },

  {
    asset: require("../../images/galleryPageImgs/15.jpg"),
    width: 1350,
    height: 1579,
  },
  {
    asset: require("../../images/galleryPageImgs/21.jpg"),
    width: 925,
    height: 1354,
  },
  {
    asset: require("../../images/galleryPageImgs/17.jpg"),
    width: 1670,
    height: 1880,
  },
  {
    asset: require("../../images/galleryPageImgs/46.jpg"),
    width: 1043,
    height: 1385,
  },
  {
    asset: require("../../images/galleryPageImgs/18.jpg"),
    width: 1040,
    height: 1201,
  },
  {
    asset: require("../../images/galleryPageImgs/20.jpg"),
    width: 569,
    height: 659,
  },

  {
    asset: require("../../images/galleryPageImgs/13.jpg"),
    width: 1168,
    height: 1599,
  },
  {
    asset: require("../../images/galleryPageImgs/24.jpg"),
    width: 1076,
    height: 1337,
  },
  {
    asset: require("../../images/galleryPageImgs/31.jpg"),
    width: 957,
    height: 1556,
  },

  {
    asset: require("../../images/galleryPageImgs/25.jpg"),
    width: 1191,
    height: 1313,
  },
  {
    asset: require("../../images/galleryPageImgs/26.jpg"),
    width: 1216,
    height: 1277,
  },

  {
    asset: require("../../images/galleryPageImgs/27.jpg"),
    width: 1452,
    height: 1702,
  },
  {
    asset: require("../../images/galleryPageImgs/30.jpg"),
    width: 972,
    height: 1592,
  },
  {
    asset: require("../../images/galleryPageImgs/23.jpg"),
    width: 959,
    height: 1615,
  },
  {
    asset: require("../../images/galleryPageImgs/22.jpg"),
    width: 954,
    height: 1108,
  },
  {
    asset: require("../../images/galleryPageImgs/35.jpg"),
    width: 1193,
    height: 1417,
  },
  {
    asset: require("../../images/galleryPageImgs/32.jpg"),
    width: 793,
    height: 1065,
  },
  {
    asset: require("../../images/galleryPageImgs/34.jpg"),
    width: 1044,
    height: 1404,
  },

  {
    asset: require("../../images/galleryPageImgs/40.jpg"),
    width: 1219,
    height: 1299,
  },
  {
    asset: require("../../images/galleryPageImgs/41.jpg"),
    width: 1107,
    height: 1820,
  },
  {
    asset: require("../../images/galleryPageImgs/42.jpg"),
    width: 1150,
    height: 1390,
  },
  {
    asset: require("../../images/galleryPageImgs/43.jpg"),
    width: 640,
    height: 986,
  },
  {
    asset: require("../../images/galleryPageImgs/44.jpg"),
    width: 1077,
    height: 1150,
  },
  {
    asset: require("../../images/galleryPageImgs/12.jpg"),
    width: 917,
    height: 917,
  },
  {
    asset: require("../../images/galleryPageImgs/16.jpg"),
    width: 640,
    height: 744,
  },

  {
    asset: require("../../images/galleryPageImgs/50.jpg"),
    width: 999,
    height: 1471,
  },
  {
    asset: require("../../images/galleryPageImgs/51.jpg"),
    width: 1050,
    height: 1418,
  },
  {
    asset: require("../../images/galleryPageImgs/54.jpg"),
    width: 964,
    height: 1001,
  },

  {
    asset: require("../../images/galleryPageImgs/61.jpg"),
    width: 933,
    height: 1055,
  },
  {
    asset: require("../../images/galleryPageImgs/62.jpg"),
    width: 977,
    height: 1054,
  },
  {
    asset: require("../../images/galleryPageImgs/63.jpg"),
    width: 643,
    height: 477,
  },
  {
    asset: require("../../images/galleryPageImgs/60.jpg"),
    width: 540,
    height: 714,
  },
  {
    asset: require("../../images/galleryPageImgs/64.jpg"),
    width: 640,
    height: 781,
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
