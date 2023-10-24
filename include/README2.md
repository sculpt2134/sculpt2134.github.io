나만의 HTML 템플릿 만들어 보기
============================ 
HTML 파일 분리하는 법, 동적으로 포함시키는 법 
----------------------------

* 실행

```
$ npm i 
$ node main.js
```

* 디렉토리구조
public--html------index.html
| | ㄴ--------- layouts-- header.html
| | ㄴ------------------- nav.html
| | ㄴ------------------- article.html
| | ㄴ------------------- footer.html
| |
| ㄴ----------- content -- section1.html
| ㄴ----------------------- section2.html
| ㄴ----------------------- section3.html
| ㄴ----------------------- ...
| ㄴ----------------------- sectionN.html
|
| ㄴ----------- component -- button.html
| ㄴ------------------------ font.html
| ㄴ------------------------ form.html
| ㄴ------------------------ table.html
|
ㄴ------ js -- includeHTML.js
ㄴ------------ includeRouter.js
|
ㄴ------ css -- bootstrap.min.css  //bootstrap기본
ㄴ------------- styles.css         //HCAU page css
|
ㄴ------ font -- HCAU font 
|
ㄴ------ img -- bg
                common
                ico
                svg

* 참고 
아래 블로그 설명을 참고
```
[1] https://kay0426.tistory.com/27
[2] https://kay0426.tistory.com/28
```
