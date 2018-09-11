(function () {
  // your page initialization code here
  // the DOM will be available here

  getGameSettings = () => {
    const params = new URLSearchParams(location.search);
    const settings = [params.get('player'), params.get('difficulty')];
    console.log('settings: ', settings);
    return settings;
  }

  if (window.attachEvent) {
    window.attachEvent('onload', getGameSettings);
  }
  else {
    if (window.onload) {
      var curronload = window.onload;
      var newonload = function (evt) {
        curronload(evt);
        // getGameSettings(evt);
        getGameSettings();
      };
      window.onload = newonload;
    } else {
      window.onload = getGameSettings;
    }
  }

})();