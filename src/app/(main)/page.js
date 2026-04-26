import LeftSideBar from "@/components/homepage/news/LeftSidebar";
import RightSideBar from "@/components/RightSidebar";
import { lightFormat } from "date-fns";

async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}


  async function getNewsCategoryId( category_id ){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}



export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "category");

  const news = await getNewsCategoryId("05")
  console.log(news)

  return (
    <>
    {/* first  */}
    <div className="mt-16">
    <div className="container grid grid-cols-12 gap-4 my-4">
      
      <div className=" col-span-3">
       <LeftSideBar categories={categories} activeId={"04"}/>
      </div>

      <div className="bg-gray-500 col-span-6">
      <h1>All News</h1>
      {
        news.map(n => {
          return <div key={n._id}> {n.title} </div>
        })
      }
      </div>

      <div className=" col-span-3">
      <RightSideBar/>
      </div>
      </div>
      </div>

    


</>
      
  );
}
