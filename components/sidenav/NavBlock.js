import NavItem from "./NavItem";

export default function NavBlock({ sectionTitle, arrayLinks }) {
  const arrayItems = arrayLinks.map((el) => (
    <NavItem
      key={el.name}
      name={el.name}
      icon={el.icon}
      right={el?.right}
      href={el?.href}
    />
  ));

  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="uppercase tracking-wide text-sm text-neutral-secondary">
          {sectionTitle}
        </p>
        <ul className="flex flex-col gap-1">{arrayItems}</ul>
      </div>
    </>
  );
}
