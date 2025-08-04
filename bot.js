const responses = [
  // --- Personal Intro ---
  {
    keywords: ["who are you", "your name", "introduce yourself", "what's your name", "tell me about yourself", "who is ratapakorn"],
    answer: "I'm Ratapakorn Linsa-nguan, a Computer Science and AI student at THI in Germany. I love building tech that solves real problems."
  },
  {
    keywords: ["where are you from", "your hometown", "place of birth", "what country are you from", "nationality"],
    answer: "I'm from Bangkok, Thailand — currently living and studying in Germany."
  },

  // --- Education ---
  {
    keywords: ["what do you study", "your major", "studying", "what course are you in", "your degree", "what is your field", "what program are you doing"],
    answer: "I'm studying Computer Science and Artificial Intelligence at Technische Hochschule Ingolstadt (THI), Germany."
  },
  {
    keywords: ["which university", "where do you study", "what school do you go to", "college name", "your university"],
    answer: "I study at Technische Hochschule Ingolstadt, a university of applied sciences in Bavaria, Germany."
  },

  // --- Languages & Tech ---
  {
    keywords: ["programming languages", "which languages do you use", "languages you know", "coding languages", "tech stack", "developer stack", "your tools", "frameworks you know", "software stack"],
    answer: "I’m confident with Python, JavaScript, Java, HTML/CSS, SQL, Dart/Flutter, and I’ve also worked with C/C++, PHP, and Cypher (Neo4j)."
  },
  {
    keywords: ["what tools do you use", "frameworks", "your tools", "docker", "git", "databases", "editors", "what ide", "programming tools"],
    answer: "I work with Docker, Git, PostgreSQL, MongoDB, Eclipse, and Visual Studio. I’ve also used Firebase and JavaFX in projects."
  },

  // --- Projects ---
  {
    keywords: ["favorite project", "cool project", "memorable", "project you built", "best project", "most interesting project", "alzheimer", "mobile app"],
    answer: "One of my favorite projects is 'Memorable' — a mobile app designed to help individuals with Alzheimer's through memory games and smart reminders."
  },
  {
    keywords: ["ai project", "collision avoidance", "drones", "aircraft", "autonomous flying", "drone project", "mid-air", "safety project"],
    answer: "In one seminar, I researched AI-powered collision avoidance in autonomous aircraft — exploring both real-time detection and prevention using AI and sensor fusion."
  },
  {
    keywords: ["media player", "java project", "audio video project", "javafx app", "media"],
    answer: "I also developed a Java Media Player app with JavaFX, supporting playlist management and full playback controls like pause, seek, and volume adjustment."
  },

  // --- Experience ---
  {
    keywords: ["work experience", "internships", "have you worked", "past jobs", "job history", "professional experience"],
    answer: "While I’m early in my career, I’ve taken leadership roles in academic and volunteer projects, and I’m looking forward to gaining hands-on experience through internships."
  },
  {
    keywords: ["volunteer work", "charity", "gift4schools", "ngo", "community service", "it supervisor"],
    answer: "I worked as an IT Supervisor for Gift4Schools, a charity project where I managed digital registration systems and supported backend operations for volunteer coordination."
  },
  {
    keywords: ["hackathons", "teamwork", "collaboration", "group work", "team projects"],
    answer: "I’ve participated in multiple hackathons in Germany and collaborated with diverse teams to solve real-world challenges under time pressure."
  },

  // --- Soft Skills & Personality ---
  {
    keywords: ["soft skills", "communication", "problem solving", "collaboration", "team skills", "adaptability", "your strengths"],
    answer: "I’m a strong communicator, adaptable in multicultural teams, and thrive in problem-solving situations. I value clear thinking, teamwork, and continuous learning."
  },
  {
    keywords: ["hobbies", "interests", "what do you like", "free time", "your passion", "fun facts"],
    answer: "I enjoy reading about physics — especially general relativity — and exploring how AI and software can solve meaningful problems."
  },

  // --- Contact / Online ---
  {
    keywords: ["contact", "email", "linkedin", "github", "socials", "how can i reach you", "connect"],
    answer: "Sure! GitHub: github.com/Ratapakorn, LinkedIn: linkedin.com/in/ratapakorn-linsa-nguan-0a3baa288/, Email: ratapakorn@gmail.com"
  },
  {
    keywords: ["can i talk to you", "can we connect", "message you", "how do i get in touch"],
    answer: "Absolutely! You can reach out via email or LinkedIn. I'm always open to interesting discussions or collaboration opportunities."
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