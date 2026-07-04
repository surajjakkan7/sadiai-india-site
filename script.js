document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! This form is not yet connected to a backend — hook it up to Formspree, Google Forms, or your own API to start receiving these leads.');
    leadForm.reset();
  });
}

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '62px';
    navLinks.style.right = '28px';
    navLinks.style.left = '28px';
    navLinks.style.background = '#FFFFFF';
    navLinks.style.border = '1px solid #E7E8F2';
    navLinks.style.borderRadius = '14px';
    navLinks.style.padding = '18px 22px';
    navLinks.style.gap = '16px';
  });
}

/* ---------- Razorpay payment ----------
   TEST MODE ONLY. Replace 'rzp_test_XXXXXXXXXXXX' with your real
   Razorpay Key ID from Dashboard > Settings > API Keys.
   IMPORTANT: creating the Order and verifying payment signature
   must happen on a server you control (Render, etc.) — this
   front-end-only version opens checkout but does not verify
   payment. Do not go live without a server-side order + verify step. */
const RAZORPAY_KEY_ID = 'rzp_test_XXXXXXXXXXXX';

document.querySelectorAll('.pay-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const plan = btn.getAttribute('data-plan');
    const amountRupees = parseInt(btn.getAttribute('data-amount'), 10);

    if (typeof Razorpay === 'undefined') {
      alert('Payment checkout could not load. Check your internet connection and try again.');
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountRupees * 100, // Razorpay expects paise
      currency: 'INR',
      name: 'sadiaiindia',
      description: plan + ' Plan — Monthly Subscription',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id + '\n\nNote: this still needs to be verified on your server before granting access.');
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#22306B'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  });
});
