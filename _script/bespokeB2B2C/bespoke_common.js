/**
 * 비스포크 닷컴 고도화 공통 js
 */

// ex)
// Tran.SetTranUrl(url);
// Tran.SetTranFDData("regNo", "data");
// Tran.Send();

// Tran.GetTranDataByName(url, "regNo");

// 선언
var Tran = {
    url: '',
    dataType: 'json',
    params: '',
    async: false,
    returnData: new Object(),
    jsonpCallback: "jsonpcallback_bespoke",
    type: 'POST',
    jsonData: new Object(),
    dataStep: '',
    returnError: true,
    pakage: new Object(),
    SetDataStep: function (data) {
        this.dataStep = data;
        // ajax url 설정
        if (data == "step2") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CProductTypeInfo');
        } else if (data == "step3") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CModelInfo');
        } else if (data == "step4") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CColorMapInfo');
        } else if (data == "step4By360") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2C360ColorMapInfo');
        } else if (data == "stepByPanel") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CPanelMapInfo');
        } else if (data == "modelAdd") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CMyModelAdd');
        } else if (data == "myModelInfo") {
            this.url = fncConvertUrl('xhr/bespoke/myModelInfoB2B2C');
        } else if (data == "DeleteSave") {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CDeleteCustomInfo');
        } else if (data == 'existsGoodsBase') {
            this.url = fncConvertUrl('xhr/bespoke/bespokeB2B2CExistsGoodsBase');
        }
    },
    // ajax dataType 설정
    SetTranDataType: function (dataType) {
        this.dataType = dataType;
    },
    // ajax type 설정 {get, post(default)}
    SetTranType: function (type) {
        this.type = type;
    },
    // ajax 전송 데이터 설정(각 필드별로 설정)
    SetTranFDData: function (fd, data) {
        this.jsonData[fd] = data;
    },
    // ajax 전송 데이터 설정(object 형삭으로 설정)
    SetTranObject: function (obj) {
        this.jsonData = obj;
    },
    // ajax data send
    Send: function () {

        var option = {
            url: this.url,
            dataType: this.dataType,
            data: this.jsonData,
            async: this.async,
            jsonpCallback: this.jsonpCallback,
            type: this.type,
            success: function (data) {
                //console.log(JSON.stringify(data));
                var stepObj = Tran.dataStep;
                if (data != null) {
                    if (stepObj == 'step2') {
                        if (data.resultData.length < 1) {
                            var msg = "상품을 준비중입니다.";
                            var alertData = {
                                title: ""
                                , content: msg
                                , callBack: ""
                                , btnText: "확인"
                            };
                            commonAlert(alertData);
                            openLayer('commonAlert');

                            // 활성화된 냉장고의 첫번째 패널 클릭
                            var refId = $("#sortable  .preview-model.active").data("id");
                            //$("#" + refId + "_1").click();
                            $("#" + refId + "_1").trigger("click");
                            return false;
                        }
                        fncGetDataByStep2(data, Tran.dataStep);
                    } else if (stepObj == 'step3') {
                        fncGetDataByStep3(data, Tran.dataStep);
                    } else if (stepObj == 'step4') {
                        fncGetDataByStep4(data, Tran.dataStep);
                    } else if (stepObj == 'step4By360') {
                        fncGetDataBy360Color(data, Tran.dataStep);
                    } else if (stepObj == 'stepByPanel') {
                        fncGetDataByPanelMap(data, Tran.dataStep);
                    } else if (stepObj == 'modelAdd') {
                        if (data.result != -1) {
                            fncGetMyModelData(data, Tran.dataStep);
                        }
                        else {
                            var msg = "저장 공간이 부족하여 더 담을 수 없습니다. 삭제하고 담아주세요.";
                            var alertData = {
                                title: ""
                                , content: msg
                                , callBack: ""
                                , btnText: "확인"
                            };
                            commonAlert(alertData);
                            openLayer('commonAlert');
                            return false;
                        }
                    } else if (stepObj == 'myModelInfo') {
                        if (data.myModelInfo.length > 0) {
                            fncExistsGoodsBase(data);
                            SaveData.SetHtml(data, Tran.dataStep);
                        }
                    } else if (stepObj == 'DeleteSave') {
                        SaveData.DeleteCallBack(data, Tran.dataStep);
                    } else if (stepObj == 'existsGoodsBase') {
                        fncGetExistsGoodsBase(data, Tran.dataStep);
                    }
                }
            },
            error: function (response, status, error) {
                waiting.stop();
                console.log("[Error] response : " + response + " / " + "status : " + status + " / " + "error : " + error);
                var msg = "동작에 실패하였습니다.	";
                messager.alert(msg, "확인", function () { });
                return false;
            },
            beforeSend: function (xhr) {
                waiting.start();
                xhr.setRequestHeader("ajax", true);
            },
            complete: function () { waiting.stop(); }
        };

        $.ajax(option);
    }
};



