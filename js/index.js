const referralButton = document.querySelector('.friends__invite-ref-copy');
const referralLink = document.querySelector('.friends__invite-ref-link');

if (referralButton && referralLink) {
  referralButton.addEventListener('click', () => {
    navigator.clipboard.writeText(referralLink.innerText);
  });
}
