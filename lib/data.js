// ✏️ EDIT HERE: brand name, contact details and all content.
export const site = { name: "NexaCore", city: "Kandy, Sri Lanka", since: 2019, phone: "+94 77 000 0000", email: "hello@nexacore.lk", whatsapp: "94770000000" };
export const stats = [
  { n: "6+", l: "Years in the systems industry" }, { n: "2019", l: "Founded in Kandy" },
  { n: "3", l: "Engineering disciplines, one team" }, { n: "6", l: "Solution areas" },
];
export const services = [
  { i: "park", t: "Car parking systems", d: "Entry and exit control, ticketing, bay counting and billing, installed and maintained on site." },
  { i: "pos", t: "POS systems", d: "Fast billing, stock control and daily reports for shops, restaurants and service counters." },
  { i: "clock", t: "Attendance management", d: "Fingerprint, card and face devices connected to a clear, real-time dashboard." },
  { i: "users", t: "HR management tools", d: "Staff records, leave, shifts and payroll inputs organised in one place." },
  { i: "chip", t: "Electronic device management", d: "Monitor, track and service your devices and IoT equipment from a single screen." },
  { i: "code", t: "Custom system solutions", d: "When off-the-shelf software does not fit, we design and build the system around your process." },
].map((service, index) => ({ ...service, slug: ["car-parking-systems", "pos-systems", "attendance-management", "hr-management", "device-management", "custom-systems"][index] }));
export const story = [
  { y: "2019", t: "Founded in Kandy", d: "A team of software engineers set out to build systems Sri Lankan businesses could rely on every day." },
  { y: "Growth", t: "Hardware joined software", d: "IoT, electronic and mechanical engineers joined, so we could deliver the whole system, not just the screen." },
  { y: "Trust", t: "Hospitals and service centres", d: "Organisations that cannot afford downtime began trusting us with parking, updates and service." },
  { y: "Today", t: "6+ years, one team", d: "We design, install, update and support. The people who built it are the ones who pick up the phone." },
];
export const cases = [
  { client: "Channelled Consultation Centre (CCC Kandy)", tag: "Car parking", t: "A parking system that keeps up with the queue", d: "We updated the parking system at CCC Kandy and keep it maintained, so visitors get in and out without delays.", pts: ["Parking system updates and upgrades", "Regular maintenance and support"], i: "park", bg: "linear-gradient(135deg,#1D4ED8,#22D3EE)", image: "/CCC Kandy Parking Entrance and Exit.png", imageAlt: "CCC Kandy parking entrance and exit, with the entry lane and exit barrier" },
  { client: "Asiri Hospital, Kandy", tag: "Software and service", t: "Software updates and service you can count on", d: "We handle software updates and servicing at Asiri Hospital in Kandy, where reliability matters every hour of the day.", pts: ["Scheduled software updates", "Prompt on-site service"], i: "chip", bg: "linear-gradient(135deg,#0F766E,#38BDF8)" },
  { client: "Efi Technologies", tag: "Vehicle service centre", t: "Technology for a working service centre", d: "We support Efi Technologies with systems built around the daily routine of a busy vehicle service centre.", pts: ["Systems shaped around workshop operations", "Hands-on setup and support"], i: "code", bg: "linear-gradient(135deg,#4338CA,#60A5FA)" },
];
export const industries = ["Hospitals and clinics", "Retail and supermarkets", "Schools and institutes", "Offices and hotels", "Factories and workshops", "Service centres"];
export const team = [
  { i: "code", t: "Software engineers", d: "Web, mobile and back-end systems that are fast, secure and easy to use." },
  { i: "chip", t: "IoT engineers", d: "Sensors, controllers and connected devices that report back reliably." },
  { i: "wrench", t: "Electronic and mechanical engineers", d: "Gates, barriers, enclosures and hardware built to survive daily use." },
];
export const steps = [
  { t: "Listen", d: "We visit, learn how you work and agree what to solve." },
  { t: "Design", d: "A clear plan, price and timeline before we start." },
  { t: "Build and install", d: "Software, devices and on-site setup from one team." },
  { t: "Support", d: "Updates, servicing and a real person when you need help." },
];
