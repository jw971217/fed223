///////////CGV 메인페이지 JS/////////////

///// 로딩 구역/////////////////////////
//이벤트 : load, DOMContentLoaded
window.addEventListener("DOMContentLoaded", ()=>{

    // 호출확인
    console.log("로딩완료");

    //////////////////////////////////////////////////
    // 극장가는길 클릭시 구글맵 보이기//////////////////
    /////////////////////////////////////////////////
    // 이벤트 대상 : .goMV
    let goMV = document.querySelector(".goMV");
    // 변경대상 : .gmap
    let gmap = document.querySelector(".gmap");
    // 변경대상 : .cbtn
    let cbtn = document.querySelector(".cbtn");

    

    // 변경방법 : goMV 클릭시 gmap에 클래스 "on" 넣기빼기
    // 사용 메서드 : classList.toggle()
    goMV.onclick = ()=>{
        //구글맵박스에 on 넣기
        gmap.classList.add("on");
        //자기자신에(this===goMV) on 넣기
        goMV.classList.add("on");
    };
    /* 클릭 */

    cbtn.onclick = ()=>{
        gmap.classList.remove("on");
        goMV.classList.remove("on");
    };

    
    

    /// 명령문이 하나면 함수의 중괄호 생략 가능

});/////////////로딩구역




// transform: rotateX(80deg);
// border: 1px solid aquamarine;
// box-sizing: border-box;










//  JS코딩구역 
    /************************************************************************************************** 
        함수명: 멍멍
        기능: 포스터메뉴 클릭 시 유튜브 iframe src속성값 변경하여 영화바꾸기
    **************************************************************************************************/
   function 멍멍(먹이){
        //먹이 - 전달값을 담는 변수
        // -> 먹이 변수에 영화 고유코드를 담는다
        // 1. 호출 및 전달값 확인
        console.log("먹이줘", 먹이);

        // 2. 변경대상 : 아이프레임 -> #screen iframe
        var 아이 = document.querySelector("#screen iframe");

        // 3. 변경내용 : 아이프레임의 src 속성값 변경하기
        아이.src = 
        "https://www.youtube.com/embed/"
        +먹이+
        "?autoplay=1";

        //이퀄(=)을 만나는 순간 이퀄 오른쪽의 값을 만든 후 
        //왼쪽의 변수나 속성에 값을 넣는다

        //전달변수 먹이에 담긴 값을 다른 문자값과 합쳐서 하나의 문자로 만들어준다.


   }/////////////멍멍 함수/////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////////////