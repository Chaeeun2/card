$(document).ready(function () {
    let rand = Math.round(Math.random() * 5);

    $(".backimg").each(function () {
        if (rand == 0) {
            $(this).attr("src", "resource/font-1.png");
            $(".cardtext").text("Don't Shibal Keep Going! 가보자고~!")
        } else if (rand == 1) {
            $(this).attr("src", "resource/font-2.png");
            $(".cardtext").text("중요한 건 꺾였는데도 그냥 하는 마음")
        } else if (rand == 2) {
            $(this).attr("src", "resource/font-3.png");
            $(".cardtext").text("나락도 락이고 탈락도 락이다")
        } else if (rand == 3) {
            $(this).attr("src", "resource/font-4.png");
            $(".cardtext").text("바르게 사는 건 그쪽이나 하세요~!")
        } else if (rand == 4) {
            $(this).attr("src", "resource/font-5.png");
            $(".cardtext").text("재밌게 살래 아님 나랑 같이 죽을래!")
        } else if (rand == 5) {
            $(this).attr("src", "resource/font-6.png");
            $(".cardtext").text("정신 안 차리면 너만 손해라구")
        }
    })

    let _click = true;
    $(".card").click(function () {
        if (_click == true) {
            $(this).css("transform", "rotateY(180deg) scale(1)");
            $(this).attr('class', 'select');
            $(this).parent().attr('class', 'selectflip');
            $(".select").css("z-index", "99");
            $('.card').fadeOut('slow');
            _click = false;

            setTimeout(function () {
                $(".text_a").hide();
                $(".text_a-2").show();
                $('div').remove('.flip');
                $(".select").css("transform", "rotateY(180deg) scale(1.8)");
                $(".select").css("transition", "transform 0.5s");
                $(".flexcenter").css("grid-template-columns", "1fr");
                if (matchMedia("screen and (max-width: 800px)").matches) {
                    $(".flexcenter").css("width", "50%");
                } else {
                    $(".flexcenter").css("width", "15.5%");
                }
                if (typingBool2 == false) { // 타이핑이 진행되지 않았다면 
                    typingBool2 = true;
                    var tyInt2 = setInterval(typing2, 70); // 반복동작 
                }
            }, 1000);
        }
    })


    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 70); // 반복동작 
    }


    function typing() {
        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".text_a ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else { //한문장이끝나면
            if (liIndex < liLength - 1) {
                //타이핑 결과 모두 지우기
                setTimeout(function () {
                    $(".text_a ul li").html("")
                }, 2000);
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 70);
                }, 2000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);

                //1초후
                setTimeout(function () {
                    //사용했던 변수 초기화
                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    //첫번째 문장으로 셋팅
                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                }, 2000);


            }
        }
    }



    var typingBool2 = false;
    var typingIdx2 = 0;
    var liIndex2 = 0;
    var liLength2 = $(".typing-txt-2>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt2 = $(".typing-txt-2>ul>li").eq(liIndex2).text();
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt2 = typingTxt2.split(""); // 한글자씩 잘라 배열로만든다


    function typing2() {
        if (typingIdx2 < typingTxt2.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".text_a-2 ul li").eq(liIndex2).append(typingTxt2[typingIdx2]); // 한글자씩 이어준다. 
            typingIdx2++;
        } else { //한문장이끝나면
            if (liIndex2 < liLength2 - 1) {
                clearInterval(tyInt2);
                //타이핑종료
            }
        }
    }
})