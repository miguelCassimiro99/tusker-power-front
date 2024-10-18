'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustifyIcon } from "lucide-react";



export default function Navbar() {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'partners', label: 'Partners' },
    { id: 'partner', label: 'Partner' },
    { id: 'social', label: 'Social Project' },
  ]

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