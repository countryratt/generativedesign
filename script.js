const names = [
    "최이안", "김승주", "정세아",
    "지선율", "조경서", "박현지",
    "송나연", "정은빈", "차정연"
];

const leftColumn = document.getElementById('left-column');
const rightContainer = document.getElementById('right-container');
const description = document.getElementById('description');

// 초기 네모 카테고리 생성
const initializeCategory = () => {
    leftColumn.innerHTML = ''; // 초기화

    names.forEach((name) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.textContent = name;

        // 마우스 호버 시 색상 및 원형 변경
        square.addEventListener('mouseenter', () => {
            if (!square.classList.contains('clicked')) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                square.style.borderRadius = '50%'; // 원형으로 변환
            }
        });

        // 마우스가 떠날 때 원래 상태 복원
        square.addEventListener('mouseleave', () => {
            if (!square.classList.contains('clicked')) {
                square.style.backgroundColor = '#909090'; // 기본 회색
                square.style.borderRadius = '0'; // 정사각형으로 복원
            }
        });

        // 클릭 이벤트 추가
        square.addEventListener('click', () => handleSquareClick(name, square));

        leftColumn.appendChild(square);
    });
};

// 네모 클릭 시 동작
const handleSquareClick = (selectedName, square) => {
    // 이전 클릭된 네모 초기화
    const clickedSquares = document.querySelectorAll('.square.clicked');
    clickedSquares.forEach((sq) => {
        sq.classList.remove('clicked');
        sq.style.backgroundColor = '#909090'; // 클릭 해제 시 회색 복원
        sq.style.borderRadius = '0'; // 정사각형 복원
    });

    // 클릭된 네모에 고정 스타일 적용
    square.classList.add('clicked'); // 클릭 상태 표시
    square.style.transition = 'none'; // 클릭된 상태 유지

    // 오른쪽 영역 초기화
    rightContainer.innerHTML = '';
    rightContainer.appendChild(description);

    if (selectedName === '박현지') {
        description.textContent =
            "가장 좋아하는 계절인 여름에 찍었던 사진들을 반짝이는 빛을 내며 마우스 인터렉티브로 지우며 볼 수 있는 아카이빙 사이트.";

        const video = document.createElement('video');
        video.src = 'hj.mov';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        rightContainer.appendChild(video);
    } 
    
    else if (selectedName === '김승주') {
        description.textContent =
            "인터랙티브 애니메이션\n웹 기술을 활용하여 사용자가 상호작용할 수 있는 애니메이션 효과.";

        const iframe = document.createElement('iframe');
        iframe.src = 'https://editor.p5js.org/tmdwn102/full/i6vusjyYT';
        rightContainer.appendChild(iframe);
    } 

    else if (selectedName === '송나연') {
        description.textContent =
            "사회의 필수적 요소인 소통, 이 소통이 존재하지 않을 때 생기는 혼란, 예측할 수 없는 소통의 방향, 그리고 소통의 소거로 인한 관계의 무너짐을 표현";

        const video = document.createElement('video');
        video.src = 'na.mp4';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        rightContainer.appendChild(video);
    } 
    
    else if (selectedName === '정은빈') {
        description.textContent =
            "입자들이 무작위로 모이고 흩어지며, 동적인 움직임을 만들어내는 코드.";

        const iframe = document.createElement('iframe');
        iframe.src = 'https://editor.p5js.org/eunvin/full/OhowoqC_R';
        rightContainer.appendChild(iframe);
    }
    
    else if (selectedName === '조경서') {
        description.textContent =
            "<미로찾기>   타이머가 닳기 전에 아이템을 먹고 탈출하는 게임!";

        const iframe = document.createElement('iframe');
        iframe.src = 'https://editor.p5js.org/kyungseo/full/p5dSG5THV';
        rightContainer.appendChild(iframe);
    }
    
    else if (selectedName === '지선율') {
        description.textContent =
            "프로젝트의 주제인 비례와 강조에 맞춰 마우스 인터렉션에 따라 서로 다른 비례를 가진 이미지들이 조합되며 기존의 비례를 벗어나는 이미지를 생성하는 포스터";

        const video = document.createElement('video');
        video.src = 's.mp4';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        rightContainer.appendChild(video);
    }
    
    else if (selectedName === '정세아') {
        description.textContent =
            "크리에이티브 모션\n감각적이고 실험적인 모션 그래픽을 통해 창의적인 표현을 시도했다.";

        const iframe = document.createElement('iframe');
        iframe.src = 'https://editor.p5js.org/seahjj/full/BRwDNXk_s';
        rightContainer.appendChild(iframe);
    } else if (selectedName === '최이안') {
        description.textContent =
            "안녕, 여름!: 여름을 주제로 한 인터랙티브 포스터";

        const iframe = document.createElement('iframe');
        iframe.src = 'https://editor.p5js.org/IAAN08/full/K5LzmNQXO';
        rightContainer.appendChild(iframe);
    }
     else if (selectedName === '차정연') {
        description.textContent =
            " 자유롭게 흐르는 선들이지만, 도형이라는 틀 속에 갇혀 있는 모습을 통해 우리의 본질을 엿볼 수 있다.";

        const video = document.createElement('video');
        video.src = 'cha.mp4';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        rightContainer.appendChild(video);
    } else {
        description.textContent = `${selectedName}의 상세 내용을 여기에 표시합니다.`;
    }
};

// 초기화
initializeCategory();
