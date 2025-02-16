// 200개 이상의 비바스 랜덤 반응 (예시로 일부만 작성)
// 실제 사용 시 배열에 200개 이상의 항목을 추가하세요.
const vivasResponses = [
  "진짜 지겹네.",
  "뭐 하자는 거야?",
  "너 또 그거 묻냐?",
  "미친 거 아냐?",
  "그거 뭐 어쩌라는 거냐?",
  "어휴, 짜증나.",
  "하, 또 시작이네.",
  "너 왜 이렇게 반복해?",
  "그냥 알아서 해.",
  "그게 뭐 대단한 일이라도 되는 줄 알아?",
  "너 계속 이럴 거야?",
  "대체 왜 이렇게 짜증나게 물어봐?",
  "뭐가 그렇게 궁금한데?",
  "정말 넌 끊임없이 묻는구나.",
  "하, 또 그 말이냐.",
  "왜 이렇게 잘 모르겠어?",
  "그거 그냥 네가 해.",
  "정신 차려라.",
  "계속 물어보면 진짜 짜증난다.",
  "아니, 그걸 왜 물어보는 거야?",
  "뭐냐, 답답하게.",
  "좀 더 똑똑하게 살아.",
  "이해 못하겠어?",
  "그건 내가 답할 일이 아니야.",
  "그걸 왜 물어보는 거야?",
  "알아서 해, 진짜.",
  "혼자서 다 해결해봐.",
  "왜 자꾸 물어보냐고?",
  "그만 물어봐.",
  "대답할 기분도 안 나.",
  "너 계속 그러면 진짜 화낸다.",
  "그 질문이 뭐 그렇게 중요한데?",
  "정말로, 왜 이렇게 재밌냐?",
  "그거 물어봐서 뭐 하려고?",
  "너 왜 이렇게 불쾌하게 하냐?",
  "너 진짜 할 말 없으면 입 닫아라.",
  "그게 그렇게 궁금했냐?",
  "계속 물어보는 거 뭐냐?",
  "짜증나게 하지 말라고.",
  "그게 뭐라고 계속 묻는 거냐?",
  "그만 물어보라고.",
  "왜 자꾸 그걸 물어보냐고.",
  "좀 그만해.",
  "진짜 짜증난다.",
  "이게 뭐하는 짓이냐?",
  "내가 계속 대답해줄 것 같아?",
  "넌 답답해서 못 살겠다.",
  "계속 그런 질문 하지 마.",
  "그건 나한테 물어볼 일이 아니야.",
  "뭐가 그렇게 궁금한데?",
  "정말 말도 안 되는 질문이야.",
  "넌 왜 이렇게 끝없이 물어보냐?",
  "그래, 너 말고 누가 물어봤겠냐?",
  "진짜 귀찮게 하지 마.",
  "내가 알려준다고 될 일이 아냐.",
  "또 그거야? 지겹다.",
  "너랑 대화하고 싶지 않아.",
  "이 질문 정말 반복되네.",
  "왜 이렇게 귀찮게 물어보냐고?",
  "그게 그렇게 궁금한 거야?",
  "이제 그만 물어봐.",
  "너 무슨 말을 하고 싶은 거야?",
  "그만 좀 물어봐.",
  "대답할 기분이 아니다.",
  "뭐가 그렇게 급하냐?",
  "이해하지 못하는 거냐?",
  "혼자서 알아서 해라.",
  "어디 가서 또 묻지 말라고.",
  "그거 나한테 묻지 마.",
  "그게 중요한 거냐?",
  "너 지금 내가 대답할 사람 같아?",
  "계속 물어보는 거 진짜 짜증난다.",
  "왜 계속 묻는 거야?",
  "그거 뭐 중요한 질문이라도 되냐?",
  "진짜 할 말이 없냐?",
  "너 답답한 거 알겠어.",
  "그만 물어봐, 이젠.",
  "너는 계속 그렇게 물어보는구나.",
  "그 질문, 왜 계속 반복하냐?",
  "정말 뭐 물어보려고 계속 그래?",
  "그만 좀 물어봐.",
  "계속 묻는 거 불편해.",
  "그게 그렇게 중요한 일이냐?"
  // 여기에 200개 이상의 항목을 추가하세요.
];

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    // 사용자 메시지 추가
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // 비바스 봇 랜덤 응답
    const botResponse = getRandomVivasResponse();

    chatBox.innerHTML += `
      <div class="bot-message">
        <img src="https://cdn.discordapp.com/attachments/1296812318990274602/1340277745753657477/585f360ecb8c6e73.jpeg?ex=67b317eb&is=67b1c66b&hm=aac467011b44e16e752bbf818955ec3c8ece6dd1e8872e987af01488456cf98a" 
             alt="비바스 봇" class="bot-chat-avatar">
        <div class="bot-message-content">
          <span class="bot-chat-name">비바스 봇</span>
          <span class="bot-chat-text">${botResponse}</span>
        </div>
      </div>
    `;

    // 채팅 스크롤 아래로 이동
    chatBox.scrollTop = chatBox.scrollHeight;

    // 입력창 초기화
    document.getElementById("user-input").value = "";
  }
}

function getRandomVivasResponse() {
  const randomIndex = Math.floor(Math.random() * vivasResponses.length);
  return vivasResponses[randomIndex];
}
