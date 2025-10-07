import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderThree from "./HeaderThree";

interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchCategory = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://backend.bazbia.ir/api/categories/${slug}/`);
        if (!res.ok) throw new Error("خطا در دریافت اطلاعات دسته");
        const data = await res.json();
        setCategory(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [slug]);

  if (loading) return <p className="text-center mt-8">در حال بارگذاری...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!category) return <p className="text-center mt-8">دسته‌ای یافت نشد</p>;

  return (
    <div>
      <HeaderThree
        links="home"
        title={category.name ? category.name : "دسته‌ها"}
      />

      <div className="max-w-6xl mx-auto mt-6 p-4">
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="w-full rounded-2xl shadow-md mb-6"
          />
        )}
        <h2 className="text-2xl font-semibold mb-3 text-center">
          {category.name}
        </h2>
        <p className="text-gray-500 text-center">
          محصولات مرتبط با دسته "{category.name}"
        </p>
      </div>
    </div>
  );
};

export default Category;
