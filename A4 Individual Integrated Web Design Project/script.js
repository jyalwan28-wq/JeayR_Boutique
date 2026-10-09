/*========================================== ISO229 ASSESSMENT 4 - INTEGRATED JAVASCRIPT FEATURES Project: JeayR Boutique ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /*------------------------------ FEATURE 1: PRODUCT IMAGE LIGHTBOX / MODAL Task: Allows shoppers to expand product images and view full captions. ------------------- */

  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const closeModalBtn = document.querySelector('.close-modal');
  const productImages = document.querySelectorAll('.product-card img');

  if (modal && productImages.length > 0) {
    productImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.setAttribute('title', 'Click to view larger image');

      img.addEventListener('click', () => {
        if (modalImg && modalCaption) {
          modal.style.display = 'block';
          modalImg.src = img.src;
          modalImg.alt = img.alt || 'JeayR Boutique product details';
          modalCaption.textContent = img.alt || 'Handcrafted PNG product detail view';
        }

        if (closeModalBtn) closeModalBtn.focus();
      });
    });

    const hideModal = () => {
      modal.style.display = 'none';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);

    window.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') hideModal();
    });
  }

  /*-------------------------- FEATURE 2: INTERACTIVE FORM VALIDATION Task: Validates customer order inputs before submission with visual feedback. ------------------------ */

  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    const feedbackBanner = document.getElementById('form-feedback');

    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      document.querySelectorAll('.error-msg').forEach(el => {
        el.textContent = '';
      });

      document.querySelectorAll('.input-error').forEach(el => {
        el.classList.remove('input-error');
      });

      const nameInput = document.getElementById('fullname');
      if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'name-error', 'Please enter your full name.');
        isValid = false;
      }

      const emailInput = document.getElementById('email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'email-error', 'Please enter a valid email address.');
        isValid = false;
      }

      const phoneInput = document.getElementById('phone');
      const phonePattern = /^\d{7,8}$/;
      const cleanPhone = phoneInput.value.replace(/[\s-]/g, '');
      if (!cleanPhone || !phonePattern.test(cleanPhone)) {
        showFieldError(phoneInput, 'phone-error', 'Enter a valid PNG phone number (7–8 digits).');
        isValid = false;
      }

      const productSelect = document.getElementById('product-select');
      if (!productSelect.value) {
        showFieldError(productSelect, 'product-error', 'Please select a product from the list.');
        isValid = false;
      }

      if (feedbackBanner) {
        if (isValid) {
          feedbackBanner.className = 'feedback-banner success';
          feedbackBanner.textContent = '✓ Thank you! Your order inquiry has been submitted successfully.';
          orderForm.reset();
        } else {
          feedbackBanner.className = 'feedback-banner error';
          feedbackBanner.textContent = '⚠ Please correct the highlighted errors above before submitting.';
        }
      }
    });

    function showFieldError(inputElem, errorSpanId, message) {
      inputElem.classList.add('input-error');
      const errorSpan = document.getElementById(errorSpanId);
      if (errorSpan) errorSpan.textContent = message;
    }
  }
});

