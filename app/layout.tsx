import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Studios",
  description:
    "Photography, videography and brand storytelling studio in Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}