initModals();

function initModals() {
  const allModalDialog = document.querySelectorAll('.modal-dialog');

  allModalDialog.forEach(modalDialog => {
    modalDialog.addEventListener('animationend', () => {
      if (modalDialog.classList.contains('opening')) {
        modalDialog.classList.remove('opening');
        modalDialog.classList.add('open');
      }

      if (modalDialog.classList.contains('closing')) {
        modalDialog.classList.remove('closing', 'open');
      }
    });
  });
}

function showModal(id) {
  const modalDialog = document.getElementById(id);

  if (!modalDialog) return;

  modalDialog.classList.add('opening');
}

function hideModal(id) {
  const modalDialog = document.getElementById(id);

  if (!modalDialog) return;

  modalDialog.classList.add('closing');
}
