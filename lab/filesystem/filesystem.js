/**
 * author：Kevin<505253293@163.com>
 * 个人主页：https://tingge.github.io
 * 文档地址：暂无
 *
 * @fileoverview 对 HTML5 FileSystem API 操作的封装
 */

(function(win, doc, undef) {
  // 处理浏览器兼容
  win.requestFileSystem = win.requestFileSystem || win.webkitRequestFileSystem; //文件系统请求标识
  win.resolveLocalFileSystemURL = win.resolveLocalFileSystemURL || win.webkitResolveLocalFileSystemURL; //根据URL取得文件的读取权限

  //错误回调
  win.errorHandler = function(err) {
    console.log(err);
  };

  // 工具
  var toArray = function(list) {
    return Array.prototype.slice.call(list || [], 0);
  };

  // 封装文件操作
  var File = function(fs, filename) {
    this.fs = fs;
    this.filename = filename;
  };
  File.prototype.review = function(callback) {
    callback = callback || function() {
      console.log('File reviewed');
    };
    this.fs.root.getFile(this.filename, {}, function(fileEntry) {
      fileEntry.file(function(File) {
        var reader = new FileReader();
        reader.onloadend = callback;
        reader.readAsText(File);
      }, errorHandler);
    }, errorHandler);
  };

  File.prototype.create = function(options, callback) {
    options = options || {
      create: true,
      exclusive: true
    };
    callback = callback || function() {
      console.log("File created");
    };
    this.fs.root.getFile(this.filename, options, callback, errorHandler);
  };

  File.prototype.delete = function(callback) {
    callback = callback || function() {
      console.log('File removed');
    };
    this.fs.root.getFile(this.filename, {}, function(fileEntry) {
      fileEntry.remove(function() {
        console.log('File removed.');
        return true;
      }, errorHandler);
    }, errorHandler);
  };

  // cotent : Array
  File.prototype.update = function(content, callback) {
    content = content || [];
    callback = callback || function(content) {
      console.log(content);
      console.log('Write completed.');
    };
    var bb = new Blob(content, {
      "type": "text/plain"
    });

    this.fs.root.getFile(this.filename, {}, function(fileEntry) {
      fileEntry.createWriter(function(fileWriter) {
        fileWriter.onwriteend = callback;
        fileWriter.onerror = function(ex) {
          console.log('Write failed: ' + ex.toString());
        };
        fileWriter.write(bb);
      }, errorHandler);
    }, errorHandler)
  };

  // 封装目录操作
  var Directory = function(fs, dirname) {
    this.fs = fs;
    this.dirname = dirname;
  };
  Directory.prototype.create = function(callback) {
    callback = callback || function() {
      console.log("Directory created");
    };
    this.fs.root.getDirectory(this.dirname, {
      create: true
    }, callback, errorHandler);
  };
  Directory.prototype.delete = function(callback) {
    callback = callback || function() {
      console.log("Directory removed");
    };
    this.fs.root.getDirectory(this.dirname, {}, function(dirEntry) {
      // 递归删除目录
      dirEntry.removeRecursively(function() {
        console.log('Directory removed.');
      }, errorHandler);
    }, errorHandler);
  };

  Directory.prototype.list = function(callback) {
    var dirReader = this.fs.root.createReader();
    var entries = [];
    var readEntries = function() {
      dirReader.readEntries(function(results) {
        if (!results.length) {
          callback(entries.sort());
        } else {
          entries = entries.concat(toArray(results));
          readEntries();
        }
      }, errorHandler);
    };
    readEntries();
  };

  // 抛出的对象
  win.FileSystem = {
    File: File,
    Directory: Directory
  };
})(window, document, undefined)
