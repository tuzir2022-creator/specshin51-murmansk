const widget = document.querySelector('[data-workshop]');
const value = widget.querySelector('[data-selected-price]');
const format = new Intl.NumberFormat('ru-RU');

value.setAttribute('aria-live', 'polite');
widget.addEventListener('change', ({ target }) => {
  if (target.name === 'svc') {
    value.textContent = target.dataset.price ? format.format(Number(target.dataset.price)) + ' ₽' : 'Уточнить';
  }
});