var Cooler = {
    index: 0,
    refIndex: 0,
    confirm: false,
    modelData: new Object(),
    sendData: new Object(),
    beforeImgUrl: "https://images.samsung.com/kdp/bespoke/images/v3/frame/",
    modelCMB: '',
    click: false,
    panelClick: false,
    door_id: '',
    door_cnt: 0,
    colorData: '',
    colorNm: '',
    bespokeYn: '',
    clrGrpId: '',
    colorChip: '',
    panelExistYn: '',
    newBoxBefore: '<div class="text">BESPOKE<br>냉장고 | 김치냉장고를<br>내 맘대로 조합해보세요	</div>',
    newBoxAfter: '<p class="text"><span class="img-plus"></span>내 주방에 맞는 설치 타입을 선택해 주세요.</p>',
    goodsExistYn: new Object,
    Clear: function () {
        //console.log("Clear start");
        this.index = $("#sortable").find(".preview-model").length == undefined ? 0 : $("#sortable").find(".preview-model").length;
        this.confirm = false;
        this.modelData = new Object();
        this.sendData = new Object();
        this.modelCMB = '';
        this.click = false;
        this.panelClick = false;
        this.door_id = '';
        this.door_cnt = 0;
        this.colorData = '';
        this.colorNm = '';
        this.bespokeYn = '';
        this.clrGrpId = '';
        this.panelExistYn = '';
        this.goodsExistYn = new Object();

    },
    // .new box click
    checkNewBox: function () {
        //console.log("checkNewBox start");
        // 냉장고 갯수
        var refCnt = $("#sortable").find(".preview-model").length;
        var $newBox = $("#newBoxImg");
        var $bespokeContent = $("#bespokeContent");
        
        if (refCnt > 0) {
            $newBox.html(this.newBoxAfter);
            $bespokeContent.removeClass("make-start");
        }
        else {
            $newBox.html(this.newBoxBefore);
            $bespokeContent.addClass("make-start");
        }
    },
    // datatype 별 doorClass를 return
    getDoorClass: function (doorCnt, type) {
        //console.log("getDoorClass start");
        var doorClass = "";

        switch (doorCnt) {
            case "1":
                if (type.indexOf("slim") > -1 
                ||  (type.indexOf("il_") < 0 && type.indexOf("1door_wine") > -1)) {
                    doorClass = "dr1s";
                }
                else {
                    doorClass = "dr1";
                }
                break;

            case "2":
            	if (type.indexOf("dualautoview") > -1) {
                    doorClass = "dr4dc";
            	}
            	else {
            		doorClass = "dr2";
            	}
                break;

            case "3":
                if (type.indexOf("kimchi") > -1) {
                    doorClass = "dr3k";
                }
                else if (type.indexOf("family") > -1) {
                    doorClass = "dr4f";
                }
                else if (type.indexOf("autoview") > -1) {
                    doorClass = "dr4sc";
                }
                else {
                    doorClass = "dr3";
                }
                break;

            case "4":
                if (type.indexOf("kimchi") > -1) {
                    doorClass = "dr4k";
                }
                else {
                    doorClass = "dr4";
                }
                break;

            case "5":
                doorClass = "dr4";
                break;
            case "6":
                doorClass = "dr4";
                break;
            default:
                doorClass = "dr4";
                break;
        }

        return doorClass;
    },
    // thumb image click --> main image
    getImgSrcDT: function (type) {
        return this.beforeImgUrl + "" + type;
    },
    // thumb img url을 짤라서 main image src 값을 가져옴
    getImgSrcThumb: function (src, type, moduleColor) {
        var imgsrc = src;
        var mc = moduleColor;
        // thumb DEL
        imgsrc = imgsrc.replace("thumb_", "");

        if (mc == null || mc == "undefined") {
            mc = "";
        }


        if (mc.indexOf("#") > -1) {
            mc = mc.replace("#", "");
        }
        // case moduleColor
        if (type == "4door_family") {
            if (mc == "") {
                imgsrc = imgsrc.replace(".png", "_000000.png");
            }
            else {
                imgsrc = imgsrc.replace(".png", "_" + mc + ".png");
            }
        }
        else if (type.indexOf("il_") > -1) {
            if (mc == "") {
                imgsrc = imgsrc;
            }
            else {
                imgsrc = imgsrc.replace(".png", "_" + mc + ".png");
            }
        }

        // $ORIGIN_PNG$ ADD
        if (imgsrc.indexOf("$ORIGIN_PNG$") > -1) {
            imgsrc = imgsrc + "?$ORIGIN_PNG$";
        }

        return imgsrc;
    },
    // Step2 Thumb setting - step2 썸네일 이미지 생기는 부분
    SetThumbData: function (data) {

        this.ViewHTMLInfo();
        var selectDepartment = $('#btnStep1 > li.is-active').attr('data-dep');
        var filteredData = data.resultData;       
        var $step2_append_html = $("#step2_append_html");

        if (filteredData.length > 0) {
            for (var i = 0; i < filteredData.length; i++) {
                var obj = filteredData[i];
                var html = '';

                // thumbimage click event
                if (selectDepartment != 'F/P') {
                    if (this.modelCMB != obj.cmbGb && this.modelCMB != '') {
                        html += "<li class='list-item is-disabled' onclick='Cooler.SetProductModelInfo(this.dataset);' id='ref" + obj.typeSeq + "' data-id='ref" + obj.typeSeq + "' data-pkgType='" + obj.pkgType + "' data-imgUrl='" + obj.imgUrl + "' data-doorCnt='" + obj.doorCnt + "' data-upDep='" + selectDepartment + "' data-dep='" + obj.department + "' data-typeSeq='" + obj.typeSeq + "' data-type='" + obj.dataType + "' data-doorDiv='" + obj.doorDiv + "'  data-cbmGb='" + obj.cmbGb + "' data-typeName='" + obj.typeName + "' data-storageItem='" + obj.storageItem + "' data-kitCd='" + obj.kitCd + "' data-kitPrice='" + obj.kitPrice + "' data-kitGoodsId='" + obj.kitGoodsId + "'>";
                    } else {
                        html += "<li class='list-item' onclick='Cooler.SetProductModelInfo(this.dataset);' id='ref" + obj.typeSeq + "' data-id='ref" + obj.typeSeq + "' data-pkgType='" + obj.pkgType + "' data-imgUrl='" + obj.imgUrl + "' data-doorCnt='" + obj.doorCnt + "' data-upDep='" + selectDepartment + "' data-dep='" + obj.department + "' data-typeSeq='" + obj.typeSeq + "' data-type='" + obj.dataType + "' data-doorDiv='" + obj.doorDiv + "'  data-cbmGb='" + obj.cmbGb + "' data-typeName='" + obj.typeName + "' data-storageItem='" + obj.storageItem + "' data-kitCd='" + obj.kitCd + "' data-kitPrice='" + obj.kitPrice + "' data-kitGoodsId='" + obj.kitGoodsId + "'>";
                    }
                }
                else {
                    html += "<li class='list-item' onclick='Cooler.SetChangePanelColorInfo(this.dataset);' id='ref" + obj.typeSeq + "' data-id='ref" + obj.typeSeq + "' data-pkgType='" + obj.pkgType + "' data-imgUrl='" + obj.imgUrl + "' data-doorCnt='" + obj.doorCnt + "' data-upDep='" + selectDepartment + "' data-dep='" + obj.department + "' data-typeSeq='" + obj.typeSeq + "' data-type='" + obj.dataType + "' data-doorDiv='" + obj.doorDiv + "'  data-cbmGb='" + obj.cmbGb + "' data-module='" + obj.modelName + "' data-goods-id='" + obj.goodsId + "'>";
                }
                html += '  <div class="list-item__img">';
                html += '    <img src="' + obj.imgUrl + '" alt="' + obj.typeName + '">';
                html += '  </div>';
                html += '  <div class="list-item__text">';
                html += '    <p class="title-text">' + obj.typeName + '</p>';
                html += '    <p class="sub-text">' + obj.storageItem + '</p>';
                html += '  </div>';
                html += '</li>';

                $step2_append_html .append(html);
            }

            var $prev_model_cnt = $("#sortable").find(".preview-model").length;

            if (($prev_model_cnt > 0 && $("#newBox").hasClass('active')) || $prev_model_cnt > 1) {
                var cmbGb = $("#sortable").find(".preview-model").eq(0).attr("data-cbmgb");
                $("#step2_append_html >li[data-cbmgb!='" + cmbGb + "']").addClass(sDISABLED);
            }
        }
    },
    // 교체형 패널 STEP 모델 컬러 호출
    SetChangePanelColorInfo: function (model) {
        // 초기화
        this.modelData = new Object();
        this.modelData = model;
        this.modelData.seltype = $("#btnStep2ByYear > button.is-active").attr('data-seltype');

        var id = model.id;
        var selectTypeSeq = model.typeseq;
        var selectDataType = model.type;
        var typeDepartment = $('#btnStep1 > li.is-active');
        var selectDepartment = $(typeDepartment).attr('data-dep');

        if ($("#" + id).hasClass("is-disabled") == false) {

            $("#step2_append_html > li").removeClass(sACTIVE);
            $("#product_model_open").removeClass("is-disabled");
            $("#product_color_open").removeClass("is-disabled");
            $("#cmbList").removeClass("is-disabled");
            $("#" + id).addClass(sACTIVE);


            var searchParams = {
                storeCd: 'b2b2c'
                , typeSeq: selectTypeSeq
                , department: selectDepartment
                // 20년 이후 단품 패널과 조합 패널이 통합됨에 따라 컨트롤러에서 SI20 -> AS로 치환
                , panelTypeCd: $('#panelTypeCd').val()
                , dataType: selectDataType
            };

            Tran.SetTranObject(searchParams);
            Tran.SetDataStep("step4");
            Tran.Send();

            var activeREFSEQ = $("#sortable").find(".active").attr("data-typeseq");

            if ($("#newBox").hasClass("active") == true) {
                this.SetSimulatorREFHTML(this.modelData);
                if (this.panelClick == false) {
                    var $self = $("#step2_by_product");
                    moveNextStep($self);
                }
            }
            else if (this.modelData.typeseq != activeREFSEQ || $("#panelTypeCd").val() != $("#sortable").find(".active").attr("data-seltype") && $("#sortable").find(".active").attr("data-seltype") != undefined && $("#sortable").find(".active").attr("data-seltype") != "") {

                var msg = "지금 선택중인 단계보다 이전 단계를 선택하면 기존에 선택한 내용이 모두 초기화 됩니다. 선택 내용을 변경 하시겠습니까?";
                messager.confirm(msg, "확인", "취소", function () {
                    Cooler.click == false
                    Cooler.confirm = false;
                    Cooler.SetSimulatorREFHTML(Cooler.modelData);
                    if (Cooler.panelClick == false) {
                        var $self = $("#step2_by_product");
                        moveNextStep($self);
                    }
                }, function () {
                    if ($("#sortable").find(".preview-model").length < 4) {
                        $("#newBox").trigger("click");
                    }

                });
            }
        }
    },
    // step2 Thumb click event - step2 클릭 시 왼쪽 시뮬레이터 냉장고 보이게 하는 이벤트
    SetSimulatorREFHTML: function (thumb) {

        var htmlsource = "";
        var upDep = thumb.updep;
        var dep = thumb.dep;
        var typeSeq = thumb.typeseq;
        var type = thumb.type;
        var doorDiv = thumb.doordiv;
        var cbmGb = thumb.cbmgb;
        var doorCnt = thumb.doorcnt;
        var imgURL = thumb.imgurl;
        var moduleColor = thumb.color;
        var widthSize = thumb.widthSize;
        var heightSize = thumb.heightSize;
        var module = thumb.module;
        var volume = thumb.volume;
        var modelPrice = thumb.modelPrice;
        var seltype = thumb.seltype;

        this.modelCMB = cbmGb;
        
        doorDiv = JSON.parse(doorDiv);
        
        // newBox 클릭 시에만 index 상승
        Cooler.refIndex = parseInt(Cooler.refIndex + 1);

		var $sortable = $("#sortable");
		var $newBox = $("#newBox");
		var $classNewBox = $(".new-box");
        
        htmlsource += '<div class="preview-model ' + this.getDoorClass(doorCnt, type) + ' active" id="cooler_' + this.refIndex + '" data-id="cooler_' + this.refIndex + '" data-seltype="' + seltype + '" data-typeSeq="' + typeSeq + '" data-type="' + type + '" data-upDep="' + upDep + '" data-dep="' + dep + '" data-doorCnt="' + doorCnt + '" data-width="' + widthSize + '" data-height="' + heightSize + '" data-module="' + module + '" data-index="' + this.refIndex + '" data-cbmgb="' + cbmGb + '" data-price="' + modelPrice + '" data-typename="' + this.modelData.typename + '" data-volume="' + volume + '" data-acc="{}" data-kitCd="' + this.modelData.kitcd + '" data-kitPrice="' + this.modelData.kitprice + '" data-goodsId="' + this.modelData.goodsId + '" data-kitgoodsid="' + this.modelData.kitgoodsid + '" data-goodspath="' + this.modelData.goodspath + '">';
        htmlsource += '<button class="btn-close" onclick="Cooler.Delete(this.dataset);" data-id="cooler_' + this.refIndex + '" >';
        htmlsource += '<span class="blind">닫기</span>';
        htmlsource += '</button>';
        htmlsource += '<div class="model">';
        htmlsource += '<div class="model-img ' + bespokeBase.getHandle(module) +'">';	// 1도어 손잡이 냉장고 모델 처리
        htmlsource += '<img id="img_cooler_' + this.refIndex + '" src="https:' + this.getImgSrcThumb(imgURL, type, moduleColor) + '">';			// 이미지 경로 지정 할 필요
        htmlsource += '</div>';

        for (var i = 1; i <= doorCnt; i++) {
            var objDoor = doorDiv.result[i - 1];
            htmlsource += '<div id="cooler_' + this.refIndex + '_' + objDoor["index"] + '" class="dr-' + objDoor["index"] + '" data-id="cooler_' + this.refIndex + '_' + objDoor["index"] + '" data-door-index="' + objDoor["index"] + '" data-parentsId="cooler_' + this.refIndex + '" data-color-true="false" onclick="Cooler.ClickPanel(this.dataset)" data-row="' + objDoor["row"] + '" data-col="' + objDoor["col"] + '">';
            htmlsource += '<div class="text-box">';
            htmlsource += '<span class="img-plus"></span>';
            if (i == 1) {
                htmlsource += '<p class="text">컬러와 소재를 선택해 주세요.</p>';
            }
            htmlsource += '</div>';
            htmlsource += '</div>';
        }
        htmlsource += '</div>';
        // 냉동인 경우 핸들 영역 없앰
        if (type != "il_1door_freezer" && type != "il_1door_freezer_og" ) {
            htmlsource += '<div class="handle">';
            htmlsource += '</div>';
        }
        htmlsource += '</div>';

        if (this.click == false) {
            if (type == "il_1door_freezer" || type == "il_1door_freezer_og") {
                $sortable.find(".active").remove();
                $sortable.prepend(htmlsource);
                $newBox.removeClass("active");
                if (parseInt(this.index + 1) == 4) {
                    $classNewBox.hide();
                }
            }
            else {
                if (this.confirm == true) {
                    // 아직 만들어지기 전에 냉장고 갯수를 가져오기 때문에 아래와 같이 구현

                    if (parseInt(this.index + 1) < 5) {
                        $sortable.append(htmlsource);
                        $newBox.removeClass("active");

                        if (parseInt(this.index + 1) == 4) {
                            $classNewBox.hide();
                        }
                        this.confirm = false;
                    }
                }
                else {
                    // 모델명만 변경해줌

                    var previewIndex = $(".preview-model").index($("#sortable").find(".active"));

                    if (previewIndex > 0) {
                        $sortable.find(".active").remove();
                        $sortable.find(".preview-model").eq(parseInt(previewIndex - 1)).after(htmlsource);
                        $newBox.removeClass("active");
                    }
                    else {
                        if (previewIndex == 0) {
                            $sortable.find(".active").remove();
                            $sortable.prepend(htmlsource);
                        }
                    }
                }
            }
        }
        else {
            if (type == "il_1door_freezer" || type == "il_1door_freezer_og") {
                $sortable.find(".active").remove();
                $newBox.removeClass("active");
                $sortable.prepend(htmlsource);
                if (parseInt(this.index + 1) == 4) {
                    $classNewBox.hide();
                }
            }
            else {
                var previewIndex = $(".preview-model").index($("#sortable").find(".active"));

                if (previewIndex > 0) {
                    $sortable.find(".active").remove();
                    $sortable.find(".preview-model").eq(parseInt(previewIndex - 1)).after(htmlsource);
                    $newBox.removeClass("active");
                }
                else {
                    if (previewIndex == 0) {
                        $sortable.find(".active").remove();
                        $sortable.prepend(htmlsource);
                    }
                }
            }
        }

        if ($("#sortable .preview-model").find(".select").length == 0) {
            $("#cooler_" + Cooler.refIndex + "_1").trigger("click");
        }

        fncSpecification();
        this.checkNewBox();
        this.SetCal(upDep, cbmGb);
    },
    SetCal: function (dep, cbmGb) {
        if (dep != "F/P") {
            if (cbmGb == "A" || cbmGb == "C") {
                var total = refrigerator.getTotalWidth();			// 냉장고 길이 구해서 보여주기
                var totalHeight = refrigerator.getTotalHeight();// 냉장고 높이 구해주기
                var refsource = "";
                var cnt = $("#lineBox").length;

                if (cnt < 1) {
                    refsource += '<div class="line-box" id="lineBox">';
                    refsource += '<div class="line-w" >';
                    refsource += '<p class="text" id="lineW"></p>';
                    refsource += '</div>';
                    refsource += '<div class="line-h" >';
                    refsource += '<p class="text" id="lineH"></p>';
                    refsource += '</div>';
                    refsource += '</div>';
                    $("#sortable").append(refsource);
                }

                $("#lineW").text("");
                $("#lineH").text("");
                $("#lineW").text("약 " + total + "mm");
                $("#lineH").text(totalHeight + "mm");
            }
        }

    },
    // step3 보여지게 하는 부분
    SetProductModelInfo: function (model) {
        // 초기화
        this.modelData = new Object();
        this.modelData = model;
        var id = model.id;
        var selectTypeSeq = model.typeseq;
        var selectPkgType = model.pkgtype;
        var selectDepartment = model.dep;
        var selectDataType = model.type;
        var cmbGb = model.cbmgb;

        $("#product_model_open").removeClass("is-disabled");
        $("#product_color_open").removeClass("is-disabled");
        $("#cmbList").removeClass("is-disabled");

        var refType = $("#sortable .preview-model").eq(0).attr("data-type");
        if ((refType == "il_1door_freezer" || refType == "il_1door_freezer_og") 
        && (selectDataType == "il_1door_freezer" || selectDataType == "il_1door_freezer_og") 
        && this.panelClick == false) {
            let alertData = { content: "냉장고 조합 시 Infinite 1도어 냉동은 1대만 추가 가능합니다." };
            commonAlert(alertData);
            openLayer('commonAlert');
            return;
        }

        var activeREFSEQ = $("#sortable").find(".active").attr("data-typeseq");
 	 if ($("#" + id).hasClass("is-disabled") == false) {
       	 if (this.modelData.typeseq != activeREFSEQ && $("#newBox").hasClass("active") == false) {

            var msg = "지금 선택중인 단계보다 이전 단계를 선택하면 기존에 선택한 내용이 모두 초기화 됩니다. 선택 내용을 변경 하시겠습니까?";
            messager.data.selectTypeSeq = selectTypeSeq;
            messager.data.selectPkgType = selectPkgType;
            messager.data.selectDataType = selectDataType;
            messager.data.cmbGb = cmbGb;

            messager.confirm(msg, "확인", "취소", function () {

                    var searchParams = {
                        storeCd: 'b2b2c'
                        , typeSeq: messager.data.selectTypeSeq
                        , pkgType: messager.data.selectPkgType
                        , dataType: messager.data.selectDataType
                        , cmbGb: messager.data.cmbGb
                    };

                    var typeDepartment = $('#btnStep1 > li.is-active');
                    var selectDepartment = $(typeDepartment).attr('data-dep');
                    searchParams.selectDepartment = selectDepartment;

                    // 교체용 패널일 경우
                    if (selectDepartment != '' && selectDepartment == 'F/P') {
                        var selectYear = $('#btnStep2ByYear > button.is-active').attr('data-year');
                        searchParams.selectYear = selectYear;
                    }

                    Tran.SetTranObject(searchParams);
                    Tran.SetDataStep("step3");
                    Tran.Send();
               
            }, function () {
                if ($("#sortable").find(".preview-model").length < 4) {
                    $("#newBox").trigger("click");
                }
            });
        }
        else {
                var searchParams = {
                    storeCd: 'b2b2c'
                    , typeSeq: selectTypeSeq
                    , pkgType: selectPkgType
                    , dataType: selectDataType
                    , cmbGb: cmbGb
                };

                var typeDepartment = $('#btnStep1 > li.is-active');
                var selectDepartment = $(typeDepartment).attr('data-dep');
                searchParams.selectDepartment = selectDepartment;

                // 교체용 패널일 경우
                if (selectDepartment != '' && selectDepartment == 'F/P') {
                    var selectYear = $('#btnStep2ByYear > button.is-active').attr('data-year');
                    searchParams.selectYear = selectYear;
                }

                Tran.SetTranObject(searchParams);
                Tran.SetDataStep("step3");
                Tran.Send();
            }

        }
    },
    // 제품 모델 정보를 가져오는 부분
    GetModelInfo: function (data) {

        var colorcd = data.dataset.colorcd;
        var widthSize = data.dataset.width;
        var heightSize = data.dataset.height;
        var modelNo = data.dataset.module;
        var volume = data.dataset.volume;
        var goodsId = data.dataset.goodsid;
        var goodsPath = data.dataset.goodspath;

        var modelPrice = data.dataset.price;
        var index = data.dataset.seq;

        var activeREFSEQ = $("#sortable").find(".active").attr("data-typeseq");
        var activeREFID = $("#sortable").find(".active").attr("data-id");

        if (parseInt(modelPrice) == "NaN" || modelPrice == 0) {
            var msg = "상품을 준비중입니다.";
            var alertData = {
                title: ""
                , content: msg
                , callBack: ""
                , btnText: "확인"
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return false;
        }

		Cooler.modelData.modelPrice = modelPrice;
        Cooler.modelData.module = modelNo;
        Cooler.modelData.color = colorcd;
        Cooler.modelData.widthSize = widthSize;
        Cooler.modelData.heightSize = heightSize;
        Cooler.modelData.volume = volume;
        Cooler.modelData.seltype = '';
        Cooler.modelData.goodsId = goodsId;
        Cooler.modelData.goodspath = goodsPath;

        // 냉장고 만들기
        if (($("#newBox").hasClass("active") == true)) {
            this.SetSimulatorREFHTML(this.modelData);
            this.SetSimulatorInfo();
            $("#step4_color_tab").show();
            $("#step2_append_html > li").removeClass(sACTIVE);
            $("#ref" + this.modelData.typeseq).addClass(sACTIVE);

            // 가이드 
            fncGiude();

            if (this.panelClick == false) {
                var $self = $("#step2_by_product");
                moveNextStep($self);
            }

        }
        else if (this.modelData.typeseq != activeREFSEQ) {
            Cooler.click == false
            Cooler.confirm = false;
            Cooler.SetSimulatorREFHTML(Cooler.modelData);
            // 냉장고 설명
            Cooler.SetSimulatorInfo();
            $("#step4_color_tab").show();
            $("#step2_append_html > li").removeClass(sACTIVE);
            $("#ref" + Cooler.modelData.typeseq).addClass(sACTIVE);

            if (Cooler.panelClick == false) {
                var $self = $("#step2_by_product");
                moveNextStep($self);
            }

        }

        else {
            // 1도어 손잡이 냉장고 모델 처리
            var bspkDoor = $("#img_" + activeREFID).parent();
            bspkDoor.removeClass();
            bspkDoor.addClass(['model-img', bespokeBase.getHandle(this.modelData.module)]);

            $("#" + activeREFID).attr("data-module", modelNo);
            $("#" + activeREFID).attr("data-typeName", this.modelData.typename);
            $("#" + activeREFID).attr("data-price", modelPrice);
            $("#" + activeREFID).attr("data-width", widthSize);
            $("#" + activeREFID).attr("data-height", heightSize);
            $("#" + activeREFID).attr("data-volume", volume);
            $("#" + activeREFID).attr("data-goodspath", goodsPath);
            $("#img_" + activeREFID).attr("src", "https:" + this.getImgSrcThumb(this.modelData.imgurl, this.modelData.type, this.modelData.color));
            $("#step2_append_html > li").removeClass(sACTIVE);
            $("#ref" + this.modelData.typeseq).addClass(sACTIVE);

            this.SetSimulatorInfo();
            $("#step4_color_tab").show();

            if (this.panelClick == false) {
                var $self = $("#step2_by_product");
                moveNextStep($self);
            }


        }

            //Step3 Click
            fncStep3Click(index);
    },
    // Click Panel
    ClickPanel: function (data) {
        var id = data.id;
        var parentsId = data.parentsid;
        var dep = $("#" + parentsId).attr("data-updep");
        var seltype = $("#" + parentsId).attr("data-seltype");
        var typeseq = $("#" + parentsId).attr("data-typeseq");
        var module = $("#" + parentsId).attr("data-module");
        var dataAcc = JSON.parse($("#" + parentsId).attr("data-acc"));

        var pkgArr = [];
        $.each(dataAcc.package, function (k, accObj) {
            pkgArr[k] = accObj.pkgmdl;
        });

        this.ClearActiveSelect();
        var $prev_model_cnt = $("#sortable").find(".preview-model").length;

        this.panelClick = true;

        // 조합체크
        if (($prev_model_cnt > 0 && $("#newBox").hasClass('active')) || $prev_model_cnt > 1) {
            var cmbGb = $("#sortable").find(".preview-model").eq(0).attr("data-cbmgb");

            $("#step2_append_html >li[data-cbmgb!='" + cmbGb + "']").addClass(sDISABLED);
        }

        $("#newBox").removeClass("active");

        $("#" + parentsId).addClass("active");
        $("#" + id).addClass("select");

        // step 1
        $("#" + dep.replace("/", "") + "> div.list-item__img").trigger('click');

        // step2 교체용
        if (dep == "F/P") {
            $("#btnStep2ByYear >button[data-seltype='" + seltype + "' ]").trigger('click');
        }

        // step2
        $("#ref" + typeseq).trigger('click');

        // step3
        if ($('#btnStep1 > li.is-active').attr('data-dep') != 'F/P') {
            var $prev_model_cnt = $("#sortable").find(".preview-model").length;
            if ($prev_model_cnt == 1) {
                $("#btnStep1 > li[data-dep!='F/P']").removeClass(sDISABLED);
            }

            this.click = true;
            $("input[name=step3_model][data-module = '" + module + "']").trigger('click');

            if (pkgArr.length > 0) {

                for (var i = 0; i < pkgArr.length; i++) {
                    $("button[name='pkg-button'][data-pkgmdl='" + pkgArr[i] + "']").trigger('click');

                }
            }

            // 냉장고 설명
            this.SetSimulatorInfo();


        } else {
            var panels = $("#" + parentsId + "> div.model >div");
            $(".panel-box").hide();
            $(".make-info__head").hide();

            for (var i = 1; i < panels.length; i++) {
                var _door_id = panels.eq(i);
                if ($(_door_id).hasClass('choice')) {
                    this.door_id = _door_id;
                    this.colorNm = $(_door_id).attr("data-colornm");
                    this.colorData = $(_door_id).attr("data-colordata");
                    this.colorChip = $(_door_id).attr("data-colorchip");

                    // 냉장고 설명
                    this.SetSimulatorInfo();
                }
            }
        }

        var bespokeYn = $("#" + id).attr('data-bespokeYn');
        var colorData = $("#" + id).attr('data-colorData');
        var clrGrpId = $("#" + id).attr('data-clrGrpId');
        if (bespokeYn != null && bespokeYn != undefined && bespokeYn != '') {
            if (colorData != null && colorData != undefined && colorData != '') {
                if (bespokeYn == 'N') {
                    $("#originColor").trigger("click");
                    $("li[data-colorData='" + colorData + "']").addClass(sACTIVE);
                } else if (bespokeYn == 'Y') {
                    if ($("#360Color").click()) {
                        if ($("#prism_360_color > li[data-clrGrpId='" + clrGrpId + "']").click()) {
                            $("li[data-colorData='" + colorData + "']").addClass(sACTIVE);
                        }
                    }
                }
            }
        }
        else {
	       	 if(dep == "F/P" && $("#btnStep2ByYear >  button[data-seltype='SI19']").hasClass("is-active")){
	    		 if ($("#360Color").click()) {
	    			 $('#prism_360_color > li').first().trigger("click");
	    		 }
	    	 } else {
	             $("#originColor").trigger("click");		 
	    	 }
        }


        // 패널 선택 시 step4 로 포커스 이동
        if ($("#" + id).hasClass("choice") == true) {
            var $self = $("#product_model_open");
            moveNextStep($self);
        }

        this.panelClick = false;

    },
    // delete ref
    Delete: function (obj) {

        var id = obj.id;
        var msg = "해당 냉장고를 삭제 하시겠습니까?";
        messager.data.id = id;

        messager.confirm(msg, "확인", "취소", function () {


            if ($("#sortable > div").length == 0) {
                // 조합구분 초기화
                Cooler.modelCMB = '';
                $("#btnStep1 > li").removeClass(sACTIVE);
                $("#btnStep1 > li").removeClass(sDISABLED);
            }

            // 냉장고 길이 구해주기 위해 지우기 전에 변수에 값을 넣어 둔다.
            var cbmgb = $("#" + messager.data.id).attr("data-cbmgb");

            $("#" + messager.data.id).remove();
            Cooler.index = $("#sortable").find(".preview-model").length == undefined ? 0 : $("#sortable").find(".preview-model").length;
            if (Cooler.index < 4) {
                $(".new-box").show();
                Cooler.ClickNewBox('newBox');
            }

            $("#step2_append_html").empty();
            $("#step3_append_html").empty();
            $("#step4_panel_original_color").empty();
            $("#step4_panel_360_color").empty();

            if (cbmgb == "A" || cbmgb == "C") {
                // 제거했을때 냉장고 길이 계산 다시 해준다.
                var total = refrigerator.getTotalWidth();

                // 제거시 냉장고 최대 높이 다시 계산 해준다.
                var totalHeight = refrigerator.getTotalHeight();

                // View Ref width, height  
                if (total == 0) {
                    $(".line-w").hide();
                    $(".line-h").hide();
                }
                $("#lineW").text(total + "mm");
                $("#lineH").text(totalHeight + "mm");
            }

            // Specification update
            fncSpecification();

            var refCnt = $("#sortable").find(".preview-model").length;

            // 설치 가이드
            fncGiude();

            if (refCnt == 0) {
                fncReset();
            }
        });
    },
    // bespoke original color info setting
    GetProductColorMapInfo: function (data) {
        var selectDepartment = data.dep;
        var typeSeq = data.typeseq;

        var searchParams = {
            storeCd: 'b2b2c'
            , department: selectDepartment
            , typeSeq: typeSeq
        };

        Tran.SetTranObject(searchParams);
        Tran.SetDataStep("step4");
        Tran.Send();
    },
    // bespoke prism 360 color info setting
    GetProduct360ColorMapInfo: function (data) {
        var searchParams = {
            prism360Yn: data
        };

        Tran.SetTranObject(searchParams);
        Tran.SetDataStep("step4By360");
        Tran.Send();
    },
    // click new box event
    ClickNewBox: function (id) {
        // newBox 활성화
        $("#newBox").addClass("active");

        //step1_menu
        var $self = $("");
        moveNextStep($self);
        var selectDepartment = $("#sortable").find(".preview-model").eq(0).attr("data-updep");
        var $prev_model_cnt = $("#sortable").find(".preview-model").length;
        var cmbGb = $("#sortable").find(".preview-model").eq(0).attr("data-cbmgb");

        if (selectDepartment != "F/P") {
            if ($prev_model_cnt > 0) {

                if (cmbGb == 'A') {	 // 인피니트 1도어
                    $("#btnStep1 > li[data-dep='IK/F']").removeClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='IF/S']").addClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='F/S']").addClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='K/F']").addClass(sDISABLED);
                }
                if (cmbGb == 'B') { // 프리스탠딩
                    $("#btnStep1 > li[data-dep='IK/F']").addClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='IF/S']").removeClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='F/S']").removeClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='K/F']").addClass(sDISABLED);
                }
                if (cmbGb == 'C') { // 키친핏
                    $("#btnStep1 > li[data-dep='IK/F']").removeClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='IF/S']").addClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='F/S']").addClass(sDISABLED);
                    $("#btnStep1 > li[data-dep='K/F']").removeClass(sDISABLED);
                }
            }
        }

        this.ClearActiveSelect();

        $("#" + id).addClass("active");
        $("#btnStep1 > li").removeClass(sACTIVE);
        $("#step2_by_releaseYear").hide();

        $("#step2_append_html").empty();

        $("#step3_append_html").empty();
        $("#step4_panel_original_color").empty();
        $("#step4_panel_360_color").empty();
        $("#bespokePanelInfo").hide();
        $("#bespokeInfo").hide();
        $("#step2_by_product").addClass("is-disabled");
        $("#product_model_open").addClass("is-disabled");
        $("#product_color_open").addClass("is-disabled");
        Cooler.Clear();

        this.confirm = true;
    },
    // active ref clear
    ClearActiveSelect: function () {
        // 냉장고영역의 active, select class 제거
        var refId = $("#sortable").find(".active").attr("data-id");

        $("#" + refId).removeClass("active");

        var doorCnt = $("#" + refId).attr("data-doorCnt");
        for (var j = 1; j <= doorCnt; j++) {
            $("#" + refId + "_" + j).removeClass("select");
        }

    },
    // select door clear
    ClearSelect: function () {
        var refId = $("#sortable").find(".active").attr("data-id");
        var doorCnt = $("#" + refId).attr("data-doorCnt");
        for (var j = 1; j <= doorCnt; j++) {
            $("#" + refId + "_" + j).removeClass("select");
        }

    },
    // 냉장고 패널에 패널 세팅
    SetPanelColor: function (data) {

        // 냉장고 패널 선택해서 컬러 선택할 때 값 전달
        var colorData = data.colordata;
        var colorNm = data.colornm;
        var clrGrpId = data.clrgrpid;
        var bespokeYn = data.bespokeyn;
        var colorChip = data.colorchip;
        var data_dep = $("#sortable > div.active").attr("data-dep");
        
        this.colorData = colorData;
        this.colorNm = colorNm;
        this.clrGrpId = clrGrpId;
        this.bespokeYn = bespokeYn;
        this.colorChip = colorChip;

        var next_door_id = "";
        var doorCnt = 0;
        var previewIndex = "";

        // alert return bug 
        if ($("#sortable > div.active").find(".select").length == 0) {
            var msg = "냉장고의 도어를 선택해주세요.";
            messager.alert(msg, "확인", function () { });
            return '';
        }

        previewIndex = $(".preview-model").index($("#sortable").find(".active"));
        doorCnt = $("#sortable").find(".preview-model").eq(parseInt(previewIndex)).attr("data-doorCnt");
        previewID = $("#sortable").find(".preview-model").eq(parseInt(previewIndex)).attr("data-id");
        this.door_cnt = doorCnt;

        if (data_dep == "IF/S" || data_dep == "IK/F") {
            for (var i = 0; i < doorCnt; i++) {

                if (i == 0) {
                    previewDoorID = $("#" + previewID + " .model").children().not(".model-img").first().attr("data-id");
                }
                else {
                    previewDoorID = $("#" + previewID).find(".select").attr("data-id");
                }

                this.door_id = $("#" + previewDoorID);
                if ($("#" + previewDoorID).attr("data-parentsid") == previewID) {
                    var objParams = {
                        rowCd: $("#" + previewDoorID).attr("data-row")
                        , colCd: $("#" + previewDoorID).attr("data-col")
                        , colorData: colorData
                    };

                    if (colorData.indexOf("-") > -1) {
                        var rcCd = colorData.split("-")[1].toUpperCase();
                        var rcCdArr = [].concat(_toConsumableArray(rcCd));  // stg es6 --> es5 change bug
                        if (rcCdArr.length > 1) {
                            var rCd = $(previewDoorID).attr("data-row");
                            var cCd = $(previewDoorID).attr("data-col");

                            var textMsg = "";
                            if (rcCdArr[0] == 'R') {
                                textMsg += "우";
                            } else if (rcCdArr[0] == 'L') {
                                textMsg += "좌";
                            }

                            if (rcCdArr[1] == 'U') {
                                textMsg += "상";
                            } else if (rcCdArr[1] == 'B') {
                                textMsg += "하";
                            }

                            if (rCd != rcCdArr[1] || cCd != rcCdArr[0]) {
                                var alertData = {
                                    title: "info"
                                    , content: colorNm + " 색상은 " + textMsg + "칸 전용 컬러입니다.<br/>다른 컬러를 골라 보세요!"
                                    , callBack: ""
                                    , btnText: "확인"
                                };
                                commonAlert(alertData);
                                openLayer('commonAlert');
                                return false;
                            }
                        } else {
                            var rCd = $(previewDoorID).attr("data-row");
                            var cCd = $(previewDoorID).attr("data-col");

                            if (rcCdArr[0] == 'U') {
                                textMsg += "상";
                            } else if (rcCdArr[0] == 'B') {
                                textMsg += "하";
                            } else if (rcCdArr[0] == 'M') {
                                textMsg += "중";
                            } else if (rcCdArr[0] == 'L') {
                                textMsg += "좌";
                            } else if (rcCdArr[0] == 'R') {
                                textMsg += "우";
                            }

                            if (cCd != rcCdArr[0]) {
                                var alertData = {
                                    title: "info"
                                    , content: colorNm + " 색상은 " + textMsg + "칸 전용 컬러입니다.<br/>다른 컬러를 골라 보세요!"
                                    , callBack: ""
                                    , btnText: "확인"
                                };
                                commonAlert(alertData);
                                openLayer('commonAlert');
                                return false;
                            }
                        }
                    }
                    fncPanelMapDetail(objParams);

                    if (this.panelExistYn == 'N') {
                        return false;
                    }

                    next_door_id = $("#" + previewDoorID).next().attr("data-id");

                    next_cooler_id = $("#sortable").find(".preview-model").eq(parseInt(previewIndex + 1)).attr("id");
                    next_cooler_door_id = $("#sortable").find(".preview-model").eq(parseInt(previewIndex + 1)).attr("id") + "_1";

                    var $previewJS = $("#" + previewDoorID);

                    $previewJS.addClass("choice");
                    $previewJS.attr("data-colorData", colorData);
                    $previewJS.attr("data-colorNm", colorNm);
                    $previewJS.attr("data-clrGrpId", clrGrpId);
                    $previewJS.attr("data-bespokeYn", bespokeYn);
                    $previewJS.attr("data-colorChip", colorChip);

                    // ref-info
                    this.SetSimulatorInfo();

                   $previewJS.removeClass("select");

                    if (doorCnt == $previewJS.attr("data-door-index")) {
                        if (next_cooler_door_id != undefined && next_cooler_door_id != '' && next_cooler_door_id != "undefined_1" && next_cooler_door_id != "undefined") {
                            this.ClearActiveSelect();
                            $("#" + next_cooler_door_id).trigger('click');
                        }
                        else {
                            if (previewIndex < 3) {
                                $('#newBox').trigger('click');
                            }
                        }
                    }
                    else {
                        $("#" + next_door_id).addClass("select");
                    }
                }
            }
        }
        else {
            previewDoorID = $("#" + previewID).find(".select");
            this.door_id = $(previewDoorID);
            var $previewDoorID = $(previewDoorID);
            
            if ($previewDoorID.hasClass("select")) {
                var objParams = {
                    rowCd: $previewDoorID.attr("data-row")
                    , colCd: $previewDoorID.attr("data-col")
                    , colorData: colorData
                };
                if(doorCnt > 1){
                if (colorData.indexOf("-") > -1) {
                    var rcCd = colorData.split("-")[1].toUpperCase();
//                        var rcCdArr = [...rcCd];
  						var rcCdArr = [].concat(_toConsumableArray(rcCd));
                    if (rcCdArr.length > 1) {
                        var rCd = $previewDoorID.attr("data-row");
                        var cCd = $previewDoorID.attr("data-col");

                        var textMsg = "";
                        if (rcCdArr[0] == 'R') {
                            textMsg += "우";
                        } else if (rcCdArr[0] == 'L') {
                            textMsg += "좌";
                        }

                        if (rcCdArr[1] == 'U') {
                            textMsg += "상";
                        } else if (rcCdArr[1] == 'B') {
                            textMsg += "하";
                        }

                        if (rCd != rcCdArr[1] || cCd != rcCdArr[0]) {
                            var alertData = {
                                title: "info"
                                , content: colorNm + " 색상은 " + textMsg + "칸 전용 컬러입니다.<br/>다른 컬러를 골라 보세요!"
                                , callBack: ""
                                , btnText: "확인"
                            };
                            commonAlert(alertData);
                            openLayer('commonAlert');
                            return false;
                        }
                    } else {
                            var rCd = $previewDoorID.attr("data-row");
                            var cCd = $previewDoorID.attr("data-col");

                        var textMsg = "";
                        if (rcCdArr[0] == 'U') {
                            textMsg += "상";
                        } else if (rcCdArr[0] == 'B') {
                            textMsg += "하";
                        } else if (rcCdArr[0] == 'M') {
                            textMsg += "중";
                        } else if (rcCdArr[0] == 'L') {
                            textMsg += "좌";
                        } else if (rcCdArr[0] == 'R') {
                            textMsg += "우";
                        }

                        if (cCd != rcCdArr[0]) {
                            var alertData = {
                                title: "info"
                                , content: colorNm + " 색상은 " + textMsg + "칸 전용 컬러입니다.<br/>다른 컬러를 골라 보세요!"
                                , callBack: ""
                                , btnText: "확인"
                            };
                            commonAlert(alertData);
                            openLayer('commonAlert');
                            return false;
                        }
                    }
                }
                }
                fncPanelMapDetail(objParams);

                if (this.panelExistYn == 'N') {
                    return false;
                }

                next_door_id = $previewDoorID.next().attr("data-id");
                next_cooler_id = $("#sortable").find(".preview-model").eq(parseInt(previewIndex + 1)).attr("id");
                next_cooler_door_id = $("#sortable").find(".preview-model").eq(parseInt(previewIndex + 1)).attr("id") + "_1";
                // set ref-panel attr
                $previewDoorID.addClass("choice");
                $previewDoorID.attr("data-colorData", colorData);
                $previewDoorID.attr("data-colorNm", colorNm);
                $previewDoorID.attr("data-clrGrpId", clrGrpId);
                $previewDoorID.attr("data-bespokeYn", bespokeYn);
                $previewDoorID.attr("data-colorChip", colorChip);
                // ref-info
                this.SetSimulatorInfo();

                $previewDoorID.removeClass("select");

                if (doorCnt == $previewDoorID.attr("data-door-index")) {
                    if (next_cooler_door_id != undefined && next_cooler_door_id != '' && next_cooler_door_id != "undefined_1" && next_cooler_door_id != "undefined") {
                        this.ClearActiveSelect();
                        $("#" + next_cooler_door_id).trigger('click');
                    }
                    else {
                        if (previewIndex < 3) {
                            $('#newBox').trigger('click');
                        }
                    }
                }
                else {
                    $("#" + next_door_id).addClass("select");
                }
            }
        }
    },
    // simulator ref infor
    SetSimulatorInfo: function () {
        var selectDepartment = $('#sortable > div.active').attr('data-updep');
        var index = 0;
        var model = $("#sortable .preview-model").not("#newBox");

        for (var i = 0; i < model.length; i++) {
            if ($(model).eq(i).hasClass('active')) {
                index = i + 1;
            }
        }
        var numTxt = index;

        if (selectDepartment == "F/P") {

            var door_id = Cooler.door_id;
            var colorNm = Cooler.colorNm;
            var colorData = Cooler.colorData;
            var colorChip = Cooler.colorChip;

            var row = $(door_id).attr("data-row");
            var col = $(door_id).attr("data-col");
            var door_index = $(door_id).attr("data-door-index");

            var loc = row + col;

            $("#bespokePanelInfo").show();
            $(".make-info__head").show();
            $("#panel-box" + door_index).show();

            var lt = '';	// 위치 이름
            if (loc == 'UL') {
                lt = '상칸좌';
            } else if (loc == 'UR') {
                lt = '상칸우';
            } else if (loc == 'BL') {
                lt = '하칸좌';
            } else if (loc == 'BR') {
                lt = '하칸우';
            } else if (loc == 'UU') {
                if ($('#step2_append_html > li.is-active').attr('data-type').indexOf('1door') > -1) {
                    lt = '한칸';
                } else {
                    lt = '상칸';
                }
            } else if (loc == 'MM') {
                lt = '중칸';
            } else if (loc == 'BB') {
                lt = '하칸';
            }


            if (colorData.indexOf("#") > -1) {
                $("#panel-box" + door_index).find("div.panel-color").css("backgroundImage", "");
                $("#panel-box" + door_index).find("div.panel-color").css("backgroundColor", colorData);
                $("#panel-box" + door_index).find("p.sub-text").text(colorNm);
            } else {
                $("#panel-box" + door_index).find("div.panel-color").css("backgroundImage", "url('https:" + colorChip + "')");
                $("#panel-box" + door_index).find("p.sub-text").text(colorNm);
                $("#panel-box" + door_index).find("div.panel-color").css("backgroundColor", "");
            }
            $("#panel-box" + door_index).find("p.title-text").text(lt);
            $("#bespokePanelInfo .make-info__head").find("p.title-text").html("<span class='ref-num' id='refNum'>" + numTxt + "</span>교체용 패널");

        } else {

            var activeREFID = $("#sortable").find(".active").attr("data-id");
            var width = $("#" + activeREFID).attr("data-width");
            var height = $("#" + activeREFID).attr("data-height");
            var volume = $("#" + activeREFID).attr("data-volume");
            var typeName = $("#" + activeREFID).attr('data-typeName');
            var module = $("#" + activeREFID).attr('data-module');
            var goodspath = $("#" + activeREFID).attr('data-goodspath');
            var storageItem = $("#step2_append_html >li.is-active").attr('data-storageItem');


            $("#typeName").text(typeName);
            $("#refNum").text(numTxt);
            $("#modelMdl").html(module);
            $("#storageItem").text(storageItem);
            $("#volume").text(volume + "L");
            $("#size").text(width + "x" + height + "mm");
            $("#bespokeInfo").show();
            var reUrl = fncConvertUrl(goodspath);
            $("#detail").attr("href", reUrl);

        }

    },
    // acc click
    clickAccesary: function (data) {
        
        var imgUrl = data.dataset.imgurl;
        var rqidopt = data.dataset.rqidopt;
        var parentId = data.dataset.pid;
        var pkgprice = data.dataset.pkgprice;
        var pkgdesc = data.dataset.pkgdesc;

        if (parseInt(pkgprice) == "NaN" || pkgprice == 0) {
            var msg = "상품을 준비중입니다.";
            var alertData = {
                title: ""
                , content: msg
                , callBack: ""
                , btnText: "확인"
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return false;
        }

        if (rqidopt == "Y") {

            $("#" + parentId).find(".is-active").removeClass("is-active");
            $(data).addClass("is-active");
            if (imgUrl != "" && imgUrl != undefined && imgUrl != null) {
                $("#img_" + parentId).attr("src", "https:" + imgUrl);
            }
            if (pkgdesc != "" && pkgdesc != undefined && pkgdesc != null) {
                $("#textInfo_" + parentId).text(pkgdesc);
            }
        } else {
            if ($(data).hasClass("is-active") == true) {
                $(data).removeClass("is-active");
            } else {
                $(data).addClass("is-active");
            }
        }
        this.SetPkgData();
        // 명세서 기입
        fncSpecification();
    },
    SetPkgData: function () {
        var $refId = $("#sortable").find(".active");
        var modelChkVal = $('input:radio[name=step3_model]:checked').val();
        var activeBtnCnt = $("#pkg_list_item_" + modelChkVal).find(".is-active").length;

        var $dataAcc = $($refId).attr("data-acc");

        var obj = new Object();
        var arr = [];

        for (var i = 0; i < activeBtnCnt; i++) {
            var object = $("#pkg_list_item_" + modelChkVal).find(".is-active").eq(i);

            if ($dataAcc != null && $dataAcc != undefined && $dataAcc != '') {
                var pkg = new Object();
                pkg.id = object.attr("id");
                pkg.rqidopt = object.attr("data-rqidopt");
                pkg.pid = object.attr("data-pid");
                pkg.pkgmdl = object.attr("data-pkgmdl");
                pkg.pkgnm = object.attr("data-pkgnm");
                pkg.pkgprice = object.attr("data-pkgprice");
                pkg.pkgindex = object.attr("data-pkgindex");
                pkg.pkggoodsid = object.attr("data-pkggoodsid");
            }
            arr[i] = pkg;
        }

        obj.package = arr;

        $($refId).attr("data-acc", JSON.stringify(obj));

    }

    , refValid: function (type) {
        var visibleLength = $("#sortable > .preview-model").length;
        if (type == 'save') {
            var msg = "저장";
        } else {
            var msg = "구매";
        }

        if (visibleLength == 0) {
            var msg = "모델이 선택되지 않았습니다.<br/>선택 완료 후 " + msg + "해 주시기 바랍니다.";
            messager.alert(msg, "확인", function () { });
            return false;
        }

        for (var i = 1; i <= visibleLength; i++) {
            // 각각의 냉장고 id
            var $refId = $("#sortable").find(".preview-model").eq(i - 1).attr("data-id");
            var department = $("#" + $refId).attr("data-updep");
            // 냉장고 각각의 도어 갯수
            var doorCnt = $("#" + $refId).attr("data-doorcnt");
            // 색칠 된 패널 갯수
            var chkDoorCnt = $("#" + $refId).find("div[data-colordata]").length;

            // 조건에 프리 패널 추가
            if (doorCnt != chkDoorCnt && department != 'F/P') {
                var msg = "모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 " + msg + "해 주시기 바랍니다.";
                messager.alert(msg, "확인", function () {
                    return false;
                });
                return false;
            } else if (doorCnt <= 0) {
                var msg = "모델이 선택되지 않았습니다.<br/>선택 완료 후 " + msg + "해 주시기 바랍니다.";
                messager.alert(msg, "확인", function () { });
                return false;
            } else if (department == 'F/P' && chkDoorCnt == 0) {
                var msg = "모든 컬러가 선택되지 않았습니다.<br/>선택 완료 후 " + msg + "해 주시기 바랍니다.";
                messager.alert(msg, "확인", function () { });
                return false;
            } else if (i == visibleLength) {
                if (type == 'cart') {
                    dirbuyNow('cart');
                } else if (type == 'buy') {
                    dirbuyNow();
                } else {
                    // 저장하기 시에 로그인 여부 체크
                    if (!loginFlag) {
                        if (loginYn == 'N') {
                            var msg = "로그인 하지 않고 저장 시 브라우저 환경설정에 따라 저장 내역이 삭제될 수 있습니다. <br> 로그인 하시겠습니까?"
                            messager.confirmCancel(msg, "확인", "취소", function () {
                                confirmYn = 'Y';
                                SaveData.bespokeMyModelAdd();
                                window.location.href = fnConvertLoginUrl('member/indexLogin/?returnUrl=' + window.location.pathname);
                            }, function () {
                                SaveData.bespokeMyModelAdd();
                            });
                            loginFlag = true;
                        } else {
                            SaveData.bespokeMyModelAdd();
                        }

                    } else {
                        SaveData.bespokeMyModelAdd();
                    }
                }
            }
        }
    }
    , ViewHTMLInfo: function () {
        var step1Cnt = $('#btnStep1 > li.is-active').length;

        if (step1Cnt > 0) {
            $("#btnAllReset").show();
        }
        else {
            $("#btnAllReset").hide();
        }
    }

};

