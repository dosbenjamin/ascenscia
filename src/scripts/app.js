import home from 'pages/home';
import video from 'pages/video';

(function () {
  'use strict';

  const { namespace } = document.body.dataset
  switch (namespace) {
    case 'home':
      home.init()
      break;
    case 'video':
      video.init()
      break;
  }
})()
