import { useLoaderData, useLocation, useNavigate } from "react-router";

import { GalleryModal } from '../components/gallery/GalleryModal';

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

  const navigate = useNavigate();
  const { topic, galleryImages } = useLoaderData();

  function onClose() {
    if (location.key !== "default") {
      navigate(-1);
    }
    else {
      navigate(`/${source}`, {preventScrollReset: true});
    }
  }

  return (
    <GalleryModal
      onClose={onClose}
      topic={topic}
      galleryImages={galleryImages} />
  );
}
