import NavBlock from "./sidenav/NavBlock";
import {
  arrayMe,
  arrayProjects,
  arraySocials,
  arrayHome,
} from "../utils/arrayLinkUtil";

export default function Sidenav() {
  return (
    <>
      <nav className="sticky top-0 border-r-2 border-neutral-border bg-neutral-surface h-screen flex flex-col pr-8 pt-8 gap-8">
        <NavBlock arrayLinks={arrayHome} />
        <NavBlock sectionTitle={"Me"} arrayLinks={arrayMe} />
        <NavBlock sectionTitle={"Projects"} arrayLinks={arrayProjects} />
        <NavBlock sectionTitle={"Find Me"} arrayLinks={arraySocials} />
      </nav>
    </>
  );
}
