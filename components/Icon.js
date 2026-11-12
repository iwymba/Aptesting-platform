const P = {
  park: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M9 17V7h4a3 3 0 010 6H9" /></>,
  pos: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.7a3.5 3.5 0 010 6.6M18 14a6.5 6.5 0 013.5 6" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  code: <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  wrench: <path d="M14.5 6.5a4 4 0 005 5L21 13l-8 8a2.1 2.1 0 01-3-3l8-8z M6 6l3 3" />,
};
export default function Icon({ n }) { return <svg viewBox="0 0 24 24" aria-hidden="true">{P[n]}</svg>; }