// run step3 pkg event
$(function () {
    $(document).on("click", "input:radio[name=step3_model]", function () {
        Cooler.SetPkgData();
    });
});

// html script description(append) by step2
function fncGetDataByStep2(data, dataStep) {
    $("#step2_append_html").empty();

    Cooler.SetThumbData(data);

}
// html script description(append) by step3
function fncGetDataByStep3(data, dataStep) {

    var filteredData = data.resultData;
    var optCnt = 0;
    var j = 0;

    var kitData = '';
    var kitPrice = '';
    var kitGoodsId = '';
    var kitCd = '';
    // set ref-kit price 
    if (filteredData[0].product != 'undefined' && filteredData[0].product != undefined && filteredData[0].product != '') {
        kitData = filteredData[0].product;
        kitPrice = kitData[0].kitPrice == undefined || kitData[0].kitPrice == "undefined" ? "" : kitData[0].kitPrice;
        kitGoodsId = kitData[0].kitGoodsId == undefined || kitData[0].kitGoodsId == "undefined" ? "" : kitData[0].kitGoodsId;
        kitCd = kitData[0].kitCd == undefined || kitData[0].kitCd == "undefined" ? "" : kitData[0].kitCd;
    }
    $("#sortable").find(".active").attr("data-kitprice", kitPrice);
    $("#sortable").find(".active").attr("data-kitgoodsid", kitGoodsId);
    $("#sortable").find(".active").attr("data-kitcd", kitCd);

    if (filteredData.length > 0) {
        var html = '';
        for (var i = 0; i < filteredData.length; i++) {
            var obj = filteredData[i].product;
            var objHeader1 = "";
            var objHeader2 = "";
            var objHeader3 = "";

            if (filteredData[i].productHeader.length > 0) {
                objHeader1 = filteredData[i].productHeader[0].OPT1;
                objHeader2 = filteredData[i].productHeader[0].OPT2;
                objHeader3 = filteredData[i].productHeader[0].OPT3;
            }

            var allPrice = 0;
            for (var j = 0; j < obj.length; j++) {
                var price = obj[j].price;
                var pkg = obj[j].pakage;

                var toolTip = ["오토필 정수기", "빅 아이스메이커", "메탈쿨링 시스템", "베버리지센터", "도어 개폐방향"];

                if (price == null || price == "") {
                    price = 0;
                }

                allPrice += price;
                if (j == obj.length - 1 && allPrice == 0) {

                    if ($("#sortable").find(".active").length == 0) {
                        $("#product_model_open").addClass("is-disabled");
                        $("#product_color_open").addClass("is-disabled");
                        $("#cmbList").addClass("is-disabled");
                    }

                    var msg = "상품을 준비중입니다.";
                    var alertData = {
                        title: ""
                        , content: msg
                        , callBack: ""
                        , btnText: "확인"
                    };
                    commonAlert(alertData);
                    openLayer('commonAlert');
                    return false;
                }

                html += '<li class="list-item" id="list_item_' + j + '">';
                html += '<div class="list-item__title">';
                html += ' <div class="title-box">';
                html += '   <label for="model' + j + '" class="radio-box" onclick="event.preventDefault(); Cooler.GetModelInfo(this);" data-seq="' + j + '" data-opt1="' + objHeader1 + '" data-opt2="' + objHeader2 + '" data-opt3="' + objHeader3 + '" data-optInfo1="' + obj[j].optInfo1 + '" data-optInfo2="' + obj[j].optInfo2 + '" data-optInfo3="' + obj[j].optInfo3 + '" data-colorcd="' + obj[j].colorCd + '" data-width="' + obj[j].widthSize + '" data-height="' + obj[j].heightSize + '" data-module="' + obj[j].modelName + '" data-price="' + price + '" data-volume="' + obj[j].volume + '" data-goodsId="' + obj[j].goodsId + '" data-goodsPath="' + obj[j].goodsPath + '">';
                html += '     <input type="radio" id="model' + j + '" name="step3_model" data-color="' + obj[j].colorCd + '" data-module="' + obj[j].modelName + '" data-prism360Yn="' + obj[j].prism360Yn + '" value="' + j + '">';
                html += '     <span class="text">' + obj[j].modelName + '</span>';
                html += '   </label>';
                if (obj[j].energy != "-등급" && obj[j].energy != null) {
                    html += energyFunc(obj[j].energy);    // 에너지 등급
                }
                html += ' </div>';
                html += ' <p class="text-price">';
                html += '   혜택가 <span class="bold">' + format.num(price) + '</span>원';
                html += ' </p>';
                html += '</div>';
                html += ' <div class="list-item__content-info" style="display:none;" id="opt_list_item_' + j + '">';
                html += '   <div class="info-item head">';
                html += '     <p class="text">';
                html += objHeader1;
                if (toolTip.indexOf(objHeader1) > -1) {
                    html += '		<button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'' + objHeader1 + '\');"></button>';
                }
                html += '		</p>';
                html += '		<p class="text">';
                html += objHeader2;
                if (toolTip.indexOf(objHeader2) > -1) {
                    html += '			<button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'' + objHeader2 + '\');"></button>';
                }
                html += '		</p>';
                html += '		<p class="text">';
                html += objHeader3;
                if (toolTip.indexOf(objHeader3) > -1) {
                    html += '			<button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'' + objHeader3 + '\');"></button>';
                }
                html += '		</p>';
                html += '   </div>';

                html += '		<div class="info-item">';
                html += haveFunc(obj[j].optInfo1);
                html += haveFunc(obj[j].optInfo2);
                html += haveFunc(obj[j].optInfo3);
                html += '		</div>';
                html += '		</div>';
                html += '</li>';
                html += '<div class="list-item__content-choice"  style="display:none;" id="pkg_list_item_' + j + '">';
                var prdCnt = 0;
                $.each(pkg, function (k, data) {
                    var imgURL = '';
                    var rqidOpt;
                    var subImgHtml = '';
                    var subTextHtml = '';
                    var pkgStyle = "";
                    var bodyHtml = "";

                    $.each(data, function (cnt, model) {
                        rqidOpt = model.rqidOptYn;
                        imgURL = model.pkgOptList[0].imgUrl;
                        modelText = model.prdMdl;


                        if (cnt == 0 && rqidOpt == 'Y') {
                            bodyHtml += '				<button name="pkg-button" class="btn-choice is-active" id="pkg_' + j + '_' + prdCnt + '"  onclick="Cooler.clickAccesary(this)" data-imgurl="' + imgURL + '" data-rqidopt="' + rqidOpt + '" data-pid="pkg_' + j + '_' + prdCnt + '" data-pkgmdl="' + model.pkgMdl + '" data-pkgnm="' + model.pkgNm + '" data-pkgprice="' + model.bPrice + '" data-pkgindex="' + optCnt + '" data-pkggoodsid="' + model.goodsId + '" data-pkgdesc="' + model.pkgDesc + '">';
                            bodyHtml += '					<span class="text">' + model.pkgNm + '</span>';
                            bodyHtml += '					<span class="text">( + ' + format.num(model.bPrice) + '원 )</span>';
                            bodyHtml += '				</button>';
                            if (imgURL.indexOf("//") > -1) {
                                subImgHtml += '<div class="info-box__img">';
                                subImgHtml += ' <img id="img_pkg_' + j + '_' + prdCnt + '" src="' + imgURL + '">';
                                subImgHtml += '</div>';
                            }
                            subTextHtml += ' <div class="info-box__text">';
                            subTextHtml += '	<p class="info-text" id="textInfo_pkg_' + j + '_' + prdCnt + '">' + model.pkgDesc + '</p>';
                            subTextHtml += '</div>';

                        }
                        else if (rqidOpt == 'Y') {
                            bodyHtml += '       <button name="pkg-button" class="btn-choice" id="pkg_' + j + '_' + prdCnt + '" onclick="Cooler.clickAccesary(this)" data-imgurl="' + imgURL + '" data-rqidopt="' + rqidOpt + '" data-pid="pkg_' + j + '_' + prdCnt + '" data-pkgmdl="' + model.pkgMdl + '"  data-pkgnm="' + model.pkgNm + '" data-pkgprice="' + model.bPrice + '" data-pkgindex="' + optCnt + '" data-pkggoodsid="' + model.goodsId + '" data-pkgdesc="' + model.pkgDesc + '">';
                            bodyHtml += '         <span class="text">' + model.pkgNm + '</span>';
                            bodyHtml += '         <span class="text">( + ' + format.num(model.bPrice) + '원 )</span>';
                            bodyHtml += '       </button>';
                        }

                        if (rqidOpt == 'N') {
                            bodyHtml += '       <button name="pkg-button" class="btn-choice" id="pkg_' + j + '_' + prdCnt + '" onclick="Cooler.clickAccesary(this)" data-imgurl="' + imgURL + '" data-rqidopt="' + rqidOpt + '" data-pid="pkg_' + j + '_' + prdCnt + '" data-pkgmdl="' + model.pkgMdl + '"  data-pkgnm="' + model.pkgNm + '" data-pkgprice="' + model.bPrice + '" data-pkgindex="' + optCnt + '" data-pkggoodsid="' + model.goodsId + '" data-pkgdesc="' + model.pkgDesc + '">';
                            bodyHtml += '         <span class="text">' + model.pkgNm + '</span>';
                            bodyHtml += '         <span class="text">( + ' + format.num(model.bPrice) + '원 )</span>';
                            bodyHtml += '       </button>';
                            if (imgURL.indexOf("//") > -1) {
                                subImgHtml += '<div class="info-box__img">';
                                subImgHtml += ' <img id="img_pkg_' + j + '_' + prdCnt + '" src="' + imgURL + '">';
                                subImgHtml += '</div>';
                            }
                            if (model.pkgDesc != "."){
                                subTextHtml += ' <div class="info-box__text">';
                                subTextHtml += '	<p class="info-text" id="textInfo_pkg_' + j + '_' + prdCnt + '">' + model.pkgDesc + '</p>';
                                subTextHtml += '</div>';
                            }
                        }

                        optCnt++;
                    });

                    html += '<div class="choice-item" ' + pkgStyle + '>';
                    html += '<p class="title-text">' + k ;
                    if(k == "투명김치통 10.9L (3개 세트)"){
                        html += '   <button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'투명 김치통 (3개 세트)\');"></button>';
                    } else if(k == "투명김치통 10.9L (6개 세트)"){
                        html += '	<button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'투명 김치통 (6개 세트)\');"></button>';
                    } else if(k == "메탈김치통 11.2L (3개 세트)"){
                        html += '	<button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'메탈쿨링 김치통 (3개 세트)\');"></button>';
                    } else if(k == "메탈김치통 11.2L (1개 단품)"){
                        html += '   <button class="btn-tooltip small" onclick="event.preventDefault(); message.step3Pop(\'메탈쿨링 김치통 (1개 단품)\');"></button>';
                    }
                    html += '</p>';
                    html += '<div class="choice-item__btn-box" id="pkg_' + j + '_' + prdCnt + '">';
                    html += bodyHtml;
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="choice-item__info-box"  ' + pkgStyle + '>';
                    html += subImgHtml;
                    html += subTextHtml;
                    html += '</div>';
                    prdCnt++;
                });
                html += '</div>';

            }

            $("#sortable > div.active").attr("data-price", price);
            $("#sortable > div.active").attr("data-optcnt", optCnt / j);
        }
        $(this).addClass(sACTIVE);
        $("#step3_append_html").empty();
        $("#step3_append_html").append(html);
    }

    // Step3 set the product of the ref-model to be non-zero
    var $label = $("#step3_append_html").find("label");
    for (var i = 0; i < $label.length; i++) {
        var price = $($label).eq(i).attr("data-price");
        if (price > 0) {
            $("#model" + i).trigger("click");
            break;
        }
    }
}
// html script description(append) by step4
function fncGetDataByStep4(data, dataStep) {
    $("#step4_panel_original_color").empty();
    var filteredData = data.resultData;
    var html = '';

    if (filteredData.length > 0) {
        for (var i = 0; i < filteredData.length; i++) {
            var hasColorList = filteredData[i].option.list.allDoorColor;
            $.each(hasColorList, function (k, itemList) {
                if (itemList.color.length > 0) {

                    html += '<article class="original-choice__wrap">';
                    html += '<div class="original-choice__title">';
                    html += ' <p class="title-text">' + itemList.material + '</p>';
                    if(itemList.material != 'TOILETPAPER (글램 글래스)') {
                        html += ' <button class="btn-tooltip small" onclick="event.preventDefault();message.step4Pop(' + itemList.color[0].clrGrpId + ')"></button>';
                    }
                    html += '</div>';
                    html += '<ul class="original-choice__list">';
                    $.each(itemList.color, function (m, prod) {
                        html += '<li class="list-item" onclick="Cooler.SetPanelColor(this.dataset)" data-colorChip="' + prod.clrChipUrl + '" data-colorGrp="' + prod.clrGrpId + '" data-colorData="' + prod.name["en"] + '" data-colorNm="' + prod.name["kr"] + '" data-bespokeYn="N">';
                        html += '<div class="item-color">';
                        html += '<img src="' + prod.clrChipUrl + '" alt="컬러칩">';
                        html += '</div>';
                        html += '<p class="item-text">' + prod.name["kr"] + '</p>';
                        html += '</li>';
                    });
                    html += '</ul>';
                    html += '</article>';

                }
            });
        }

        $("#step4_panel_original_color").append(html);
    }
}

