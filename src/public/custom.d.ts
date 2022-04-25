declare module "*.bmp";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
  };