import tweetsCount from 'utils/api'
import speed from 'components/video-speed'
import progress from 'components/progress-bar'

const url = 'http://benjamindossantos.be/projets/ascenscia/api/db/counter.php'
const $video = document.querySelector('.video')
const $progressBar = document.querySelector('.progress')
const $progressText = document.querySelector('.progress-value')

export default {
  init () {
    const refreshDB = () => {
      tweetsCount.api(url).then(data => {
        speed($video, data.count)
        progress($progressBar, $progressText, data.count)
      })
      setTimeout(refreshDB, 2000)
    }
    refreshDB()
  }
}
