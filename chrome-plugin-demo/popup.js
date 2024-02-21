// @ts-nocheck

console.log('popup.js');
// console.log('Content script loaded');

// var intervalId;
document.getElementById('startButton').addEventListener('click', function () {
  console.log('Start button clicked');
  var interval = parseInt(
    document.getElementById('intervalInput').value || 5000
  );
  var className =
    document.getElementById('classNameInput').value || 'ClassName';

  // 在popup.html中使用chrome.tabs.query方法
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 在此处执行对tabs的操作
    console.log(tabs);
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        data: {
          interval: interval,
          className: className,
        },
      },
      function (response) {
        console.log(response);
      }
    );
  });
  //   clearInterval(intervalId);

  //   intervalId = setInterval(function () {
  //     console.log('Interval function', className, interval);
  //     var element = document.querySelector('.' + className);
  //     console.log('Element', element);
  //     if (element) {
  //       element.click();
  //     }
  //   }, interval);
});
