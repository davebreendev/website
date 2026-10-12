import { GalleryModal } from '../components/portals/GalleryModal';

import {
  getGallery,
  getImages
} from "../.server/site-data";

export async function loader({ galleryId }) {
  const gallery = await getGallery(galleryId);
  const galleryImages = await getImages(gallery.subject);
  console.log(`images: ${JSON.stringify(galleryImages)}`);
  return galleryImages;
}

export default function Gallery() {
  return (
    <GalleryModal />
  );
}