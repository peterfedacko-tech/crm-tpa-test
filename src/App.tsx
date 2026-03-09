import { useState, useEffect } from "react";

/* ── GLOBAL CSS ─────────────────────────────────────────── */
const useGlobal = () => useEffect(() => {
  const s = document.createElement("style");
  s.id = "tpa-global";
  if (!document.getElementById("tpa-global")) {
    s.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root { height: 100%; width: 100%; background: #f0f5f1; font-family: 'DM Sans', sans-serif; }
      ::-webkit-scrollbar { width: 5px; height: 5px; }
      ::-webkit-scrollbar-thumb { background: #b8d4be; border-radius: 4px; }
      button, input, select, textarea { font-family: 'DM Sans', sans-serif; }
    `;
    document.head.appendChild(s);
  }
}, []);

/* ── TRANSLATIONS ───────────────────────────────────────── */
const T = {
  en: {
    tagline: "CRM Platform",
    nav: { dashboard:"Dashboard", contacts:"Contacts", companies:"Companies", deals:"Deals", tasks:"Tasks", projects:"Projects", integrations:"Integrations" },
    welcome:"Welcome back", subtitle:"Here's what's happening at TPA today.",
    totalContacts:"Total Contacts", activeDeals:"Active Deals", openTasks:"Open Tasks", pipelineVal:"Pipeline Value",
    upcomingTasks:"Upcoming Tasks", addContact:"Add Contact", addDeal:"Add Deal", addTask:"Add Task",
    newContact:"New Contact", newDeal:"New Deal", newTask:"New Task", newProject:"New Project", newCompany:"New Company",
    allContacts:"All Contacts", allDeals:"All Deals", allTasks:"All Tasks", allProjects:"All Projects", allCompanies:"All Companies",
    search:"Search...", save:"Save", cancel:"Cancel", edit:"Edit", language:"Language",
    firstName:"First Name", lastName:"Last Name", email:"Email", phone:"Phone", company:"Company", position:"Position",
    website:"Website", industry:"Industry", employees:"Employees", address:"Address",
    title:"Title", amount:"Amount (€)", contact:"Contact", stage:"Stage", priority:"Priority",
    dueDate:"Due Date", notes:"Notes", type:"Type", status:"Status",
    budget:"Budget (€)", client:"Client", hours:"Hours logged", startDate:"Start Date", endDate:"End Date",
    high:"High", medium:"Medium", low:"Low",
    lead:"Lead", prospect:"Prospect", client_s:"Client", inactive:"Inactive", active:"Active", archived:"Archived",
    new_s:"New", contacted:"Contacted", qualified:"Qualified", proposal:"Proposal",
    negotiation:"Negotiation", won:"Won", lost:"Lost",
    todo:"To Do", inProgress:"In Progress", done:"Done",
    planning:"Planning", completed:"Completed", on_hold:"On Hold",
    meeting:"Meeting", call:"Call", email_t:"Email", follow_up:"Follow-up", other:"Other",
    connect:"Connect", connected:"Connected", disconnect:"Disconnect",
    heliosDesc:"Sync invoices, clients and financial data from Helios ERP.",
    abraDesc:"Import/export contacts, companies and accounting data from ABRA Flexi.",
    togglDesc:"Track time on deals and tasks, sync with Toggl Track.",
    integrationsTitle:"Integrations", integrationsSubtitle:"Connect TPA CRM with your existing tools.",
    totalHours:"Total Hours", noRecords:"No records found.",
    confirmDelete:"Are you sure you want to delete this record?", yes:"Yes", no:"No",
    wonDeals:"Won", pipelineLabel:"Pipeline",
  },
  sk: {
    tagline: "CRM Platforma",
    nav: { dashboard:"Prehľad", contacts:"Kontakty", companies:"Spoločnosti", deals:"Obchody", tasks:"Úlohy", projects:"Projekty", integrations:"Integrácie" },
    welcome:"Vitajte späť", subtitle:"Tu je prehľad dnešného dňa v TPA.",
    totalContacts:"Celkom kontaktov", activeDeals:"Aktívne obchody", openTasks:"Otvorené úlohy", pipelineVal:"Hodnota pipeline",
    upcomingTasks:"Nadchádzajúce úlohy", addContact:"Pridať kontakt", addDeal:"Pridať obchod", addTask:"Pridať úlohu",
    newContact:"Nový kontakt", newDeal:"Nový obchod", newTask:"Nová úloha", newProject:"Nový projekt", newCompany:"Nová spoločnosť",
    allContacts:"Všetky kontakty", allDeals:"Všetky obchody", allTasks:"Všetky úlohy", allProjects:"Všetky projekty", allCompanies:"Všetky spoločnosti",
    search:"Hľadať...", save:"Uložiť", cancel:"Zrušiť", edit:"Upraviť", language:"Jazyk",
    firstName:"Meno", lastName:"Priezvisko", email:"E-mail", phone:"Telefón", company:"Spoločnosť", position:"Pozícia",
    website:"Web", industry:"Odvetvie", employees:"Zamestnanci", address:"Adresa",
    title:"Názov", amount:"Suma (€)", contact:"Kontakt", stage:"Fáza", priority:"Priorita",
    dueDate:"Termín", notes:"Poznámky", type:"Typ", status:"Stav",
    budget:"Rozpočet (€)", client:"Klient", hours:"Odprac. hodiny", startDate:"Začiatok", endDate:"Koniec",
    high:"Vysoká", medium:"Stredná", low:"Nízka",
    lead:"Lead", prospect:"Záujemca", client_s:"Klient", inactive:"Neaktívny", active:"Aktívny", archived:"Archivovaný",
    new_s:"Nový", contacted:"Kontaktovaný", qualified:"Kvalifikovaný", proposal:"Ponuka",
    negotiation:"Rokovanie", won:"Vyhrané", lost:"Prehrané",
    todo:"Na vykonanie", inProgress:"Prebieha", done:"Hotovo",
    planning:"Plánovanie", completed:"Dokončený", on_hold:"Pozastavený",
    meeting:"Stretnutie", call:"Hovor", email_t:"E-mail", follow_up:"Follow-up", other:"Iné",
    connect:"Pripojiť", connected:"Pripojené", disconnect:"Odpojiť",
    heliosDesc:"Synchronizujte faktúry, klientov a finančné údaje z Helios ERP.",
    abraDesc:"Import/export kontaktov, spoločností a účtovných dát z ABRA Flexi.",
    togglDesc:"Sledujte čas na obchodoch a úlohách, synchronizujte s Toggl Track.",
    integrationsTitle:"Integrácie", integrationsSubtitle:"Prepojte TPA CRM s vašimi nástrojmi.",
    totalHours:"Celkové hodiny", noRecords:"Žiadne záznamy.",
    confirmDelete:"Naozaj chcete vymazať tento záznam?", yes:"Áno", no:"Nie",
    wonDeals:"Vyhrané", pipelineLabel:"Pipeline",
  }
};

/* ── SEED DATA ──────────────────────────────────────────── */
const SD = {
  contacts: [
    { id:1, firstName:"Tomáš", lastName:"Novák", email:"tomas.novak@novak.sk", phone:"+421 905 333 444", company:"Novák & Partners", position:"CFO", status:"prospect", notes:"" },
    { id:2, firstName:"Jana", lastName:"Horváth", email:"jana.horvath@audit.sk", phone:"+421 911 555 666", company:"Audit Group", position:"Manažér", status:"lead", notes:"Záujem o audit." },
    { id:3, firstName:"Peter", lastName:"Kováč", email:"peter.kovac@korporat.eu", phone:"+421 908 777 888", company:"Korporát EU", position:"Riaditeľ", status:"client_s", notes:"" },
    { id:4, firstName:"Lucia", lastName:"Šimková", email:"lucia.simkova@alfa.sk", phone:"+421 915 456 789", company:"Alfa Consulting", position:"CEO", status:"prospect", notes:"" },
  ],
  companies: [
    { id:1, name:"Novák & Partners", industry:"Poradenstvo", employees:35, website:"www.novak.sk", address:"Košice, Slovakia", status:"active" },
    { id:2, name:"Audit Group", industry:"Audit & Účtovníctvo", employees:60, website:"www.audit.sk", address:"Žilina, Slovakia", status:"active" },
    { id:3, name:"Korporát EU", industry:"Finančné služby", employees:210, website:"www.korporat.eu", address:"Bratislava, Slovakia", status:"active" },
    { id:4, name:"Alfa Consulting", industry:"Manažérske poradenstvo", employees:28, website:"www.alfa.sk", address:"Prešov, Slovakia", status:"active" },
  ],
  deals: [
    { id:1, title:"Ročný audit 2025", company:"Audit Group", contact:"Jana Horváth", amount:18500, stage:"proposal", priority:"high", dueDate:"2025-06-30", notes:"" },
    { id:2, title:"Daňové poradenstvo Q2", company:"Novák & Partners", contact:"Tomáš Novák", amount:6200, stage:"negotiation", priority:"medium", dueDate:"2025-05-15", notes:"" },
    { id:3, title:"Účtovné outsourcing", company:"Korporát EU", contact:"Peter Kováč", amount:24000, stage:"qualified", priority:"high", dueDate:"2025-07-01", notes:"" },
    { id:4, title:"Mzdová agenda 2025", company:"Alfa Consulting", contact:"Lucia Šimková", amount:9800, stage:"won", priority:"low", dueDate:"2025-04-01", notes:"" },
  ],
  tasks: [
    { id:1, title:"Pripraviť audit správu", contact:"Jana Horváth", dueDate:"2025-05-10", priority:"high", status:"inProgress", type:"meeting" },
    { id:2, title:"Zavolať Tomášovi Novákovi", contact:"Tomáš Novák", dueDate:"2025-04-28", priority:"medium", status:"todo", type:"call" },
    { id:3, title:"Odoslať ponuku – Korporát EU", contact:"Peter Kováč", dueDate:"2025-04-25", priority:"high", status:"todo", type:"email_t" },
    { id:4, title:"Follow-up po stretnutí", contact:"Lucia Šimková", dueDate:"2025-04-20", priority:"low", status:"done", type:"email_t" },
  ],
  projects: [
    { id:1, title:"ERP Implementácia", client:"Korporát EU", budget:45000, hoursLogged:68, startDate:"2025-01-15", endDate:"2025-06-30", status:"active" },
    { id:2, title:"Ročná daňová kontrola", client:"Novák & Partners", budget:12000, hoursLogged:22, startDate:"2025-02-01", endDate:"2025-03-31", status:"completed" },
    { id:3, title:"HR Stratégia 2025", client:"Alfa Consulting", budget:8500, hoursLogged:14, startDate:"2025-02-20", endDate:"2025-05-15", status:"planning" },
  ],
};

/* ── COLOURS & HELPERS ──────────────────────────────────── */
const GR = "#1b6b40", DK = "#0d3d2a", BD = "#d4e4da", TX = "#1a2e20", MT = "#6b8c73", LT = "#a0b8a5";
const stageDot = { new_s:"#43a047", contacted:"#1e88e5", qualified:"#f9a825", proposal:"#e91e63", negotiation:"#8e24aa", won:"#2e7d32", lost:"#c62828" };
const priC = { high:"#c62828", medium:"#e65100", low:"#2e7d32" };
const stC = { client_s:"#1b5e20", prospect:"#1565c0", lead:"#e65100", inactive:"#757575", active:"#1b5e20", archived:"#757575", todo:"#e65100", inProgress:"#1565c0", done:"#1b5e20", planning:"#1565c0", completed:"#1b5e20", on_hold:"#757575", won:"#1b5e20", lost:"#c62828" };
const eur = n => new Intl.NumberFormat("sk-SK",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n||0);
const filt = (items, keys, q) => !q ? items : items.filter(x => keys.some(k => String(x[k]||"").toLowerCase().includes(q.toLowerCase())));
const STAGES = ["new_s","contacted","qualified","proposal","negotiation","won","lost"];

/* ── SVG ICONS ──────────────────────────────────────────── */
const IC = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  contacts:  <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  companies: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></>,
  deals:     <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  tasks:     <><polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
  projects:  <><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>,
  integrations: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>,
  plus:      <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
  search:    <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  edit:      <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
  trash:     <><polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
  x:         <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
  check:     <><polyline points="20,6 9,17 4,12"/></>,
  chevron:   <><polyline points="9,18 15,12 9,6"/></>,
  user:      <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  trend:     <><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></>,
  clock:     <><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></>,
  link:      <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  globe:     <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  building:  <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></>,
};
const Ico = ({ n, s=18, c="currentColor" }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{IC[n]||null}</svg>
);

/* ── ATOMS ──────────────────────────────────────────────── */
const inputStyle = { width:"100%", padding:"10px 14px", border:`1.5px solid ${BD}`, borderRadius:8, fontSize:14, color:TX, outline:"none", background:"#f8fbf9", boxSizing:"border-box" };
const Inp = ({value,onChange,placeholder,type="text"}) => <input type={type} value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={inputStyle}/>;
const Sel = ({value,onChange,children}) => <select value={value||""} onChange={e=>onChange(e.target.value)} style={inputStyle}>{children}</select>;
const Tex = ({value,onChange,placeholder}) => <textarea value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={3} style={{...inputStyle,resize:"vertical"}}/>;
const Fld = ({label,children}) => <div style={{marginBottom:15}}><label style={{display:"block",fontSize:11,fontWeight:700,color:"#4a6550",letterSpacing:.5,textTransform:"uppercase",marginBottom:6}}>{label}</label>{children}</div>;
const Badge = ({label,color="#1b5e20"}) => <span style={{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:700,background:color+"18",color,letterSpacing:.4,textTransform:"uppercase"}}>{label}</span>;

const GBtn = ({onClick,children,sm,danger,ghost}) => {
  const bg = danger?"#c62828":ghost?"#fff":GR;
  const col = ghost?GR:"#fff";
  const bord = ghost?`2px solid ${GR}`:"none";
  return <button onClick={onClick} style={{display:"flex",alignItems:"center",gap:7,padding:sm?"7px 14px":"9px 18px",background:bg,color:col,border:bord,borderRadius:9,cursor:"pointer",fontSize:sm?12:13,fontWeight:700,boxShadow:ghost||danger?"none":`0 2px 10px #1b6b4030`}}>{children}</button>;
};

const Modal = ({title,onClose,children}) => (
  <div style={{position:"fixed",inset:0,background:"rgba(0,20,10,.5)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(4px)"}}>
    <div style={{background:"#fff",borderRadius:16,width:"100%",maxWidth:560,maxHeight:"90vh",overflow:"auto",boxShadow:"0 24px 80px rgba(0,60,30,.2)"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"22px 28px 16px",borderBottom:`1px solid ${BD}`}}>
        <h3 style={{margin:0,fontSize:18,fontWeight:800,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{title}</h3>
        <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:"#888",padding:4}}><Ico n="x" s={20}/></button>
      </div>
      <div style={{padding:"20px 28px 28px"}}>{children}</div>
    </div>
  </div>
);

const Row2 = ({children}) => <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 16px"}}>{children}</div>;

const SaveRow = ({onSave,onClose,t}) => (
  <div style={{display:"flex",gap:10,justifyContent:"flex-end",marginTop:10}}>
    <button onClick={onClose} style={{padding:"10px 20px",border:`1.5px solid ${BD}`,borderRadius:8,background:"#fff",cursor:"pointer",fontSize:14,color:"#4a6550",fontWeight:600}}>{t.cancel}</button>
    <button onClick={onSave} style={{padding:"10px 24px",background:GR,color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700}}>{t.save}</button>
  </div>
);

const Stat = ({icon,label,value,sub,accent}) => (
  <div style={{background:"#fff",borderRadius:16,padding:"22px 24px",flex:1,minWidth:145,boxShadow:"0 2px 16px rgba(0,60,30,.07)",borderLeft:`4px solid ${accent}`,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",right:14,top:14,opacity:.07}}><Ico n={icon} s={54} c={accent}/></div>
    <div style={{marginBottom:8}}><Ico n={icon} s={22} c={accent}/></div>
    <div style={{fontSize:30,fontWeight:900,color:DK,lineHeight:1,fontFamily:"'Playfair Display',Georgia,serif"}}>{value}</div>
    <div style={{fontSize:12,color:MT,marginTop:5}}>{label}</div>
    {sub&&<div style={{fontSize:11,color:accent,marginTop:3,fontWeight:700}}>{sub}</div>}
  </div>
);

const PageHead = ({title,search,setSearch,placeholder,onAdd,addLabel}) => (
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:12}}>
    <h1 style={{margin:0,fontSize:24,fontWeight:800,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{title}</h1>
    <div style={{display:"flex",gap:10}}>
      <div style={{position:"relative"}}>
        <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:LT,pointerEvents:"none"}}><Ico n="search" s={15}/></span>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={placeholder} style={{padding:"9px 14px 9px 33px",border:`1.5px solid ${BD}`,borderRadius:8,fontSize:13,outline:"none",background:"#f8fbf9",width:210,color:TX}}/>
      </div>
      <GBtn onClick={onAdd}><Ico n="plus" s={15} c="#fff"/>{addLabel}</GBtn>
    </div>
  </div>
);

const ConfirmDel = ({onConfirm,onCancel,t}) => (
  <div style={{position:"fixed",inset:0,background:"rgba(0,20,10,.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
    <div style={{background:"#fff",borderRadius:16,padding:32,maxWidth:340,width:"90%",textAlign:"center",boxShadow:"0 24px 80px rgba(0,60,30,.2)"}}>
      <div style={{width:52,height:52,borderRadius:"50%",background:"#ffeaea",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}><Ico n="trash" s={22} c="#c62828"/></div>
      <h3 style={{margin:"0 0 20px",color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{t.confirmDelete}</h3>
      <div style={{display:"flex",gap:10,justifyContent:"center"}}>
        <button onClick={onCancel} style={{padding:"10px 22px",border:`1.5px solid ${BD}`,borderRadius:8,background:"#fff",cursor:"pointer",fontSize:14,fontWeight:600,color:"#4a6550"}}>{t.no}</button>
        <button onClick={onConfirm} style={{padding:"10px 22px",background:"#c62828",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700}}>{t.yes}</button>
      </div>
    </div>
  </div>
);

const TblWrap = ({headers,children,noData}) => (
  <div style={{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 16px rgba(0,60,30,.07)"}}>
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
      <thead><tr style={{background:"#f0f7f2"}}>{headers.map((h,i)=><th key={i} style={{padding:"12px 18px",textAlign:"left",fontSize:11,fontWeight:700,color:"#4a6550",letterSpacing:.6,textTransform:"uppercase",borderBottom:`1px solid ${BD}`}}>{h}</th>)}</tr></thead>
      <tbody>{children}</tbody>
    </table>
    {noData&&<p style={{textAlign:"center",color:LT,padding:28,fontSize:14}}>{noData}</p>}
  </div>
);
const TR = ({children,i}) => <tr style={{borderBottom:`1px solid #f0f5f1`,background:i%2?"#fafcfa":"#fff"}}>{children}</tr>;
const TD = ({children,bold}) => <td style={{padding:"12px 18px",color:bold?TX:MT,fontWeight:bold?600:400}}>{children}</td>;
const ActTD = ({onEdit,onDelete}) => (
  <td style={{padding:"12px 18px"}}><div style={{display:"flex",gap:8}}>
    <button onClick={onEdit} style={{background:"none",border:"none",cursor:"pointer",color:GR,padding:3}}><Ico n="edit" s={16}/></button>
    <button onClick={onDelete} style={{background:"none",border:"none",cursor:"pointer",color:"#c62828",padding:3}}><Ico n="trash" s={16}/></button>
  </div></td>
);

/* ── DASHBOARD ──────────────────────────────────────────── */
const Dashboard = ({t,contacts,deals,tasks,onAdd}) => {
  const pipe = deals.filter(d=>!["won","lost"].includes(d.stage)).reduce((a,d)=>a+d.amount,0);
  const wonAmt = deals.filter(d=>d.stage==="won").reduce((a,d)=>a+d.amount,0);
  return (
    <div>
      <div style={{marginBottom:26}}>
        <h1 style={{margin:0,fontSize:28,fontWeight:900,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{t.welcome}, Admin 👋</h1>
        <p style={{margin:"6px 0 0",color:MT,fontSize:15}}>{t.subtitle}</p>
      </div>
      <div style={{display:"flex",gap:14,marginBottom:22,flexWrap:"wrap"}}>
        <Stat icon="contacts" label={t.totalContacts} value={contacts.length} accent="#1b6b40"/>
        <Stat icon="deals" label={t.activeDeals} value={deals.filter(d=>!["won","lost"].includes(d.stage)).length} accent="#2a5298"/>
        <Stat icon="tasks" label={t.openTasks} value={tasks.filter(x=>x.status!=="done").length} accent="#c0392b"/>
        <Stat icon="trend" label={t.pipelineVal} value={eur(pipe)} sub={`${t.wonDeals}: ${eur(wonAmt)}`} accent="#7b3fa0"/>
      </div>
      <div style={{display:"flex",gap:10,marginBottom:26,flexWrap:"wrap"}}>
        {[{l:t.addContact,p:"contacts"},{l:t.addDeal,p:"deals"},{l:t.addTask,p:"tasks"}].map(b=>(
          <GBtn key={b.l} onClick={()=>onAdd(b.p)}><Ico n="plus" s={15} c="#fff"/>{b.l}</GBtn>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
        <div style={{background:"#fff",borderRadius:16,padding:22,boxShadow:"0 2px 16px rgba(0,60,30,.07)"}}>
          <h3 style={{margin:"0 0 16px",fontSize:15,fontWeight:800,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{t.pipelineLabel}</h3>
          {["qualified","proposal","negotiation"].map(s=>{
            const sd=deals.filter(d=>d.stage===s); if(!sd.length) return null;
            return <div key={s} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <div style={{width:9,height:9,borderRadius:"50%",background:stageDot[s],flexShrink:0}}/>
              <div style={{flex:1,fontSize:13,color:"#3a5a42",fontWeight:500}}>{t[s]}</div>
              <div style={{fontSize:13,fontWeight:800,color:DK}}>{sd.length} · {eur(sd.reduce((a,d)=>a+d.amount,0))}</div>
            </div>;
          })}
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:22,boxShadow:"0 2px 16px rgba(0,60,30,.07)"}}>
          <h3 style={{margin:"0 0 16px",fontSize:15,fontWeight:800,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{t.upcomingTasks}</h3>
          {tasks.filter(x=>x.status!=="done").slice(0,4).map(task=>(
            <div key={task.id} style={{display:"flex",alignItems:"center",gap:10,marginBottom:9,padding:"9px 13px",background:"#f8fbf9",borderRadius:9}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:priC[task.priority],flexShrink:0}}/>
              <div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:TX}}>{task.title}</div><div style={{fontSize:11,color:LT,marginTop:1}}>{task.dueDate}</div></div>
              <Badge label={t[task.status]||task.status} color={stC[task.status]}/>
            </div>
          ))}
          {!tasks.filter(x=>x.status!=="done").length&&<p style={{color:LT,fontSize:13}}>{t.noRecords}</p>}
        </div>
      </div>
    </div>
  );
};

/* ── CONTACTS ───────────────────────────────────────────── */
const Contacts = ({t,contacts,setContacts}) => {
  const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [ed,setEd]=useState(null); const [form,setForm]=useState({}); const [del,setDel]=useState(null);
  const f=v=>setForm(x=>({...x,...v}));
  const show=(d=null)=>{setEd(d);setForm(d?{...d}:{firstName:"",lastName:"",email:"",phone:"",company:"",position:"",status:"lead",notes:""});setOpen(true);};
  const save=()=>{ed?setContacts(cs=>cs.map(c=>c.id===ed.id?{...c,...form}:c)):setContacts(cs=>[...cs,{...form,id:Date.now()}]);setOpen(false);};
  const rows=filt(contacts,["firstName","lastName","email","company"],q);
  return (
    <div>
      <PageHead title={t.allContacts} search={q} setSearch={setQ} placeholder={t.search} onAdd={()=>show()} addLabel={t.newContact}/>
      <TblWrap headers={[t.name,t.email,t.phone,t.company,t.position,t.status,""]} noData={!rows.length?t.noRecords:undefined}>
        {rows.map((c,i)=><TR key={c.id} i={i}><TD bold>{c.firstName} {c.lastName}</TD><TD>{c.email}</TD><TD>{c.phone}</TD><TD>{c.company}</TD><TD>{c.position}</TD><TD><Badge label={t[c.status]||c.status} color={stC[c.status]||"#555"}/></TD><ActTD onEdit={()=>show(c)} onDelete={()=>setDel(c.id)}/></TR>)}
      </TblWrap>
      {open&&<Modal title={ed?t.edit:t.newContact} onClose={()=>setOpen(false)}>
        <Row2><Fld label={t.firstName}><Inp value={form.firstName} onChange={v=>f({firstName:v})}/></Fld><Fld label={t.lastName}><Inp value={form.lastName} onChange={v=>f({lastName:v})}/></Fld></Row2>
        <Fld label={t.email}><Inp type="email" value={form.email} onChange={v=>f({email:v})}/></Fld>
        <Fld label={t.phone}><Inp value={form.phone} onChange={v=>f({phone:v})}/></Fld>
        <Row2><Fld label={t.company}><Inp value={form.company} onChange={v=>f({company:v})}/></Fld><Fld label={t.position}><Inp value={form.position} onChange={v=>f({position:v})}/></Fld></Row2>
        <Fld label={t.status}><Sel value={form.status} onChange={v=>f({status:v})}>{["lead","prospect","client_s","inactive"].map(s=><option key={s} value={s}>{t[s]}</option>)}</Sel></Fld>
        <Fld label={t.notes}><Tex value={form.notes} onChange={v=>f({notes:v})}/></Fld>
        <SaveRow onSave={save} onClose={()=>setOpen(false)} t={t}/>
      </Modal>}
      {del&&<ConfirmDel onConfirm={()=>{setContacts(cs=>cs.filter(c=>c.id!==del));setDel(null);}} onCancel={()=>setDel(null)} t={t}/>}
    </div>
  );
};

/* ── COMPANIES ──────────────────────────────────────────── */
const Companies = ({t,companies,setCompanies}) => {
  const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [ed,setEd]=useState(null); const [form,setForm]=useState({}); const [del,setDel]=useState(null);
  const f=v=>setForm(x=>({...x,...v}));
  const show=(d=null)=>{setEd(d);setForm(d?{...d}:{name:"",industry:"",employees:"",website:"",address:"",status:"active"});setOpen(true);};
  const save=()=>{ed?setCompanies(cs=>cs.map(c=>c.id===ed.id?{...c,...form}:c)):setCompanies(cs=>[...cs,{...form,id:Date.now()}]);setOpen(false);};
  return (
    <div>
      <PageHead title={t.allCompanies} search={q} setSearch={setQ} placeholder={t.search} onAdd={()=>show()} addLabel={t.newCompany}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(275px,1fr))",gap:16}}>
        {filt(companies,["name","industry","address"],q).map(co=>(
          <div key={co.id} style={{background:"#fff",borderRadius:16,padding:22,boxShadow:"0 2px 16px rgba(0,60,30,.07)",borderTop:`3px solid ${GR}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
              <div><div style={{fontSize:16,fontWeight:700,color:DK,marginBottom:6}}>{co.name}</div><Badge label={t[co.status]||co.status} color={stC[co.status]||"#555"}/></div>
              <div style={{display:"flex",gap:6}}>
                <button onClick={()=>show(co)} style={{background:"none",border:"none",cursor:"pointer",color:GR}}><Ico n="edit" s={15}/></button>
                <button onClick={()=>setDel(co.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#c62828"}}><Ico n="trash" s={15}/></button>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:7,fontSize:13,color:MT}}>
              {co.industry&&<div style={{display:"flex",gap:8,alignItems:"center"}}><Ico n="building" s={13} c={LT}/>{co.industry}</div>}
              <div style={{display:"flex",gap:8,alignItems:"center"}}><Ico n="user" s={13} c={LT}/>{co.employees} {t.employees}</div>
              {co.website&&<div style={{display:"flex",gap:8,alignItems:"center"}}><Ico n="globe" s={13} c={LT}/>{co.website}</div>}
              {co.address&&<div style={{display:"flex",gap:8,alignItems:"center"}}><Ico n="link" s={13} c={LT}/>{co.address}</div>}
            </div>
          </div>
        ))}
      </div>
      {open&&<Modal title={ed?t.edit:t.newCompany} onClose={()=>setOpen(false)}>
        <Fld label={t.name}><Inp value={form.name} onChange={v=>f({name:v})}/></Fld>
        <Row2><Fld label={t.industry}><Inp value={form.industry} onChange={v=>f({industry:v})}/></Fld><Fld label={t.employees}><Inp type="number" value={form.employees} onChange={v=>f({employees:v})}/></Fld></Row2>
        <Fld label={t.website}><Inp value={form.website} onChange={v=>f({website:v})}/></Fld>
        <Fld label={t.address}><Inp value={form.address} onChange={v=>f({address:v})}/></Fld>
        <Fld label={t.status}><Sel value={form.status} onChange={v=>f({status:v})}>{["active","archived"].map(s=><option key={s} value={s}>{t[s]}</option>)}</Sel></Fld>
        <SaveRow onSave={save} onClose={()=>setOpen(false)} t={t}/>
      </Modal>}
      {del&&<ConfirmDel onConfirm={()=>{setCompanies(cs=>cs.filter(c=>c.id!==del));setDel(null);}} onCancel={()=>setDel(null)} t={t}/>}
    </div>
  );
};

/* ── DEALS ──────────────────────────────────────────────── */
const Deals = ({t,deals,setDeals}) => {
  const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [ed,setEd]=useState(null); const [form,setForm]=useState({}); const [del,setDel]=useState(null);
  const f=v=>setForm(x=>({...x,...v}));
  const show=(d=null)=>{setEd(d);setForm(d?{...d}:{title:"",company:"",contact:"",amount:"",stage:"new_s",priority:"medium",dueDate:"",notes:""});setOpen(true);};
  const save=()=>{ed?setDeals(ds=>ds.map(d=>d.id===ed.id?{...d,...form,amount:Number(form.amount)}:d)):setDeals(ds=>[...ds,{...form,id:Date.now(),amount:Number(form.amount)}]);setOpen(false);};
  return (
    <div>
      <PageHead title={t.allDeals} search={q} setSearch={setQ} placeholder={t.search} onAdd={()=>show()} addLabel={t.newDeal}/>
      <div style={{display:"flex",gap:11,overflowX:"auto",paddingBottom:12}}>
        {STAGES.map(stage=>{
          const sd=filt(deals.filter(d=>d.stage===stage),["title","company"],q);
          return (
            <div key={stage} style={{minWidth:210,flex:"0 0 210px"}}>
              <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:11}}>
                <div style={{width:9,height:9,borderRadius:"50%",background:stageDot[stage]||"#888"}}/>
                <span style={{fontSize:11,fontWeight:800,color:"#4a6550",textTransform:"uppercase",letterSpacing:.5,flex:1}}>{t[stage]||stage}</span>
                <span style={{fontSize:11,fontWeight:800,color:GR,background:"#e8f5e9",borderRadius:20,padding:"2px 8px"}}>{sd.length}</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {sd.map(deal=>(
                  <div key={deal.id} style={{background:"#fff",borderRadius:12,padding:14,boxShadow:"0 2px 12px rgba(0,60,30,.08)",borderLeft:`3px solid ${stageDot[deal.stage]||"#888"}`}}>
                    <div style={{fontWeight:700,fontSize:13,color:DK,marginBottom:4}}>{deal.title}</div>
                    <div style={{fontSize:12,color:MT,marginBottom:4}}>{deal.company}</div>
                    <div style={{fontSize:16,fontWeight:900,color:GR,marginBottom:7}}>{eur(deal.amount)}</div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <Badge label={t[deal.priority]||deal.priority} color={priC[deal.priority]}/>
                      <div style={{display:"flex",gap:4}}>
                        <button onClick={()=>show(deal)} style={{background:"none",border:"none",cursor:"pointer",color:GR,padding:2}}><Ico n="edit" s={13}/></button>
                        <button onClick={()=>setDel(deal.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#c62828",padding:2}}><Ico n="trash" s={13}/></button>
                      </div>
                    </div>
                    {deal.dueDate&&<div style={{fontSize:11,color:LT,marginTop:5}}>{deal.dueDate}</div>}
                  </div>
                ))}
                {!sd.length&&<div style={{padding:14,background:"#f8fbf9",borderRadius:10,textAlign:"center",fontSize:12,color:"#c0d4c4",border:`1.5px dashed ${BD}`}}>—</div>}
              </div>
            </div>
          );
        })}
      </div>
      {open&&<Modal title={ed?t.edit:t.newDeal} onClose={()=>setOpen(false)}>
        <Fld label={t.title}><Inp value={form.title} onChange={v=>f({title:v})}/></Fld>
        <Row2><Fld label={t.company}><Inp value={form.company} onChange={v=>f({company:v})}/></Fld><Fld label={t.contact}><Inp value={form.contact} onChange={v=>f({contact:v})}/></Fld></Row2>
        <Row2><Fld label={t.amount}><Inp type="number" value={form.amount} onChange={v=>f({amount:v})}/></Fld><Fld label={t.dueDate}><Inp type="date" value={form.dueDate} onChange={v=>f({dueDate:v})}/></Fld></Row2>
        <Row2>
          <Fld label={t.stage}><Sel value={form.stage} onChange={v=>f({stage:v})}>{STAGES.map(s=><option key={s} value={s}>{t[s]||s}</option>)}</Sel></Fld>
          <Fld label={t.priority}><Sel value={form.priority} onChange={v=>f({priority:v})}>{["high","medium","low"].map(p=><option key={p} value={p}>{t[p]}</option>)}</Sel></Fld>
        </Row2>
        <Fld label={t.notes}><Tex value={form.notes} onChange={v=>f({notes:v})}/></Fld>
        <SaveRow onSave={save} onClose={()=>setOpen(false)} t={t}/>
      </Modal>}
      {del&&<ConfirmDel onConfirm={()=>{setDeals(ds=>ds.filter(d=>d.id!==del));setDel(null);}} onCancel={()=>setDel(null)} t={t}/>}
    </div>
  );
};

/* ── TASKS ──────────────────────────────────────────────── */
const Tasks = ({t,tasks,setTasks}) => {
  const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [ed,setEd]=useState(null); const [form,setForm]=useState({}); const [del,setDel]=useState(null);
  const f=v=>setForm(x=>({...x,...v}));
  const show=(d=null)=>{setEd(d);setForm(d?{...d}:{title:"",contact:"",dueDate:"",priority:"medium",status:"todo",type:"call"});setOpen(true);};
  const save=()=>{ed?setTasks(ts=>ts.map(x=>x.id===ed.id?{...x,...form}:x)):setTasks(ts=>[...ts,{...form,id:Date.now()}]);setOpen(false);};
  const toggle=(id)=>setTasks(ts=>ts.map(x=>x.id===id?{...x,status:x.status==="done"?"todo":"done"}:x));
  const rows=filt(tasks,["title","contact","type"],q);
  return (
    <div>
      <PageHead title={t.allTasks} search={q} setSearch={setQ} placeholder={t.search} onAdd={()=>show()} addLabel={t.newTask}/>
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {rows.map(task=>(
          <div key={task.id} style={{background:"#fff",borderRadius:13,padding:"14px 18px",boxShadow:"0 2px 12px rgba(0,60,30,.07)",display:"flex",alignItems:"center",gap:13,borderLeft:`4px solid ${priC[task.priority]}`}}>
            <button onClick={()=>toggle(task.id)} style={{width:22,height:22,borderRadius:"50%",border:`2px solid ${task.status==="done"?GR:BD}`,background:task.status==="done"?GR:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,transition:"all .2s"}}>
              {task.status==="done"&&<Ico n="check" s={12} c="#fff"/>}
            </button>
            <div style={{flex:1}}>
              <div style={{fontSize:14,fontWeight:600,color:task.status==="done"?LT:TX,textDecoration:task.status==="done"?"line-through":"none"}}>{task.title}</div>
              <div style={{fontSize:12,color:LT,marginTop:2}}>{task.contact} · {task.dueDate}</div>
            </div>
            <Badge label={t[task.type]||task.type} color="#2a5298"/>
            <Badge label={t[task.status]||task.status} color={stC[task.status]||"#555"}/>
            <div style={{display:"flex",gap:6}}>
              <button onClick={()=>show(task)} style={{background:"none",border:"none",cursor:"pointer",color:GR,padding:3}}><Ico n="edit" s={15}/></button>
              <button onClick={()=>setDel(task.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#c62828",padding:3}}><Ico n="trash" s={15}/></button>
            </div>
          </div>
        ))}
        {!rows.length&&<p style={{textAlign:"center",color:LT,padding:24}}>{t.noRecords}</p>}
      </div>
      {open&&<Modal title={ed?t.edit:t.newTask} onClose={()=>setOpen(false)}>
        <Fld label={t.title}><Inp value={form.title} onChange={v=>f({title:v})}/></Fld>
        <Fld label={t.contact}><Inp value={form.contact} onChange={v=>f({contact:v})}/></Fld>
        <Row2><Fld label={t.dueDate}><Inp type="date" value={form.dueDate} onChange={v=>f({dueDate:v})}/></Fld><Fld label={t.type}><Sel value={form.type} onChange={v=>f({type:v})}>{["meeting","call","email_t","follow_up","other"].map(x=><option key={x} value={x}>{t[x]||x}</option>)}</Sel></Fld></Row2>
        <Row2><Fld label={t.priority}><Sel value={form.priority} onChange={v=>f({priority:v})}>{["high","medium","low"].map(p=><option key={p} value={p}>{t[p]}</option>)}</Sel></Fld><Fld label={t.status}><Sel value={form.status} onChange={v=>f({status:v})}>{["todo","inProgress","done"].map(s=><option key={s} value={s}>{t[s]}</option>)}</Sel></Fld></Row2>
        <SaveRow onSave={save} onClose={()=>setOpen(false)} t={t}/>
      </Modal>}
      {del&&<ConfirmDel onConfirm={()=>{setTasks(ts=>ts.filter(x=>x.id!==del));setDel(null);}} onCancel={()=>setDel(null)} t={t}/>}
    </div>
  );
};

/* ── PROJECTS ───────────────────────────────────────────── */
const Projects = ({t,projects,setProjects}) => {
  const [q,setQ]=useState(""); const [open,setOpen]=useState(false); const [ed,setEd]=useState(null); const [form,setForm]=useState({}); const [del,setDel]=useState(null);
  const f=v=>setForm(x=>({...x,...v}));
  const show=(d=null)=>{setEd(d);setForm(d?{...d}:{title:"",client:"",budget:"",hoursLogged:"",startDate:"",endDate:"",status:"planning"});setOpen(true);};
  const save=()=>{ed?setProjects(ps=>ps.map(p=>p.id===ed.id?{...p,...form,budget:Number(form.budget),hoursLogged:Number(form.hoursLogged)}:p)):setProjects(ps=>[...ps,{...form,id:Date.now(),budget:Number(form.budget),hoursLogged:Number(form.hoursLogged)}]);setOpen(false);};
  const totalH=projects.reduce((a,p)=>a+(p.hoursLogged||0),0);
  return (
    <div>
      <PageHead title={t.allProjects} search={q} setSearch={setQ} placeholder={t.search} onAdd={()=>show()} addLabel={t.newProject}/>
      <div style={{display:"flex",gap:14,marginBottom:20,flexWrap:"wrap"}}>
        <Stat icon="projects" label={t.allProjects} value={projects.length} accent={GR}/>
        <Stat icon="clock" label={t.totalHours} value={`${totalH} hrs`} accent="#2a5298"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:16}}>
        {filt(projects,["title","client"],q).map(p=>{
          const pct=p.budget?Math.min(100,Math.round((p.hoursLogged*150/p.budget)*100)):0;
          return <div key={p.id} style={{background:"#fff",borderRadius:16,padding:22,boxShadow:"0 2px 16px rgba(0,60,30,.07)",borderTop:`3px solid ${stC[p.status]||GR}`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div><div style={{fontSize:15,fontWeight:700,color:DK,marginBottom:5}}>{p.title}</div><Badge label={t[p.status]||p.status} color={stC[p.status]||"#555"}/></div>
              <div style={{display:"flex",gap:6}}>
                <button onClick={()=>show(p)} style={{background:"none",border:"none",cursor:"pointer",color:GR}}><Ico n="edit" s={15}/></button>
                <button onClick={()=>setDel(p.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#c62828"}}><Ico n="trash" s={15}/></button>
              </div>
            </div>
            <div style={{fontSize:13,color:MT,marginBottom:10}}>{p.client}</div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:MT,marginBottom:8}}>
              <span>{t.budget}: <strong style={{color:DK}}>{eur(p.budget)}</strong></span>
              <span>{t.hours}: <strong style={{color:GR}}>{p.hoursLogged}h</strong></span>
            </div>
            <div style={{background:"#eef4ef",borderRadius:6,height:6}}><div style={{height:"100%",background:GR,width:`${pct}%`,borderRadius:6}}/></div>
            <div style={{fontSize:11,color:LT,marginTop:6}}>{p.startDate} → {p.endDate}</div>
          </div>;
        })}
      </div>
      {open&&<Modal title={ed?t.edit:t.newProject} onClose={()=>setOpen(false)}>
        <Fld label={t.title}><Inp value={form.title} onChange={v=>f({title:v})}/></Fld>
        <Fld label={t.client}><Inp value={form.client} onChange={v=>f({client:v})}/></Fld>
        <Row2><Fld label={t.budget}><Inp type="number" value={form.budget} onChange={v=>f({budget:v})}/></Fld><Fld label={t.hours}><Inp type="number" value={form.hoursLogged} onChange={v=>f({hoursLogged:v})}/></Fld></Row2>
        <Row2><Fld label={t.startDate}><Inp type="date" value={form.startDate} onChange={v=>f({startDate:v})}/></Fld><Fld label={t.endDate}><Inp type="date" value={form.endDate} onChange={v=>f({endDate:v})}/></Fld></Row2>
        <Fld label={t.status}><Sel value={form.status} onChange={v=>f({status:v})}>{["planning","active","on_hold","completed"].map(s=><option key={s} value={s}>{t[s]}</option>)}</Sel></Fld>
        <SaveRow onSave={save} onClose={()=>setOpen(false)} t={t}/>
      </Modal>}
      {del&&<ConfirmDel onConfirm={()=>{setProjects(ps=>ps.filter(p=>p.id!==del));setDel(null);}} onCancel={()=>setDel(null)} t={t}/>}
    </div>
  );
};

/* ── INTEGRATIONS ───────────────────────────────────────── */
const Integrations = ({t}) => {
  const [conn,setConn]=useState({helios:false,abra:false,toggl:false});
  const list=[
    {key:"helios",name:"Helios",desc:t.heliosDesc,letter:"H",color:"#1565c0"},
    {key:"abra",name:"ABRA Flexi",desc:t.abraDesc,letter:"A",color:"#c0392b"},
    {key:"toggl",name:"Toggl Track",desc:t.togglDesc,letter:"T",color:"#e2401c"},
  ];
  return (
    <div>
      <div style={{marginBottom:26}}>
        <h1 style={{margin:0,fontSize:24,fontWeight:800,color:DK,fontFamily:"'Playfair Display',Georgia,serif"}}>{t.integrationsTitle}</h1>
        <p style={{margin:"6px 0 0",color:MT}}>{t.integrationsSubtitle}</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:18}}>
        {list.map(ig=>(
          <div key={ig.key} style={{background:"#fff",borderRadius:16,padding:26,boxShadow:"0 2px 16px rgba(0,60,30,.07)",borderTop:`3px solid ${ig.color}`}}>
            <div style={{display:"flex",alignItems:"center",gap:13,marginBottom:14}}>
              <div style={{width:48,height:48,borderRadius:12,background:ig.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:900,color:"#fff",fontFamily:"'Playfair Display',Georgia,serif"}}>{ig.letter}</div>
              <div><div style={{fontWeight:800,fontSize:16,color:DK}}>{ig.name}</div><Badge label={conn[ig.key]?t.connected:t.connect} color={conn[ig.key]?"#1b5e20":"#555"}/></div>
            </div>
            <p style={{fontSize:14,color:MT,marginBottom:18,lineHeight:1.6}}>{ig.desc}</p>
            <button onClick={()=>setConn(c=>({...c,[ig.key]:!c[ig.key]}))} style={{width:"100%",padding:"10px 0",border:`2px solid ${conn[ig.key]?"#c62828":ig.color}`,borderRadius:10,background:conn[ig.key]?"#fff":ig.color,color:conn[ig.key]?ig.color:"#fff",fontWeight:700,fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:"inherit"}}>
              <Ico n={conn[ig.key]?"x":"link"} s={15} c={conn[ig.key]?ig.color:"#fff"}/>
              {conn[ig.key]?`${t.disconnect} ${ig.name}`:`${t.connect} ${ig.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── APP ────────────────────────────────────────────────── */
export default function App() {
  useGlobal();
  const [lang,setLang]=useState("sk");
  const [page,setPage]=useState("dashboard");
  const [contacts,setContacts]=useState(SD.contacts);
  const [companies,setCompanies]=useState(SD.companies);
  const [deals,setDeals]=useState(SD.deals);
  const [tasks,setTasks]=useState(SD.tasks);
  const [projects,setProjects]=useState(SD.projects);
  const t=T[lang];

  const nav=[
    {k:"dashboard",i:"dashboard"},{k:"contacts",i:"contacts"},{k:"companies",i:"companies"},
    {k:"deals",i:"deals"},{k:"tasks",i:"tasks"},{k:"projects",i:"projects"},{k:"integrations",i:"integrations"},
  ];

  return (
    <div style={{display:"flex",height:"100vh",width:"100vw",background:"#f0f5f1",overflow:"hidden",fontFamily:"'DM Sans',sans-serif"}}>

      {/* SIDEBAR */}
      <div style={{width:218,background:DK,display:"flex",flexDirection:"column",flexShrink:0,position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 20% 15%,rgba(27,107,64,.35) 0%,transparent 55%)",pointerEvents:"none"}}/>
        {/* Logo */}
        <div style={{padding:"24px 22px 18px",borderBottom:"1px solid rgba(255,255,255,.08)",position:"relative",flexShrink:0}}>
          <div style={{fontSize:33,fontWeight:900,color:"#fff",fontFamily:"'Playfair Display',Georgia,serif",letterSpacing:-1,lineHeight:1}}>tpa</div>
          <div style={{fontSize:9,color:"rgba(255,255,255,.38)",letterSpacing:2,textTransform:"uppercase",marginTop:3}}>{t.tagline}</div>
        </div>
        {/* Nav */}
        <nav style={{flex:1,padding:"12px 9px",overflow:"auto",position:"relative"}}>
          {nav.map(item=>{
            const active=page===item.k;
            return <button key={item.k} onClick={()=>setPage(item.k)} style={{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"10px 13px",marginBottom:2,background:active?"rgba(255,255,255,.13)":"transparent",border:"none",borderRadius:9,cursor:"pointer",color:active?"#fff":"rgba(255,255,255,.48)",fontSize:13,fontWeight:active?700:400,textAlign:"left",transition:"all .15s",borderLeft:active?"3px solid #5dbb7c":"3px solid transparent",fontFamily:"inherit"}}>
              <Ico n={item.i} s={16} c={active?"#fff":"rgba(255,255,255,.42)"}/>{t.nav[item.k]}
            </button>;
          })}
        </nav>
        {/* Language */}
        <div style={{padding:"12px 14px 18px",borderTop:"1px solid rgba(255,255,255,.08)",position:"relative",flexShrink:0}}>
          <div style={{fontSize:9,color:"rgba(255,255,255,.28)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:7}}>{t.language}</div>
          <div style={{display:"flex",gap:5}}>
            {["en","sk"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{flex:1,padding:"7px 0",border:"1.5px solid",borderColor:lang===l?"#5dbb7c":"rgba(255,255,255,.1)",borderRadius:7,background:lang===l?"#5dbb7c":"transparent",color:lang===l?"#fff":"rgba(255,255,255,.38)",fontSize:11,fontWeight:800,cursor:"pointer",textTransform:"uppercase",letterSpacing:1,transition:"all .2s",fontFamily:"inherit"}}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0}}>
        {/* Topbar */}
        <div style={{background:"#fff",borderBottom:`1px solid ${BD}`,padding:"0 28px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:13,color:LT,fontWeight:500}}>TPA CRM</span>
            <Ico n="chevron" s={13} c={BD}/>
            <span style={{fontSize:13,color:DK,fontWeight:700}}>{t.nav[page]}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:11}}>
            <div style={{width:33,height:33,borderRadius:"50%",background:GR,display:"flex",alignItems:"center",justifyContent:"center"}}><Ico n="user" s={16} c="#fff"/></div>
            <div><div style={{fontSize:13,fontWeight:700,color:DK,lineHeight:1.1}}>Admin</div><div style={{fontSize:11,color:LT}}>TPA Slovakia</div></div>
          </div>
        </div>
        {/* Content */}
        <div style={{flex:1,overflow:"auto",padding:"26px 28px"}}>
          {page==="dashboard"    && <Dashboard t={t} contacts={contacts} deals={deals} tasks={tasks} onAdd={p=>setPage(p)}/>}
          {page==="contacts"     && <Contacts t={t} contacts={contacts} setContacts={setContacts}/>}
          {page==="companies"    && <Companies t={t} companies={companies} setCompanies={setCompanies}/>}
          {page==="deals"        && <Deals t={t} deals={deals} setDeals={setDeals}/>}
          {page==="tasks"        && <Tasks t={t} tasks={tasks} setTasks={setTasks}/>}
          {page==="projects"     && <Projects t={t} projects={projects} setProjects={setProjects}/>}
          {page==="integrations" && <Integrations t={t}/>}
        </div>
      </div>
    </div>
  );
}
