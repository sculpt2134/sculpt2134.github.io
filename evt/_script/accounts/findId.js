/*
 * Date   : 2017.06.25
 * Author : Contentstech
 * Desc   : find ID controller
 */
!function () {
	wip.init();
	
	wip.app().controller('mainController', function (co, $scope, WIPCMD_BTNHIDE) {
		var log = co.get('logger').getLogger('main');
		var http = co.get('http');
		var location = co.get('location');
		var vm = $scope.vm = {};
		vm.blnAllEleFilled = false;//버튼 유효성
		vm.isTextFirstFamilyName = false;//성이름 순서
		
		vm.WIPCMD_BTNHIDE = WIPCMD_BTNHIDE;
		vm.letsSignInUri = null;
		vm.letsSignUpUri = null;

		$scope.showUserInfoField = false;
		
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
		$scope.btnTryAgain = function(){
			$scope.findIdResult = null;
			log.out(vm.isTextFirstFamilyName);
			if(vm.isTextFirstFamilyName) {
				$scope.$parent.focusTimer('#familyName');
			} else {
				$scope.$parent.focusTimer('#givenName1');
			}
		};
		$scope.btnCancel = function(){
			window.location.href = $scope.wipCancelURI;
		};
		$scope.btnNext = function(){
			if(!formValidate()){
				return;
			}
			var chkVO = {
				givenName: vm.givenName,
				familyName: vm.familyName,
				birthDate: vm.birthDate
			};
			http.post(wipLogicalPath+'/'+ APPNAME +'/findIdProc', chkVO).then(function(result){
				if(result.rtnCd == "FAILED" ){
					$scope.err.code = '99'; //특정 다른 이유가 있을때 99 코드 적어줌
					$scope.err.message = result.rtnMsg;//다국어 처리가 된 오류 메시지
					return;
				}
				else if(result.rtnCd == "EXCEED"){
					window.location.href = result.nextURL;
				}
				else{
					$scope.userList = result.rtnMap.userLoginIDVOList;
					if ( $scope.userList ) {
						var cnt = 0;
						$.each($scope.userList, function() {
							if ( this.loginIDTypeCode=='003' ) {
								cnt++;
							}
						});
						$scope.emailIdCnt = cnt;
						$scope.phoneIdCnt = $scope.userList.length - cnt;
						$scope.findIdTotCnt = $scope.userList.length;
					}
					if ( $scope.findIdTotCnt>0 ) {
						$scope.findIdResult = "EXIST";
					} else {
						$scope.findIdResult = "NOTEXIST";
						//vm.givenName = '';
						//vm.familyName = '';
						//vm.year = '';
						//vm.month = '';
						//vm.day = '';
						$scope.err = {//에러 정보도 초기화
							givenName:false,
							familyName:false,
							birthDateCode:'',
							birthDate:false,
							message:''
						};
					}
					//$scope.isUserVerifyBtn = result.rtnMap.isUserVerifyBtn;
					$scope.userVerifyUri = result.rtnMap.userVerifyUri;
					//$scope.isSignUpBtn = result.rtnMap.isSignUpBtn;
				}
			});
		};
		$scope.btnSignIn = function(){
			if ( vm.letsSignInUri && vm.letsSignInUri!=WIPCMD_BTNHIDE ) {
				//log.out("letsSignInUri WIPCMD_BTNHIDE", vm.letsSignInUri, WIPCMD_BTNHIDE);
//				if ( vm.letsSignInUri==WIPCMD_BTNHIDE ) {
					//$scope.selfWinClose();
//				} else {
				$scope.findIdResult = null;
					window.location.href = vm.letsSignInUri;
//				}
			}
			//else {
			//	$scope.$parent.btnSignIn();
			//}
		};
		$scope.btnUserVerify = function(){
			$scope.findIdResult = null;
			location.go($scope.userVerifyUri);
		};
		$scope.btnSignUp = function(){

			//location.go(wipLogicalPath+'/'+ APPNAME +'/signUp');
			if ( vm.letsSignUpUri && vm.letsSignUpUri!=WIPCMD_BTNHIDE ) {
				$scope.findIdResult = null;
				window.location.href = vm.letsSignUpUri;
			}
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
			if (n && n.length) {
				if(vm.givenName && vm.familyName && vm.year && vm.month && vm.day){
					vm.blnAllEleFilled = true;
				}else{
					vm.blnAllEleFilled = false;
				}
			}
		});
		// private
		function formValidate(){
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

		$scope.btnShowUserInfoField = function() {
			$scope.showUserInfoField = true;
		}

		$scope.btnFindIdWithUserInfo = function() {
			window.location.href = wipLogicalPath + '/' + APPNAME + '/findIdWithUserInfo';
		}

		$scope.btnContinue = function() {
			if (!formValidate()) {
				return;
			}

			var mapParam = {
				recoveryId: vm.recoveryId,
				givenName: vm.givenName,
				familyName: vm.familyName,
				birthDate: vm.birthDate
			};

			http.post(wipLogicalPath + '/' + APPNAME + '/findIdWithRecoveryProc', mapParam).then(function(result) {
				if (result.nextURL) {
					window.location.href = result.nextURL;
				}
			});
		}
	});
} ();
