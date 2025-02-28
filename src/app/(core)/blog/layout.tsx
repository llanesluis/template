import Dashboard from "./page.client";

export const dynamic = "force-dynamic";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // simulate fetch some initial data here
  const initialData = Date.now();
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-col">
        <Dashboard initialData={initialData} />
      </div>
      {children}
    </div>
  );
}
