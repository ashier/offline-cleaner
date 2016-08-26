/*# ---------------------------------------------
# ---------------------------------------------
# Author: Ashier de Leon
# Email: ashier@gmail.com
# Date:   2016-07-21 16:54:44
# Last Modified by:   Ashier de Leon
# Last Modified time: 2016-08-26 14:40:39
# ---------------------------------------------
# ---------------------------------------------*/
'use strict';

document.addEventListener('DOMContentLoaded', function() {

  $('#sw').click(function() {
    if (chrome['browsingData']) {

        var remove_data = {
            'serviceWorkers': true
        };

        chrome.browsingData.remove({}, remove_data, function() {
          $('#sw .check').removeClass('hidden');
        });
    }
  });

  $('#appcache').click(function() {
    if (chrome['browsingData']) {

        var remove_data = {
            'appcache': true
        };

        chrome.browsingData.remove({}, remove_data, function() {
          $('#appcache .check').removeClass('hidden');
        });
    }
  });

  $('#localstorage').click(function() {
    if (chrome['browsingData']) {

        var remove_data = {
            'localStorage': true
        };

        chrome.browsingData.remove({}, remove_data, function() {
          $('#localstorage .check').removeClass('hidden');
        });
    }
  });

  $('#indexeddb').click(function() {
    if (chrome['browsingData']) {

        var remove_data = {
            'appcache': true
        };

        chrome.browsingData.remove({}, remove_data, function() {
          $('#indexeddb .check').removeClass('hidden');
        });
    }
  });

  $('#websql').click(function() {
    if (chrome['browsingData']) {

        var remove_data = {
            'webSQL': true
        };

        chrome.browsingData.remove({}, remove_data, function() {
          $('#websql .check').removeClass('hidden');
        });
    }
  });

  $('#view_appcache').click(function() {
    if (chrome['tabs']) {
        var data = {
          url: 'chrome://appcache-internals/'
        };
        chrome.tabs.create(data);
    }
  });

  $('#view_extensions').click(function() {
    if (chrome['tabs']) {
        var data = {
          url: 'chrome://extensions'
        };
        chrome.tabs.create(data);
    }
  });

  $('#view_swexternals').click(function() {
    if (chrome['tabs']) {
        var data = {
          url: 'chrome://serviceworker-internals'
        };
        chrome.tabs.create(data);
    }
  });

}, false);
