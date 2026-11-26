/* Shown instantly while an admin page loads, so clicks in the sidebar feel immediate. */
export default function Loading() {
  const bar = "animate-pulse rounded-xl bg-[#102A43]/[0.06]";
  return (
    <div aria-busy="true" aria-label="Loading">
      <div className={`${bar} h-8 w-48`} />
      <div className={`${bar} mt-2 h-4 w-80`} />
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`${bar} h-24`} />
        ))}
      </div>
      <div className={`${bar} mt-4 h-64`} />
    </div>
  );
}
