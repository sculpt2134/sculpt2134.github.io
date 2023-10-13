var app_editor;
var upload_url, view_url_path
var uploadSize = 50 * 1024 * 1024;

function hideVideoButton(){
	//$("#write-area").focus();	
	$(".ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible").removeClass("ck-dropdown__panel-visible");
}

class VideoUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then( file => new Promise(((resolve, reject) => {
            this._initRequest();
            this._initListeners( resolve, reject, file );
            this._sendRequest( reject, file );
        })))
    }

    _initRequest() {
    	hideVideoButton();
    	
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', upload_url, true);		// 파일 업로드
        xhr.responseType = 'json';;
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = '파일을 업로드 할 수 없습니다.'
        
        xhr.addEventListener('error', () => {reject(genericErrorText)})
        xhr.addEventListener('abort', () => reject())
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            if(!response || response.error) {
            	waiting.stop();
                return reject( response && response.error ? response.error.message : genericErrorText );
            }

            resolve({
//                default: response.url //업로드된 파일 주소
                default: view_url_path + response.url
            })

            waiting.stop();
        })
        
        if (xhr.upload) {
        	waiting.start();

	      xhr.upload.addEventListener("progress", (evt) => {
	    	  if (evt.lengthComputable) {
	          loader.uploadTotal = evt.total;
	          loader.uploaded = evt.loaded;
	          
	          var percentComplete = Math.floor(evt.loaded / evt.total * 100);
	          if(percentComplete == 100){
	        	  //waiting.stop();
	          }
	        }
	      });
	    }
    }
    // end : _initListeners

    _sendRequest(reject, file) {
    	const checkFileSize = uploadSize;
    	if(file.size > checkFileSize ){
    		 waiting.stop();
    		// this.loader.status = "error";
    		reject("동영상 업로드는 50mb 이하만 할 수 있습니다.");
    		
    		return;
    	}else{
	        const data = new FormData()
	        data.append('upload',file)
	        this.xhr.send(data)
    	}
    }
    
//    reject(msg){
//    	if(this.xhr){
//    		 waiting.stop();
////    		this.xhr.reject(msg);
//    		 if(msg){
//        		 this._alert(msg);
//    		 }
////    		 this.xhr.abort();
//    		 this.xhr.reject();
//    	}
//    }
    
    abort(){
    	if(this.xhr){
    		this.xhr.abort();
    	}
    }
    
//    _alert(msg){
//    	var alertData = {
//				title : ""
//				, content : msg
//				, callback : ""
//				, btnText : "확인"
//			};
//			commonAlert(alertData);
//			openLayer('commonAlert');
//    }
}

function VideoUploadAdapterPlugin( editor ) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new VideoUploadAdapter(loader);
    };
}


function initEditor(renderTo, upload_url2, view_url_path2)
{
	renderTo = renderTo || $("#ckeditor");
	upload_url = upload_url2;
	view_url_path = view_url_path2;
	
	return ClassicEditor.create(renderTo.get(0), {
		extraPlugins: [VideoUploadAdapterPlugin],
		mediaEmbed : {
			previewsInData: true
		}
	  })
	   .then((editor) => {
		   app_editor = editor;
	    })
	    .catch((error) => {
	      console.error("There was a problem initializing the editor.", error);
	});
}

