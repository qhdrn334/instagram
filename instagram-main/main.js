$(document).ready(function () {
   //반응형 적용
   $(window)
     .resize(function () {
       if (window.innerWidth > 1000) {
         /* 1000px 넘을 때 */
         $(".hidden_menu").hide();
         $(".side_box").show();
       } else {
         /* 1000px 이하일 때 */
         $(".hidden_menu").show();
         $(".side_box").hide();
       }
     })
     .resize();
 
   //하트 아이콘 클릭 이벤트
   $(".insta_heart_icon_outline").click(function () {
     $(this).hide();
     $(this).next().show();
   });
   $(".insta_heart_icon").click(function () {
     $(this).hide();
     $(this).prev().show();
   });
 
   //북마크 아이콘 클릭 이벤트
   $(".insta_bookmark_outline").click(function () {
     $(this).hide();
     $(this).next().show();
   });
   $(".insta_bookmark").click(function () {
     $(this).hide();
     $(this).prev().show();
   });
 
   //댓글창 게시 나타내기
   $(".comment_field")
     .find("input")
     .on("keyup", function () {
       let commentSave = $(this).val();
       if (commentSave != "") {
         $(this).next().show();
       } else {
         $(this).next().hide();
       }
     });
 
   //댓글 달기
   $(".comment_field")
     .find("input")
     .on("keyup", function (key) {
       if (key.keyCode == 13) {
         $(this).next().trigger("click");
       }
     });
   $(".upload_btn").on("click", function () {
     let commentIdx = $(this).prev().attr("data-comment");
     let comment = $(this).prev().val();
 
     if (comment.length > 30) {
       alert("30자 이내로 입력해주세요.");
     } else {
       addComment(commentIdx, "loginId", comment);
 
       location.reload();
     }
   });
 
   //모달팝업
   $(function () {
     $(".insta_more_icon").click(function () {
       $(".modal").show();
       let cmmtIdx = $(this).attr("data-idx");
       $("#cmmtDelete").attr("onclick", "deleteComment(" + cmmtIdx + ")");
     });
     $("#modalClose").click(function () {
       $(".modal").fadeOut();
     });
   });
 
   showComment();
 });
 
 //댓글 불러오기
 function getComment() {
   return JSON.parse(localStorage.getItem("comment")) || [];
 } 
 
 //댓글 등록
 function addComment(commentIdx, id, comment) {
   let getCmmt = getComment();
   getCmmt.push({ commentIdx, id, comment });
   localStorage.setItem("comment", JSON.stringify(getCmmt));
 }
 
 //댓글 뿌려주기
 function showComment() {
   $(".reComment").html("");
   let comments = getComment();
   comments.forEach(function (data, index) {
     let reCommentCnt = $(".reComment").length;
     for (i = 1; i < reCommentCnt + 1; i++) {
       if (data.commentIdx == "idx" + i) {
         $(".reComment[id=" + data.commentIdx + "]").append(
           '<div class="comment_user"><div class="profile_thumb"><img src="img/thumb02.jpg" alt="프로필사진"></div><div class="detail"><div class="id">' +
             data.id +
             "</div><div>" +
             data.comment +
             '</div></div><div class="insta_more_icon" data-idx="' +
             index +
             '"></div></div>'
         );
       }
     }
   });
 }
 
 //댓글 삭제
 function deleteComment(index) {
   let getCmmt = getComment();
   getCmmt.splice(index, 1);
   localStorage.setItem("comment", JSON.stringify(getCmmt));
   location.reload();
 }
 
 /*
 
 인스타그램 클론코딩하기
 1. html, css
  - 실습 소스 참고하여
  - header, main, side, hidden menu, modal팝업 순으로 만들기
  - 하나씩 차근차근 직접 타이핑하면서 이해하고 넘어가기
 
 2. 스크립트
  - 히든메뉴 반응형으로 숨기기/나타내기
  - 좋아요, 북마크 클릭
  - 댓글창에 게시 나타내기
  - 댓글등록 (앤터, 게시 클릭)
  - 모달팝업 나타내기
  - 댓글삭제
 
 실습 소스 깃허브 주소(다운로드 후 진행)
 https://github.com/koreaitjjhw/instagram
 */
 /*
 
 인스타그램 클론코딩하기
 1. html, css
  - 실습 소스 참고하여
  - header, main, side, hidden menu, modal팝업 순으로 만들기
  - 하나씩 차근차근 직접 타이핑하면서 이해하고 넘어가기
 
 2. 스크립트
  - 히든메뉴 반응형으로 숨기기/나타내기
  - 좋아요, 북마크 클릭
  - 댓글창에 게시 나타내기
  - 댓글등록 (앤터, 게시 클릭)
  - 모달팝업 나타내기
  - 댓글삭제
 
 실습 소스 깃허브 주소(다운로드 후 진행)
 https://github.com/koreaitjjhw/instagram
 */



// $(document).ready(function()   { 
   
   
   
// $('.insta_heart_icon_outline').click(function(){
//    $('.insta_heart_icon_outline').hide();
//    $('.insta_heart_icon').show();           // 빈 하트 숨김;
//                                            // 빨간 하트 보이기;
// });
// $('.insta_heart_icon').click(function(){
//    $('.insta_heart_icon_outline').show();
//    $('.insta_heart_icon').hide();              // 빈 하트 보이기;
//                                              // 빨간 하트 숨기기;
// });

// $('.insta_bookmark_outline').click(function(){
//    $('.insta_bookmark_outline').hide();
//    $('.insta_bookmark').show();                 // 빈북마크 숨김;
//                                                // 북마크 보이기;
// });
// $('.insta_bookmark').click(function(){
//    $('.insta_bookmark_outline').show();         // 빈북마크 보이기;
//    $('.insta_bookmark').hide();                //  북마크 숨기기;
// }); 

// //댓글창에 게시 나타내기
// $('.')





// //댓글 등록


// //모달팝업 나타내기


// //댓글 삭제




// });

