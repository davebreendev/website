import { useEffect, useRef } from "react";

const FOCUS_ELEMENTS =
  'button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUS_ELEMENTS)).filter(
    (element) => element.offsetParent !== null
  );
}

export function useFocusTrapModal(modalRef, handleClose) {
  const onCloseRef = useRef(handleClose);
  const hasInitialFocusRef = useRef(false);

  useEffect(() => {
    onCloseRef.current = handleClose;
  }, [handleClose]);

  useEffect(() => {
    const element = modalRef.current;
    if (!element) return;

    if (!hasInitialFocusRef.current) {
      const initialFocus = getFocusableElements(element);
      if (initialFocus[0]) {
        initialFocus[0].focus();
      }
      hasInitialFocusRef.current = true;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current?.();
        return;
      }

      if (event.key === "Tab") {
        const focusable = getFocusableElements(element);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    element.addEventListener("keydown", handleKeyDown);

    return () => {
      element.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalRef]);
}
