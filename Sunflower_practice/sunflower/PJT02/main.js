const toggleBtn = document.querySelector('.menuButton');
const menu = document.querySelector('.sideBar');


toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
});

// 바깥 영역 클릭 시 사이드 메뉴를 닫기 위한 함수
function closeSideMenuOnOutsideClick(event) {
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
        menu.classList.remove('active');
    }
}

// 이벤트 리스너 등록
document.addEventListener('click', closeSideMenuOnOutsideClick);

// $('.menuButton').on('click', function () {
//     $('.sideBar').addClass('active');
//     $('.overlay').fadeIn();
// });

// $('.overlay').on('click', function () {
//     $('.sideBar').removeClass('active');
//     $('.overlay').fadeOut();
// });

