import { useEffect, useRef, useState } from 'react';

import { getCentralImageUrl } from '../../utils/imageResolver';

import styles from './GalleryModal.module.css';

export function GalleryModal({ onClose, topic, galleryImages }) {
  const modalRef = useRef(null);
  const previousElementRef = useRef(null);
  const [focusIndex, setFocusIndex] = useState(0);
  const mainImage = galleryImages[focusIndex];

  const handleImageFocus = (image) => {
    setFocusIndex(galleryImages.indexOf(image));
  }

  useEffect(() => {

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

  }, [onClose]);

  return (
    <div
      className={styles.modalBackground}
      onClick={onClose}
    >
      <h2 className={styles.closeModal}>X Close</h2>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={topic}
        tabIndex={-1}
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.galleryModal}>
          <div className={styles.galleryViewer} key={mainImage["name"]}>
            <img
              className={styles.galleryMainImage}
              src={getCentralImageUrl(mainImage["name"])}
              alt={mainImage["alt"]} />
            <h3 className={styles.mainImageCaption}>{mainImage["caption"]}</h3>
          </div>

          <div className={styles.galleryThumbnails}>
            {galleryImages.map((image) => {
              return (
                <div className={`${styles.thumbnail} ${mainImage === image ? styles.activeThumbnail : ''}`} key={image.name}>
                  <img
                    src={getCentralImageUrl(image.name)}
                    alt={image.alt}
                    onClick={() => handleImageFocus(image)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
