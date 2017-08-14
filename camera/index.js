'use strict';
const fs = require('fs');
const path = require('path');
 
const av = require('tessel-av');
const camera = new av.Camera();
const capture = camera.capture();
 
capture.on('data', function(data) {
  fs.writeFile(path.join(__dirname, 'captures/captured-via-data-event.jpg'), data);
});