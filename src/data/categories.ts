import { Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "Tất cả sách",
    slug: "tat-ca",
    description: "Toàn bộ tài liệu y khoa đa chuyên ngành",
  },
  {
    id: "clinical",
    name: "Y học lâm sàng",
    slug: "lam-sang",
    description: "Tài liệu chẩn đoán và điều trị thực hành tại bệnh viện",
    subcategories: [
      { id: "noi-khoa", name: "Nội khoa tổng quát", slug: "noi-khoa" },
      { id: "ngoai-khoa", name: "Ngoại khoa & Phẫu thuật", slug: "ngoai-khoa" },
      { id: "san-phu", name: "Sản phụ khoa", slug: "san-phu" },
      { id: "nhi-khoa", name: "Nhi khoa", slug: "nhi-khoa" },
      { id: "gay-me", name: "Gây mê Hồi sức (GMHS)", slug: "gay-me" },
      { id: "cap-cuu", name: "Hồi sức cấp cứu & Chống độc (ICU)", slug: "cap-cuu" },
      { id: "tim-mach", name: "Tim mạch can thiệp", slug: "tim-mach" },
      { id: "da-lieu", name: "Da liễu & Thẩm mỹ", slug: "da-lieu" },
    ],
  },
  {
    id: "basic",
    name: "Y học cơ sở",
    slug: "co-so",
    description: "Nền tảng cấu trúc và chức năng cơ thể người",
    subcategories: [
      { id: "giai-phau", name: "Giải phẫu học", slug: "giai-phau" },
      { id: "sinh-ly", name: "Sinh lý học y khoa", slug: "sinh-ly" },
      { id: "hoa-sinh", name: "Hóa sinh y học", slug: "hoa-sinh" },
      { id: "mo-phoi", name: "Mô học & Phôi thai học", slug: "mo-phoi" },
      { id: "vi-sinh", name: "Vi sinh & Ký sinh trùng", slug: "vi-sinh" },
      { id: "giai-phau-benh", name: "Giải phẫu bệnh", slug: "giai-phau-benh" },
    ],
  },
  {
    id: "paraclinical",
    name: "Cận lâm sàng",
    slug: "can-lam-sang",
    description: "Công cụ chẩn đoán hình ảnh và xét nghiệm chuyên sâu",
    subcategories: [
      { id: "cdha", name: "Chẩn đoán hình ảnh (X-quang, CT, MRI, US)", slug: "cdha" },
      { id: "ecg", name: "Điện tâm đồ (ECG / EKG)", slug: "ecg" },
      { id: "xet-nghiem", name: "Xét nghiệm & Sinh hóa lâm sàng", slug: "xet-nghiem" },
      { id: "huyet-hoc", name: "Huyết học & Truyền máu", slug: "huyet-hoc" },
    ],
  },
  {
    id: "pharmacy",
    name: "Dược học",
    slug: "duoc-hoc",
    description: "Dược lý, sử dụng thuốc an toàn và tương tác thuốc",
    subcategories: [
      { id: "duoc-ly", name: "Dược lý học y khoa", slug: "duoc-ly" },
      { id: "duoc-lam-sang", name: "Dược lâm sàng & Phác đồ", slug: "duoc-lam-sang" },
      { id: "duoc-thu", name: "Dược thư quốc gia", slug: "duoc-thu" },
    ],
  },
  {
    id: "english",
    name: "Sách Tiếng Anh & USMLE",
    slug: "english",
    description: "Giáo trình y khoa chuẩn quốc tế & tài liệu luyện thi chứng chỉ",
    subcategories: [
      { id: "usmle-step-1", name: "USMLE Step 1 Series", slug: "usmle-step-1" },
      { id: "usmle-step-2", name: "USMLE Step 2 CK / Step 3", slug: "usmle-step-2" },
      { id: "oxford", name: "Oxford Medical Handbooks", slug: "oxford" },
      { id: "first-aid", name: "First Aid Series", slug: "first-aid" },
    ],
  },
  {
    id: "video-courses",
    name: "Khóa học Video Y Khoa",
    slug: "video-courses",
    description: "Chuỗi bài giảng video chuyên sâu, ca lâm sàng & thủ thuật",
    subcategories: [
      { id: "video-ecg", name: "Điện tâm đồ lâm sàng", slug: "video-ecg" },
      { id: "video-sieu-am", name: "Siêu âm cấp cứu Point-of-Care", slug: "video-sieu-am" },
      { id: "video-phau-thuat", name: "Video phẫu thuật & nội soi", slug: "video-phau-thuat" },
    ],
  },
];
