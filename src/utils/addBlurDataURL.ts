import { getPlaiceholder } from "plaiceholder";

interface BasicImage {
  height?: number;
  src: string;
  width?: number;
}

interface BlurImageData {
  blurDataURL: string;
  blurHeight?: number;
  blurWidth?: number;
}

const getImageBase64 = async (imageSrc: string): Promise<string> => {
  const res = await fetch(imageSrc);

  const buffer = await res.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return base64;
};

export const addBlurDataURL = async <TImage extends BasicImage>(
  ...images: TImage[]
): Promise<(TImage & BlurImageData)[]> => {
  const base64Promises = images.map((img) => getImageBase64(img.src));

  const base64Results = await Promise.all(base64Promises);

  return images.map((image, i) => ({
    ...image,
    blurDataURL: base64Results[i],
    blurWidth: image.width,
    blurHeight: image.height,
  }));
};
