const IMG_PATH = "/images/";
const imgElement = document.querySelector(".game-start-img");

// 초기 이미지 로드 및 페이지 상태 설정
function loadImage() {
  if (window.location.hash) {
    currentIndex = parseInt(window.location.hash.substring(1)); // 해시값에서 #을 제외한 숫자만 추출
    if (currentIndex < 1) currentIndex = 1; // 1 미만의 값은 1로 처리
    if (currentIndex > 8) currentIndex = 8; // 8보다 큰 값은 8로 처리
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`; // 이미지 설정
  }
}

// 페이지 로드 시 기본적으로 해시값이 #1로 설정되도록 합니다.
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    // 해시가 없으면 #1로 이동
    window.location.hash = "#1";
  }

  // 해시값에 맞는 이미지 설정
  if (window.location.hash) {
    currentIndex = parseInt(window.location.hash.substring(1)); // 해시값에서 #을 제외한 숫자 추출
    if (currentIndex < 1) currentIndex = 1; // 1 미만의 값은 1로 처리
    if (currentIndex > 8) currentIndex = 8; // 8보다 큰 값은 8로 처리
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`; // 초기 이미지 설정
  }
});

// 해시값 변경 시 이미지 변경
window.addEventListener("hashchange", () => {
  const hashValue = parseInt(window.location.hash.substring(1));

  if (hashValue >= 1 && hashValue <= 8) {
    currentIndex = hashValue;
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`;
  } else {
    imgElement.src = `${IMG_PATH}${hashValue}.jpg`;
  }

  if (hashValue === 8) {
    createDivForPageSix();
  } else {
    hideDivForPageSix();
  }

  if (hashValue > 8) {
    createBtn();
  }
});

// 나머지 코드

// 이미지를 순차적으로 바꾸는 함수
function nextImage() {
  const hashValue = parseInt(window.location.hash.substring(1));

  if (currentIndex < 8) {
    currentIndex++; // 인덱스를 1 증가시키기

    // 해시값을 갱신하여 페이지의 해시값을 변경
    window.location.hash = `#${currentIndex}`; // 해시값 업데이트

    // 이미지 업데이트
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`; // 새로운 이미지로 변경
  }

  if (
    hashValue === 31 ||
    hashValue === 37 ||
    hashValue === 44 ||
    hashValue === 60 ||
    hashValue === 67 ||
    hashValue === 75 ||
    hashValue === 94 ||
    hashValue === 117 ||
    hashValue === 127 ||
    hashValue === 131 ||
    hashValue === 139
  ) {
    currentIndex = 150; // 인덱스를 1 증가시키기\
    currentIndex++;
    window.location.hash = `#${currentIndex}`; // 해시값 업데이트
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`; // 새로운 이미지로 변경
  }

  if (149 <= hashValue) {
    currentIndex = hashValue; // 인덱스를 1 증가시키기
    if (hashValue === 158) return;
    currentIndex++;

    window.location.hash = `#${currentIndex}`; // 해시값 업데이트
    imgElement.src = `${IMG_PATH}${currentIndex}.jpg`; // 새로운 이미지로 변경
  }
}

function hideDivForPageSix() {
  const pageSixDiv = document.querySelector(".page-six-div");
  if (pageSixDiv) {
    pageSixDiv.style.display = "none"; // div 숨기기
  }
}

function createDivForPageSix() {
  if (document.querySelector(".page-six-div")) return;

  const newDiv = document.createElement("div");

  newDiv.classList.add("page-six-div"); // div에 클래스 추가 (숨기거나 보여주기 위해 사용)

  newDiv.style.display = "flex";
  newDiv.style.position = "absolute";

  newDiv.style.top = "56%"; // 화면 높이의 50%로 설정
  newDiv.style.left = "50%"; // 화면 너비의 50%로 설정
  newDiv.style.transform = "translate(-50%, -50%)";

  newDiv.style.flexDirection = "column";
  newDiv.style.maxWidth = "430px";
  newDiv.style.maxHeight = "515px";

  newDiv.style.width = "100%";
  newDiv.style.height = "100%";

  newDiv.style.margin = "auto";
  newDiv.style.alignItems = "flex-end";
  newDiv.style.paddingRight = "20%";

  newDiv.style.fontSize = "14px";

  newDiv.style.justifyContent = "center";

  newDiv.innerHTML = `
    <p data-hash="#12">&#8594;   p12</p>
    <p data-hash="#13">&#8594;   p13</p>
    <p data-hash="#16">&#8594;   p16</p>
    <p data-hash="#20">&#8594;   p20</p>
    <p data-hash="#17">&#8594;   p17</p>
    <p data-hash="#19">&#8594;   p19</p>
  `;

  const pTags = newDiv.querySelectorAll("p");
  pTags.forEach((p) => {
    p.addEventListener("click", function () {
      const hash = p.getAttribute("data-hash");
      window.location.hash = hash; // 클릭된 p 태그의 data-hash 값을 해시로 설정
    });
  });

  // 페이지 본문에 추가
  const gameDiv = document.querySelector(".game"); // .game 클래스를 가진 div 찾기

  gameDiv.appendChild(newDiv); // .game 하위에 newDiv 추가
}

// 해시 변경에 따라 버튼을 생성 및 업데이트
window.addEventListener("hashchange", () => {
  const hashValue = parseInt(window.location.hash.substring(1));
  removeAllButtons(); // 기존 버튼 모두 제거
  updateButtonsForHash(hashValue); // 새로운 해시 값에 따른 버튼 렌더링
});

function updateButtonsForHash(hashValue) {
  let firstBtn, secondBtn, thirdBtn;

  // 해시 값에 따라 각 버튼 설정

  // 30p TODO
  switch (hashValue) {
    case 12:
      firstBtn = 14;
      secondBtn = 13;
      break;
    case 13:
      firstBtn = 16;
      secondBtn = 20;
      break;
    case 14:
      firstBtn = 21;
      secondBtn = 18;
      break;
    case 16:
      firstBtn = 22;
      secondBtn = 19;
      break;
    case 17:
      firstBtn = 44;
      secondBtn = 18;
      thirdBtn = 30;
      break;
    case 18:
      firstBtn = 24;
      secondBtn = 27;
      break;
    case 19:
      firstBtn = 33;
      secondBtn = 30;
      break;
    case 20:
      firstBtn = 31;
      secondBtn = 26;
      break;

    case 21:
      firstBtn = 22;
      secondBtn = 25;
      break;

    case 22:
      firstBtn = 44;
      secondBtn = 24;
      thirdBtn = 56;
      break;

    case 24:
      firstBtn = 26;
      secondBtn = 30;
      break;

    case 25:
      firstBtn = 32;
      secondBtn = 26;
      break;

    case 26:
      firstBtn = 36;
      secondBtn = 38;
      break;

    case 27:
      firstBtn = 25;
      secondBtn = 43;
      break;

    case 30:
      firstBtn = 38;
      secondBtn = 34;
      thirdBtn = 36;
      break;

    case 32:
      firstBtn = 45;
      secondBtn = 52;
      break;

    case 33:
      firstBtn = 41;
      secondBtn = 43;
      break;

    case 34:
      firstBtn = 36;
      secondBtn = 48;
      break;

    case 36:
      firstBtn = 42;
      secondBtn = 38;
      thirdBtn = 94;
      break;

    case 38:
      firstBtn = 46;
      secondBtn = 50;
      break;

    case 41:
      firstBtn = 43;
      secondBtn = 60;
      break;

    case 42:
      firstBtn = 67;
      secondBtn = 49;
      break;

    case 45:
      firstBtn = 48;
      secondBtn = 37;
      break;

    case 46:
      firstBtn = 57;
      secondBtn = 48;
      break;

    case 47:
      firstBtn = 50;
      secondBtn = 53;
      break;

    case 48:
      firstBtn = 49;
      secondBtn = 57;
      break;

    case 49:
      firstBtn = 51;
      secondBtn = 56;
      break;

    case 50:
      firstBtn = 75;
      secondBtn = 57;
      break;

    case 51:
      firstBtn = 59;
      secondBtn = 56;
      break;

    case 53:
      firstBtn = 65;
      secondBtn = 57;
      break;

    case 56:
      firstBtn = 70;
      secondBtn = 59;
      thirdBtn = 61;
      break;

    case 57:
      firstBtn = 64;
      secondBtn = 59;
      break;

    case 59:
      firstBtn = 61;
      secondBtn = 71;
      break;

    case 61:
      firstBtn = 64;
      secondBtn = 68;
      thirdBtn = 94;
      break;

    case 64:
      firstBtn = 60;
      secondBtn = 66;
      break;

    case 65:
      firstBtn = 72;
      secondBtn = 68;
      break;

    case 66:
      firstBtn = 67;
      secondBtn = 76;
      break;

    case 68:
      firstBtn = 69;
      secondBtn = 70;
      break;

    case 69:
      firstBtn = 74;
      secondBtn = 71;
      break;

    case 70:
      firstBtn = 72;
      secondBtn = 78;
      break;

    case 71:
      firstBtn = 78;
      secondBtn = 76;
      break;

    case 72:
      firstBtn = 82;
      secondBtn = 79;
      thirdBtn = 78;
      break;

    case 74:
      firstBtn = 80;
      secondBtn = 67;
      break;

    case 76:
      firstBtn = 80;
      secondBtn = 83;
      break;

    case 78:
      firstBtn = 81;
      secondBtn = 82;
      thirdBtn = 87;

      break;

    case 79:
      firstBtn = 85;
      secondBtn = 83;
      break;

    case 80:
      firstBtn = 83;
      secondBtn = 88;
      break;

    case 81:
      firstBtn = 93;
      secondBtn = 44;
      break;

    case 82:
      firstBtn = 83;
      secondBtn = 86;
      break;

    case 83:
      firstBtn = 90;
      secondBtn = 88;
      break;

    case 85:
      firstBtn = 86;
      secondBtn = 67;
      break;

    case 86:
      firstBtn = 88;
      secondBtn = 92;
      break;

    case 87:
      firstBtn = 96;
      secondBtn = 90;
      thirdBtn = 98;
      break;

    case 88:
      firstBtn = 92;
      secondBtn = 96;
      break;

    case 90:
      firstBtn = 96;
      secondBtn = 97;
      break;

    case 92:
      firstBtn = 96;
      secondBtn = 100;
      break;

    case 93:
      firstBtn = 107;
      secondBtn = 80;
      break;

    case 96:
      firstBtn = 97;
      secondBtn = 98;
      break;

    case 97:
      firstBtn = 100;
      secondBtn = 101;
      break;

    case 98:
      firstBtn = 67;
      secondBtn = 103;
      thirdBtn = 94;
      break;

    case 100:
      firstBtn = 102;
      secondBtn = 101;
      break;

    case 101:
      firstBtn = 114;
      secondBtn = 103;
      break;

    case 102:
      firstBtn = 104;
      secondBtn = 105;
      break;

    case 103:
      firstBtn = 109;
      secondBtn = 115;
      break;

    case 104:
      firstBtn = 110;
      secondBtn = 112;
      break;

    case 105:
      firstBtn = 114;
      secondBtn = 110;
      break;

    case 107:
      firstBtn = 76;
      secondBtn = 131;
      break;

    case 109:
      firstBtn = 114;
      secondBtn = 113;
      break;

    case 110:
      firstBtn = 115;
      secondBtn = 120;
      break;

    case 112:
      firstBtn = 117;
      secondBtn = 105;
      break;

    case 113:
      firstBtn = 118;
      secondBtn = 114;
      break;

    case 114:
      firstBtn = 115;
      secondBtn = 121;
      break;

    case 115:
      firstBtn = 122;
      secondBtn = 128;
      break;

    case 118:
      firstBtn = 127;
      secondBtn = 120;
      break;

    case 120:
      firstBtn = 124;
      secondBtn = 122;
      break;

    case 121:
      firstBtn = 133;
      secondBtn = 124;
      break;

    case 122:
      firstBtn = 124;
      secondBtn = 125;
      break;

    case 124:
      firstBtn = 128;
      secondBtn = 130;
      break;

    case 125:
      firstBtn = 130;
      secondBtn = 135;
      break;

    case 128:
      firstBtn = 130;
      secondBtn = 134;
      break;

    case 130:
      firstBtn = 143;
      secondBtn = 135;
      break;

    case 133:
      firstBtn = 135;
      secondBtn = 134;
      break;

    case 134:
      firstBtn = 130;
      secondBtn = 145;
      break;

    case 135:
      firstBtn = 103;
      secondBtn = 138;
      break;

    case 136:
      firstBtn = 145;
      secondBtn = 143;
      break;

    case 138:
      firstBtn = 140;
      secondBtn = 143;
      break;

    case 140:
      firstBtn = 136;
      secondBtn = 143;
      break;

    case 143:
      firstBtn = 147;
      secondBtn = 145;
      break;

    case 145:
      firstBtn = 17;
      secondBtn = 143;
      thirdBtn = 138;
      break;

    case 147:
      firstBtn = 149;
      secondBtn = 145;
      thirdBtn = 10;
      break;

    // 필요한 다른 해시 값에 대한 케이스 추가
    default:
      return; // 해당하는 해시 값이 없으면 함수 종료
  }

  // 버튼 생성
  createBtn(firstBtn, secondBtn, thirdBtn);
}

// 모든 버튼을 제거하는 함수
function removeAllButtons() {
  const existingBtnDivs = document.querySelectorAll(".btn-div"); // 모든 .btn-div 요소 선택
  existingBtnDivs.forEach((div) => div.remove()); // 모든 .btn-div 요소 삭제
}

// 버튼을 생성하는 함수
function createBtn(firstBtn, secondBtn, thirdBtn) {
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div"); // 클래스 추가로 중복 방지

  btnDiv.style.display = "flex";
  btnDiv.style.position = "absolute";
  btnDiv.style.top = "70%";
  btnDiv.style.left = "40%";
  btnDiv.style.transform = "translate(-50%, -50%)";
  btnDiv.style.flexDirection = "column";
  btnDiv.style.maxWidth = "430px";
  btnDiv.style.maxHeight = "515px";
  btnDiv.style.width = "100%";
  btnDiv.style.height = "100%";
  btnDiv.style.margin = "auto";
  btnDiv.style.alignItems = "flex-end";
  btnDiv.style.paddingRight = "20%";
  btnDiv.style.fontSize = "14px";
  btnDiv.style.justifyContent = "center";

  btnDiv.innerHTML = `
    <p data-hash="#${firstBtn}"> YES &#8594;   p${firstBtn}</p>
    <p data-hash="#${secondBtn}"> NO  &#8594;   p${secondBtn}</p>
  ${thirdBtn ? `<p data-hash="#${thirdBtn}"> SKIP  &#8594;   p${thirdBtn}</p>` : ""}
  `;

  const pTags = btnDiv.querySelectorAll("p");
  pTags.forEach((p) => {
    p.addEventListener("click", function () {
      const hash = p.getAttribute("data-hash");
      window.location.hash = hash;
    });
  });

  // 페이지 본문에 추가
  const gameDiv = document.querySelector(".game");
  gameDiv.appendChild(btnDiv);
}
