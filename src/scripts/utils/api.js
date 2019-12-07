export default {
  api (url) {
    return window
      .fetch(url, {
        mode: 'cors'
      })
      .then(response => response.json())
  }
}
