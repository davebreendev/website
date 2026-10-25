import { useLoaderData, useLocation, useNavigate } from "react-router";

import { GalleryModal } from '../components/portals/GalleryModal';

import {
  getImages
} from "../.server/site-data";

export async function loader({ params }) {
  const topic = params.topic;
  const galleryImages = await getImages(topic);
  return { topic, galleryImages };
}

export default function Gallery() {

  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);
  const galleryIndex = pathname.indexOf('gallery');
  const source = pathname.slice(0, galleryIndex);

  console.log(`source: /${source}`);

  let navigate = useNavigate();
  let { topic, galleryImages } = useLoaderData();

  function onClose() {
    navigate(`/${source}`);
  }

  return (
    <GalleryModal
      onClose={onClose}
      topic={topic}
      galleryImages={galleryImages} />
  );
}
