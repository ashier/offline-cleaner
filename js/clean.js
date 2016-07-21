/*# ---------------------------------------------
# ---------------------------------------------
# Author: Ashier de Leon
# Email: ashier@gmail.com
# Date:   2016-07-21 16:54:44
# Last Modified by:   ashier
# Last Modified time: 2016-07-21 21:46:15
# ---------------------------------------------
# ---------------------------------------------*/
'use strict';

document.addEventListener('DOMContentLoaded', function() {

  $('#appcache').click(function() {
    if (chrome['browsingData']) {

        chrome.browsingData.removeAppcache({}, function() {
          $('#appcache .check').removeClass('hidden');
        });
    }
  });

  $('#localstorage').click(function() {
    if (chrome['browsingData']) {

        chrome.browsingData.removeLocalStorage({}, function() {
          $('#localstorage .check').removeClass('hidden');
        });
    }
  });

  $('#indexeddb').click(function() {
    if (chrome['browsingData']) {

        chrome.browsingData.removeIndexedDB({}, function() {
          $('#indexeddb .check').removeClass('hidden');
        });
    }
  });

  $('#websql').click(function() {
    if (chrome['browsingData']) {

        chrome.browsingData.removeWebSQL({}, function() {
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

}, false);
