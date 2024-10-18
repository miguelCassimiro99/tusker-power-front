'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Instagram, Linkedin, PhoneCall, AlignJustifyIcon } from "lucide-react";



export default function Navbar() {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'partners', label: 'Partners' },
    { id: 'partner', label: 'Partner' },
    { id: 'social', label: 'Social Project' },
  ]

  const socialIcons = [
    { href: "https://wa.me/5512997480571", icon: <PhoneCall /> },
    { href: "https://www.instagram.com/tuskerpower_/", icon: <Instagram /> },
    { href: "https://www.linkedin.com/in/tuskerpowerf1/", icon: <Linkedin /> },
  ];

  return (
    <nav>
      <div className="block md:hidden">
        <Menu>
          <MenuButton><AlignJustifyIcon /></MenuButton>
          <MenuItems anchor="bottom end" className=" flex flex-col py-3 pr-3 pl-8 gap-4 text-right rounded-xl bg-primary shadow-2xl">
            {sections.map((section) => (
              <MenuItem key={section.id}>
                <a className="font-semibold text-base" href={`#${section.id}`}>{section.label}</a>
              </MenuItem>
            ))}
            <div className="flex w-full gap-6 items-center justify-center mt-4">
              {socialIcons.map((social) => (
                <a className="text-sm" key={social.href} href={social.href} target="_blank">
                  {social.icon}
                </a>
              ))}
            </div>
          </MenuItems>
          
          
        </Menu>
      </div>

      <ul className="space-x-4 hidden md:flex">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-gray-100 hover:text-white transition-all font-semibold text-lg duration-300 relative group pb-1"
            >
              {section.label}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#4a021e] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}