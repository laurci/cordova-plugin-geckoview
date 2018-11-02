function GeckoViewPlugin() {}

GeckoViewPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'GeckoViewPlugin', 'show', [options]);
}

GeckoViewPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.geckoViewPlugin = new GeckoViewPlugin();
  return window.plugins.geckoViewPlugin;
};
cordova.addConstructor(GeckoViewPlugin.install);