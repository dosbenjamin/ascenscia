import tweets from 'utils/api';
import counter from 'components/counter';
import last from 'components/last-user';

const url =
  'https://benjamindossantos.be/projets/ascenscia/api/twitter/twitter_json.php';

export default {
  init () {
    const refreshDB = () => {
      tweets.api(url).then(data => {
        counter.init(data.statuses.length)
        last.init(data.statuses)
      })
      setTimeout(refreshDB, 5500)
    };
    refreshDB()
  }
}