function fncGetDataBy360Color(data, dataStep) {
    $("#step4_panel_360_color").empty();

    var filteredData = data.resultData;

    if (filteredData.length > 0) {
        for (var i = 0; i < filteredData.length; i++) {
            var obj = filteredData[i].colorData;

            if (obj != null) {
                var colorGrpIdArr = [];
                var flag = true;
                $.each(obj, function (i, itemGrpList) {
                    flag = true;
                    for (value in colorGrpIdArr) {
                        if (colorGrpIdArr[value].clrGrpId == itemGrpList.clrGrpId) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        colorGrpIdArr.push(obj[i]);
                    }
                });

                var imgUrlTxt;
                var html = '';
                var headHtml = '';
                var subHtml = '';
                var prismColorIdArr = [];


                $.each(colorGrpIdArr, function (i, itemGrpList) {
                    if (itemGrpList.bspkColorTpCd == '2') {
                        imgUrlTxt = itemGrpList.clrGrpNm.toLowerCase();
                        headHtml += '<li class="title-item" data-clrGrpId="' + itemGrpList.clrGrpId + '">';
                        headHtml += '<div class="item-color">';
                        headHtml += '<img src="//images.samsung.com/is/image/samsung/p5/sec/mkt/bespokestudio/new-tab-' + imgUrlTxt + '.png?$ORIGIN_PNG$" alt="">';
                        headHtml += '</div>';
                        headHtml += '<p class="item-text">' + itemGrpList.clrGrpNm + '</p>';
                        headHtml += '</li>';

                        $.each(obj, function (k, itemList) {
                            if (itemGrpList.clrGrpId == itemList.clrGrpId) {
                                prismColorIdArr.push('<li class="list-item" onclick="Cooler.SetPanelColor(this.dataset)"  data-clrGrpId="' + itemList.clrGrpId + '" data-colorNm="' + itemList.name["kr"] + '" data-colorData="' + itemList.name["en"] + '" style=" background: ' + itemList.name["en"] + '" data-bespokeYn="Y" ></li>');
                            }
                        });
                    }
                });
                for (var q = 0; q < 6; q++) {
                    for (var p = 0; p < 3; p++) {
                        subHtml += '<ul class="prism-choice__list swiper-slide">';
                        for (var r = 0; r < 4; r++) {
                            for (var m = 0; m < 5; m++) {
                                var pCnt = 5 * p;
                                var rCnt = 15 * r;
                                var qCnt = 60 * q;

                                subHtml += prismColorIdArr[m + rCnt + pCnt + qCnt];
                            }
                        }
                        subHtml += '</ul>'
                    }
                }

                html += '<ul class="prism-choice__title" id="prism_360_color">';
                html += headHtml;
                html += '</ul>';
                html += '<div class="prism-choice__contents" id="prismChoiceSwiper">';
                html += '<div class=" swiper-wrapper" id="prism_360_color_detail">';
                html += subHtml;
                html += '</div>';
                html += '<div class="swiper-button-next"></div>';
                html += '<div class="swiper-button-prev"></div>';
                html += '</div>';
                html += '<div class="prism-choice__btn-box" onclick="message.allColor()">';
                html += '<button class="btn-underline">';
                html += '<span class="text">색상모두보기</span>  ';
                html += '</button>';
                html += '</div>';

                $("#step4_panel_360_color").append(html);

                // 동적 생성된 contents에 의해서 기존 위치에서 변경
                var swiper = new Swiper("#prismChoiceSwiper", {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    freeMode: true,
                    mousewheel: true,
                    keyboard: true,
                    observer: true,
                    observeParents: true
                });

                // 360컬러 선택시 스크립트 속도에 따라 첫번째 클릭되는 요건을 맞춤.
                $("#prism_360_color_detail > ul").hide();
                $("#tab1").hide();

                if (Cooler.panelClick == false) {
                    setTimeout(function () {
                        $('#prism_360_color > li').first().trigger("click");
                    }, 5);
                }
                $('#prism_360_color > li').click(function () {
                    $('#prism_360_color > li').removeClass(sACTIVE);
                    $(this).addClass(sACTIVE);

                    $("#prism_360_color_detail > ul").hide();
                    $("#prism_360_color_detail > ul > li[data-clrGrpId=" + $(this).attr('data-clrGrpId') + "]").parent().show();
                });

            }
        }
    }
}

