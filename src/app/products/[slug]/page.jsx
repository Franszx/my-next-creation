import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: `${page.id}` };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/" + slug);
  const data = await res.json();
  return {
    title: data.brandname,
    description: `it is a ${data.articletype}`,
  };
}

export default async function Product({ params }) {
  const { slug } = params;
  const res = await fetch("https://kea-alt-del.dk/t7/api/products/" + slug);
  if (res.status != 200) return notFound();

  console.log(slug);
  const data = await res.json();
  const { gender, articletype, category, productdisplayname, brandname, price, discount, season } = data;

  return (
    <main className="flex justify-center">
      <div className="flex flex-col justfy-center">
        <h1 className="text-3xl">Product: {productdisplayname}</h1>
        <p>Type: {articletype ? articletype : "Accessories"}.</p>
        <p>Sex: {data.gender}</p>
        <p>He is only {data.category} years old.</p>
        <p>Price:{data.price} ,- </p>
        <p>Discount:{data.discount} </p>
        <p>Season: {data.season} </p>
      </div>
    </main>
  );
}
