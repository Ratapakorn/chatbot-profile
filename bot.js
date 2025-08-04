const responses = [
  {
    keywords: [
      "who are you", "introduce yourself", "what's your name", "tell me about yourself",
      "who is this", "who am I talking to", "can you tell me who you are"
    ],
    answer: "I'm Ratapakorn Linsa-nguan — a Computer Science and AI student at THI in Germany. I'm passionate about building useful, human-centered technology."
  },

  // --- Location ---
  {
    keywords: [
      "where are you from", "your hometown", "which country are you from", "what city are you from", "your origin"
    ],
    answer: "I'm originally from Bangkok, Thailand — and I’m currently studying and living in Germany."
  },

  // --- Education ---
  {
    keywords: [
      "what do you study", "your major", "what is your field", "your degree", "what are you studying",
      "what course are you in", "what subject do you specialize in"
    ],
    answer: "I'm studying Computer Science and Artificial Intelligence at Technische Hochschule Ingolstadt in Germany."
  },
  {
    keywords: [
      "which university", "what school do you go to", "what's your college", "where do you study"
    ],
    answer: "I study at Technische Hochschule Ingolstadt, a university of applied sciences located in Bavaria, Germany."
  },

  // --- Skills / Tech ---
  {
    keywords: [
      "programming languages", "which languages do you use", "what languages do you know",
      "coding skills", "languages you're good at", "what can you code in"
    ],
    answer: "I’m confident with Python, JavaScript, Java, HTML/CSS, SQL, Dart/Flutter, and have also worked with C/C++ and PHP."
  },
  {
    keywords: [
      "tools you use", "your tech stack", "frameworks", "what technologies do you work with",
      "software you use", "your development environment"
    ],
    answer: "I use tools like Git, Docker, PostgreSQL, MongoDB, and IDEs like Eclipse and Visual Studio. I also work with Firebase and JavaFX."
  },

  // --- Projects (Grouped) ---
  {
    keywords: [
      "what projects have you done", "your past projects", "tell me about your projects",
      "portfolio projects", "examples of your work", "previous work"
    ],
    answer: "Some of the projects I've worked on include: 'Memorable' — a mobile app to support people with Alzheimer’s, a Java-based media player with playlist and playback features, and a seminar on AI-driven collision avoidance in autonomous aircraft. You can explore more on my GitHub!"
  },
  {
    keywords: [
      "favorite project", "project you enjoyed", "most interesting project", "a project you liked the most"
    ],
    answer: "'Memorable' is a project I’m especially proud of. It’s a mobile app designed to support cognitive health in people with Alzheimer’s using games and reminders."
  },
  {
    keywords: [
      "ai project", "machine learning project", "collision avoidance", "drone safety project", "ai system", "autonomous project"
    ],
    answer: "I explored AI-powered collision avoidance in autonomous aircraft — focusing on real-time detection, path planning, and sensor fusion for safer flight systems."
  },
  {
    keywords: [
      "media player", "audio video player", "project in java", "music player app", "video app project"
    ],
    answer: "I developed a media player in Java using JavaFX. It supports playing audio and video files, playlist management, and basic controls like seek and volume."
  },

  // --- Experience / Work ---
  {
    keywords: [
      "do you have work experience", "what work have you done", "any internships",
      "have you worked before", "jobs you’ve had"
    ],
    answer: "I’ve taken leadership roles in academic and volunteer projects, and I’m currently seeking internship opportunities to gain industry experience."
  },
  {
    keywords: [
      "volunteer work", "charity work", "gift4schools", "did you volunteer", "social projects"
    ],
    answer: "I served as IT Supervisor for a charity project called Gift4Schools, managing registration systems and data workflows for volunteers."
  },
  {
    keywords: [
      "hackathons", "teamwork", "group collaboration", "have you worked in teams", "project teams"
    ],
    answer: "Yes! I've participated in hackathons in Germany and collaborated with diverse teams to solve real-world problems under time pressure."
  },

  // --- Personal Qualities ---
  {
    keywords: [
      "soft skills", "what are your strengths", "interpersonal skills", "what are you good at besides coding"
    ],
    answer: "I'm a clear communicator, good at working in teams, and flexible in fast-changing environments. I value thoughtful problem solving and always seek to improve."
  },
  {
    keywords: [
      "hobbies", "interests", "what do you like doing", "free time", "personal interests"
    ],
    answer: "I enjoy learning about general relativity and physics, exploring AI applications, and creating tools that solve meaningful problems."
  },

  // --- Contact / Socials ---
  {
    keywords: [
      "how can I contact you", "your email", "linkedin profile", "github link", "contact information", "how to reach you"
    ],
    answer: "You can contact me via email at ratapakorn@gmail.com, or connect on GitHub (github.com/Ratapakorn) or LinkedIn."
  },
  {
    keywords: [
      "can I talk to you", "can we connect", "how to message you", "can I reach out"
    ],
    answer: "Absolutely! I'm always open to connecting. Just reach out through email or LinkedIn and I’ll get back to you."
  },
  // --- แนะนำตัว ---
{
  keywords: ["คุณคือใคร", "ชื่ออะไร", "แนะนำตัว", "คุณชื่ออะไร", "ชื่อของคุณคืออะไร", "เกี่ยวกับตัวคุณ"],
  answer: "ฉันชื่อรตภากร ลิ้มสงวน เป็นนักศึกษาวิทยาการคอมพิวเตอร์และปัญญาประดิษฐ์ที่มหาวิทยาลัยเทคนิคแห่งอินโกลชตัดท์ ประเทศเยอรมนี"
},
{
  keywords: ["บ้านเกิด", "มาจากที่ไหน", "มาจากจังหวัดอะไร", "บ้านอยู่ที่ไหน", "ถิ่นกำเนิด", "สัญชาติ"],
  answer: "ฉันมาจากกรุงเทพมหานคร ประเทศไทย และปัจจุบันอาศัยอยู่ที่ประเทศเยอรมนี"
},

// --- การศึกษา ---
{
  keywords: ["เรียนอะไร", "เรียนสาขาอะไร", "กำลังเรียนอะไร", "กำลังศึกษาอะไร", "เรียนเกี่ยวกับอะไร", "หลักสูตรที่เรียน"],
  answer: "ฉันกำลังเรียนสาขาวิทยาการคอมพิวเตอร์และ AI ที่มหาวิทยาลัยเทคนิคแห่งอินโกลชตัดท์ ประเทศเยอรมนี"
},
{
  keywords: ["เรียนที่ไหน", "ชื่อมหาวิทยาลัย", "สถานศึกษาของคุณ", "เรียนอยู่มหาวิทยาลัยอะไร", "เรียนอยู่ที่ไหน"],
  answer: "ฉันเรียนอยู่ที่มหาวิทยาลัยเทคนิคแห่งอินโกลชตัดท์ ในรัฐบาวาเรีย ประเทศเยอรมนี"
},

// --- ภาษาและเทคโนโลยี ---
{
  keywords: ["ภาษาโปรแกรม", "ใช้ภาษาอะไร", "เขียนโปรแกรมได้ภาษาอะไร", "ภาษาเขียนโปรแกรมที่ถนัด", "ภาษาที่ใช้เขียนโค้ด"],
  answer: "ฉันสามารถเขียนภาษาไพธอน จาวาสคริปต์ จาวา เอชทีเอ็มแอล ซีเอสเอส เอสคิวแอล ดาร์ต และภาษาคอมพิวเตอร์อื่น ๆ ได้"
},
{
  keywords: ["เครื่องมือที่ใช้", "โปรแกรมที่ใช้", "ใช้เครื่องมืออะไร", "เฟรมเวิร์กที่ถนัด", "เทคโนโลยีที่ใช้", "ใช้โปรแกรมอะไรเขียนโค้ด"],
  answer: "ฉันใช้เครื่องมือเช่น โปรแกรมจัดการฐานข้อมูล เครื่องมือควบคุมเวอร์ชัน และเครื่องมือสำหรับพัฒนาเว็บไซต์และแอปพลิเคชัน"
},

// --- โปรเจกต์ ---
{
  keywords: ["โปรเจกต์ที่ชอบ", "โปรเจกต์น่าสนใจ", "แอปช่วยผู้สูงอายุ", "แอปช่วยความจำ", "แอปเพื่อสุขภาพ", "แอปสำหรับผู้ป่วยอัลไซเมอร์"],
  answer: "ฉันชอบโปรเจกต์ 'Memorable' ซึ่งเป็นแอปช่วยผู้สูงอายุที่มีปัญหาด้านความจำ โดยใช้เกมและระบบเตือนความจำ"
},
{
  keywords: ["โปรเจกต์เกี่ยวกับปัญญาประดิษฐ์", "ระบบป้องกันการชน", "การบินอัตโนมัติ", "ระบบช่วยโดรน", "อากาศยานไร้คนขับ", "ความปลอดภัยทางอากาศ"],
  answer: "ฉันเคยวิจัยระบบหลีกเลี่ยงการชนในอากาศยานไร้คนขับโดยใช้เทคโนโลยีปัญญาประดิษฐ์และการประมวลผลจากเซนเซอร์"
},
{
  keywords: ["แอปเล่นเพลง", "แอปเล่นวิดีโอ", "โปรเจกต์เกี่ยวกับสื่อ", "แอปเครื่องเล่นสื่อ", "สร้างแอปเพื่อความบันเทิง"],
  answer: "ฉันเคยสร้างแอปเล่นมีเดียที่สามารถเล่นไฟล์เสียงและวิดีโอได้ พร้อมฟังก์ชันจัดการเพลย์ลิสต์และควบคุมการเล่น"
},

// --- ประสบการณ์ ---
{
  keywords: ["ประสบการณ์ทำงาน", "เคยทำงานไหม", "ฝึกงาน", "เคยทำอะไร", "งานที่ผ่านมา", "ประสบการณ์ของคุณ"],
  answer: "ฉันมีประสบการณ์ทำงานในโครงการอาสาและการทำงานกลุ่มในมหาวิทยาลัย และกำลังมองหาโอกาสฝึกงานเพิ่มเติมในสายเทคโนโลยี"
},
{
  keywords: ["อาสาสมัคร", "งานการกุศล", "ช่วยเหลือสังคม", "เคยทำโครงการอาสาไหม", "ช่วยงานอาสา", "งานอาสา"],
  answer: "ฉันเคยเป็นผู้ดูแลระบบด้านไอทีให้กับโครงการ Gift4Schools ซึ่งเป็นโครงการอาสาเพื่อสังคมในโรงเรียน"
},
{
  keywords: ["ทำงานเป็นทีม", "งานกลุ่ม", "ทำงานร่วมกับผู้อื่น", "โครงการร่วมกัน", "แข่งขันเขียนโปรแกรม"],
  answer: "ฉันเคยเข้าร่วมการแข่งขัน hackathon หลายครั้งในประเทศเยอรมนี และได้ร่วมงานกับทีมหลากหลายวัฒนธรรม"
},

// --- ทักษะส่วนตัว ---
{
  keywords: ["ทักษะนุ่ม", "การทำงานร่วมกัน", "การสื่อสาร", "ความยืดหยุ่น", "ทักษะการแก้ปัญหา", "จุดเด่นของคุณ"],
  answer: "ฉันเป็นคนสื่อสารได้ดี ยืดหยุ่นในการทำงานกับทีม และสามารถแก้ปัญหาเชิงเทคนิคได้อย่างสร้างสรรค์"
},
{
  keywords: ["งานอดิเรก", "สนใจเรื่องอะไร", "เวลาว่างทำอะไร", "ชอบอะไร", "สิ่งที่คุณสนใจ"],
  answer: "ฉันชอบอ่านเกี่ยวกับฟิสิกส์ โดยเฉพาะทฤษฎีสัมพัทธภาพ และสนใจเทคโนโลยีที่ใช้ช่วยเหลือผู้คน"
},

// --- การติดต่อ ---
{
  keywords: ["ช่องทางติดต่อ", "ติดต่อคุณ", "อีเมลของคุณ", "อยากติดต่อคุณ", "ส่งข้อความหาได้ไหม", "มีวิธีติดต่อยังไง"],
  answer: "คุณสามารถติดต่อฉันผ่านอีเมล ratapakorn@gmail.com หรือดูโปรเจกต์เพิ่มเติมได้ที่ github.com/Ratapakorn และ LinkedIn ของฉัน"
},
{
  keywords: ["สามารถพูดคุยได้ไหม", "ทักได้ไหม", "ติดต่อกลับได้ไหม", "อยากคุยกับคุณ", "พูดคุยกับคุณได้อย่างไร"],
  answer: "แน่นอน! ติดต่อฉันได้ทางอีเมลหรือ LinkedIn ได้เลย ฉันยินดีพูดคุยและร่วมงานกับทุกคน"
}

];

