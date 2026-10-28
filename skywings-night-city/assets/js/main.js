const destinations = [
  { name: '霓虹不夜城 // 新東京', desc: '本週 3 人飛往此處 // 平均 4h 20m' },
  { name: '酸雨電路區 // 九龍寨城', desc: '本週 7 人飛往此處 // 平均 6h 05m' },
  { name: '數據庇護所 // 地下雲端', desc: '本週 2 人飛往此處 // 平均 3h 40m' },
  { name: '賽博城 // 未知', desc: '本週 12 人飛往此處 // 平均 3h 15m' },
  { name: '亂流區 // 訊號遺失', desc: '塔台不建議，但你可以試試。' }
];

function openBookingModal() {
  document.getElementById('booking-modal')?.classList.remove('hidden');
}

function closeBookingModal() {
  document.getElementById('booking-modal')?.classList.add('hidden');
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu')?.classList.toggle('hidden');
}

function handleModalSubmit(e) {
  e.preventDefault();
  closeBookingModal();
  showToast('登機證已核發 // 請至 3 號閘門');
}

function handleContactSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast('訊號已送達塔台 // 我們會盡快回覆');
}

function handleNewsletter(e) {
  e.preventDefault();
  e.target.reset();
  showToast('塔台廣播已訂閱 // 不錯過任何起飛');
}

function spinDestination() {
  const result = document.getElementById('destination-result');
  const nameEl = document.getElementById('destination-name');
  const descEl = document.getElementById('destination-desc');
  if (!result || !nameEl || !descEl) return;

  const pick = destinations[Math.floor(Math.random() * destinations.length)];
  nameEl.textContent = pick.name;
  descEl.textContent = pick.desc;
  result.classList.remove('hidden');
  showToast('塔台指派完成 // 目的地已確認');
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-acid-black border-2 border-acid-green text-acid-green px-4 py-2 text-[10px] tracking-wider hard-shadow-pink';
  toast.innerHTML = '<span class="text-acid-pink mr-1">//</span> ' + message;
  container.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3500);
}

function updateClock() {
  const el = document.getElementById('tower-clock');
  if (!el) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  el.textContent = h + ':' + m + ':' + s;
}
if (document.getElementById('tower-clock')) {
  updateClock();
  setInterval(updateClock, 1000);
}