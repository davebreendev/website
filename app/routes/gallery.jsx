import { useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const source = location.state?.source || ''
  let navigate = useNavigate();
  let { topic, galleryImages } = useLoaderData();
  let buttonRef = useRef(null);

  function onClose() {
    navigate(`/${source}`);
  }

  return createPortal(
    <GalleryModal
      onClose={onClose}
      initialFocusRef={buttonRef}
      topic={topic}
      galleryImages={galleryImages} />,
    document.body
  );
}