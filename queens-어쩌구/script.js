var isLoggedIn = true;
var currentUser = "metacity1234";

function logoutAlert() {
    if (isLoggedIn) {
        confirm("로그아웃 하시겠습니까?")
        isLoggedIn = false;
        currentUser = "";
        document.querySelector(".user-profile-icon .user-name").textContent = "GUEST";
        document.querySelector(".logout-bg").classList.add("logged-out");
    } else {
        showLoginModal();
    }
    return false;
}

function showLoginModal() {
    document.getElementById("login-modal").style.display = "block";
}

function loginUser() {
    var username = document.getElementById("login-username").value;
    if (username.trim() === "") {
        alert("아이디를 입력해주세요.");
        return;
    }
    isLoggedIn = true;
    currentUser = username;
    document.querySelector(".user-profile-icon .user-name").textContent = currentUser;
    document.querySelector(".logout-bg").classList.remove("logged-out");
    document.getElementById("login-modal").style.display = "none";
}

function addCustomer() {
    alert("고객등록")
}

function yeahYak() {
    alert("예약등록")
}

document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.querySelector(".user-profile-icon p");
    const dropdown = document.getElementById("accountDropdown");

    profileIcon.addEventListener("click", function (event) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation(); 
    });

    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});

function switchAccount(accountName) {
    document.querySelector(".user-name").innerText = accountName;
    document.getElementById("accountDropdown").style.display = "none";
    alert("계정이 " + accountName + "으로 변경되었습니다!");
}
