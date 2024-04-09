import Link from "next/link";

export default function WorkingPage() {
  return (
    <>
      Working Page
      <br />
      <br />
      <Link href="/target">Client-Side navigation to target</Link> <br />
      <a href="/target">Native navigation to target</a> <br />
    </>
  );
}
