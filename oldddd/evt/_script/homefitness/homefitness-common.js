var homefit;
var Util;
var GV_tempSaveLectureNo = "";
$(document).ready(function() {
    homefit = {
        fnCheckLogin: function(callback) {
            var options = {
                url: "/sec/xhr/homefitness/loginCheck",
                type: "POST",
                done: function(data) {
                    if (data && data.isLogin) {
                        if (callback) callback(data.subsInfo)
                    } else location.href = "/sec/member/indexLogin/?returnUrl=" + window.location.pathname
                }
            };
            ajax.call(options)
        },
        fnAlert: function(msg, callbackFnc) {
            var alertData = {
                title: "",
                content: msg,
                callback: callbackFnc,
                btnText: "확인"
            };
            commonAlert(alertData);
            openLayer("commonAlert")
        },
        fnConfirm: function(msg, callbackFnc) {
            var confirmData = {
                content: msg,
                callback: callbackFnc,
                okBtnText: "확인",
                cancelBtnText: "취소"
            };
            commonConfirm(confirmData);
            openLayer("commonConfirm")
        },
        fnJoinTwoWayLive: function(_lctNo) {
            GV_tempSaveLectureNo = "";
            GV_tempSaveLectureNo = _lctNo;
            homefit.fnAlert('크롬브라우저 사용을 권장합니다.<br>"Wi-Fi 등 안정적인 네트워크 환경에서 이용 시 더 원활한 운동을 즐기실 수 있습니다."', function() {
                var options = {
                    url: "/sec/xhr/homefitness/program/join",
                    type: "POST",
                    data: {
                        lctNo: GV_tempSaveLectureNo
                    },
                    done: function(rtn) {
                        if (rtn.joinUrl) window.open(rtn.joinUrl, "onthelive_twoway")
                    }
                };
                ajax.call(options);
                GV_tempSaveLectureNo = ""
            })
        },
        fnJoinOneWayLive: function(_lctNo) {
            GV_tempSaveLectureNo = "";
            GV_tempSaveLectureNo = _lctNo;
            homefit.fnAlert('크롬브라우저 사용을 권장합니다.<br>"Wi-Fi 등 안정적인 네트워크 환경에서 이용 시 더 원활한 운동을 즐기실 수 있습니다."', function() {
                window.location.href = "/sec/homefitness/play/live/" + GV_tempSaveLectureNo;
                GV_tempSaveLectureNo = ""
            })
        },
        fnCheckChromeBrowser: function() {
            return navigator.userAgent.toLocaleLowerCase().indexOf("chrome") >= 0
        },
        fnOpenReservePop: function(_lctNo) {
            openLayer("hmf_program_rsv_layer");
            initReservePop(_lctNo)
        },
        fnOpenReserveCancelPop: function(_lctNo) {
            openLayer("hmf_program_cnl_layer");
            initReservePop(_lctNo)
        },
        fnReqReserveChange: function(_lctNo) {
            GV_tempSaveLectureNo = "";
            GV_tempSaveLectureNo = _lctNo;
            homefit.fnConfirm(_HOMEFIT_PROGRAM_RESERVE_CHANGE_CONFIRM, function() {
                var options = {
                    url: "/sec/xhr/homefitness/program/reserveChange",
                    type: "POST",
                    data: {
                        lctNo: GV_tempSaveLectureNo
                    },
                    done: function(rtn) {
                        console.log(rtn);
                        if (rtn.result == "S") homefit.fnAlert(_HOMEFIT_PROGRAM_RESERVE_CHANGE_SUCCESS)
                    }
                };
                ajax.call(options);
                GV_tempSaveLectureNo =
                    ""
            })
        },
        fnInterestClass: function(_btn) {
            var _url = "";
            var _data = {
                clsNo: $(_btn).attr("data-clsNo"),
                trnrNo: $(_btn).attr("data-trnrNo")
            };
            if ($(_btn).hasClass("on")) _url = "/sec/xhr/homefitness/program/deleteInterest";
            else _url = "/sec/xhr/homefitness/program/insertInterest";
            var options = {
                url: _url,
                type: "POST",
                data: _data,
                success: function(rtn) {
                    if (rtn && rtn.unssb == "Y") {
                        openLayer("hmf_subinfo_confirm3");
                        return
                    }
                    if ($(_btn).hasClass("on")) {
                        $(_btn).removeClass("on");
                        $(".bookmarkOn").hide();
                        $(".bookmarkOff").show();
                        setTimeout(function() {
                                $(".bookmarkOff").fadeOut(300)
                            },
                            5E3)
                    } else {
                        $(_btn).addClass("on");
                        $(".bookmarkOn").show();
                        $(".bookmarkOff").hide();
                        setTimeout(function() {
                            $(".bookmarkOn").fadeOut(300)
                        }, 5E3)
                    }
                }
            };
            $.ajax(options)
        },
        fnLoadingVDP: function(_vodNo) {
            $.ajax({
                url: "/sec/xhr/homefitness/play/playVod/",
                data: {
                    vodNo: _vodNo
                },
                type: "GET",
                success: function(rtn) {
                    if (rtn) {
                        $(".hmf_vdo_info .hmf_flag_26").addClass("vod");
                        $(".hmf_vdo_info .hmf_flag_26").html("VOD");
                        $(".hmf_vdo_info .hmf_vdo_tit").html(rtn.vodInfo.clsItemNm + " · " + rtn.vodInfo.vodTitle + " · " + rtn.vodInfo.playMmSs);
                        $("#lecture_datetime").html("");
                        var arrSource = [];
                        rtn.trnsList.forEach(function(e, idx) {
                            arrSource.push({
                                file: rtn.vodInfo.cdnUrl + e.path,
                                label: e.label,
                                default: idx == 1 ? true : false
                            })
                        });
                        var playerOption = {
                            playlist: [{
                                sources: arrSource,
                                title: rtn.vodInfo.vodTitle
                            }],
                            autostart: true,
                            controls: true
                        };
                        var nvplayer = new ncplayer("hmf_cmm_player", playerOption)
                    }
                }
            })
        },
        fnLoadingLVP: function(_lctNo) {
            $.ajax({
                url: "/sec/xhr/homefitness/play/joinLive/",
                data: {
                    lctNo: _lctNo
                },
                type: "GET",
                success: function(rtn) {
                    if (rtn) {
                        if (rtn.pgmInfo.clsMtdCd ==
                            "20") $(".hmf_vdo_info .hmf_flag_26").addClass("premium");
                        $(".hmf_vdo_info .hmf_flag_26").html(rtn.pgmInfo.clsMtdNmKo);
                        $(".hmf_vdo_info .hmf_vdo_tit").html(rtn.pgmInfo.lctTitle + " · " + rtn.pgmInfo.trnrNm + " · " + rtn.pgmInfo.lctTime + "분");
                        $("#lecture_datetime").html(rtn.pgmInfo.lctDtFmtKo + " (" + rtn.pgmInfo.lctStrTm + ")");
                        var playerOption = {
                            playlist: [{
                                file: rtn.joinUrl,
                                title: rtn.pgmInfo.lctTitle
                            }],
                            autostart: true,
                            controls: true
                        };
                        var nvplayer = new ncplayer("hmf_cmm_player", playerOption)
                    }
                }
            })
        },
        vCopyUrl: window.document.location.href,
        fnShareKakao: function() {
            snsShare.kakaoTalk($("meta[itemprop='url']").attr("content"), "", $("meta[itemprop='image']").attr("content"), $(".itm-info-title").text())
        },
        fnShareFacebook: function() {
            snsShare.facebook(this.vCopyUrl)
        }
    };
    $(".social-box .btn-good").off().on("click", function(e) {
        e.preventDefault();
        $btn = $(this);
        homefit.fnCheckLogin(function() {
            homefit.fnInterestClass($btn)
        })
    });
    $(".shareTooltup-1 .pd-sns-kakao").on("click", function(e) {
        homefit.fnShareKakao()
    });
    $(".shareTooltup-1 .pd-sns-facebook").on("click",
        function(e) {
            homefit.fnShareFacebook()
        });
    var clipboard = new ClipboardJS(".pd-copylink", {
        text: function() {
            return homefit.vCopyUrl
        }
    });
    clipboard.on("success", function(e) {
        var vTimer = setTimeout(function() {
            $("#mask").trigger("click")
        }, 5E3);
        $("#mask").off().on("click", function() {
            $(".popup-msg").hide();
            $(".popup-msg").empty();
            scrollLock("unlock");
            $("#mask").fadeOut("fast").remove();
            clearTimeout(vTimer);
            $(this).off()
        });
        homefit.fnAlert("링크가 복사되었습니다.")
    });
    Util = {
        isEmpty: function(val) {
            if (typeof val == "undefined" ||
                val == null || val == "" || val == undefined || val == "undefined") return true;
            else return false
        },
        nvl: function(val, replaceVal) {
            if (this.isEmpty(val)) return replaceVal;
            else return val
        }
    }
});