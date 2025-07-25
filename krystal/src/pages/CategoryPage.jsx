import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <div className="p-6">
      📦 Category: <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
    </div>
  );
};

export default CategoryPage;
