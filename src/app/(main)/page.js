import LeftSideBar from "@/components/homepage/news/LeftSidebar";
import RightSideBar from "@/components/RightSidebar";
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
    <div className="container grid grid-cols-12 gap-4 ">

      <div className=" col-span-3">
       <LeftSideBar categories={categories} activeId={"04"}/>
      </div>

      <div className="bg-gray-500 col-span-6">
      <h1>center</h1>
      </div>

      <div className="bg-green-300 col-span-3">
      <RightSideBar/>
      </div>
      </div>
  );
}
