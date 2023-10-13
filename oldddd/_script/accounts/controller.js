/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : common controller
 */
!function () {
	wip.app().controller('cmmController', function (co, $scope) {
		var log = co.get('logger').getLogger('top');
		var http = co.get('http');
		var ajax = co.get('ajax');
		var location = co.get('location');
		var sessionStorage = co.get('wipsessionstorage');
		//하위 controller에서 사용 할 수 있는 정규식 패턴 시작
//		$scope.emailIDRegex = /^([a-zA-Z0-9]+(?:[-\._+][a-zA-Z0-9]+)*)@[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,9}$/;//._-+이 연속적으로 또는 @앞에 오지 못하는 패턴
		$scope.emailSpecialCharacterRegex =  /^([a-zA-Z0-9.\-_+@]+)?$/;
		$scope.emailIDRegex = /^([a-zA-Z0-9]+[a-zA-Z0-9\-_+]*([\.][a-zA-Z0-9\-_+]+)*)@[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*)*\.[a-zA-Z]+$/; //+-_. 허용. .연속불가, .@ 불가
		$scope.findPasswordEmailIDRegex = /([a-zA-Z0-9])*([\.])*@[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,20}$/;//이메일아이디 앞에 뭐든 다 와도 됨. 수정이 필요할듯 하나 idm과 동일하게 작성
		$scope.phoneIDRegex = /^[0-9]{6,20}$/; //폰아이디
		$scope.imeiRegex = /^[A-Z0-9]*$/;
		$scope.serialRegex = /^[a-zA-Z0-9]*$/;
		//$scope.nameRegex = '^[^£¥€§※☆★○●◎◇◆□■△▲▽▼→←←↑↓↔〓◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿{}\\[\\]/?;:|)*~`!^+<>@#$%&=×÷₩•°¤《》¡¿("\\\\\uD800-\uDFFF]+$'; //특수문자 '.,-_ 만 허용된 이름 규칙 , uD800-\uDFFF 이모티콘 제외, 문자열 중간에 연속되지 않은 공백 허용
		$scope.nameRegex = /^([^£\s¥€§※☆★○●◎◇◆□■△▲▽▼→←←↑↓↔〓◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿{}\[\]\/?;:|)*~`!^+<>@#$%&=×÷₩•°¤《》¡¿("\\\uD800-\uDFFF]+\s{0,1})*[^£\s¥€§※☆★○●◎◇◆□■△▲▽▼→←←↑↓↔〓◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿{}\[\]\/?;:|)*~`!^+<>@#$%&=×÷₩•°¤《》¡¿("\\\uD800-\uDFFF]+$/;
		$scope.nameRegexUsa = '^([a-zA-Z]+( ){0,1})*[a-zA-Z]+$'; // 미국은 회원가입시 알파뱃 소/대문자만 허용
		$scope.passwordConditionList = [/^(?=.*[a-z]).+$/, /^(?=.*[A-Z]).+$/, /^(?=.*[0-9]).+$/, /^(?=.*[`~!@#$%^&*()\-=_+,.\/<>?;':"\[\]{}\\|]).+$/]; // 비밀번호 작성 시 대문자/소문자/숫자/특수문자의 4가지 중 3가지 이상 조합 필요
		$scope.minPasswordConditionMatchCount = 3;
		$scope.passwordLimitedCharLengthRegex = /^.{8,150}$/;
		$scope.passwordSpecialCharRegex = /^(?=.*[^a-zA-Z0-9`~!@#$%^&*()-=_+,./<>?;':"\[\]{}\\|]).{1,150}$/;//키보드에서 입력될수 없는 문자 체크 패턴,영문숫자 조합을 통과한뒤 테스트 실행
		$scope.passwordLimitedCharNum = 8;
		$scope.passwordLimitedSameCharNum = 3;
		$scope.specialCharacter = '~!@#$%^&*-_+=|";[]{}()<>,./?\\';
		
	
		$scope.blnPasswordFocus = false;
		$scope.blnPasswordFocusConfirm = false;
		$scope.phoneNumFocus = false;
		
		$scope.birthDateRegex = '^((19|20)\\d\\d)?(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$'; //YYYYMMDD 1900년도 2000년도 12월 이하 31일 이하 패턴
		$scope.birthdateNumber = /^[0-9]{1,4}$/; //생년,일 숫자 체크.
		$scope.pathName = window.location.pathname.replace(wipLogicalPath+'/'+APPNAME+'/', '');
		$scope.angularCountryCode = '';
		if(userCnty3dgtCd){
			$scope.angularCountryCode = userCnty3dgtCd;
		}else{
			$scope.angularCountryCode = userAcsCnty3dgtCd;			
		}

		$scope.geoIPCountryCode = '';
		if (userGeoIPCnty3dgtCd) {
			$scope.geoIPCountryCode = userGeoIPCnty3dgtCd;
		}
			
		$scope.phoneEmailRegex = (function() {//폰아이디 이메일 아이디 다중 조건 체크
		    var f = $scope.emailIDRegex;
		    var l = $scope.phoneIDRegex;
		    if($scope.pathName == 'resetPassword' || $scope.pathName == 'resetPasswordGate'){
		    	f = $scope.findPasswordEmailIDRegex;
		    }
		    return {
		        test: function(value) {
		        	if(f.test(value) || l.test(value)){
		        		return true;
		        	}else{
		        		return false;
		        	}
		        }
		    };
		})();

		$scope.passwordRegex = (function() {
			var f = $scope.passwordConditionList;
			var l = $scope.passwordLimitedCharLengthRegex;

			return {
				test : function(value) {
					var passwordConditionMatchCount = 0;

					var len = f.length;
					for (var i = 0; i < len; i++) {
						if (f[i].test(value)) {
							passwordConditionMatchCount++;
						}
					}

					if (passwordConditionMatchCount >= $scope.minPasswordConditionMatchCount && l.test(value)) {
						return true;
					} else {
						return false;
					}
				}
			}
		})();

		//하위 controller에서 사용 할 수 있는 정규식 패턴 종료
		//캡차
		$scope.isCaptcha = false;
		$scope.captchaTypeEnum = null;
		$scope.captchaPublicKey = '';
		$scope.greCaptchaSiteKey = '';
		$scope.greCaptchaInvisibleSiteKey = '';
		$scope.isAudioCaptchaPlay = false;
		$scope.$watch('captchaTypeEnum', function (n, o) {
			if (n && n.length) {
				if($scope.captchaTypeEnum){
					$scope.isCaptcha = true;
				}else{
					$scope.isCaptcha = false;
				}
			}
		});
		$scope.recaptchaRefresh = function(){
			Recaptcha.reload();
			ajax.get(wipLogicalPath+'/'+ APPNAME +'/captchaR').then(function(result) {
			});
		};	
		$scope.captchaRefresh = function(){
			$("#recaptcha_image").html("<img id='recaptcha_challenge_image' alt='이 부분은 문자와 숫자로 구성된 보안코드입니다. 탭 키를 두 번 누르시고 음성지원 버튼을 선택하세요.' src='"+wipLogicalPath+"/"+APPNAME+"/captchaS?"+new Date().getTime()+"' />");
		};
		$scope.gRecaptchaRefresh = function(){
			if(!("grecaptcha" in window)) return;
			grecaptcha.reset();
		};	

		$scope.gRecaptchaIExcute = function() {
			if(!("grecaptcha" in window)) return;
			if ($scope.validationHandler){
				if($scope.validationHandler())
					grecaptcha.execute();
			}else{
				grecaptcha.execute();
			}
		};
		
		$scope.submitForCaptcha = function() {
			if ($scope.submitHandler){
				$scope.captchaTypeEnum == 'I' ? $scope.gRecaptchaIExcute() : $scope.submitHandler();
			}else{
				log.info("please regist submitHandler.");
			}
		};
		
		$scope.audioCaptcha = function(){
			$scope.captchaTypeEnum = 'A';
			$scope.doPlayAudioCaptcha('Y');
			$scope.focusTimer("#simpleAudioCaptcha");
		};	
		$scope.simpleCaptcha = function(){
			$scope.captchaTypeEnum = 'S';
			$scope.focusTimer("#recaptcha_image");
		};
		$scope.audioCaptchaRefresh = function(){
			$scope.doPlayAudioCaptcha();
		};
		$scope.audioCaptchaDown = function(){
			window.location.href = $scope.getPlayAudioCaptchaUrl() + "&downYN=Y";
		};
		$scope.doPlayAudioCaptcha = function(newYN) {
			if ( $scope.isAudioCaptchaPlay != true ) {
				$scope.isAudioCaptchaPlay = true;
				
				setTimeout(function(){ $scope.isAudioCaptchaPlay = false; }, 4000);
				
				var uAgent = navigator.userAgent;
				var soundUrl = $scope.getPlayAudioCaptchaUrl(newYN);
				
				if ( uAgent.indexOf('Trident')>-1 || uAgent.indexOf('MSIE')>-1 ) {
					$scope.winPlayer(soundUrl+'&agent=msie');
				} else if ( !!document.createElement('audio').canPlayType ) {
					try { new Audio(soundUrl).play(); } catch(e) { winPlayer(soundUrl); }
				} else {
					window.open(soundUrl, '', 'width=1,height=1');
				}
			}
		};
		$scope.getPlayAudioCaptchaUrl = function(newYN) {
			var soundUrl = wipLogicalPath+'/'+ APPNAME +"/audio";
			if ( newYN=='Y' ) {
				soundUrl += "?newYN=Y";
			}else{
				soundUrl += "?newYN=N";
			}
			soundUrl += "&"+new Date().getTime();
			return soundUrl;
		};
		$scope.winPlayer = function(objUrl) {
			$('#audioCaptchaArea').html("<bgsound src='"+objUrl+"' loop='1' />");
		};		
		//캡차 끝

		//공통 시작
		$scope.bgStyle = {
				'background-color':'#ffffff'
		};
		$scope.help = function(){
			window.location.href = 'https://help.content.samsung.com/';
		};
		
		$scope.btnResetPassword = function() {
			location.go(wipLogicalPath+'/'+ APPNAME +'/resetPassword');
		};
		
		$scope.btnSignIn = function(){
			location.go(wipLogicalPath+'/'+ APPNAME +'/signIn');
		};	
		
		$scope.btnChangePasssword = function() {
			location.go(wipLogicalPath+'/'+ APPNAME +'/changePassword');
		}
		
		$scope.btnRegisterPhoneNumber = function() {
			location.go(wipLogicalPath+'/'+ APPNAME +'/registerPhoneNumber');
		};		
		$scope.goBack = function() {
			window.location.href = 'http://account.samsung.com';
		};	
		$scope.maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		$scope.lastDay = 31;
		
		/* 날자 유효성 체크 로직 */ //yyyymmdd
		$scope.isValidDate = function(param) {
		    try
		    {
		        // 자리수가 맞지않을때
		        if( isNaN(param) || param.length!=8 ) {
		            return false;
		        }
		        var year = Number(param.substring(0, 4));
		        var month = Number(param.substring(4, 6));
		        var day = Number(param.substring(6, 8));
		        var dd = day / 0;
		        if( year<1902) {
		            return false;
		        }
		        if( month<1 || month>12 ) {
		            return false;
		        }
		        var maxDay = $scope.maxDaysInMonth[month-1];
		        // 윤년 체크
		        if( month==2 && ( year%4==0 && year%100!=0 || year%400==0 ) ) {
		            maxDay = 29;
		        }
		        if( day<=0 || day>maxDay ) {
		            return false;
		        }
		        return true;
		    } catch (err) {
		        return false;
		    }  
		};
		/*  비밀번호 동일 문자열 3회 반복여부 체크.(대소문자 구분 안함) */
		$scope.isCustomSameCharPassword = function(val) {
			var limit = $scope.passwordLimitedSameCharNum;
			if ( val.length<limit ) {
				return true;
			}
			var tokens = val.split("");
			var samCnt = 1;
			for (var i=1; i<tokens.length; i++) {
				if ( tokens[i-1].toUpperCase()==tokens[i].toUpperCase() ) {
					samCnt++;
				} else {
					samCnt = 1;
				}
				if ( samCnt>=limit ) {
					break;
				}
			}
			var isValid = false;
			if ( samCnt<limit ) {
				isValid = true;
			}
			return isValid;
		};
		/*  비밀번호 연속 문자열 3회 반복여부 체크.(대소문자 구분 안함) */
		$scope.isCustomAscDescPassword = function(val) {
			var limit = 3;
			if ( val.length<limit ) {
				return true;
			}
			var tokens = val.split("");
			var seqChr = " 1234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var seqCnt = 1;
			var seqFlag = "";
			for (var i=1; i<tokens.length; i++) {
				var bfrIdx = seqChr.indexOf(tokens[i-1].toUpperCase());
				var curIdx = seqChr.indexOf(tokens[i].toUpperCase());
				if ( bfrIdx+1 == curIdx ) {
					if ( seqFlag == "ASC" ) {
						seqCnt++;
					} else {
						seqCnt = 2;
					}
					seqFlag = "ASC";
				} else if ( bfrIdx-1 == curIdx ) {
					if ( seqFlag == "DESC" ) {
						seqCnt++;
					} else {
						seqCnt = 2;
					}
					seqFlag = "DESC";
				} else {
					seqCnt = 1;
				}
				if ( seqCnt>=limit ) {
					break;
				}
			}
			var isValid = false;
			if ( seqCnt<limit ) {
				isValid = true;
			}
			return isValid;
		};
		/* 입력된 signUpId가 이메일인지 폰아이디인지 확인 */
		$scope.strSignUpIdType = function(value) {
			var f = $scope.emailIDRegex;
		    var l = $scope.phoneIDRegex;
		    if($scope.pathName == 'resetPassword' || $scope.pathName == 'resetPasswordGate'){
		    	f = $scope.findPasswordEmailIDRegex;
		    }
		    var strSignUpIdType = '003';
		    if(!f.test(value)){
		    	if(l.test(value)){
		    		strSignUpIdType = '001';
		    	}else{
		    		strSignUpIdType = 'err';
		    	}
		    }

			return strSignUpIdType;
		};
	    /* AJAX 실행 후 완성되는 화면 등에서 focus가 무시될 경우만 사용하는 기능 */
	    $scope.focusTimer = function(tag){
	    	setTimeout(function(){ $(tag).focus(); }, 100);
	    };
		// 약관에서 사용하는 쿠키 삭제
		if($scope.pathName.indexOf("terms") < 0 ) {
			try {
				sessionStorage.clear("iptTncAll");
				sessionStorage.clear("iptTncTC");
        sessionStorage.clear("iptTncST");
				sessionStorage.clear("iptTncGDPR");
				sessionStorage.clear("iptSpcGDPR");
				sessionStorage.clear("iptTncPP");
				sessionStorage.clear("iptTncDCA");
				sessionStorage.clear("iptTncCSUA");
				sessionStorage.clear("iptTncThirdPartyTerms");
				sessionStorage.clear("iptTncMKT");
				sessionStorage.clear("iptTncDataForMKT");
        sessionStorage.clear("iptTncPersonalMKT");
        sessionStorage.clear("iptTncSensPP");
        sessionStorage.clear("iptTncOtherPP");
				sessionStorage.clear("iptTncCrossPP");
				sessionStorage.clear("iptTncTD");
				sessionStorage.clear("iptTncSAM");
				sessionStorage.clear("iptTncCUST");
        sessionStorage.clear("iptOnwardTA");
			} catch(e) {}
		}
		$scope.zeroPrefixRevmover = function(value) {
			return Number(value);
		};	
		$scope.strenthChkStr = null;
		$scope.passwordStrength = function(value) {
			var tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Z-0-9]/i];
			if(value == null || value == ''){
				return -1;
			}
			var s = 0;
			if(value.length < $scope.passwordLimitedCharNum){
				return 0;
			}
			for(var i in tests){
				if(tests[i].test(value)){
					s++;
				}
			}
			return s;
		};
		$scope.stringSplit = function(splitString,splitChar, splitIndex) {
		    var array = splitString.split(splitChar);
		    return array[splitIndex];
		};


		var agent = navigator.userAgent.toLowerCase();
		var isIE = (navigator.appName == 'Netscape'	&& agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)

		if(isIE) {
			try {
				$scope.isIESupportMessageShow = sessionStorage.getObject("IESupportMessageShow")
			} catch (e) {
				sessionStorage.clear("IESupportMessageShow")
				$scope.isIESupportMessageShow = null
			}

			if ($scope.isIESupportMessageShow == null) {
					$scope.isIESupportMessageShow = "Y"
					sessionStorage.setObject("IESupportMessageShow", "Y")
			}
		}else{
			$scope.isIESupportMessageShow = "N"
		}

		$scope.isIESupportMessageShowToggle = function(){
			$scope.isIESupportMessageShow = "N"
			sessionStorage.setObject("IESupportMessageShow","N")
		}

//		$scope.selfWinClose = function() {
//			var win = window.open('','_self','');
//	    	win.close();
//	    	return false;
//		};
		//공통 종료
	});
} ();
