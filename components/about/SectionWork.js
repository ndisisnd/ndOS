export default function SectionWork({ array }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="uppercase tracking-wide text-neutral-secondary">Work</h3>
      {array?.map((el) => (
        <section key={el.id} className="flex flex-row gap-4">
          <p className="w-1/6 text-neutral-secondary font-light">{el.date}</p>
          <div className="w-full flex flex-col gap-2">
            <p className="font-bold">{el.title}</p>
            <p className="text-neutral-secondary font-light">{el.body}</p>
          </div>
        </section>
      ))}
    </section>
  );
}
