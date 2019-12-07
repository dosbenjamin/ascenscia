'use strict'

import home from 'pages/home'
import video from 'pages/video'
;(function () {
  const { namespace } = document.body.dataset
  switch (namespace) {
    case 'home':
      home.init()
      break
    case 'video':
      video.init()
      break
  }
})()
