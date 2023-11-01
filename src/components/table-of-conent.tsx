import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export const TableOfContent: React.FC = () => {
  const headings = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
    .filter((element) => element.id)
    .map((element) => ({
      id: element.id,
      text: element.textContent,
      level: Number(element.tagName.slice(1)),
    }));

  const [activeHeading, setActiveHeading] = useState<string | undefined>(headings[0]?.id);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const elements = headings.map(({ id }) => document.getElementById(id));

    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) setActiveHeading(entry.target.id);
        });
      },
      { rootMargin: '0% 0% -85% 0%' },
    );

    elements.forEach((element) => {
      if (element) observer.current?.observe(element);
    });

    return () => observer.current?.disconnect();
  }, [headings]);

  return (
    <aside className="table-of-content">
      <h2 className="fs-3">Tartalom</h2>
      <ul>
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ marginLeft: `${(level - 2) * 1.25}rem` }}>
            <a
              href={`#${id}`}
              className={clsx('text-black link link-reverse', activeHeading === id && 'active')}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
