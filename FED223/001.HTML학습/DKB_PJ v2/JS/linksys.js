// 도깨비 PJ 링크시스템 JS - linksys.js

// 제이쿼리 코드구역///////////////
$(() => {
    // 실행구역 확인
    console.log("로딩완료!");

    // 메뉴 a링크 셋팅하기 ////////////
    // 대상: .gnb a + .tmenu a
    // e 변수 -> 이벤트발생 요소의 이벤트 관련 속성/메서드 전달
    $(".gnb a,.tmenu a").click(function (e) {
        // 기본이동 막기 
        e.preventDefault();

        // 1. 클릭된 텍스트 읽기 
        // this는 클릭된 a요소 자신!
        let txt = $(this).text().trim();
        console.log(txt);
        // trim() 문자열 앞뒤 공백 제거

        // 2. 이동 페이지 주소 변수 
        let url;

        // 이동 버튼에 해당하는 페이지 주소 분기 
        switch (txt) {
            case "인물관계도":
                url = "cat";
                break;
            case "프로그램 소개":
                url = "cat";
                break;
            case "시청자 게시판":
                url = "board";
                break;
            case "로그인":
                url = "login";
                break;
            case "회원가입":
                url = "member";
                break;
            case "트위터 바로가기":
                url = "twitter";
                break;
            case "인스타그램 바로가기":
                url = "insta";
                break;
            case "페이스북 바로가기":
                url = "face";
                break;
            default: url = "etc";
        } ///////////////switch/////////////////////////

        // 3. 페이지 이동하기
        // location.href = 주소 -> 페이지 이동하기
        if(url==="etc") alert("현재 페이지는 오픈 준비중입니다!\n인물관계도, 시청자게시판, 로그인, 회원가입 \n페이지만 들어가실 수 있습니다!");// 기타일 경우
        else if(url==="twitter"){
            alert("트위터가 없어서 카카오스토리로 이동합니다! \n(실은 있음)")
        window.open().location.href = "https://twitter.com/chtvn";
        // window.open() 새창열기
        }
        else if(url==="insta"){
            alert("인스타그램이 없어서 카카오스토리로 이동합니다!")
        window.open().location.href = "https://twitter.com/chtvn";
        // window.open() 새창열기
        }
        else if(url==="facw"){
            alert("페이스북이 없어서 카카오스토리로 이동합니다!")
        window.open().location.href = "https://twitter.com/chtvn";
        // window.open() 새창열기
        }

        else// 이동 페이지일 경우
        location.href = url+".html";



    }); ///////////////////// click ////////////////////////

}); //////////////////////jQB////////////////////////
////////////////////////////////////////////////////

// 참고) 본 파일을 html에서 불러올 때 defer키워드를 사용하면 
// html이 모두 로딘 후 실행된다.
// 예) <script src="외부js파일" defer></script>
// 그러나 defer 속성의 누락 등으로 위험성이 존재하므로 
// JS파일 자체에 로딩 구역을 만드는게 좋음!