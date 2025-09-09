// product_catagories.js

// تابع async برای گرفتن داده‌ها و تبدیل به فرمت { img, title }
export async function getProductCategories() {
  try {
    const res = await fetch("https://backend.bazbia.ir/api/products/categories/"); // آدرس API
    const data = await res.json();

    // تبدیل داده‌ها به فرمت مورد نیاز
    return data.map(item => ({
      img: item.image,
      title: item.name
    }));

  } catch (error) {
    console.error("Error fetching categories:", error);

    // fallback آرایه هاردکد قبلی
    return [
      { img: "/assets/img/core-img/woman-clothes.png", title: "Womens Fashion" },
      { img: "/assets/img/core-img/grocery.png", title: "Groceries & Pets" },
      { img: "/assets/img/core-img/shampoo.png", title: "Health & Beauty" },
      { img: "/assets/img/core-img/rowboat.png", title: "Sports & Outdoors" },
      { img: "/assets/img/core-img/tv-table.png", title: "Home Appliance" },
      { img: "/assets/img/core-img/beach.png", title: "Tour & Travels" },
      { img: "/assets/img/core-img/baby-products.png", title: "Mother & Baby" },
      { img: "/assets/img/core-img/price-tag.png", title: "Clearance Sale" },
    ];
  }
}