function fncGetDataByPanelMap(data, dataStep) {
    var filteredData = data.resultData;

    if (filteredData == undefined || filteredData.panelMdl == "undefined" || filteredData.panelMdl == null || filteredData.panelMdl == '') {
        Cooler.panelExistYn = 'N';
        var msg = "상품을 준비중입니다.";
        messager.alert(msg, "확인", function () { });
        return false;
    } else {
        Cooler.panelExistYn = 'Y';
        PanelColorSetting(filteredData);
    }

}

function replaceUrl(panelMdl) {
    if (panelMdl.indexOf("/") > -1) {
        panelMdl = panelMdl.replace("/", "_");
    }

    return panelMdl;
}

// 냉장고 색상 셋팅
function PanelColorSetting(data) {

    var door_id = Cooler.door_id;
    var door_cnt = Cooler.door_cnt;
    var dataType = Cooler.modelData.type;
    var doorColorName = "";
    var col = $(door_id).attr("data-col");
    var panelMdl = data.panelMdl;
    var price = data.price;
    var colorNm = Cooler.colorNm;
    var goodsId = data.goodsId;

    var prism360Yn = $("#step4_color_tab > li.is-active").attr("data-original") == "Y" ? "N" : "Y";
    // PRISM 360 컬러
    if (prism360Yn == 'Y') {
        $(door_id).attr("data-prism-yn", true);
        $(door_id).attr("data-colorData", Cooler.colorData);
        $(door_id).css("backgroundColor", Cooler.colorData);
        $(door_id).attr("data-color-true", true);
        $(door_id).css("background-image", "");

    } else { // original 컬러

        if (door_cnt > 3 || dataType.indexOf("family") > -1 || dataType.indexOf("autoview") > -1) {
            if (col.indexOf('L') > -1) {
                doorColorName = replaceUrl(panelMdl) + "_left";
            } else if (col.indexOf('R') > -1) {
                doorColorName = replaceUrl(panelMdl) + "_right";
            } else if (col.indexOf('M') > -1) {
                doorColorName = replaceUrl(panelMdl) + "_middle";
            } else if (col.indexOf('B') > -1) {
                doorColorName = replaceUrl(panelMdl) + "_bottom";
            }
        } else {
            doorColorName = replaceUrl(panelMdl);
        }

        doorColorName = doorColorName.toLowerCase();

        $(door_id).attr("data-prism-yn", false);
        $(door_id).css("backgroundColor", "");
        $(door_id).attr("data-color-true", false);
        $(door_id).css("background-image", "url(https://images.samsung.com/kdp/bespoke/images/v3/door/" + doorColorName + ".png)");
    }

    $(door_id).attr("data-goodsId", goodsId);
    $(door_id).attr("data-panelPrice", price);
    $(door_id).attr("data-panelMdl", panelMdl);
    $(door_id).attr("data-colorNm", colorNm);

    fncSpecification();
}

// 냉장고 명세서
function fncSpecification() {
    $("#complete_panel_info").empty();

    var html = '';
    var panelHtml = '';
    var kitHtml = '';
    var dataDoorNm = "";
    var panelLocation = "";
    var panelLocationDe = "";
    var locationNm = "";

    var allPrice = 0;

    var obj = $("#sortable").find("div.preview-model");

    for (var i = 0; i < obj.length; i++) {
        var dataInfo = $(obj).eq(i).attr("id");
        var prodPrice = 0;

        dataDoorNm = $("#" + dataInfo).attr("data-typeName");

        if ($("#" + dataInfo).attr('data-upDep') != 'F/P') {
            // 냉장고 본체 가격표
            panelHtml += '<ul class="price-list__content">';
            panelHtml += ' <li class="list-item__title">';
            panelHtml += '  <p class="text"><span class="ref-num">' + parseInt(i + 1) + '</span>' + dataDoorNm + '</p>';
            panelHtml += ' </li>';
            panelHtml += '	<li class="list-item__ref">';
            panelHtml += '  <div class="info-text-box">';
            panelHtml += '			<p class="title-text">' + $("#" + dataInfo).attr("data-module") + '</p>';
            panelHtml += '  </div>';
            panelHtml += '  <div class="price-text-box">';
            panelHtml += '			<p class="price-text">' + format.num($("#" + dataInfo).attr("data-price")) + '원</p>';
            panelHtml += '  </div>';
            panelHtml += ' </li>';

            allPrice += parseInt($("#" + dataInfo).attr("data-price"));
            prodPrice += parseInt($("#" + dataInfo).attr("data-price"));

            for (var j = 1; j < parseInt($("#" + dataInfo).attr("data-doorCnt")) + 1; j++) {
                var panelDataInfo = $("#" + dataInfo + "_" + j);
                if ($(panelDataInfo).attr("data-panelMdl") != null && $(panelDataInfo).attr("data-panelMdl") != undefined && $(panelDataInfo).attr("data-panelMdl") != '') {
                    if ($(panelDataInfo).attr("data-row") == "U") {
                        panelLocation = "상칸";
                    } else if ($(panelDataInfo).attr("data-row") == "M") {
                        panelLocation = "중칸";
                    } else if ($(panelDataInfo).attr("data-row") == "B") {
                        panelLocation = "하칸";
                    }

                    if ($(panelDataInfo).attr("data-col") == "L") {
                        panelLocationDe = "좌";
                    } else if ($(panelDataInfo).attr("data-col") == "R") {
                        panelLocationDe = "우";
                    } else {
                        panelLocationDe = "";
                    }

                    if ($("#" + dataInfo).attr("data-type").indexOf("1door") > -1) {
                        locationNm = "한칸";
                    } else {
                    locationNm = panelLocation + panelLocationDe;
                    }

                    panelHtml += ' <li class="list-item">';
                    panelHtml += '  <div class="info-text-box">';
                    panelHtml += '   <p class="sub-text">';
                    panelHtml += '    <span class="text">' + locationNm + '</span>';
                    panelHtml += '    <span class="text">' + $(panelDataInfo).attr("data-colorNm") + '</span>';
                    panelHtml += '   </p>';
                    panelHtml += '   <p class="title-text">' + $(panelDataInfo).attr("data-panelMdl") + '</p>';
                    panelHtml += '  </div>';
                    panelHtml += '  <div class="price-text-box">';
                    panelHtml += '			<p class="price-text">' + format.num($(panelDataInfo).attr("data-panelPrice")) + '원</p>';
                    panelHtml += '  </div>';
                    panelHtml += ' </li>';

                    allPrice += parseInt($(panelDataInfo).attr("data-panelPrice"));
                    prodPrice += parseInt($(panelDataInfo).attr("data-panelPrice"));
                }
            }
            if ($("#" + dataInfo).attr("data-acc") != null && $("#" + dataInfo).attr("data-acc") != undefined && $("#" + dataInfo).attr("data-acc") != '') {
                var dataAcc = JSON.parse($("#" + dataInfo).attr("data-acc"));
                $.each(dataAcc.package, function (k, accObj) {
                    panelHtml += ' <li class="list-item">';
                    panelHtml += '  <div class="info-text-box">';
                    panelHtml += '   <p class="sub-text">';
                    panelHtml += '    <span class="text">' + accObj.pkgnm + '</span>';
                    panelHtml += '   </p>';
                    panelHtml += '   <p class="title-text">' + accObj.pkgmdl + '</p>';
                    panelHtml += '  </div>';
                    panelHtml += '  <div class="price-text-box">';
                    panelHtml += '   <p class="price-text">' + format.num(accObj.pkgprice) + '원</p>';
                    panelHtml += '  </div>';
                    panelHtml += ' </li>';


                    allPrice += parseInt(accObj.pkgprice);
                    prodPrice += parseInt(accObj.pkgprice);
                });
                panelHtml += ' <li class="list-prodPrice" style="display:none;>';
                panelHtml += '  <div class="prod">';
                panelHtml += '  	<p class="prodPrice_' + i + '">' + format.num(prodPrice) + '원</p>';
                panelHtml += '  </div>';
                panelHtml += ' </li>';

                panelHtml += '</ul>';

            }
        } else {
            panelHtml += '<ul class="price-list__content">';
            panelHtml += '	<li class="list-item__title">';
            panelHtml += '		<p class="text"><span class="ref-num">' + parseInt(i + 1) + '</span>교체용 패널</p>';
            panelHtml += '	</li>';

            for (var j = 1; j < parseInt($("#" + dataInfo).attr("data-doorcnt")) + 1; j++) {
                var panelDataInfo = $("#" + dataInfo + "_" + j);
                if ($(panelDataInfo).attr("data-panelMdl") != null && $(panelDataInfo).attr("data-panelMdl") != undefined && $(panelDataInfo).attr("data-panelMdl") != '') {

                    if ($(panelDataInfo).attr("data-row") == "U") {
                        panelLocation = "상칸";
                        if ($('#step2_append_html > li.is-active').attr('data-type') != undefined) {
                            if ($('#step2_append_html > li.is-active').attr('data-type').indexOf('1door') > -1) {
                                panelLocation = "한칸";
                            }
                        }
                    } else if ($(panelDataInfo).attr("data-row") == "M") {
                        panelLocation = "중칸";
                    } else if ($(panelDataInfo).attr("data-row") == "B") {
                        panelLocation = "하칸";
                    }

                    if ($(panelDataInfo).attr("data-col") == "L") {
                        panelLocationDe = "좌";
                    } else if ($(panelDataInfo).attr("data-col") == "R") {
                        panelLocationDe = "우";
                    } else {
                        panelLocationDe = "";
                    }
                    locationNm = panelLocation + panelLocationDe;

                    panelHtml += '	<li class="list-item">';
                    panelHtml += '		<div class="info-text-box">';
                    panelHtml += '			<p class="sub-text">';
                    panelHtml += '				<span class="text">' + locationNm + '</span>';
                    panelHtml += '				<span class="text">' + $(panelDataInfo).attr("data-colorNm") + '</span>';
                    panelHtml += '			</p>';
                    panelHtml += '		</div>';
                    panelHtml += '		<div class="price-text-box">';
                    panelHtml += '			<p class="price-text">' + format.num($(panelDataInfo).attr("data-panelPrice")) + '</p>';
                    panelHtml += '		</div>';
                    panelHtml += '<input type="hidden" name="bespokeModuleByFP" value="' + $("#" + dataInfo).attr("data-module") + '" />';
                    panelHtml += '	</li>';

                    allPrice += parseInt($(panelDataInfo).attr("data-panelPrice"));
                    prodPrice += parseInt($(panelDataInfo).attr("data-panelPrice"));
                }
            }
            panelHtml += ' <li class="list-item" style="display:none;>';
            panelHtml += '  <div class="prod">';
            panelHtml += '  	<p class="prodPrice_' + i + '">' + format.num(prodPrice) + '원</p>';
            panelHtml += '  </div>';
            panelHtml += ' </li>';

            panelHtml += '</ul>';
        }
    }

    // 냉장고 키트 조건
    var objFirst = $("#sortable").find("div.preview-model");
    if (objFirst.length > 1) {
        var dataFirstInfo = $(objFirst).eq(0).attr("id");
        if ($("#" + dataFirstInfo).attr('data-upDep') != 'F/P') {
            var kitCbmGb = $("#" + dataFirstInfo).attr('data-cbmGb');
            var kitCd = $("#" + dataFirstInfo).attr('data-kitCd');
            var kitPrice = $("#" + dataFirstInfo).attr('data-kitPrice');
            var kitCnt = objFirst.length - 1;

            if (kitCbmGb.indexOf('A') > -1 || kitCbmGb.indexOf('C') > -1) {
                // 냉장고 키트 가격표
                kitHtml += '<ul class="price-list__content" id="kitByPanel">';
                kitHtml += '	<li class="list-item__kit">';
                kitHtml += '		<div class="info-text-box">';
                kitHtml += '			<p class="title-text">';
                kitHtml += '               페어키트  ' + kitCd + '  ';
                kitHtml += '				<button class="btn-tooltip small" onclick="event.preventDefault(); message.pairKit();"></button>';
                kitHtml += '				<span class="spinner-box pd-spinner goods-count">';
                kitHtml += '	    			<a href="javascript:void(0);" class="count count-miner" id="pd-goods-count-miner">감소</a>';
                kitHtml += '					<label for="countPrd" class="blind">구매수량</label><input type="text" class="number count-prd" id="countPrd" onchange="changeCnt();" value="' + kitCnt + '" data-max-qty="" data-min-ord-qty="">';
                kitHtml += '					<a href="javascript:void(0);" class="count count-plus" id="pd-goods-count-plus">증가</a>';
                kitHtml += '				</span>';
                kitHtml += '			</p>';
                kitHtml += '		</div>';
                kitHtml += '		<div class="price-text-box">';
                kitHtml += '			<p class="price-text">' + format.num(kitPrice * kitCnt) + '원</p>';
                kitHtml += '		</div>';
                kitHtml += '	</li>';
                kitHtml += '</ul>';

                allPrice += parseInt(kitPrice * kitCnt);
            }
        }
    }
    html += panelHtml;
    html += kitHtml;

    // 냉장고 총 가격
    html += '<div class="price-list__total">';
    html += '<div class="info-text-box">';
    html += ' <p class="total-info-text">';
    html += '  <span class="bold fs18">결제예정금액</span>(혜택가)';
    html += ' </p>';
    html += '</div>';
    html += ' <div class="price-text-box">';
    html += ' <p class="total-price-text">';
    html += '				<span class="bold fs28" id="bespoke_all_price">' + format.num(allPrice) + '</span>원';
    html += ' </p>';
    html += '</div>';
    html += '</div>';

    $("#complete_panel_info").append(html);
    $("#bespoke_total_amt").text(format.num(allPrice));

    var refCnt = $("#sortable").find(".preview-model").length;
    for (var i = 0; i < refCnt; i++) {
        var prodPrc = $(".prodPrice_" + i).text();
    }
}

