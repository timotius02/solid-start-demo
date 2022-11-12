import { For } from "solid-js";
import NavLink from "./NavLink";

const tabs = [
  {
    name: "Find Project",
    href: "/",
  },
  {
    name: "Reports",
    href: "reports",
  },
  { name: "My Contracts", href: "/contracts" },
  { name: "Request Project", href: "/request" },
];

export default function Navbar() {
  return (
    <div class="bg-white">
      <div class="flex justify-center">
        <For each={tabs}>
          {(tab) => <NavLink name={tab.name} href={tab.href}></NavLink>}
        </For>
      </div>
    </div>
  );
}
