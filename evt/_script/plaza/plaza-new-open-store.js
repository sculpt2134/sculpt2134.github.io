var contentsWrap={vWrapId:"#content-Wrap",fnKakaoMsg:function(){var data=$("#locationForm").serializeJson();KakaoShare(data)},vMicroUrl:"digitalplaza/storeDetail/",vMapLink_to:"https://map.kakao.com/link/to/",vMapLink_map:"https://map.kakao.com/link/map/",vNowPage:"1"};window.onhashchange=function(){if(location.hash!="")fnLoadBoard(location.hash);else fnLoadBoard(1)};
$(document).ready(function(){shareInit($(contentsWrap.vWrapId).data("kakaokey"),$(contentsWrap.vWrapId).data("facebookid"));$(".newOpenStore-list",contentsWrap.vWrapId).on("click",".moreView",function(){var totalCount=$("#pageInfo").data("totalcount")/$("#pageInfo").data("rows");contentsWrap.vNowPage++;if(contentsWrap.vNowPage>=totalCount)$(this).hide();var data={page:contentsWrap.vNowPage};var options={data:data,url:$(contentsWrap.vWrapId).data("ctpath")+"xhr/digitalplaza/newstore/loadNewOpenStoreList",
type:"POST",dataType:"html",done:function(data){$(".newOpenStore-list ul[name=newOpenStoreList]").append(data)}};ajax.call(options)});$(document).on("click","#interestPage a",function(){if($(this).attr("data-page")!=undefined)location.hash=$(this).attr("data-page")});$(contentsWrap.vWrapId).on("click",".btn-sendkakao",function(){var addr=$(this).parent().prev().html();var locData=$(this).parent().data();var url=contentsWrap.vMapLink_map+locData.lttd+","+locData.litd;$("input[name=objectType]","#locationForm").val($(this).data("objtype"));
$("input[name=address]","#locationForm").val(addr);$("input[name=addressTitle]","#locationForm").val(addr);$("input[name=title]","#locationForm").val(locData.plazanm);$("input[name=url]","#locationForm").val(url);contentsWrap.fnKakaoMsg()});$(contentsWrap.vWrapId).on("click",".btn-findway",function(){$("#findMap").remove();var locData=$(this).parent().data();var url=contentsWrap.vMapLink_to+locData.plazanm+","+locData.lttd+","+locData.litd;window.open(url,"_blank")});$(contentsWrap.vWrapId).on("click",
".imgArea",function(){var shopno=$(this).data("shop-no");var url=$(contentsWrap.vWrapId).data("ctpath")+contentsWrap.vMicroUrl+shopno+"/";window.open(url,"_blank")});fnLoadBoard()});
$(document).ready(function(){$(".slide-newOpenStore").slick({autoplay:true,dots:true,arrows:true});$(".slick-dots").each(function(e){e.preventDefault;$(this).after().append("<li class='btn-play'><button type='button'>플레이</button></li><li class='btn-pause'><button type='button'>일시정지</button></li>")});$(document).on("click",".slide-newOpenStore .btn-play > button",function(){$(this).parent().hide();$(this).parent().siblings("li.btn-pause").show().css("display","inline-block");$(".slide-newOpenStore").slick("slickPlay")});
$(document).on("click",".slide-newOpenStore .btn-pause > button",function(){$(this).parent().hide();$(this).parent().siblings("li.btn-play").show().css("display","inline-block");$(".slide-newOpenStore").slick("slickPause")})});