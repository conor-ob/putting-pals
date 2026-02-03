import type { ImageAsset } from "../../../putting-pals-schema/src";

export function getImageUrl(
  imageAsset: ImageAsset,
  imageFormat: "jpg" | "png",
  imageAdjustment?: string,
): string {
  if (imageAdjustment === undefined) {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  } else {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/${imageAdjustment}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  }
}
