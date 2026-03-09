import { useState, useEffect } from 'react';

// ── TRANSLATIONS ──────────────────────────────────────────────
const T = {
  en: {
    dashboard: 'Dashboard',
    contacts: 'Contacts',
    companies: 'Companies',
    deals: 'Deals',
    tasks: 'Tasks',
    integrations: 'Integrations',
    settings: 'Settings',
    welcome: 'Welcome back',
    subtitle: "Here's what's happening at TPA today.",
    totalContacts: 'Total Contacts',
    activeDeals: 'Active Deals',
    openTasks: 'Open Tasks',
    revenue: 'Pipeline Value',
    recentActivity: 'Recent Activity',
    upcomingTasks: 'Upcoming Tasks',
    quickAdd: 'Quick Add',
    addContact: 'Add Contact',
    addDeal: 'Add Deal',
    addTask: 'Add Task',
    search: 'Search...',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    position: 'Position',
    status: 'Status',
    value: 'Value',
    stage: 'Stage',
    dueDate: 'Due Date',
    priority: 'Priority',
    assignee: 'Assignee',
    notes: 'Notes',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    view: 'View',
    close: 'Close',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    lead: 'Lead',
    prospect: 'Prospect',
    client: 'Client',
    inactive: 'Inactive',
    new: 'New',
    contacted: 'Contacted',
    qualified: 'Qualified',
    proposal: 'Proposal',
    negotiation: 'Negotiation',
    won: 'Won',
    lost: 'Lost',
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
    connectHelios: 'Connect Helios',
    connectAbra: 'Connect ABRA',
    connectToggl: 'Connect Toggl',
    connected: 'Connected',
    connect: 'Connect',
    heliosDesc: 'Sync invoices, clients and financial data from Helios ERP.',
    abraDesc:
      'Import/export contacts, companies and accounting data from ABRA.',
    togglDesc: 'Track time on deals and tasks, sync with Toggl Track.',
    integrationsTitle: 'Integrations',
    integrationsSubtitle: 'Connect TPA CRM with your existing tools.',
    pipelineValue: 'Pipeline Value',
    wonDeals: 'Won Deals',
    lostDeals: 'Lost Deals',
    allContacts: 'All Contacts',
    newContact: 'New Contact',
    newDeal: 'New Deal',
    newTask: 'New Task',
    newCompany: 'New Company',
    allDeals: 'All Deals',
    allTasks: 'All Tasks',
    allCompanies: 'All Companies',
    firstName: 'First Name',
    lastName: 'Last Name',
    website: 'Website',
    industry: 'Industry',
    employees: 'Employees',
    address: 'Address',
    description: 'Description',
    amount: 'Amount',
    contact: 'Contact',
    title: 'Title',
    type: 'Type',
    meeting: 'Meeting',
    call: 'Call',
    email_t: 'Email',
    deadline: 'Deadline',
    completed: 'Completed',
    overdue: 'Overdue',
    today: 'Today',
    thisWeek: 'This Week',
    total: 'Total',
    noRecords: 'No records found.',
    loading: 'Loading...',
    language: 'Language',
    darkMode: 'Dark Mode',
    profile: 'Profile',
    logout: 'Log out',
    confirmDelete: 'Are you sure you want to delete this record?',
    yes: 'Yes',
    no: 'No',
    filter: 'Filter',
    sort: 'Sort',
    export: 'Export',
    import: 'Import',
    all: 'All',
    active: 'Active',
    archived: 'Archived',
  },
  sk: {
    dashboard: 'Prehľad',
    contacts: 'Kontakty',
    companies: 'Spoločnosti',
    deals: 'Obchody',
    tasks: 'Úlohy',
    integrations: 'Integrácie',
    settings: 'Nastavenia',
    welcome: 'Vitajte späť',
    subtitle: 'Tu je prehľad dnešného dňa v TPA.',
    totalContacts: 'Celkom kontaktov',
    activeDeals: 'Aktívne obchody',
    openTasks: 'Otvorené úlohy',
    revenue: 'Hodnota pipeline',
    recentActivity: 'Nedávna aktivita',
    upcomingTasks: 'Nadchádzajúce úlohy',
    quickAdd: 'Rýchle pridanie',
    addContact: 'Pridať kontakt',
    addDeal: 'Pridať obchod',
    addTask: 'Pridať úlohu',
    search: 'Hľadať...',
    name: 'Meno',
    email: 'E-mail',
    phone: 'Telefón',
    company: 'Spoločnosť',
    position: 'Pozícia',
    status: 'Stav',
    value: 'Hodnota',
    stage: 'Fáza',
    dueDate: 'Termín',
    priority: 'Priorita',
    assignee: 'Zodpovedný',
    notes: 'Poznámky',
    save: 'Uložiť',
    cancel: 'Zrušiť',
    edit: 'Upraviť',
    delete: 'Vymazať',
    view: 'Zobraziť',
    close: 'Zavrieť',
    high: 'Vysoká',
    medium: 'Stredná',
    low: 'Nízka',
    lead: 'Lead',
    prospect: 'Záujemca',
    client: 'Klient',
    inactive: 'Neaktívny',
    new: 'Nový',
    contacted: 'Kontaktovaný',
    qualified: 'Kvalifikovaný',
    proposal: 'Ponuka',
    negotiation: 'Rokovanie',
    won: 'Vyhrané',
    lost: 'Prehrané',
    todo: 'Na vykonanie',
    inProgress: 'Prebieha',
    done: 'Hotovo',
    connectHelios: 'Pripojiť Helios',
    connectAbra: 'Pripojiť ABRA',
    connectToggl: 'Pripojiť Toggl',
    connected: 'Pripojené',
    connect: 'Pripojiť',
    heliosDesc:
      'Synchronizujte faktúry, klientov a finančné údaje z Helios ERP.',
    abraDesc: 'Import/export kontaktov, spoločností a účtovných dát z ABRA.',
    togglDesc:
      'Sledujte čas na obchodoch a úlohách, synchronizujte s Toggl Track.',
    integrationsTitle: 'Integrácie',
    integrationsSubtitle: 'Prepojte TPA CRM s vašimi nástrojmi.',
    pipelineValue: 'Hodnota pipeline',
    wonDeals: 'Vyhrané obchody',
    lostDeals: 'Prehrané obchody',
    allContacts: 'Všetky kontakty',
    newContact: 'Nový kontakt',
    newDeal: 'Nový obchod',
    newTask: 'Nová úloha',
    newCompany: 'Nová spoločnosť',
    allDeals: 'Všetky obchody',
    allTasks: 'Všetky úlohy',
    allCompanies: 'Všetky spoločnosti',
    firstName: 'Meno',
    lastName: 'Priezvisko',
    website: 'Web',
    industry: 'Odvetvie',
    employees: 'Zamestnanci',
    address: 'Adresa',
    description: 'Popis',
    amount: 'Suma',
    contact: 'Kontakt',
    title: 'Názov',
    type: 'Typ',
    meeting: 'Stretnutie',
    call: 'Hovor',
    email_t: 'E-mail',
    deadline: 'Termín',
    completed: 'Dokončené',
    overdue: 'Po termíne',
    today: 'Dnes',
    thisWeek: 'Tento týždeň',
    total: 'Celkom',
    noRecords: 'Žiadne záznamy.',
    loading: 'Načítava...',
    language: 'Jazyk',
    darkMode: 'Tmavý režim',
    profile: 'Profil',
    logout: 'Odhlásiť',
    confirmDelete: 'Naozaj chcete vymazať tento záznam?',
    yes: 'Áno',
    no: 'Nie',
    filter: 'Filter',
    sort: 'Zoradiť',
    export: 'Exportovať',
    import: 'Importovať',
    all: 'Všetky',
    active: 'Aktívne',
    archived: 'Archivované',
  },
};

