var pointSimulatorInfo = {
    /** 
     *  기초 데이터 초기화
     *
     *  @param anniversaryPoint 보유 창립기념 포인트
     *  @param specialPoint 보유 특별 포인트
     *  @param pointPoicies 포인트 적립 정책
     *                      {
     *                          "S001": {
     *                              "offersetType": "S001",
     *                              "route": "",
     *                              "amtRtDv": "2",
     *                              "pnt": 0.2,
     *                              "memGrade": "",
     *                              "model": ""
     *                          },
     *                          "S002": {
     *                              "offersetType": "S002",
     *                              "route": "",
     *                              "amtRtDv": "2",
     *                              "pnt": 1,
     *                              "memGrade": "K05",
     *                              "model": ""
     *                          },
     *                          "S003": [{
     *                              "offersetType": "S003",
     *                              "route": "D2C",
     *                              "amtRtDv": "1",
     *                              "pnt": 3000,
     *                              "memGrade": "",
     *                              "model": "RWP-TCEWPB1-5y"
     *                          }],
     *                          "S004": [{
     *                              "offersetType": "S004",
     *                              "route": "ESTORE",
     *                              "amtRtDv": "1",
     *                              "pnt": 40000,
     *                              "memGrade": "",
     *                              "model": "",
     *                              "amtFrom": 1000000,
     *                              "amtTo": 2000000
     *                          }]
     *                      }
     *  @param goodsList 상품 내역
     *                   [{
     *                       setCode: "RWP-TCEWPB1-5y",
     *                       mdlCode: "SM-N976NZKAKOO",
     *                       goodsNm: "갤럭시 노트10+ 5G 자급제",
     *                       goodsId: "G000178526",
     *                       salePrice: 826600,
     *                       saleQty: 1,
     *                       compGbCd: "10",
     *                       imgPath:, "/goods/2020/09/17/72dba669-4eb8-4e18-bc12-ddf6cb9e255b.jpg"
     *                       saleAmt: 826600,
     *                       useAnniversaryPoint: 0,
     *                       useSpecialPoint: 0
     *                   }]
     *  @param useAnniversaryPoint 사용 창립기념 포인트 (default=0)
     *  @param useSpecialPoint 사용 특별 포인트 (default=0)
     *  @param usePointGb 포인트 사용 구분 (1:상품 개별 사용, 2: 장바구니 전체 사용) (default=1)
     */
    init: function(anniversaryPoint, specialPoint, pointPoicies, goodsList, useAnniversaryPoint=0, useSpecialPoint=0, usePointGb=1) {
        // 기본 데이터 초기화
        pointSimulatorInfo.anniversaryPoint = anniversaryPoint;         // 보유 창립기념 포인트
        pointSimulatorInfo.specialPoint = specialPoint;                 // 보유 특별 포인트

        pointSimulatorInfo.useAnniversaryPoint = useAnniversaryPoint;   // 사용 창립기념 포인트
        pointSimulatorInfo.useSpecialPoint = useSpecialPoint;           // 사용 특별 포인트

        pointSimulatorInfo.savePointBase = 0;                           // 적립 예정 포인트 (기본 적립)
        pointSimulatorInfo.savePointByGrade = 0;                        // 적립 예정 포인트 (등급별 적립)
        pointSimulatorInfo.savePointByAmt = 0;                          // 적립 예정 포인트 (금액대별 적립)
        pointSimulatorInfo.savePointByGoodsModel = 0;                   // 적립 예정 포인트 (모델별 적립)
        pointSimulatorInfo.savePointByMultiGoods = 0;                   // 적립 예정 포인트 (다품목 적립)

        pointSimulatorInfo.pointPoicies = pointPoicies;                 // 포인트 적립 규칙

        pointSimulatorInfo.goodsList = goodsList;                       // 상품 리스트

        pointSimulatorInfo.usePointGb = usePointGb;                     // 포인트 사용 구분 (1:상품 개별 사용, 2: 장바구니 전체 사용)
        
        pointSimulatorInfo.useMinPoint = 100; 							// 사용 최소 포인트
    },
      
    /** 
     * 사용 포인트 세팅 - 상품 개별 사용
     * 
     * @param goodsList 상품 내역
     *                  [{
     *                      setCode: "RWP-TCEWPB1-5y",
     *                      mdlCode: "SM-N976NZKAKOO",
     *                      goodsNm: "갤럭시 노트10+ 5G 자급제",
     *                      goodsId: "G000178526",
     *                      salePrice: 826600,
     *                      saleQty: 1,
     *                      compGbCd: "10",
     *                      imgPath:, "/goods/2020/09/17/72dba669-4eb8-4e18-bc12-ddf6cb9e255b.jpg"
     *                      saleAmt: 826600,
     *                      useAnniversaryPoint: 100,
     *                      useSpecialPoint: 200
     *                  }]
     */
    setUsePointGoods: function(goodsList) {
        pointSimulatorInfo.usePointGb = '1'; // 포인트 사용 구분 (1:상품 개별 사용, 2: 장바구니 전체 사용)
        pointSimulatorInfo.goodsList = goodsList; // 상품 리스트
        
        // 항목별 사용 포인트 합계 재설정
        let useAnniversaryPoint = 0; // 사용 창립기념 포인트
        let useSpecialPoint = 0; // 사용 특별 포인트
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            useAnniversaryPoint += goodsInfo.useAnniversaryPoint;
            useSpecialPoint += goodsInfo.useSpecialPoint;
        }
        pointSimulatorInfo.useAnniversaryPoint = useAnniversaryPoint;
        pointSimulatorInfo.useSpecialPoint = useSpecialPoint;
    },
    /**
     * 사용 포인트 세팅 - 장바구니 전체
     * 
     * @param useAnniversaryPoint 창립기념 포인트 사용 금액
     * @param useSpecialPoint 특별 포인트 사용 금액
     */
    setUsePointCart: function(useAnniversaryPoint, useSpecialPoint) {
        pointSimulatorInfo.usePointGb = '2'; // 포인트 사용 구분 (1:상품 개별 사용, 2: 장바구니 전체 사용)
        pointSimulatorInfo.useAnniversaryPoint = useAnniversaryPoint;   // 사용 창립기념 포인트
        pointSimulatorInfo.useSpecialPoint = useSpecialPoint;           // 사용 특별 포인트
        
        // 항목별,상품별 사용 포인트 재설정
        //   * 사용 포인트 상품별 분할 처리 규칙
        //     1. 상품 금액 비율만큼 포인트 분배
        //     2. 분배시 원단위 이하 절사
        //     3. 2번 항목에 의해 남은 포인트는 마지막 상품에 합산
        let remainUseAnniversaryPoint = useAnniversaryPoint; // 잔여 포인트 (창림 기념 포인트)
        let remainUseSpecialPoint = useSpecialPoint;     // 잔여 포인트 (특별 포인트)
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            const amountWeight = goodsInfo.saleAmt / pointSimulatorInfo.getTotalSaleAmt(); // 전체 상품 금액 대비 현재 상품의 비율 (가중치)
            
            let currentUseAnniversaryPoint = parseInt(useAnniversaryPoint * amountWeight); // 현재 상품에 적용될 포인트 (창립 기념 포인트)
            let currentUseSpecialPoint = parseInt(useSpecialPoint * amountWeight);         // 현재 상품에 적용될 포인트 (특별 포인트)
            
            // 상품 수량의 배수로만 포인트 사용 가능하도록 나머지 포인트를 차감
            currentUseAnniversaryPoint -= currentUseAnniversaryPoint % goodsInfo.saleQty;
            currentUseSpecialPoint -= currentUseSpecialPoint % goodsInfo.saleQty;
            
            goodsInfo.useAnniversaryPoint = currentUseAnniversaryPoint; // 가중치 적용하여 상품별 사용 포인트 세팅 (창립 기념 포인트)
            goodsInfo.useSpecialPoint = currentUseSpecialPoint;         // 가중치 적용하여 상품별 사용 포인트 세팅 (특별 포인트)
            
            remainUseAnniversaryPoint -= currentUseAnniversaryPoint; // 잔여 포인트 차감 (창립 기념 포인트)
            remainUseSpecialPoint -= currentUseSpecialPoint;         // 잔여 포인트 차감 (특별 포인트)
        }
        pointSimulatorInfo.goodsList[pointSimulatorInfo.goodsList.length-1].useAnniversaryPoint += remainUseAnniversaryPoint;
        pointSimulatorInfo.goodsList[pointSimulatorInfo.goodsList.length-1].useSpecialPoint += remainUseSpecialPoint;
    },
    
    /** 전체 적립금액 */
    getSavePoint: function() {
        return pointSimulatorInfo.savePointBase 
             + pointSimulatorInfo.savePointByGrade 
             + pointSimulatorInfo.savePointByAmt 
             + pointSimulatorInfo.savePointByGoodsModel 
             + pointSimulatorInfo.savePointByMultiGoods;
    },
    /** 전체 매출액 */
    getTotalSaleAmt: function() {
        let retAmt = 0;
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            retAmt += goodsInfo.saleAmt;
        }
        return retAmt;
    },
    /** 포인트 적립 대상 전체 매출액 */
    getTotalSaleAmtForSavePoint: function() {
        let retAmt = 0;
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            retAmt += pointSimulatorInfo.getSaleAmtForSavePoint(goodsInfo);
        }
        return retAmt;
    },
    /** 포인트 적립 대상 전체 매출액 (직판) */
    getTotalSaleAmtForSavePointD2C: function() {
        let retAmt = 0;
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            // 직판 상품인 경우만 누적
            if(goodsInfo.compGbCd == '10') {
                retAmt += pointSimulatorInfo.getSaleAmtForSavePoint(goodsInfo);
            }
        }
        return retAmt;
    },
    /** 포인트 적립 대상 전체 매출액 (삼판) */
    getTotalSaleAmtForSavePointESTORE: function() {
        let retAmt = 0;
        for (const goodsInfo of pointSimulatorInfo.goodsList) {
            // 삼판 상품인 경우만 누적
            if(goodsInfo.compGbCd == '20') {
                retAmt += pointSimulatorInfo.getSaleAmtForSavePoint(goodsInfo);
            }
        }
        return retAmt;
    },
    /** 포인트 적립 대상 매출액 (상품 가격(단가*수량) - 창립 기념 포인트 사용액 - 특별 포인트 사용액) */
    getSaleAmtForSavePoint: function(goodsInfo) {
        return goodsInfo.saleAmt - goodsInfo.useAnniversaryPoint - goodsInfo.useSpecialPoint;
    },
    /** 최대 사용 가능한 창립 기념 포인트 */
    getMaxUsableAnniversaryPoint: function(useSpecialPoint) {
        // 잔여 상품 금액 (상품 전체 판매 금액 - 특별 포인트 사용 금액)
        let remainAmt = pointSimulatorInfo.getTotalSaleAmt() - useSpecialPoint;
        remainAmt = remainAmt > 0 ? remainAmt : 0;
        // 창립 기념 포인트 최대 사용 가능 금액 (창립 기념 포인트와 잔여 상품 금액 중 작은 값)
        return Math.min(pointSimulatorInfo.anniversaryPoint, remainAmt);
    },
    /** 최대 사용 가능한 특별 포인트 */
    getMaxUsableSpecialPoint: function(useAnniversaryPoint) {
        // 잔여 상품 금액 (상품 전체 판매 금액 - 창립 기념 포인트 사용 금액)
        let remainAmt = pointSimulatorInfo.getTotalSaleAmt() - useAnniversaryPoint;
        remainAmt = remainAmt > 0 ? remainAmt : 0;
        // 특별 포인트 최대 사용 가능 금액 (특별 포인트와 잔여 상품 금액 중 작은 값)
        return Math.min(pointSimulatorInfo.specialPoint, remainAmt);
    },

    /**
     * 사용포인트 정합성 체크
     * 
     * @returns 체크 결과
     *          {
     *              code: 0000, // 0000:정상, 그외 오류
     *              errMsg: '',  // 오류시 오류 메시지
     *              errGoodsIdx: null
     *          }
     * @ref code 0000 : 정상
     *           0101 : 상품 금액 초과 (창립 기념 포인트)
     *           0102 : 상품 금액 초과 (특별 포인트)
     *           0103 : 상품 금액 초과 (창립 기념 포인트 + 특별 포인트)
     *           0104 : 최소 사용 포인트 미달 (창립 기념 포인트)
     *           0105 : 최소 사용 포인트 미달 (특별 포인트)
     *           0106 : 수량의 배수 아님 (창립 기념 포인트)
     *           0107 : 수량의 배수 아님 (특별 포인트)
     *           0201 : 보유 포인트 초과 (창립 기념 포인트)
     *           0202 : 보유 포인트 초과 (특별 포인트)
     *           0301 : 상품 금액 초과 (창립 기념 포인트)
     *           0302 : 상품 금액 초과 (특별 포인트)
     *           0303 : 상품 금액 초과 (창립 기념 포인트 + 특별 포인트)
     *           0304 : 최소 사용 포인트 미달 (창립 기념 포인트)
     *           0305 : 최소 사용 포인트 미달 (특별 포인트)
     *           0401 : 보유 포인트 초과 (창립 기념 포인트)
     *           0402 : 보유 포인트 초과 (특별 포인트)
     */
    checkPointValidation: function() {
        let retObj = {
            code: '0000',
            errMsg: '',
            errGoodsIdx: null
        };

		if(pointSimulatorInfo.usePointGb == '1') { // 상품 개별 사용

            // ------------------------------------------
            // 상품별 체크
            // ------------------------------------------
			for(let i=0; i<pointSimulatorInfo.goodsList.length; i++) {
				const goodsInfo = pointSimulatorInfo.goodsList[i];

                // 창립 기념 포인트가 판매가를 초과 했는지 체크
				if(goodsInfo.useAnniversaryPoint > goodsInfo.saleAmt) {
                    retObj.code = '0101';
                    retObj.errMsg = '상품 금액 초과 (창립 기념 포인트)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }

                // 특별 포인트가 판매가를 초과 했는지 체크
				if(goodsInfo.useSpecialPoint > goodsInfo.saleAmt) {
                    retObj.code = '0102';
                    retObj.errMsg = '상품 금액 초과 (특별 포인트)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }

                // 포인트 합산 금액(창립 기념 포인트+특별 포인트)이 판매가를 초과 했는지 체크
				if(goodsInfo.useAnniversaryPoint + goodsInfo.useSpecialPoint > goodsInfo.saleAmt) {
                    retObj.code = '0103';
                    retObj.errMsg = '상품 금액 초과 (창립 기념 포인트 + 특별 포인트)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }

                // 창립 기념 포인트 사용금액이 최소 사용 포인트 이상인지 체크 (100 포인트 부터 사용 가능)
				if(0 < goodsInfo.useAnniversaryPoint && goodsInfo.useAnniversaryPoint < pointSimulatorInfo.useMinPoint) {
                    retObj.code = '0104';
                    retObj.errMsg = '최소 사용 포인트 미달 (창립 기념 포인트 : ' + pointSimulatorInfo.useMinPoint + 'P)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }

                // 특별 포인트 사용금액이 최소 사용 포인트 이상인지 체크 (100 포인트 부터 사용 가능)
				if(0 < goodsInfo.useSpecialPoint && goodsInfo.useSpecialPoint < pointSimulatorInfo.useMinPoint) {
                    retObj.code = '0105';
                    retObj.errMsg = '최소 사용 포인트 미달 (특별 포인트 : ' + pointSimulatorInfo.useMinPoint + 'P)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }
                
                // 창립 기념 포인트 사용금액이 상품 수량의 배수로 포인트를 사용 했는지 체크
                if(goodsInfo.useAnniversaryPoint % goodsInfo.saleQty != 0) {
                    retObj.code = '0106';
                    retObj.errMsg = '수량의 배수 아님 (창립 기념 포인트)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }
                
                // 특별 포인트 사용금액이 상품 수량의 배수로 포인트를 사용 했는지 체크
                if(goodsInfo.useSpecialPoint % goodsInfo.saleQty != 0) {
                    retObj.code = '0107';
                    retObj.errMsg = '수량의 배수 아님 (특별 포인트)';
                    retObj.errGoodsIdx = i;
                    return retObj;
                }
			}


            // 창립 기념 포인트
            if(pointSimulatorInfo.useAnniversaryPoint > pointSimulatorInfo.anniversaryPoint) {
                retObj.code = '0201';
                retObj.errMsg = '보유 포인트 초과 (창립 기념 포인트)';
                return retObj;
            }

            // 특별 포인트
            if(pointSimulatorInfo.useSpecialPoint > pointSimulatorInfo.specialPoint) {
                retObj.code = '0202';
                retObj.errMsg = '보유 포인트 초과 (특별 포인트)';
                return retObj;
            }
        } else if(pointSimulatorInfo.usePointGb == '2') { // 장바구니 전체 사용

            // ------------------------------------------
            // 사용 포인트가 판매가를 초과 했는지 체크
            // ------------------------------------------

            // 창립 기념 포인트가 판매가를 초과 했는지 체크
            if(pointSimulatorInfo.useAnniversaryPoint > pointSimulatorInfo.getTotalSaleAmt()) {
                retObj.code = '0301';
                retObj.errMsg = '상품 금액 초과 (창립 기념 포인트)';
                return retObj;
            }

            // 특별 포인트가 판매가를 초과 했는지 체크
            if(pointSimulatorInfo.useSpecialPoint > pointSimulatorInfo.getTotalSaleAmt()) {
                retObj.code = '0302';
                retObj.errMsg = '상품 금액 초과 (특별 포인트)';
                return retObj;
            }
            
            // 포인트 합산 금액(창립 기념 포인트+특별 포인트)이 판매가를 초과 했는지 체크
            if(pointSimulatorInfo.useAnniversaryPoint + pointSimulatorInfo.useSpecialPoint > pointSimulatorInfo.getTotalSaleAmt()) {
                retObj.code = '0303';
                retObj.errMsg = '상품 금액 초과 (창립 기념 포인트 + 특별 포인트)';
                return retObj;
            }

            // 창립 기념 포인트 사용금액이 최소 사용 포인트 이상인지 체크 (100 포인트 부터 사용 가능)
			if(0 < pointSimulatorInfo.useAnniversaryPoint && pointSimulatorInfo.useAnniversaryPoint < pointSimulatorInfo.useMinPoint) {
                retObj.code = '0304';
                retObj.errMsg = '최소 사용 포인트 미달 (창립 기념 포인트 : ' + pointSimulatorInfo.useMinPoint + 'P)';
                return retObj;
            }

            // 특별 포인트 사용금액이 최소 사용 포인트 이상인지 체크 (100 포인트 부터 사용 가능)
			if(0 < pointSimulatorInfo.useSpecialPoint && pointSimulatorInfo.useSpecialPoint < pointSimulatorInfo.useMinPoint) {
                retObj.code = '0305';
                retObj.errMsg = '최소 사용 포인트 미달 (특별 포인트 : ' + pointSimulatorInfo.useMinPoint + 'P)';
                return retObj;
            }
            

            // ------------------------------------------
            // 사용 포인트가 보유 포인트를 초과 했는지 체크
            // ------------------------------------------

            // 창립 기념 포인트
            if(pointSimulatorInfo.useAnniversaryPoint > pointSimulatorInfo.anniversaryPoint) {
                retObj.code = '0401';
                retObj.errMsg = '보유 포인트 초과 (창립 기념 포인트)';
                return retObj;
            }

            // 특별 포인트
            if(pointSimulatorInfo.useSpecialPoint > pointSimulatorInfo.specialPoint) {
                retObj.code = '0402';
                retObj.errMsg = '보유 포인트 초과 (특별 포인트)';
                return retObj;
            }
        }

        return retObj;
    },
    /**
     * 적립 포인트 계산
     */
    calcPoint: function () {
		// 기존 계산된 포인트 초기화
        pointSimulatorInfo.savePointBase = 0;         // 적립 예정 포인트 (기본 적립)
        pointSimulatorInfo.savePointByGrade = 0;      // 적립 예정 포인트 (등급별 적립)
        pointSimulatorInfo.savePointByAmt = 0;        // 적립 예정 포인트 (금액대별 적립)
        pointSimulatorInfo.savePointByGoodsModel = 0; // 적립 예정 포인트 (모델별 적립)
        pointSimulatorInfo.savePointByMultiGoods = 0; // 적립 예정 포인트 (다품목 적립)
        

		var pointPolicy;

		// 포인트 적립 대상 금액
		const savePointTargetAmount = pointSimulatorInfo.getTotalSaleAmtForSavePoint();
		// 포인트 적립 대상 금액 (직판)
		const totalSaleAmtForSavePointD2C = pointSimulatorInfo.getTotalSaleAmtForSavePointD2C();
		// 포인트 적립 대상 금액 (삼판)
		const totalSaleAmtForSavePointESTORE = pointSimulatorInfo.getTotalSaleAmtForSavePointESTORE();
		

        // ----------------------------------------
		// 적립 예정 포인트 (기본 적립)
        // ----------------------------------------
		pointPolicy = pointSimulatorInfo.pointPoicies['S001'];
		if(pointPolicy != undefined && pointPolicy != null) {
			pointSimulatorInfo.savePointBase = pointSimulatorInfo.getOccurPointAmount(savePointTargetAmount, pointPolicy);
		}
		// 원단위 이하 반올림
		pointSimulatorInfo.savePointBase = pointSimulatorInfo.procDecimalPartOfSavePoint(pointSimulatorInfo.savePointBase);
		

        // ----------------------------------------
		// 적립 예정 포인트 (등급별 적립)
        // ----------------------------------------
		
		pointPolicy = pointSimulatorInfo.pointPoicies['S002'];
		if(pointPolicy != undefined && pointPolicy != null) {
			pointSimulatorInfo.savePointByGrade = pointSimulatorInfo.getLimitPointResult(savePointTargetAmount, pointPolicy);
		}
		pointSimulatorInfo.savePointByGrade = pointSimulatorInfo.procDecimalPartOfSavePoint(pointSimulatorInfo.savePointByGrade);
		
		// 원단위 이하 반올림
		//상품별 추가적립금액 합계
		/*
		let additionalPointArray = $("input:checked[name=cartIds]");
		//let addiArray = $(".cart-td.cart-price").find("input[name='additionalPoint']");
		var goodsAdditonalPoint = 0;
		$.each(additionalPointArray, function(idx, element) {
			var cartElement = $('div.cart-tbl[id=' + $(element).val() + ']')
			var addtionalPoint = $(cartElement).find('input[name=additionalPoint]').val() == undefined ? 0 : $(cartElement).find('input[name=additionalPoint]').val();
			
			goodsAdditonalPoint += Math.floor(parseFloat(addtionalPoint));
		});
		
		$.each(addiArray , function(idx , obj){
			additonalPoiny += Math.floor(parseFloat($(obj).val()))
		})

		console.log("totGoodsAdditonalPoint / " + additonalPoiny)
		pointSimulatorInfo.savePointByGrade = additonalPoiny;
		*/

        // ----------------------------------------
		// 적립 예정 포인트 (금액대별 적립)
        // ----------------------------------------
		const pointPolicyAmountList = pointSimulatorInfo.pointPoicies['S004'];
		// 직판
		pointPolicy = pointPolicyAmountList.find(
			e => e.route == 'D2C' 
				&& e.amtFrom <= totalSaleAmtForSavePointD2C 
				&& totalSaleAmtForSavePointD2C < e.amtTo
		);
		if(pointPolicy != undefined && pointPolicy != null) {
			pointSimulatorInfo.savePointByAmt += pointSimulatorInfo.getOccurPointAmount(totalSaleAmtForSavePointD2C, pointPolicy);
		}
		// 삼판
		pointPolicy = pointPolicyAmountList.find(
			e => e.route == 'ESTORE' 
				&& e.amtFrom <= totalSaleAmtForSavePointESTORE 
				&& totalSaleAmtForSavePointESTORE < e.amtTo
		);
		if(pointPolicy != undefined && pointPolicy != null) {
			pointSimulatorInfo.savePointByAmt += pointSimulatorInfo.getOccurPointAmount(totalSaleAmtForSavePointESTORE, pointPolicy);
		}
		// 원단위 이하 반올림
		pointSimulatorInfo.savePointByAmt = pointSimulatorInfo.procDecimalPartOfSavePoint(pointSimulatorInfo.savePointByAmt);
		

        // ----------------------------------------
		// 적립 예정 포인트 (모델별 적립)
        // ----------------------------------------
		const pointPolicyGoodsModelList = pointSimulatorInfo.pointPoicies['S003'];
		for(let goodsInfo of pointSimulatorInfo.goodsList) {
            let route = '';

            if(goodsInfo.compGbCd == '10') { // 직판
                route = 'D2C'
            } else if(goodsInfo.compGbCd == '20') { // 삼판
                route = 'ESTORE'
            } else {
				continue;
			}

            pointPolicy = pointPolicyGoodsModelList.find(
                e => e.route == route 
                    && e.model == goodsInfo.mdlCode
            );
			
			if(pointPolicy != undefined && pointPolicy != null) {
				let pointSaveTargetAmount = goodsInfo.saleAmt - goodsInfo.useAnniversaryPoint - goodsInfo.useSpecialPoint;
				pointSimulatorInfo.savePointByGoodsModel += pointSimulatorInfo.getOccurPointAmount(pointSaveTargetAmount, pointPolicy);
			}
		}
		// 원단위 이하 반올림
		pointSimulatorInfo.savePointByGoodsModel = pointSimulatorInfo.procDecimalPartOfSavePoint(pointSimulatorInfo.savePointByGoodsModel);
		
		// ----------------------------------------
		// 적립 예정 포인트 (모델별 추가 적립)
        // ----------------------------------------
		const pointPolicyMultiGoodsPay = pointSimulatorInfo.pointPoicies['S005'];
		
		let route = 'FNET';
		let goodsPay = 0;
		for(let policyInfo of pointPolicyMultiGoodsPay) {
			for(let goodsInfo of pointSimulatorInfo.goodsList) {
				if(goodsInfo.mdlCode.trim() == policyInfo.model.trim()){ // 정책에 해당하는 모델 확인 
					goodsPay += parseInt(policyInfo.pnt) // 갯수는 중복X / 모델별 중복 O
				}
			}			
		}
		
		console.log("goodsPay : " + goodsPay)
		
        // ----------------------------------------
		// 적립 예정 포인트 (다품목 적립)
        // ----------------------------------------
		const pointPolicyMultiGoodsList = pointSimulatorInfo.pointPoicies['S023'];

		let point = 0;
		let multiFlag = false; // 모델별 추가 같이 구매했는가 flag
		let pntJson =  "";
		let pntMdl = "";
		let ch = 0;
		for(let policyMul of pointPolicyMultiGoodsList) {
			let mdlFlag = false;
			pntJson = policyMul.mulPnt.split(",") // 갯수별 지급 포인트 list
			pntMdl = policyMul.model.split(",") // 다풀목 모델코드
			
			for(let goodsInfo of pointSimulatorInfo.goodsList ) {
				var mdlCode = goodsInfo.mdlCode;
				let mdlBl = pntMdl.some(str => mdlCode == str);
				if(mdlBl) { // 다품목 모델코드에 구매 모델이 포함되어있으면
					mdlFlag = true; // 정책당 (카테고리당 1개)
					multiFlag = true; // 추가적립 true
				}
			}
			if(mdlFlag){
				ch +=1;
			}
		}
		for(let pnt of pntJson){
			let pntTmp = pnt.split("^");
			if(pntTmp[0] <= ch){
				point = parseInt(pntTmp[1])
			}
		}
		
		pointSimulatorInfo.savePointByMultiGoods = pointSimulatorInfo.getResultMulriPoint(point , goodsPay , multiFlag);
		
    },
    /**
     * 포인트 적립 정책에 따라 발생한 적립 포인트를 반환
     * 
     * @param targetAmount 적립 대상 금액
     * @param pointPolicy 포인트 적립 정책
     * @returns 발생 포인트
     */
    getOccurPointAmount: function (targetAmount, pointPolicy) {
		const saveMethod = pointPolicy.amtRtDv; // 적립방법
		const pointValue = pointPolicy.pnt; // 적립액
		
		if(saveMethod == '1') { // 정액
			return pointValue;
		} else if(saveMethod == '2') { // 정률
			return targetAmount * pointValue / 100;
		} else {
			return 0;
		}
	},
	/** 적립포인트의 소수점 이하 처리 (소수점 이하 버림) */
	procDecimalPartOfSavePoint: function(val) {
		return parseInt(val);
	},


    /** 주문금액 (포인트 사용전 상품 총 금액) */
    getResultOrderAmount: function() {
        return pointSimulatorInfo.getTotalSaleAmt();
    },
    /** 포인트 사용 금액 (창립 기념 포인트 + 특별 포인트) */
    getResultUsePoint: function() {
        return pointSimulatorInfo.useAnniversaryPoint + pointSimulatorInfo.useSpecialPoint;
    },
    /** 실 결제금액 (주문금액 - 포인트 사용 금액) */
    getResultPayAmount: function() {
        return pointSimulatorInfo.getResultOrderAmount() - pointSimulatorInfo.getResultUsePoint();
    },
    /** 전체 적립금액 */
    getResultSavePoint: function() {
        return pointSimulatorInfo.getSavePoint();
    },
    /** 다품목 적립금액 */
    getResultMulriPoint: function (point , goodsPay , flag){
    	if(flag){
    		return parseInt(point) + parseInt(goodsPay)    		
    	} else {
    		return parseInt(point)  	
    	}
    },
    getLimitPointResult: function (targetAmount, pointPolicy) {
    	const saveMethod = pointPolicy.amtRtDv; // 적립방법
		const pointValue = pointPolicy.pnt; // 적립액
		let resultPoint = 0;
		const limitGradeGainPoint = pointPolicy.limitPnt;
		
		if(saveMethod == '1') { // 정액
			return pointValue;
		} else if(saveMethod == '2') { // 정률
			resultPoint = targetAmount * pointValue / 100;
			if ( limitGradeGainPoint < resultPoint ) {
				resultPoint = limitGradeGainPoint;
			}	
			return resultPoint;
		} else {
			return 0;
		}
    }
};

