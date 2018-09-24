/**
 * Modal carrinho
 */
function toggleModal() {
  const modalClass = document.getElementById("modal").classList;

  if(modalClass.contains('is-active')) {
    modalClass.remove('is-active');
  } else {
    modalClass.add('is-active')
  }
}