// ── SEED DATA ─────────────────────────────────────────────────
const seedContacts = [
  {
    id: 1,
    firstName: 'Mária',
    lastName: 'Janušková',
    email: 'maria.januskova@firma.sk',
    phone: '+421 903 111 222',
    company: 'Firma SK s.r.o.',
    position: 'CEO',
    status: 'client',
    notes: 'VIP klient, preferuje stretnutia osobne.',
  },
  {
    id: 2,
    firstName: 'Tomáš',
    lastName: 'Novák',
    email: 'tomas.novak@novak.sk',
    phone: '+421 905 333 444',
    company: 'Novák & Partners',
    position: 'CFO',
    status: 'prospect',
    notes: '',
  },
  {
    id: 3,
    firstName: 'Jana',
    lastName: 'Horváth',
    email: 'jana.horvath@audit.sk',
    phone: '+421 911 555 666',
    company: 'Audit Group',
    position: 'Manažér',
    status: 'lead',
    notes: 'Záujem o audit služby.',
  },
  {
    id: 4,
    firstName: 'Peter',
    lastName: 'Kováč',
    email: 'peter.kovac@korporat.eu',
    phone: '+421 908 777 888',
    company: 'Korporát EU',
    position: 'Riaditeľ',
    status: 'client',
    notes: '',
  },
];
const seedCompanies = [
  {
    id: 1,
    name: 'Firma SK s.r.o.',
    industry: 'Výroba',
    employees: 120,
    website: 'www.firma.sk',
    address: 'Bratislava, Slovakia',
    status: 'active',
  },
  {
    id: 2,
    name: 'Novák & Partners',
    industry: 'Poradenstvo',
    employees: 35,
    website: 'www.novak.sk',
    address: 'Košice, Slovakia',
    status: 'active',
  },
  {
    id: 3,
    name: 'Audit Group',
    industry: 'Audit & Účtovníctvo',
    employees: 60,
    website: 'www.audit.sk',
    address: 'Žilina, Slovakia',
    status: 'active',
  },
];
const seedDeals = [
  {
    id: 1,
    title: 'Ročný audit 2025',
    company: 'Firma SK s.r.o.',
    contact: 'Mária Janušková',
    amount: 18500,
    stage: 'proposal',
    priority: 'high',
    dueDate: '2025-06-30',
    notes: '',
  },
  {
    id: 2,
    title: 'Daňové poradenstvo Q2',
    company: 'Novák & Partners',
    contact: 'Tomáš Novák',
    amount: 6200,
    stage: 'negotiation',
    priority: 'medium',
    dueDate: '2025-05-15',
    notes: '',
  },
  {
    id: 3,
    title: 'Účtovné outsourcing',
    company: 'Audit Group',
    contact: 'Jana Horváth',
    amount: 24000,
    stage: 'qualified',
    priority: 'high',
    dueDate: '2025-07-01',
    notes: '',
  },
  {
    id: 4,
    title: 'Mzdová agenda 2025',
    company: 'Korporát EU',
    contact: 'Peter Kováč',
    amount: 9800,
    stage: 'won',
    priority: 'low',
    dueDate: '2025-04-01',
    notes: '',
  },
];
const seedTasks = [
  {
    id: 1,
    title: 'Pripraviť audit správu',
    contact: 'Mária Janušková',
    dueDate: '2025-05-10',
    priority: 'high',
    status: 'inProgress',
    type: 'meeting',
  },
  {
    id: 2,
    title: 'Zavolať Tomášovi Novákovi',
    contact: 'Tomáš Novák',
    dueDate: '2025-04-28',
    priority: 'medium',
    status: 'todo',
    type: 'call',
  },
  {
    id: 3,
    title: 'Odoslať ponuku – Audit Group',
    contact: 'Jana Horváth',
    dueDate: '2025-04-25',
    priority: 'high',
    status: 'todo',
    type: 'email',
  },
  {
    id: 4,
    title: 'Follow-up po stretnutí',
    contact: 'Peter Kováč',
    dueDate: '2025-04-20',
    priority: 'low',
    status: 'done',
    type: 'email',
  },
];

// ── ICONS (inline SVG) ─────────────────────────────────────────
const Icon = ({ name, size = 18, color = 'currentColor' }) => {
  const icons = {
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    contacts: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    companies: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </>
    ),
    deals: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    tasks: (
      <>
        <polyline points="9,11 12,14 22,4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    integrations: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
    plus: (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
    edit: (
      <>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </>
    ),
    trash: (
      <>
        <polyline points="3,6 5,6 21,6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    x: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
    check: (
      <>
        <polyline points="20,6 9,17 4,12" />
      </>
    ),
    chevronRight: (
      <>
        <polyline points="9,18 15,12 9,6" />
      </>
    ),
    user: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.56 2 2 0 0 1 3.58 2.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </>
    ),
    mail: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    building: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </>
    ),
    trendUp: (
      <>
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
        <polyline points="17,6 23,6 23,12" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || null}
    </svg>
  );
};

// ── HELPERS ───────────────────────────────────────────────────
const fmtEUR = (n) =>
  new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
