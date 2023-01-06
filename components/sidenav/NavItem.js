import Link from "next/link";

export default function NavItem({ icon, name, right, href }) {
  return (
    <>
      <Link href={href} className="hover:bg-brand-secondary rounded">
        <div className=" justify-between items-center text-neutral-primary hover:text-brand-primary  cursor-pointer flex pr-1 w-max">
          <li className="flex items-center text-sm text-neutral-primary hover:text-brand-primary p-2 gap-2">
            {icon} {name}
          </li>
          {right}
        </div>
      </Link>
    </>
  );
}
