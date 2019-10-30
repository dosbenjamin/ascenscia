'use strict'

import * as tweets from 'utils/api'

tweets
  .api()
  .then(data => {
    console.log(data)
  })
