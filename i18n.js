// Bilingual copy. Chinese remains the canonical content and routing language.
const translations={
'你好，我是王童菲。':"Hi, I’m Tongfei.",'让想法成为可用的产品。':'Turning ideas into useful products.',
'前端 / 全栈开发 · 伍伦贡大学本科在读':'Frontend / Full-stack developer · UOW undergraduate',
'从流畅的交互体验，到 AI 工具与安全工程。':'From thoughtful interfaces to AI tools and secure systems.',
'伍伦贡大学 · 大数据与网络安全':'University of Wollongong · Big Data & Cyber Security',
'探索前端体验、AI 工具与安全工程。':'Exploring frontend experiences, AI tools and secure systems.',
'从交互体验到服务端实现，':'From interfaces to backend services,',
'关注产品，也关注工程细节。':'with care for products and engineering details.',
'探索我的项目':'Explore my work','更多关于我':'More about me','项目作品':'Projects','探索与实践':'Explore my work','经历与成长':'Experience','学习与积累':'Learning by doing','关于我':'About me','很高兴认识你':'Nice to meet you',
'精选项目':'Selected projects','项目时间线':'Project timeline','实习经历':'Internship','查看详情':'View details','联系我':'Get in touch','预计毕业':'Expected graduation','我的关注方向':'Areas of focus','常用技术':'My toolkit','了解项目':'View project',
'携程计算机技术有限公司':'Ctrip Computer Technology Co., Ltd.',
'前端开发实习生 · 机票预订页性能与体验优化':'Frontend Intern · Flight booking performance & UX',
'前端开发实习生':'Frontend Development Intern','首屏加载时间':'Initial load time','操作响应延迟':'Interaction latency','兼容性问题反馈':'Compatibility reports',
'在实践中不断成长。':'Learning through practice.',
'围绕机票预订页的性能与使用体验展开优化。':'Optimized the performance and user experience of the flight booking page.',
'通过图片懒加载、代码分割、关键 CSS 内联，首屏加载时间从 2.8s 降至 1.2s，LCP 指标提升 57%。':'Used image lazy loading, code splitting and inline critical CSS to reduce initial load time from 2.8s to 1.2s and improve LCP by 57%.',
'重构航班筛选与座位选择的交互逻辑，使用防抖节流优化高频操作，用户操作响应延迟降低 40%。':'Refactored flight filtering and seat selection interactions. Debouncing and throttling reduced interaction latency by 40%.',
'修复 iOS Safari 布局偏移与输入框聚焦问题，统一多端视觉与交互体验，兼容性问题反馈减少 65%。':'Fixed layout shifts and input focus issues in iOS Safari, aligning the experience across devices and reducing compatibility reports by 65%.',
'UOW 澳洲伍伦贡大学':'University of Wollongong, Australia',
'大数据与网络安全 · 本科':'Bachelor’s studies · Big Data & Cyber Security',
'主修课程：网络与通信、算法与数据结构、计算机与网络安全、大数据管理、数据库系统、道德黑客技术':'Coursework: Networks and Communications, Algorithms and Data Structures, Computer and Network Security, Big Data Management, Database Systems, and Ethical Hacking.',
'竞赛与成果':'Competitions & achievements','校园与学习':'Campus & learning',
'新加坡华为 Tech4City 2025 年度团队竞赛 · 第三名':'Huawei Tech4City Singapore 2025 · Third place, team competition',
'李光耀全球商业计划竞赛 · 团队入选「RAISE 社会影响力资助」':'Lee Kuan Yew Global Business Plan Competition · Team selected for the RAISE Social Impact Grant',
'第五届中国移动「梧桐杯」数字智能创新竞赛 · Intelligent Agent 赛道省级（简历未注明具体奖项）':'5th China Mobile Wutong Cup Digital Intelligence Innovation Competition · Provincial level, Intelligent Agent track (award level not specified)',
'2025 春晖杯创新创业大赛 · 通过资格初审并进入路演':'2025 Chunhui Cup Innovation and Entrepreneurship Competition · Passed initial qualification review and advanced to the roadshow',
'CNN 中华学生会宣传部：负责活动海报与宣传长图的视觉设计，并运用 HTML / CSS 优化推文排版与阅读体验。':'CNN Chinese Students Association, Publicity Department: designed event posters and promotional graphics, and used HTML / CSS to improve article layouts and readability.',
'Oracle 职业认证：Data Science、Generative AI。':'Oracle professional certifications: Data Science and Generative AI.',
'英语 IELTS 6.0，具备良好的听说读写能力。':'English: IELTS 6.0, with proficiency in listening, speaking, reading and writing.',
'把想法做出来，也把细节做好。':'Build the idea. Care for the details.',
'我目前在澳洲伍伦贡大学攻读大数据与网络安全本科，关注前端体验、全栈开发，以及 AI 与安全工程的结合。':'I am an undergraduate at the University of Wollongong, Australia, studying Big Data and Cyber Security. My interests span frontend experiences, full-stack development, and the intersection of AI and secure engineering.',
'在携程的前端实习中，我参与机票预订页的性能与交互优化。项目实践涵盖健康管理应用、代码审查与重构工具，以及链上交易执行前风控服务。':'During my frontend internship at Ctrip, I worked on performance and interaction improvements for flight booking. My projects include a health management app, a code review and refactoring tool, and a pre-execution risk service for on-chain transactions.',
'我使用 React 构建界面，也参与 Node.js / TypeScript 后端接口与服务开发。在合作项目中，重视接口文档、联调与验证，让实现能够连接成完整的产品体验。':'I build interfaces with React and contribute to backend APIs and services with Node.js and TypeScript. In team projects, I value API documentation, integration and validation to bring the pieces together into a complete product experience.',
'教育与经历':'Education & experience','一起聊聊':'Let’s connect',
'欢迎交流项目、技术，以及前端或全栈开发机会。':'Happy to discuss projects, technology, and frontend or full-stack opportunities.',
'我的技术工具箱':'My technical toolkit','在项目中积累，在实践中学习。':'Building skills through projects and practice.',
'了解 Vite、TailwindCSS 与 Axios。':'Familiar with the basics of Vite, TailwindCSS and Axios.',
'接口设计与实现、执行流程编排、事件持久化与查询。':'API design and implementation, execution flow orchestration, and event persistence and queries.',
'接触代码审查、沙箱隔离、事件流与本地存储。':'Exposure to code review, sandbox isolation, event streaming and local storage.',
'任务拆解、接口文档、联调，以及桌面应用集成与打包分发。':'Task planning, API documentation, integration testing, desktop app integration, packaging and distribution.',
'代码重构引擎与奶龙桌宠':'Code refactoring engine & Nailong desktop companion',
'交易执行前风险闸门':'Pre-execution transaction risk gate','医疗健康管理应用':'Health management application',
'将代码分析、验证与状态反馈连接起来。一个带有 CLI、控制 API、可视化面板及 Windows 桌宠的本地代码审查与重构工具。':'Connecting code analysis, verification and live feedback. A local code review and refactoring tool with a CLI, control API, dashboard and Windows desktop companion.',
'本地代码审查与重构工具，提供 CLI、控制 API 和可视化 Dashboard。Windows 桌宠通过 SSE 订阅分析事件，展示任务状态与评测反馈。':'A local code review and refactoring tool offering a CLI, control API and visual dashboard. A Windows desktop companion subscribes to analysis events through SSE to display task status and evaluation feedback.',
'串联 AST 分析、代码精简、多 Agent 对抗与 Judge 裁决。通过 AST Guard 限制修改范围，结合回归、对抗和变异测试形成验证证据。':'Connects AST analysis, code simplification, multi-agent adversarial review and judge decisions. AST Guard limits the scope of changes, while regression, adversarial and mutation tests provide validation evidence.',
'使用无网络、只读根文件系统及资源受限的 Docker 沙箱执行生成代码。桌宠支持授权采集、免打扰和记录清理，源码上传需单独授权。':'Runs generated code in Docker sandboxes with networking disabled, read-only root filesystems and resource limits. The companion supports consent-based collection, do-not-disturb mode and record cleanup. Source uploads require separate authorization.',
'面向链上 Swap 的执行前风控系统，以 Agent 规则评估与 Vault 合约约束提供双层保护，支持放行、拒绝与安全路由回退。':'A pre-execution risk system for on-chain swaps. Agent rule evaluation and Vault contract constraints provide two layers of protection, supporting approval, rejection and safe-route fallback.',
'作为后端 API 与服务的主要开发之一，负责报价、风险评估、执行路径与事件日志接口，配合团队完成前后端及合约联调。':'One of the main contributors to backend APIs and services, responsible for quote, risk assessment, execution path and event log endpoints. Collaborated on frontend, backend and contract integration.',
'服务端覆盖 Agent 评估、安全路由回退与绕过评估的对照路径。Demo 提供 48 条链上路由，涵盖 SAFE、SHALLOW、TOXIC、SDA 四类池。':'The server supports agent evaluation, safe-route fallback and a comparison path that bypasses evaluation. The demo provides 48 on-chain routes across SAFE, SHALLOW, TOXIC and SDA pool types.',
'事件日志采用 JSONL 持久化与内存查询，支持交易追踪与分析。项目已部署，配套架构文档、API 契约及变更记录。':'Event logs use JSONL persistence and in-memory queries for transaction tracing and analysis. The deployed project includes architecture documentation, API contracts and a changelog.',
'华为 Tech4City 参赛作品。围绕健康档案、在线咨询与预约挂号，构建面向多种用户角色的健康管理体验。':'A Huawei Tech4City competition entry. A health management experience for multiple user roles, covering health records, online consultations and appointment booking.',
'覆盖健康档案、在线咨询、预约挂号等核心模块。组件化拆分 30+ 可复用组件，包括健康数据卡片、问诊对话框和预约表单，实现模块解耦与快速迭代；页面加载速度提升 40%。':'Covers health records, online consultations and appointment booking. Built more than 30 reusable components, including health data cards, consultation dialogs and booking forms, to decouple modules and accelerate iteration. Page loading speed improved by 40%.',
'集成 ECharts 实现血糖、血压等指标的趋势图表，支持时间轴筛选与异常数据高亮，配合 React Hooks 实现数据实时更新。':'Integrated ECharts for blood glucose and blood pressure trends, with timeline filtering and abnormal-value highlighting. React Hooks support live data updates.',
'针对健康档案与诊疗记录等敏感数据，实现前端 AES 加密传输，结合 JWT 令牌验证与 RBAC 权限控制。':'Implemented frontend AES encryption for transmission of sensitive health and treatment records, alongside JWT authentication and role-based access control.',
'新加坡华为 Tech4City 2025 年度团队竞赛第三名。':'Third place in the Huawei Tech4City Singapore 2025 team competition.',
'我的职责 · 合作项目':'My role · Team project','合作项目':'Team project','分析与验证':'Analysis & verification','安全与交互':'Security & interaction','执行流程':'Execution flow','工程实现':'Engineering','产品与组件':'Product & components','健康数据可视化':'Health data visualization','数据与访问控制':'Data & access control','竞赛成果':'Competition result',
'查看 GitHub':'View on GitHub','访问项目':'Visit project','返回项目列表':'Back to projects','未找到项目。':'Project not found.','返回首页':'Back home','返回技能':'Back to skills','这项技能来自我的学习与开发积累。':'This skill is part of my learning and development experience.','查看完整经历':'View experience',
'用心构建，持续探索。':'Build with care. Keep exploring.','寻找一个项目':'Find a project','搜索项目、技术或关键词…':'Search projects, technologies or keywords…','没有匹配项目，换个关键词试试。':'No matching projects. Try another keyword.','搜索项目':'Search projects','关闭搜索':'Close search','切换深色模式':'Toggle dark mode','主导航':'Main navigation',
'AI 与安全工程':'AI & security engineering','开发协作与基础':'Collaboration & fundamentals','前端 / 全栈开发':'Frontend / Full-stack developer','前端开发':'Frontend','全栈开发':'Full-stack','后端开发':'Backend','AI 工具':'AI tools','全部':'All','首页':'Home','项目':'Projects','经历':'Experience','技能':'Skills','关于':'About','王童菲':'Tongfei Wang'
};
let language='zh';try{language=localStorage.getItem('language')==='en'?'en':'zh'}catch{}
const entries=Object.entries(translations).sort((a,b)=>b[0].length-a[0].length);
const pattern=new RegExp(entries.map(([key])=>key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
const translate=text=>language==='en'?text.replace(pattern,match=>translations[match]):text;
const originalText=new WeakMap(),originalAttrs=new WeakMap();
const languageButton=document.createElement('button');languageButton.id='language-toggle';document.querySelector('.tools').prepend(languageButton);
function localize(){
 observer.disconnect();
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){
  if(node.parentElement.closest('script,style,#language-toggle'))continue;
  const old=originalText.get(node);const source=old&&node.nodeValue===old.output?old.source:node.nodeValue;
  const output=translate(source);originalText.set(node,{source,output});if(node.nodeValue!==output)node.nodeValue=output;
 }
 document.querySelectorAll('[aria-label],input[placeholder]').forEach(el=>{let record=originalAttrs.get(el)||{};for(const key of ['aria-label','placeholder']){if(!el.hasAttribute(key))continue;if(!record[key])record[key]=el.getAttribute(key);el.setAttribute(key,translate(record[key]))}originalAttrs.set(el,record)});
 document.documentElement.lang=language==='en'?'en':'zh-CN';document.body.classList.toggle('english',language==='en');
 languageButton.textContent=language==='en'?'中文':'EN';languageButton.setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');
 document.title=translate(document.title.replace('Tongfei Wang','王童菲').replace('Frontend / Full-stack developer','前端 / 全栈开发'));
 document.querySelector('meta[name="description"]').content=language==='en'?"Tongfei Wang’s portfolio. Frontend and full-stack development, projects, experience and technical skills. University of Wollongong undergraduate.":'王童菲的个人网站。前端与全栈开发，伍伦贡大学大数据与网络安全本科在读。项目、经历与技术实践。';
 observer.observe(document.body,{subtree:true,childList:true,characterData:true});
}
const observer=new MutationObserver(localize);
languageButton.onclick=()=>{language=language==='en'?'zh':'en';try{localStorage.setItem('language',language)}catch{}localize()};
// Search both source text and English translations, preserving the current route.
search=function(){const q=input.value.trim().toLowerCase();document.querySelector('#search-results').innerHTML=projects.filter(p=>{const source=p.title+p.subtitle+p.excerpt+p.tags.join('');return (source+source.replace(pattern,m=>translations[m])).toLowerCase().includes(q)}).map(p=>`<a href="#project/${p.id}">${p.title} · ${p.subtitle}<small>${p.category} · ${p.period}</small></a>`).join('')||'<div class="empty">没有匹配项目，换个关键词试试。</div>';document.querySelectorAll('#search-results a').forEach(a=>a.onclick=()=>dialog.close());localize()};input.oninput=search;
localize();
