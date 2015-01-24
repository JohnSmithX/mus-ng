
'use strict';

module.exports = function hosts ($resource) {
  var res = $resource('/api/servers/:Id', {
    Id: '@Id'
  }, {
    delete: {
      method: 'POST',
      headers: {
        'X-HTTP-Method-Override': 'DELETE'
      }
    },
    save: {
      method: 'POST'
    }
  });

  res.CurrentHost = null;

  res.getCurrentHostUrl = function (h) {
    h = h || res.CurrentHost;
    return h && (h.URL.Scheme + '://' + h.URL.Host);
  };
  return res;
};




