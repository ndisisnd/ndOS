import ListDetail from "./nestednav/ListDetail";

export default function NestedNav({ children }) {
  return (
    <nav className="bg-neutral-surface h-screen border-r-2 border-neutral-border pt-8 px-4">
      <h3 className="pl-2 uppercase text-sm text-neutral-secondary tracking-wide">
        Thoughts
      </h3>
      <ListDetail />
    </nav>
  );
}
