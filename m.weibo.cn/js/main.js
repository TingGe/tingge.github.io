(function ($) {
  var viewer = null;
  if (localStorage.getItem('H5_UID') !== null) {
    viewer = localStorage.getItem('H5_UID');
  }
  if (typeof($render_data) !== 'undefined') {
    viewer = window.$render_data.common.uid;
  }
  if (viewer === null) {
    return false;
  }

  var blogdata = [];//要发送给数据库的微博的data
  var cur_blog_ad_src="http://172.16.1.5/weibo/resource/1/ad.png";

  var oldSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    this.addEventListener("progress", function (e) {
      try {
        var res = JSON.parse(this.response);
        if (typeof(res) === 'object' && typeof(res['0']) !== 'undefined' && typeof(res['0']['card_group']) !== 'undefined' && res['0']['card_group'].length === 10) {
          Array.prototype.push.apply(blogdata, res['0']['card_group']);
        }
      }
      catch (e) {
        //console.error(e);
      }
      finally {}
    }, false);

    oldSend.apply(this, arguments);
  };

  var mkdiv = function () {
    return $('<div>')
      .appendTo($('body'))
      .css({
        position: 'absolute',
        zIndex: '10000',
        color: 'red',
        left: '-50000px'
      })
      .html('亲，这里是放广告的地方哦，哈哈');
  };


  var cogtu = window.__CT__ = {
    ADS_CONFIG: {
      $TOP: mkdiv()
    },
    imgIndex:null,//当前图片索引,下标从0开始，0代表第一张图片
    MIN_SIZE: 40,
    AD_CLASS: 'cogtu-ad',
    wrapperSelector: '#J-slider-cont',
    $ads: null,
    $wrapper: null,
    isPicPage: false,
    isLoadingImgs: null,
    getCurPage: function () {
      var $childs = cogtu.$wrapper.children();
      var eq = Math.abs(cogtu.$wrapper.css('transform').split(',')[4]) / $childs.first().outerWidth();
      return Math.ceil(eq);
    },
    lastPage: null,
    getCurContainer: function () {
      return cogtu.$wrapper.children().eq(cogtu.getCurPage());
    },
    clearAd: function () {
      cogtu.$ads.css({
        width: '0',
        height: '0'
      }).hide();
    },
    showAd: function () {

      if(!$('#J-curPage').size()){
        cogtu.imgIndex=0;
      }else{
        cogtu.imgIndex=parseInt($('#J-curPage').text(),10)-1;
      }

      if (!cogtu.isPicPage) {
        return false;
      }
      var $img = cogtu.getCurContainer().find('img'), oft = $img.offset();
      console.log('src is:', $img.attr('src'));
      var MIN_SIZE = cogtu.MIN_SIZE;
      console.log('img oft', oft);
      var top_free = oft.top - MIN_SIZE;
      if (typeof(cogtu.ADS_CONFIG.$TOP) !== 'undefined' && top_free > 0) {
        cogtu.ADS_CONFIG.$TOP.fadeIn('fast').css({
          width: '100%',
          height: top_free + 'px',
          left: '0',
          top: '0',
          opacity: '1'
        }).html("<img src='"+cur_blog_ad_src+"'>")
      }
      var bottom_free = document.documentElement.clientHeight - 60 - MIN_SIZE - (oft.top + $img.height());
      if (typeof(cogtu.ADS_CONFIG.$BOTTOM) !== 'undefined' && bottom_free > 0) {
        console.log('bottom free is:', bottom_free);
        cogtu.ADS_CONFIG.$BOTTOM.fadeIn('fast').css({
          width: '100%',
          height: bottom_free + 'px',
          left: 0,
          bottom: '60px',
          opacity: '1'
        })
      }

      var left_free = oft.left - MIN_SIZE;
      if (typeof(cogtu.ADS_CONFIG.$LEFT) !== 'undefined' && left_free > 0) {
        cogtu.ADS_CONFIG.$LEFT.fadeIn('fast')
          .css({
            left: '0',
            top: '0',
            width: left_free + 'px',
            height: document.documentElement.clientHeight - 60 - 5 + 'px',
            opacity: '1'
          })
      }
      var right_free = document.documentElement.clientWidth - 1 - (oft.left + $img.width() + MIN_SIZE);
      if (typeof(cogtu.ADS_CONFIG.$RIGHT) !== 'undefined' && right_free > 0) {
        cogtu.ADS_CONFIG.$RIGHT.fadeIn('fast').css({
          height: document.documentElement.clientHeight - 60 - 5 + 'px',
          width: right_free + 'px',
          left: document.documentElement.clientWidth - 1 - right_free + 'px',
          top: '0',
          opacity: '1'
        })
      }
      console.log('oft top_free bottom_free', oft, top_free, bottom_free, left_free, right_free);
    },
    /**
     * 使用XMLHttpRequest对象发出请求。
     * @param param {String} 发送请求的参数串。
     * @param callback {Function} 回调函数。
     */
    sendByRequest: function(param, callback){
      var cogtu_dispatch_path = "http://ajax.cogtu.com/weibo/fetch",
        request,
        Request = window.XDomainRequest;
      if(Request){
        request = new Request;
        request.open("POST", cogtu_dispatch_path);
      }else if(Request = window.XMLHttpRequest){
        Request = new Request;
        if("withCredentials"in Request){
          request = Request;
          request.open("POST", cogtu_dispatch_path, true);
          request.setRequestHeader("Content-Type", "application/json");
        }
      }
      if(request){
        request.onreadystatechange = function(){
          if(request.readyState == 4){
            callback && callback();
            request = null;
          }
        };
        request.send(param);
        return true;
      }
      return false;
    },

    onEnterPicPage: function ($tar) {
      var media_id = 1,
        version = 1;

      var index = $tar.closest('.card9').index();
      var data = blogdata[index];
      if(typeof(data)==='undefined'){
        return false;
      }

      navigator.geolocation.getCurrentPosition(function (position) {
        data.geo = position;
      }, function (error) {
        data.geo = 'NOT_FOUND';
      });
      console.log('data is is:', data);
      console.log("json data:", JSON.stringify(data));
      console.log('enter pic mode');
      cogtu.isPicPage = true;
      cogtu.$wrapper = $(cogtu.wrapperSelector).first();


      var inner_mid=typeof(data.mblog.retweeted_status) === "undefined" ? data.mblog.id : data.mblog.retweeted_status.id;
      var outer_mid=data.mblog.id;


      var ajaxData = {
        media_id: media_id,
        version: version,
        viewer: viewer,
        outer_mid: inner_mid,
        inner_mid: inner_mid,
        geo: data.geo
      };

      this.sendByRequest(ajaxData, function (e) {
        console.log('res is:', e);
      });

      setTimeout(function () {
        cogtu.checkLoadingStatus();
      });
    },
    onImgPageChange: function (lastPage, curPage) {
      console.log(lastPage, curPage);
      console.log('ad will be cleared');
      cogtu.clearAd();
      cogtu.checkLoadingStatus(function () {
        setTimeout(function () {
          cogtu.showAd();
          console.log("if the hero never comes to you");
          cogtu.isLoadingImgs = false;
          console.log('is loading imgs', cogtu.isLoadingImgs);
          var $c = cogtu.getCurContainer();
          $c.on('webkitTransitionEnd', function () {
            setTimeout(function () {
              console.log('$c trans', cogtu.getScale($c.find('img').first().parent()));
              var tr = cogtu.getScale($c.find('img').first().parent());
              if (tr === 2) {
                cogtu.clearAd();
              } else {
                cogtu.showAd();
              }
            }, 20);
          })
        }, 300);
      })
    },
    onQuitPicPage: function () {
      console.log('quit pic mode');
      cogtu.isPicPage = false;
      cogtu.lastPage = null;
      cogtu.clearAd();
    },
    ontouchstart: function () {

    },
    ontouchend: function () {
      setTimeout(function () {
        var tmpPage = cogtu.getCurPage();
        if (cogtu.lastPage === null || tmpPage !== cogtu.lastPage) {
          cogtu.onImgPageChange(cogtu.lastPage, tmpPage);
          cogtu.isLoadingImgs = true;
          cogtu.lastPage = tmpPage;
        }
      }, 300);

    },
    onWinResize: function () {
      console.log('window resize');
      if (!cogtu.isPicPage) {
        return false;
      }
      cogtu.clearAd();
      setTimeout(function () {
        cogtu.showAd();
      }, 100)
    },
    checkLoadingStatus: function (cb) {
      cb = cb || cogtu.ontouchend;
      var $container = cogtu.getCurContainer();
      var loop = function () {
        if (!$container.find('img').size()) {
          cogtu.clearAd();
          setTimeout(loop, 100);
        }
        else {
          $('<img>')
            .attr({
              src: $container.find('img').attr('src')
            })
            .load(function () {
              cb();
            })
        }
      };
      loop();
    },
    getScale: function ($obj) {
      return parseInt($obj.css('transform').split(',')[0].split('(')[1]);
    },
    init: function () {
      var last_hash = location.hash;
      window.onhashchange = function () {
        var hash = location.hash;
        if (hash !== '#showPic' && last_hash === '#showPic') {
          if (cogtu.isPicPage === true) {
            cogtu.onQuitPicPage();
          }
        }
        last_hash = hash;
      };

      $.each(cogtu.ADS_CONFIG, function (k, $v) {
        $v.addClass(cogtu.AD_CLASS);
      });
      setTimeout(function () {
        cogtu.$ads = $('.' + cogtu.AD_CLASS);
      }, 0);
      var touchend = typeof(document.ontouchend) !== 'undefined' ? 'ontouchend' : 'onmouseup';

      document[touchend] = function (e) {
        var $tar = $(e.target);
        if ($tar.closest(cogtu.wrapperSelector).size()) {
          cogtu.checkLoadingStatus();
        }
        if ($tar.get(0).nodeName.toLowerCase() === 'img') {
          if ($tar.hasClass('loaded')) {
            setTimeout(function () {
              cogtu.onEnterPicPage($tar);
            })

          }
          else if ($tar.closest('.media-pic').size()) {
            setTimeout(function () {
              cogtu.onEnterPicPage($tar);
            })
          }
        }
      };
      window.onresize = function (e) {
        cogtu.onWinResize();
      };
    }
  };
  cogtu.init();
})(jQuery);