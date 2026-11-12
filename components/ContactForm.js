"use client";
import { useState } from "react";
import { site } from "@/lib/data";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function go(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hi ${site.name}, I'm ${f.get("name")} (${f.get("phone")}). I need: ${f.get("need")}.\n${f.get("msg") || ""}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }
  return (
    <form className="form" onSubmit={go}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Phone<input name="phone" required type="tel" autoComplete="tel" /></label>
      <label>What do you need?
        <select name="need">{["Car parking system", "POS system", "Attendance system", "HR tools", "Device management", "Custom system", "Service or update"].map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label>Tell us about your project<textarea name="msg" rows="3" /></label>
      <button className="btn" type="submit">Send on WhatsApp</button>
      {sent && <p className="ok" role="status">WhatsApp opened with your message. Press send there and we will reply the same working day.</p>}
    </form>
  );
}
