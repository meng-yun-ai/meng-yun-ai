// @ts-nocheck

console.log('Content script loaded');

// 在content script中添加页面加载完成的监听器
document.addEventListener('DOMContentLoaded', function () {
  // 在页面加载完成后执行你的操作
  console.log('页面加载完成');
  // 在这里添加你的其他操作
});

var intervalId;

// 在content script中接收消息
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message.data);
  // 处理收到的消息
  console.log('Start button clicked');
  var interval = parseInt(message.data.interval || 5000);
  var className = message.data.className || 'ClassName';
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    console.log('Interval function', className, interval);
    var element = document.querySelector('.' + className);
    console.log('Element', element);
    if (element) {
      element.click();
    }
  }, interval);

  // 发送响应消息
  sendResponse({ response: 'Message received by content script' });
});
