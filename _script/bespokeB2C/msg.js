var message = {
  timer: 400,
  returnValue: "",
  run: false,  
  step1Pop: function (data) {
    var layerValue = "refBespokePop" + data;
    var messageSource = "";

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop" id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    if (data == "KF") {
      // 일반 키친핏
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">BESPOKE 키친핏</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="text">주방의 냉장고 표준장/싱크대 기준으로 전면부가 돌출되지 않고 딱 맞게 설치됩니다.</p>';
      messageSource += '<p class="text">좌우 설치폭 각 12mm</p>';
      messageSource +=
        '<p class="text">키친핏 냉장고 2대 이상 구매 시 냉장고간 연결을 위한 설치용 자재 ( RA-C00K1DAA ) 별도 구매 필요합니다.</p>';
      messageSource += '<p class="text">싱크대 깊이 700mm 기준</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    } else if (data == "CC") {
      // (구) 인피니트 Bespoke
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">BESPOKE Infinite Line</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="title-text">BESPOKE 프리스탠딩 Infinite Line</p>';
      messageSource +=
        '<p class="text">주방에 설치된 표준장/싱크대 기준으로 냉장고 전면부가 돌출된 형태로 설치됩니다.</p>';
      messageSource +=
        '<p class="text">제품 크기(가로*세로*깊이) : 912×1,856×930 mm</p>'; //# 수정
      messageSource += "</li>";
      messageSource += '<li class="list-item">';
      messageSource += '<p class="title-text">BESPOKE 키친핏 Infinite Line</p>';
      messageSource +=
        '<p class="text">주방의 냉장고 표준장/싱크대 기준으로 전면부가 돌출되지 않고 딱 맞게 설치됩니다.</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 좌우 벽면과 설치폭 각 5mm</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 제품 간 설치폭 각 10mm</p>';
      messageSource +=
        '<p class="text">4도어 Infinite Line 좌우 벽면과 설치폭 각 12mm</p>';
      messageSource +=
        '<p class="text">4도어 Infinite Line 제품 간 설치폭 각 10mm</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 냉장고 간 연결을 위해서는 설치용 자재 (RA-C00K1CAA) 별도 구매필요하며, 4도어 Infinite Line 냉장고 간 연결에는 RA-C00K1DAA 별도 구매가 필요합니다.</p>';
      messageSource += '<p class="text">싱크대 깊이 700mm 기준</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    } else if (data == "FP") {
      // 교체용 패널
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">BESPOKE 교체용 패널</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="text">2019년 이후 출시된 BESPOKE 제품에 한해 적용 됩니다.</p>';
      messageSource +=
        '<p class="text">교체를 원하는 칸 수 만큼 패널 구매 가능합니다.</p>';
      messageSource +=
        '<p class="text">패널 구매 시 교체 설치까지 해드립니다.</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    } else if (data == "FS") {
      // 프리스탠딩
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">BESPOKE 프리스탠딩</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="text">주방에 설치된 표준장/싱크대 기준으로 냉장고 전면부가 돌출된 형태로 설치됩니다.</p>';
      messageSource +=
        '<p class="text">	깊이<br /> 4도어 일반 냉장고 기준 : 약 930mm<br /> 4도어 김치냉장고(584L) 기준 : 약 892mm<br /> 4도어 김치냉장고(486L) 기준 : 약 794mm</p>';
      messageSource += '<p class="text">좌우 설치폭 각 50mm</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    } else if (data == "IFS") {
      // 인피니트 프리스탠딩
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">Infinite Line 프리스탠딩</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="text">주방에 설치된 표준장/싱크대 기준으로 냉장고 전면부가 돌출된 형태로 설치됩니다.</p>';
      messageSource +=
        '<p class="text">제품 크기(가로*세로*깊이) : 912×1,856×930mm</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    } else if (data == "IKF") {
      // 인피니트 키친핏
      messageSource += '<div class="content-head">';
      messageSource += '<div class="content-head__btn-box">';
      messageSource += '<button class="btn-close pop-close '+layerValue+'" data-focus-next="' + layerValue + '">';
      messageSource += '<span class="blind">닫기</span>';
      messageSource += "</button>";
      messageSource += "</div>";
      messageSource += '<div class="content-head__text-box">';
      messageSource += '<p class="title-text">Infinite Line 키친핏</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += '<div class="content-body">';
      messageSource += '<ul class="ref-info-list">';
      messageSource += '<li class="list-item">';
      messageSource +=
        '<p class="text">주방의 냉장고 표준장/싱크대 기준으로 전면부가 돌출되지 않고 딱 맞게 설치됩니다.</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 좌우 벽면과 설치폭 각 5mm</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 제품 간 설치폭 각 10mm</p>';
      messageSource +=
        '<p class="text">4도어 Infinite Line 좌우 벽면과 설치폭 각 12mm</p>';
      messageSource +=
        '<p class="text">4도어 Infinite Line 제품 간 설치폭 각 10mm</p>';
      messageSource +=
        '<p class="text">1도어 Infinite Line 냉장고 간 연결을 위해서는 설치용 자재 (RA-C00K1CAA) 별도 구매필요하며, 4도어 Infinite Line 냉장고 간 연결에는 RA-C00K1DAA 별도 구매가 필요합니다.</p>';
      messageSource += '<p class="text">싱크대 깊이 700mm 기준</p>';
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
    }
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";

    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);
    
    $("."+layerValue).off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");

  },
  step2Pop: function () {
    var layerValue = "refBespokePopMnfctYear";
    var messageSource = "";

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop" id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="step2-close" data-focus-next="step2Pop">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += '<div class="content-head__text-box">';
    messageSource += '<p class="title-text">제조년도 이렇게 확인하세요</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="content-body">';
    messageSource += '<ul class="ref-year-list">';
    messageSource += '<li class="list-item">';
    messageSource +=
      '<p class="title-text"><span class="num">1.</span>상칸 좌측면 안쪽에 있는 제품 정보 스티커를 확인하세요.</p>';
    messageSource += '<div class="img-box">';
    messageSource +=
      '<img src="/sec/static/_images/ref-year.png" alt="제품 스티커 정보 이미지">';
    messageSource += "</div>";
    messageSource += "</li>";
    messageSource += '<li class="list-item">';
    messageSource +=
      '<p class="title-text"><span class="num">2.</span>모델명 기준 왼쪽에서 5번째 있는 알파벳 확인 후 알맞은 탭을 선택해 주세요.</p>';
    messageSource += '<div class="img-box">';
    messageSource += '<img src="/sec/static/_images/bespokeRevolution/svg/svg-year.svg" alt="모델명의 다섯번째 알파벳이 R이면 19년도 모델 탭 선택하세요.">';
    messageSource += "</div>";
    messageSource += '<div class="info-text-box">';
    messageSource +=
      '<p class="text"><span class="bold fs16">R</span>인 경우 → <span class="bold fs16">2019년 탭 선택</span></p>';
    messageSource +=
      '<p class="text"><span class="bold fs16">T</span>또는 <span class="bold fs16">A</span> 인 경우 → <span class="bold fs16">2020년 이후 탭 선택</span></p>';
    messageSource +=
      '<p class="sub-text">(단, RB30R** 모델의 경우 20년도 출시 모델로, R로 확인되나 2020년 이후 탭 선택)</p>';
    messageSource += "</div>";
    messageSource += "</li>";
    messageSource += "</ul>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);
    
    $("#step2-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
  },
  step3Pop: function (data, focusId) {
    var layerValue = "refBespokePopAddOns";
    var messageSource = "";

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop" id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="step3-close" data-focus-next="' + focusId + '">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += '<div class="content-head__text-box">';
    if(data == "투명 김치통 (3개 세트)" || data == "투명 김치통 (6개 세트)"
       || data == "메탈쿨링 김치통 (3개 세트)" || data == "메탈쿨링 김치통 (1개 단품)")
    {
      messageSource += '<p class="title-text">추가 악세서리</p>';
    } else {
      messageSource += '<p class="title-text">부가기능</p>';
    }
    messageSource += "</div>";
    messageSource += "</div>";
    if (data == "빅 아이스메이커") {
      // 베버리지
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '	<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature01.jpg " alt="빅 아이스메이커">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">빅 아이스메이커</p>';
      messageSource +=
        '<p class="main-text">무더운 여름에 온 가족이 수시로 얼음을 꺼내먹으면 금방 얼음이 동나서 얼음 채우는 것도 번거로운 일이 되는데요.<br />빅 아이스메이커는 이런 수고로움을 줄여줍니다.<br />한번에 2 L의 물을 넣으면 자동으로 얼음을 얼려 얼음 박스에 채워줍니다.</p>';
      messageSource += '<p class="sub-text">해당 모델에 한함</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    } else if (data == "오토필 정수기") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '	<img src="//images.samsung.com/kdp/bespoke/images/v1/img_chef_feature01.jpg " alt="오토필 정수기">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">오토필 정수기</p>';
      messageSource +=
        '<p class="main-text">이제 한 잔씩 따르지 말고 1.4 L 물통을 그대로 꺼내 마셔보세요.<br />물통에 자동으로 물이 채워지고 시원하게 보관돼 온 가족이 마셔도 넉넉합니다.<br />냉장실 내부에 위치해 외부 박테리아 오염에도 안전하죠.<br />	맛이나 향을 첨가할 수 있는 인퓨저도 있어 활용도가 뛰어납니다.</p>';
      messageSource += '<p class="sub-text">해당 모델에 한함</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    } else if (data == "메탈쿨링 시스템") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="tab-nav">';
      messageSource += '<ul class="tab-nav__tabs">';
      messageSource += '<li class="tab-title is-active" rel="#metalCooling1">'; //탭
      messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
      messageSource += '<p class="text">4도어 584L</p>';
      messageSource += "</a>";
      messageSource += "</li>";
      messageSource += '<li class="tab-title" rel="#metalCooling2">'; //탭
      messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
      messageSource += '<p class="text">4도어 486L</p>';
      messageSource += "</a>";
      messageSource += "</li>";
      messageSource += '<li class="tab-title" rel="#metalCooling3">'; //탭
      messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
      messageSource += '<p class="text">3도어 313L</p>';
      messageSource += "</a>";
      messageSource += "</li>";
      messageSource += "</ul>";
      messageSource += "</div>";
      messageSource += '<section class="tab-nav__contents">';

      messageSource +=
        '<div class="ref-add-wrap is-active" id="metalCooling1">'; //탭 내용
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/pop_metal_4door_584.jpg " alt="메탈쿨링">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">메탈쿨링 시스템</p>';
      messageSource +=
        '<p class="title-sub-text">내부에 메탈을 적용해 미세 정온을 유지</p>';
      messageSource +=
        '<p class="main-text">냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 	김치맛을 오래 즐길 수 있습니다.</p>';
      messageSource +=
        '<p class="sub-text">상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다</p>';
      messageSource += "</div>";
      messageSource += "</div>";

      messageSource += '<div class="ref-add-wrap" id="metalCooling2">'; //탭 내용
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/pop_metal_4door_486.jpg " alt="메탈쿨링">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">메탈쿨링 시스템</p>';
      messageSource +=
        '<p class="title-sub-text">내부에 메탈을 적용해 미세 정온을 유지</p>';
      messageSource +=
        '<p class="main-text">냉기보존에 탁월한 메탈 소재를 천장, 커버, 선반, 서랍, 메탈쿨링 커튼까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.</p>';
      messageSource +=
        '<p class="sub-text">상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다</p>';
      messageSource += "</div>";
      messageSource += "</div>";

      messageSource += '<div class="ref-add-wrap" id="metalCooling3">'; //탭 내용
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/pop_metal_3door_313.jpg " alt="메탈쿨링">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">'; //#수정 - 추가
      messageSource += '<p class="title-text">메탈쿨링 시스템</p>';
      messageSource +=
        '<p class="title-sub-text">내부에 메탈을 적용해 미세 정온을 유지</p>';
      messageSource +=
        '<p class="main-text">냉기보존에 탁월한 메탈 소재를 도어, 커버, 선반, 메탈쿨링 서랍까지 적용해 미세하게 정온을 유지합니다. 그래서 한 겨울 땅 속 같은 아삭한 김치맛을 오래 즐길 수 있습니다.</p>';
      messageSource +=
        '<p class="sub-text">상기 이미지는 연출한 이미지며, 모델별로 제품 내상 이미지 및 메탈 적용부위는 다를 수 있습니다</p>';
      messageSource += "</div>"; //#수정 - 추가
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</section>";
      messageSource += "</div>";
    } else if (data == "베버리지센터") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/featureType08_01.jpg " alt="오토필 정수기">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">오토필 정수기(좌)</p>';
      messageSource +=
        '<p class="main-text">센서로 물의 양을 측정하여 자동으로 채워주기 때문에 물을 받기 위해 냉장고 앞에 서서 기다릴 필요가 없습니다.<br /> 한꺼번에 많은 양의 음식을 만들 때도, 가족 모두가 동시에 물을 찾을 때도 걱정 없습니다.</p>';
      messageSource += '<p class="title-text">히든 디스펜서(우)</p>';
      messageSource +=
        '<p class="main-text">외관은 비스포크 패널 그대로, 정수기는 패널 안쪽에 쏙 들어가 있어 더욱 위생적입니다.<br />외부에 노출된 정수기에 비해 오염의 위험이 적고, 낮은 온도 환경으로 박테리아 성장을 억제합니다.<br />도어부 정수 디스펜서 뒷면의 수납도 충분합니다.</p>';
      messageSource += '<p class="sub-text">해당 모델에 한함</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    } else if (data == "김치통(상칸)") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature05.jpg " alt="메탈쿨링 김치통">';
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">메탈쿨링 김치통</p>';
      messageSource +=
        '<p class="title-sub-text">메탈 소재로 김치를 오래 맛있게 보관하고, 냄새와 탈색 걱정이 적어 위생적인 프리미엄 김치통</p>';
      messageSource +=
        '<p class="main-text">메탈쿨링 김치통은 산소 투과도가 낮아 밀폐력이 뛰어나고, 효모 발생이 적어 일반 플라스틱 용기 대비 효모 수가 약 35% 적고, 냉각속도가 빠른 것으로 나타났습니다.<br />또한 냄새와 탈색 염려가 적어 위생적이고, 세척이 편리합니다.</p>';
      messageSource +=
        '<p class="sub-text">모수 비교 :메탈쿨링김치통(RA-KSCRQ57), 자사 플라스틱 김치통에 저장 6주후 비교</p>';
      messageSource +=
        '<p class="sub-text">냉각속도 비교 :메탈쿨링김치통(RA-KSCRQ57), 자사 플라스틱 김치통에 상온 평형(22˚C)상태의 용기 내 물 부하 온도가 온도(2˚C)까지 도달되는 냉각시간 비교</p>';
      messageSource +=
        '	<p class="sub-text">자사 실험치 기준으로 실 사용시 차이가 있을 수 있음.</p>';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    } else if (data == "도어 개폐방향") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      messageSource +=
        '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature06.png " alt="도어 개폐방향">';
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    } else if (data == "메탈쿨링 김치통 (1개 단품)" || data == "메탈쿨링 김치통 (3개 세트)"
               || data == "투명 김치통 (3개 세트)" || data == "투명 김치통 (6개 세트)") {
      messageSource += '<div class="content-body">';
      messageSource += '<div class="ref-add-wrap">';
      messageSource += '<div class="add-img-box">';
      if (data == "메탈쿨링 김치통 (1개 단품)"){
        messageSource += '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature10.jpg " alt="메탈쿨링 김치통 단품">';
      } else if(data == "메탈쿨링 김치통 (3개 세트)"){
        messageSource += '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature07.jpg " alt="메탈쿨링 김치통 3개 세트">';
      } else if(data == "투명 김치통 (3개 세트)"){
        messageSource += '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature08.jpg " alt="투명 김치통 3개 세트">';
      } else if(data == "투명 김치통 (6개 세트)") {
        messageSource += '<img src="//images.samsung.com/kdp/bespoke/images/v1/img_feature09.jpg " alt="투명 김치통 6개 세트">';
      }
      messageSource += "</div>";
      messageSource += '<div class="add-text-box">';
      messageSource += '<p class="title-text">' + data +'</p>';
      if (data == "메탈쿨링 김치통 (1개 단품)" || data == "메탈쿨링 김치통 (3개 세트)") {
        messageSource += '<p class="title-sub-text">메탈 소재로 김치를 오래 맛있게 보관하고, 냄새와 탈색 걱정이 적어 위생적인 프리미엄 김치통</p>';
      } else{
        messageSource += '<p class="title-sub-text">투명 재질 뚜껑으로 김치통을 열지 않고 내용물을 볼 수 있는 투명 김치통</p>';
      }
      messageSource += "</div>";
      messageSource += "</div>";
      messageSource += "</div>";
    }
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);
    
    $("#step3-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
  },
  step4Pop: function (data) {
    //console.log("color-grp : " + data);
    var layerValue = "refBespokePopColor";
    var messageSource = "";
    var topActive = "is-active";
    var infiniteActive = "";
    var kfActive = ""; //
    var shgActive = ""; // 쉬머
    var sgActive = ""; // 새틴
    var cmActive = ""; //	코타
    var ggActive = ""; // 글램
    var fnActive = ""; // 페닉스
    var vcmActive = ""; //VCM

    if (data == "5") {
      infiniteActive = topActive;
      shgActive = topActive;
    }
    else {
      kfActive = topActive;

      if (data == "1") {
        sgActive = topActive;
      }
      else if (data == "2") {
        ggActive = topActive;
      }
      else if (data == "3") {
        cmActive = topActive;
      }
      else if (data == "4") {

      }
      else if (data == "6") {
        fnActive = topActive;
      }
      else if (data == "7") {

      }
      else if (data == "8") {
        vcmActive = topActive;
      }
      else if (data == "9") {
        shgActive = topActive;
      }
    }


    messageSource += '<div class="ref-bespoke-ly-popup layer-pop"  id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';

    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="step4-close" data-focus-next="' + layerValue+data + '">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += '<div class="content-head__text-box tab-nav">';
    messageSource += '<ul class="tab-nav__tabs">';
    messageSource += '<li class="tab-title ' + infiniteActive + '" rel="#tab1">'; // 탭1
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">Infinite Line</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title ' + kfActive + '" rel="#tab2">'; // 탭1
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">BESPOKE</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += "</ul>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="content-body">';
    messageSource += '<section class="tab-nav__contents">';
    messageSource += '<div class="content-step2 ' + infiniteActive + '" id="tab1">'; //탭1 내용
    messageSource += '<div class="tab-nav">';
    messageSource += '<ul class="tab-nav__tabs">';
    messageSource += '<li class="tab-title is-active" rel="#infiniteLine1">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">타임리스 그레이지</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title" rel="#infiniteLine2">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">타임리스 차콜</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title" rel="#infiniteLine3">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">세라 화이트</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title" rel="#infiniteLine4">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">세라 블랙</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title" rel="#infiniteLine5">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">럭스 메탈</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += "</ul>";
    messageSource += "</div>";
    messageSource += '<section class="tab-nav__contents">';
    messageSource +=
      '<div class="ref-add-wrap is-active" id="infiniteLine1">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/image_Timelessgreige.jpg " alt="타임리스 그레이지">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">타임리스 그레이지</p>';
    messageSource +=
      '<p class="title-sub-text">반짝이는 빛을 담은 우아한 감성</p>';
    messageSource +=
      '<p class="main-text">빛에 따라 변화하는 다채로운 컬러로 표현되는 알루미늄 메탈, 따뜻한 감성의 그레이지 컬러에 입체감을 주는 라인이 어우러져 공간에 한층 우아한 디테일을 부여합니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap" id="infiniteLine2">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/image_Timelesscharcoal.jpg " alt="타임리스 차콜">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">타임리스 차콜</p>';
    messageSource +=
      '<p class="title-sub-text">오묘하고 차분하게 어우러진 세련된 품격</p>';
    messageSource +=
      '<p class="main-text">미래적 감성을 지닌 가볍고 단단한 알루미늄 메탈, 차분한 차콜 컬러에 입체감을 주는 라인이 어우러져 공간에 한층 세련된 디테일을 부여합니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap" id="infiniteLine3">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/image_Cerawhite.jpg " alt="세라 화이트">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">세라 화이트</p>';
    messageSource +=
      '<p class="title-sub-text">하이엔드 화이트 세라믹이 주는 아름다움</p>';
    messageSource +=
      '<p class="main-text">아름다움은 물론 내구성까지 높인 명품브랜드 Laminam사의 화이트 세라믹이  조화로우면서 변치 않는 고급스러운 느낌을 자아냅니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap" id="infiniteLine4">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/image_Cerablack.jpg " alt="세라 블랙">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">세라 블랙</p>';
    messageSource +=
      '<p class="title-sub-text">천연석이 주는 묵직한 감성</p>';
    messageSource +=
      '<p class="main-text">세라믹 소재의 묵직한 감성을 느껴보세요. 100 %에 가까운 자연 소재로 대지의 결을 그대로 담았으며, 세련된 블랙 컬러와 불규칙한 표면 질감이 모던하면서도 유니크한 느낌을 자아냅니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap" id="infiniteLine5">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/image_Luxemetal.jpg " alt="럭스 메탈">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">럭스 메탈</p>';
    messageSource +=
      '<p class="title-sub-text">시간을 초월하는 클래식한 매력</p>';
    messageSource +=
      '<p class="main-text">은은한 매력의 실버 색상의 메탈이 깨끗하고 단정한 느낌을 줍니다. 시간이 흘러도 변하지 않는 단단하고, 견고한 소재가 주는 신뢰감을 느껴보세요.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</section>";
    messageSource += "</div>";
    messageSource += '<div class="content-step2 ' + kfActive + '" id="tab2">'; //탭1 내용
    messageSource += '<div class="tab-nav">';
    messageSource += '<ul class="tab-nav__tabs">';
    messageSource += '<li class="tab-title ' + shgActive + '" rel="#bespoke1">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">쉬머 글래스</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title  ' + sgActive + '" rel="#bespoke2">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">새틴 글래스</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title ' + cmActive + '" rel="#bespoke3">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">코타 메탈</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title ' + ggActive + '" rel="#bespoke4">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">글램 글래스</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title ' + fnActive + '" rel="#bespoke5">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">페닉스</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += '<li class="tab-title  ' + vcmActive + '" rel="#bespoke6">'; //탭 2
    messageSource += '<a href="javascript:void(0);" class="tab-title__link">';
    messageSource += '<p class="text">바이브 메탈</p>';
    messageSource += "</a>";
    messageSource += "</li>";
    messageSource += "</ul>";
    messageSource += "</div>";
    messageSource += '<section class="tab-nav__contents">';
    messageSource += '<div class="ref-add-wrap  ' + shgActive + '" id="bespoke1">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<img src="//images.samsung.com/kdp/bespoke/images/v1/shimmerglass.jpg " alt="쉬머 글래스">';
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">쉬머 글래스</p>';
    messageSource += '<p class="title-sub-text">깊이감 있는 고급스러움</p>';
    messageSource +=
      '<p class="main-text">빛에 따라 오묘하게 변화하는 컬러감에 은은한 광택감이 합쳐져 고급스러움을 더해줍니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap ' + sgActive + '" id="bespoke2">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<video autoplay="" controls="" muted="" playsinline="" data-width="1920" data-height="1080" style="visibility: inherit;">';
    messageSource +=
      '<source type="video/mp4" src="//images.samsung.com/kdp/bespoke/kv/satin_glass_vd.mp4">';
    messageSource += "</video>";
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">새틴 글래스 (Satin Glass)</p>';
    messageSource +=
      '<p class="title-sub-text">부드러운 광택을 내며 시크하면서도 벨벳 같은 느낌의 재질</p>';
    messageSource +=
      '<p class="main-text"><span class="fs18 bold">특징</span><br />스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.<br /><span class="fs18 bold mt-2">공법</span><br />유리를 매끈하게 연마하여 나노 단위의 초박막 내지문 코팅을 하였습니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap ' + cmActive + '" id="bespoke3">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<video autoplay="" controls="" muted="" playsinline="" data-width="1920" data-height="1080" style="visibility: inherit;">';
    messageSource +=
      '<source type="video/mp4" src="//images.samsung.com/kdp/bespoke/kv/cotta_metal_vd.mp4">';
    messageSource += "</video>";
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">코타 메탈 (Cotta Metal)</p>';
    messageSource +=
      '<p class="title-sub-text">메탈 컬러를 입혀 구워낸 듯한 느낌의 재질입니다.</p>';
    messageSource +=
      '<p class="main-text"><span class="fs18 bold">특징</span><br />생활 스크래치에 강하고 지문이 잘 묻지 않습니다.<br /><span class="fs18 bold mt-2">공법</span><br />폭시 분말을 원료로 사용하여 철, 알루미늄 등에 정전기를 이용하여 분체 도장을 하였습니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap ' + ggActive + '" id="bespoke4">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<video autoplay="" controls="" muted="" playsinline="" data-width="1920" data-height="1080" style="visibility: inherit;">';
    messageSource +=
      '<source type="video/mp4" src="//images.samsung.com/kdp/bespoke/kv/glam_glass_vd.mp4">';
    messageSource += "</video>";
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">글램 글래스 (Glam Glass)</p>';
    messageSource +=
      '<p class="title-sub-text">거울처럼 반사되는 고광택의 영롱한 느낌의 재질입니다.</p>';
    messageSource +=
      '<p class="main-text"><span class="fs18 bold">특징</span><br />스크래치에 강하며 유성 볼펜도 물로 쉽게 제거됩니다.<br /><span class="fs18 bold mt-2">공법</span><br />진공증착법으로 유리에 고굴절 금속산화물을 코팅하였습니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap ' + fnActive + '" id="bespoke5">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<video autoplay="" controls="" muted="" playsinline="" data-width="1920" data-height="1080" style="visibility: inherit;">';
    messageSource +=
      '<source type="video/mp4" src="//images.samsung.com/kdp/bespoke/kv/fenix_vd.mp4">';
    messageSource += "</video>";
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">페닉스 (FENIX)</p>';
    messageSource += '<p class="title-sub-text">무광의 매트한 부드러움</p>';
    messageSource +=
      '<p class="main-text">명품 가구에 사용되는 소재로 매트한 수납장과 조화를 이루며 고급스러운 빌트인 룩을 연출합니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="ref-add-wrap ' + vcmActive + '" id="bespoke6">'; //탭 2 내용
    messageSource += '<div class="add-img-box">';
    messageSource +=
      '<video autoplay="" controls="" muted="" playsinline="" data-width="1920" data-height="1080" style="visibility: inherit;">';
    messageSource +=
      '<source type="video/mp4" src="//images.samsung.com/kdp/bespoke/kv/vcm_vd.mp4">';
    messageSource += "</video>";
    messageSource += "</div>";
    messageSource += '<div class="add-text-box">';
    messageSource += '<p class="title-text">바이브 메탈</p>';
    messageSource +=
      '<p class="title-sub-text">차분한 메탈 소재의 견고함</p>';
    messageSource +=
      '<p class="main-text">브러쉬드 텍스쳐가 더해진 은은한 휘도의 메탈릭 소재는 주방의 기능성을 강조합니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</section>";
    messageSource += "</div>";
    messageSource += "</section>";
    messageSource += "</div>";
    //   }
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);
    
    $("#step4-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
  },
  allColor: function () {
    var layerValue = "refBespokePopAllColor";
    var messageSource = "";

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop"  id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="allColor-close" data-focus-next="allColorPop">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="content-body">';
    messageSource += '<div class="ref-add-wrap">';
    messageSource += '<div class="add-img-box mo-only">';
    messageSource += '<img src="/sec/static/_images/color.png" alt="색상모두보기">';
    messageSource += "</div>";
    messageSource += '<div class="add-img-box pc-only">';
    messageSource += '<img src="/sec/static/_images/color-prism.png" alt="색상모두보기">';
    messageSource += "</div>";
    messageSource += '<p class="fs14">사용하시는 디바이스의 해상도에 따라 패널 색상은 실제와 달라 보일 수 있습니다</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";

    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);

    
    $("#allColor-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
  },
  readMore: function (id, data) {
    // 명세서
    var layerValue = "refBespokePopReadMore";
    var messageSource = "";
	
	var totalAmt = 0;

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop"  id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="readMore-close" data-focus-next="readMorePop_'+id+'">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += '<div class="content-head__text-box">';
    messageSource += '<p class="title-text">자세히보기</p>';
    messageSource += '<div class="total-text-box">';
    messageSource += '<div class="price-text-box">';
    messageSource += '<p class="total-info-text">';
    messageSource += '<span class="bold fs18">결제예정금액</span>(혜택가)';
    messageSource += "</p>";
    messageSource += '<p class="total-price-text">';
    messageSource += '<span class="bold fs28" id="msgtotalAmt"></span>원';
    messageSource += "</p>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="content-body">';
    messageSource += '<div class="price-list">';   
    
   // var panelYN = data.bspkPanelYn; 
    var pairKitCnt = 0;
    var pairKitNm = '';
    var pairKitPrice = 0;
    for(var i=0; i<data.length; i++){
    	var readData = data[i];
    	var panelData = data[i].data;
    	var doorCnt = data[i].doorCnt;
    	var dataType = data[i].dataType;
    	
		if(readData.benefitPrice == undefined || readData.benefitPrice =="" 
		|| readData.benefitPrice == null || readData.benefitPrice == "undefined"){
			readData.benefitPrice = 0;
		}	
    	
	    messageSource += '<ul class="price-list__content">'; // 냉장고 경우
	    if(readData.bspkPanelYn == "Y"){
	    	messageSource += '<li class="list-item__title">';
		    messageSource += '<p class="text"><span class="ref-num">' + parseInt(i+1) + '</span>교체용 패널</p>';
		    messageSource += "</li>";
	    }
	    else{
		    messageSource += '<li class="list-item__title">';
		    messageSource += '<p class="text"><span class="ref-num">' + parseInt(i+1) + '</span>'+readData.goodsNm+'</p>';
		    messageSource += "</li>";
	    }
	    
	    // 가격이 0보다 클경우 보여줄것
	    if(parseInt(readData.benefitPrice) > 0 && readData.bspkPanelYn != "Y"){
		    messageSource += '<li class="list-item__ref">';
		    messageSource += '<div class="info-text-box">';
		    messageSource += '<p class="title-text">'+readData.prdMdl+'</p>';
		    messageSource += "</div>";
		    messageSource += '<div class="price-text-box">';
		    messageSource += '<p class="price-text">'+format.num(readData.benefitPrice)+'원</p>';
		    messageSource += "</div>";
		    messageSource += "</li>";
	    }
	    var preventData = ["RA-C00K1CAA", "RA-C00K1DAA"];
	    for(var j=0; j < panelData.length; j++){
		    var temp = panelData[j];
		    		    
		    if(temp.rgbColor == undefined || temp.rgbColor == 'undefined'){
		    	temp.rgbColor = "";
		    }
		    
		    //console.log(preventData.indexOf(temp.prdNm) + "/ " + temp.prdNm);
		    if(preventData.indexOf(temp.panelMdl) >= 0){
			    if(readData.bspkPanelYn == "N"){
				   	
				   	if(temp.panelMdl == 'RA-C00K1CAA' || temp.panelMdl == 'RA-C00K1DAA'){
						pairKitCnt++;				   	
				   	}
				   		   		
					if(temp.benefitPrice == undefined || temp.benefitPrice =="" 
					|| temp.benefitPrice == null || temp.benefitPrice == "undefined"){
						temp.benefitPrice = 0;
					}	
				   	
		    		pairKitPrice = parseInt(temp.benefitPrice);
		    		totalAmt += parseInt(temp.benefitPrice);
					pairKitNm = temp.panelMdl;
				}
	    	}
	    	else{
	    		//console.log("temp.panelMdl :::::" + temp.panelMdl);
	    		if(temp.panelMdl != undefined && temp.panelMdl != "" && temp.panelMdl != null && temp.panelMdl != "undefined" && temp.panelMdl != ""   && temp.panelMdl != " "  ){    	
		    		messageSource += '<li class="list-item">';
				    messageSource += '<div class="info-text-box">';
				    messageSource += '<p class="sub-text">';
				    if(temp.pstNo <= doorCnt){
				    	messageSource += '<span class="text">'+SaveData.DoorCd("2", doorCnt, temp.pstNo, dataType)+'</span>';
				    }
				   	
				    if(temp.rgbColor.indexOf("#") > -1){
				       messageSource += '<span class="text" style="background-color:'+temp.rgbColor+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
				    }
				    else{
				 	   messageSource += '<span class="text">'+temp.prdNm+'</span>';
				    }				
				    messageSource += "</p>";				    
				    messageSource += '<p class="title-text">'+temp.panelMdl+'</p>';
				    messageSource += "</div>";
				    messageSource += '<div class="price-text-box">';
				    messageSource += '<p class="price-text">'+format.num(parseInt(temp.benefitPrice))+'원</p>';
				    messageSource += "</div>";
				    messageSource += "</li>";
			    	totalAmt += parseInt(temp.benefitPrice);
		    	}    		
	    	}
		}
	    messageSource += "</ul>";
	     if(parseInt(readData.benefitPrice) > 0 && readData.bspkPanelYn != "Y"){
	    	totalAmt += parseInt(readData.benefitPrice);
	    }
    }
    
    // 교체용 패널이 아닐 경우에는 페어키트 가격 표시하지 않음
    if(readData.bspkPanelYn == "N"){
	    messageSource += '<ul class="price-list__content">'; // 키트 경우
	    messageSource += '<li class="list-item__kit">';
	    messageSource += '<div class="info-text-box">';
	    messageSource += '<p class="title-text">'+pairKitNm+' 페어키트 '+pairKitCnt+'개</p>';
	    messageSource += "</div>";
	    messageSource += '<div class="price-text-box">';
	    messageSource += '<p class="price-text">'+ format.num(parseInt(pairKitPrice *pairKitCnt)) +'원</p>';
	    messageSource += "</div>";
	    messageSource += "</li>";
	    messageSource += "</ul>";
    }
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";


    $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);

    
    $("#readMore-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
    $("#msgtotalAmt").text(format.num(totalAmt));
  },
  close: function (target) {
    this.run = false;
    $("body .layer-pop").remove();
  },
  pairKit: function () {
    // 페어키트 팝업
    var layerValue = "refBespokePopPairKit";
    var messageSource = "";

    messageSource += '<div class="ref-bespoke-ly-popup layer-pop" id="' + layerValue + '" tabindex="0" data-popup-layer="' + layerValue + '">';
    messageSource += '<div class="ly-popup__wrap">';
    messageSource += '<div class="ly-popup__content type-tooltip">';
    messageSource += '<div class="content-head">';
    messageSource += '<div class="content-head__btn-box">';
    messageSource += '<button class="btn-close pop-close" id="pairKit-close" data-focus-next="pairKitPop">';
    messageSource += '<span class="blind">닫기</span>';
    messageSource += "</button>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += '<div class="content-body">';
    messageSource +=
      '<p class="fs24 bold center">• 키친핏 설치시에는 페어키트가 꼭 필요합니다.</p>';
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";
    messageSource += "</div>";

     $("html").addClass("scrollLock");
    $(".ref-bespoke").prepend(messageSource);
    
    $("#pairKit-close").off().on('click',function(e){
		const target = e.target.dataset.focusNext;
		document.querySelector(`[data-focus="${target}"]`).focus();
	});
    
    $("#invisibleBtn").attr("data-popup-target", layerValue);
    $("#invisibleBtn").trigger("click");
  }
};

$(function () {
  // 탭 동작
  $(document).on("click", ".tab-nav .tab-title", function (idx, el) {
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $($(this).attr('rel')).addClass('is-active').siblings().removeClass('is-active');
  });

  // 모달 닫고 div 없애버림
  $(document).on("click", ".ref-bespoke-ly-popup .type-tooltip .content-head .content-head__btn-box .btn-close", function () {
    $(".ref-bespoke-ly-popup").remove();
    $("html").removeClass("scrollLock");
  });
});

