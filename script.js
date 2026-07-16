const CORRECT_PASSWORD = "10092007";

const gate = document.getElementById('gate');
const scene = document.getElementById('scene');
const letter = document.getElementById('letter');
const gateCard = document.querySelector('.gate-card');
const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const gateError = document.getElementById('gateError');
const envelopeWrap = document.getElementById('envelopeWrap');
const envelope = document.getElementById('envelope');
const touchLabel = document.getElementById('touchLabel');

function showScreen(el){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function tryUnlock(){
  const value = passwordInput.value.trim();
  if(value === CORRECT_PASSWORD){
    showScreen(scene);
  } else {
    gateError.classList.add('show');
    gateCard.classList.remove('shake');
    void gateCard.offsetWidth; // restart animation
    gateCard.classList.add('shake');
  }
}

unlockBtn.addEventListener('click', tryUnlock);
passwordInput.addEventListener('keydown', e => {
  if(e.key === 'Enter') tryUnlock();
});

envelopeWrap.addEventListener('click', () => {
  if(envelopeWrap.classList.contains('opening')) return;
  envelopeWrap.classList.add('opening');
  envelope.classList.add('opened');
  touchLabel.style.transition = 'opacity .4s ease';
  touchLabel.style.opacity = '0';
  setTimeout(() => {
    showScreen(letter);
  }, 800);
});
