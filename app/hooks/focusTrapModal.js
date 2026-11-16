import { useEffect } from "react";

export function focusTrapModal(modalRef, handleClose) {

  useEffect(() => {

    const element = modalRef.current;
    const focusableElements = element.querySelectorAll(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (firstElement) firstElement.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
        else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalRef, handleClose]);
}