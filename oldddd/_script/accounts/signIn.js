/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : login
 */
!function () {
    wip.init();
  
    wip.app().controller('signInController', function (co, $scope, $timeout, $http) {
      var log = co.get('logger').getLogger('signIn');
      var http = co.get('http');
      var ajax = co.get('ajax');
      var location = co.get('location');
      var localStoredParam = co.get('wiplocalstorage');
      var loading = co.get('loading');
  
      var vm = $scope.vm = {};
  
      vm.isLoading = false;
  
      //Notice !!!!!! When you use global var from jsp, please check wechat signin works well !!!!!
      vm.iptLgnPlnID = iptLgnPlnID;
      vm.iptLgnPlnPD = null;
      vm.blnIptLgnPlnPD = true;
      vm.textForPassword = 'text';
      vm.assertion = null;
      vm.continueWith3rdParty = continueWith3rdParty;
      if (assertion) {
        vm.assertion = assertion;
      }
      vm.isAdmin = isAdmin;
      //Notice !!!!!! When you use global var from jsp, please check wechat signin works well !!!!!
  
      // 초기화 정보 로드
      http.get(wipLogicalPath + '/' + APPNAME + '/signInXhr').then(
          function (result) {
            if (!result.error) {
              //var str = JSON.stringify(result, null, 4);
              //log.out(str);
              if (result.iptLgnPlnID) {
                vm.iptLgnPlnID = result.iptLgnPlnID;
  
                var select = $('#ctnLgnPlnID');
                select.addClass('active');
  
              }
              vm.remIdChkYN = result.remIdChkYN;
              $scope.$parent.captchaTypeEnum = result.captchaTypeEnum;
              $scope.$parent.captchaPublicKey = result.captchaPublicKey;
              $scope.$parent.greCaptchaSiteKey = result.gRecaptchaSiteKey;
              $scope.$parent.greCaptchaInvisibleSiteKey = result.gRecaptchaInvisibleSiteKey;
  
              vm.angularCountryCode = result.userAcsCnty3dgtCd;
              vm.bannerSrc = result.marketingBannerSrc;
              vm.bannerHref = result.marketingBannerHref;
              vm.rmvCrtBtnYN = result.rmvCrtBtnYN == 'Y' ? true : false;
              vm.backgroundImage = result.backgroundImage;
              if (vm.backgroundImage) {
                $scope.$parent.bgStyle = {
                  'background-color': $scope.$parent.stringSplit(
                      vm.backgroundImage, '@', 0),
                  'background-image': 'url(' + wipResourcesUrl
                      + $scope.$parent.stringSplit(vm.backgroundImage, '@', 1)
                      + ')'
                };
              }
            }
  
            if (result.iptLgnPlnID) {// && wipUriEnum=='signInModifyPassword'
              vm.iptLgnPlnID = result.iptLgnPlnID;
  //				if ( $scope.isExternalLoginFailedMsg ) {
  //					$timeout(function() {
  //						$scope.err.code = '06';
  //						$scope.err.iptLgnPlnPD = true;
  //					}, 200, true);
  //				}
            }
  
            /* changePassword 통해서 비번 변경한 경우, 해당 계정으로 다시 로그인 할 수 있게 아이디를 프리필드 시켜준다. */
            var saveIptLgnINFO = localStoredParam.getObject('saveIptLgnINFO');
            if (saveIptLgnINFO) {
              var saveDateTime = new Date(saveIptLgnINFO.saveDateTime);
              var result = ((new Date().getTime() - saveDateTime.getTime())
                  < 300000) ? true : false; // 5분
              if (result) {
                vm.iptLgnPlnID = saveIptLgnINFO.saveIptLgnID;
              } else {
                localStoredParam.clear('saveIptLgnINFO');
              }
            }
  
            $timeout(function () {
              if (vm.iptLgnPlnID) {
                $('#iptLgnPlnPD').focus();
              } else {
                $('#iptLgnPlnID').focus();
              }
            }, 100, true);
          });
  
      $timeout(function () { // 크롬 패스워드 자동완성 방지
        vm.textForPassword = "password";
      }, 2000, true);
  
      $scope.err = {
        code: '',
        iptLgnPlnID: false,
        iptLgnPlnPD: false,
        responseCapthchaCode: '',
        responseCapthcha: false,
        message: ''
      };
  
      $scope.btnChineseSrc = function () {
        //window.location.href = vm.bannerHref;
        window.open(vm.bannerHref, '_blank');
      };
  
      $scope.isSubmited = false;
  
      $scope.signIn = function () {
  
        if (wipAcsChnlEnum == 'SDK') {
          $scope.err.code = '05';
          return;
        }
  
        if (!chkSignIn() || $scope.isSubmited) {
          return;
        } else {
          $scope.isSubmited = true;
        }
  
        var wipCp = wipEncTpLgnUtil($("#iptLgnPlnID").val(), vm.iptLgnPlnPD);
  
        var lgnChkVO = {
          iptLgnID: wipCp.svcIptLgnID,
          iptLgnPD: wipCp.svcIptLgnPD,
          svcIptLgnKY: wipCp.svcIptLgnKY,
          svcIptLgnIV: wipCp.svcIptLgnIV,
          captchaChallenge: $('#recaptcha_challenge_field').val(),
          remIdChkYN: vm.remIdChkYN,
          captchaAnswer: vm.responseCapthcha,
          assertion: vm.assertion
        };
  
        //var str = JSON.stringify(lgnChkVO, null, 4);
        http.post(wipLogicalPath + '/' + APPNAME + '/signInProc', lgnChkVO).then(
            function (result) {
  
              vm.responseCapthcha = null;
              $('#signInButton').focus();
  
              var str = JSON.stringify(result, null, 4);
              //log.out(str);
  
              if (result.rtnCd.indexOf('SUCCESS') == 0 || result.nextURL
                  != null) {
                loading.on();
                if (result.rtnCd == "SUCCESS_POST") {
                  var keys = Object.keys(result.rtnMap);
                  var form = null;
                  try {
                    form = document.createElement(
                        "<form id='formSecured' name='formSecured' method='POST' action='"
                        + result.nextURL + "' />");
                  } catch (e) {
                    form = document.createElement("form");
                    form.id = 'formSecured';
                    form.name = 'formSecured';
                    form.method = 'POST';
                    form.action = result.nextURL;
                  }
                  for (var i in keys) {
                    var hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", keys[i]);
                    hiddenField.setAttribute("value", result.rtnMap[keys[i]]);
                    form.appendChild(hiddenField);
                  }
                  document.body.appendChild(form);
                  form.submit();
  
                } else {
                  window.location.href = result.nextURL;
                }
  
              } else {
  
                $scope.isSubmited = false;
  
                vm.iptLgnPlnPD = null;
                //캡차 실패에 관한 rtnMap값이 넘어오면 캡차 출력 코드 구현
                if (result.rtnMap) {
                  $scope.$parent.captchaTypeEnum = $scope.$parent.captchaTypeEnum
                  == null ? result.rtnMap.captchaTypeEnum
                      : $scope.$parent.captchaTypeEnum;
                  if ($scope.$parent.captchaTypeEnum == 'S') {
                    $scope.$parent.captchaRefresh();
                  } else if ($scope.$parent.captchaTypeEnum == 'R') {
                    $scope.$parent.captchaPublicKey = result.rtnMap.captchaPublicKey;
                    if (result.rtnCd != "REQUIRE_CAPTCHA") {
                      $scope.$parent.recaptchaRefresh();
                    }
                  } else if ($scope.$parent.captchaTypeEnum == 'G') {  //실패 리프레쉬 처리
                    $scope.$parent.greCaptchaSiteKey = result.rtnMap.gRecaptchaSiteKey;
                    if (result.rtnCd != "REQUIRE_CAPTCHA") {
                      $scope.$parent.gRecaptchaRefresh();
                    }
                  } else if ($scope.$parent.captchaTypeEnum == 'I') {  //실패 리프레쉬 처리
                    $scope.$parent.greCaptchaInvisibleSiteKey = result.rtnMap.gRecaptchaInvisibleSiteKey;
                    $scope.$parent.gRecaptchaRefresh();
                  } else if ($scope.$parent.captchaTypeEnum == 'A') {  //실패 리프레쉬 처리
                    //$scope.$parent.audioCaptchaRefresh(); 오디오캡차는 reload 하지 않는다.
                  }
                }
                if (result.rtnCd == "FAILED") {
                  $scope.err.code = '99'; //특정 다른 이유가 있을때 99 코드 적어줌
                  $scope.err.message = result.rtnMsg;//다국어 처리가 된 오류 메시지
                  $scope.err.iptLgnPlnID = true;
                  $scope.err.iptLgnPlnPD = true;
                  if (!$scope.$parent.captchaTypeEnum
                      || $scope.$parent.captchaTypeEnum == 'I') {//캡차 노출이 없는 경우에만 포커싱을 준다.
                    $scope.$parent.focusTimer('#iptLgnPlnPD');
                  } else {
                    $scope.err.responseCapthcha = true;
                    $scope.err.responseCapthchaCode = '99';
                    $scope.err.code = null;//맨마지막 캡차 오류에 뭉뚱그려 표시
                  }
                  return;
                } else if (result.rtnCd == "INVALID_CAPTCHA" || result.rtnCd
                    == "REQUIRE_CAPTCHA") {
                  //캡차 오류.
                  $scope.err.message = result.rtnMsg;//다국어 처리가 된 오류 메시지
                  $scope.err.iptLgnPlnID = true;
                  $scope.err.iptLgnPlnPD = true;
                  if ($scope.$parent.captchaTypeEnum == 'I') {
                    $scope.err.code = '99'; // I 캡챠오류메지는 pwd 필드 아래 표시
                  } else {
                    $scope.err.responseCapthchaCode = '02';
                    $scope.err.responseCapthcha = true;
                    if (result.rtnCd == "INVALID_CAPTCHA") {//로그인시 캡차 오류 코드 분기를 위해서 작성
                      $scope.err.responseCapthchaCode = '99';//Invalid ID, password or security code has been entered. Please try again.
                    }
                  }
                  return;
                } else if (result.rtnCd == "BLACKLISTED_USER_STATUS") {
                  $scope.err.code = 'AUT_1837';
                  $scope.err.iptLgnPlnID = true;
                  $scope.err.iptLgnPlnPD = true;
                  return;
  
                } else if (result.rtnCd == "BLOCKED_USER_ATNT_STATUS") {
                  //로그인 00회 실패(API)/ 안내페이지 노출
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "REQUIRE_EMAILVALID") {
                  //이메일 인증 완료 필요.
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "DUPLICATE_PHONEID") {
                  //중복 전화번호ID 로그인 시 / 케이스 별 분기
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "BLOCKED_USER_STATUS") {
                  //오용신고된계정
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "RESTRICTED_USER_STATUS") {
                  //처리제한 계정
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "ALREADY_LINKED_USER") {
                  //처리제한 계정
                  window.location.href = result.nextURL;
                } else if (result.rtnCd == "EXCEED") {
                  window.location.href = result.nextURL;
                } else {
                  return;
                }
              }
            });
      };
  
      // I 캡챠에서 사용할 핸들러
      $scope.$parent.submitHandler = $scope.signIn;
      $scope.$parent.validationHandler = chkSignIn;
  
      // im.responseCapthcha 의 값을 지속적으로 감시
      $scope.$watch('vm.responseCapthcha', function (n, o) {
        if (n && n.length) {
          $scope.err.responseCapthcha = false;
          $scope.err.responseCapthchaCode = null;
          $scope.err.iptLgnPlnPD = false;
          $scope.err.iptLgnPlnID = false;
        }
      });
  
      // vm.iptLgnPlnID 의 값을 지속적으로 감시
      $scope.$watch('vm.iptLgnPlnID', function (n, o) {
        if (typeof (n) == 'undefined') {//vm.iptLgnPlnID가 type이 email이라 패턴이 지켜지지 않음 undefined이므로 아무거나 입력되는 순간 패스워드 필드를 enabled시켜 준다.
          vm.blnIptLgnPlnPD = false;
        }
        if (n && n.length) {
          $scope.err.iptLgnPlnID = false;
          $scope.err.iptLgnPlnPD = false;
          $scope.err.responseCapthcha = false;
          $scope.err.responseCapthchaCode = '';
          vm.blnIptLgnPlnPD = false;
        }
      });
  
      // vm.iptLgnPlnPD 의 값을 지속적으로 감시
      $scope.$watch('vm.iptLgnPlnPD', function (n, o) {
        if (n && n.length) {
          $scope.err.iptLgnPlnPD = false;
          $scope.err.iptLgnPlnID = false;
          $scope.err.iptLgnPlnAdminPD = false;
          $scope.err.responseCapthcha = false;
          $scope.err.responseCapthchaCode = '';
        }
      });
  
      $scope.signUp = function () {
        location.go(wipLogicalPath + '/' + APPNAME + '/signUp');
      };
  
      $scope.findInfo = function () {
        location.go(wipLogicalPath + '/' + APPNAME + '/findId');
      };
  
      $scope.resetPassword = function () {
        location.go(wipLogicalPath + '/' + APPNAME + '/resetPassword');
      };
  
      $scope.remIdChk = function () {
        vm.remIdChkYN = !vm.remIdChkYN;
      };
  
      $scope.btnGoBack = function () {
        window.location.href = goBackURL;
      };
  
      $scope.googleSignIn = function () {
        var mapParam = {};
        gapi.load('auth2', function () {
        });
        gapi.auth2.authorize({
          client_id: '40316552947-p4entmmkhrq6r4e8gia8cprg30j17gn8.apps.googleusercontent.com',
          scope: "openid profile email https://www.googleapis.com/auth/user.birthday.read",
          response_type: 'code id_token permission',
          prompt: 'select_account'
        }, function (response) {
          if (response.error) {
            console.log("response.error " + response.error);
          } else {
            mapParam = {
              code: response.code,
              id_token: response.id_token,
              redirect_uri: location.uri()
            };
  
            http.post(wipLogicalPath + '/' + APPNAME + '/signIn3rdParty',
                mapParam).then(function (result) {
              if (result.rtnCd == "SUCCESS_POST") {
                var keys = Object.keys(result.rtnMap);
                var form = null;
                try {
                  form = document.createElement(
                      "<form id='formSecured' name='formSecured' method='POST' action='"
                      + result.nextURL + "' />");
                } catch (e) {
                  form = document.createElement("form");
                  form.id = 'formSecured';
                  form.name = 'formSecured';
                  form.method = 'POST';
                  form.action = result.nextURL;
                }
                for (var i in keys) {
                  var hiddenField = document.createElement("input");
                  hiddenField.setAttribute("type", "hidden");
                  hiddenField.setAttribute("name", keys[i]);
                  hiddenField.setAttribute("value", result.rtnMap[keys[i]]);
                  form.appendChild(hiddenField);
                }
                document.body.appendChild(form);
                form.submit();
              } else {
                if (result.nextURL != null) {
                  window.location.href = result.nextURL;
                } else {
                  $scope.err.code = '99'; //특정 다른 이유가 있을때 99 코드 적어줌
                  $scope.err.message = result.rtnMsg;//다국어 처리가 된 오류 메시지
                  $scope.err.iptLgnPlnID = true;
                  $scope.err.iptLgnPlnPD = true;
                }
              }
            });
          }
        });
      }
  
      $scope.wechatSignIn = function () {
        http.get(wipLogicalPath + '/' + APPNAME + '/signInWechatXhr').then(
            function (result) {
              if (result) {
                var param = "?appId=" + result.appId
                    + "&redirect_uri=" + result.redirect_uri
                    + "&response_type=" + result.response_type
                    + "&scope=" + result.scope
                    + "&state=" + encodeURIComponent(result.state);
  
                window.location.href = 'https://open.weixin.qq.com/connect/qrconnect'
                    + param;
              }
            });
      }
  
      $scope.qrSignIn = function () {
        location.go(wipLogicalPath + '/' + APPNAME + '/signInWithQrCode');
      }
  
      // private
      function chkSignIn() {
        //에러 변수 초기화
        $scope.err = {
          code: '',
          iptLgnPlnID: false,
          iptLgnPlnPD: false,
          iptLgnPlnAdminPD: false,
          responseCapthchaCode: '',
          responseCapthcha: false,
          message: ''
        };
  
        var chk = true;
  
        if ($scope.$parent.isCaptcha && $scope.$parent.captchaTypeEnum != 'I') { // invisible 캡챠의경우 validation 이후 캡챠처리를 하므로 callback success 로 서밋되면 validation에 문제 없는것으로...
          //captcha
          if (!vm.responseCapthcha) {
            $scope.err.responseCapthchaCode = '01'; //01 null 02 비교값 틀린 경우(server side 에서 작성)
            $scope.err.responseCapthcha = true;
            $('#responseCapthcha').focus();
            chk = false;
          }
        }
  
        if (!vm.iptLgnPlnPD) {
          $scope.err.code = '02';
          $scope.err.iptLgnPlnPD = true;
          vm.blnIptLgnPlnPD = false;
          $('#iptLgnPlnPD').focus();
          chk = false;
        }
  
        if (!vm.iptLgnPlnID && $("#iptLgnPlnID").val() == "") {
          if ($scope.err.iptLgnPlnPD) {
            $scope.err.code = '03';
          } else {
            $scope.err.code = '01';
          }
          $scope.err.iptLgnPlnID = true;
          $('#iptLgnPlnID').focus();
          chk = false;
        }
  
        return chk;
      }
  
      $scope.adminPasswordRegex = (function () {//signUp 암호 다중 조건 체크 정규 함수
        if (vm.isAdmin == true) {
          var f = $scope.$parent.passwordRegex;//지역변수 변경 이슈가 있으므로 공통으로 올리지 못한다.
          return {
            test: function (value) {
              if (f.test(value)) {//패스워드 패턴을 통과한 경우
                $scope.$parent.strenthChkStr = $scope.$parent.passwordStrength(
                    value);
  
                /*							// 16자이상 문구표시, 에러는 아님
                              if (/.{0,9}$/.test(value)) {
                                $scope.err.passwordCode = '07';
                                $scope.err.password = true;
                                $scope.$parent.strenthChkStr = 1;
                              }else{
                                $scope.err.passwordCode = '';
                                $scope.err.password = false;
                              }*/
                //3자리 이상 연속된 문자 02
                if (!$scope.$parent.isCustomAscDescPassword(value)) {
                  $scope.err.code = 'A04';
                  $scope.err.iptLgnPlnAdminPD = true;
                  return false;
                }
                //3자리 이상 똑같은 문자 03
                if (!$scope.$parent.isCustomSameCharPassword(value)) {
                  $scope.err.code = 'A03';
                  $scope.err.iptLgnPlnAdminPD = true;
                  return false;
                }
                //패스워드에 iptLgnPlnID 아이디가 포함된경우
                if (vm.iptLgnPlnID && vm.iptLgnPlnID.indexOf(value) > -1) {
                  $scope.err.code = 'A06';
                  $scope.err.iptLgnPlnAdminPD = true;
                  return false;
                }
                //iptLgnPlnID 이메일인 경우 @ 앞부분에 패스워드가 포함된경우
                if (vm.iptLgnPlnID && $scope.$parent.strSignUpIdType(
                    vm.iptLgnPlnID) == '003' && value.indexOf(
                    vm.iptLgnPlnID.substring(0, vm.iptLgnPlnID.indexOf('@')))
                    > -1) {
                  $scope.err.code = 'A06';
                  $scope.err.iptLgnPlnAdminPD = true;
                  return false;
                }
                //영문대소,숫자,키보드특수기호외에 입력된 망칙한 캐릭 선별
                var g = $scope.$parent.passwordSpecialCharRegex;
                if (g.test(value)) {
                  $scope.err.code = 'A06';
                  $scope.err.iptLgnPlnAdminPD = true;
                  return false;
                }
                return true;
              } else {//패스워드 패턴 통과 실패
                $scope.$parent.strenthChkStr = $scope.$parent.passwordStrength(
                    value);
                $scope.err.code = 'A02';
                $scope.err.iptLgnPlnAdminPD = true;
                return false;
              }
            }
          };
        }
      })();
    });
  
  }();
  