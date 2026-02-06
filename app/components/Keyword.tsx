export default function Keyword({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <span
      className="text-primary dark:text-primaryDark font-semibold uppercase"
      {...(title ? { title } : {})}
    >
      {children}
    </span>
  );
}
