import { Post } from "@/types";

export const POSTS: Post[] = [
  {
    id: "post-birads-2025-masses-shape-margin-density",
    title: "Cẩm nang ACR BI-RADS® 2025: Khối u tuyến vú (Masses) – Hình thái, Đường bờ và Đậm độ",
    slug: "birads-2025-khoi-u-tuyen-vu-hinh-thai-duong-bo-dam-do",
    date: "30 Tháng 10, 2026",
    updatedDate: "30 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "X-quang", "Nhũ ảnh", "BI-RADS 2025", "Khối u tuyến vú"],
    categorySlugs: ["vu", "x-quang", "nhu-anh", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-masses/page_01_b1_c1.jpg",
    excerpt: "Cập nhật toàn diện từ Cẩm nang ACR BI-RADS® v2025 về tổn thương Khối u tuyến vú (Masses) trên nhũ ảnh 2D, nhũ ảnh tổng hợp (SM) và nhũ ảnh 3D cắt lớp (DBT). Phân tích chi tiết 3 thuộc tính then chốt: Hình thái (Shape), Đường bờ (Margin) và Đậm độ (Density), kèm theo các cập nhật mới mang tính bước ngoặt như bổ sung hình thái Đa cung (Lobulated), nguyên tắc đánh giá đường bờ trên DBT và các cạm bẫy chẩn đoán ác tính quan trọng.",
    content: [
      "Khối (Mass) là cấu trúc choán chỗ ba chiều (3D) có đường bờ lồi hoàn toàn hoặc một phần và xuất hiện đậm hơn ở trung tâm.",
      "Theo ACR BI-RADS® v2025, với nhũ ảnh 3D cắt lớp (DBT), một tổn thương có thể được định danh đầy đủ là Khối ngay cả khi chỉ nhìn thấy trên một hướng chụp duy nhất.",
      "BI-RADS® 2025 cập nhật thuật ngữ hình thái mới 'Đa cung' (Lobulated) và hướng dẫn đánh giá tối ưu đường bờ khối u trực tiếp trên các lát cắt mỏng của DBT."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Khối u tuyến vú (Masses)
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Bài giảng được biên dịch nguyên văn đầy đủ từ Cẩm nang <em>ACR BI-RADS® v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ, tích hợp 28 ca bệnh và hình ảnh đối chiếu đa phương tiện (DM 2D, DBT 3D và SM tổng hợp). Nội dung dịch nguyên tác bài giảng hiển thị chữ đen trên nền trắng tiêu chuẩn; các phần tổng hợp ma trận đối chiếu, điểm cốt lõi và cạm bẫy lâm sàng được đóng khung màu riêng biệt để dễ dàng nhận diện và kiểm chứng.
        </p>
      </div>

      <h2 id="phan-1-dinh-nghia">1. Giới thiệu tổng quan & Định nghĩa Khối u theo BI-RADS® v2025</h2>
      <p>
        Trong thuật ngữ Nhũ ảnh của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology - ACR), <strong>Khối (Mass)</strong> là một cấu trúc choán chỗ ba chiều (3-dimensional, space-occupying structure). Khối có đường bờ lồi hoàn toàn hoặc một phần và khi cản tia (radiodense), khối sẽ xuất hiện đậm hơn ở trung tâm so với vùng ngoại vi.
      </p>
      <p>
        Về mặt lịch sử, theo định nghĩa kinh điển trên nhũ ảnh 2D thông thường (DM), một tổn thương bắt buộc phải nhìn thấy được trên cả <strong>hai hướng chụp nhũ ảnh khác nhau</strong> (thường là hướng CC và MLO) mới đủ tiêu chuẩn được gọi là một "Khối". Nếu chỉ thấy trên một hướng chụp duy nhất, tổn thương đó chỉ được xếp loại là "Bất đối xứng" (Asymmetry).
      </p>

      <div class="key-points">
        <strong>Thay đổi quan trọng trong BI-RADS® v2025:</strong>
        Với sự phát triển của nhũ ảnh 3D cắt lớp (<em>Digital Breast Tomosynthesis - DBT</em>), toàn bộ các tiêu chuẩn cần thiết để xác định một khối u (bao gồm cấu trúc choán chỗ 3D có độ dày thể tích thực sự, bờ lồi và đậm độ trung tâm) có thể được <strong>bộc lộ đầy đủ ngay trên một hướng chụp duy nhất khi ghi hình bằng DBT</strong>. Việc khối chỉ nhìn thấy trên một hướng chụp có thể xảy ra do mô sợi tuyến (fibroglandular tissue) che khuất trên hướng chụp kia, hoặc do tổn thương nằm ở vị trí ngoại vi ngoài trường chụp (out of the field of view). Trong những trường hợp này, việc sử dụng thuật ngữ mô tả "Khối" (Mass) hoàn toàn phù hợp dù chỉ quan sát thấy tổn thương trên một hướng chụp đơn độc.
      </div>

      <p>
        Mỗi khối u phát hiện trên nhũ ảnh được mô tả dựa trên <strong>3 thuộc tính cơ bản</strong>:
      </p>
      <ol>
        <li><strong>Hình thái (Shape):</strong> Bầu dục (Oval), Đa cung (Lobulated - <em>mô tả mới của BI-RADS 2025</em>), Tròn (Round), Không đều (Irregular).</li>
        <li><strong>Đường bờ (Margin):</strong> Rõ nét (Circumscribed), Bị che khuất (Obscured), Không rõ nét (Indistinct), Tua gai (Spiculated).</li>
        <li><strong>Đậm độ (Density):</strong> Chứa mỡ (Fat-containing), Đậm độ thấp (Low density), Đồng đậm độ (Equal density), Đậm độ cao (High density).</li>
      </ol>

      <h2 id="phan-2-hinh-thai">2. Phân loại Hình thái khối u (Mass Shape)</h2>

      <h3 id="shape-oval">a. Hình bầu dục (Oval)</h3>
      <p>
        <strong>Định nghĩa:</strong> Khối hình bầu dục có dạng hình elip với một trục dài hơn hai trục còn lại. Khối hình bầu dục phần lớn đại diện cho các tổn thương lành tính (như u sợi tuyến hoặc nang), tuy nhiên vẫn có thể gặp ở các dạng ung thư xâm nhập phát triển nhanh hoặc ung thư biểu mô thể tủy/nhầy.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_01_b1_c1.jpg" alt="Figure 1 – OVAL, obscured, equal density mass (DBT). Simple cyst." class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – OVAL, obscured, equal density mass (DBT). Simple cyst.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (DBT). Nang đơn giản].</figcaption>
      </figure>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_01_b2_c1.jpg" alt="Figure 2A – OVAL, circumscribed mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 (A) DM.</strong></figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_01_b2_c2.jpg" alt="Figure 2B – OVAL, circumscribed mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 (B) DBT.</strong></figcaption>
        </figure>
      </div>
      <p class="text-xs text-center text-slate-600 italic -mt-2 mb-6">
        <strong>Figure 2 – OVAL, circumscribed, equal density mass (arrows). (A) DM (B) DBT. Pathology: Invasive ductal carcinoma and DCIS.</strong> [Khối hình bầu dục, bờ rõ nét, đồng đậm độ (mũi tên). (A) DM (B) DBT. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập và DCIS].
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_02_b1_c1.jpg" alt="Figure 3 – OVAL, obscured, equal density mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – OVAL, obscured, equal density mass (SM). Simple cyst.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (SM). Nang đơn giản].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_02_b1_c2.jpg" alt="Figure 4 – OVAL, circumscribed, high density mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – OVAL, circumscribed, high density mass (DM). Simple cyst.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ cao (DM). Nang đơn giản].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_02_b2_c1.jpg" alt="Figure 5A – OVAL, obscured mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 (A) DM.</strong></figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_02_b2_c2.jpg" alt="Figure 5B – OVAL mass characterized on DBT" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 (B) DBT.</strong></figcaption>
        </figure>
      </div>
      <p class="text-xs text-center text-slate-600 italic -mt-2 mb-6">
        <strong>Figure 5 – OVAL, obscured, equal density mass (A)(DM). The margin of this mass is better characterized on DBT (B) compared with the corresponding DM view. Stable mass, presumed cyst.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (A)(DM). Đường bờ của khối này được bộc lộ rõ hơn trên DBT (B) so với hướng chụp DM tương ứng. Khối ổn định, nghi ngờ nang].
      </p>

      <h3 id="shape-lobulated">b. Hình đa cung (Lobulated) - Cập nhật mới BI-RADS® v2025</h3>
      <p>
        <strong>Định nghĩa:</strong> Khối đa cung biểu hiện một hoặc nhiều chỗ lõm vào (indentations) tạo nên đường viền gợn sóng (undulating contour).
      </p>
      <div class="key-points">
        <strong>Ý nghĩa phân loại mới của BI-RADS® v2025:</strong>
        Mặc dù đa số các khối hình đa cung vẫn là lành tính (như u sợi tuyến hoặc cụm vi nang), khối đa cung được coi là có mức độ nghi ngờ ác tính nhỉnh hơn so với khối hình bầu dục thông thường. Thuật ngữ mô tả hình thái mới này được đưa vào nhằm bổ sung sắc thái đánh giá tinh tế hơn cho hình thái khối u.
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_03_b1_c1.jpg" alt="Figure 1 – LOBULATED, circumscribed, equal density mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – LOBULATED, circumscribed, equal density mass (DBT). Pathology: Fibroadenoma.</strong> [Khối hình đa cung, bờ rõ nét, đồng đậm độ (DBT). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_03_b1_c2.jpg" alt="Figure 2 – LOBULATED, circumscribed mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – LOBULATED, circumscribed mass (DBT). Pathology: Fibroadenoma.</strong> [Khối hình đa cung, bờ rõ nét (DBT). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_03_b2_c1.jpg" alt="Figure 3 – LOBULATED, circumscribed mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – LOBULATED, circumscribed, equal density mass (DM). Clustered microcysts.</strong> [Khối hình đa cung, bờ rõ nét, đồng đậm độ (DM). Chùm vi nang].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_03_b2_c2.jpg" alt="Figure 4 – LOBULATED, circumscribed mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – LOBULATED, circumscribed, equal density mass (DM). Clustered microcysts.</strong> [Khối hình đa cung, bờ rõ nét, đồng đậm độ (DM). Chùm vi nang].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_04_b1_c1.jpg" alt="Figure 5 – LOBULATED, circumscribed, high density mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – LOBULATED, circumscribed, high density mass (DBT). Stable mass, presumed fibroadenoma.</strong> [Khối hình đa cung, bờ rõ nét, đậm độ cao (DBT). Khối ổn định, nghĩ u sợi tuyến].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_04_b1_c2.jpg" alt="Figure 6 – LOBULATED, circumscribed, high density mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – LOBULATED, circumscribed, high density mass (DBT). Stable mass, presumed fibroadenoma.</strong> [Khối hình đa cung, bờ rõ nét, đậm độ cao (DBT). Khối ổn định, nghĩ u sợi tuyến].</figcaption>
        </figure>
      </div>

      <h3 id="shape-round">c. Hình tròn (Round)</h3>
      <p>
        <strong>Định nghĩa:</strong> Khối hình tròn có dạng hình cầu hoặc hình tròn với cả ba trục xấp xỉ bằng nhau. 
      </p>
      <div class="pitfalls">
        <strong>Nguyên tắc phân loại quan trọng:</strong>
        Một khối có dạng <em>hình bầu dục trên một hướng chụp</em> và <em>hình tròn trên hướng chụp khác</em> bắt buộc phải được <strong>xếp loại là Hình bầu dục (Oval)</strong>. Khối hình tròn có thể là lành tính hoặc ác tính (đặc biệt là các khối ung thư phát triển dạng đẩy không tạo co kéo tua gai như ung thư biểu mô thể tủy hoặc thể tam âm).
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_05_b1_c1.jpg" alt="Figure 1 – ROUND, obscured, high density mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – ROUND, obscured, high density mass (DM). Pathology: Benign phyllodes tumor.</strong> [Khối hình tròn, bờ bị che khuất, đậm độ cao (DM). Giải phẫu bệnh: U diệp thể lành tính].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_05_b1_c2.jpg" alt="Figure 2 – ROUND, indistinct, high density mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – ROUND, indistinct, high density mass (SM). Pathology: Fibroadenoma.</strong> [Khối hình tròn, bờ không rõ nét, đậm độ cao (SM). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_05_b2_c1.jpg" alt="Figure 3 – ROUND, circumscribed, high density mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – ROUND, circumscribed, high density mass (DBT). Pathology: Simple cyst.</strong> [Khối hình tròn, bờ rõ nét, đậm độ cao (DBT). Giải phẫu bệnh: Nang đơn giản].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_05_b2_c2.jpg" alt="Figure 4 – ROUND, circumscribed, high density mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – ROUND, circumscribed, high density mass (SM). Pathology: Simple cyst.</strong> [Khối hình tròn, bờ rõ nét, đậm độ cao (SM). Giải phẫu bệnh: Nang đơn giản].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_06_b1_c1.jpg" alt="Figure 5 – ROUND, obscured, high density mass" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – ROUND, obscured, high density mass (arrow). Multiple additional masses are present, including an irregular, spiculated mass (arrowhead) (SM). Pathology: Simple cyst (arrow); invasive ductal carcinoma on biopsy (arrowhead).</strong> [Khối hình tròn, bờ bị che khuất, đậm độ cao (mũi tên). Có nhiều khối u khác xuất hiện đồng thời, bao gồm một khối không đều, bờ tua gai (đầu mũi tên) (SM). Giải phẫu bệnh: Nang đơn giản (mũi tên); ung thư biểu mô thể ống xâm nhập trên sinh thiết (đầu mũi tên)].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_06_b2_c1.jpg" alt="Figure 6 – ROUND, indistinct, high density mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – ROUND, indistinct, high density mass (SM). Pathology: Triple negative invasive ductal carcinoma.</strong> [Khối hình tròn, bờ không rõ nét, đậm độ cao (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập thể tam âm].</figcaption>
        </figure>
      </div>

      <h3 id="shape-irregular">d. Hình không đều (Irregular)</h3>
      <p>
        <strong>Định nghĩa:</strong> Khối không đều là khối không thuộc dạng hình tròn, hình đa cung hay hình bầu dục, và biểu hiện các phần nhô ra tạo góc nhọn (acute-angle protruding portions). Việc sử dụng mô tả này thường hàm ý dấu hiệu nghi ngờ ác tính cao. Một khối có nhiều cung góc cạnh hoặc khía phân thùy sâu cũng phải được phân loại là hình không đều.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_07_b1_c1.jpg" alt="Figure 1 – IRREGULAR, spiculated mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – IRREGULAR, spiculated, high density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đậm độ cao (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_07_b1_c2.jpg" alt="Figure 2 – IRREGULAR, indistinct mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – IRREGULAR, indistinct, high density mass (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ không rõ nét, đậm độ cao (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_07_b2_c1.jpg" alt="Figure 3 – IRREGULAR, indistinct mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – IRREGULAR, indistinct, high density mass (DBT). Pathology: Clustered microcysts.</strong> [Khối không đều, bờ không rõ nét, đậm độ cao (DBT). Giải phẫu bệnh: Chùm vi nang].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_07_b2_c2.jpg" alt="Figure 4 – IRREGULAR, spiculated mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – IRREGULAR, spiculated, equal density mass (DBT). Pathology: Invasive lobular carcinoma.</strong> [Khối không đều, bờ tua gai, đồng đậm độ (DBT). Giải phẫu bệnh: Ung thư biểu mô tiểu thùy xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_08_b1_c1.jpg" alt="Figure 5 – IRREGULAR, spiculated mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – IRREGULAR, spiculated, high density mass (DBT). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đậm độ cao (DBT). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_08_b1_c2.jpg" alt="Figure 6 – IRREGULAR, spiculated mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – IRREGULAR, spiculated, high density mass (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đậm độ cao (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <h2 id="phan-3-duong-bo">3. Phân loại Đường bờ khối u (Mass Margin)</h2>
      <p>
        Đường bờ là mép hoặc ranh giới phân định của khối u. Mô tả đường bờ, cùng với mô tả hình thái, là các <strong>yếu tố dự báo quan trọng nhất</strong> giúp xác định một khối u là lành tính hay ác tính.
      </p>

      <div class="key-points">
        <strong>Nguyên tắc đánh giá đường bờ trên DBT:</strong>
        Nhũ ảnh cắt lớp 3D (DBT) mang lại khả năng mô tả tính chất đường bờ vượt trội so với nhũ ảnh 2D (DM) nhờ khả năng loại bỏ hiện tượng chồng lấp mô tuyến. Do đó, đường bờ khối u thường nên được <strong>định danh dựa trên các lát cắt DBT</strong> (khi có sẵn) thay vì dựa trên ảnh DM. Ví dụ: Nếu đường bờ của một khối trông có vẻ bị che khuất trên hình ảnh 2D DM hoặc SM nhưng lại rõ nét trên các lát cắt mỏng của DBT, thì đường bờ của khối phải được mô tả là <strong>Bờ rõ nét (Circumscribed)</strong>.
      </div>

      <h3 id="margin-circumscribed">a. Bờ rõ nét / Giới hạn rõ (Circumscribed)</h3>
      <p>
        <strong>Định nghĩa:</strong> Đường bờ rõ nét được phân định sắc nét với ranh giới chuyển tiếp đột ngột giữa tổn thương và mô tuyến xung quanh. Bờ rõ nét thường đi kèm với các tổn thương lành tính nhưng cũng có thể gặp trong một số ung thư xâm nhập.
      </p>
      <div class="pitfalls">
        <strong>Quy tắc phân loại 75% trong BI-RADS®:</strong>
        Một khối có thể biểu hiện nhiều đặc điểm đường bờ trên chu vi của nó. Nếu một phần đường bờ bị che khuất, nhưng có <strong>ít nhất 75% chu vi đường bờ là rõ nét</strong>, khối đó vẫn được xếp loại là Bờ rõ nét (Circumscribed). Tuy nhiên, nếu <strong>bất kỳ phần nào của đường bờ là không rõ nét (indistinct) hoặc tua gai (spiculated)</strong>, khối bắt buộc phải được phân loại theo thành phần có mức độ nghi ngờ cao nhất.
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_09_b1_c1.jpg" alt="Figure 1 – Oval, CIRCUMSCRIBED mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Oval, CIRCUMSCRIBED, equal density mass with coarse calcifications (DM). Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ rõ nét, đồng đậm độ kèm vôi hóa thô (DM). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_09_b1_c2.jpg" alt="Figure 2 – Oval, CIRCUMSCRIBED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Oval, CIRCUMSCRIBED, high density mass (DBT). Pathology: Low grade B-cell Non-Hodgkin's Lymphoma.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ cao (DBT). Giải phẫu bệnh: U lympho không Hodgkin tế bào B độ mô học thấp].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_10_b1_c1.jpg" alt="Figure 3 – Oval, CIRCUMSCRIBED mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Oval, CIRCUMSCRIBED, high density mass (DM). Simple cyst.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ cao (DM). Nang đơn giản].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_10_b1_c2.jpg" alt="Figure 4 – Round, CIRCUMSCRIBED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Round, CIRCUMSCRIBED (arrow), high density mass (SM). Simple cyst.</strong> [Khối hình tròn, bờ rõ nét (mũi tên), đậm độ cao (SM). Nang đơn giản].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_10_b2_c1.jpg" alt="Figure 5 – Oval, CIRCUMSCRIBED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Oval, CIRCUMSCRIBED, high density mass (DBT). Simple cyst.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ cao (DBT). Nang đơn giản].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_10_b2_c2.jpg" alt="Figure 6 – Oval, CIRCUMSCRIBED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Oval, CIRCUMSCRIBED, high density mass (SM). Simple cyst.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ cao (SM). Nang đơn giản].</figcaption>
        </figure>
      </div>

      <h3 id="margin-obscured">b. Bờ bị che khuất (Obscured)</h3>
      <p>
        <strong>Định nghĩa:</strong> Đường bờ bị che khuất là đường bờ bị ẩn giấu bởi mô sợi tuyến (fibroglandular tissue) nằm chồng lấp hoặc tiếp giáp xung quanh. Thuật ngữ này thường được áp dụng khi một phần đường bờ là rõ nét nhưng phần còn lại (> 25%) không thể quan sát thấy được.
      </p>
      <div class="pitfalls">
        <strong>Lưu ý đối chiếu mô mỡ:</strong>
        Theo định nghĩa chuẩn của BI-RADS, <strong>không được dùng thuật ngữ Bờ bị che khuất khi đường bờ của khối tiếp xúc trực tiếp với mô mỡ</strong>. Trong trường hợp đó, đường bờ tiếp giáp mô mỡ phải được nhìn thấy rõ ràng; nếu không rõ, bắt buộc phải dùng thuật ngữ <em>"Bờ không rõ nét" (Indistinct)</em>.
      </div>
      <p>
        Bờ bị che khuất không biểu thị bản chất tổn thương là lành tính hay ác tính, mà chỉ đơn thuần phản ánh rằng hiện tại chưa thể đánh giá trọn vẹn đường bờ trên phim chụp. Việc đánh giá bổ sung trên chụp ép khu trú, nhũ ảnh 3D cắt lớp (DBT) hoặc siêu âm sẽ giúp làm sáng tỏ tính chất đường bờ thực sự.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_11_b1_c1.jpg" alt="Figure 1 – Irregular, OBSCURED, high density mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Irregular, OBSCURED, high density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ bị che khuất, đậm độ cao (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
      </figure>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_12_b1_c1.jpg" alt="Figure 2 – Lobulated, OBSCURED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Lobulated, OBSCURED (arrow), equal density mass (SM). Pathology: Cyst.</strong> [Khối hình đa cung, bờ bị che khuất (mũi tên), đồng đậm độ (SM). Giải phẫu bệnh: Nang].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_12_b2_c1.jpg" alt="Figure 3 – Oval, OBSCURED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Oval, OBSCURED equal density mass (DBT). Pathology: Invasive ductal carcinoma.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (DBT). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_13_b1_c1.jpg" alt="Figure 4 – Oval, OBSCURED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, OBSCURED (arrow delineates obscured portion of margin), high density mass (DBT). Pathology: Cyst.</strong> [Khối hình bầu dục, bờ bị che khuất (mũi tên chỉ phần đường bờ bị che khuất), đậm độ cao (DBT). Giải phẫu bệnh: Nang].</figcaption>
      </figure>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_13_b2_c1.jpg" alt="Figure 5 – Oval, OBSCURED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Oval, OBSCURED high density mass (arrow) (SM). Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ bị che khuất, đậm độ cao (mũi tên) (SM). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_13_b2_c2.jpg" alt="Figure 6 – Oval, OBSCURED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Oval, OBSCURED, equal density mass (arrow) (DBT). Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (mũi tên) (DBT). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
      </div>

      <h3 id="margin-indistinct">c. Bờ không rõ nét (Indistinct)</h3>
      <p>
        <strong>Định nghĩa:</strong> Đường bờ không rõ nét biểu thị tình trạng thiếu sự phân định sắc nét giữa toàn bộ đường bờ, hoặc bất kỳ phần nào của đường bờ, so với mô đệm xung quanh. Việc xuất hiện bờ không rõ nét luôn hàm ý một dấu hiệu nghi ngờ ác tính (suspicious finding), phản ánh khả năng tế bào khối u đang xâm nhập qua vỏ bao vào mô liên kết lân cận.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_14_b1_c1.jpg" alt="Figure 1 – Oval, INDISTINCT mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Oval, INDISTINCT high density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối hình bầu dục, bờ không rõ nét, đậm độ cao (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_14_b1_c2.jpg" alt="Figure 2 – Irregular, INDISTINCT mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Irregular, INDISTINCT, high density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ không rõ nét, đậm độ cao (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_14_b2_c1.jpg" alt="Figure 3 – Irregular, INDISTINCT mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Irregular, INDISTINCT, equal density mass (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ không rõ nét, đồng đậm độ (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_14_b2_c2.jpg" alt="Figure 4 – Round, INDISTINCT mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Round, INDISTINCT, equal density mass (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối hình tròn, bờ không rõ nét, đồng đậm độ (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_15_b1_c1.jpg" alt="Figure 5 – Oval, INDISTINCT mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Oval, INDISTINCT, equal density mass (SM). Pathology: Pseudoangiomatous stromal hyperplasia (PASH).</strong> [Khối hình bầu dục, bờ không rõ nét, đồng đậm độ (SM). Giải phẫu bệnh: Tăng sinh mô đệm giả u mạch (PASH)].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_15_b1_c2.jpg" alt="Figure 6 – Irregular, INDISTINCT mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Irregular, INDISTINCT, high density mass (SM). Pathology: Invasive ductal carcinoma with mucinous features.</strong> [Khối không đều, bờ không rõ nét, đậm độ cao (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập có đặc điểm nhầy].</figcaption>
        </figure>
      </div>

      <h3 id="margin-spiculated">d. Bờ tua gai (Spiculated)</h3>
      <p>
        <strong>Định nghĩa:</strong> Đường bờ tua gai được đặc trưng bởi các đường thẳng, dải co kéo tăng đậm độ tỏa hình nan hoa từ bờ khối u ra các hướng xung quanh. Việc sử dụng mô tả này hàm ý tổn thương có mức độ nghi ngờ ác tính cao nhất trên nhũ ảnh.
      </p>

      <div class="pitfalls">
        <strong>Phân biệt tối quan trọng giữa Khối bờ tua gai và Xáo trộn cấu trúc:</strong>
        Mặc dù xáo trộn cấu trúc (architectural distortion) có thể có hình ảnh nan hoa tỏa ra tương tự như một khối bờ tua gai, nhưng điểm khác biệt cốt lõi là: <strong>Xáo trộn cấu trúc KHÔNG có cấu trúc thể tích choán chỗ 3 chiều ở trung tâm</strong>. Một khi tổn thương có một khối trung tâm rõ rệt đi kèm các đường nan hoa tỏa ra, tổn thương đó <strong>bắt buộc phải được phân loại là Khối có bờ tua gai (Spiculated mass)</strong> và tuyệt đối không được gọi là xáo trộn cấu trúc.
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_16_b1_c1.jpg" alt="Figure 1 – Irregular, SPICULATED mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Irregular, SPICULATED, equal density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đồng đậm độ (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_16_b1_c2.jpg" alt="Figure 2 – Irregular, SPICULATED mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Irregular, SPICULATED, high density mass (DM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đậm độ cao (DM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_17_b1_c1.jpg" alt="Figure 3 – Round, SPICULATED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Round, SPICULATED, high density mass (DBT). Pathology: Invasive ductal carcinoma.</strong> [Khối hình tròn, bờ tua gai, đậm độ cao (DBT). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_17_b1_c2.jpg" alt="Figure 4 – Oval, SPICULATED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, SPICULATED, equal density mass (DBT). Pathology: Invasive ductal carcinoma.</strong> [Khối hình bầu dục, bờ tua gai, đồng đậm độ (DBT). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_17_b2_c1.jpg" alt="Figure 5 – Irregular, SPICULATED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Irregular, SPICULATED, high density mass (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đậm độ cao (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_17_b2_c2.jpg" alt="Figure 6 – Irregular, SPICULATED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Irregular, SPICULATED, equal mass density (SM). Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đồng đậm độ (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_18_b1_c1.jpg" alt="Figure 7A – Irregular, SPICULATED mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 (A) SM.</strong></figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_18_b1_c2.jpg" alt="Figure 7B – Irregular, SPICULATED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 (B) DBT.</strong></figcaption>
        </figure>
      </div>
      <p class="text-xs text-center text-slate-600 italic -mt-2 mb-6">
        <strong>Figure 7 – Irregular, SPICULATED, equal density mass: (A) SM and (B) DBT. Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, đồng đậm độ: (A) SM và (B) DBT. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_18_b2_c1.jpg" alt="Figure 8 – Irregular, SPICULATED mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 8 – Irregular, SPICULATED, high density mass (DBT). Pathology: Fat necrosis.</strong> [Khối không đều, bờ tua gai, đậm độ cao (DBT). Giải phẫu bệnh: Hoại tử mỡ].</figcaption>
      </figure>

      <h2 id="phan-4-dam-do">4. Phân loại Đậm độ khối u (Mass Density)</h2>
      <p>
        Đậm độ phản ánh mức độ cản tia X của một khối u so với mức độ cản tia dự kiến của một thể tích tương đương mô sợi tuyến (fibroglandular tissue) bình thường.
      </p>
      <ul>
        <li>Hầu hết các trường hợp ung thư vú biểu hiện dưới dạng khối đều có đậm độ bằng hoặc cao hơn so với mô sợi tuyến lân cận.</li>
        <li><strong>Nguy cơ ác tính theo đậm độ:</strong> Khả năng ác tính đối với một khối đậm độ cao lên tới <strong>70%</strong>, cao hơn đáng kể so với các khối đồng đậm độ hoặc đậm độ thấp (khoảng <strong>22%</strong>).</li>
        <li>Rất hiếm khi ung thư vú biểu hiện dưới dạng một khối có đậm độ thấp hoàn toàn.</li>
        <li><em>Lưu ý:</em> Đậm độ là một đánh giá mang tính chất chủ quan và là mô tả có giá trị tin cậy thấp nhất khi so sánh với Hình thái và Đường bờ.</li>
      </ul>

      <h3 id="density-fat">a. Chứa mỡ (Fat-Containing)</h3>
      <p>
        <strong>Định nghĩa:</strong> Nhóm này bao gồm các khối chứa hoàn toàn thành phần mỡ (thấu quang) như nang dầu (oil cysts) và u mỡ (lipomas), cũng như các khối có đậm độ hỗn hợp chứa mỡ và mô sợi tuyến như u mô thừa (hamartomas).
      </p>
      <div class="pitfalls">
        <strong>Cạm bẫy tổn thương chứa mỡ trên DBT:</strong>
        Một khối chứa mỡ có <em>đường bờ rõ nét</em> gần như luôn luôn lành tính. Tuy nhiên, cả khối lành tính và ác tính (đặc biệt khi chụp khảo sát trên nhũ ảnh cắt lớp 3D - DBT) đều có thể ghi nhận sự hiện diện của mỡ. Ở các khối u ác tính, phần mô thấu quang đó <strong>chính là các đảo mỡ lành mạnh bị khối ung thư đang phát triển xâm lấn và vùi kẹt lại (entrapped fat)</strong> chứ không phải là mô mỡ thực thụ do tổn thương sinh ra. Do đó: <strong>Không phải tất cả các khối chứa mỡ đều là lành tính!</strong>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_19_b1_c1.jpg" alt="Figure 1 – Oval, circumscribed, FAT-CONTAINING mass (arrows) (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Oval, circumscribed, FAT-CONTAINING mass (arrows) (DM). This mass appears to consist entirely of fat. Pathology: Lipoma.</strong> [Khối hình bầu dục, bờ rõ nét, chứa mỡ (mũi tên) (DM). Khối này dường như chứa hoàn toàn là mỡ. Giải phẫu bệnh: U mỡ].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_19_b1_c2.jpg" alt="Figure 2 – Oval, circumscribed, FAT-CONTAINING mass (arrow) (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Oval, circumscribed, FAT-CONTAINING mass (arrow) (DM). This mass appears to consist entirely of fat. Pathology: Lipoma.</strong> [Khối hình bầu dục, bờ rõ nét, chứa mỡ (mũi tên) (DM). Khối này dường như chứa hoàn toàn là mỡ. Giải phẫu bệnh: U mỡ].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_20_b1_c1.jpg" alt="Figure 3 – Oval, obscured, FAT-CONTAINING mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Oval, obscured, FAT-CONTAINING mass (DBT). Note the fat-fluid level (arrow), indicating that this mass contains fat and non-fatty liquid components, characteristic of a galactocele. Pathology: Galactocele.</strong> [Khối hình bầu dục, bờ bị che khuất, chứa mỡ (DBT). Lưu ý mức mỡ - dịch (mũi tên), cho thấy khối này chứa thành phần mỡ và dịch không phải mỡ, đặc trưng của nang sữa. Giải phẫu bệnh: Nang sữa].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_20_b1_c2.jpg" alt="Figure 4 – Oval, circumscribed, FAT-CONTAINING mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, circumscribed, FAT-CONTAINING mass (DBT). There are both fatty and soft tissue components within this mass, in keeping with a hamartoma. Pathology: Hamartoma.</strong> [Khối hình bầu dục, bờ rõ nét, chứa mỡ (DBT). Có cả thành phần mỡ và mô mềm bên trong khối này, phù hợp với u mô thừa. Giải phẫu bệnh: U mô thừa].</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_20_b2_c1.jpg" alt="Figure 5 – Oval, circumscribed, FAT-CONTAINING mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Oval, circumscribed, FAT-CONTAINING mass (DM). Pathology: Hamartoma.</strong> [Khối hình bầu dục, bờ rõ nét, chứa mỡ (DM). Giải phẫu bệnh: U mô thừa].</figcaption>
      </figure>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_21_b1_c1.jpg" alt="Figure 6 – Oval, obscured, FAT-CONTAINING mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Oval, obscured, FAT-CONTAINING mass (DBT). Pathology: Hamartoma.</strong> [Khối hình bầu dục, bờ bị che khuất, chứa mỡ (DBT). Giải phẫu bệnh: U mô thừa].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_21_b2_c1.jpg" alt="Figure 7 – Irregular, spiculated, FAT-CONTAINING mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 – Irregular, spiculated, FAT-CONTAINING mass (DBT). The fat associated with this mass is entrapped by developing cancer rather than intrinsic to the lesion. Not all fat-containing masses are benign. Pathology: Invasive ductal carcinoma.</strong> [Khối không đều, bờ tua gai, chứa mỡ (DBT). Mỡ liên quan đến khối này bị vùi kẹt bởi ung thư đang phát triển chứ không phải là mô nội tại của tổn thương. Không phải tất cả các khối chứa mỡ đều là lành tính. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
      </div>

      <h3 id="density-low">b. Đậm độ thấp (Low Density)</h3>
      <p>
        <strong>Định nghĩa:</strong> Mức độ cản tia X của khối thấp hơn mức cản tia dự kiến của một thể tích tương đương mô sợi tuyến (fibroglandular tissue) bình thường. Các khối đậm độ thấp thường đại diện cho các tổn thương lành tính mạn tính hoặc nang dịch nhạt màu.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_22_b1_c1.jpg" alt="Figure 1 – Oval, indistinct, LOW DENSITY mass (arrow) (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Oval, indistinct, LOW DENSITY mass (arrow) (SM). Stable, benign.</strong> [Khối hình bầu dục, bờ không rõ nét, đậm độ thấp (mũi tên) (SM). Ổn định, lành tính].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_22_b2_c1.jpg" alt="Figure 2 – Oval, obscured, LOW DENSITY mass (arrow) (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Oval, obscured, LOW DENSITY mass (arrow) (DBT). Pathology: Simple cyst.</strong> [Khối hình bầu dục, bờ bị che khuất, đậm độ thấp (mũi tên) (DBT). Giải phẫu bệnh: Nang đơn giản].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_23_b1_c1.jpg" alt="Figure 3 – Oval, indistinct, LOW DENSITY (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Oval, indistinct, LOW DENSITY (DM). Two adjacent masses (arrows). Stable, benign.</strong> [Khối hình bầu dục, bờ không rõ nét, đậm độ thấp (DM). Hai khối u kế cận nhau (các mũi tên). Ổn định, lành tính].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_23_b2_c1.jpg" alt="Figure 4 – Oval, circumscribed, LOW DENSITY mass (arrow) (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, circumscribed, LOW DENSITY mass (arrow) (DM). Stable, benign.</strong> [Khối hình bầu dục, bờ rõ nét, đậm độ thấp (mũi tên) (DM). Ổn định, lành tính].</figcaption>
        </figure>
      </div>

      <h3 id="density-equal">c. Đồng đậm độ (Equal Density)</h3>
      <p>
        <strong>Định nghĩa:</strong> Mức độ cản tia X của khối tương đương với mức cản tia dự kiến của một thể tích tương đương mô sợi tuyến (fibroglandular tissue) lân cận.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_24_b1_c1.jpg" alt="Figure 1 – Round, circumscribed, EQUAL DENSITY mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Round, circumscribed, EQUAL DENSITY mass (SM). Pathology: Simple cyst.</strong> [Khối hình tròn, bờ rõ nét, đồng đậm độ (SM). Giải phẫu bệnh: Nang đơn giản].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_24_b1_c2.jpg" alt="Figure 2 – Oval, circumscribed, EQUAL DENSITY mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Oval, circumscribed, EQUAL DENSITY mass (SM). Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ rõ nét, đồng đậm độ (SM). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-masses/page_24_b2_c1.jpg" alt="Figure 3 – Round, indistinct, EQUAL DENSITY mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Round, indistinct, EQUAL DENSITY mass (SM). While most of the margin is circumscribed, part is indistinct (arrow); the mass should therefore be characterized as indistinct. Pathology: Fibroadenoma.</strong> [Khối hình tròn, bờ không rõ nét, đồng đậm độ (SM). Mặc dù phần lớn đường bờ là rõ nét, một phần bờ không rõ nét (mũi tên); do đó khối phải được mô tả là bờ không rõ nét. Giải phẫu bệnh: U sợi tuyến].</figcaption>
      </figure>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_25_b1_c1.jpg" alt="Figure 4 – Oval, obscured, EQUAL DENSITY mass (arrow) (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, obscured, EQUAL DENSITY mass (arrow) (SM). Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (mũi tên) (SM). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_25_b2_c1.jpg" alt="Figure 5 – Oval, obscured, EQUAL DENSITY mass (arrowhead)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Oval, obscured, EQUAL DENSITY mass (arrowhead). Also shown: oval, circumscribed, high density mass (arrow) (DM). Pathology: Simple cysts.</strong> [Khối hình bầu dục, bờ bị che khuất, đồng đậm độ (đầu mũi tên). Đồng thời cũng thấy: khối hình bầu dục, bờ rõ nét, đậm độ cao (mũi tên) (DM). Giải phẫu bệnh: Các nang đơn giản].</figcaption>
        </figure>
      </div>

      <h3 id="density-high">d. Đậm độ cao (High Density)</h3>
      <p>
        <strong>Định nghĩa:</strong> Mức độ cản tia X của khối lớn hơn mức cản tia dự kiến của một thể tích tương đương mô sợi tuyến (fibroglandular tissue) bình thường. Khối đậm độ cao luôn là một dấu hiệu cảnh báo nguy cơ ác tính đáng kể, với tỷ lệ ác tính đạt tới <strong>70%</strong>.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_26_b1_c1.jpg" alt="Figure 1 – Round, indistinct, HIGH DENSITY mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Round, indistinct, HIGH DENSITY mass (DM). The triangular marker indicates that this mass was palpable. Pathology: Benign reactive lymph node.</strong> [Khối hình tròn, bờ không rõ nét, đậm độ cao (DM). Dấu chỉ điểm hình tam giác cho thấy khối này sờ thấy được trên lâm sàng. Giải phẫu bệnh: Hạch phản ứng lành tính].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_26_b2_c1.jpg" alt="Figure 2 – Round, circumscribed, HIGH DENSITY mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Round, circumscribed, HIGH DENSITY mass (DBT). Despite its small size, it is denser than adjacent fibroglandular tissue. Stable, benign.</strong> [Khối hình tròn, bờ rõ nét, đậm độ cao (DBT). Mặc dù có kích thước nhỏ, khối này đậm hơn mô sợi tuyến kế cận. Ổn định, lành tính].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_27_b1_c1.jpg" alt="Figure 3 – Oval, indistinct, HIGH DENSITY mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Oval, indistinct, HIGH DENSITY mass (DBT). Pathology: Invasive ductal carcinoma.</strong> [Khối hình bầu dục, bờ không rõ nét, đậm độ cao (DBT). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_27_b1_c2.jpg" alt="Figure 4 – Oval, indistinct, HIGH DENSITY mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Oval, indistinct, HIGH DENSITY mass (SM). Note: In the BI-RADS 5th Edition, this mass would have been described as microlobulated. Pathology: Fibroadenoma.</strong> [Khối hình bầu dục, bờ không rõ nét, đậm độ cao (SM). Lưu ý: Trong BI-RADS ấn bản lần 5, khối này từng được mô tả là đa cung nhỏ (microlobulated). Giải phẫu bệnh: U sợi tuyến].</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-masses/page_27_b2_c1.jpg" alt="Figure 5 – Irregular, indistinct, HIGH DENSITY mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Irregular, indistinct, HIGH DENSITY mass (DBT). Note: Even if the majority of a mass margin is circumscribed, if any portion is indistinct (arrow), the margin should be classified as indistinct. Pathology: Invasive lobular carcinoma.</strong> [Khối không đều, bờ không rõ nét, đậm độ cao (DBT). Lưu ý: Ngay cả khi phần lớn đường bờ của khối là rõ nét, nếu có bất kỳ phần nào không rõ nét (mũi tên), đường bờ phải được phân loại là không rõ nét. Giải phẫu bệnh: Ung thư biểu mô tiểu thùy xâm nhập].</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-masses/page_27_b2_c2.jpg" alt="Figure 6 – Round, indistinct, HIGH DENSITY mass (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Round, indistinct, HIGH DENSITY mass (DBT). Pathology: Invasive lobular carcinoma.</strong> [Khối hình tròn, bờ không rõ nét, đậm độ cao (DBT). Giải phẫu bệnh: Ung thư biểu mô tiểu thùy xâm nhập].</figcaption>
        </figure>
      </div>

      <h2 id="phan-5-dbt">5. Vai trò then chốt của Nhũ ảnh 3D cắt lớp (DBT) trong đánh giá khối</h2>
      <p>
        Sự ra đời và ứng dụng rộng rãi của nhũ ảnh 3D cắt lớp (DBT) đã tạo ra một cuộc cách mạng trong việc tiếp cận và định danh khối u tuyến vú:
      </p>
      <ul>
        <li><strong>Khắc phục xảo ảnh chồng lấp (Tissue Summation):</strong> Trên phim 2D thông thường, các dải mô sợi tuyến bình thường ở các độ sâu khác nhau có thể chồng lên nhau tạo cảm giác như một khối u giả hoặc che khuất bờ của một khối u thật. DBT cắt lát mỏng 1mm giúp bóc tách từng lớp mô, làm rõ đường bờ thực sự.</li>
        <li><strong>Định danh bờ rõ nét chuẩn xác:</strong> Một khối u có bờ bị che khuất trên 2D (DM/SM) nhưng nếu quan sát thấy đường bờ sắc nét trên các lát cắt DBT thì được phép phân loại ngay là <strong>Bờ rõ nét (Circumscribed)</strong> mà không cần thêm các thế chụp ép bổ sung.</li>
        <li><strong>Độ nhạy phát hiện u trong mô vú đặc:</strong> Khối u đậm độ cao hoặc đồng đậm độ nằm ẩn trong nền mô vú đặc (dense breasts) thường bị bỏ sót trên 2D nhưng sẽ lộ diện rõ rệt trên từng lát cắt của DBT.</li>
      </ul>

      <h2 id="phan-6-bang-so-sanh">6. Bảng tổng hợp đối chiếu & Nguy cơ ác tính</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Bảng tổng hợp đối chiếu các đặc điểm khối & Nguy cơ ác tính (Ban biên tập đúc kết):</h4>
        <div class="overflow-x-auto my-3">
        <table>
          <thead>
            <tr>
              <th>Đặc Điểm Khối U</th>
              <th>Phân Loại Từ Vựng BI-RADS® v2025</th>
              <th>Mức Độ Dự Báo Ác Tính (PPV)</th>
              <th>Định Hướng Chẩn Đoán & Xử Trí</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hình thái (Shape)</strong></td>
              <td>
                • Bầu dục (Oval)<br/>
                • Đa cung (Lobulated - <em>Mới</em>)<br/>
                • Tròn (Round)<br/>
                • Không đều (Irregular)
              </td>
              <td>
                • Oval: Rất thấp (&lt; 2%)<br/>
                • Đa cung (Lobulated): Thấp - Trung bình<br/>
                • Round: Thay đổi (Lành tính hoặc Ác tính)<br/>
                • Irregular: <strong>Rất cao (&gt; 50%)</strong>
              </td>
              <td>
                Khối hình không đều là chỉ định sinh thiết mô học hàng đầu. Khối bầu dục hoặc đa cung bờ rõ có thể theo dõi BI-RADS 3 hoặc xếp BI-RADS 2 nếu là nang/u sợi tuyến kinh điển.
              </td>
            </tr>
            <tr>
              <td><strong>Đường bờ (Margin)</strong></td>
              <td>
                • Rõ nét (Circumscribed)<br/>
                • Bị che khuất (Obscured)<br/>
                • Không rõ nét (Indistinct)<br/>
                • Tua gai (Spiculated)
              </td>
              <td>
                • Circumscribed: Rất thấp (&lt; 2%)<br/>
                • Obscured: Chưa thể xác định<br/>
                • Indistinct: Trung bình - Cao (~20-50%)<br/>
                • Spiculated: <strong>Cực kỳ cao (&gt; 80%)</strong>
              </td>
              <td>
                Bờ tua gai là tiêu chuẩn vàng chỉ điểm ung thư xâm nhập. Nếu có &ge; 75% chu vi rõ nét và phần còn lại bị che khuất bởi mô sợi tuyến, vẫn xếp loại Bờ rõ nét. Bất kỳ phần bờ nào có tua gai/không rõ đều phải xếp loại theo bờ nghi ngờ nhất.
              </td>
            </tr>
            <tr>
              <td><strong>Đậm độ (Density)</strong></td>
              <td>
                • Chứa mỡ (Fat-containing)<br/>
                • Đậm độ thấp (Low density)<br/>
                • Đồng đậm độ (Equal density)<br/>
                • Đậm độ cao (High density)
              </td>
              <td>
                • Fat-containing: Lành tính (trừ mỡ vùi kẹt)<br/>
                • Low density: Thấp (~22%)<br/>
                • Equal density: Thấp (~22%)<br/>
                • High density: <strong>Cao (đạt 70%)</strong>
              </td>
              <td>
                Khối đậm độ cao kết hợp hình không đều hoặc bờ không rõ nét có tỷ lệ ác tính vượt trội. Khối chứa mỡ có bờ tua gai cần cảnh giác mỡ bị ung thư vùi kẹt (entrapped fat).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="phan-7-keypoints-pitfalls">7. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Diagnostic Pitfalls)</h2>

      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">📌 Key Points (Điểm cốt lõi cần nhớ - Ban biên tập đúc kết):</h4>
        <ul>
          <li><strong>Định nghĩa khối 3D trên DBT:</strong> Khối có thể được xác lập chỉ trên một hướng chụp duy nhất của DBT nếu hướng kia bị mô sợi tuyến che khuất hoặc khối nằm ngoài trường chụp.</li>
          <li><strong>Bổ sung hình thái Lobulated:</strong> BI-RADS 2025 chính thức công nhận hình thái Đa cung (Lobulated) để phân biệt các tổn thương có bờ gợn sóng có mức độ nghi ngờ nhỉnh hơn so với hình bầu dục.</li>
          <li><strong>Xóa bỏ thuật ngữ Microlobulated ở đường bờ:</strong> Khối có đa cung nhỏ nay được quy về bờ không rõ nét (Indistinct) hoặc hình thái đa cung (Lobulated) tùy theo tính chất sắc nét của ranh giới.</li>
          <li><strong>Quy tắc ưu tiên mức độ nghi ngờ cao nhất:</strong> Nếu một khối có bờ rõ nét ở đa số chu vi nhưng có một điểm nghi ngờ bờ tua gai hoặc bờ không rõ, tổn thương bắt buộc phải được đánh giá dựa trên thành phần tua gai/không rõ đó.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-2 flex items-center gap-2">⚠️ Diagnostic Pitfalls (Cạm bẫy lâm sàng cần tránh - Ban biên tập lưu ý):</h4>
        <ul>
          <li><strong>Nhầm lẫn giữa Khối bờ tua gai và Xáo trộn cấu trúc:</strong> Xáo trộn cấu trúc không có khối 3D choán chỗ trung tâm. Khi nhìn thấy khối trung tâm kèm các đường nan hoa, bắt buộc phải chẩn đoán là Khối có bờ tua gai (Spiculated mass).</li>
          <li><strong>Chủ quan với khối chứa mỡ:</strong> Dù khối chứa mỡ bờ rõ là lành tính (như lipoma, hamartoma), nhưng ung thư xâm nhập phát triển xuyên qua mô mỡ có thể vùi kẹt các đám mỡ thấu quang bên trong khối u trên phim DBT. Do đó nếu khối chứa mỡ nhưng có bờ tua gai hoặc không đều, sinh thiết là bắt buộc.</li>
          <li><strong>Nhầm lẫn bờ bị che khuất và bờ không rõ nét:</strong> Không bao giờ được dùng từ "bờ bị che khuất" nếu bờ tiếp xúc với mô mỡ. Bờ tiếp xúc mô mỡ nếu mờ thì đó là bờ không rõ nét (Indistinct) và là chỉ dấu nghi ngờ ác tính.</li>
          <li><strong>Đánh giá thấp ung thư dạng tròn hoặc bầu dục bờ rõ:</strong> Một số ung thư biểu mô tiến triển nhanh, thể tam âm (Triple-negative), thể nhầy hoặc u diệp thể có thể biểu hiện dưới dạng khối hình tròn hoặc bầu dục có vỏ bao giả hoặc bờ rõ nét. Cần kết hợp siêu âm doppler và sinh thiết khi có nghi ngờ lâm sàng.</li>
        </ul>
      </div>
`,
    views: 980,
    readTime: "18 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 20-46)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "DBT", "Khối u tuyến vú", "Masses", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
  },

  {
    id: "post-birads-2025-arch-distortion-asymmetry",
    title: "Cẩm nang ACR BI-RADS® 2025: Xáo trộn cấu trúc (Architectural Distortion) và Các dạng bất đối xứng tuyến vú (Asymmetries)",
    slug: "birads-2025-xao-tron-cau-truc-va-bat-doi-xung-tuyen-vu",
    date: "29 Tháng 10, 2026",
    updatedDate: "29 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "X-quang", "Nhũ ảnh", "BI-RADS 2025", "Ung thư vú"],
    categorySlugs: ["vu", "x-quang", "nhu-anh", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025/fig1_arch_distortion_dbt_idc.jpg",
    excerpt: "Cập nhật chuyên sâu từ Cẩm nang ACR BI-RADS® v2025 về hai dấu hiệu nhũ ảnh then chốt: Xáo trộn cấu trúc (Architectural Distortion) và Các dạng bất đối xứng (Asymmetries). Phân tích vai trò của nhũ ảnh 3D cắt lớp (DBT), nhũ ảnh tổng hợp (SM), sự thay đổi quan trọng trong bảng từ vựng (loại bỏ thuật ngữ Developing Asymmetry) và chiến lược chỉ định sinh thiết chuẩn xác.",
    content: [
      "Xáo trộn cấu trúc (Architectural Distortion) được đặc trưng bởi các đường thẳng mỏng, tăng đậm độ hoặc thấu quang tỏa hình nan hoa từ một điểm, hoặc co rút khu trú dọc bờ nhu mô vú mà không thấy khối u rõ ràng.",
      "Theo ACR BI-RADS® v2025, xáo trộn cấu trúc phát hiện trên nhũ ảnh 3D (DBT) có giá trị dự báo dương tính (PPV) ác tính vừa phải, và cần được chỉ định sinh thiết mô học ngay cả khi siêu âm không tìm thấy tổn thương tương ứng.",
      "Đối với các dạng bất đối xứng (Asymmetries), BI-RADS® v2025 đã chính thức loại bỏ thuật ngữ 'Developing Asymmetry' khỏi bảng danh mục mô tả, đồng thời đưa ra các tiêu chuẩn rõ ràng để tiếp cận Bất đối xứng toàn thể (Global Asymmetry) và Bất đối xứng một bình diện (Asymmetry)."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Xáo trộn cấu trúc & Bất đối xứng
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Bài giảng được biên dịch nguyên văn đầy đủ từ Cẩm nang <em>ACR BI-RADS® v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ, tích hợp 21 hình ảnh minh họa thực tế về xáo trộn cấu trúc (Architectural Distortion) và các dạng bất đối xứng (Asymmetries). Nội dung dịch nguyên văn từ bài giảng hiển thị chữ đen trên nền trắng tiêu chuẩn; các phần tổng hợp lưu đồ, điểm cốt lõi và cạm bẫy lâm sàng được đóng khung màu riêng biệt để dễ dàng nhận diện và kiểm chứng.
        </p>
      </div>

      <h2 id="phan-1-tong-quan">1. Giới thiệu tổng quan & Ý nghĩa lâm sàng</h2>
      <p>
        Trong chẩn đoán hình ảnh tuyến vú, bên cạnh các khối u dạng nốt (masses) và vi vôi hóa nghi ngờ (calcifications), <strong>Xáo trộn cấu trúc (Architectural Distortion)</strong> và <strong>Các dạng bất đối xứng (Asymmetries)</strong> là hai nhóm dấu hiệu nhũ ảnh cực kỳ quan trọng nhưng cũng thường mang lại nhiều thách thức phân tích nhất cho các bác sĩ chẩn đoán hình ảnh.
      </p>
      <p>
        Ấn bản cập nhật mới nhất <strong>ACR BI-RADS® v2025 Manual</strong> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology) đã hoàn thiện và tinh chỉnh sâu sắc các định nghĩa, quy trình đối chiếu đa phương tiện (đặc biệt là nhũ ảnh 3D cắt lớp - <em>Digital Breast Tomosynthesis - DBT</em> và nhũ ảnh tổng hợp - <em>Synthesized Mammography - SM</em>), đồng thời cập nhật những thay đổi mang tính hệ thống trong bảng từ vựng mô tả tổn thương tuyến vú.
      </p>

      <div class="key-points">
        <strong>Điểm đổi mới then chốt trong BI-RADS® v2025:</strong>
        Thuật ngữ mô tả <em>"Bất đối xứng tiến triển" (Developing Asymmetry)</em> đã chính thức được <strong>loại bỏ</strong> khỏi bảng từ vựng mô tả của BI-RADS, nhằm thống nhất nguyên tắc: không lồng ghép yếu tố biến đổi theo thời gian vào thuật ngữ định danh hình thái tổn thương ban đầu. Tuy nhiên, ý nghĩa cảnh giác ác tính của một bất đối xứng khu trú đang to lên hoặc tăng đậm độ vẫn được nhấn mạnh ở mức cao nhất.
      </div>

      <h2 id="phan-2-xao-tron-cau-truc">2. Xáo trộn cấu trúc (Architectural Distortion)</h2>
      <p>
        <strong>Định nghĩa:</strong> Xáo trộn cấu trúc được đặc trưng bởi các đường thẳng, mảnh, tăng đậm độ và/hoặc thấu quang tỏa hình nan hoa từ một điểm (radiating from a point), và/hoặc co rút khu trú (focal retraction), kéo thẳng bất thường dọc theo đường bờ của nhu mô tuyến vú mà <strong>không quan sát thấy khối u rõ rệt</strong> kèm theo.
      </p>
      <ul>
        <li><strong>Hình thái biểu hiện:</strong> Xáo trộn cấu trúc có thể là tổn thương nguyên phát độc lập (primary finding), hoặc là dấu hiệu thứ phát đi kèm với một vùng bất đối xứng, bất đối xứng khu trú hoặc vôi hóa.</li>
        <li><strong>Ưu thế vượt trội của DBT và SM:</strong> Xáo trộn cấu trúc thường hiển thị rõ ràng, dễ nhận biết hơn hẳn trên nhũ ảnh 3D cắt lớp (DBT) hoặc nhũ ảnh tổng hợp (SM) so với nhũ ảnh kỹ thuật số 2D thông thường (DM). Tổn thương có thể xuất hiện rất kín đáo, đôi khi chỉ quan sát thấy được trên vài lát cắt DBT mỏng hoặc duy nhất trên một hướng chụp.</li>
      </ul>

      <h3>Đánh giá nguy cơ ác tính & Chỉ định sinh thiết</h3>
      <p>
        Mặc dù xáo trộn cấu trúc được phát hiện với tần suất cao hơn đáng kể nhờ công nghệ DBT so với DM, nhưng <strong>giá trị dự báo dương tính (PPV) trên DBT thấp hơn so với DM</strong> (do DBT phát hiện thêm nhiều tổn thương lành tính như sẹo xơ, thay đổi sau mổ) [27–29]. Dù vậy, các bằng chứng y học chứng minh rằng: <em>Xáo trộn cấu trúc chỉ quan sát thấy được trên DBT vẫn duy trì mức độ dự báo ác tính trung bình (moderately predictive of malignancy, ~10% – 30%)</em> [28–30].
      </p>

      <div class="key-points">
        <strong>Nguyên tắc xử trí vàng:</strong>
        Khi không có tiền sử chấn thương hoặc phẫu thuật vú trước đó, việc <strong>khuyến cáo chẩn đoán mô học (sinh thiết có định vị nhũ ảnh/DBT) là hoàn toàn phù hợp và bắt buộc</strong>, ngay cả khi khảo sát siêu âm đối chiếu không tìm thấy tổn thương tương ứng (no ultrasound correlate).
      </div>

      <h2 id="phan-3-cac-ca-xao-tron-cau-truc">3. Ca bệnh minh họa: Xáo trộn cấu trúc (Figure 1 – Figure 7)</h2>

      <figure>
        <img src="/posts/birads-v2025/fig1_arch_distortion_dbt_idc.jpg" alt="Figure 1 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 1 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig2_arch_distortion_sclerosing_adenosis.jpg" alt="Figure 2 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 2 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Giải phẫu bệnh: Bệnh tuyến xơ cứng (Sclerosing adenosis).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig3_arch_distortion_idc.jpg" alt="Figure 3 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 3 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig4_arch_distortion_dense_tissue.jpg" alt="Figure 4 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 4 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Một xáo trộn cấu trúc kín đáo được thể hiện bên trong mô rất đặc (mũi tên), cho thấy hiệu quả của DBT trong việc phát hiện chúng. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig5_arch_distortion_sm_idc.jpg" alt="Figure 5 – ARCHITECTURAL DISTORTION (arrow) (SM)" />
        <figcaption><strong>Figure 5 – XÁO TRỘN CẤU TRÚC (mũi tên) (SM).</strong> Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig6_arch_distortion_postsurgical.jpg" alt="Figure 6 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 6 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Giải phẫu bệnh: Thay đổi sau phẫu thuật (Postsurgical changes).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig7_arch_distortion_radial_scar.jpg" alt="Figure 7 – ARCHITECTURAL DISTORTION (DBT)" />
        <figcaption><strong>Figure 7 – XÁO TRỘN CẤU TRÚC (DBT).</strong> Mặc dù hình thái có vẻ nghi ngờ, việc lấy mẫu qua da kỹ lưỡng và đối chiếu X-quang – giải phẫu bệnh cẩn thận đã cho phép xác nhận bản chất lành tính của nó. Giải phẫu bệnh: Sẹo hình sao (Radial scar).</figcaption>
      </figure>

      <h2 id="phan-4-tong-quan-bat-doi-xung">4. Các dạng bất đối xứng (Asymmetries) & Điểm mới BI-RADS® v2025</h2>
      <p>
        <strong>Định nghĩa cốt lõi:</strong> Các dạng bất đối xứng là những vùng mô khu trú ở một bên vú, được phát hiện do <strong>không có vùng mô tương ứng ở vị trí đối xứng </strong> tại vú đối bên.
      </p>
      <ul>
        <li><strong>Đặc điểm nhận diện:</strong> Thường có bờ lõm (concave contours) và bên trong thường có mỡ xen kẽ (interspersed with fat).</li>
        <li><strong>Tiêu chuẩn phân biệt với Khối u (Mass):</strong> Bất đối xứng <em>không thỏa mãn định nghĩa của một khối u</em> (khối u bắt buộc phải có một trung tâm cản quang đậm đặc và đường bờ ít nhất phải có một phần cong lồi ra ngoài).</li>
      </ul>

      <p>Hệ thống ACR BI-RADS® phân chia bất đối xứng thành 3 phân loại chính:</p>
      <ol>
        <li><strong>Bất đối xứng toàn thể (Global Asymmetry)</strong></li>
        <li><strong>Bất đối xứng (Asymmetry)</strong></li>
        <li><strong>Bất đối xứng khu trú (Focal Asymmetry)</strong></li>
      </ol>

      <h2 id="phan-5-bat-doi-xung-toan-the">5. Bất đối xứng toàn thể (Global Asymmetry) & Ca minh họa</h2>
      <p>
        <strong>Định nghĩa:</strong> Bất đối xứng toàn thể là vùng mô tuyến vú lan rộng trên một phần đáng kể của tuyến vú (<strong>ít nhất chiếm một góc phần tư - ≥ 1 quadrant</strong>) và không đối xứng với vùng tương ứng ở vú đối bên.
      </p>
      <p>
        Tổn thương này <em>không đi kèm khối u, không có xáo trộn cấu trúc và không có vi vôi hóa nghi ngờ</em>. Bất đối xứng toàn thể thường đại diện cho sự phân bố bình thường nhưng không đối xứng của mô sợi tuyến (fibroglandular breast tissue), thường được mô tả lần đầu tiên trên phim nhũ ảnh nền (baseline mammogram).
      </p>

      <div class="pitfalls">
        <strong>Cạm bẫy chẩn đoán (Pitfall):</strong>
        Khi bất đối xứng toàn thể <em>mới xuất hiện, đang to lên theo thời gian hoặc đi kèm triệu chứng lâm sàng</em> (như sờ thấy mảng cứng bất thường, dày da, co rút núm vú), <strong>tuyệt đối không được xem là lành tính</strong>! Một số ung thư biểu mô tuyến vú xâm nhập diện rộng (như ung thư biểu mô tiểu thùy xâm nhập - ILC hoặc ung thư dạng viêm) có thể biểu hiện dưới dạng một vùng mô bất đối xứng toàn thể khổng lồ.
      </div>

      <figure>
        <img src="/posts/birads-v2025/fig8_global_asymmetry_benign.jpg" alt="Figure 1 – GLOBAL ASYMMETRY (A) MLO and (B) CC (SM)" />
        <figcaption><strong>Figure 1 – BẤT ĐỐI XỨNG TOÀN THỂ (A) MLO và (B) CC (SM).</strong> Lành tính - ổn định qua nhiều năm.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig9_global_asymmetry_locally_advanced_idc.jpg" alt="Figure 2 – GLOBAL ASYMMETRY - left breast (DM)" />
        <figcaption><strong>Figure 2 – BẤT ĐỐI XỨNG TOÀN THỂ - vú trái (DM).</strong> Lưu ý dày da vú trái. Dấu hiệu này sờ thấy được (xem điểm đánh dấu da hình tam giác). Mặc dù hầu hết bất đối xứng toàn thể là lành tính và do phát triển, chúng nên được tiếp cận một cách thận trọng nếu liên quan đến các dấu hiệu lâm sàng hoặc bất kỳ dấu hiệu hình ảnh nghi ngờ nào. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập tiến triển tại chỗ (Locally advanced invasive ductal carcinoma).</figcaption>
      </figure>

      <h2 id="phan-6-bat-doi-xung-mot-binh-dien">6. Bất đối xứng (Asymmetry) & Ca minh họa</h2>
      <p>
        <strong>Định nghĩa:</strong> Thuật ngữ <em>Bất đối xứng (Asymmetry đơn thuần)</em> được định nghĩa chính xác là vùng mô không có phần đối xứng ở vú bên kia và <strong>chỉ nhìn thấy được trên DUY NHẤT MỘT bình diện nhũ ảnh</strong> (thường chỉ thấy trên thế CC hoặc chỉ thấy trên thế MLO).
      </p>

      <h3>Chiến lược xử trí & Ứng dụng DBT:</h3>
      <ul>
        <li><strong>Xác định xảo ảnh chồng hình:</strong> Phần lớn bất đối xứng một bình diện là do xảo ảnh cộng dồn/chồng lấp của các cấu trúc tuyến vú bình thường ở các lớp cắt khác nhau (summation artifact). Nhũ ảnh 3D (DBT) là công cụ lý tưởng giúp phân tách từng lớp mô, cho phép bác sĩ khẳng định chắc chắn tổn thương chỉ do chồng hình và không cần triệu tập bệnh nhân làm thêm xét nghiệm.</li>
        <li><strong>Dấu hiệu cảnh báo tổn thương thực thể:</strong> Nếu tổn thương nghi vấn tiếp tục nhìn thấy liên tục trên <em>nhiều lát cắt DBT kế tiếp nhau</em> (chứng tỏ tổn thương có thể tích thực sự trong không gian 3 chiều), bệnh nhân <strong>bắt buộc phải được triệu tập (recall)</strong> để chụp ép khu trú hoặc siêu âm kiểm tra.</li>
        <li><strong>Biến đổi sau chụp chẩn đoán:</strong> Trên các phim chụp chẩn đoán bổ sung (spot compression view), một bất đối xứng một bình diện nếu được xác nhận là tổn thương thực sự có thể bộc lộ bản chất thành một <em>Khối u (Mass)</em> hoặc một <em>Bất đối xứng khu trú (Focal Asymmetry)</em>.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025/fig10_asymmetry_cc_view_stable.jpg" alt="Figure 1 – ASYMMETRY (A) MLO and (B) CC (SM)" />
        <figcaption><strong>Figure 1 – BẤT ĐỐI XỨNG (A) MLO và (B) CC (SM).</strong> Mô chỉ nhìn thấy trên thế CC. Không thấy mô tương ứng ở vú đối bên. Ổn định qua nhiều năm, lành tính.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig11_asymmetry_summation_artifact.jpg" alt="Figure 2 – ASYMMETRY (DM)" />
        <figcaption><strong>Figure 2 – BẤT ĐỐI XỨNG (DM).</strong> Lưu ý vùng mô đặc ở phía ngoài vú phải chỉ thấy trên thế CC (hình bên phải). Được cho là biểu hiện của xảo ảnh chồng hình (summation artifact). Không còn thấy bất đối xứng ở lần khám tầm soát tiếp theo sau 1 năm.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig12_asymmetry_triangular_superimposed.jpg" alt="Figure 3 – ASYMMETRY (SM)" />
        <figcaption><strong>Figure 3 – BẤT ĐỐI XỨNG (SM).</strong> Vùng mô hình tam giác này (mũi tên), mặc dù rõ nét, không đáp ứng các tiêu chuẩn của một khối (nó chỉ được nhìn thấy trên một bình diện, có bờ lõm và mỡ xen kẽ). Không có dấu hiệu tương ứng ở vú đối bên. Do đó, nó được xếp loại là bất đối xứng. Đánh giá chẩn đoán xác nhận rằng nó đại diện cho mô chồng lấp.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig13_asymmetry_pash.jpg" alt="Figure 4 – ASYMMETRY (SM)" />
        <figcaption><strong>Figure 4 – BẤT ĐỐI XỨNG (SM).</strong> Giải phẫu bệnh: PASH.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig14_asymmetry_dm_dbt_persisting_idc.jpg" alt="Figure 5 – ASYMMETRY (A) DM and (B) DBT slice" />
        <figcaption><strong>Figure 5 – BẤT ĐỐI XỨNG (A) DM và (B) lát cắt DBT.</strong> Không có dấu hiệu tương ứng trên các thế chụp tầm soát khác, vì vậy dấu hiệu này được xếp loại là bất đối xứng. Tuy nhiên, do đậm độ của tổn thương và sự tồn tại dai dẳng của nó trong các khảo sát chẩn đoán tiếp theo, sinh thiết đã được khuyến cáo. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <h2 id="phan-7-bang-so-sanh">7. Bảng tổng hợp so sánh & Lưu đồ xử trí</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Bảng tổng hợp so sánh các tổn thương & Lưu đồ xử trí (Ban biên tập đúc kết):</h4>
        <div class="overflow-x-auto my-3">
        <table>
          <thead>
            <tr>
              <th>Đặc Điểm Nhũ Ảnh</th>
              <th>Xáo Trộn Cấu Trúc (Architectural Distortion)</th>
              <th>Bất Đối Xứng Toàn Thể (Global Asymmetry)</th>
              <th>Bất Đối Xứng (Asymmetry)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Định nghĩa hình thái</strong></td>
              <td>Đường thẳng mảnh tỏa nan hoa từ một tâm, co kéo đường bờ nhu mô vú, không thấy khối u rõ.</td>
              <td>Mô tuyến lan rộng ≥ 1 góc phần tư vú, bất đối xứng so với bên đối diện, không kèm khối hay vôi hóa.</td>
              <td>Vùng mô chỉ nhìn thấy trên <strong>duy nhất một bình diện</strong> chiếu nhũ ảnh (CC hoặc MLO).</td>
            </tr>
            <tr>
              <td><strong>Nguyên nhân thường gặp</strong></td>
              <td>Ung thư biểu mô xâm nhập (IDC/ILC), Sẹo hình sao (Radial scar), Sẹo mổ cũ, Bệnh tuyến xơ cứng.</td>
              <td>Phân bố bình thường nhưng không đối xứng của mô sợi tuyến (fibroglandular tissue). Hiếm gặp hơn: Ung thư biểu mô xâm nhập lan tỏa.</td>
              <td>Xảo ảnh chồng mô (Summation artifact, chiếm đa số), Khối u hoặc Bất đối xứng khu trú bị che khuất.</td>
            </tr>
            <tr>
              <td><strong>Vai trò của DBT</strong></td>
              <td>Độ nhạy phát hiện vượt trội so với DM; khử nhiễu chồng ảnh; bộc lộ tổn thương trong mô vú đặc.</td>
              <td>Đánh giá cấu trúc bên trong xem có kèm xáo trộn cấu trúc kín đáo hoặc khối u ẩn hay không.</td>
              <td>Xác định nhanh xảo ảnh chồng hình hoặc khẳng định tổn thương thực sự qua nhiều lát cắt liên tiếp.</td>
            </tr>
            <tr>
              <td><strong>Khuyến cáo xử trí</strong></td>
              <td><strong>Chỉ định sinh thiết mô học</strong> (kể cả khi siêu âm âm tính), trừ khi có tiền sử mổ tương ứng.</td>
              <td>Nếu ổn định trên phim cũ: Xếp loại BI-RADS 2. Nếu mới xuất hiện hoặc kèm triệu chứng lâm sàng: Chụp chẩn đoán + Siêu âm.</td>
              <td>Nếu DBT khẳng định chồng hình: BI-RADS 1/2. Nếu tổn thương nghi vấn tồn tại: Triệu tập chụp chẩn đoán (Spot compression) + Siêu âm.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="phan-8-key-points">8. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Pitfalls)</h2>
      
      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">📌 Key Points (Điểm cốt lõi - Ban biên tập đúc kết):</h4>
        <ul>
          <li>Xáo trộn cấu trúc trên DBT có PPV thấp hơn DM nhưng vẫn đạt mức dự báo ác tính trung bình (10–30%) và bắt buộc phải sinh thiết mô học nếu không có sẹo mổ cũ.</li>
          <li>Đừng bao giờ từ bỏ sinh thiết một xáo trộn cấu trúc chỉ vì siêu âm tuyến vú trả về kết quả âm tính (no ultrasound correlate). Cần chuyển sang sinh thiết dưới hướng dẫn của nhũ ảnh hoặc DBT (stereotactic/tomosynthesis-guided biopsy).</li>
          <li>BI-RADS® v2025 đã xóa bỏ thuật ngữ "Developing Asymmetry" để chuẩn hóa phân loại hình thái. Bất kỳ bất đối xứng khu trú nào to lên hoặc tăng đậm độ đều là chỉ dấu nguy cơ cao cần chụp chẩn đoán toàn diện.</li>
          <li>Nhũ ảnh 3D (DBT) là công cụ then chốt giúp phân biệt tổn thương thực thể với các cấu trúc giả xáo trộn cấu trúc (pseudo-distortion) do chồng lấp mô.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-2 flex items-center gap-2">⚠️ Diagnostic Pitfalls (Cạm bẫy lâm sàng - Ban biên tập lưu ý):</h4>
        <ul>
          <li><strong>Giả xáo trộn cấu trúc (Pseudo-distortion):</strong> Do các cấu trúc dạng đường thẳng ở các độ sâu khác nhau vô tình chồng lấp tạo hiệu ứng giao nhau trên phim 2D. Khắc phục: Lăn chuột kiểm tra từng lát cắt mỏng DBT để tách lớp.</li>
          <li><strong>Bỏ sót ung thư biểu mô tiểu thùy (ILC):</strong> ILC thường không tạo thành khối rõ rệt mà chỉ biểu hiện dưới dạng co kéo cấu trúc kín đáo hoặc bất đối xứng toàn thể kèm dày da.</li>
          <li><strong>Xem thường bất đối xứng một bình diện:</strong> Dù đa số là lành tính do chồng ảnh, nhưng nếu tổn thương xuất hiện liên tục trên nhiều lát cắt DBT cùng vị trí, đó là tổn thương có thể tích thực sự và cần triệu tập làm chẩn đoán chuyên sâu ngay lập tức.</li>
        </ul>
      </div>
    
    
    `,
    views: 1250,
    readTime: "15 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 107-116)",
    tags: ["BI-RADS 2025","Nhũ ảnh","DBT","Xáo trộn cấu trúc","Bất đối xứng","Ung thư vú","Chẩn đoán hình ảnh vú"]
  },
  {
    id: "birads-2025-cac-dang-voi-hoa-tuyen-vu-calcifications",
    title: "Cẩm nang ACR BI-RADS® 2025: Các dạng vôi hóa tuyến vú (Calcifications) – Hình thái, Phân bố và Quản lý",
    slug: "birads-2025-cac-dang-voi-hoa-tuyen-vu-calcifications",
    date: "30 Tháng 10, 2026",
    updatedDate: "30 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "Nhũ ảnh", "X-quang", "BI-RADS 2025", "Vôi hóa tuyến vú", "DCIS"],
    categorySlugs: ["vu", "nhu-anh", "x-quang", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-calcifications/fig_23_fine_linear_branching_casting.jpg",
    excerpt: "Cập nhật chuyên sâu từ Cẩm nang ACR BI-RADS® v2025 về các dạng vôi hóa tuyến vú: Phân tích chi tiết 8 nhóm vôi hóa thường lành tính, 4 hình thái nghi ngờ (Vô định hình, Thô không đồng nhất, Đa hình thái mịn, Dạng đường mảnh / Phân nhánh), 5 kiểu phân bố và các thay đổi thuật ngữ mang tính bước ngoặt.",
    content: [
      "Vôi hóa tuyến vú (Calcifications) là một trong những phát hiện nhũ ảnh then chốt hàng đầu, đóng vai trò quyết định trong việc phát hiện sớm ung thư biểu mô thể ống tại chỗ (DCIS) và ung thư vú giai đoạn sớm trước khi xuất hiện khối u sờ thấy trên lâm sàng.",
      "Cẩm nang ACR BI-RADS® v2025 đưa ra các cập nhật danh pháp chuẩn hóa quan trọng: Bãi bỏ thuật ngữ 'Popcorn-like' và sáp nhập 'Dystrophic' vào danh mục Vôi hóa thô (Coarse); loại bỏ thuật ngữ 'Punctate' để gộp hoàn toàn vào Vôi hóa tròn (Round); thay thế thuật ngữ 'Milk of calcium' bằng 'Layering' (Vôi hóa lắng lớp) nhằm mô tả khách quan bản chất động học trên các tư thế chụp nhũ ảnh.",
      "Chiến lược tiếp cận chẩn đoán vôi hóa tuyến vú bắt buộc phải phối hợp chặt chẽ giữa Hình thái (Morphology) và Phân bố (Distribution), tuân thủ nguyên tắc quyết định xử trí dựa trên hình thái nghi ngờ nhất hiện diện trong tổn thương."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Phân tích Vôi hóa Tuyến vú
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Phần <strong>Vôi hóa tuyến vú (Calcifications)</strong> trong Cẩm nang <em>ACR BI-RADS® v2025</em> là một trong những chương chuyên môn đồ sộ và quan trọng nhất đối với bác sĩ Chẩn đoán hình ảnh vú. Bài giảng này được biên dịch nguyên văn đầy đủ 100% từ nguyên tác tiếng Anh của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology), tích hợp toàn bộ <strong>88 ca bệnh và hình ảnh minh họa nhũ ảnh</strong> (bao gồm nhũ ảnh kỹ thuật số 2D - DM, nhũ ảnh 3D cắt lớp - DBT, nhũ ảnh tổng hợp - SM và X-quang bệnh phẩm phẫu thuật).
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Theo quy ước biên tập y khoa: <strong>Nội dung dịch nguyên văn từ bài giảng được hiển thị chữ đen trên nền trắng tiêu chuẩn</strong>; các nội dung tổng hợp, cạm bẫy lâm sàng và ma trận xử trí do ban biên tập chú giải được đóng khung màu riêng biệt để quý đồng nghiệp dễ dàng tra cứu và kiểm chứng đối chiếu.
        </p>
      </div>

      <h2 id="phan-1-tong-quan-voi-hoa">1. Phân loại tổng quan Vôi hóa Tuyến vú (Calcifications Overview)</h2>
      <p>
        Vôi hóa tuyến vú trên nhũ ảnh được tiếp cận và phân tích dựa trên hai thuộc tính độc lập nhưng có mối liên kết chặt chẽ: <strong>Hình thái (Morphology)</strong> và <strong>Kiểu phân bố (Distribution)</strong>.
      </p>
      <p>
        Về mặt hình thái học, vôi hóa được chia thành hai nhóm lớn:
      </p>
      <ol>
        <li><strong>Vôi hóa lành tính điển hình (Typically Benign):</strong> Thường có kích thước lớn hơn, đường bờ nhẵn, dạng thấu quang trung tâm hoặc có hình dạng đặc trưng sinh lý/bệnh lý lành tính. Đa số tổn thương này được xếp loại BI-RADS 2 (Lành tính) và không yêu cầu sinh thiết hay theo dõi bổ sung.</li>
        <li><strong>Vôi hóa có hình thái nghi ngờ (Suspicious Morphology):</strong> Thường có kích thước nhỏ, bờ không đều, đa dạng hoặc phân nhánh dọc lòng ống dẫn sữa. Nhóm này có nguy cơ ác tính dao động từ thấp đến rất cao, đủ điều kiện để chỉ định sinh thiết mô học (BI-RADS 4 hoặc BI-RADS 5).</li>
      </ol>
      <p>
        <strong>Kiểu phân bố (Distribution):</strong> Mô tả sự sắp xếp không gian của các hạt vôi trong nhu mô vú. Trong đánh giá khả năng ác tính, <em>kiểu phân bố có giá trị dự báo quan trọng không kém gì hình thái học</em> của từng hạt vôi riêng lẻ.
      </p>

      <h2 id="phan-2-lanh-tinh-dien-hinh">2. Các dạng vôi hóa lành tính điển hình (Typically Benign Calcifications)</h2>
      <p>
        Các vôi hóa lành tính điển hình thường không cần làm thêm xét nghiệm hình ảnh chẩn đoán bổ sung nếu đã được khẳng định rõ bản chất. Tuy nhiên, khi các vôi hóa này mới xuất hiện hoặc có hình thái chưa kinh điển, các thế chụp phóng đại (spot magnification) hoặc nhũ ảnh 3D cắt lớp (DBT) có thể cần thiết để khẳng định chẩn đoán.
      </p>

      <h3 id="benign-skin">a. Vôi hóa da (Skin Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa da thường có trung tâm thấu quang (lucent-centered), dạng hình cầu và thường khu trú tại các nếp gấp da (như nếp lằn dưới vú, hố nách, cạnh xương ức và quầng vú).
      </p>
      <p>
        Để khẳng định vôi hóa nằm trong da, hướng chụp tiếp tuyến (tangential projection) với chùm tia đi song song mặt da qua vị trí tổn thương, hoặc chụp ép khu trú DBT (spot compression DBT) có thể được thực hiện. Việc đặt một điểm đánh dấu kim loại (metallic BB) ngay trên nốt tổn thương da nghi ngờ giúp xác định chính xác mối tương quan hình học trên nhũ ảnh.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/skin_fig1.jpg" alt="Figure 1 - SKIN calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa da (DM).</strong> Một vài hạt vôi hóa trung tâm thấu quang (mũi tên) chiếu ngay trên bình diện lớp da/bì. Tổn thương lành tính điển hình (BI-RADS 2).</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/skin_fig2.jpg" alt="Figure 2 - SKIN calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa da (DM).</strong> Nhiều nốt vôi hóa trung tâm thấu quang tập trung tại vùng cạnh xương ức, hình thái kinh điển của vôi hóa tuyến bã hoặc viêm nang lông.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/skin_fig3.jpg" alt="Figure 3 - SKIN calcifications (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa da (DBT).</strong> Nhiều vôi hóa tròn và trung tâm thấu quang nằm ở nếp lằn dưới vú, thấy rõ trên lát cắt bì của DBT.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/skin_fig5.jpg" alt="Figure 5 - SKIN calcifications (SM MLO)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa da (mũi tên) (SM MLO).</strong> Tư thế tiếp tuyến bộc lộ rõ vị trí hạt vôi nằm hoàn toàn trong lớp bì của da vú.</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/skin_fig4.jpg" alt="Figure 4 - Grouped SKIN calcifications (CC SM and Tangential DM CC)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa da thành cụm.</strong> (A) Nhũ ảnh tổng hợp CC (CC SM): Các vôi hóa không có trung tâm thấu quang kinh điển và thoạt nhìn giống như nằm trong nhu mô. (B) Chụp tiếp tuyến phóng đại (DM CC): Xác nhận toàn bộ cụm vôi hóa nằm trọn vẹn trong lớp bì da vú, tránh được một chỉ định sinh thiết không cần thiết.</figcaption>
      </figure>

      <h3 id="benign-vascular">b. Vôi hóa mạch máu (Vascular Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa mạch máu biểu hiện dưới dạng hai đường ray vôi hóa song song (parallel calcific tracks hay "đường ray xe lửa / thân tẩu"), đi dọc theo thành động mạch tuyến vú. Đường ray song song và cấu trúc mạch máu liên quan thường được bộc lộ rõ nét và liên tục hơn trên nhũ ảnh 3D cắt lớp (DBT) so với nhũ ảnh 2D thông thường (DM).
      </p>
      <p>
        Vôi hóa mạch máu thường xuất hiện hai bên hoặc rải rác ở nhiều vùng trong vú. Trong một số trường hợp hiếm hoi khi chỉ có một vài hạt vôi đứt đoạn và mối liên hệ với cấu trúc lòng mạch dạng ống chưa rõ ràng, cần chụp bổ sung phóng đại ép khu trú hoặc ép khu trú trên DBT để khẳng định mối liên quan với thành mạch máu.
      </p>
      <p>
        <strong>Ý nghĩa lâm sàng tim mạch (BAC):</strong> Các bằng chứng y văn gần đây chỉ ra rằng sự hiện diện của vôi hóa động mạch tuyến vú (<em>Breast Arterial Calcification - BAC</em>) có mối tương quan thuận rõ rệt với gia tăng nguy cơ bệnh lý tim mạch do xơ vữa động mạch. Do đó, dù là một dấu hiệu nhũ ảnh lành tính (BI-RADS 2), sự hiện diện của BAC mang ý nghĩa lâm sàng tim mạch rất quan trọng [17, 18]. Hiện nay, các chuyên gia đang thảo luận về việc chuẩn hóa thuật ngữ mô tả BAC trong kết quả nhũ ảnh, dù chưa có sự đồng thuận bắt buộc phải báo cáo thường quy.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/vascular_fig1.jpg" alt="Figure 1 - VASCULAR calcifications (A) SM and (B) DBT" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa mạch máu.</strong> (A) Nhũ ảnh tổng hợp (SM) và (B) Nhũ ảnh 3D cắt lớp (DBT). Các đường viền song song của vôi hóa thành mạch bộc lộ rõ rệt dọc theo đường đi của động mạch tuyến vú.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/vascular_fig2.jpg" alt="Figure 2 - VASCULAR calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa mạch máu (SM).</strong> Hình thái ngoằn ngoèo kinh điển dạng đường đôi song song dọc theo động mạch vú.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/vascular_fig3.jpg" alt="Figure 3 - VASCULAR calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa mạch máu (SM).</strong> Đi kèm các nốt vôi hóa tròn phân bố vùng lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/vascular_fig4.jpg" alt="Figure 4 - VASCULAR calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa mạch máu (DM).</strong> Mặc dù phần lớn vôi hóa mạch máu dễ nhận diện, một số trường hợp giai đoạn sớm có thể mờ nhạt và tinh tế hơn.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/vascular_fig5.jpg" alt="Figure 5 - VASCULAR calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa mạch máu (DM).</strong> Vôi hóa đứt đoạn nhưng định hướng tuyến tính rõ dọc theo lòng mạch máu.</figcaption>
        </figure>
      </div>

      <h3 id="benign-coarse">c. Vôi hóa thô (Coarse Calcifications – trước đây là "Coarse or Popcorn-like")</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa thô là các nốt vôi hóa cản tia đậm đặc, kích thước thường lớn hơn 2 mm đến 3 mm, đường bờ gồ ghề không đều nhưng mượt mà ở các góc. BI-RADS® 2025 đã đơn giản hóa tên gọi thành "Coarse" (bỏ từ so sánh "popcorn-like" / bắp rang).
      </p>
      <p>
        Vôi hóa thô được hình thành chủ yếu do quá trình thoái hóa vôi hóa của các khối u sợi tuyến (involuting fibroadenomas), hoặc do hiện tượng hyalin hóa mô đệm, hoại tử mỡ sau chấn thương, phẫu thuật bảo tồn hoặc xạ trị tuyến vú.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig1.jpg" alt="Figure 1 - Grouped COARSE calcifications (DM). (A) CC and (B) MLO" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa thô thành cụm (DM).</strong> (A) Hướng CC và (B) Hướng MLO. Các khối vôi hóa thô cản tia đậm đặc tiến dần đến dạng "bắp rang" kinh điển của u sợi tuyến thoái hóa.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig2.jpg" alt="Figure 2 - Diffuse COARSE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa thô lan tỏa (DM).</strong> Đồng thời có vôi hóa mạch máu đi kèm. Tổn thương ổn định, phù hợp nhiều u sợi tuyến vôi hóa lành tính.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig3.jpg" alt="Figure 3 - Grouped COARSE calcifications in oval mass (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa thô thành cụm nằm trong khối bầu dục, đồng đậm độ, bờ bị che khuất (SM).</strong> Hình thái không quá kinh điển như Fig 1. Nếu không có phim cũ so sánh sự ổn định, cần làm thêm xét nghiệm hình ảnh bổ sung. Kết luận: U sợi tuyến thoái hóa ổn định.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig4.jpg" alt="Figure 4 - COARSE calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa thô (SM).</strong> Các mảng vôi thô đặc cản tia, điển hình của thoái hóa mô đệm lành tính.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig5.jpg" alt="Figure 5 - COARSE calcifications (DM) at surgical site" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa thô (DM) tại vị trí sẹo mổ cũ.</strong> Lành tính điển hình, xung quanh có các clip kim loại đánh dấu diện phẫu thuật trước đó.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig6.jpg" alt="Figure 6 - COARSE calcifications (SM) post lumpectomy" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa thô (SM).</strong> (A) MLO và (B) CC. Bệnh nhân sau phẫu thuật bảo tồn tuyến vú và xạ trị; vôi hóa thô do hoại tử mỡ lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_fig7.jpg" alt="Figure 7 - COARSE calcification (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 – Vôi hóa thô lớn (DM).</strong> Kèm vài hạt vôi tròn lan tỏa lành tính rải rác xung quanh.</figcaption>
        </figure>
      </div>

      <h3 id="benign-large-rod">d. Vôi hóa que lớn (Large Rod-Like Calcifications – trước đây là "Secretory")</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa que lớn là các dải vôi hóa đặc cản tia hoặc có trung tâm thấu quang liên tục, đường kính khẩu kính dày thường > 0.5 mm đến 1 mm. Các dải này có đường bờ nhẵn bóng, không phân nhánh hoặc phân nhánh theo cấu trúc ống tuyến rộng, hướng đỉnh về phía núm vú theo hệ thống ống dẫn sữa.
      </p>
      <p>
        Dạng vôi hóa này đại diện cho sự lắng đọng canxi trong lòng các ống dẫn sữa bị giãn nở (duct ectasia) hoặc viêm tế bào chất huyết tương (plasma cell mastitis / secretory disease). Chúng thường xuất hiện đối xứng hai bên vú. BI-RADS® 2025 duy trì thuật ngữ mô tả hình thái "Large Rod-Like" để phản ánh chính xác hình dạng hình học thay vì suy đoán cơ chế tiết dịch.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/large_rod_fig1.jpg" alt="Figure 1 - LARGE ROD-LIKE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa que lớn (DM).</strong> Xuất hiện hai bên vú và phân bố dọc theo hệ thống ống dẫn sữa hướng về núm vú. Bờ nhẵn, khẩu kính dày > 1 mm, lành tính điển hình (BI-RADS 2).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/large_rod_fig2.jpg" alt="Figure 2 - LARGE ROD-LIKE calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa que lớn (SM).</strong> Các dải vôi hóa đặc dạng que nhẵn bóng phân bố dọc theo cây ống tuyến.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/large_rod_fig3.jpg" alt="Figure 3 - LARGE ROD-LIKE calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa que lớn (SM).</strong> Dù các dải vôi hóa có những đoạn đứt quãng, nhưng bề mặt trơn láng và khẩu kính dày đặc trưng giúp xác nhận tổn thương lành tính.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/large_rod_fig4.jpg" alt="Figure 4 - LARGE ROD-LIKE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa que lớn (DM).</strong> Một số dải vôi hóa có lòng trung tâm thấu quang dạng ống rỗng (lucent-centered rod).</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/large_rod_fig5.jpg" alt="Figure 5 - LARGE ROD-LIKE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa que lớn (DM).</strong> Các nhánh vôi hóa dạng que bờ nhẵn, phân nhánh xuôi dòng theo cấu trúc ống tuyến lớn.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/large_rod_fig6.jpg" alt="Figure 6 - Unusual presentation of LARGE ROD-LIKE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Biểu hiện không điển hình của Vôi hóa que lớn (DM).</strong> Các đoạn que ngắn có thể gây nhầm lẫn ban đầu với dạng đường mảnh nghi ngờ, nhưng khẩu kính dày và bờ trơn nhẵn khẳng định bản chất lành tính.</figcaption>
        </figure>
      </div>

      <h3 id="benign-round">e. Vôi hóa tròn (Round Calcifications – Loại bỏ thuật ngữ "Punctate")</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa tròn là các chấm cản tia hình tròn hoặc bầu dục nhẵn nét, hình thành chủ yếu bên trong các nang tuyến (acini) của tiểu thùy tuyến vú.
      </p>
      <p>
        <strong>Cập nhật quan trọng trong BI-RADS® v2025:</strong> Thuật ngữ <em>"Dạng chấm" (Punctate)</em> – vốn trước đây dùng để chỉ các vôi hóa tròn có kích thước dưới 0.5 mm – <strong>đã chính thức bị loại bỏ</strong>. Lý do là việc cố gắng đo đạc chính xác kích thước milimet của từng hạt vi vôi hóa nhỏ li ti trên thực hành lâm sàng là không khả thi và không mang lại giá trị phân tầng nguy cơ ác tính khác biệt so với vôi hóa tròn thông thường.
      </p>
      <p>
        Khi phân bố lan tỏa hai bên, vôi hóa tròn hầu như luôn là lành tính (BI-RADS 2). Tuy nhiên, khi vôi hóa tròn tập trung <strong>Thành cụm (Grouped)</strong> lần đầu tiên phát hiện hoặc phân bố <strong>Theo phân thùy (Segmental)</strong>, nguy cơ ác tính tăng lên và có thể cần đánh giá BI-RADS 3 (theo dõi định kỳ 6 tháng) hoặc sinh thiết (BI-RADS 4).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/round_fig1.jpg" alt="Figure 1 - Grouped ROUND calcifications (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa tròn thành cụm (DBT).</strong> Lành tính, ổn định qua nhiều năm theo dõi.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/round_fig2.jpg" alt="Figure 2 - Grouped ROUND calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa tròn thành cụm (SM).</strong> Các hạt tròn đều, bờ nhẵn, ổn định trong thời gian dài.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/round_fig3.jpg" alt="Figure 3 - ROUND calcifications (DM specimen radiograph)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa tròn (X-quang bệnh phẩm phẫu thuật).</strong> Các nốt vôi tròn này (mũi tên) tăng nhanh số lượng theo thời gian nên được chỉ định sinh thiết và phẫu thuật cắt bỏ. Giải phẫu bệnh: <em>LCIS đa hình (Pleomorphic LCIS)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/round_fig4.jpg" alt="Figure 4 - Regional ROUND and amorphous calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa tròn (mũi tên) và vô định hình (đầu mũi tên) phân bố vùng (DM).</strong> Ổn định qua các năm, tổn thương lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/round_fig5.jpg" alt="Figure 5 - Segmental ROUND calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa tròn phân bố theo phân thùy (DM).</strong> Mặc dù hình thái hạt tròn trông lành tính, nhưng kiểu <em>phân bố theo phân thùy (Segmental)</em> đã nâng mức đánh giá lên nghi ngờ ác tính (BI-RADS 4). Giải phẫu bệnh: <em>Ung thư biểu mô ống tuyến vú tại chỗ (DCIS)</em>.</figcaption>
        </figure>
      </div>

      <h3 id="benign-rim">f. Vôi hóa viền (Rim Calcifications – trước đây là "Rim or Eggshell")</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa viền là các đường vôi hóa mỏng lắng đọng trên bề mặt của một khối hình cầu. Bề dày của đường viền vôi hóa thường &lt; 1 mm khi nhìn tiếp tuyến qua bờ.
      </p>
      <p>
        Vôi hóa viền thường phát triển xung quanh các cấu trúc có trung tâm thấu quang (chứa mỡ hoặc dịch), kích thước từ dưới 1 mm đến vài centimet. Nguyên nhân phổ biến nhất là <strong>hoại tử mỡ (fat necrosis)</strong> và vôi hóa thành nang (calcifications in cyst walls). Đôi khi, vôi hóa viền của các nang dầu (oil cysts) hoặc nang đơn giản có thể dày và rộng hơn.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/rim_fig1.jpg" alt="Figure 1 - RIM calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa viền (SM).</strong> Có kèm một số nốt vôi thô (mũi tên). Hình ảnh gợi ý tiền sử chấn thương vú cũ, hình thái lành tính điển hình của hoại tử mỡ.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/rim_fig2.jpg" alt="Figure 2 - RIM calcifications (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa viền (DBT).</strong> Nang dầu hoại tử mỡ bộc lộ rõ đường vỏ mỏng mượt mà trên lát cắt mỏng của DBT.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/rim_fig3.jpg" alt="Figure 3 - RIM calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa viền (SM).</strong> Bệnh nhân có tiền sử chấn thương vú; hình ảnh hoại tử mỡ dạng vỏ trứng điển hình.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/rim_fig4.jpg" alt="Figure 4 - RIM calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa viền (DM).</strong> Đường viền cản tia mỏng uốn cong viền quanh cấu trúc nang thấu quang.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/rim_fig5.jpg" alt="Figure 5 - RIM calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa viền đang hình thành (DM).</strong> Giai đoạn sớm có thể chưa điển hình, nhưng quan sát kỹ xác nhận canxi lắng đọng tại chu vi của một khối cầu (nang dầu).</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/rim_fig6.jpg" alt="Figure 6 - Evolving RIM calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Quá trình tiến triển của Vôi hóa viền (DM).</strong> Một năm sau phẫu thuật u lành tính (A), các vôi hóa này gợi ý vôi hóa viền đang hình thành nhưng chưa hoàn toàn điển hình; chiến lược theo dõi được lựa chọn. Sáu tháng sau (B), các vôi hóa đã biểu hiện rõ hình thái viền kinh điển (classic RIM), diện sẹo mổ co rút thu nhỏ lại và xuất hiện thêm các nốt vôi viền lân cận. Kết luận: Biến đổi hậu phẫu lành tính.</figcaption>
      </figure>

      <h3 id="benign-layering">g. Vôi hóa lắng lớp (Layering – thay thế thuật ngữ lịch sử "Milk of Calcium")</h3>
      <p>
        <strong>Đổi mới thuật ngữ quan trọng:</strong> Thuật ngữ lịch sử <em>"Sữa canxi" (Milk of calcium)</em> trong ấn bản BI-RADS® 2025 đã được thay thế hoàn toàn bằng thuật ngữ <strong>"Vôi hóa lắng lớp" (Layering)</strong>. Thay đổi này nhằm tập trung mô tả trực quan diện mạo hình ảnh thực tế thay vì suy đoán nguyên nhân sinh lý bệnh học.
      </p>
      <p>
        <strong>Quy luật biến đổi hình thái theo hướng chùm tia (Pathognomonic Sign):</strong>
      </p>
      <ul>
        <li>Trên các hướng chụp với <strong>chùm tia nằm ngang song song mặt đất</strong> (như hướng nghiêng 90° LM/ML hoặc hướng chếch ngoài-trong MLO): Các cặn canxi lắng đọng xuống đáy của nang dưới tác dụng của trọng lực, biểu hiện dưới dạng <em>hình bán nguyệt, hình trăng lưỡi liềm, hình đường cong cong lồi xuống dưới đáy (concave up)</em> hoặc dạng đường nằm ngang như đáy chén trà ("tea-cupping").</li>
        <li>Trên hướng chụp <strong>sọ-đuôi (CC) với chùm tia thẳng đứng từ trên xuống</strong>: Vôi hóa nhìn trực diện từ trên xuống bề mặt lớp lắng đọng, nên xuất hiện dưới dạng các <em>nốt mờ nhạt, nham nhở, tròn vô định hình (smudgy, round deposits)</em>.</li>
      </ul>
      <p>
        Đặc điểm quan trọng nhất để chẩn đoán vôi hóa lắng lớp là <strong>sự thay đổi hình thái rõ rệt giữa hai hướng chụp nhũ ảnh vuông góc (CC đối chiếu với LM/ML)</strong>. Đây là dấu hiệu khẳng định lành tính 100%. Vôi hóa lắng lớp thường nằm thành cụm trong các nang vú nhỏ (microcysts) hoặc nang lớn (macrocysts).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/layering_fig1.jpg" alt="Figure 1 - LAYERING calcifications ML views (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa lắng lớp trên hướng ML (DBT).</strong> Canxi tích tụ rõ tại phần thấp nhất phụ thuộc trọng lực của hai nang lớn bờ rõ cạnh nhau, phù hợp với cặn canxi trong nang lớn phức hợp lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/layering_fig2.jpg" alt="Figure 2 - Grouped LAYERING calcifications (DM ML view)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa lắng lớp thành cụm (DM hướng ML).</strong> Bờ dưới uốn cong lòng chảo trong khi bờ trên nằm ngang tuyệt đối do canxi lắng lớp theo trọng lực trong cụm vi nang.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/layering_fig3.jpg" alt="Figure 3 - LAYERING calcifications (A) DM CC and (B) DM ML" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Dấu hiệu biến đổi hình thái kinh điển của Vôi hóa lắng lớp.</strong> (A) Hướng CC: Vôi hóa dạng nốt nham nhở, mờ nhạt (smudgy). (B) Hướng ML 90°: Vôi hóa chuyển thành dạng trăng lưỡi liềm lồi xuống đáy (layering) kinh điển, tiêu chuẩn vàng xác nhận vôi hóa lắng lớp lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/layering_fig4.jpg" alt="Figure 4 - LAYERING calcifications (A) DM CC and (B) DM ML" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa lắng lớp dễ gây nhầm lẫn trên hướng ML.</strong> (A) Hướng CC và (B) Hướng ML. Một số vôi hóa có thể trông giống dạng đường thẳng trên hướng ML, nhưng bản chất lành tính được khẳng định nhờ các vôi lắng lớp lân cận và hình thái nham nhở không thành đường trên hướng CC.</figcaption>
        </figure>
      </div>

      <h3 id="benign-suture">h. Vôi hóa chỉ khâu (Suture Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa chỉ khâu có dạng đường thẳng, đường cong uốn lượn hoặc hình ống hình học. Bản chất là sự ngấm vôi trên vật liệu chỉ phẫu thuật còn lưu lại trong mô tuyến vú sau phẫu thuật u lành tính hoặc điều trị xạ trị [20].
      </p>
      <p>
        Khi quan sát kỹ, các nút thắt phẫu thuật (surgical knots) thường có thể nhận diện được rất rõ nét. Tuy nhiên, nếu tại vùng sẹo mổ xuất hiện các vôi hóa đa hình hoặc vô định hình mới đi kèm với chỉ khâu, cần hết sức thận trọng để loại trừ khả năng tái phát ác tính.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/suture_fig1.jpg" alt="Figure 1 - Grouped SUTURE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa chỉ khâu thành cụm (DM).</strong> Cấu trúc dạng ống và các nút thắt chỉ khâu ngấm vôi rõ rệt.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/suture_fig2.jpg" alt="Figure 2 - Grouped SUTURE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa chỉ khâu thành cụm (DM).</strong> Hình thái vòng cung tròn và nút thắt phẫu thuật kinh điển.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/suture_fig3.jpg" alt="Figure 3 - Grouped SUTURE calcifications (DBT)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa chỉ khâu trên DBT.</strong> Đồng thời ghi nhận xáo trộn cấu trúc sau phẫu thuật lành tính xung quanh.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/suture_fig4.jpg" alt="Figure 4 - Grouped SUTURE calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa chỉ khâu thành cụm (DM).</strong> Cấu tạo dạng sợi chỉ uốn cong đặc trưng tại vị trí phẫu thuật cũ.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/suture_fig5.jpg" alt="Figure 5 - SUTURE calcifications with recurrent IDC (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Cạm bẫy: Vôi hóa chỉ khâu đi kèm tổn thương ác tính tái phát (SM).</strong> Ngoài các đường vôi hóa chỉ khâu lành tính, xuất hiện thêm cụm vôi hóa không đồng nhất thô và đa hình mịn mới (mũi tên). Giải phẫu bệnh: <em>Ung thư biểu mô ống tuyến vú xâm nhập tái phát (Recurrent IDC)</em> liên quan đến vùng vôi hóa không phải chỉ khâu.</figcaption>
        </figure>
      </div>

      <h2 id="phan-3-hinh-thai-nghi-ngo">3. Các dạng vôi hóa có hình thái nghi ngờ (Suspicious Morphology)</h2>
      <p>
        Phân loại vôi hóa tuyến vú theo hình thái học là phương pháp hữu hiệu nhất để dự báo xác suất ác tính. Trong Cẩm nang ACR BI-RADS® 2025, có <strong>4 thuật ngữ hình thái nghi ngờ</strong> mang giá trị dự báo dương tính (PPV) đủ cao để đưa ra khuyến cáo sinh thiết mô học (BI-RADS 4 hoặc 5):
      </p>
      <ol>
        <li>Vô định hình (Amorphous)</li>
        <li>Không đồng nhất thô (Coarse Heterogeneous)</li>
        <li>Đa hình mịn (Fine Pleomorphic)</li>
        <li>Dạng đường mảnh hoặc Phân nhánh (Fine Linear or Fine Linear-Branching)</li>
      </ol>

      <h3 id="table-3-ppv">Bảng đối chiếu giá trị dự báo dương tính (PPV) ác tính của hình thái vôi hóa</h3>
      <p>
        Dưới đây là Bảng 3 nguyên văn từ Cẩm nang ACR BI-RADS® 2025, tổng hợp số liệu từ các nghiên cứu đối chứng quy mô lớn quốc tế:
      </p>

      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse border border-slate-300">
          <thead>
            <tr class="bg-slate-100 text-slate-800">
              <th class="border border-slate-300 p-2 text-left">Thuật ngữ hình thái (Morphology Descriptor)</th>
              <th class="border border-slate-300 p-2 text-center">Choi et al. 2020 [21]</th>
              <th class="border border-slate-300 p-2 text-center">Park et al. 2019 [22]</th>
              <th class="border border-slate-300 p-2 text-center">Kim et al. 2015 [23]</th>
              <th class="border border-slate-300 p-2 text-center">Bent et al. 2010 [24]</th>
              <th class="border border-slate-300 p-2 text-center">Burnside et al. 2007 [25]</th>
              <th class="border border-slate-300 p-2 text-center font-bold">Xếp loại BI-RADS gợi ý</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Vô định hình (Amorphous)</strong></td>
              <td class="border border-slate-300 p-2 text-center">9.1%</td>
              <td class="border border-slate-300 p-2 text-center">15.9%</td>
              <td class="border border-slate-300 p-2 text-center">7.9%</td>
              <td class="border border-slate-300 p-2 text-center">20%</td>
              <td class="border border-slate-300 p-2 text-center">13%</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-amber-700">BI-RADS 4B (nguy cơ vừa)</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="border border-slate-300 p-2 font-medium"><strong>Không đồng nhất thô (Coarse Heterogeneous)</strong></td>
              <td class="border border-slate-300 p-2 text-center">16.1%</td>
              <td class="border border-slate-300 p-2 text-center">31.7%</td>
              <td class="border border-slate-300 p-2 text-center">17.8%</td>
              <td class="border border-slate-300 p-2 text-center">20%</td>
              <td class="border border-slate-300 p-2 text-center">7%</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-amber-700">BI-RADS 4B (nguy cơ vừa)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Đa hình mịn (Fine Pleomorphic)</strong></td>
              <td class="border border-slate-300 p-2 text-center">78.8%</td>
              <td class="border border-slate-300 p-2 text-center">58.2%</td>
              <td class="border border-slate-300 p-2 text-center">63.2%</td>
              <td class="border border-slate-300 p-2 text-center">28%</td>
              <td class="border border-slate-300 p-2 text-center">29%</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-rose-700">BI-RADS 4B / 4C</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="border border-slate-300 p-2 font-medium"><strong>Dạng đường mảnh / Phân nhánh (Fine Linear / Branching)</strong></td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-600">78.6%</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-600">90.6%</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-600">100%</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-600">70%</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-600">53%</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-700">BI-RADS 4C / 5 (nguy cơ cao)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="suspicious-amorphous">a. Vôi hóa vô định hình (Amorphous Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa vô định hình là các hạt vôi hóa kích thước rất nhỏ, mờ nhạt như bụi phấn, và theo định nghĩa là <em>hoàn toàn không có hình thù hình học cụ thể (essentially formless)</em>, khiến người đọc không thể gán cho một hình dạng rõ ràng nào khác.
      </p>
      <p>
        Vôi hóa vô định hình khi phân bố theo vùng (nếu là mới xuất hiện hoặc tăng lên), thành cụm, dạng đường hoặc theo phân thùy mang mức độ nghi ngờ ác tính trung gian (PPV từ 8% đến 20%) và nhìn chung cần được chỉ định sinh thiết dưới định vị X-quang (stereotactic/tomosynthesis-guided biopsy) [26].
      </p>
      <p>
        Nếu vôi hóa vô định hình phân bố lan tỏa đối xứng hai bên vú, tổn thương thường được xếp loại là lành tính. Vôi hóa vô định hình <strong>không thay đổi hình thái hoặc không tạo ngấn lắng lớp trên phim chụp phóng đại 90° nghiêng (LM/ML)</strong>, đây là điểm then chốt để phân biệt với vôi hóa lắng lớp lành tính.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig1.jpg" alt="Figure 1 - Regional AMORPHOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa vô định hình phân bố vùng (DM).</strong> Từng hạt vôi rất khó xác định hình dạng vì không có hình thù hình học cụ thể. Giải phẫu bệnh: <em>Biến đổi sợi bọc lành tính (Benign fibrocystic changes)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig2.jpg" alt="Figure 2 - Regional AMORPHOUS calcifications (DM magnification)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa vô định hình phân bố vùng (mũi tên).</strong> Có kèm một số nốt vôi tròn (đầu mũi tên) trên phim chụp phóng đại (DM). Giải phẫu bệnh: <em>Tăng sinh ống tuyến không điển hình (ADH) và DCIS</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig3.jpg" alt="Figure 3 - Regional AMORPHOUS with fine pleomorphic (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa vô định hình phân bố vùng (mũi tên) đi kèm cụm vôi hóa đa hình mịn (đầu mũi tên) (DM).</strong> Sinh thiết cụm vôi hóa đa hình mịn cho kết quả DCIS. <em>Nguyên tắc: Vùng vôi hóa vô định hình cần được khảo sát kỹ lưỡng để loại trừ các hình thái nghi ngờ cao hơn đi kèm</em>. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig4.jpg" alt="Figure 4 - Grouped AMORPHOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa vô định hình thành cụm (DM).</strong> Giải phẫu bệnh: <em>Vôi hóa trong biểu mô lành tính</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig5.jpg" alt="Figure 5 - Regional AMORPHOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa vô định hình phân bố vùng (DM).</strong> Giải phẫu bệnh: <em>Tăng sinh ống tuyến không điển hình (ADH) và Dị sản biểu mô dẹt (Flat epithelial atypia - FEA)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/amorphous_fig6.jpg" alt="Figure 6 - Round and AMORPHOUS grouped calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa tròn lẫn vô định hình tập trung thành cụm (DM).</strong> Giải phẫu bệnh: <em>Tăng sinh ống tuyến không điển hình (ADH)</em>.</figcaption>
        </figure>
      </div>

      <h3 id="suspicious-coarse-hetero">b. Vôi hóa không đồng nhất thô (Coarse Heterogeneous Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa không đồng nhất thô có hình dạng gồ ghề không đều, kích thước thường từ 0.5 mm đến 1 mm, và có xu hướng kết cụm hòa vào nhau (tend to coalesce).
      </p>
      <p>
        Vôi hóa không đồng nhất thô có kích thước <em>nhỏ hơn</em> vôi hóa thô lành tính (&gt; 2-3 mm) nhưng <em>lớn hơn và thô hơn</em> so với vôi hóa đa hình mịn (&lt; 0.5 mm). Chúng mang mức độ nghi ngờ ác tính trung gian (PPV từ 15% đến 30%), đặc biệt khi phân bố thành cụm, dạng đường, theo phân thùy hoặc mới xuất hiện/tăng số lượng.
      </p>
      <p>
        Nếu xuất hiện nhiều nhóm vôi hóa không đồng nhất thô rải rác đối xứng cả hai bên vú, tổn thương thường có thể kết luận là lành tính do tính chất đa ổ đối xứng hai bên.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig1.jpg" alt="Figure 1 - Grouped COARSE HETEROGENEOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa không đồng nhất thô thành cụm (DM).</strong> Bệnh nhân có nhiều cụm tương tự đối xứng hai bên vú. Tổn thương ổn định, lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig2.jpg" alt="Figure 2 - Grouped COARSE HETEROGENEOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa không đồng nhất thô thành cụm (DM).</strong> Kích thước 0.5 - 1 mm, bờ không đều. Giải phẫu bệnh: <em>U sợi tuyến (Fibroadenoma)</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig3.jpg" alt="Figure 3 - Grouped COARSE HETEROGENEOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa không đồng nhất thô thành cụm (DM).</strong> Giải phẫu bệnh: <em>Biến đổi u sợi tuyến xơ hóa (Sclerosing fibroadenomatous change)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig4.jpg" alt="Figure 4 - Grouped COARSE HETEROGENEOUS calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa không đồng nhất thô thành cụm (SM).</strong> Cụm vôi hóa mới xuất hiện. Giải phẫu bệnh: <em>Ung thư biểu mô ống tuyến vú tại chỗ (DCIS)</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig5.jpg" alt="Figure 5 - Grouped COARSE HETEROGENEOUS calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa không đồng nhất thô thành cụm (DM).</strong> Sinh thiết lõi kim: <em>Biến đổi dạng u sợi tuyến (Fibroadenomatoid change)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/coarse_hetero_fig6.jpg" alt="Figure 6 - Grouped COARSE HETEROGENEOUS with fine linear calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa không đồng nhất thô thành cụm (mũi tên trắng) kết hợp vôi hóa dạng đường mảnh phân bố dạng đường (đầu mũi tên) và vôi hóa thô lành tính (mũi tên vàng) (DM).</strong> Khi nhiều hình thái cùng tồn tại, thái độ xử trí phải dựa trên hình thái nghi ngờ cao nhất. Giải phẫu bệnh: <em>IDC và DCIS (tại vùng vôi hóa đường mảnh); U sợi tuyến (tại vùng vôi hóa thô)</em>.</figcaption>
        </figure>
      </div>

      <h3 id="suspicious-fine-pleo">c. Vôi hóa đa hình mịn (Fine Pleomorphic Calcifications)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa đa hình mịn là các hạt vôi hóa biến đổi đa dạng về cả kích thước lẫn hình dáng (mỗi hạt có một hình dáng góc cạnh, tam giác, hình thoi khác nhau), đường kính thường &lt; 0.5 mm.
      </p>
      <p>
        So với vôi hóa vô định hình, vôi hóa đa hình mịn <em>rõ nét hơn (more conspicuous)</em> và có <em>hình dạng hình học riêng biệt (discrete shapes)</em>. Mặc dù hình dạng rất đa dạng, chúng <em>không có tính chất dạng đường kéo dài</em> như vôi hóa dạng đường mảnh.
      </p>
      <p>
        Vôi hóa đa hình mịn có giá trị dự báo ác tính cao rõ rệt (PPV từ 30% đến gần 80%), đại diện điển hình cho ung thư biểu mô ống tuyến vú tại chỗ (DCIS) thể nhân độ mô học trung bình/cao hoặc ung thư biểu mô xâm nhập (IDC).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_pleo_fig1.jpg" alt="Figure 1 - Grouped FINE PLEOMORPHIC calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa đa hình mịn thành cụm (DM).</strong> Các hạt kích thước &lt; 0.5 mm, góc cạnh sắc nhọn. Giải phẫu bệnh: <em>Ung thư biểu mô ống xâm nhập (IDC) và DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_pleo_fig2.jpg" alt="Figure 2 - Grouped FINE PLEOMORPHIC calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa đa hình mịn thành cụm (DM).</strong> Cụm vôi hóa nhỏ gọn. Giải phẫu bệnh: <em>U sợi tuyến (Fibroadenoma)</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_pleo_fig3.jpg" alt="Figure 3 - Segmental FINE PLEOMORPHIC calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa đa hình mịn phân bố theo phân thùy (SM).</strong> Các hạt góc cạnh phân bố hình tam giác hướng về núm vú. Giải phẫu bệnh: <em>IDC và DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_pleo_fig4.jpg" alt="Figure 4 - Grouped FINE PLEOMORPHIC calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa đa hình mịn thành cụm (DM).</strong> Có hai cụm vôi hóa tách biệt rõ ràng. Có một vài hạt vôi không đồng nhất thô đi kèm, nhưng phân loại toàn bộ nhóm phải dựa vào hình thái đa hình mịn nghi ngờ nhất. Giải phẫu bệnh: <em>DCIS ở cả hai cụm</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_pleo_fig5.jpg" alt="Figure 5 - Grouped FINE PLEOMORPHIC calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa đa hình mịn thành cụm (DM).</strong> Giải phẫu bệnh: <em>DCIS và Tăng sinh ống tuyến không điển hình (ADH)</em>.</figcaption>
        </figure>
      </div>

      <h3 id="suspicious-fine-linear">d. Vôi hóa dạng đường mảnh hoặc Phân nhánh (Fine Linear or Fine Linear-Branching)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa dạng đường mảnh hoặc phân nhánh là các đường vôi hóa mỏng, dài, bờ không đều, có thể đứt đoạn, với khẩu kính đo được thường <strong>&lt; 0.5 mm</strong>. Đôi khi có thể quan sát thấy các dạng phân nhánh (branching forms) hình chữ Y hoặc chữ V.
      </p>
      <p>
        Diện mạo hình ảnh của chúng phản ánh trực tiếp quá trình tế bào ung thư lấp đầy và hoại tử canxi hóa bên trong lòng của các ống dẫn sữa (đúc khuôn lòng ống - casting calcifications), đặc biệt là ung thư biểu mô ống tuyến vú tại chỗ thể hoại tử trung tâm (comedo DCIS).
      </p>
      <p>
        <strong>Mức độ ác tính cao nhất:</strong> Trong tất cả các hình thái vôi hóa nghi ngờ của BI-RADS, <strong>vôi hóa dạng đường mảnh và phân nhánh có giá trị dự báo dương tính ác tính (PPV) cao nhất</strong>, dao động từ 70% đến 100% [24]. Khi gặp hình thái này, sinh thiết ra kết quả lành tính thường bị coi là không tương thích (discordant) và bắt buộc phải đối chiếu lại hoặc phẫu thuật mở.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig1.jpg" alt="Figure 1 - FINE LINEAR calcifications in segmental distribution (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa dạng đường mảnh phân bố theo phân thùy (DM).</strong> Mặc dù diện tích tổn thương không quá lớn, các đường mảnh chạy theo các nhánh ống tuyến phân đôi liền kề. Giải phẫu bệnh: <em>DCIS độ mô học cao (high nuclear grade)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig2.jpg" alt="Figure 2 - Segmental FINE LINEAR-BRANCHING calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa dạng đường mảnh phân nhánh theo phân thùy (DM).</strong> Thấy rõ các nhánh phân nhánh đúc khuôn lòng ống. Chú ý: Một số hạt vôi khá dày nhưng bờ nham nhở và không thon nhỏ ở đầu que (khác với vôi que lớn lành tính). Hình ảnh đặc trưng của DCIS ác tính cao. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig3.jpg" alt="Figure 3 - Segmental FINE LINEAR calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa dạng đường mảnh phân bố theo phân thùy (DM).</strong> Các vệt đúc khuôn ác tính trong lòng ống dẫn sữa. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig4.jpg" alt="Figure 4 - Grouped FINE LINEAR calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa dạng đường mảnh thành cụm (DM).</strong> Có đi kèm các hạt đa hình mịn và vô định hình. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig5.jpg" alt="Figure 5 - Grouped FINE LINEAR calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa dạng đường mảnh thành cụm (DM).</strong> Có lẫn một số hạt đa hình mịn. Giải phẫu bệnh: <em>DCIS dạng comedocarcinoma</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig6.jpg" alt="Figure 6 - FINE LINEAR in linear distribution (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa dạng đường mảnh phân bố dạng đường (DM).</strong> Một số hạt vôi dày hơn bình thường nhưng đường bờ rất nham nhở và phân bố thẳng hàng khẳng định tính chất ác tính. Giải phẫu bệnh: <em>DCIS độ mô học cao</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/fine_linear_fig7.jpg" alt="Figure 7 - Segmental FINE LINEAR calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 – Vôi hóa dạng đường mảnh phân bố theo phân thùy (SM).</strong> Điển hình cho tổn thương ác tính lan rộng trong lòng ống dẫn sữa. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <h2 id="phan-4-kieu-phan-bo">4. Các kiểu phân bố Vôi hóa Tuyến vú (Distribution Descriptors)</h2>
      <p>
        Các thuật ngữ phân bố được sử dụng để chỉ định cách sắp xếp không gian của các hạt vôi trong tuyến vú. Trong việc đánh giá khả năng ác tính, <strong>kiểu phân bố có tầm quan trọng ít nhất là ngang bằng với hình thái học</strong>.
      </p>

      <h3 id="dist-diffuse">a. Phân bố lan tỏa (Diffuse Distribution)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa phân bố lan tỏa rải rác ngẫu nhiên trên toàn bộ thể tích nhu mô vú.
      </p>
      <p>
        Khi xuất hiện ở <strong>cả hai bên vú</strong>, các vôi hóa tròn hoặc vô định hình phân bố lan tỏa hầu như luôn là tổn thương lành tính (BI-RADS 2). Ngược lại, vôi hóa phân bố lan tỏa chỉ xuất hiện ở <strong>một bên vú đơn độc</strong> là dấu hiệu bất thường ít gặp và có thể do ung thư biểu mô ống tuyến vú tại chỗ lan tỏa (diffuse DCIS), đặc biệt là khi hình thái hạt vôi thuộc nhóm không đồng nhất thô, đa hình mịn hoặc phân nhánh.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig1.jpg" alt="Figure 1 - DIFFUSE, primarily round calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa lan tỏa, chủ yếu dạng hạt tròn (DM).</strong> Mặc dù nhiều hạt có trung tâm thấu quang, không có hạt nào chiếu trên bề mặt da, chứng tỏ nằm trong nhu mô. Vú đối bên cũng có hình ảnh tương tự. Tính chất đối xứng hai bên, số lượng nhiều, phân bố lan tỏa và không có hình thái nghi ngờ khẳng định kết luận Lành tính (BI-RADS 2).</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig2.jpg" alt="Figure 2 - DIFFUSE coarse calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa thô lan tỏa (DM).</strong> Vô số khối u sợi tuyến thoái hóa vôi hóa rải rác khắp vú.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig3.jpg" alt="Figure 3 - DIFFUSE round and layering calcifications (SM ML)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa tròn và lắng lớp phân bố lan tỏa (hướng ML, SM).</strong> Các hạt vôi phân bố rải rác ngẫu nhiên trong mô sợi tuyến. Tổn thương ổn định, lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig4.jpg" alt="Figure 4 - DIFFUSE round calcifications (DM). (A) CC (B) MLO" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa tròn phân bố lan tỏa (DM).</strong> (A) Hướng CC và (B) Hướng MLO. Vô số nốt tròn nhỏ phân bố khắp các góc phần tư tuyến vú.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig5.jpg" alt="Figure 5 - Round, DIFFUSE (A) CC and (B) MLO (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa tròn lan tỏa (DM).</strong> (A) CC và (B) MLO. Vôi hóa nang tuyến lành tính hai bên.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_diffuse_fig6.jpg" alt="Figure 6 - DIFFUSE round and layering calcifications (SM MLO)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa tròn và lắng lớp lan tỏa (SM MLO).</strong> Cặn canxi lắng lớp trong các vi nang rải rác.</figcaption>
        </figure>
      </div>

      <h3 id="dist-regional">b. Phân bố vùng (Regional Distribution)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa phân bố vùng chiếm một diện tích lớn của mô tuyến vú, thường có kích thước <strong>trải dài &gt; 2 cm</strong>, nhưng không bao trùm toàn bộ tuyến vú như phân bố lan tỏa.
      </p>
      <p>
        Các hạt vôi rải rác ngẫu nhiên trong vùng đó và <em>hoàn toàn không tuân theo quy luật giải phẫu của một hệ thống ống dẫn sữa hay phân thùy</em>. Vì vùng phân bố này có thể chiếm phần lớn một góc phần tư hoặc thậm chí lan rộng qua nhiều hơn một góc phần tư, khả năng ác tính thường thấp hơn so với phân bố thẳng hàng hay phân thùy.
      </p>
      <p>
        Tuy nhiên, hình thái học của hạt vôi sẽ quyết định mức độ nghi ngờ, cũng như tính chất xuất hiện ở một bên hay hai bên vú. Nếu hình thái là đa hình mịn hoặc phân nhánh, chỉ định sinh thiết vẫn là bắt buộc.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_regional_fig1.jpg" alt="Figure 1 - REGIONAL coarse calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa thô phân bố vùng (DM).</strong> Bệnh nhân có tiền sử chấn thương dây an toàn ô tô vào vú này. Các nốt vôi phân bố ngẫu nhiên tại vùng trung tâm vú. Kết luận: Hoại tử mỡ lành tính.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_regional_fig2.jpg" alt="Figure 2 - REGIONAL coarse calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa thô phân bố vùng (DM).</strong> Các dấu đánh dấu kim loại cản tia trên da định vị các nốt ruồi ngoài da. Ổn định, lành tính.</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/dist_regional_fig3.jpg" alt="Figure 3 - Amorphous, coarse heterogeneous and vascular calcifications, REGIONAL (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa vô định hình, không đồng nhất thô và mạch máu phân bố vùng (DM).</strong> (A) Hướng CC và (B) Hướng MLO. Khẳng định lành tính nhờ sự ổn định lâu dài trên nhiều năm theo dõi.</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_regional_fig4.jpg" alt="Figure 4 - REGIONAL fine pleomorphic and fine linear calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa đa hình mịn và dạng đường mảnh phân bố vùng (DM).</strong> Mặc dù phân bố rải rác ngẫu nhiên ở phần trên của vú, hình thái hạt vôi thuộc nhóm nghi ngờ cao, đòi hỏi phải sinh thiết. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_regional_fig5.jpg" alt="Figure 5 - REGIONAL coarse heterogeneous, fine pleomorphic and fine linear calcifications (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa không đồng nhất thô, đa hình mịn và dạng đường mảnh phân bố vùng (SM).</strong> Ca bệnh này minh chứng tầm quan trọng cốt lõi: <em>Khi đánh giá tổn thương, luôn kết hợp cả hình thái lẫn phân bố và sử dụng đặc tính nghi ngờ ác tính cao hơn để đưa ra quyết định xử trí</em>. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <h3 id="dist-grouped">c. Phân bố thành cụm (Grouped Distribution – trước đây là "Clustered")</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa thành cụm chiếm một thể tích nhỏ khu trú trong nhu mô vú.
      </p>
      <p>
        Quy ước định lượng thông thường là có <strong>ít nhất 5 hạt vôi hóa nằm trong phạm vi 1 cm</strong>, hoặc một số lượng nhiều hạt hơn nằm trong khoảng không gian <strong>&lt; 2 cm</strong>. Điều này phản ánh một tập hợp hạt vôi khu trú, không ngẫu nhiên, hoàn toàn phân biệt với phân bố vùng hay lan tỏa.
      </p>
      <p>
        <strong>Lưu ý lâm sàng mang tính quyết định:</strong> <em>Hình thái học của từng hạt vôi quan trọng hơn số lượng hạt tuyệt đối</em>. Nếu hình thái hạt vôi mang tính chất nghi ngờ cao (như đa hình mịn hoặc phân nhánh), bác sĩ <strong>phải chỉ định sinh thiết ngay cả khi số lượng hạt vôi đếm được ít hơn 5 hạt</strong>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_grouped_fig1.jpg" alt="Figure 1 - GROUPED round calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa tròn phân bố thành cụm (DM).</strong> Tổn thương ổn định qua các lần khám, lành tính (BI-RADS 2).</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_grouped_fig2.jpg" alt="Figure 2 - GROUPED round, coarse heterogeneous and linear (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Cụm vôi hóa gồm hạt tròn, không đồng nhất thô và một hạt dạng đường đơn độc (DM).</strong> Giải phẫu bệnh: <em>Biến đổi dạng u sợi tuyến (Fibroadenomatoid change)</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_grouped_fig3.jpg" alt="Figure 3 - GROUPED fine pleomorphic and fine linear (DM CC mag)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Cụm vôi hóa đa hình mịn và dạng đường mảnh (DM CC phóng đại).</strong> Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_grouped_fig4.jpg" alt="Figure 4 - GROUPED coarse heterogeneous and fine pleomorphic with mass (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Cụm vôi hóa không đồng nhất thô và đa hình mịn đi kèm khối mô mềm xung quanh (DM).</strong> Giải phẫu bệnh: <em>U sợi tuyến (Fibroadenoma)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_grouped_fig5.jpg" alt="Figure 5 - GROUPED fine pleomorphic and fine linear (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Cụm vôi hóa đa hình mịn và dạng đường mảnh (DM).</strong> Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <h3 id="dist-linear">d. Phân bố dạng đường (Linear Distribution)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa sắp xếp nối tiếp nhau thành một đường thẳng hoặc đường cong.
      </p>
      <p>
        Kiểu phân bố này mang <strong>mức độ nghi ngờ ác tính cao</strong>, vì nó gợi ý sự lắng đọng cặn canxi dọc theo lòng của một ống dẫn sữa duy nhất.
      </p>
      <p>
        Mặc dù cả vôi hóa mạch máu và vôi hóa que lớn đều có thể sắp xếp theo dạng đường, nhưng hình thái đặc trưng lành tính kinh điển của chúng (đường ray xe lửa hoặc que nhẵn dày &gt; 1 mm) giúp dễ dàng loại trừ ác tính. Khi các hạt vôi hóa dạng đường có hình thái đa hình mịn hoặc dạng đường mảnh, đây là dấu hiệu chỉ điểm kinh điển của DCIS.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig1.jpg" alt="Figure 1 - LINEAR distribution of fine pleomorphic calcifications (arrow) (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa đa hình mịn phân bố dạng đường (mũi tên), nằm cạnh cụm vôi hóa không đồng nhất thô (đầu mũi tên) (DM).</strong> Giải phẫu bệnh: <em>DCIS (tại dải vôi hóa mũi tên); U sợi tuyến ổn định (tại cụm vôi hóa đầu mũi tên)</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig2.jpg" alt="Figure 2 - LINEAR fine pleomorphic and round (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa đa hình mịn và hạt tròn phân bố dạng đường (DM).</strong> Giải phẫu bệnh: <em>Xơ hóa mô đệm lành tính (Benign stromal fibrosis)</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig3.jpg" alt="Figure 3 - LINEAR fine pleomorphic and fine linear (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa đa hình mịn và dạng đường mảnh phân bố dạng đường (DM).</strong> Giải phẫu bệnh: <em>DCIS, độ mô học trung bình</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig4.jpg" alt="Figure 4 - LINEAR round calcifications (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa tròn phân bố dạng đường (DM).</strong> Mặc dù hình thái hạt tròn trông lành tính, sự phân bố thành dải đường thẳng thúc đẩy chỉ định sinh thiết. Giải phẫu bệnh: <em>Lành tính</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig5.jpg" alt="Figure 5 - LINEAR fine linear calcifications (oval) (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Vôi hóa dạng đường mảnh phân bố dạng đường (khoanh bầu dục) (DM).</strong> Đồng thời có các vôi hóa thô và không đồng nhất thô lân cận (mũi tên). Giải phẫu bệnh của vùng khoanh tròn: <em>DCIS</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_linear_fig6.jpg" alt="Figure 6 - LINEAR fine pleomorphic (DM magnification)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Vôi hóa đa hình mịn phân bố dạng đường (DM phóng đại).</strong> Dải vôi sắc nhọn sắp xếp theo trục ống tuyến. Giải phẫu bệnh: <em>DCIS</em>.</figcaption>
        </figure>
      </div>

      <h3 id="dist-segmental">e. Phân bố theo phân thùy (Segmental Distribution)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Vôi hóa phân bố theo phân thùy thường được sắp xếp theo hình tam giác hoặc hình nón, với <strong>đỉnh nhọn luôn hướng về phía núm vú</strong> trên ít nhất một hướng chụp nhũ ảnh.
      </p>
      <p>
        Sự sắp xếp hình tam giác này được tạo thành từ nhiều đường canxi nội ống hợp lưu lại và hội tụ về phía núm vú, hoàn toàn tương ứng với phân bố giải phẫu của một thùy tuyến vú và các nhánh ống dẫn sữa của nó.
      </p>
      <p>
        <strong>Mức độ nghi ngờ ác tính cao nhất:</strong> Phân bố theo phân thùy có mức độ nghi ngờ ác tính rất cao, vì nó chỉ điểm sự lắng đọng tế bào ung thư lan rộng trong nhiều nhánh của một hệ thống ống dẫn sữa. Kiểu phân bố này cảnh báo khả năng <strong>ung thư biểu mô tuyến vú lan rộng (extensive) hoặc đa ổ (multifocal)</strong>, có thể làm thay đổi hoàn toàn chiến lược phẫu thuật (từ phẫu thuật bảo tồn sang phẫu thuật đoạn nhũ). Mặc dù có những nguyên nhân lành tính (như vôi que lớn), sự xuất hiện của phân bố theo phân thùy khi hình thái không phải là lành tính điển hình luôn là một dấu hiệu báo động đỏ.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/dist_segmental_fig1.jpg" alt="Figure 1 - SEGMENTAL fine linear and fine pleomorphic (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Vôi hóa dạng đường mảnh và đa hình mịn phân bố theo phân thùy (DM).</strong> Hình tam giác hội tụ về núm vú. Giải phẫu bệnh: <em>DCIS độ mô học cao (High grade DCIS)</em>.</figcaption>
      </figure>

      <figure class="my-6">
        <img src="/posts/birads-v2025-calcifications/dist_segmental_fig2.jpg" alt="Figure 2 - SEGMENTAL fine linear-branching extensive (SM & Specimen)" class="rounded-xl shadow border border-slate-200 mx-auto" />
        <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Vôi hóa dạng đường mảnh phân nhánh lan rộng phân bố theo phân thùy.</strong> (A) Hướng CC và (B) Hướng MLO trên nhũ ảnh tổng hợp (SM); (C) X-quang bệnh phẩm đoạn nhũ (DM hướng trán coronal). Các đầu mũi tên chỉ các marker kim loại đánh dấu sinh thiết lõi; mũi tên trắng chỉ núm vú nhìn trực diện trên bệnh phẩm. Giải phẫu bệnh: <em>Ung thư biểu mô ống xâm nhập (IDC) và DCIS lan rộng</em>.</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_segmental_fig3.jpg" alt="Figure 3 - SEGMENTAL fine pleomorphic, fine linear and coarse heterogeneous (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Vôi hóa đa hình mịn, đường mảnh và không đồng nhất thô phân bố theo phân thùy (DM).</strong> Tổn thương chiếm một thùy giải phẫu lớn. Giải phẫu bệnh: <em>DCIS, độ mô học trung bình</em>.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-calcifications/dist_segmental_fig4.jpg" alt="Figure 4 - SEGMENTAL round, amorphous and coarse heterogeneous (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Vôi hóa tròn, vô định hình và không đồng nhất thô phân bố theo phân thùy (SM).</strong> Tổn thương ổn định qua nhiều năm theo dõi, lành tính.</figcaption>
        </figure>
      </div>

      <h2 id="phan-5-ma-tran-chan-doan">5. Bảng tổng hợp đối chiếu lâm sàng: Ma trận Hình thái × Phân bố & Phân loại BI-RADS</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>📋</span> Ma trận chẩn đoán kết hợp Hình thái & Phân bố vôi hóa (Ban biên tập tổng hợp)
        </h4>
        <p class="text-sm text-slate-700 mb-3">
          Bảng đối chiếu lâm sàng dưới đây được tổng hợp nhằm hỗ trợ bác sĩ đưa ra phân loại BI-RADS cuối cùng dựa trên sự kết hợp giữa <strong>Hình thái học (hàng dọc)</strong> và <strong>Kiểu phân bố (hàng ngang)</strong>:
        </p>
        <div class="overflow-x-auto my-3">
          <table class="min-w-full border-collapse border border-slate-300 text-sm">
            <thead>
              <tr class="bg-slate-200 text-slate-800">
                <th class="border border-slate-300 p-2 text-left">Hình thái (Morphology)</th>
                <th class="border border-slate-300 p-2 text-center">Lan tỏa (Diffuse)</th>
                <th class="border border-slate-300 p-2 text-center">Vùng (Regional)</th>
                <th class="border border-slate-300 p-2 text-center">Thành cụm (Grouped)</th>
                <th class="border border-slate-300 p-2 text-center">Dạng đường (Linear)</th>
                <th class="border border-slate-300 p-2 text-center font-bold">Theo phân thùy (Segmental)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Lành tính điển hình</strong> (Da, mạch máu, thô, que lớn, viền, lắng lớp)</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2 (nếu là que/mạch)</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2 (nếu là que lớn)</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2 font-medium"><strong>Hạt tròn (Round)</strong></td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2 (đối xứng hai bên)</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2</td>
                <td class="border border-slate-300 p-2 text-center text-amber-700 font-semibold">BI-RADS 3 (mới) / BI-RADS 2 (ổn định)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4 (cần sinh thiết)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4 (nguy cơ DCIS)</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Vô định hình (Amorphous)</strong></td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2 (hai bên) / BI-RADS 4 (một bên)</td>
                <td class="border border-slate-300 p-2 text-center text-amber-700 font-semibold">BI-RADS 3 (ổn định) / BI-RADS 4B (mới)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B (sinh thiết)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B (sinh thiết)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B / 4C (sinh thiết)</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2 font-medium"><strong>Không đồng nhất thô (Coarse Heterogeneous)</strong></td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">BI-RADS 2 (đa ổ hai bên)</td>
                <td class="border border-slate-300 p-2 text-center text-amber-700 font-semibold">BI-RADS 4B</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B (sinh thiết)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B / 4C</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4C</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Đa hình mịn (Fine Pleomorphic)</strong></td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B (hiếm)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B / 4C</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-semibold">BI-RADS 4B / 4C</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-bold">BI-RADS 4C / 5</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-bold">BI-RADS 4C / 5</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2 font-medium"><strong>Dạng đường mảnh / Phân nhánh (Fine Linear / Branching)</strong></td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">BI-RADS 4C</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">BI-RADS 4C</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">BI-RADS 4C / 5</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">BI-RADS 5 (PPV ~90-100%)</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">BI-RADS 5 (PPV ~90-100%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="phan-6-key-points">6. Điểm cốt lõi thực hành lâm sàng (Key Points – Ban biên tập đúc kết)</h2>
      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">
          <span>📌</span> 10 Điểm cốt lõi thực hành cần nhớ về Vôi hóa Tuyến vú theo ACR BI-RADS® v2025
        </h4>
        <ul class="text-sm text-slate-700 space-y-1">
          <li><strong>1. Khái niệm vôi hóa hai chiều:</strong> Luôn phân tích vôi hóa dựa trên sự kết hợp độc lập giữa <em>Hình thái học (Morphology)</em> và <em>Kiểu phân bố (Distribution)</em>. Kiểu phân bố có giá trị dự báo ác tính không kém gì hình thái.</li>
          <li><strong>2. Loại bỏ thuật ngữ "Punctate":</strong> BI-RADS® 2025 chính thức loại bỏ từ "Punctate" vì không thể đo đạc chính xác kích thước vi mô trên thực tế và không tạo sự khác biệt phân tầng nguy cơ; tất cả đều được gọi chung là "Vôi hóa tròn" (Round).</li>
          <li><strong>3. Thay thế "Milk of Calcium" bằng "Layering":</strong> Tên gọi mới "Vôi hóa lắng lớp" (Layering) phản ánh chính xác diện mạo hình ảnh học. Tiêu chuẩn vàng chẩn đoán là sự thay đổi hình thái từ nốt mờ nhạt (smudgy) trên thế CC sang hình trăng lưỡi liềm / đáy chén trà cong lên trên thế nghiêng 90° (ML/LM).</li>
          <li><strong>4. Đơn giản hóa thuật ngữ lành tính:</strong> "Popcorn-like" chuyển thành "Coarse" (Vôi hóa thô); "Secretory" chuyển thành "Large Rod-Like" (Vôi hóa que lớn); "Rim or Eggshell" chuyển thành "Rim" (Vôi hóa viền).</li>
          <li><strong>5. Quy luật xử trí theo tổn thương nghi ngờ nhất:</strong> Khi trong một vùng tổn thương xuất hiện nhiều hình thái vôi hóa khác nhau cùng tồn tại (ví dụ: vôi thô lành tính lẫn với vôi đa hình mịn), chiến lược xử trí bắt buộc phải tuân theo <em>hình thái có độ nghi ngờ ác tính cao nhất</em>.</li>
          <li><strong>6. Nguyên tắc đếm số lượng hạt vôi thành cụm:</strong> Quy ước thành cụm là ≥ 5 hạt vôi trong 1 cm hoặc &gt; 5 hạt trong 2 cm. Tuy nhiên, <em>hình thái quan trọng hơn số lượng</em>: nếu hạt vôi có dạng đa hình mịn hoặc phân nhánh, phải chỉ định sinh thiết ngay cả khi chỉ có dưới 5 hạt.</li>
          <li><strong>7. Phân bố theo phân thùy (Segmental) là báo động đỏ:</strong> Phân bố hình tam giác hướng đỉnh về núm vú chỉ điểm ung thư biểu mô lan rộng theo toàn bộ thùy tuyến vú, là yếu tố tiên lượng quan trọng cho phẫu thuật viên cân nhắc đoạn nhũ thay vì bảo tồn.</li>
          <li><strong>8. Phân bố lan tỏa một bên (Unilateral Diffuse):</strong> Vôi hóa lan tỏa hai bên hầu như luôn lành tính; nhưng vôi hóa phân bố lan tỏa chỉ xuất hiện đơn độc một bên vú cần cảnh giác cao độ với DCIS lan tỏa.</li>
          <li><strong>9. Ý nghĩa tim mạch của vôi hóa mạch máu (BAC):</strong> Vôi hóa động mạch vú (BAC) phản ánh nguy cơ bệnh mạch vành và xơ vữa động mạch toàn thân; cần ghi nhận và tư vấn sức khỏe tim mạch thích hợp cho người bệnh.</li>
          <li><strong>10. Vai trò của DBT và thế phóng đại:</strong> DBT vượt trội trong bộc lộ vôi hóa mạch máu, vôi hóa da và tương quan mô mềm; tuy nhiên, thế chụp phóng đại ép khu trú 2D (spot magnification DM) ở hai hướng CC và ML 90° vẫn giữ vai trò thiết yếu để đánh giá chi tiết hình thái vi vôi hóa nghi ngờ và hiện tượng lắng lớp.</li>
        </ul>
      </div>

      <h2 id="phan-7-pitfalls">7. Cạm bẫy chẩn đoán & Sai lầm thường gặp (Diagnostic Pitfalls)</h2>
      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> 8 Cạm bẫy chẩn đoán chết người khi phân tích Vôi hóa trên Nhũ ảnh
        </h4>
        <ul class="text-sm text-slate-700 space-y-1">
          <li><strong>Cạm bẫy 1 – Bỏ sót vôi hóa da và chỉ định sinh thiết nhầm:</strong> Nhiều cụm vôi hóa da trên thế chụp thông thường có thể chiếu chồng vào mô tuyến và trông giống hệt cụm vôi hóa trong nhu mô. <em>Giải pháp:</em> Luôn chụp thế tiếp tuyến (tangential view) kèm dán hạt chì BB ngoài da hoặc dùng DBT để chứng minh hạt vôi nằm hoàn toàn trong lớp bì trước khi quyết định sinh thiết.</li>
          <li><strong>Cạm bẫy 2 – Bỏ qua chụp phóng đại hướng nghiêng 90° (ML/LM) khi nghi ngờ vôi hóa lắng lớp:</strong> Trên phim CC, vôi hóa lắng lớp xuất hiện dạng nốt mờ nhạt rất giống vôi hóa vô định hình (Amorphous) – một chỉ định sinh thiết BI-RADS 4. Nếu không chụp hướng nghiêng 90° với chùm tia ngang song song mặt đất để thấy hình đáy chén trà (tea-cupping), bệnh nhân sẽ phải chịu một cuộc sinh thiết định vị không cần thiết.</li>
          <li><strong>Cạm bẫy 3 – Nhầm lẫn vôi hóa que lớn giai đoạn sớm hoặc đứt đoạn với vôi hóa dạng đường mảnh ác tính:</strong> Vôi hóa que lớn đứt đoạn có thể có những đoạn ngắn trông giống dạng đường. <em>Chìa khóa phân biệt:</em> Vôi que lớn có khẩu kính dày (&gt; 1 mm), đường bờ nhẵn bóng và phân nhánh xuôi dòng; trong khi vôi đường mảnh ác tính có khẩu kính &lt; 0.5 mm, bờ nham nhở, gồ ghề và không thon nhỏ ở đầu que.</li>
          <li><strong>Cạm bẫy 4 – Chủ quan với vôi hóa hạt tròn khi phân bố theo phân thùy hoặc dạng đường:</strong> Cho rằng vôi hóa hạt tròn luôn luôn lành tính là một sai lầm chết người. Khi vôi hóa tròn phân bố thành dải thẳng hàng dọc ống dẫn sữa hoặc hình tam giác theo phân thùy (xem Figure 5 phần Round), nguy cơ DCIS là rất cao và bắt buộc phải sinh thiết.</li>
          <li><strong>Cạm bẫy 5 – Xem thường vôi hóa vô định hình mới xuất hiện:</strong> Vôi hóa vô định hình có PPV ác tính từ 8% đến 20% (BI-RADS 4B). Tuyệt đối không xếp vôi hóa vô định hình mới xuất hiện thành cụm vào BI-RADS 3 (theo dõi 6 tháng) mà phải chỉ định sinh thiết mô học dưới định vị X-quang.</li>
          <li><strong>Cạm bẫy 6 – Bỏ sót ung thư biểu mô tái phát cạnh vôi hóa chỉ khâu:</strong> Nhìn thấy các đường vôi hóa chỉ khâu có thể tạo cảm giác an tâm giả tạo là biến đổi hậu phẫu lành tính. Phải luôn soi quét tỉ mỉ vùng sẹo mổ: nếu xuất hiện các hạt vôi đa hình mịn hoặc không đồng nhất thô mới xen lẫn chỉ khâu (xem Figure 5 phần Suture), đó là dấu hiệu của ung thư tái phát.</li>
          <li><strong>Cạm bẫy 7 – Chấp nhận kết quả sinh thiết lõi là lành tính khi vôi hóa có dạng đường mảnh phân nhánh:</strong> Vôi hóa dạng đường mảnh và phân nhánh có xác suất ác tính lên tới 70-100%. Nếu kết quả sinh thiết lõi kim trả về là tổn thương biểu mô lành tính không có atypia, đây là tình huống <em>bất tương thích mô bệnh học - hình ảnh học (pathologic-radiologic discordance)</em>. Phải hội chẩn giải phẫu bệnh hoặc chỉ định sinh thiết mở/cắt bỏ trọn vẹn tổn thương.</li>
          <li><strong>Cạm bẫy 8 – Đánh giá sót các hạt vi vôi hóa nhỏ trên nhũ ảnh 3D cắt lớp (DBT):</strong> Mặc dù DBT xuất sắc trong phát hiện khối và xáo trộn cấu trúc, độ phân giải không gian của các lát cắt tái tạo DBT đôi khi có thể làm mờ nhẹ các hạt vi vôi hóa cực mịn so với nhũ ảnh kỹ thuật số 2D (DM) hoặc ảnh phóng đại trực tiếp. Vì vậy, luôn kết hợp đối chiếu với ảnh 2D phóng đại cao khi phân tích vi vôi hóa nghi ngờ.</li>
        </ul>
      </div>

    `,
    views: 1540,
    readTime: "18 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 48-106)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "Vôi hóa tuyến vú", "Calcifications", "DCIS", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
  }
];
