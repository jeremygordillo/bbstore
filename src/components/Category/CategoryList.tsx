type CategoryListProps = {
  categories: string[];
};

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="flex items-center flex-wrap">
      <p className="mr-4">Categories:</p>
      <nav className="mt-4 sm:m-0 flex gap-2 items-center flex-wrap md:flex-nowrap">
        {categories.map((category) => (
          <a
            key={category}
            href={`/category/${encodeURIComponent(category)}`}
            className="p-2 bg-gray-100 rounded-md hover:bg-sky-400 hover:text-white"
          >
            {category}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default CategoryList;
