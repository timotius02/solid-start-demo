import { A } from "@solidjs/router";

interface NavButtonProps {
  href: string;
  name: string;
}
export default function NavLink(props: NavButtonProps) {
  return (
    <A class="p-4" activeClass="text-green-500" end={true} href={props.href}>
      {props.name}
    </A>
  );
}
