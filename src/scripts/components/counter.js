import Odometer from 'odometer'

export default {
  init (i) {
    const $el = document.querySelector('span')
    const od = new Odometer({
      el: $el,
      format: '(,ddd)',
      theme: 'default'
    })
    od.update(i)
  }
}
