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
    <>
      <div
        className={styles.modalBackground}
        onClick={onClose}
      >
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={topic}
          tabIndex={-1}
          className={styles.modalContent}
          onClick={(event) => event.stopPropagation()}
        >
          <div key={mainImage["name"]}>
            <img
              src={getCentralImageUrl(mainImage["name"])}
              alt={mainImage["alt"]} />
            <h3>{mainImage["caption"]}</h3>
          </div>

          <div className={styles.imageList}>
            {galleryImages.map((image) => {
              return (
                <div className={styles.imageItem} key={image.name}>
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
    </>
  );
}

/*

  {education.map((institution, index) => {
    return (
      <div className={styles.institution} key={index}>
        <div className={styles.institutionImage}>
          <img
            src={getCentralImageUrl(institution.img)} />
        </div>
        <div className={styles.institutionLabel}>
          <h2>{institution.name}</h2>
          <h3>{institution.attendance}</h3>
          {
            index === education.length - 1 && (
              <div className={styles.siteLink} >
                <Link to='/education' className={styles.siteLinkRef}>Education Home</Link>
              </div>
            )
          }
        </div>
      </div>
    );

*/