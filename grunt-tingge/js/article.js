(function(window, document, undefined) {
  var oldTing = window.Ting,
    Ting = {};
  Ting.version = '0.1.0';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Ting;
  } else if (typeof define === 'function' && define.amd) {
    define(Ting)
  }
  Ting.noConflict = function() {
    window.Ting = oldTing;
    return this
  };
  window.Ting = Ting;
  Ting.Util = {
    downloadByMetadata: function(data, filename, type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg').match(/png|jpeg|bmp|gif/)[0];
      filename = filename + '_' + (new Date()).getTime() + '.' + type;
      data = data.replace('image/' + type, 'image/octet-stream');
      var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = data;
      save_link.download = filename;
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(evt)
    }
  }
}(window, document));

(function($, html2canvas, Ting) {
  // 截屏
  downloadScreenshots = function() {
    html2canvas(document.body).then(function(canvas) {
      var type = 'png',
        imgData = canvas.toDataURL(type);
      Ting.Util.downloadByMetadata(imgData, "tingge", type);
    })
  };
  $('#html2canvas').on('click', function() {
    downloadScreenshots();
  })
})(jQuery, html2canvas, Ting);