// Handle suggestion clicks
document.querySelectorAll(".suggestion").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById("user-input");
    input.value = button.textContent;
    document.getElementById("send-btn").click();
  });
});

function isThai(text) {
  return /[\u0E00-\u0E7F]/.test(text);
}

function findResponse(input) {
  if (isThai(input)) {
    const cleanedInput = input.toLowerCase();
    for (let item of responses) {
      for (let keyword of item.keywords) {
        if (cleanedInput.includes(keyword)) {
          return item.answer;
        }
      }
    }
    return "ขอโทษค่ะ ฉันยังไม่เข้าใจคำถามนี้ ลองถามใหม่อีกครั้งได้นะ!";
  }

  // English input → use compromise
  const doc = nlp(input).normalize();
  const cleanedInput = doc.text().toLowerCase();

  let bestMatch = { score: 0, answer: "" };
  for (let item of responses) {
    for (let keyword of item.keywords) {
      const keywordDoc = nlp(keyword).normalize();
      const cleanedKeyword = keywordDoc.text().toLowerCase();

      const overlap = cleanedInput
        .split(/\s+/)
        .filter(word => cleanedKeyword.includes(word)).length;

      const score = overlap / cleanedKeyword.split(/\s+/).length;
      if (score > bestMatch.score) {
        bestMatch = { score, answer: item.answer };
      }
    }
  }

  return bestMatch.score > 0.3
    ? bestMatch.answer
    : "Hmm, I’m not sure how to answer that. Try asking something else about me!";
}

// Handle sending message
document.getElementById("send-btn").addEventListener("click", () => {
  const inputField = document.getElementById("user-input");
  const userInput = inputField.value.trim();
  if (!userInput) return;

  addMessage(userInput, "user");
  const botReply = findResponse(userInput);
  setTimeout(() => addMessage(botReply, "bot"), 500);

  inputField.value = "";
});

function addMessage(text, sender) {
  const chatWindow = document.getElementById("chat-window");
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Optional: allow Enter key to send message
document.getElementById("user-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("send-btn").click();
  }
});
