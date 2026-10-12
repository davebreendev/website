import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLoaderData, useNavigate } from "react-router";

import styles from './GalleryModal.module.css';


/*
route: galleryModal

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

export default function GalleryRoute() {
  return (
    <GalleryModal />
  );
}
*/

/*
import { useLoaderData, useNavigate } from "react-router";
import { createPortal } from "react-dom";
import { getGalleryId, getImages } from "~/.server/site-data";

export async function loader({ params }) {
  /* Fetches DB data lazily ONLY when the modal route is visited
  const topic = params.topic;
  const galleryId = await getGalleryId(topic);
  const gallery = await getImages(galleryId);
  return { topic, gallery };
}

export default function GalleryModal() {
  const { gallery } = useLoaderData();
  const navigate = useNavigate();

  const handleClose = () => {
    /* Navigating up one level returns the URL to /education and unmounts the modal
    navigate(".."); 
  };

  const modalContent = (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose}>Close</button>
        <div className="gallery-grid">
          {gallery.map((img) => (
            <img key={img.id} src={img.url} alt={img.caption} />
          ))}
        </div>
      </div>
    </div>
  );

  /* Render using a Portal (or direct fixed position JSX)
  return createPortal(modalContent, document.body);
}
*/

export function GalleryModal({ openGallery, onClose, titleId }) {
  const modalRef = useRef(null);
  const previousElementRef = useRef(null);
  const { galleryImages } = useLoaderData();

  useEffect(() => {
    if (!openGallery) return;

    previousElementRef.current = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'h1'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousElementRef.current?.focus();
    };
  }, [openGallery, onClose]);

  if (!openGallery || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className={styles.modalBackground}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {JSON.stringify(galleryImages)}
      </div>
    </div>,
    document.body
  );
}
