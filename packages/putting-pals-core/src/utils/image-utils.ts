import type { DomainImageAsset } from "@putting-pals/putting-pals-schema/types";

export function getImageUrl(
  imageAsset: DomainImageAsset,
  imageFormat: "jpg" | "png",
  imageAdjustment?: string,
) {
  if (imageAdjustment === undefined) {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  } else {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/${imageAdjustment}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  }
}
