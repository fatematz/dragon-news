


const LeftSideBar = ({categories, activeId}) => {
  return (
    <>
    <h1 className="mb-4">  All category</h1>
  

    <ul className="flex flex-col gap-[20px]">
    {
      categories.news_category.map(category => {
        return <li className={` ${activeId === category.category_id && "border-2 border-b-pink-500"}  py-3  ml-5`}key={category.category_id}> {category.category_name} </li>
      })
    }
    </ul >
    </>
  )
}

export default LeftSideBar