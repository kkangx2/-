/* ==========================================================
   이경민 포트폴리오 · 글자 모음 (이 파일만 고치면 됩니다)

   사용법
   1) 메모장으로 이 파일을 열어 따옴표(" ") 안의 글자만 바꾸고 저장하세요.
   2) 폴더를 Netlify에 다시 올리면 사이트에 반영돼요.

   주의
   - 글자는 반드시 큰따옴표(" ") 안에 쓰세요. 글 안에서 따옴표가 필요하면 작은따옴표(' ')를 쓰세요.
   - 줄 끝의 쉼표(,)와 대괄호([ ]), 중괄호({ })는 지우지 마세요.
   - 항목을 더 넣으려면 { ... }, 한 줄을 복사해서 그 아래에 붙이세요.
   - 비워 두려면 "" 로 두세요. 그 줄은 화면에 나오지 않아요.
   ========================================================== */

const SITE = {

  /* ---------- 기본 ---------- */
  pageTitle: "이경민 · Kyung-Min Lee",
  pageDescription: "사람과 반려동물의 초상을 그리는 작가 이경민의 포트폴리오",
  name: "KYUNG-MIN LEE",
  subtitle: "Traditional Korean Painter",

  /* ---------- 상단 메뉴 (이름만 바꿀 수 있어요) ---------- */
  nav: {
    about: "ABOUT",
    work: "WORK",
    contact: "CONTACT"
  },

  /* ---------- 소개 ---------- */
  about: {
    photo: "images/profile.jpg",   /* 프로필 사진. 파일이 없으면 자리가 사라져요. 지우려면 "" */
    photoAlt: "작가 이경민",
    headline: "사람과 반려동물의 초상을 그리는 작가 이경민입니다.",
    paragraphs: [
      "사람은 평생 나라는 존재에서 벗어날 수 없습니다. 하지만 다른 형태의 나를 만나는 방법은 있다고 생각합니다.",
      "제겐 반려동물과 맺는 유대가 그중 하나이고, 그 관계 속에서 자아와 인식의 지평이 넓어진다고 믿습니다.",
      "그래서 그 모습을 그립니다."
    ]
  },

  /* ---------- 학력 · 전시 · 수상 ---------- */
  education: {
    title: "EDUCATION",
    items: [
      { year: "2028", title: "00대학교 대학원", sub: "동양화과 석사 학위" },
      { year: "2027", title: "조선대학교", sub: "미술학부 한국화과 학사 (B.F.A.)" },
      { year: "2023", title: "계원예술고등학교", sub: "2021.03.02. ~ 2023.02.16." }
    ],
    more: ""
  },

  exhibitions: {
    title: "EXHIBITIONS",
    items: [
      { year: "2026", title: "도제: 잘 그렸고 잘 그려가겠습니다, 백학미술관", sub: "11.09. ~ 11.13." },
      { year: "2025", title: "개인전 《LEEKYUNGMIN》, 제22회 월아미술상 수상기념전, 백학미술관", sub: "" },
      { year: "2025", title: "2025 우리옛그림의 아름다움, 도남갤러리", sub: "" },
      { year: "2025", title: "CSU ART FESTIVAL 성과공유전시, 무등갤러리, acc대나무정원", sub: "" }
    ],
    more: "외 다수"
  },

  awards: {
    title: "AWARDS",
    items: [
      { year: "2026", title: "제29회 전국바다사생대전 '대상' 수상", sub: "" },
      { year: "2025", title: "제2회 빛고을미술대전 '국회의원상' 수상", sub: "" },
      { year: "2025", title: "제46회 대한민국창작미술대전 '은상' 수상", sub: "" },
      { year: "2023", title: "제13회 호국미술대전 '우수상' 수상", sub: "" }
    ],
    more: "외 다수"
  },

  /* ---------- 작업 ----------
     - images의 첫 번째 사진이 그리드에 보이는 대표 사진이에요.
     - 두 번째부터는 작품을 클릭했을 때 아래로 이어서 보여요.
     - 사진 파일이 없으면 자동으로 건너뛰어요. 사진을 더 넣으려면 주소를 추가하세요.
     - meta는 연도 · 재료 · 크기, desc는 작품 설명이에요. */
  work: {
    countLabel: "주요 작업 (06)",
    items: [
      { title: "반쪽:아이예뻐", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work1.jpg", "images/work1-2.jpg", "images/work1-3.jpg", "images/work1-4.jpg"] },
      { title: "반쪽:여기봐", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work2.jpg", "images/work2-2.jpg", "images/work2-3.jpg", "images/work2-4.jpg"] },
      { title: "반쪽:여깄었네", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work3.jpg", "images/work3-2.jpg", "images/work3-3.jpg", "images/work3-4.jpg"] },
      { title: "반쪽:놀랐어?", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work4.jpg", "images/work4-2.jpg", "images/work4-3.jpg", "images/work4-4.jpg"] },
      { title: "반쪽:찾았네!", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work5.jpg", "images/work5-2.jpg", "images/work5-3.jpg", "images/work5-4.jpg"] },
      { title: "반쪽:잔다자", category: "53x53cm, 한지에 채색", meta: "", desc: "",
        images: ["images/work6.jpg", "images/work6-2.jpg", "images/work6-3.jpg", "images/work6-4.jpg"] }
    ]
  },

  /* ---------- 연락 ---------- */
  contact: {
    emailLabel: "이메일",
    emailIcon: "✉",                      /* 메일 주소 앞에 붙는 기호. 빼려면 "" */
    email: "lm.gal419@gmail.com",
    instagramLabel: "인스타그램",
    instagram: "leekyungmin04",          /* @ 없이 아이디만 */
    locationLabel: "위치",
    location: "수원, 대한민국"
  },

  /* ---------- 맨 아래 ---------- */
  footer: {
    copyright: "© 2026 이경민. All Rights Reserved."
  },

  /* ---------- 작품 상세 화면의 문구 ---------- */
  viewer: {
    close: "닫기 ✕",
    prev: "← 이전 작업",
    next: "다음 작업 →"
  }
};