const stageColors = {
  new: '#e8f5e9',
  contacted: '#e3f2fd',
  qualified: '#fff8e1',
  proposal: '#fce4ec',
  negotiation: '#f3e5f5',
  won: '#e8f5e9',
  lost: '#ffebee',
};
const stageDots = {
  new: '#43a047',
  contacted: '#1e88e5',
  qualified: '#f9a825',
  proposal: '#e91e63',
  negotiation: '#8e24aa',
  won: '#2e7d32',
  lost: '#c62828',
};
const priorityColors = { high: '#c62828', medium: '#e65100', low: '#2e7d32' };
const statusColors = {
  client: '#1b5e20',
  prospect: '#1565c0',
  lead: '#e65100',
  inactive: '#757575',
  active: '#1b5e20',
  archived: '#757575',
  todo: '#e65100',
  inProgress: '#1565c0',
  done: '#1b5e20',
  completed: '#1b5e20',
  overdue: '#c62828',
};

// ── MODAL ─────────────────────────────────────────────────────
const Modal = ({ title, onClose, children }) => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,20,10,.45)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backdropFilter: 'blur(4px)',
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        width: '100%',
        maxWidth: 560,
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 24px 80px rgba(0,60,30,.18)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 28px 16px',
          borderBottom: '1px solid #eef2ef',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {title}
        </h3>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#888',
            padding: 4,
          }}
        >
          <Icon name="x" size={20} />
        </button>
      </div>
      <div style={{ padding: '20px 28px 28px' }}>{children}</div>
    </div>
  </div>
);

// ── FORM FIELD ────────────────────────────────────────────────
const Field = ({ label, children }) => (
  <div style={{ marginBottom: 16 }}>
    <label
      style={{
        display: 'block',
        fontSize: 12,
        fontWeight: 600,
        color: '#4a6550',
        marginBottom: 6,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
      }}
    >
      {label}
    </label>
    {children}
  </div>
);
const Input = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
      width: '100%',
      padding: '10px 14px',
      border: '1.5px solid #d4e4da',
      borderRadius: 8,
      fontSize: 14,
      color: '#1a2e20',
      outline: 'none',
      background: '#f8fbf9',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
    }}
  />
);
const Select = ({ value, onChange, children }) => (
  <select
    value={value}
    onChange={onChange}
    style={{
      width: '100%',
      padding: '10px 14px',
      border: '1.5px solid #d4e4da',
      borderRadius: 8,
      fontSize: 14,
      color: '#1a2e20',
      outline: 'none',
      background: '#f8fbf9',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      appearance: 'auto',
    }}
  >
    {children}
  </select>
);
const Textarea = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={3}
    style={{
      width: '100%',
      padding: '10px 14px',
      border: '1.5px solid #d4e4da',
      borderRadius: 8,
      fontSize: 14,
      color: '#1a2e20',
      outline: 'none',
      background: '#f8fbf9',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      resize: 'vertical',
    }}
  />
);

// ── BADGE ─────────────────────────────────────────────────────
const Badge = ({ label, color = '#1b5e20' }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 700,
      background: color + '18',
      color,
      letterSpacing: 0.4,
      textTransform: 'uppercase',
    }}
  >
    {label}
  </span>
);

// ── STAT CARD ─────────────────────────────────────────────────
const StatCard = ({ icon, label, value, sub, accent }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 16,
      padding: '24px 28px',
      flex: 1,
      minWidth: 160,
      boxShadow: '0 2px 16px rgba(0,60,30,.07)',
      borderLeft: `4px solid ${accent || '#1b6b40'}`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div style={{ position: 'absolute', right: 20, top: 20, opacity: 0.1 }}>
      <Icon name={icon} size={48} color={accent || '#1b6b40'} />
    </div>
    <div style={{ color: accent || '#1b6b40', marginBottom: 8 }}>
      <Icon name={icon} size={22} color={accent || '#1b6b40'} />
    </div>
    <div
      style={{
        fontSize: 28,
        fontWeight: 800,
        color: '#0d3d2a',
        lineHeight: 1,
        fontFamily: "'Playfair Display',serif",
      }}
    >
      {value}
    </div>
    <div
      style={{ fontSize: 13, color: '#6b8c73', marginTop: 6, fontWeight: 500 }}
    >
      {label}
    </div>
    {sub && (
      <div style={{ fontSize: 12, color: '#a0b8a5', marginTop: 2 }}>{sub}</div>
    )}
  </div>
);

