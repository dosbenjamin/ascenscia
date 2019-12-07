import Odometer from 'odometer'

export default function ($el, $text, rate) {
  const od = new Odometer({
    el: $text,
    format: '(,ddd)',
    theme: 'default'
  })
  od.update((rate / 80) * 100)
  $el.value = rate
}
