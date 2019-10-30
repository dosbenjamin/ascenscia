const url = 'http://192.168.33.10/ascenscia/src/api/db/counter.php'

export function api () {
  return window.fetch(url)
    .then(response => response.json())
}
