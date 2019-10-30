'use strict'

import tweets from 'utils/api'
import counter from 'components/counter'
// import last from 'components/last-user'

(function () {
  const refreshDB = () => {
    tweets
      .api()
      .then(data => {
        counter.init(data.count)
        // last.init(data.lastUser)
      })
    setTimeout(refreshDB, 10000)
  }
  refreshDB()
}())
