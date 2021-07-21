const slideWrap = document.querySelector(".slide");
const slide = slideWrap.querySelector("ul"); 
const left = slideWrap.querySelector(".left");
const right = slideWrap.querySelector(".right");
const imgWd = slideWrap.clientWidth;
let scrollEvent = true;

function leftSlide(e){
    e.preventDefault();
    if(scrollEvent == false)return false;
    let current = 0;

    function handleTimer_rg(){
        current += 50; 
        slide.style.left = -current + "px";
       if(current >= imgWd){
            clearTimeout(timer);
            const first = slide.querySelector("li:first-child");
            slide.appendChild(first);
            slide.style.left = 0+"px";
            scrollEvent = true;
        }
    }
    let timer = setInterval(handleTimer_rg , 1000/60);
    scrollEvent = false;
}


function rightSlide(e){
    e.preventDefault();
    if(scrollEvent = false)return false;
    let current = -imgWd;
    const last = slide.querySelector("li:last-child");
    slide.prepend(last);
    slide.style.left = -imgWd+"px";
    function handleTimer_right(){
        current += 50;
        slide.style.left = current + "px";
        if(current >=0){
            clearTimeout(timer);
            scrollEvent = true;
        }
    }
    let timer = setInterval(handleTimer_right,1000/60);
    scrollEvent = false;


}


left.addEventListener("click", leftSlide);
right.addEventListener("click", rightSlide);





/*function rightSlide(){

      if(scrollEvent == false)return false;// 슬라이드 애니메이션의 중복을 막아줄 변수
      let current = -imgWd; //current변수 값을 -imgwd(이미지의 넓이값)로 할당
      const last = slide.querySelector("li:last-child");//마지막 이미지요소를 첫번째 위치로 이동
      slide.prepend(last);//마지막 이미지를 첫번째 위치로 변경
      slide.style.left = -imgWd+"px";//slide의 left값을 -imgWd값으로 설정하여 오른쪽으로 이동할 준비
      function handleTimer_right(){
        current += 50; //current변수에 50을 더해 다시 current변수에 할당.
        slide.style.left = current + "px";//slide의 left값을 current값으로 설정
        if(current >= 0){ //current가 0보다 크거나 같으면 반복함수를 종료
          clearTimeout(timer);
          scrollEvent = true;//scrollEvent변수를 true로 변경하여 rightSlide함수가 다시 실행되도록 적용
        }
      }

      let timer = setInterval(handleTimer_right,1000/60);
      scrollEvent = false;//scrollEvent변수의 값을 false로 변경하여 이미지슬라이드가 적용중일때는 중복으로 적용되지 않도록함.
    }

    left.addEventListener("click",leftSlide);//left버튼 클릭시 leftSlide함수 실행
    right.addEventListener("click",rightSlide);//right버튼 클릭시 rightSlide함수 실행
*/