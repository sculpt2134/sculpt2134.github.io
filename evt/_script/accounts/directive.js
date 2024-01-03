/*
 * Date   : 2016.12.15
 * Author : contentstech
 * Desc   : directive
 */

'use strict';
!function () {
	// A Tag Click 제어
	wip.app().directive('a', function () {
		return {
			restrict: 'E',
			link: function (scope, elem, attrs) {
				if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
					elem.on('click', function (e) {
						e.preventDefault();
					});
				}
			}
		};
	});

	// Form Tag Submit 제어
	wip.app().directive('form', function () {
		return {
			restrict: 'E',
			link: function (scope, elem, attrs) {
				elem.on('submit', function (e) {
					e.preventDefault();
				});
			}
		};
	});
	
	wip.app().directive( 'historyBack', function() {
	    return {
	        restrict: 'A',
	        link: function( scope, elem, attrs ) {
	        	elem.on( 'click', function () {
	                history.back();
	                scope.$apply();
	            } );
	        }
	    };
	} );
	
//	wip.app().directive( 'historyBack', function() {
//    return {
//        restrict: 'A',
//        link: function( scope, elem, attrs ) {
//            elem.on( 'click', function () {
//                if(scope.$parent.locationHashChangeCount > 0){
//                    for(var i = 0 ; i < scope.$parent.locationHashChangeCount; i++){
//                        history.back();
//                    }
//                    scope.$parent.locationHashChangeCount = 0;
//                }
//                history.back();
//                scope.$apply();
//            } );
//        }
//	    };
//	} );

	
	wip.app().directive( 'historyBack2', function() {
	    return {
	        restrict: 'A',
	        link: function( scope, elem, attrs ) {
	        	elem.on( 'click', function () {
	                history.go(-2);
	                scope.$apply();
	            } );
	        }
	    };
	} );
	
	//input box enter금지
	wip.app().directive( 'notEnter', function() {
		return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	               return false;
	            } 
	        });
	    };
	});
	
	//input box enter시 원하는 function 실행.
	wip.app().directive( 'ngEnter', function() {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });
	 
	                event.preventDefault();
	            }
	        });
	    };
	});
	
	wip.app().directive( 'recaptchaImage', function(co, $window) {
	    return {
	        restrict: 'A',
	        scope : {
	        	captchatype : "=",
	        	captchakey  : "=",
	        	captchasitekey  : "="
			},
	        link: function( scope, elem, attrs ) {
	        	    
	        	   var ajax = co.get('ajax');
	        	   scope.$watch("captchatype" ,function(value) {
	        		   if(value == 'S'){
	        			   $("#recaptcha_image").html("<img id='recaptcha_challenge_image' alt='이 부분은 문자와 숫자로 구성된 보안코드입니다. 탭 키를 두 번 누르시고 음성지원 버튼을 선택하세요.' src='"+wipLogicalPath+"/"+APPNAME+"/captchaS?"+new Date().getTime()+"' />");
	        		   }else if(value == 'R'){
       			   			Recaptcha.create(scope.captchakey, 'recaptcha_image', RecaptchaOptions);
       			   			ajax.get(wipLogicalPath+'/'+ APPNAME +'/captchaR').then(function(result) {
       			   			});
	        		   }
	        	   });
	        	   
	        }
	    };
	});
	
	
	wip.app().directive( 'inputNumber', function() {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.on('keydown', function(event){
					var key = (event.which) ? event.which : event.keyCode;
					//엔터키, 백스페이스, 화살표는 가능
					if((key == 8) || (key == 9) || (key == 13) || (key == 16) || (key == 37) || (key == 39) || (key == 116) || (key >=48 && key <=57)) {
						return true;
					}
					
					return false;
					
				});
				
				element.numeric();
				
				element.css("ime-mode", "disabled");
                 //화살표가 이것때문에 안움직임.
                 /*.on('keyup', function(e) {
                     element.val(element.val().replace(/[^0-9]/g, ""));
                 });*/
		    }
		};
		
	});
	
	wip.app().directive( 'notSpace', function() {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.on('keydown', function(event){
					var key = (event.which) ? event.which : event.keyCode;
					if((key == 32)) {
						return false;
					} else {
						return true;
					}
				});
		    }
		};
		
	});
	
	
	wip.app().directive( 'inputEng', function() {
		return {
			restrict: 'A',
			link : function (scope, element, attrs) {
				element.on('keydown', function(event){
					var key = (event.which) ? event.which : event.keyCode;
					
					var regx = /^[a-zA-Z0-9]*$/;
					
					//엔터키, 백스페이스, 화살표, caps lock는 가능
					if((key == 8) || (key == 9) || (key == 13) || (key == 16) || (key == 37) || (key == 39) || (key == 116) || (key == 20)) {
						return true;
					}
					if(regx.test(event.key)) {
						event.key = event.key.toUpperCase();
						return true;
					} else {
						return false;
					}
					
				});
		    }
		};
		
	});
	
	wip.app().directive( 'upperAndNumber', function() {
		return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function(scope, element, attrs, ctrl) {
	        	
	        	element.on('keydown', function(event){
					var key = (event.which) ? event.which : event.keyCode;
					
					var regx = /^[a-zA-Z0-9 ]*$/;
					//엔터키, 백스페이스, 화살표, caps lock는 가능
					if((key == 8) || (key == 9) || (key == 13) || (key == 16) || (key == 37) || (key == 39) || (key == 116) || (key == 20) || (key == 32)) {
						return true;
					}
					if(regx.test(event.key)) {
						event.key = event.key.toUpperCase();
						return true;
					} else {
						return false;
					}
				});

				function parser(value) {
					if (ctrl.$isEmpty(value)) {
						return value;
					}
					var formatedValue = value.toUpperCase().replace(/[^a-z0-9 ]/gi, '');
					if (ctrl.$viewValue !== formatedValue) {
						ctrl.$setViewValue(formatedValue);
						ctrl.$render();
					}
					return formatedValue;
					
				}

				function formatter(value) {
					
					if (ctrl.$isEmpty(value)) {
						return value;
					}
					return value.toUpperCase();
					
				}

				ctrl.$formatters.push(formatter);
				ctrl.$parsers.push(parser);
				}
	    };
	});

  wip.app().directive( 'removeEmoji', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {

        var regx = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

        element.on('keydown', function(event){
          var key = (event.which) ? event.which : event.keyCode;

          if(regx.test(event.key)) {
            return false;
          }
          return true;
        });

        function parser(value) {
          if (ctrl.$isEmpty(value)) {
            return value;
          }
          var formatedValue = value.replace(regx, '');
          if (ctrl.$viewValue !== formatedValue) {
            ctrl.$setViewValue(formatedValue);
            ctrl.$render();
          }
          return formatedValue;

        }

        ctrl.$parsers.push(parser);
      }
    };
  });
	

	
	//자동완성 방지, checkbox aria-checked
	wip.app().directive( 'input', function($parse, $timeout) {
	    return {
	        restrict: 'E',
	       /*scope: {
	          ngModel: '=', // sync model
	        },*/
	        compile: function compile(tElement, tAttrs, transclude) {
                var o = $(tElement); 
                if(o.attr('type') === 'text'
                && !o.attr('kr-input')) {
                	tElement.on('compositionstart', function(e) {
                        e.stopImmediatePropagation();
                    });
                }
                
	            return {
	              pre: function preLink($scope, iElement, iAttrs, controller) {
	            	  
	            	  
	            	  	$(iElement).attr('autocomplete', 'off');
	            	  	
	            	  	var $input = $(iElement), 
		        		$label = $input.parent('div.iam-input-container');
			        	$input.focusin(function() {
			        		$label.addClass('focus'); 
			        	});
			        	$input.change(function() {  $label.addClass('active'); });
			        	$input.focusout(function() { $label.removeClass('focus'); if (!$input.val()) $label.removeClass('active');  });
	              }
	            }
	          }
	    }
	} );
	
	wip.app().directive('krInput', [ '$parse', function($parse) {
        return {
            restrict : 'A',
            compile : function(element) {
                element.on('compositionstart', function(e) {
                    e.stopImmediatePropagation();
                });
            }
        };
    }]);	
	
	wip.app().directive( 'select', function($parse, $timeout) {
	    return {
	        restrict: 'E',
	        compile: function compile(tElement, tAttrs, transclude) {
	            return {
	              pre: function preLink($scope, iElement, iAttrs, controller) {
	            	  	var $input = $(iElement), 
		        		$label = $input.parent('div.iam-input-container');
		        		$input.focusin(function() {
		        			$label.addClass('focus'); 
		        		});
			        	$input.change(function() {  $label.addClass('active') });
			        	$input.focusout(function() { $label.removeClass('focus'); if (!$input.val()) $label.removeClass('active'); });
	              }
	            }
	          }
	    }
	} );
	
	wip.app().directive( 'role', function() {
	    return {
	        restrict: 'A',
	        link: function( scope, elem, attrs ) {
	        	 $(elem).keydown(function(e) {
        		    // 스페이스바 키 번호 32
        		    if (e.keyCode == '32') {
        		      if ($(this).attr('aria-checked') === 'true') {
        		        $(this).attr('aria-checked', 'false');
        		      } else {
        		        $(this).attr('aria-checked', 'true');
        		      }
        		    }
        		  });
	        }
	    };
	} );
	
	wip.app().directive('compilehtml', [ "$compile", "$parse", function($compile, $parse) {
		return {
			restrict : 'A',
			link : function($scope, element, attr) {
				var parse = $parse(attr.ngBindHtml);
				function value() {
					return (parse($scope) || '').toString();
				}

				$scope.$watch(value, function() {
					$compile(element, null, -9999)($scope);
				});
			}
		}
	} ]);  
	
	// 질문답변 directive
	wip.app().directive( 'questionSelect', function() {
	    return {
	        restrict: 'A',
	        scope : {
				items : "=",
				id : "=id"
			},
	        link: function( scope, elem, attrs ) {
	        	var ul = $(elem).children('ul');
	        	var select = $(elem).children('.iam-fakeSelect');
	        	var label = $(elem).children('.iam-fakeLabel');
	        	//클릭이벤트
	        	$(elem).click(function(){
	        		if(ul.css('display') == "none") {
	        			ul.show();
	        			$(elem).addClass('active focus');
	        		} else {
	        			ul.hide();
	        		}
	        	});
	        	
	        	//enterkey event
	        	$(elem).keydown(function(e) {
        		    // 스페이스바 키 번호 32
        		    if (e.keyCode == '13') {
        		    	if(ul.css('display') == "none") {
    	        			ul.show();
    	        			$(elem).addClass('active focus');
    	        		} else {
    	        			ul.hide();
    	        		}
        		    }
        		  });
	        	
	        	$('body').click(function(e){
	        		if(!($(e.target).is(select))) {
	        			ul.hide();
	        			$(elem).removeClass('focus');
	        		}
	        		if(angular.isUndefined(scope.id) || scope.id == null ) {
	        			$(elem).removeClass('active');
	        		}
	        	});
	        	
	        	scope.$watch("items" ,function(value) {
	        		var li = $(elem).children('ul').children('li');
	        		
	        		
	        		li.click(function() {
	        			if($(this).attr("id") != "default") {
	        				select.text($(this).children('a').text());
			        		scope.id = $(this).attr("id");
			        		select.removeClass("iam-error");
			        		$(elem).addClass('active focus');
			        		select.focus();
	        			} else {
	        				select.html($(this).children('a').text());
			        		scope.id = "";
	        			}
	        			scope.$apply();
		        	});
	        		
	        		li.on("keydown", function(e){
	        			if(e.keyCode == 13) {
	        				select.text($(this).children('a').text());
			        		scope.id = $(this).attr("id");
			        		select.removeClass("iam-error");
			        		$(elem).addClass('active focus');
			        		select.focus();
	        			} else {
			        		scope.id = "";
	        			}
	        			scope.$apply();
	        		});
	        		
	        		
	        	});
	        	
	        	
	        	scope.$watch("id", function(value) {
	        		if(angular.isUndefined(value)) 
	        			return;
	        		if(scope.id != "") {
	        			angular.forEach(scope.items, function(value, key){
	        				if(value.scrtyQstnID == scope.id) {
	        					select.text(value.scrtyQstn);
	        					$(elem).addClass('active');
	        				}
	        			});
	        		}
	        	});
	        }
	    };
	} );
} ();
