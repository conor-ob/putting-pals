import type { ApiImageAssetFieldsFragment } from "../generated/graphql";

export function getImageUrl(
  imageAsset: ApiImageAssetFieldsFragment,
  imageFormat: "jpg" | "png",
  imageAdjustment?: string,
): string {
  if (imageAdjustment === undefined) {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  } else {
    return `https://res.cloudinary.com/${imageAsset.imageOrg}/${imageAdjustment}/d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
  }
}
