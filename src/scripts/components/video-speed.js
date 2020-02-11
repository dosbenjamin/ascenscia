const scale = 0.1

export default function($el, rate) {
  const speed = rate * scale
  $el.playbackRate = speed
}