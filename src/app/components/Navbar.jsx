import Link from "next/link";

export default async function Navbar() {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products");
  const pages = await res.json();

  return (
    <nav className="flex flex-col justify-center pt-20 bg-blue-500">
      <ul className="text-white p-4">
        <li>
          <Link href="/" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          {pages.map((page) => {
            return (
              <Link className="pr-4" key={page.id} href={`/products/${page.id}`}>
                {page.productdisplayname}
              </Link>
            );
          })}
        </li>
      </ul>
    </nav>
  );
}