// ══════════════════════════════════════════════════════════════
//  MAIN APP
// ══════════════════════════════════════════════════════════════
export default function TpaCRM() {
  const [lang, setLang] = useState('sk');
  const t = T[lang];
  const [page, setPage] = useState('dashboard');
  const [contacts, setContacts] = useState(seedContacts);
  const [companies, setCompanies] = useState(seedCompanies);
  const [deals, setDeals] = useState(seedDeals);
  const [tasks, setTasks] = useState(seedTasks);
  const [modal, setModal] = useState(null); // {type, data}
  const [search, setSearch] = useState('');
  const [integrations, setIntegrations] = useState({
    helios: false,
    abra: false,
    toggl: false,
  });
  const [confirmDel, setConfirmDel] = useState(null);

  const closeModal = () => setModal(null);

  // ── NAV ───────────────────────────────────────────────────
  const navItems = [
    { key: 'dashboard', icon: 'dashboard' },
    { key: 'contacts', icon: 'contacts' },
    { key: 'companies', icon: 'companies' },
    { key: 'deals', icon: 'deals' },
    { key: 'tasks', icon: 'tasks' },
    { key: 'integrations', icon: 'integrations' },
  ];

  // ── STATS ─────────────────────────────────────────────────
  const pipelineVal = deals
    .filter((d) => !['won', 'lost'].includes(d.stage))
    .reduce((a, d) => a + d.amount, 0);
  const wonVal = deals
    .filter((d) => d.stage === 'won')
    .reduce((a, d) => a + d.amount, 0);
  const openTasksCount = tasks.filter((t) => t.status !== 'done').length;

  // ── CONTACT FORM ──────────────────────────────────────────
  const [cForm, setCForm] = useState({});
  const openContactModal = (data = null) => {
    setCForm(
      data || {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        status: 'lead',
        notes: '',
      }
    );
    setModal({ type: 'contact', data });
  };
  const saveContact = () => {
    if (modal.data) {
      setContacts((cs) =>
        cs.map((c) => (c.id === modal.data.id ? { ...c, ...cForm } : c))
      );
    } else {
      setContacts((cs) => [...cs, { ...cForm, id: Date.now() }]);
    }
    closeModal();
  };

  // ── COMPANY FORM ──────────────────────────────────────────
  const [coForm, setCoForm] = useState({});
  const openCompanyModal = (data = null) => {
    setCoForm(
      data || {
        name: '',
        industry: '',
        employees: '',
        website: '',
        address: '',
        status: 'active',
      }
    );
    setModal({ type: 'company', data });
  };
  const saveCompany = () => {
    if (modal.data) {
      setCompanies((cs) =>
        cs.map((c) => (c.id === modal.data.id ? { ...c, ...coForm } : c))
      );
    } else {
      setCompanies((cs) => [...cs, { ...coForm, id: Date.now() }]);
    }
    closeModal();
  };

  // ── DEAL FORM ─────────────────────────────────────────────
  const [dForm, setDForm] = useState({});
  const openDealModal = (data = null) => {
    setDForm(
      data || {
        title: '',
        company: '',
        contact: '',
        amount: '',
        stage: 'new',
        priority: 'medium',
        dueDate: '',
        notes: '',
      }
    );
    setModal({ type: 'deal', data });
  };
  const saveDeal = () => {
    if (modal.data) {
      setDeals((ds) =>
        ds.map((d) =>
          d.id === modal.data.id
            ? { ...d, ...dForm, amount: Number(dForm.amount) }
            : d
        )
      );
    } else {
      setDeals((ds) => [
        ...ds,
        { ...dForm, id: Date.now(), amount: Number(dForm.amount) },
      ]);
    }
    closeModal();
  };

  // ── TASK FORM ─────────────────────────────────────────────
  const [tForm, setTForm] = useState({});
  const openTaskModal = (data = null) => {
    setTForm(
      data || {
        title: '',
        contact: '',
        dueDate: '',
        priority: 'medium',
        status: 'todo',
        type: 'call',
      }
    );
    setModal({ type: 'task', data });
  };
  const saveTask = () => {
    if (modal.data) {
      setTasks((ts) =>
        ts.map((t) => (t.id === modal.data.id ? { ...t, ...tForm } : t))
      );
    } else {
      setTasks((ts) => [...ts, { ...tForm, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (type, id) => {
    if (type === 'contact') setContacts((cs) => cs.filter((c) => c.id !== id));
    if (type === 'company') setCompanies((cs) => cs.filter((c) => c.id !== id));
    if (type === 'deal') setDeals((ds) => ds.filter((d) => d.id !== id));
    if (type === 'task') setTasks((ts) => ts.filter((t) => t.id !== id));
    setConfirmDel(null);
  };

  // ── PIPELINE STAGES ───────────────────────────────────────
  const stages = [
    'new',
    'contacted',
    'qualified',
    'proposal',
    'negotiation',
    'won',
    'lost',
  ];

  // ── SEARCH FILTER ─────────────────────────────────────────
  const filterItems = (items, keys) =>
    items.filter(
      (item) =>
        !search ||
        keys.some((k) =>
          String(item[k] || '')
            .toLowerCase()
            .includes(search.toLowerCase())
        )
    );

  // ══════════════════════════════════════════════════════════
  //  RENDER PAGES
  // ══════════════════════════════════════════════════════════

  const renderDashboard = () => (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.welcome}, Admin 👋
        </h1>
        <p style={{ margin: '6px 0 0', color: '#6b8c73', fontSize: 15 }}>
          {t.subtitle}
        </p>
      </div>
      {/* Stats */}
      <div
        style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}
      >
        <StatCard
          icon="contacts"
          label={t.totalContacts}
          value={contacts.length}
          accent="#1b6b40"
        />
        <StatCard
          icon="deals"
          label={t.activeDeals}
          value={deals.filter((d) => !['won', 'lost'].includes(d.stage)).length}
          accent="#2a5298"
        />
        <StatCard
          icon="tasks"
          label={t.openTasks}
          value={openTasksCount}
          accent="#c0392b"
        />
        <StatCard
          icon="trendUp"
          label={t.pipelineValue}
          value={fmtEUR(pipelineVal)}
          sub={`Won: ${fmtEUR(wonVal)}`}
          accent="#7b3fa0"
        />
      </div>
      {/* Quick Add */}
      <div
        style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}
      >
        {[
          { label: t.addContact, fn: openContactModal, icon: 'contacts' },
          { label: t.addDeal, fn: openDealModal, icon: 'deals' },
          { label: t.addTask, fn: openTaskModal, icon: 'tasks' },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.fn}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 20px',
              background: '#1b6b40',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all .2s',
              boxShadow: '0 2px 8px rgba(27,107,64,.3)',
            }}
          >
            <Icon name="plus" size={16} color="#fff" />
            {btn.label}
          </button>
        ))}
      </div>
      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Pipeline mini */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 24,
            boxShadow: '0 2px 16px rgba(0,60,30,.07)',
          }}
        >
          <h3
            style={{
              margin: '0 0 18px',
              fontSize: 16,
              fontWeight: 700,
              color: '#0d3d2a',
              fontFamily: "'Playfair Display',serif",
            }}
          >
            Pipeline
          </h3>
          {stages
            .filter((s) => !['won', 'lost'].includes(s))
            .map((s) => {
              const stageDeals = deals.filter((d) => d.stage === s);
              if (!stageDeals.length) return null;
              return (
                <div
                  key={s}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: stageDots[s],
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      fontSize: 13,
                      color: '#3a5a42',
                      fontWeight: 500,
                      textTransform: 'capitalize',
                    }}
                  >
                    {t[s] || s}
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 700, color: '#0d3d2a' }}
                  >
                    {stageDeals.length} ·{' '}
                    {fmtEUR(stageDeals.reduce((a, d) => a + d.amount, 0))}
                  </div>
                </div>
              );
            })}
        </div>
        {/* Upcoming tasks */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 24,
            boxShadow: '0 2px 16px rgba(0,60,30,.07)',
          }}
        >
          <h3
            style={{
              margin: '0 0 18px',
              fontSize: 16,
              fontWeight: 700,
              color: '#0d3d2a',
              fontFamily: "'Playfair Display',serif",
            }}
          >
            {t.upcomingTasks}
          </h3>
          {tasks
            .filter((t) => t.status !== 'done')
            .slice(0, 4)
            .map((task) => (
              <div
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 12,
                  padding: '10px 14px',
                  background: '#f8fbf9',
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: priorityColors[task.priority],
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: '#1a2e20' }}
                  >
                    {task.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#8aab92', marginTop: 2 }}>
                    {task.dueDate}
                  </div>
                </div>
                <Badge
                  label={t[task.status] || task.status}
                  color={statusColors[task.status]}
                />
              </div>
            ))}
          {tasks.filter((t) => t.status !== 'done').length === 0 && (
            <p style={{ color: '#a0b8a5', fontSize: 13 }}>{t.noRecords}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.allContacts}
        </h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a0b8a5',
              }}
            >
              <Icon name="search" size={16} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              style={{
                padding: '9px 14px 9px 36px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                fontSize: 13,
                outline: 'none',
                background: '#f8fbf9',
                width: 200,
              }}
            />
          </div>
          <button
            onClick={() => openContactModal()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 18px',
              background: '#1b6b40',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icon name="plus" size={15} color="#fff" />
            {t.newContact}
          </button>
        </div>
      </div>
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(0,60,30,.07)',
        }}
      >
        <table
          style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}
        >
          <thead>
            <tr style={{ background: '#f0f7f2' }}>
              {[
                t.name,
                t.email,
                t.phone,
                t.company,
                t.position,
                t.status,
                '',
              ].map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '13px 18px',
                    textAlign: 'left',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#4a6550',
                    letterSpacing: 0.6,
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #e4ede7',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterItems(contacts, [
              'firstName',
              'lastName',
              'email',
              'company',
              'position',
            ]).map((c, i) => (
              <tr
                key={c.id}
                style={{
                  borderBottom: '1px solid #f0f5f1',
                  background: i % 2 ? '#fafcfa' : '#fff',
                  transition: 'background .15s',
                }}
              >
                <td
                  style={{
                    padding: '13px 18px',
                    fontWeight: 600,
                    color: '#1a2e20',
                  }}
                >
                  {c.firstName} {c.lastName}
                </td>
                <td style={{ padding: '13px 18px', color: '#4a6550' }}>
                  {c.email}
                </td>
                <td style={{ padding: '13px 18px', color: '#4a6550' }}>
                  {c.phone}
                </td>
                <td style={{ padding: '13px 18px', color: '#4a6550' }}>
                  {c.company}
                </td>
                <td style={{ padding: '13px 18px', color: '#4a6550' }}>
                  {c.position}
                </td>
                <td style={{ padding: '13px 18px' }}>
                  <Badge
                    label={t[c.status] || c.status}
                    color={statusColors[c.status] || '#555'}
                  />
                </td>
                <td style={{ padding: '13px 18px' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => openContactModal(c)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#1b6b40',
                        padding: 4,
                      }}
                    >
                      <Icon name="edit" size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setConfirmDel({ type: 'contact', id: c.id })
                      }
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#c62828',
                        padding: 4,
                      }}
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filterItems(contacts, ['firstName', 'lastName', 'email', 'company'])
          .length === 0 && (
          <p style={{ textAlign: 'center', color: '#a0b8a5', padding: 32 }}>
            {t.noRecords}
          </p>
        )}
      </div>
    </div>
  );

  const renderCompanies = () => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.allCompanies}
        </h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a0b8a5',
              }}
            >
              <Icon name="search" size={16} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              style={{
                padding: '9px 14px 9px 36px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                fontSize: 13,
                outline: 'none',
                background: '#f8fbf9',
                width: 200,
              }}
            />
          </div>
          <button
            onClick={() => openCompanyModal()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 18px',
              background: '#1b6b40',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icon name="plus" size={15} color="#fff" />
            {t.newCompany}
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
          gap: 16,
        }}
      >
        {filterItems(companies, ['name', 'industry', 'address']).map((co) => (
          <div
            key={co.id}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 22,
              boxShadow: '0 2px 16px rgba(0,60,30,.07)',
              borderTop: '3px solid #1b6b40',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#0d3d2a',
                    marginBottom: 4,
                  }}
                >
                  {co.name}
                </div>
                <Badge
                  label={t[co.status] || co.status}
                  color={statusColors[co.status] || '#555'}
                />
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={() => openCompanyModal(co)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#1b6b40',
                  }}
                >
                  <Icon name="edit" size={16} />
                </button>
                <button
                  onClick={() => setConfirmDel({ type: 'company', id: co.id })}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#c62828',
                  }}
                >
                  <Icon name="trash" size={16} />
                </button>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
                fontSize: 13,
                color: '#4a6550',
              }}
            >
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Icon name="building" size={14} color="#8aab92" />
                {co.industry}
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Icon name="user" size={14} color="#8aab92" />
                {co.employees} {t.employees}
              </div>
              {co.website && (
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Icon name="globe" size={14} color="#8aab92" />
                  {co.website}
                </div>
              )}
              {co.address && (
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Icon name="link" size={14} color="#8aab92" />
                  {co.address}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDeals = () => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.allDeals}
        </h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a0b8a5',
              }}
            >
              <Icon name="search" size={16} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              style={{
                padding: '9px 14px 9px 36px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                fontSize: 13,
                outline: 'none',
                background: '#f8fbf9',
                width: 200,
              }}
            />
          </div>
          <button
            onClick={() => openDealModal()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 18px',
              background: '#1b6b40',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icon name="plus" size={15} color="#fff" />
            {t.newDeal}
          </button>
        </div>
      </div>
      {/* Kanban */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          paddingBottom: 12,
        }}
      >
        {stages.map((stage) => {
          const stageDeals = filterItems(
            deals.filter((d) => d.stage === stage),
            ['title', 'company', 'contact']
          );
          return (
            <div key={stage} style={{ minWidth: 220, flex: '0 0 220px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: stageDots[stage],
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#4a6550',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                  }}
                >
                  {t[stage] || stage}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#1b6b40',
                    background: '#e8f5e9',
                    borderRadius: 20,
                    padding: '2px 8px',
                  }}
                >
                  {stageDeals.length}
                </span>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    style={{
                      background: '#fff',
                      borderRadius: 12,
                      padding: 16,
                      boxShadow: '0 2px 12px rgba(0,60,30,.08)',
                      borderLeft: `3px solid ${stageDots[stage]}`,
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: '#0d3d2a',
                        marginBottom: 6,
                      }}
                    >
                      {deal.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#6b8c73',
                        marginBottom: 4,
                      }}
                    >
                      {deal.company}
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: '#1b6b40',
                        marginBottom: 8,
                      }}
                    >
                      {fmtEUR(deal.amount)}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Badge
                        label={t[deal.priority] || deal.priority}
                        color={priorityColors[deal.priority]}
                      />
                      <div style={{ display: 'flex', gap: 4 }}>
                        <button
                          onClick={() => openDealModal(deal)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#1b6b40',
                            padding: 2,
                          }}
                        >
                          <Icon name="edit" size={14} />
                        </button>
                        <button
                          onClick={() =>
                            setConfirmDel({ type: 'deal', id: deal.id })
                          }
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#c62828',
                            padding: 2,
                          }}
                        >
                          <Icon name="trash" size={14} />
                        </button>
                      </div>
                    </div>
                    <div
                      style={{ fontSize: 11, color: '#a0b8a5', marginTop: 6 }}
                    >
                      {deal.dueDate}
                    </div>
                  </div>
                ))}
                {stageDeals.length === 0 && (
                  <div
                    style={{
                      padding: 16,
                      background: '#f8fbf9',
                      borderRadius: 10,
                      textAlign: 'center',
                      fontSize: 12,
                      color: '#c0d4c4',
                      border: '1.5px dashed #d4e4da',
                    }}
                  >
                    —
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderTasks = () => (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.allTasks}
        </h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a0b8a5',
              }}
            >
              <Icon name="search" size={16} />
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
              style={{
                padding: '9px 14px 9px 36px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                fontSize: 13,
                outline: 'none',
                background: '#f8fbf9',
                width: 200,
              }}
            />
          </div>
          <button
            onClick={() => openTaskModal()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '9px 18px',
              background: '#1b6b40',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Icon name="plus" size={15} color="#fff" />
            {t.newTask}
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filterItems(tasks, ['title', 'contact', 'type']).map((task) => (
          <div
            key={task.id}
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '16px 20px',
              boxShadow: '0 2px 12px rgba(0,60,30,.07)',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderLeft: `4px solid ${priorityColors[task.priority]}`,
            }}
          >
            <button
              onClick={() =>
                setTasks((ts) =>
                  ts.map((t) =>
                    t.id === task.id
                      ? { ...t, status: t.status === 'done' ? 'todo' : 'done' }
                      : t
                  )
                )
              }
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                border: `2px solid ${
                  task.status === 'done' ? '#1b6b40' : '#c0d4c4'
                }`,
                background: task.status === 'done' ? '#1b6b40' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all .2s',
              }}
            >
              {task.status === 'done' && (
                <Icon name="check" size={12} color="#fff" />
              )}
            </button>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: task.status === 'done' ? '#a0b8a5' : '#1a2e20',
                  textDecoration:
                    task.status === 'done' ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </div>
              <div style={{ fontSize: 12, color: '#8aab92', marginTop: 3 }}>
                {task.contact} · {task.dueDate}
              </div>
            </div>
            <Badge label={t[task.type] || task.type} color="#2a5298" />
            <Badge
              label={t[task.status] || task.status}
              color={statusColors[task.status] || '#555'}
            />
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                onClick={() => openTaskModal(task)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#1b6b40',
                  padding: 4,
                }}
              >
                <Icon name="edit" size={16} />
              </button>
              <button
                onClick={() => setConfirmDel({ type: 'task', id: task.id })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#c62828',
                  padding: 4,
                }}
              >
                <Icon name="trash" size={16} />
              </button>
            </div>
          </div>
        ))}
        {filterItems(tasks, ['title', 'contact']).length === 0 && (
          <p style={{ textAlign: 'center', color: '#a0b8a5' }}>{t.noRecords}</p>
        )}
      </div>
    </div>
  );

  const renderIntegrations = () => (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 800,
            color: '#0d3d2a',
            fontFamily: "'Playfair Display',serif",
          }}
        >
          {t.integrationsTitle}
        </h1>
        <p style={{ margin: '6px 0 0', color: '#6b8c73', fontSize: 15 }}>
          {t.integrationsSubtitle}
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
          gap: 20,
        }}
      >
        {[
          {
            key: 'helios',
            name: 'Helios',
            desc: t.heliosDesc,
            logo: 'H',
            color: '#1565c0',
          },
          {
            key: 'abra',
            name: 'ABRA Flexi',
            desc: t.abraDesc,
            logo: 'A',
            color: '#c0392b',
          },
          {
            key: 'toggl',
            name: 'Toggl Track',
            desc: t.togglDesc,
            logo: 'T',
            color: '#e2401c',
          },
        ].map((intg) => (
          <div
            key={intg.key}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 28,
              boxShadow: '0 2px 16px rgba(0,60,30,.07)',
              borderTop: `3px solid ${intg.color}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: intg.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  fontWeight: 900,
                  color: '#fff',
                  fontFamily: "'Playfair Display',serif",
                }}
              >
                {intg.logo}
              </div>
              <div>
                <div
                  style={{ fontWeight: 700, fontSize: 17, color: '#0d3d2a' }}
                >
                  {intg.name}
                </div>
                <Badge
                  label={integrations[intg.key] ? t.connected : t.connect}
                  color={integrations[intg.key] ? '#1b5e20' : '#555'}
                />
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                color: '#6b8c73',
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              {intg.desc}
            </p>
            <button
              onClick={() =>
                setIntegrations((i) => ({ ...i, [intg.key]: !i[intg.key] }))
              }
              style={{
                width: '100%',
                padding: '11px 0',
                border: `2px solid ${
                  integrations[intg.key] ? '#c62828' : intg.color
                }`,
                borderRadius: 10,
                background: integrations[intg.key] ? '#fff' : intg.color,
                color: integrations[intg.key] ? intg.color : '#fff',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all .2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Icon
                name={integrations[intg.key] ? 'x' : 'link'}
                size={16}
                color={integrations[intg.key] ? intg.color : '#fff'}
              />
              {integrations[intg.key]
                ? `Odpojiť ${intg.name}`
                : t[
                    `connect${
                      intg.key.charAt(0).toUpperCase() + intg.key.slice(1)
                    }`
                  ]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════
  //  MODALS
  // ══════════════════════════════════════════════════════════
  const renderModal = () => {
    if (!modal) return null;
    if (modal.type === 'contact')
      return (
        <Modal
          title={modal.data ? t.edit + ' ' + t.contacts : t.newContact}
          onClose={closeModal}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.firstName}>
              <Input
                value={cForm.firstName || ''}
                onChange={(e) =>
                  setCForm({ ...cForm, firstName: e.target.value })
                }
              />
            </Field>
            <Field label={t.lastName}>
              <Input
                value={cForm.lastName || ''}
                onChange={(e) =>
                  setCForm({ ...cForm, lastName: e.target.value })
                }
              />
            </Field>
          </div>
          <Field label={t.email}>
            <Input
              type="email"
              value={cForm.email || ''}
              onChange={(e) => setCForm({ ...cForm, email: e.target.value })}
            />
          </Field>
          <Field label={t.phone}>
            <Input
              value={cForm.phone || ''}
              onChange={(e) => setCForm({ ...cForm, phone: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.company}>
              <Input
                value={cForm.company || ''}
                onChange={(e) =>
                  setCForm({ ...cForm, company: e.target.value })
                }
              />
            </Field>
            <Field label={t.position}>
              <Input
                value={cForm.position || ''}
                onChange={(e) =>
                  setCForm({ ...cForm, position: e.target.value })
                }
              />
            </Field>
          </div>
          <Field label={t.status}>
            <Select
              value={cForm.status || 'lead'}
              onChange={(e) => setCForm({ ...cForm, status: e.target.value })}
            >
              {['lead', 'prospect', 'client', 'inactive'].map((s) => (
                <option key={s} value={s}>
                  {t[s]}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={t.notes}>
            <Textarea
              value={cForm.notes || ''}
              onChange={(e) => setCForm({ ...cForm, notes: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'flex-end',
              marginTop: 8,
            }}
          >
            <button
              onClick={closeModal}
              style={{
                padding: '10px 20px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                background: '#fff',
                cursor: 'pointer',
                fontSize: 14,
                color: '#4a6550',
                fontWeight: 600,
              }}
            >
              {t.cancel}
            </button>
            <button
              onClick={saveContact}
              style={{
                padding: '10px 24px',
                background: '#1b6b40',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {t.save}
            </button>
          </div>
        </Modal>
      );
    if (modal.type === 'company')
      return (
        <Modal
          title={modal.data ? t.edit + ' ' + t.companies : t.newCompany}
          onClose={closeModal}
        >
          <Field label={t.name}>
            <Input
              value={coForm.name || ''}
              onChange={(e) => setCoForm({ ...coForm, name: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.industry}>
              <Input
                value={coForm.industry || ''}
                onChange={(e) =>
                  setCoForm({ ...coForm, industry: e.target.value })
                }
              />
            </Field>
            <Field label={t.employees}>
              <Input
                type="number"
                value={coForm.employees || ''}
                onChange={(e) =>
                  setCoForm({ ...coForm, employees: e.target.value })
                }
              />
            </Field>
          </div>
          <Field label={t.website}>
            <Input
              value={coForm.website || ''}
              onChange={(e) =>
                setCoForm({ ...coForm, website: e.target.value })
              }
            />
          </Field>
          <Field label={t.address}>
            <Input
              value={coForm.address || ''}
              onChange={(e) =>
                setCoForm({ ...coForm, address: e.target.value })
              }
            />
          </Field>
          <Field label={t.status}>
            <Select
              value={coForm.status || 'active'}
              onChange={(e) => setCoForm({ ...coForm, status: e.target.value })}
            >
              {['active', 'archived'].map((s) => (
                <option key={s} value={s}>
                  {t[s]}
                </option>
              ))}
            </Select>
          </Field>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'flex-end',
              marginTop: 8,
            }}
          >
            <button
              onClick={closeModal}
              style={{
                padding: '10px 20px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                background: '#fff',
                cursor: 'pointer',
                fontSize: 14,
                color: '#4a6550',
                fontWeight: 600,
              }}
            >
              {t.cancel}
            </button>
            <button
              onClick={saveCompany}
              style={{
                padding: '10px 24px',
                background: '#1b6b40',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {t.save}
            </button>
          </div>
        </Modal>
      );
    if (modal.type === 'deal')
      return (
        <Modal
          title={modal.data ? t.edit + ' ' + t.deals : t.newDeal}
          onClose={closeModal}
        >
          <Field label={t.title}>
            <Input
              value={dForm.title || ''}
              onChange={(e) => setDForm({ ...dForm, title: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.company}>
              <Input
                value={dForm.company || ''}
                onChange={(e) =>
                  setDForm({ ...dForm, company: e.target.value })
                }
              />
            </Field>
            <Field label={t.contact}>
              <Input
                value={dForm.contact || ''}
                onChange={(e) =>
                  setDForm({ ...dForm, contact: e.target.value })
                }
              />
            </Field>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={`${t.amount} (€)`}>
              <Input
                type="number"
                value={dForm.amount || ''}
                onChange={(e) => setDForm({ ...dForm, amount: e.target.value })}
              />
            </Field>
            <Field label={t.dueDate}>
              <Input
                type="date"
                value={dForm.dueDate || ''}
                onChange={(e) =>
                  setDForm({ ...dForm, dueDate: e.target.value })
                }
              />
            </Field>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.stage}>
              <Select
                value={dForm.stage || 'new'}
                onChange={(e) => setDForm({ ...dForm, stage: e.target.value })}
              >
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {t[s] || s}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label={t.priority}>
              <Select
                value={dForm.priority || 'medium'}
                onChange={(e) =>
                  setDForm({ ...dForm, priority: e.target.value })
                }
              >
                {['high', 'medium', 'low'].map((p) => (
                  <option key={p} value={p}>
                    {t[p]}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label={t.notes}>
            <Textarea
              value={dForm.notes || ''}
              onChange={(e) => setDForm({ ...dForm, notes: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'flex-end',
              marginTop: 8,
            }}
          >
            <button
              onClick={closeModal}
              style={{
                padding: '10px 20px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                background: '#fff',
                cursor: 'pointer',
                fontSize: 14,
                color: '#4a6550',
                fontWeight: 600,
              }}
            >
              {t.cancel}
            </button>
            <button
              onClick={saveDeal}
              style={{
                padding: '10px 24px',
                background: '#1b6b40',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {t.save}
            </button>
          </div>
        </Modal>
      );
    if (modal.type === 'task')
      return (
        <Modal
          title={modal.data ? t.edit + ' ' + t.tasks : t.newTask}
          onClose={closeModal}
        >
          <Field label={t.title}>
            <Input
              value={tForm.title || ''}
              onChange={(e) => setTForm({ ...tForm, title: e.target.value })}
            />
          </Field>
          <Field label={t.contact}>
            <Input
              value={tForm.contact || ''}
              onChange={(e) => setTForm({ ...tForm, contact: e.target.value })}
            />
          </Field>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.dueDate}>
              <Input
                type="date"
                value={tForm.dueDate || ''}
                onChange={(e) =>
                  setTForm({ ...tForm, dueDate: e.target.value })
                }
              />
            </Field>
            <Field label={t.type}>
              <Select
                value={tForm.type || 'call'}
                onChange={(e) => setTForm({ ...tForm, type: e.target.value })}
              >
                {['meeting', 'call', 'email'].map((tp) => (
                  <option key={tp} value={tp}>
                    {t[tp] || tp}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0 16px',
            }}
          >
            <Field label={t.priority}>
              <Select
                value={tForm.priority || 'medium'}
                onChange={(e) =>
                  setTForm({ ...tForm, priority: e.target.value })
                }
              >
                {['high', 'medium', 'low'].map((p) => (
                  <option key={p} value={p}>
                    {t[p]}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label={t.status}>
              <Select
                value={tForm.status || 'todo'}
                onChange={(e) => setTForm({ ...tForm, status: e.target.value })}
              >
                {['todo', 'inProgress', 'done'].map((s) => (
                  <option key={s} value={s}>
                    {t[s]}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'flex-end',
              marginTop: 8,
            }}
          >
            <button
              onClick={closeModal}
              style={{
                padding: '10px 20px',
                border: '1.5px solid #d4e4da',
                borderRadius: 8,
                background: '#fff',
                cursor: 'pointer',
                fontSize: 14,
                color: '#4a6550',
                fontWeight: 600,
              }}
            >
              {t.cancel}
            </button>
            <button
              onClick={saveTask}
              style={{
                padding: '10px 24px',
                background: '#1b6b40',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {t.save}
            </button>
          </div>
        </Modal>
      );
    return null;
  };

  // ══════════════════════════════════════════════════════════
  //  LAYOUT
  // ══════════════════════════════════════════════════════════
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: "'DM Sans',sans-serif",
        background: '#f0f5f1',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #f0f5f1; }
        ::-webkit-scrollbar-thumb { background: #b8d4be; border-radius: 3px; }
        button:hover { opacity: .88; }
        tr:hover td { background: #f2f8f4 !important; }
      `}</style>

      {/* SIDEBAR */}
      <div
        style={{
          width: 220,
          background: '#0d3d2a',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 20% 20%,rgba(27,107,64,.3) 0%,transparent 60%),radial-gradient(ellipse at 80% 80%,rgba(13,61,42,.5) 0%,transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        {/* Logo */}
        <div
          style={{
            padding: '28px 24px 24px',
            borderBottom: '1px solid rgba(255,255,255,.08)',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: '#fff',
              fontFamily: "'Playfair Display',serif",
              letterSpacing: -1,
            }}
          >
            tpa
          </div>
          <div
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,.4)',
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginTop: 2,
            }}
          >
            CRM Platform
          </div>
        </div>
        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px', position: 'relative' }}>
          {navItems.map((item) => {
            const active = page === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setPage(item.key);
                  setSearch('');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  width: '100%',
                  padding: '11px 14px',
                  marginBottom: 4,
                  background: active ? 'rgba(255,255,255,.12)' : 'transparent',
                  border: 'none',
                  borderRadius: 10,
                  cursor: 'pointer',
                  color: active ? '#fff' : 'rgba(255,255,255,.55)',
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  textAlign: 'left',
                  transition: 'all .2s',
                  borderLeft: active
                    ? '3px solid #5dbb7c'
                    : '3px solid transparent',
                }}
              >
                <Icon
                  name={item.icon}
                  size={17}
                  color={active ? '#fff' : 'rgba(255,255,255,.5)'}
                />
                {t[item.key]}
              </button>
            );
          })}
        </nav>
        {/* Language toggle */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(255,255,255,.08)',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,.35)',
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            {t.language}
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['en', 'sk'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  flex: 1,
                  padding: '8px 0',
                  border: '1.5px solid',
                  borderColor: lang === l ? '#5dbb7c' : 'rgba(255,255,255,.15)',
                  borderRadius: 8,
                  background: lang === l ? '#5dbb7c' : 'transparent',
                  color: lang === l ? '#fff' : 'rgba(255,255,255,.5)',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  transition: 'all .2s',
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Topbar */}
        <div
          style={{
            background: '#fff',
            borderBottom: '1px solid #e4ede7',
            padding: '0 32px',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, color: '#a0b8a5', fontWeight: 500 }}>
              TPA CRM
            </span>
            <Icon name="chevronRight" size={14} color="#c0d4c4" />
            <span
              style={{
                fontSize: 13,
                color: '#0d3d2a',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              {t[page]}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: '#1b6b40',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="user" size={16} color="#fff" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#0d3d2a',
                  lineHeight: 1,
                }}
              >
                Admin
              </div>
              <div style={{ fontSize: 11, color: '#8aab92' }}>TPA Slovakia</div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div style={{ flex: 1, overflow: 'auto', padding: 32 }}>
          {page === 'dashboard' && renderDashboard()}
          {page === 'contacts' && renderContacts()}
          {page === 'companies' && renderCompanies()}
          {page === 'deals' && renderDeals()}
          {page === 'tasks' && renderTasks()}
          {page === 'integrations' && renderIntegrations()}
        </div>
      </div>

      {/* MODALS */}
      {renderModal()}

      {/* CONFIRM DELETE */}
      {confirmDel && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,20,10,.45)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 32,
              maxWidth: 360,
              width: '90%',
              textAlign: 'center',
              boxShadow: '0 24px 80px rgba(0,60,30,.2)',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: '#ffeaea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Icon name="trash" size={22} color="#c62828" />
            </div>
            <h3
              style={{
                margin: '0 0 8px',
                color: '#0d3d2a',
                fontFamily: "'Playfair Display',serif",
              }}
            >
              {t.confirmDelete}
            </h3>
            <p
              style={{ color: '#6b8c73', fontSize: 14, margin: '0 0 24px' }}
            ></p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button
                onClick={() => setConfirmDel(null)}
                style={{
                  padding: '10px 24px',
                  border: '1.5px solid #d4e4da',
                  borderRadius: 8,
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#4a6550',
                }}
              >
                {t.no}
              </button>
              <button
                onClick={() => handleDelete(confirmDel.type, confirmDel.id)}
                style={{
                  padding: '10px 24px',
                  background: '#c62828',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {t.yes}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
