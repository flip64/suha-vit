#!/bin/bash

# -------------------------
# تنظیمات
ACCESS_TOKEN="اینجا توکن access را قرار بده"  # <-- توکن access خودت را جایگذاری کن
PRODUCT_ID=123       # محصول نمونه
QUANTITY_ADD=2       # تعداد برای افزودن
QUANTITY_UPDATE=5    # تعداد جدید برای بروزرسانی
# -------------------------

# بررسی توکن
if [ -z "$ACCESS_TOKEN" ]; then
  echo "❌ توکن access خالی است. لطفاً آن را وارد کن."
  exit 1
fi

# 1️⃣ گرفتن سبد خرید فعلی
echo -e "\n📦 گرفتن سبد خرید..."
curl -s -X GET "https://backend.bazbia.ir/api/orders/cart/" \
-H "Authorization: Bearer $ACCESS_TOKEN" \
| python3 -m json.tool

# 2️⃣ افزودن محصول به سبد
echo -e "\n➕ افزودن محصول به سبد..."
curl -s -X POST "https://backend.bazbia.ir/api/orders/cart/add/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-d "{\"product_id\": $PRODUCT_ID, \"quantity\": $QUANTITY_ADD}" \
| python3 -m json.tool

# 3️⃣ بروزرسانی تعداد محصول (همان add با quantity جدید)
echo -e "\n✏️ بروزرسانی تعداد محصول..."
curl -s -X POST "https://backend.bazbia.ir/api/orders/cart/add/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-d "{\"product_id\": $PRODUCT_ID, \"quantity\": $QUANTITY_UPDATE}" \
| python3 -m json.tool

# 4️⃣ حذف محصول از سبد (quantity=0)
echo -e "\n🗑️ حذف محصول از سبد..."
curl -s -X POST "https://backend.bazbia.ir/api/orders/cart/add/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-d "{\"product_id\": $PRODUCT_ID, \"quantity\": 0}" \
| python3 -m json.tool

echo -e "\n✅ عملیات سبد خرید با موفقیت انجام شد."
