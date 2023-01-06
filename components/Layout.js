import Sidenav from "./Sidenav";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row bg-neutral-surface px-8">
        <Sidenav />
        {children}
      </div>
    </>
  );
}
