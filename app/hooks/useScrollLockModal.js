import { useEffect } from 'react';

export function useScrollLockModal(modalActive) {
  useEffect(() => {
    if (!modalActive) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup restores scroll when modal closes or unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [modalActive]);
}