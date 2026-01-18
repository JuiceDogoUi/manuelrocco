import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my background.",
};

export default function AboutMePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          Content about yourself goes here. This is where you can share your
          story, background, and what drives you.
        </p>
        <p>
          Add more paragraphs as needed to tell your story and connect with
          visitors.
        </p>
      </div>
    </div>
  );
}
