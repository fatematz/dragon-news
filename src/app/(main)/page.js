import { lightFormat } from "date-fns";

async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "category");

  return (
    <div className="container grid grid-cols-12 gap-4">

      <div className="bg-red-500 col-span-3">
    All category

    <ul className="flex flex-col gap-[20px]">
    {
      categories.news_category.map(category => {
        return <li key={category.category_id}> {category.category_name} </li>
      })
    }
    </ul >
      </div>

      <div className="bg-gray-500 col-span-6">
      <h1>center</h1>
      </div>

      <div className="bg-green-300 col-span-3">
      <h1>Right-side-bar</h1>
      </div>
      </div>
  );
}
