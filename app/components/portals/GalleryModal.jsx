import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './GalleryModal.module.css';

export function GalleryModal({ openGallery, onClose, titleId, children }) {
  const modalRef = useRef(null);
  const previousElementRef = useRef(null);

  useEffect(() => {
    if (!openGallery) return;

    previousElementRef.current = document.activeElement.parentElement;

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
        {children}
      </div>
    </div>,
    document.body
  );
}
