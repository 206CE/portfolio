export default function Alert({
  type = "info",
  children,
}: {
  type?: string;
  children: React.ReactNode;
}) {
  const base = "p-4 my-4 rounded";
  const styles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };
  return (
    <div className={`${base} ${styles[type as keyof typeof styles]}`}>
      {children}
    </div>
  );
}
