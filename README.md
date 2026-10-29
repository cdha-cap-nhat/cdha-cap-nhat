# CĐHA-Cập-Nhật - Thư Viện Ebook Y Khoa & Chẩn Đoán Hình Ảnh

Website Thư Viện Tài Liệu & Ebook Y Khoa Trực Tuyến

## 🚀 Giới thiệu & Tính Năng Nổi Bật

1. **Giao diện chuẩn Dark Mode Y khoa cao cấp**:
   - Tông màu Slate `#0f172a` và `#0a0a1a`, hiệu ứng ánh sáng neon glow (Indigo, Purple, Rose, Amber).
   - Hiệu ứng động biểu tượng y khoa 3D bay bổng: Tim mạch, Não bộ, DNA, Kính hiển vi, Ống nghe, Thuốc, Mũ tốt nghiệp.
   - Thống kê thời gian thực: Hơn 15.000+ đầu sách, 85.000+ thành viên, 480.000+ lượt tải.

2. **Hệ thống Danh mục & Tìm kiếm thông minh**:
   - Thanh tìm kiếm gợi ý tức thì (Live search dropdown) theo tên sách, tác giả, chuyên khoa.
   - Phân loại chuyên khoa y tế đa cấp: Y học lâm sàng (Nội, Ngoại, Sản, Nhi, GMHS, ICU,...), Y học cơ sở (Giải phẫu, Sinh lý,...), Cận lâm sàng (X-quang, CT, MRI, ECG), Dược học, Tiếng Anh & USMLE.
   - Bộ lọc theo định dạng (PDF / Video bài giảng), loại tài liệu (Miễn phí / VIP), sắp xếp theo độ hot, lượt tải, năm xuất bản.

3. **Trang Chi Tiết Sách & Trải Nghiệm Học Tập**:
   - Khung ảnh bìa tỷ lệ 2:3 chuẩn xuất bản, thông số năm xuất bản, số trang, dung lượng file.
   - Tab **Mô tả & Mục lục chi tiết** từng chương.
   - Tab **Đọc thử trực tuyến (PDF Sample Viewer)**.
   - Tab **Khóa học Video bài giảng y khoa**: Tích hợp trình phát video và danh sách bài học (Lessons playlist) kèm thời lượng.

4. **Tích hợp Cổng Chuyển Khoản Tự Động VietQR**:
   - Tạo mã QR ngân hàng chuẩn VietQR (Vietcombank) kèm số tài khoản, số tiền và nội dung chuyển khoản tự động.
   - Hỗ trợ 2 luồng thanh toán: **Tải nhanh sách lẻ (60.000đ)** và **Nâng cấp Hội viên VIP 1 năm (399.000đ)**.
   - Nút mô phỏng kiểm tra giao dịch và kích hoạt link tải tức thì.

5. **Phân hệ Bổ sung & Hỗ trợ độc giả**:
   - **Trang Yêu cầu sách (`/yeu-cau-sach`)**: Form gửi yêu cầu tài liệu y khoa với cam kết phản hồi trong 24 giờ.
   - **Trang Nâng cấp VIP (`/nang-cap-vip`)**: Bảng so sánh quyền lợi và đăng ký gói hội viên.
   - **Trang Hướng dẫn tải (`/huong-dan-tai-sach`)**: Hướng dẫn cài đặt và đọc PDF y khoa trên iOS (GoodNotes, Apple Books), Android (Xodo) và Windows/Mac.
   - **Trang Quản trị Admin (`/admin`)**: Quản lý danh sách sách, duyệt yêu cầu VIP và cấu hình tài khoản ngân hàng VietQR.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend**: Next.js 14 (App Router, Server Components & Client Components), TypeScript
- **Styling**: Tailwind CSS, CSS Animations, Glassmorphism
- **Icons**: Lucide React
- **Thanh toán**: VietQR API (Vietcombank)

---

## 💻 Hướng Dẫn Chạy Dự Án

### Khởi chạy môi trường phát triển (Development):
```bash
cd /Users/khanhphanduy/.gemini/antigravity/scratch/medical-library-gmhs
npm run dev
```
Trang web sẽ chạy tại địa chỉ: `http://localhost:3000`

### Kiểm tra build sản phẩm (Production build):
```bash
npm run build
npm run start
```