// 키트 삭제 FUNC
function fncDeleteKit(kitPrice) {

    messager.data.kitPrice = kitPrice;
    var msg = "키트를 삭제하시겠습니까?";
    messager.confirmCancel(msg, "예", "아니오", function () {
        var lastProdPrice = $("#bespoke_all_price").text().replaceAll(",", "");
        var kitPrice = messager.data.kitPrice;

        // 키트 전체 삭제
        $("#kitByPanel").remove();

        // 비스포크 냉장고 가격 (합산 가격 - 키트 전체 가격)
        var bespokeSumPrice = parseInt(lastProdPrice) - parseInt(kitPrice);

        $("#bespoke_all_price").text(format.num(bespokeSumPrice));
        $("#bespoke_total_amt").text(format.num(bespokeSumPrice));
    }, function () { });
}

// 저장하기 성공
function fncGetMyModelData(data, dataStep) {
    $("#myMakeWrap").empty();

    fncMyModelInfo();
}


var SaveData = {
    view: false,
    deleteId: '',
    SetHeader: function (id, data) {
        var htmlSource = '';

        if (data.existYn == "Y") {
            htmlSource = '<article class="my-make__content" id="' + id + '">';
        }
        else {
            htmlSource = '<article class="my-make__content is-disabled" id="' + id + '"><span class="soldout-text">현재 미판매중인 상품입니다.</span>';
        }

        return htmlSource;
    },
    SetModel: function (id, data) {
        var htmlSource = '';
        var refCnt = data.length;		// 냉장고 갯수

        htmlSource += '<div class="my-make__model">';
        for (var i = 0; i < refCnt; i++) {
            var doorCnt = data[i].doorCnt;
            var choice = 'choice';
            var colorChip = '';
            var dataType = data[i].dataType;
            var imgUrl = data[i].imgUrl;
            var department = data[i].department;
            var style = '';
            var colorCode = '';
            var door = '';
            colorCode = data[i].colorCode;
            if (department == "IF/S" || department == "IK/F") {

                if (colorCode != undefined && colorCode != null && colorCode != '') {
                    if (dataType != "5door_chef" && dataType != "4door_chef") {  // ?
                        imgUrl = imgUrl.replace(".png", "") + "_" + colorCode.replace("#", "") + ".png";
                    }
                }
            }
            else {

                if (colorCode != undefined && colorCode != null && colorCode != '') {
                    if (dataType == "4door_family") {
                        imgUrl = imgUrl.replace(".png", "") + "_" + colorCode.replace("#", "") + ".png";
                    }
                }
            }

            if (dataType.indexOf("kimchi") > -1 && doorCnt > 2) {
                door = doorCnt + "k";
            }
            else if (dataType.indexOf("slim") > -1 && doorCnt == 1 ||
                (dataType.indexOf("il_") < 0 && dataType.indexOf("1door_wine") > -1) && doorCnt == 1) {
                door = doorCnt + "s";
            }
            else if (dataType.indexOf("family") > -1 && doorCnt >= 3) {
                door = "4f";
            }
            else if (dataType.indexOf("autoview") > -1 && doorCnt == 3) {
                door = "4sc";
            }
            else if (dataType.indexOf("dualautoview") > -1 && doorCnt == 2) {
                door = "4dc";
            }
            else {
                door = doorCnt;
            }

            htmlSource += '	<div class="preview-model dr' + door + '">';

            htmlSource += '<div class="model">';
            htmlSource += '<div class="model-img ' + bespokeBase.getHandle(data[i].prdMdl) +'">';	// 1도어 손잡이 냉장고 모델 처리
            htmlSource += '			<img src="' + imgUrl + '" alt="">';
            htmlSource += '		</div>';
            var door = data[i].data;
            for (var cnt = 0; cnt < doorCnt; cnt++) {
                colorChip = '';
                var rgbColor = door[cnt].rgbColor;

                if (rgbColor != undefined && rgbColor != null && rgbColor != '' && rgbColor != ' ') {
                    if (rgbColor.indexOf("#") > -1) {
                        style = ' background-color: ' + rgbColor + ';';
                    }
                    else {
                        colorChip = replaceUrl(door[cnt].panelMdl) + this.DoorCd("1", doorCnt, cnt, dataType);

                        if (colorChip != "" && colorChip != "undefined" && colorChip != undefined && colorChip != null && colorChip != ".png" && colorChip != " .png") {
                            style = ' background-image: url(\'https://images.samsung.com/kdp/bespoke/images/v3/door/' + colorChip.toLowerCase() + '\');';
                        }
                        else {
                            style = '';
                        }
                    }
                } else {
                    colorChip = replaceUrl(door[cnt].panelMdl) + this.DoorCd("1", doorCnt, cnt, dataType);

                    if (colorChip != "" && colorChip != "undefined" && colorChip != undefined && colorChip != null && colorChip != ".png" && colorChip != " .png") {
                        style = ' background-image: url(\'https://images.samsung.com/kdp/bespoke/images/v3/door/' + colorChip.toLowerCase() + '\');';
                    }
                    else {
                        style = '';
                    }

                }
                htmlSource += '		<div class="dr-' + parseInt(cnt + 1) + ' ' + choice + '" style="' + style + '"></div>';
            }
            htmlSource += '	</div>';
            htmlSource += '	</div>';
        }
        htmlSource += '</div>';

        return htmlSource;
    },
    SetInfo: function (id, data) {
        var htmlSource = '';
        var mdlseq = data[0].cstmSeq;
        var totalPrice = 0;
        for (var i = 0; i < data.length; i++) {
            var readData = data[i];
            var panelData = data[i].data;

            for (var j = 0; j < panelData.length; j++) {
                var temp = panelData[j];
                if (temp.benefitPrice == undefined || temp.benefitPrice == ""
                    || temp.benefitPrice == null || parseInt(temp.benefitPrice) == "NaN"
                    || temp.benefitPrice == "undefined") {
                    temp.benefitPrice = 0;
                }

                totalPrice += parseInt(temp.benefitPrice);
            }

            if (data[0].bspkPanelYn == "N") {
                if (readData.benefitPrice == undefined || readData.benefitPrice == ""
                    || readData.benefitPrice == null || parseInt(readData.benefitPrice) == "NaN"
                    || readData.benefitPrice == "undefined") {
                    readData.benefitPrice = 0;
                }
                totalPrice += parseInt(readData.benefitPrice);
            }
        }

        htmlSource += '<div class="my-make__info">';
        htmlSource += '	<p class="text-price">' + format.num(totalPrice) + '<span>원</span></p>';
        htmlSource += '	<button class="btn-underline" onclick="event.preventDefault(); message.readMore(' + this.GetSpecificationData(data) + ');">';
        htmlSource += '	<span class="text">자세히 보기</span>';
        htmlSource += ' </button>';
        htmlSource += ' <button class="btn-round-fill" onclick="event.preventDefault(); SaveData.Buy(' + this.GetSpecificationData(data) + ')">바로 구매하기</button>';
        htmlSource += ' <button class="btn-delete" id="' + id + '" data-id="' + id + '" data-seq="' + mdlseq + '" onclick="event.preventDefault(); SaveData.DeleteCustomData(this.dataset);"><span class="text">삭제하기</span></button>';
        htmlSource += '</div>';

        return htmlSource;

    },
    Buy: function (data) {

        var prdCodeList = '';
        var goodsIdList = '';
        var bspkPanelYn = "N";
        var loc = "";

        var fkitList = "";
        var fkitGoodsList = "";

        for (var i = 0; i < data.length; i++) {

            bspkPanelYn = data[i].bspkPanelYn;
            var doorCnt = data[i].doorCnt;
            var dataType = data[i].dataType;

            if (data[i].prdMdl != null && data[i].prdMdl != "undefined" && data[i].prdMdl != undefined && data[i].prdMdl != " "
                && data[i].prdMdl != "") {
                if (i == 0) {
                    prdCodeList += data[i].prdMdl;
                }
                else {
                    prdCodeList += "@" + data[i].prdMdl;
                }

            }
            if (data[i].goodsId != null && data[i].goodsId != "undefined" && data[i].goodsId != undefined && data[i].goodsId != " "
                && data[i].goodsId != "") {
                if (i == 0) {
                    goodsIdList += data[i].goodsId;
                }
                else {
                    goodsIdList += "," + data[i].goodsId;
                }
            }
            var pData = data[i].data;

            for (var j = 0; j < data[i].data.length; j++) {

                if (pData[j].panelMdl != null && pData[j].panelMdl != "undefined" && pData[j].panelMdl != undefined && pData[j].panelMdl != " "
                    && pData[j].panelMdl != "") {
                    if (pData[j].panelMdl != "RA-C00K1DAA" && pData[j].panelMdl != "RA-C00K1CAA") {
                        if (data[i].data.length == parseInt(j + 1)) {
                            prdCodeList += "^" + pData[j].panelMdl;
                            loc += "," + SaveData.dataColRow(doorCnt, j, dataType);
                        } else {
                            prdCodeList += "^" + pData[j].panelMdl;
                            if (doorCnt > parseInt(j)) {
                                loc += "," + SaveData.dataColRow(doorCnt, j, dataType);
                            }
                        }

                        goodsIdList += "," + pData[j].goodsId;
                    }
                    else {
                        fkitList += "@" + pData[j].panelMdl;
                        fkitGoodsList += "," + pData[j].goodsId;
                    }
                }
            }
        }


        locTypeList = loc;

        if (fkitList != "") {
            prdCodeList += fkitList;
            goodsIdList += fkitGoodsList;
        }

        if (bspkPanelYn == "Y") {
            $('#panelTypeCd').val("SI20");
        }
        else {
            $('#panelTypeCd').val("");
        }

        bspkBuyAjax(prdCodeList, goodsIdList, "buy");
    },
    SetTail: function () {
        var htmlSource = '';

        htmlSource = '</article>';

        return htmlSource;
    },
    GetSpecificationData: function (data) {
        data = JSON.stringify(data).replace(/"/gi, "'");
        return data;
    },
    DeleteCustomData: function (data) {
        var msg = "선택한 제품을 내가 만든 BESPOKE 목록에서 삭제 하시겠습니까?"
        messager.data.id = data.id;
        messager.data.seq = data.seq;

        messager.confirm(msg, "확인", "취소", function () {
            var id = messager.data.id
            var seq = messager.data.seq;
            SaveData.deleteId = id;

            if (loginYn == "Y") {

                var Params = {
                    'seq': seq,
                };

                Tran.SetTranObject(Params);
                Tran.SetDataStep("DeleteSave");
                Tran.Send();
            }
            else {

                var obj = getItemWithExpireTime("saveRef");
                var expireDay = (72 * 60 * 60 * 1000);
                var storageName = 'saveRef';
                var value = obj.myModelInfo;
                var arr = [];

                for (var i = 0; i < value.length; i++) {
                    var temp = value[i];
                    if (temp.cstmSeq != seq) {
                        arr.push(temp);
                    }
                }

                obj.myModelInfo = arr;
                window.localStorage.removeItem(storageName);
                if (obj.myModelInfo.length > 0) {
                    setItemWithExpireTime(storageName, obj, expireDay);
                    obj = getItemWithExpireTime("saveRef");
                    fncExistsGoodsBase(obj);
                    SaveData.SetHtml(obj, "");
                } else {
                    $("#myMakeWrap").children().remove();
                    $(".ref-bespoke__result").hide();
                }
            }
        }, function () { });
    },
    DeleteCallBack: function (data, dataStep) {
        if (data.result == "SUCCESS") {
            var id = this.deleteId;
            $("#" + id).remove();
            this.deleteId = '';

            $("#aticleCnt").text($("#myMakeWrap").children().length);

            if ($("#myMakeWrap").children().length == 0) {
                $(".ref-bespoke__result").hide();
            }

        }
        else {
            var msg = "삭제에 실패하였습니다. 관리자에게 문의하시기 바랍니다.";
            var alertData = {
                title: ""
                , content: msg
                , callBack: ""
                , btnText: "확인"
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return;
        }
    },
    DoorCd: function (data, size, position, dataType) {

        data = parseInt(data);
        size = parseInt(size);
        position = parseInt(position);

        var returnValue = '';

        if (data == 1) {
            position = position + 1;
            returnValue = '.png';
        }
        else {
            returnValue = '';
        }

        switch (size) {
            case 1:
                if (data == 2) {
                    if (position == 1) {
                        returnValue = "한칸";
                    }
                }
                break;
            case 2:
                if (dataType != null && dataType.indexOf("dualautoview") > -1) {
                    if (data == 1) {
                        if (position == 1) {
                            returnValue = "_left.png";
                        }
                        else if (position == 2) {
                            returnValue = "_right.png";
                        }
                    }
                    else if (data == 2) {
                        if (position == 1) {
                            returnValue = "하칸좌";
                        }
                        else if (position == 2) {
                            returnValue = "하칸우";
                        }
                    }
                } else {
	                if (data == 2) {
	                    if (position == 1) {
	                        returnValue = "상칸";
	                    }
	                    else if (position == 2) {
	                        returnValue = "하칸";
	                    }
	                }
                }
                break;
            case 3:
                if (dataType != null && dataType.indexOf("4door_family") > -1) {
                    if (data == 1) {
                        if (position == 1) {
                            returnValue = "_left.png";
                        }
                        else if (position == 2) {
                            returnValue = "_left.png";
                        }
                        else if (position == 3) {
                            returnValue = "_right.png";
                        }
                    }
                    else if (data == 2) {
                        if (position == 1) {
                            returnValue = "상칸좌";
                        }
                        else if (position == 2) {
                            returnValue = "하칸좌";
                        }
                        else if (position == 3) {
                            returnValue = "하칸우";
                        }
                    }

                } else if (dataType != null && dataType.indexOf("autoview") > -1) {
                    if (data == 1) {
                        if (position == 1) {
                            returnValue = "_right.png";
                        }
                        else if (position == 2) {
                            returnValue = "_left.png";
                        }
                        else if (position == 3) {
                            returnValue = "_right.png";
                        }
                    }
                    else if (data == 2) {
                        if (position == 1) {
                            returnValue = "상칸우";
                        }
                        else if (position == 2) {
                            returnValue = "하칸좌";
                        }
                        else if (position == 3) {
                            returnValue = "하칸우";
                        }
                    }

                }  else {
                    if (data == 2) {
                        if (position == 1) {
                            returnValue = "상칸";
                        }
                        else if (position == 2) {
                            returnValue = "중칸";
                        }
                        else if (position == 3) {
                            returnValue = "하칸";
                        }
                    }
                }
                break;
            case 4:
                if (dataType != null && dataType.indexOf("4door_kimchi") > -1) {
                    if (data == 1) {
                        if (position == 1) {
                            returnValue = "_left.png";
                        }
                        else if (position == 2) {
                            returnValue = "_right.png";
                        }
                        else if (position == 3) {
                            returnValue = "_middle.png";
                        }
                        else if (position == 4) {
                            returnValue = "_bottom.png";
                        }
                    }
                    else if (data == 2) {
                        if (position == 1) {
                            returnValue = "상칸좌";
                        }
                        else if (position == 2) {
                            returnValue = "상칸우";
                        }
                        else if (position == 3) {
                            returnValue = "중칸";
                        }
                        else if (position == 4) {
                            returnValue = "하칸";
                        }
                    }
                } else {
                    if (data == 1) {
                        if (position == 1) {
                            returnValue = "_left.png";
                        }
                        else if (position == 2) {
                            returnValue = "_right.png";
                        }
                        else if (position == 3) {
                            returnValue = "_left.png";
                        }
                        else if (position == 4) {
                            returnValue = "_right.png";
                        }
                    }
                    else if (data == 2) {
                        if (position == 1) {
                            returnValue = "상칸좌";
                        }
                        else if (position == 2) {
                            returnValue = "상칸우";
                        }
                        else if (position == 3) {
                            returnValue = "하칸좌";
                        }
                        else if (position == 4) {
                            returnValue = "하칸우";
                        }
                    }

                }
                break;
            default:
                if (data == 1) {
                    if (position == 1) {
                        returnValue = "_left.png";
                    }
                    else if (position == 2) {
                        returnValue = "_right.png";
                    }
                    else if (position == 3) {
                        returnValue = "_left.png";
                    }
                    else if (position == 4) {
                        returnValue = "_right.png";
                    }
                }
                else if (data == 2) {
                    if (position == 1) {
                        returnValue = "상칸좌";
                    }
                    else if (position == 2) {
                        returnValue = "상칸우";
                    }
                    else if (position == 3) {
                        returnValue = "하칸좌";
                    }
                    else if (position == 4) {
                        returnValue = "하칸우";
                    }
                }
                break;
        }

        return returnValue;
    }, dataColRow: function (size, position, dataType) {


        size = parseInt(size);
        position = parseInt(position);

        var returnValue = '';
        var row = "";
        var col = "";
        
        position = position + 1;

        switch (size) {
            case 1:
                if (position == 1) {
                    row = "U";
                    col = "U";
                }
                break;
            case 2:
                if (dataType != null && dataType.indexOf("dualautoview") > -1) {
                    if (position == 1) {
                        row = "B";
                        col = "L";
                    }
                    else if (position == 2) {
                        row = "B";
                        col = "R";
                    }
                } else {
	                if (position == 1) {
	                    row = "U";
	                    col = "U";
	                }
	                else if (position == 2) {
	                    row = "B";
	                    col = "B";
	                }
                }

                break;
            case 3:
                if (dataType != null && dataType.indexOf("4door_family") > -1) {

                    if (position == 1) {
                        row = "U";
                        col = "L";
                    }
                    else if (position == 2) {
                        row = "B";
                        col = "L";
                    }
                    else if (position == 3) {
                        row = "B";
                        col = "R";
                    }
                } else if (dataType != null && dataType.indexOf("autoview") > -1) {

                    if (position == 1) {
                        row = "U";
                        col = "R";
                    }
                    else if (position == 2) {
                        row = "B";
                        col = "L";
                    }
                    else if (position == 3) {
                        row = "B";
                        col = "R";
                    }
                } else {
                    if (position == 1) {
                        row = "U";
                        col = "U";
                    }
                    else if (position == 2) {
                        row = "M";
                        col = "M";
                    }
                    else if (position == 3) {
                        row = "B";
                        col = "B";
                    }
                }
                break;
            case 4:
                if (dataType != null && dataType.indexOf("4door_kimchi") > -1) {
                    if (position == 1) {
                        row = "U";
                        col = "L";
                    }
                    else if (position == 2) {
                        row = "U";
                        col = "R";
                    }
                    else if (position == 3) {
                        row = "M";
                        col = "M";
                    }
                    else if (position == 4) {
                        row = "B";
                        col = "B";
                    }
                } else {
                    if (position == 1) {
                        row = "U";
                        col = "L";
                    }
                    else if (position == 2) {
                        row = "U";
                        col = "R";
                    }
                    else if (position == 3) {
                        row = "B";
                        col = "L";
                    }
                    else if (position == 4) {
                        row = "B";
                        col = "R";
                    }

                }
                break;
            default:
                if (position == 1) {
                    row = "U";
                    col = "L";
                }
                else if (position == 2) {
                    row = "U";
                    col = "R";
                }
                else if (position == 3) {
                    row = "B";
                    col = "L";
                }
                else if (position == 4) {
                    row = "B";
                    col = "R";
                }
                break;
        }
        returnValue = row + col;
        return returnValue;
    },
    saveLength: 0,
    SetHtml: function (data, dataStep) {
        var aticleCnt = data.myModelInfo.length;   // 5
        var modelInfo = data.myModelInfo;
        var arr = new Array();
        var obj = new Object();
        var seq = 0;
        var goodsExistYn = Cooler.goodsExistYn;
        for (var i = 0; i < aticleCnt; i++) {
            var temp = modelInfo[i];
            // 0, 1  2,3,4 
            if (i == 0) {
                iicstmSeq = temp.cstmSeq;
            } else {
                if (iicstmSeq != temp.cstmSeq) {
                    obj["savedata" + seq] = arr;
                    arr = new Array();
                    iicstmSeq = temp.cstmSeq;
                    seq++;
                }
            }
            if (temp.cstmSeq > iicstmSeq) {
                this.saveLength = temp.cstmSeq;
            }
            arr.push(temp);

            if (i == parseInt(aticleCnt - 1)) {
                obj["savedata" + seq] = arr;
            }
        }

        var htmlSource = '';

        $("#aticleCnt").text(parseInt(seq + 1));
        for (var cnt = 0; cnt < seq + 1; cnt++) {
            var id = "savedata" + cnt;

            var existYn = goodsExistYn.resultData[cnt];
            obj[id].existYn = existYn;

            htmlSource += this.SetHeader(id, obj[id]);
            htmlSource += this.SetModel(id, obj[id]);
            htmlSource += this.SetInfo(id, obj[id]);
            htmlSource += this.SetTail(id, obj[id]);

            $("#myMakeWrap").html(htmlSource);
        }

        Cooler.goodsExistYn = new Object();
        $(".ref-bespoke__result").show();
    },//bespokeMyModelAdd
    bespokeMyModelAdd: function () {

        if (parseInt($("#aticleCnt").text()) > 2 && $(".ref-bespoke__result").css("display") == "block" && confirmYn != 'Y') {
            var msg = "저장 공간이 부족하여 더 담을 수 없습니다. 삭제하고 담아주세요.";
            var alertData = {
                title: ""
                , content: msg
                , callBack: ""
                , btnText: "확인"
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return false;
        }

        // [ { 냉장고 : 모델명 , 패널 : [모델명 , 모델명 ...] , 패키지 : [모델명 , 모델명.... ] } , { 냉장고 :모델명 , 패널 : [모델명 , 모델명 ...] , 패키지 : [모델명 , 모델명.... ] } , 키트 : [키트명 : 키트명]]
        var $prev_model_cnt = $("#sortable").find(".preview-model").length;
        var kitCd = $("#sortable").children('.preview-model').eq(0).attr("data-kitCd")
        var kitPrice = $("#sortable").children('.preview-model').eq(0).attr("data-kitprice");
        var kitgoodsId = $("#sortable").children('.preview-model').eq(0).attr("data-kitgoodsid");
        this.saveLength++;
        var dataArr = [];

        for (var i = 1; i <= $prev_model_cnt; i++) {
            var refId = $("#sortable").find(".preview-model").eq(i - 1).attr("data-id");
            var saveData = {};

            var mdlCode = $("#" + refId).attr("data-module");
            var mdlType = $("#" + refId).attr("data-type");
            var mdlPrice = $("#" + refId).attr("data-price");
            var mdlDoorCnt = $("#" + refId).attr("data-doorcnt");
            var dataType = $("#" + refId).attr("data-type");
            var typeName = $("#" + refId).attr("data-typename");
            var goodsId = $("#" + refId).attr("data-goodsid");
            var imgUrl = $("#" + refId).find(".model-img").children().attr("src")
            // 교체용 패널 여부
            var bspkPanelYn = $("#" + refId).attr("data-updep") == "F/P" ? "Y" : "N";
            var $panel = $("#" + refId).find(".model > div");

            var prdMap = [];

            for (var j = 1; j < $panel.length; j++) {
                var panelData = {};
                panelData.panelMdl = $($panel).eq(j).attr("data-panelmdl") != undefined ? $($panel).eq(j).attr("data-panelmdl") : "";
                panelData.benefitPrice = $($panel).eq(j).attr("data-panelprice") != undefined ? $($panel).eq(j).attr("data-panelprice") : 0;
                panelData.goodsId = $($panel).eq(j).attr("data-goodsId") != undefined ? $($panel).eq(j).attr("data-goodsId") : "";
                panelData.rgbColor = $($panel).eq(j).attr("data-colordata") != undefined ? $($panel).eq(j).attr("data-colordata") : "";
                panelData.prdNm = $($panel).eq(j).attr("data-colornm") != undefined ? $($panel).eq(j).attr("data-colornm") : "";
                panelData.row = $($panel).eq(j).attr("data-row");
                panelData.col = $($panel).eq(j).attr("data-col");
                panelData.pstNo = j;
                panelData.cstmPrdSeq = i;
                prdMap.push(panelData);
            }

            if (bspkPanelYn == 'N') {
                var dataAcc = JSON.parse($("#" + refId).attr("data-acc"));
                $.each(dataAcc.package, function (k, accObj) {
                    if (accObj.pkgmdl != undefined && accObj.pkgmdl != '') {
                        var pkgData = {};
                        pkgData.panelMdl = accObj.pkgmdl;
                        pkgData.benefitPrice = accObj.pkgprice != undefined ? accObj.pkgprice : 0;
                        pkgData.prdNm = accObj.pkgnm;
                        pkgData.goodsId = accObj.pkggoodsid;
                        pkgData.pstNo = j;
                        pkgData.cstmPrdSeq = i;
                        prdMap.push(pkgData);
                    }
                });
            }


            if (bspkPanelYn == 'N') {
                if (kitCd != undefined && kitCd != '') {
                    var kitLen = Number($("#countPrd").val());
                    if (kitLen > 0 && i > 1) {
                        if (kitLen - i + 2 > 0) {
                            var kidData = {};
                            kidData.panelMdl = kitCd;
                            kidData.prdNm = "";
                            kidData.benefitPrice = kitPrice != undefined ? kitPrice : 0;
                            kidData.cnt = kitLen;
                            kidData.goodsId = kitgoodsId;
                            kidData.pstNo = j;
                            kidData.cstmPrdSeq = i;
                            prdMap.push(kidData);
                        }
                    }
                }
            }

            saveData.goodsId = goodsId != undefined ? goodsId : "";
            saveData.prdMdl = mdlCode;
            saveData.dataType = mdlType;
            saveData.benefitPrice = mdlPrice != undefined ? mdlPrice : 0;
            saveData.doorCnt = mdlDoorCnt;
            saveData.bspkPanelYn = bspkPanelYn;
            saveData.data = prdMap;

            saveData.imgUrl = imgUrl;
            saveData.dataType = dataType;
            saveData.goodsNm = typeName;
            saveData.cstmSeq = this.saveLength;

            dataArr.push(saveData);
        }

        if (loginYn == 'N') {
            var expireDay = (72 * 60 * 60 * 1000);
            var key = '';
            var storageName = confirmYn == 'Y' ? 'loginSaveRef' : 'saveRef';

            for (var i = 0; i < window.localStorage.length; i++) {
                if (window.localStorage.key(i) == storageName) {
                    key = storageName;
                }
            }

            var obj = new Object();

            if (key == 'saveRef') {
                const value = window.localStorage.getItem(storageName);

                var data = JSON.parse(value);
                var cnt = data.value.myModelInfo.length;
                var saveArr = [];

                for (var i = 0; i < cnt; i++) {
                    var objVal = data.value.myModelInfo[i];
                    saveArr.push(objVal);
                }


                for (var i = 0; i < dataArr.length; i++) {
                    saveArr.push(dataArr[i]);
                }

                obj.myModelInfo = saveArr;
                window.localStorage.removeItem(storageName);
                setItemWithExpireTime(storageName, obj, expireDay);

            } else {
                obj.myModelInfo = dataArr;
                setItemWithExpireTime(storageName, obj, expireDay);
            }
            var value = getItemWithExpireTime(storageName);
            fncExistsGoodsBase(value);
            SaveData.SetHtml(value, "");

        } else {

            fncMyModelAdd(dataArr);
        }
    }
};




// 만료 시간과 함꼐 데이터를 저장
function setItemWithExpireTime(keyName, keyValue, tts) {
    // localStrorage에 저장할 객체
    const obj = {
        value: keyValue,
        expire: Date.now() + tts
    }

    // 객체를 JSON 문자열로 반환
    const objString = JSON.stringify(obj);

    window.localStorage.setItem(keyName, objString);

}


// 만료 시간을 체크하며 데이터 읽기
function getItemWithExpireTime(keyName) {

    // localStorage 값 읽기
    const objString = window.localStorage.getItem(keyName);

    // null 체크
    if (!objString) {
        return null
    }

    const obj = JSON.parse(objString);

    // 현재 시간과 localStorage의 expire 시간 비교
    if (Date.now() > obj.expire) {
        window.localStorage.removeItem(keyName);

        return null;
    }

    // 만료기간이 남아있는 경우 , value 리턴
    return obj.value;

}


function fncGetExistsGoodsBase(data, step) {
    Cooler.goodsExistYn = data;

}




/*
 * 
 * 냉장고 길이 구하기 로직
 * 
 * data는 아래 형태로 넣어줄것
 * 
 * made by choi
 */
var refrigerator = {

    // 전체 길이 구하는 기능
    getTotalWidth: function () {

        // 현재 추가된 냉장고의 수를 가져옴
        var $prev_model_cnt = $("#sortable").find(".preview-model").length;
        var totalWidth = 0;
        var beforeDoorCnt = 0;
        var infinite = false;
        var normalCnt = 0; // 일반 냉장고

        for (var i = 1; i <= $prev_model_cnt; i++) {
            var refId = $("#sortable").find(".preview-model").eq(i - 1).attr("data-id");
            // 각 냉장고 대수의 id만큼 데이터 처리
            var $refDep = $("#" + refId).attr("data-dep");                  // 냉장고 그룹
            var $refDoorCnt = $("#" + refId).attr("data-doorcnt");       // 도어카운트 ??
            var $refType = $("#" + refId).attr("data-Type");                // 냉장고 유형
            var $refWidth = $("#" + refId).attr("data-width");                // 냉장고 width

            // 프리스탠딩과 C/C 쉐프컬렉션 제외
            if ($refDep != 'F/S' && !($refDep == 'IF/S' && $refType.indexOf('_chef') > -1)) {

                totalWidth += Number($refWidth);       // 냉장고 사이즈 계산

                // 냉장고 사이 사이즈 계산
                if ($refDoorCnt == 1) {  // 1도어일 경우
                    // 인피니트 라인 > Flag
                    if ($refType.indexOf("il_") > -1) {
                        infinite = true;
                    }
                    // 인피니트 라인 아닐 경우
                    else {
                        normalCnt++;
                    }
                }

                // 4도어끼리 붙어 있을 경우
                if (beforeDoorCnt == 4 && $refDoorCnt == 4) {
                    totalWidth += 3;
                }
                // 이전 도어 확인 Flag
                beforeDoorCnt = $refDoorCnt;
            }
            else {
                totalWidth = 0;
                break;
            }
        }

        if (totalWidth != 0) {
            var kitcnt = $prev_model_cnt - 1;
            if (infinite == true) {
                totalWidth = 10 + (Number(kitcnt) * 10) + Number(totalWidth);
            } else {
                totalWidth = 24 + (Number(kitcnt) * 7) + Number(totalWidth);
            }

            // 키친핏 일반 1도어 사이즈 추가
            if (normalCnt != 0) {
                totalWidth = totalWidth + "~" + ((Number(normalCnt) * 8) + Number(totalWidth));
            }
        }

        return totalWidth;
    },
    // 전체 높이 구하는 기능
    getTotalHeight: function () {
        var $prev_model_cnt = $("#sortable").find(".preview-model").length;
        var height = 0;
        var arr = [];

        for (var i = 1; i <= $prev_model_cnt; i++) {
            var refId = $("#sortable").find(".preview-model").eq(i - 1).attr("data-id");
            // 각 냉장고 대수의 id만큼 데이터 처리
            var $refHeight = $("#" + refId).attr("data-height");                // 냉장고 hegiht
            arr.push($refHeight);
        }
        height = Math.max.apply(null, arr);
        return height;
    }
};

var energyFunc = function (energy) {
    if (energy == "-등급") {
        return '<span class="list-tag"></span>';
    } else if (energy !== undefined) {
        return '<span class="list-tag">' + energy + '</span>';
    } else {
        return '<span class="list-tag"></span>';
    }
};
var haveFunc = function (convenience) {
    if (convenience == 'O') {
        return '<p class="text"><span class="have"></span></p>';
    } else if (convenience == '-') {
        return '<p class="text"><span class="empty"></span></p>';
    } else {
        if (convenience == undefined) {
            return '<p class="text"><span class="empty"></span></p>';
        } else {
            if (convenience.trim() == "") {
                return '<p class="text"><span class="empty"></span></p>';
            } else {
                return '<p class="text">' + convenience + '</p>';
            }
        }
    }
};


var messager = {
    data: {
        content: ""
        , btnText: "확인"
        , okBtnText: "확인"
        , cancelBtnText: "취소"
    }
    , setAlertData: function (content, btnText, callback) {
        messager.data.content = content;
        messager.data.btnText = btnText;
        if (callback != undefined) {
            messager.data.callback = callback;
        } else {
            delete messager.data[callback];
        }

    }
    , setConfirmData: function (content, okBtnText, cancelBtnText, callback) {
        messager.data.content = content;
        messager.data.okBtnText = okBtnText;
        messager.data.cancelBtnText = cancelBtnText;
        if (callback != undefined) {
            messager.data.callback = callback;
        } else {
            delete messager.data[callback];
        }

    }
    , alert: function (content, btnText, callback) {
        messager.setAlertData(content, btnText, callback);
        commonAlert(messager.data);
        openLayer('commonAlert');
    }
    , confirm: function (content, okBtnText, cancelBtnText, callback, closeCallback) {
        messager.setConfirmData(content, okBtnText, cancelBtnText, callback);
        messager.data.closeCallback = closeCallback;
        commonConfirm(messager.data);
        openLayer('commonConfirm');
    }
    , confirmCancel: function (content, okBtnText, cancelBtnText, callback, closeCallback) {
        messager.setConfirmData(content, okBtnText, cancelBtnText, callback);
        messager.data.closeCallback = closeCallback;
        commonConfirm(messager.data);
        openLayer('commonConfirm');
    }
};

var moveNextStep = function ($el) {
    var idx = $($el).index(),
        isMobile = window.innerWidth <= 768 ? true : false;
    var department = $("#btnStep1 > li.is-active").attr("data-dep");

    switch (parseInt(idx)) {
        case 0:
            if (department == "F/P") {
                var step = '#step2_by_releaseYear .menu-step__head';
            } else {
                var step = '#step2_by_product .menu-step__head';
            }
            break;
        case 1:

            if (department == "F/P") {
                var step = '#step2_by_product .menu-step__head';
            }

            break;
        case 2:
            if (department == "F/P") {
                var step = '#product_color_open .menu-step__head';
            } else {
                var step = '#product_model_open .menu-step__head';
            }
            break;
        case 3:
            var step = '#product_color_open .menu-step__head';
            break;
        default:
            var step = '#step1_menu .menu-step__head';
            break;
    }
    var header = $(".ref-bespoke__head").height();
    var mobile_header = $("#bespoke").height();
    var samsung_header = $("#header").height();

    if (isMobile) {
        var offset = $(step).offset().top - mobile_header + samsung_header + $('body').scrollTop(),
            moving = offset;
    } else {
        var offset = $(step).offset().top - header + $('.ref-bespoke-menu').scrollTop(),
            moving = offset;
    }

    $('html,body').animate({ scrollTop: moving }, 300);
};






// 패널 위치 정보
var locTypeList = "";
// 패널 goodsId
var goodsIdList = "";
// 패키지 값
var pkgId = "";
var pkgGoodsId = "";
var pkgMdl = "";

// 바로 구매하기, 장바구니
var dirbuyNow = function (type) {
    // 리스트 초기화
    locTypeList = "";
    goodsIdList = "";

    var visibleLength = $("#sortable > .preview-model").length;
    // 넘길 데이터
    var lastData = "";

    for (var i = 1; i <= visibleLength; i++) {
        // 패키지 정보 초기화
        pkgId = "";
        pkgGoodsId = "";
        pkgMdl = "";

        // 각각의 냉장고 id
        var $refId = $("#sortable").find(".preview-model").eq(i - 1).attr("data-id");
        var department = $("#" + $refId).attr("data-updep");

        if (department != 'F/P') {
            // 교체용 패널이 아닐시에 bspkGrpKeys 세팅
            if (i == 1) {
                $("#complete_panel_info > ul.price-list__content").each(function (idx, item) {
                    var itemList = $(this).find(".list-item__ref");
                    // 제품 코드
                    var dirbuyName = $(itemList).find(".title-text").text();
                    if (dirbuyName == null || dirbuyName == "" || dirbuyName == undefined) {
                        // 키트 체크
                        var kitCnt = Number($("#countPrd").val());
                        if (kitCnt > 0) {
                            var kitCd = $("#sortable").find(".preview-model").eq(0).attr("data-kitcd");
                            for (var j = 0; j < Number(kitCnt); j++) {
                                //박준우 비스포크 구성품->본품  ^를 @로 수정.
                                lastData = lastData + "@" + kitCd;
                            }
                        } else {
                            // 패키지 넣어주기
                            /* if (pkgMdl != null || pkgMdl != "") {
                                pkgMdl = "^" + pkgMdl;
                                lastData += pkgMdl;
                            } */
                        }
                    } else {
                        var panList = $(this).find(".list-item");
                        // 패널 코드
                        var panbuyName = "";
                        if (dirbuyName != null || dirbuyName != undefined) {
                            $(panList).each(function () {
                                panbuyName += "^";
                                panbuyName += $(this).find(".title-text").text();
                            });
                            dirbuyName += panbuyName;
                            if (idx > 0) {
                                dirbuyName = "@" + dirbuyName;
                            }
                            lastData += dirbuyName;
                        }
                    }
                });
            }
        } else {
            var dirbuyName = $("#" + $refId).attr("data-module");
            if (i == 1) {
                dirbuyName = dirbuyName;
            } else {
                dirbuyName = "@" + dirbuyName;
            }
            // 패널일때 패널 정보 쌓아주기
            $("#" + $refId).find(".choice").each(function () {
                var $penId = $(this).attr("id");
                var panName = $(this).attr("data-panelmdl");
                dirbuyName += "^" + panName;

                // 패널 위치 정보값
                var row = $("#" + $penId).attr("data-row");
                var col = $("#" + $penId).attr("data-col");
                var loc = row + col;
                if (locTypeList == null || locTypeList == "") {
                    locTypeList += loc;
                } else {
                    loc = ", " + loc;
                    locTypeList += loc;
                }
            });
            lastData += dirbuyName;
        }

        // goodsId 세팅
        var goodsId = "";
        goodsId = $("#" + $refId).attr("data-goodsId");
        if (goodsId == null || goodsId == "") {
            var msg = "goodsId가 없습니다.";
            var alertData = {
                title: ""
                , content: msg
                , callBack: ""
                , btnText: "확인"
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return false;
        } else {
            if (goodsIdList == null || goodsIdList == "") {
                goodsIdList += goodsId;
            } else {
                goodsId = ", " + goodsId;
                goodsIdList += goodsId;
            }
        }
        // 패널이 아닐때 goodsId
        if (department != 'F/P') {
            for (var j = 1; j <= $("#" + $refId).attr("data-doorcnt"); j++) {

                goodsId = $("#" + $refId + "_" + j).attr("data-goodsId");
                goodsId = ", " + goodsId;
                goodsIdList += goodsId;
            }

            // 패키지 체크
            var dataAcc = JSON.parse($("#" + $refId).attr("data-acc"));
            $.each(dataAcc.package, function (k, accObj) {
                pkgId = accObj.id;
                // 해당 패키지 아이디가 있을때 패키지 모델코드, 패키지 goodsId 세팅(goodsId가 없을때 alert)
                if (pkgId != "" || pkgId != null || pkgId != undefined) {
                    pkgGoodsId = accObj.pkggoodsid;
                    pkgMdl = accObj.pkgmdl;
                    if (pkgGoodsId == null || pkgGoodsId == "" || pkgGoodsId == undefined) {
                        var alertData = {
                            title: ""
                            , content: msg
                            , callBack: ""
                            , btnText: "확인"
                        };
                        commonAlert(alertData);
                        openLayer('commonAlert');
                        return false;
                    } else {
                        pkgGoodsId = ", " + pkgGoodsId;
                        goodsIdList += pkgGoodsId;
                    }
                }
            });
            // 패널일때 goodsId 세팅
        } else {
            $("#" + $refId).find(".choice").each(function () {
                goodsId = $(this).attr("data-goodsId");
                goodsId = ", " + goodsId;
                goodsIdList += goodsId;
            });
        }

    }
    // kit goodsId 체크
    var kitCnt = Number($("#countPrd").val());
    if (kitCnt > 0) {
        var kitGoodsId = $("#sortable").find(".preview-model").eq(0).attr("data-kitgoodsid");
        var kitcd = $("#sortable").find(".preview-model").eq(0).attr("data-kitcd");

        if (kitCnt != "" || kitCnt != null || Number(kitCnt) > 0 || kitCnt != undefined) {
            if (kitGoodsId == null || kitGoodsId == "" || kitGoodsId == undefined) {
                var msg = "상품 등록되지 않은 모델 번호입니다.(" + kitcd + ")";
                var alertData = {
                    title: ""
                    , content: msg
                    , callBack: ""
                    , btnText: "확인"
                };
                commonAlert(alertData);
                openLayer('commonAlert');
                return false;
            } else {
                for (var j = 0; j < Number(kitCnt); j++) {
                    goodsIdList = goodsIdList + ", " + kitGoodsId;
                }
            }
        }
    }
    bspkBuyAjax(lastData, goodsIdList, type);
};


// TODO : jkjang Buy Ajax 연동
var bspkBuyAjax = function (data, data2, type) {
    var data = data;

    if (data != '' && data2 != '') {
        //20210507 todo 판넬여부 및 위치 array 만들기
        var p_params = {
            nowBuyYn: 'Y',
            bspkGrpKeys: data, // data,
            goodsIds: data2, // ids
            bspkGoodsYn: "",
        };
        if (type == 'cart') {
            p_params.nowBuyYn = 'N';
        }

        var bspkPnlYn = "N";

        // 교체용 패널일때 세팅된 locType값을 파라미터에 추가해 준다.
        if ($('#panelTypeCd').val() != "AS" && $('#panelTypeCd').val() != "") {
            bspkPnlYn = "Y";
            p_params.bspkPnlYn = bspkPnlYn;

            if (locTypeList != null || locTypeList != undefined || locTypeList == "") {
                p_params.locType = locTypeList;
            }

        } else {
            p_params.bspkPnlYn = bspkPnlYn;
            p_params.bspkGoodsYn = "Y";
        }

        var surl = "xhr/order/insertCartBespoke";
        surl = fncConvertUrl(surl);

        var option = {
            url: surl,
            dataType: "json",
            type: "POST",
            data: p_params,
            success: function (result) {

                if (typeof (result.exCode) !== 'undefined') {
                    var alertData = {
                        title: ""
                        , content: result.exMsg
                        , callBack: ""
                        , btnText: "확인"
                    };
                    commonAlert(alertData);
                    openLayer('commonAlert');
                    return false;
                } else {
                    if (type == "cart") {
                        var msg = "제품이 장바구니에 추가되었습니다.<br>(현재 총 $cnt$개의 제품이 장바구니에 담겼습니다.)";
                        var $cnt = result.cartCnt;
                        msg = msg.replace("$cnt$", $cnt);

                        messager.confirm(msg, "장바구니 가기", "쇼핑 계속하기", function () {
                            // 장바구니 가기
                            location.href = fncConvertUrl("cart/");
                        }, function () {

                        });
                    } else {
                        // type 이 cart가 아닐때는 바로 구매하기 화면으로 넘어감.
                        var form = document.createElement('form');

                        form.setAttribute('action', fncConvertUrl("order/"));
                        form.setAttribute('target', "_self");
                        form.setAttribute('method', 'post');

                        document.body.appendChild(form);
                        form.submit();
                    }
                }

            },
            error: function (response, status, error) {
                alert('오류');
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("ajax", true);
            },
            complete: function () { }
        };
        $.ajax(option);
    }

};
$(document).ready(function () {


    $(document).on("click", "#originColor", function () {
        var selectDepartment = $('#btnStep1 > li.is-active').attr('data-dep');
        if (selectDepartment != "F/P") {
            Cooler.GetProductColorMapInfo(Cooler.modelData);
        }
        if(selectDepartment == "F/P" && $("#btnStep2ByYear >  button[data-seltype='SI19']").hasClass("is-active")){
        	let alertData = {
                content: "19년도 모델은 Original 컬러를 선택 할 수 없습니다."
                , callback: function () {
                    $("#360Color").trigger("click");
                }
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return;
        }
        $("#tab1").show();
        $("#tab2").hide();
    });
    $(document).on("click", "#360Color", function () {
        var prism360Yn = $("input:radio[name=step3_model]:checked").attr('data-prism360Yn');
        if (prism360Yn == 'N' && $(this).attr("rel") == 'tab2') {
            let alertData = {
                content: "Infinite Line에서는 Prism 360 컬러를 선택 할 수 없습니다."
                , callback: function () {

                $("#originColor").trigger("click");
                }
            };
            commonAlert(alertData);
            openLayer('commonAlert');
            return;
        }
        $("#tab2").show();
        $("#tab1").hide();
        Cooler.GetProduct360ColorMapInfo(prism360Yn);
    });

    $(document).on("click", "#btnStep2ByYear > button", function () {
        $("#product_color_open").addClass("is-disabled");
        Cooler.ViewHTMLInfo();

        if ($(this).hasClass(sDISABLED)) {
            return;
        }

        $("#btnStep2ByYear > button").removeClass(sACTIVE);
        $(this).addClass(sACTIVE);
        $("#step2_by_product").removeClass(sDISABLED);

        var dataYear = $(this).attr('data-year');
        if (dataYear == '2019') {
            $('#panelTypeCd').val('SI19');
        } else if (dataYear == '2020') {
            $('#panelTypeCd').val('SI20');
        }

        $("#step2_append_html").empty();

        if (Cooler.panelClick == false) {
            var $self = $("#step2_by_releaseYear");
            moveNextStep($self);
        }

        fncProductTypeInfo();
    });

    // 키트 +
    $(document).on("click", "#pd-goods-count-plus", function () {
        // 상품 수량
        var countPrd = $("#countPrd").val();
        // 최대 수량
        var maxCnt = $("#sortable").find(".preview-model").length - 1;
        $("#countPrd").attr("data-max-qty", maxCnt);

        countPrd = Number(countPrd) + 1;
        if (countPrd > Number(maxCnt)) {
            var msg = "최대 수량입니다.";
            messager.alert(msg, "확인", function () {
                return false;
            });
        } else {
            $("#countPrd").val(countPrd);
            fncKitPrice();
        }
    });

    // 키트 -
    $(document).on("click", "#pd-goods-count-miner", function () {
        // 상품 수량
        var countPrd = $("#countPrd").val();
        // 최소 수량
        var minCnt = 0;

        countPrd = Number(countPrd) - 1;
        if (countPrd < Number(minCnt)) {
            var msg = "최소 수량입니다.";
            messager.alert(msg, "확인", function () {
                return false;
            });
        } else {
            $("#countPrd").val(countPrd);
            fncKitPrice();
        }
    });

});

// 명세서 totalPrice
function fncTotalPrice() {
    var totalPrice = 0;
    var prdPrice;
    var kitPrice;
    var priceLen = $(".list-item__title").length;
    for (var i = 0; i < priceLen; i++) {
        prdPrice = $(".prodPrice_" + i).text().replaceAll(",", "").replace("원", "");
        totalPrice += Number(prdPrice);
    }

    // 키트 가격
    kitPrice = $("#kitByPanel").find(".price-text").text().replaceAll(",", "").replace("원", "");
    totalPrice += Number(kitPrice);

    $("#bespoke_all_price").text(format.num(totalPrice));
    $("#bespoke_total_amt").text(format.num(totalPrice));
}

// 키트 수량 변경시 금액 계산
function fncKitPrice() {
    var kitCnt = $("#countPrd").val();
    var kitPrice = $("#sortable").find(".preview-model").eq(0).attr("data-kitprice");
    var totalPrice = format.num(kitCnt * kitPrice) + "원";
    $("#kitByPanel").find(".price-text").text(totalPrice);
    fncTotalPrice();
}

// 키트값 바뀌면 값 체크
function changeCnt() {
    // 현재 키트 갯수
    var curCnt = $("#countPrd").val();
    var maxCnt = $("#sortable").find(".preview-model").length - 1;
    if (Number(curCnt) > maxCnt) {
        var msg = "사용가능한 키트 갯수 초과했습니다.";
        messager.alert(msg, "확인", function () {
            var maxCnt = $("#sortable").find(".preview-model").length - 1;
            $("#countPrd").val(maxCnt);
            fncKitPrice();
            return false;
        });
    }
    if (Number(curCnt) < 0) {
        var msg = "키트 갯수가 0보다 작을 수 없습니다.";
        messager.alert(msg, "확인", function () {
            $("#countPrd").val(0);
            fncKitPrice();
            return false;
        });
    }
}

// ValidationCheck후에 메소드 호출
function ValidationCheck(type) {
    if (type == 'cart') {
        Cooler.refValid('cart');
    } else if (type == 'buy') {
        Cooler.refValid('buy');
    } else {
        Cooler.refValid('save');
    }
}

function fncStep3Click(index) {

    $("input[name=step3_model]").prop('checked', false);
    $("#model" + index).prop('checked', true);
    var cnt = $("#step3_append_html").find(".list-item").length;
    for (var i = 0; i < cnt; i++) {
        $("#opt_list_item_" + i).hide();
    }
    $("#opt_list_item_" + index).show();
    for (var i = 0; i < cnt; i++) {
        $("#pkg_list_item_" + i).hide();
    }
    $("#pkg_list_item_" + index).show();


    Cooler.SetPkgData();
    // 명세서 기입
    fncSpecification();
}

function _toConsumableArray(arr){
    if(Array.isArray(arr)){
        for(var i=0, arr2 = Array(arr.length); i< arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
    else{
        return Array.from(arr);
    } 
}


