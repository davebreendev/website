import { useCallback, useEffect, useRef, useState } from 'react';

import { getCentralImageUrl } from '../../utils/imageResolver';
import { useScrollLockModal } from '../../hooks/useScrollLockModal';
import { useFocusTrapModal } from '../../hooks/useFocusTrapModal';
import styles from './GalleryModal.module.css';

export function GalleryModal({ onClose, topic, galleryImages }) {
  const modalRef = useRef(null);
  const [mainIndex, setMainIndex] = useState(0);
  const [modalActive, setModalActive] = useState(true);
  const mainImage = galleryImages[mainIndex];

  const handleImageFocus = (image) => {
    setMainIndex(galleryImages.indexOf(image));
  }

  const handleKeyPress = (event, image) => {
    if (event.key === "Enter" && mainImage !== image) {
      handleImageFocus(image);
    }
  }

  const handleClose = useCallback(() => {
    setModalActive(false);
    onClose();
  }, [onClose]);

  useScrollLockModal(modalActive);
  useFocusTrapModal(modalRef, handleClose);

  return (
    <div
      className={styles.modalBackground}
      onClick={handleClose}
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
              alt={mainImage["alt"]}
            />
            <h3 className={styles.mainImageCaption}>{mainImage["caption"]}</h3>
          </div>

          <div className={styles.galleryThumbnails}>
            {galleryImages.map((image) => {
              return (
                <button
                  className={`${styles.thumbnail} ${mainImage === image ? styles.activeThumbnail : ''}`}
                  key={image.name}
                  onKeyDown={(event) => handleKeyPress(event, image)}
                  id={image.name}
                  onClick={() => handleImageFocus(image)}
                >
                  <img
                    src={getCentralImageUrl(image.name)}
                    alt={image.alt}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
