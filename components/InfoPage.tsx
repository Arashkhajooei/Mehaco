import type { ReactNode } from "react";

export default function InfoPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <header className="mb-10 md:mb-14">
        <p className="eyebrow text-right text-sm">{eyebrow}</p>
        <h1 className="section-title mt-1.5">{title}</h1>
        {intro && <p className="mt-4 leading-8 text-taupe">{intro}</p>}
      </header>
      <div className="space-y-10 text-[15px] leading-8">{children}</div>
    </div>
  );
}

export function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 border-b border-line pb-2 text-lg font-medium">
        {title}
      </h2>
      <div className="text-taupe">{children}</div>
    </section>
  );
}
