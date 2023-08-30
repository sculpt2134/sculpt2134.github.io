/*
 * Date   : 2017.06.25
 * Author : Contentstech
 * Desc   : reset password controller
 */
!function () {
	wip.init();
	
	wip.app().controller('mainController', function (co, $scope) {
		var log = co.get('logger').getLogger('main');
		var http = co.get('http');
		var location = co.get('location');
		var vm = $scope.vm = {};
		vm.blnAllEleFilled = false;//버튼 유효성

    $scope.isValidationErr = false;
    $scope.isVerificated=true;
		
		$scope.blnFailResult = false;//검색결과 유효성
		$scope.tryAgain = function() {//$scope.blnFailResult초기화
			$scope.blnFailResult = false;
			$scope.$parent.focusTimer('#signUpID');
		};	
		
		//패스워드 리셋 대상을 email로 기본 설정
		vm.signUpIDType = '003';
		// 초기화 정보 로드 시작 -- 변경시킬 지역변수는 상단에 선언.
		http.post(wipLogicalPath+'/'+ APPNAME +'/resetPasswordXhr',{}).then(function(result){
			if(!result.error){
				//var str = JSON.stringify(result, null, 4);
	    		$scope.$parent.captchaTypeEnum = result.captchaTypeEnum;
				$scope.$parent.captchaPublicKey = result.captchaPublicKey;
				$scope.$parent.greCaptchaSiteKey = result.gRecaptchaSiteKey;
				$scope.$parent.greCaptchaInvisibleSiteKey = result.gRecaptchaInvisibleSiteKey;
			    $scope.wipCancelURI = result.wipCancelURI;
			}
			//$scope.$parent.focusTimer('#signUpID'); 접근성 도모를 위해서 탭이 있는 경우 초기 포커스를 해제 한다. 
		});
		// 초기화 정보 로드 종료.
		$scope.err = {
			signUpIDCode:'',
			signUpID:false,
			responseCapthchaCode:'',
			responseCapthcha:false,
			message:''
		};
		$scope.findId = function(){
			window.location.href = wipLogicalPath+'/'+ APPNAME +'/findId';
		};		
		$scope.btnConfirm = function(){
			if(!formValidate()){
				return;
			}
			var chkVO = {
				signUpID: vm.signUpID,		
				signUpIDType: vm.signUpIDType,
				captchaChallenge: $('#recaptcha_challenge_field').val(),
				captchaAnswer: vm.responseCapthcha,
        givenName: vm.givenName,
        familyName: vm.familyName,
        birthDate: vm.birthDate,
			};
			http.post(wipLogicalPath+'/'+ APPNAME +'/resetPasswordProc', chkVO).then(function(result){
				vm.responseCapthcha = '';
				if(result.rtnCd == "SUCCESS" ){
					// 이메일 아이디					
					window.location.href = result.nextURL;
				} else if(result.rtnCd == "NEXT") {
          // 전화번호 아이디
          window.location.href = result.nextURL;
        }	else if(result.rtnCd == "VALIDATION_NEED") {

          $scope.isVerificated=false;
        }	else if(result.rtnCd == "VALIDATION_FAIL") {
          $scope.isValidationErr = true;
          $scope.isVerificated=false;
          location.go(wipLogicalPath+'/'+ APPNAME + '/resetPasswordDOBFailed');
				} else if ( result.nextURL ) {
					window.location.href = result.nextURL;
				} else {
					$scope.err.signUpIDCode = '03';
					$scope.err.signUpID = true;
					$scope.blnFailResult = true;
					vm.signUpID = null;
					vm.responseCapthcha = null;
					$scope.err = { //에러변수 초기화
						signUpIDCode:'',
						signUpID:false,
						responseCapthchaCode:'',
						responseCapthcha:false,
						message:''
					};
				}
			});
		};
		
		$scope.$parent.submitHandler = $scope.btnConfirm;
		$scope.$parent.validationHandler = formValidate;

		//watch 영역시작
		// vm.responseCapthcha 의 값을 지속적으로 감시 
		$scope.$watch('vm.responseCapthcha', function (n, o) {
			//log.out("watchresponseCapthcha n o", n, o);
			if (n && n.length) {
				//$scope.err.responseCapthcha = false;
				var isValidResponseCapthcha = true;
				if($scope.$parent.isCaptcha && !vm.responseCapthcha) {
					isValidResponseCapthcha = false;
				}
				if (!isValidResponseCapthcha) {
					$scope.err.responseCapthcha = true;
				} else {
					$scope.err.responseCapthcha = false;
				}
			}
		});
		// $scope.signUpID 의 값을 지속적으로 감시 
		$scope.$watch('vm.signUpID', function (n, o) {
			//log.out("watchsignUpID n o", n, o);
			if (n && n.length) {
				$scope.err.signUpID = false;
			}
		});
		// $scope.All element 의 값을 지속적으로 감시 버튼 활성화를 위해
		$scope.$watchCollection('[vm.signUpID,vm.responseCapthcha]', function (n, o) {
			//log.out("watchCollection n o", n, o);
			if (n && n.length) {
				/*if(vm.signUpID && vm.responseCapthcha){
					vm.blnAllEleFilled = true;
				}else{
					vm.blnAllEleFilled = false;
				}*/
				//log.out("watchCollection signUpID responseCapthcha", vm.signUpID, vm.responseCapthcha);
				//log.out("watchCollection responseCapthcha signUpID", $scope.err.responseCapthcha, $scope.err.signUpID);
				var isValidResponseCapthcha = true;
				if($scope.$parent.isCaptcha && !vm.responseCapthcha && $scope.$parent.captchaTypeEnum != 'I') {
					isValidResponseCapthcha = false;
				}
				if(vm.signUpID && !$scope.err.signUpID && isValidResponseCapthcha){
					vm.blnAllEleFilled = true;
				}else{
					vm.blnAllEleFilled = false;
				}
			} else {
				vm.blnAllEleFilled = false;
			}
			//log.out("watchCollection blnAllEleFilled", vm.blnAllEleFilled);
		});
		//watch 영역종료
		// Form Validation
		function formValidate(){
			//에러 변수 초기화
			/*$scope.err = {
				signUpIDCode:'',
				signUpID:false,
				responseCapthchaCode:'',
				responseCapthcha:false,
				message:''
			};*/
			$scope.err.signUpIDCode = '';
			$scope.err.signUpID = false;
			if ( $scope.$parent.isCaptcha ) {
				$scope.err.responseCapthchaCode = '';
				$scope.err.responseCapthcha = false;
			}
			$scope.err.message = "";
			var chk = true;
			if($scope.$parent.isCaptcha && $scope.$parent.captchaTypeEnum != 'I'){ // invisible 캡챠의경우 validation 이후 캡챠처리를 하므로 callback success 로 서밋되면 validation에 문제 없는것으로...
				//captcha
				if(!vm.responseCapthcha){
					$scope.err.responseCapthchaCode = '01'; //01 null 02 비교값 틀린 경우(server side 에서 작성)
					$scope.err.responseCapthcha = true;
					$('#responseCapthcha').focus();
					chk = false;
				}
			}
			//signUpID
			if(!vm.signUpID){
				$scope.err.signUpIDCode = '01';
				$scope.err.signUpID = true;
				$('#signUpID').focus();
				chk = false;
			}else{
				var chkSignUpType = $scope.$parent.strSignUpIdType(vm.signUpID);
				
				if(chkSignUpType == '003'){
					vm.signUpIDType = '003';
				}else{
					vm.signUpIDType = '001';
				}
			}
			return chk;
		}

    vm.blnInfoAllEleFilled = false;//본인확인 페이지 버튼 유효성
    vm.isTextFirstFamilyName = false;//성이름 순서

    vm.letsSignInUri = null;
    vm.letsSignUpUri = null;

    // 초기화 정보 로드 시작 -- 변경시킬 지역변수는 상단에 선언.
    http.post(wipLogicalPath+'/'+ APPNAME +'/findIdXhr',{}).then(function(result){
      if(result.error){
        //location.go(wipLogicalPath+'/'+ APPNAME +'/error');
      } else {
        var str = JSON.stringify(result, null, 4);
        //진입국가 회원 가입시 사용
        vm.userAcsCnty3dgtCd = result.userAcsCnty3dgtCd;
        // 로그인한 사용자의 계정국가 회원 정보 업데이트 시
        vm.userCnty3dgtCd = result.userCnty3dgtCd;
        // GeoIP 로 체크한 국가
        vm.userGeoIPCnty3dgtCd = result.userGeoIPCnty3dgtCd;
        $scope.$parent.angularCountryCode =  vm.userAcsCnty3dgtCd;
        vm.currentDateYMD = result.currentDateYMD;
        vm.isTextRightAlign = result.isTextRightAlign;
        vm.isTextFirstFamilyName = result.isTextFirstFamilyName;
        vm.isTextFirstDateYear = result.isTextFirstDateYear;
        $scope.wipCancelURI = result.wipCancelURI;
        /*if(vm.isTextFirstFamilyName){ //접근성 도모를 위해서 탭이 있는 경우 초기 포커스를 해제 한다.
          $scope.$parent.focusTimer('#familyName');
        }else{
          $scope.$parent.focusTimer('#givenName1');
        }*/
        vm.letsSignInUri = result.letsSignInUri;
        vm.letsSignUpUri = result.letsSignUpUri;
      }
    });

    // 초기화 정보 로드 종료.
    $scope.err = {
      givenName:false,
      familyName:false,
      birthDateCode:'',
      birthDate:false,
      message:''
    };


    $scope.btnNext = function(){
      if(!infoFormValidate()){
        return;
      }

      $scope.btnConfirm();
			return;
    };


    // $scope.Year,Month,Day 의 값을 지속적으로 감시
    $scope.$watchCollection('[vm.year,vm.month,vm.day]', function (n, o) {
      if (n && n.length) {
        $scope.err.birthDate = false;
        if(vm.year && vm.month && vm.day){
          vm.birthDate = vm.year + vm.month + (Number(vm.day) < 10 ? '0' + Number(vm.day) : vm.day);
          if(vm.birthDate >= vm.currentDateYMD || !$scope.$parent.isValidDate(vm.birthDate)){
            $scope.err.birthDateCode = '02';
            $scope.err.birthDate = true;
          }
        }
      }
    });
    // vm.familyName 의 값을 지속적으로 감시
    $scope.$watch('vm.familyName', function (n, o) {
      if (n && n.length) {
        $scope.err.familyName = false;
      }
    });
    // $scope.givenName 의 값을 지속적으로 감시
    $scope.$watch('vm.givenName', function (n, o) {
      if (n && n.length) {
        $scope.err.givenName = false;
      }
    });
    // $scope.All element 의 값을 지속적으로 감시 검색 버튼 활성화를 위해
    $scope.$watchCollection('[vm.givenName,vm.familyName,vm.year,vm.month,vm.day]', function (n, o) {
      $scope.isValidationErr = false;
      if (n && n.length) {
        if(vm.givenName && vm.familyName && vm.year && vm.month && vm.day){
          vm.blnInfoAllEleFilled = true;
        }else{
          vm.blnInfoAllEleFilled = false;
        }
      }
    });
    // private
    function infoFormValidate(){
      //에러 변수 초기화
      $scope.err = {
        givenName:false,
        familyName:false,
        birthDateCode:'',
        birthDate:false,
        message : ''
      };
      var chk = true;
      //birthdate
      if(!vm.year || !vm.month || !vm.day){
        $scope.err.birthDateCode = '01';
        $scope.err.birthDate = true;
        chk = false;
      }else{//날짜정보가 제대로 들어온 경우
        //to-do 생일이 오늘 또는 미래인 경우 와 자리수 및 윤년 윤월체크 03
        if(vm.birthDate >= vm.currentDateYMD || !$scope.$parent.isValidDate(vm.birthDate)){
          $scope.err.birthDateCode = '02';
          $scope.err.birthDate = true;
          chk = false;
        }
      }
      //familyName
      if(!vm.familyName){
        $scope.err.familyName = true;
        chk = false;
      }
      //givenName
      if(!vm.givenName){
        $scope.err.givenName = true;
        chk = false;
      }
      return chk;
    }
	});
} ();
