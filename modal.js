initModals();

function initModals() {
  const allModalDialog = document.querySelectorAll('.modal-dialog');

  allModalDialog.forEach(modalDialog => {
    modalDialog.addEventListener('click', (e) => {
      if (e.target === modalDialog) {
        hideModal(modalDialog.id);
      }
    });
  });
}

function showModal(id) {
  document.body.style.overflow = 'hidden';
  document.getElementById(id)?.showModal();
}

function hideModal(id) {
  const modalDialog = document.getElementById(id);
  
  if (!modalDialog) return;
  
  document.body.style.overflow = '';
  modalDialog?.close();
}
