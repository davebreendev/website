// import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLoaderData, useNavigate } from "react-router";

import { GalleryModal } from '../components/portals/GalleryModal';

import {
  getImages
} from "../.server/site-data";

export async function loader({ params }) {
  const topic = params.topic;
  const galleryImages = await getImages(topic);
  console.log(`topic: ${topic}`);
  console.log(`images: ${JSON.stringify(galleryImages)}`);
  return { topic, galleryImages };
}

export default function Gallery() {
  let navigate = useNavigate();
  let { topic, galleryImages } = useLoaderData();
  // let buttonRef = useRef(null);

  function onClose() {
    navigate(-1);
  }

  return createPortal(
    <GalleryModal
      openGallery={true}
      onClose={onClose}
      // initialFocusRef={buttonRef}
      topic={topic}
      galleryImages={galleryImages} />,
    document.body
  );
}