/**
 * Modal Management System
 * Handles opening and closing of modal dialogs
 */

document.addEventListener('DOMContentLoaded', () => {
  // Get all modal trigger buttons and close buttons
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modalCloseButtons = document.querySelectorAll('.modal-close');

  // Event listeners for opening modals
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Event listeners for closing modals
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal');
      closeModal(modalId);
    });
  });

  // Close modal when clicking outside of modal-content
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
});

/**
 * Open a modal dialog
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close a modal dialog
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    // Check if there are still active modals
    const activeModals = document.querySelectorAll('.modal.active');
    if (activeModals.length === 0) {
      document.body.style.overflow = 'auto';
    }
  }
}
