import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <main className="mx-auto min-h-svh w-full flex-1">
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </main>
    </div>
  );
}
