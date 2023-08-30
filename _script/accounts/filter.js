/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : filter
 */
!function () {
    wip.app().filter('trustAsHTML', ['$sce', function ($sce) {
      return function (text) {
        if (angular.isUndefined(text)) {
          return "";
        }
        return $sce.trustAsHtml(text);
      };
    }]);
  
    wip.app().filter('trusted', ['$sce', function ($sce) {
      var div = document.createElement('div');
      return function (text) {
        if (angular.isUndefined(text)) {
          return "";
        }
        div.innerHTML = text;
        return $sce.trustAsHtml(div.textContent);
      };
    }]);
  
    wip.app().filter('dateRange', function () {//변수 1 연도, 월과 일은 레인지로.
      return function (input) {
        var lowBound, highBound, yearLow;
        yearLow = 1902;
        switch (input.length) {
          case 1:
            var date = new Date();
            lowBound = yearLow;
            highBound = parseInt(date.getFullYear());
            break;
          case 2:
            lowBound = parseInt(input[0]);
            highBound = parseInt(input[1]);
            break;
          default:
            lowBound = 0;
            highBound = 0;
        }
  
        var result = [];
  
        if (lowBound == yearLow) {
          for (var i = highBound; i >= lowBound; i--) {
            result.push(i);
          }
        } else {
          for (var i = lowBound; i <= highBound; i++) {
            if (i < 10) {
              i = '0' + i;
            }
            result.push(i);
          }
        }
        return result;
      };
    });
  
    wip.app().filter('monthTextRange', function () {//입력된 텍스트 월명칭을 인덱스와 함께 돌려준당.
      return function (input) {
        var result = [];
        var tmpValue;
        for (var i = 1; i <= 12; i++) {
          tmpValue = {"index": i < 10 ? '0' + i : i, "month": input[i - 1]}
          result.push(tmpValue);
        }
        return result;
      };
    });
  
    //시간 표시 00:59
    wip.app().filter('time', ['CommonService', function (CommonService) {
      return function (input) {
        var result;
        var smsCountDisplayMinutes = parseInt(input / 60);
        var smsCountDisplaySeconds = parseInt(input % 60);
  
        if(isNaN(smsCountDisplayMinutes) || isNaN(smsCountDisplaySeconds)){
          return "";
        }
  
        result = CommonService.addLeadingZeros(smsCountDisplayMinutes, 2)
            + ":" + CommonService.addLeadingZeros(smsCountDisplaySeconds, 2);
  
        return result;
      };
    }]);
  }();