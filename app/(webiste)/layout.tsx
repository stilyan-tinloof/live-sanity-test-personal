import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto min-h-svh w-full flex-1">
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </main>
    </div>
  );
}
