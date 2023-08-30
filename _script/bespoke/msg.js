var message = {
    timer : 400,
    returnValue : "",
    run : false,
    alert : function(titletext, subtext){			
        if(this.run == false){
            this.run = true;
            this.open("mode-alert",subtext, titletext);
        }
    },
    confirm :function(titletext,subtext, callback){
        if(this.run == false){
            this.run == true;
            this.open("mode-confirm", subtext, titletext);
            $(".bespoke .mode-confirm .btn-ok").on("click", function(){					
                this.run = false;					
                $(".bespoke .mode-confirm").remove();
                callback(true);
            });
            $(".bespoke .mode-confirm .btn-cancel").on("click", function(){					
                this.run = false;					
                $(".bespoke .mode-confirm").remove();
                callback(false);
            });
        }
    },
    colorPopup : function(){
    	if(this.run == false){
    		this.run == true;
    		this.open("mode-color-popup");    	
    	}    
    },
    open : function(type, subtext, titletext){
        var popup = $(".bespoke ."+type);
        
        var messageSource = "";	
        
        if(type == "mode-confirm"){
            messageSource += '<div class="modal-alert mode-confirm">';
            messageSource += '<div class="modal-dialog">';
            messageSource += '<div class="modal-content">';
            messageSource += '<div class="modal-body">';
            if(subtext !=""){
                messageSource += '<p class="sub-text">'+subtext+'</p>';
            }
            if(titletext != ""){
                messageSource += '<p class="title-text">'+titletext+'</p>';
            }
            messageSource += '<div class="btn-box">';
            messageSource += '<button class="btn btn-fill btn-ok">예</button>';
            messageSource += '<button class="btn btn-line btn-cancel">아니오</button>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
        }
        else if(type == "mode-alert"){
            messageSource += '<div class="modal-alert mode-alert">'; 	
            messageSource += '<div class="modal-dialog">';
            messageSource += '<div class="modal-content">';
            messageSource += '<div class="modal-body">';				
            if(titletext !=""){
                messageSource += '<p class="title-text">'+titletext+'</p>';
            }
            if(subtext != ""){
                messageSource += '<p class="sub-text">'+subtext+'</p>';
            }
            messageSource += '<div class="btn-box">';
            messageSource += '<button class="btn btn-fill" onclick="message.close();">확인</button>';				
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
            messageSource += '</div>';
        }else if(type == "mode-color-popup"){
        	messageSource += '<div class="modal mode-alert">'
			messageSource += '<div class="modal-dialog">'
			messageSource += '<div class="modal-content">'
			messageSource += '<div class="modal-body">'					
			messageSource += '<div class="all-color-prism">'
			messageSource += '<img src="./../../static/_images/color-prism.png" alt="색상 모두 보기. Yellow, Orange, Red, Purple, Blue, Green 각 60개씩 360개 색상 팔레트가 보입니다. 사용하시는 디바이스의 해상도에 따라 패널 색상은 실제와 달라 보일 수 있습니다.">'
			messageSource += '<p class="text">* 사용하시는 디바이스의 해상도에 따라 패널 색상은 실제와 달라 보일 수 있습니다.</p>'
			messageSource += '</div>'			
			messageSource += '</div>'
			messageSource += '</div>'
			messageSource += '<button class="btn-close" onclick="message.close();">'
			messageSource += '<span class="blind">닫기</span>'
			messageSource += '</button>'
			messageSource += '</div>'
			messageSource += '</div>'
        
        }

        $(".bespoke").prepend(messageSource);					
    },
    print : function(data){
     		var messageSource = "";
        	messageSource += '<div class="modal mode-alert">'
			messageSource += '<div class="modal-dialog">'
			messageSource += '<div class="modal-content">'
			messageSource += '<div class="modal-body" id="download" >'	
			messageSource += '<div class="print-preview" id="print">'
			messageSource +=  data;	
			messageSource += '</div>'
		    messageSource += '</div>'
			messageSource += '</div>'
			messageSource += '<button class="btn-close" onclick="message.close(\'print\');">'
			messageSource += '<span class="blind">닫기</span>'
			messageSource += '</button>'
			messageSource += '</div>'
			messageSource += '</div>'
        
        $(".bespoke").prepend(messageSource);
    },
    close : function(target){
        this.run = false;
        $(".bespoke .mode-alert").remove();
        if(target == 'print'){
			$("[name=kitDelete]").show();
        }
    }
}