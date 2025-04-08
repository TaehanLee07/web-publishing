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

// 엑셀 다운로드 기능
// 참고 https://mesonia.tistory.com/entry/1, https://e-7-e.tistory.com/244
const excelDownload = document.querySelector('#excelDownload');

document.addEventListener('DOMContentLoaded', ()=>{
    excelDownload.addEventListener('click', exportExcel);
});

function exportExcel(){ 
  // step 1. workbook 생성
  var wb = XLSX.utils.book_new();

  // step 2. 시트 만들기 
  var newWorksheet = excelHandler.getWorksheet();

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
  XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

  // step 4. 엑셀 파일 만들기 
  var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

  // step 5. 엑셀 파일 내보내기 
  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName());
}

var excelHandler = {
    getExcelFileName : function(){
        return 'table-data.xlsx';	//파일명
    },
    getSheetName : function(){
        return 'Data Sheet';	//시트명
    },
    getExcelData : function(){
        return document.getElementById('tableData'); 	//TABLE id
    },
    getWorksheet : function(){
        return XLSX.utils.table_to_sheet(this.getExcelData());
    }
}

function s2ab(s) { 
  var buf = new ArrayBuffer(s.length); 
  var view = new Uint8Array(buf); 
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;    
}

function addRow() {
    const number = prompt("번호를 입력하세요:");
    const date = prompt("날짜를 입력하세요 (예: 2025-01-31):");
    const service = prompt("서비스 금액을 입력하세요:");
    const product = prompt("제품 금액을 입력하세요:");
    const fixed = prompt("정액권 금액을 입력하세요:");
    const countTicket = prompt("횟수권 금액을 입력하세요:");
    const except = prompt("횟수권 차감 제외 금액을 입력하세요:");

    const table = document.getElementById('tableData');

    const newRow = table.insertRow(-1);

    newRow.insertCell(0).innerText = number;
    newRow.insertCell(1).innerText = formatDate(date);
    newRow.insertCell(2).innerText = formatNumber(service);
    newRow.insertCell(3).innerText = formatNumber(product);
    newRow.insertCell(4).innerText = formatNumber(fixed);
    newRow.insertCell(5).innerText = formatNumber(countTicket);
    newRow.insertCell(6).innerText = formatNumber(except);

    return false;
}

function formatNumber(value) {
    return Number(value).toLocaleString();
}

function formatDate(value) {
    return Date(value).toLocaleString();
}

function closeModal() {
    alert('창닫기')
}

function changeBurger() {
    alert('햄버거 메뉴 변환')
}
