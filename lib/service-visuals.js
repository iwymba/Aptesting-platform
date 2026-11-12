const photo = (file, alt, credit, id) => ({ src: "/service-" + file + ".jpg", alt, credit, url: "https://www.pexels.com/photo/" + id + "/" });
const parking = photo("parking", "Vehicles in a multi-storey parking facility", "Anastasiya Badun", "16551615");
const pos = photo("pos", "Mobile payment at a retail terminal", "iMin Technology", "12935076");
const people = photo("people", "Colleagues collaborating in an office", "Thirdman", "7652046");
const devices = photo("devices", "Electronic components on a circuit board", "ClickerHappy", "1448561");
const software = photo("software", "Developer working on a laptop", "Sora Shimazaki", "5926382");
export const serviceVisuals = {
  "car-parking-systems": { photo: parking, accent: "#b8d4c4", title: "A better way in.\nA smoother way out.", caption: "Every arrival deserves a better experience.", focus: "Designed for the flow of your site.", tags: ["Vehicle access", "Ticketing", "Site support"] },
  "pos-systems": { photo: pos, accent: "#e6c6ad", title: "A simple sale.\nA smarter business.", caption: "Bring the counter and the back office together.", focus: "Built around your busiest moments.", tags: ["Billing", "Stock control", "Daily reports"] },
  "attendance-management": { photo: people, accent: "#bfcff1", title: "Every arrival.\nAll accounted for.", caption: "A clearer picture of the people behind your operation.", focus: "A working day with fewer loose ends.", tags: ["Device integration", "Attendance records", "Team visibility"] },
  "hr-management": { photo: people, accent: "#ddcbea", title: "People first.\nPaperwork, simplified.", caption: "Give your team the clarity to focus on people.", focus: "Make everyday administration feel lighter.", tags: ["Staff records", "Leave & shifts", "Payroll inputs"] },
  "device-management": { photo: devices, accent: "#a5dcd7", title: "Connected hardware.\nClearer control.", caption: "Understand the equipment your business depends on.", focus: "Bring the physical and digital together.", tags: ["IoT integration", "Device monitoring", "Servicing"] },
  "custom-systems": { photo: software, accent: "#c6c8f0", title: "Not off the shelf.\nBuilt around you.", caption: "Turn a complex process into a considered experience.", focus: "Start with the problem. Build the right system.", tags: ["Discovery", "Custom software", "Hardware integration"] }
};

