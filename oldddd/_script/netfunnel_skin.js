if(typeof NetFunnel == "object"){
	NetFunnel.SkinUtil.add('kdp', {
		prepareCallback : function(){
			// var netFunnelLoadingPopupCount = document.getElementById("NetFunnel_Loading_Popup_Count");
			// var netFunnelLoadingPopupTimeLeft = document.getElementById("NetFunnel_Loading_Popup_TimeLeft");
			// netFunnelLoadingPopupCount.innerHTML = "0";
			// netFunnelLoadingPopupTimeLeft.innerHTML = "0";
		},
		updateCallback : function(percent,nwait,totwait,timeleft){
			var custom_timeLeft = document.getElementById("NetFunnel_Loading_Popup_TimeLeft");
			var timeLeftStr="";
			if(timeleft > (40*60)){
				timeLeftStr="40분 이상";
			}else if((40*60) > timeleft > (30*60)){
				timeLeftStr="30분 이상";
			}else if((30*60) > timeleft > (20*60)){
				timeLeftStr="20분 이상";
			}else if((20*60) > timeleft > (10*60)){
				timeLeftStr="10분 이상";
			}else if((10*60) > timeleft > (5*60)){
				timeLeftStr="5분 이상";
			}else {
			
				//NetFunnel.Util.getTimeStr(timeleft) : NetFUNNEL 기본 시간 계산
				if(timeleft > 60) timeLeftStr = parseInt(timeleft/60) + '분 ' + timeleft%60 + '초';
				else timeLeftStr = timeleft%60 + '초';
			}
			custom_timeLeft.innerHTML=timeLeftStr;
		},
		htmlStr : '<style>#pop_iframe { background: black !important; }</style>\
			<div id="popNetfunnel" class="net-funnel-pop" tabindex="0" data-popup-layer="popNetfunnel" data-focus="popNetfunnel">\
				<div class="layer-content">\
					<div class="img-boxing">\
						<img src="/sec/static/evt/_images/common/img-waiting-pop.png" alt="">\
						<p>현재 사이트 이용자가 많아<br>서비스 접속 <span class="txt-blue">대기중</span>입니다</p>\
					</div>\
					<div class="waiting-boxing">\
						<p>조금만 기다려주시면 자동 접속됩니다</p>\
						<dl class="waiting-data">\
							<dt>예상 대기 시간</dt>\
							<dd class="txt-blue">\
								약\
								<span id="NetFunnel_Loading_Popup_TimeLeft"></span>\
							</dd>\
							<dt class="last">입장 순서</dt>\
							<dd class="txt-blue last"><span id="NetFunnel_Loading_Popup_Count" class="' + NetFunnel.TS_LIMIT_TEXT + '"></span>번째</dd>\
						</dl>\
					</div>\
					<div class="noti">\
						<p>다시 접속하시면 대기 시간이 늘어나니 유의해주세요!</p>\
						<button id="NetFunnel_Countdown_Stop" class="cta-exit">나가기</button>\
					</div>\
				</div>\
			</div>'
	},'normal');
}