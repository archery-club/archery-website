"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "./Icons";

const links = [
  { label: "How it works", href: "#detection" },
  { label: "Analysis", href: "#analysis" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#top" aria-label="ArrowMind home" className="brand" onClick={() => setOpen(false)}>
          <Image src="/media/arrowmind-wordmark.png" width={1931} height={309} alt="ArrowMind" priority unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="button button-small nav-download" href="#download">Get the app <ArrowIcon /></a>
          <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <span className={open ? "menu-lines is-open" : "menu-lines"}><i /><i /></span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowIcon /></a>)}
        <a href="#download" onClick={() => setOpen(false)}>Get the app <ArrowIcon /></a>
      </nav>
    </header>
  );
}
