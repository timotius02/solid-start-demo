import { A } from "solid-start";

interface NavButtonProps {
  href: string;
  name: string;
}
export default function NavLink(props: NavButtonProps) {
  return (
    <A
      class="py-4 px-6 font-medium"
      activeClass="text-green-500"
      end={true}
      href={props.href}
    >
      {props.name}
    </A>
  );
}
