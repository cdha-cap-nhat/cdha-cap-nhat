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
          Bài giảng được biên dịch nguyên văn đầy đủ từ Cẩm nang <em>ACR BI-RADS® v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ, tích hợp đầy đủ toàn bộ hệ thống hình ảnh minh họa thực tế về xáo trộn cấu trúc (Architectural Distortion) và các dạng bất đối xứng (Asymmetries). Nội dung dịch nguyên văn từ bài giảng hiển thị chữ đen trên nền trắng tiêu chuẩn; các phần tổng hợp lưu đồ, điểm cốt lõi và cạm bẫy lâm sàng được đóng khung màu riêng biệt để dễ dàng nhận diện và kiểm chứng.
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
        <li><strong>Xác định xảo ảnh chồng hình:</strong> Phần lớn bất đối xứng một bình diện là do xảo ảnh cộng dồn/chồng lấp của các cấu trúc tuyến vú bình thường ở các lớp cắt khác nhau (summation artifact). Nhũ ảnh 3D (DBT) là công cụ lý tưởng giúp phân tách từng lớp mô, cho phép bác sĩ khẳng định chắc chắn tổn thương chỉ do chồng hình và không cần gọi lại bệnh nhân làm thêm xét nghiệm.</li>
        <li><strong>Dấu hiệu cảnh báo tổn thương thực thể:</strong> Nếu tổn thương nghi vấn tiếp tục nhìn thấy liên tục trên <em>nhiều lát cắt DBT kế tiếp nhau</em> (chứng tỏ tổn thương có thể tích thực sự trong không gian 3 chiều), bệnh nhân <strong>bắt buộc phải được gọi lại (recall)</strong> để chụp ép khu trú hoặc siêu âm kiểm tra.</li>
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

      <h2 id="phan-7-bat-doi-xung-khu-tru">7. Bất đối xứng khu trú (Focal Asymmetry) & Hệ thống Ca lâm sàng (Figure 1 – Figure 5)</h2>
      <p>
        <strong>Định nghĩa:</strong> <em>Bất đối xứng khu trú (Focal Asymmetry)</em> là một vùng mô giới hạn trong <strong>dưới một góc phần tư (&lt; 1 quadrant)</strong> của tuyến vú và không đối xứng với vị trí tương ứng ở vú đối bên. Dấu hiệu này nhìn thấy được và có thể biểu hiện tương tự nhau trên <strong>nhiều bình diện nhũ ảnh khác nhau</strong> (do đó là một tổn thương thực thể chứ không phải do sự chồng hình của các cấu trúc vú bình thường), nhưng <em>thiếu đường bờ cong lồi ra ngoài, thiếu trung tâm đậm đặc cản quang và thiếu độ nổi bật rõ nét của một khối u (mass)</em>. Đường bờ của một bất đối xứng khu trú có <strong>dạng cong lõm (concave contour)</strong> và bên trong thường có <strong>mỡ xen kẽ (interspersed fat)</strong>.
      </p>

      <h3>Lưu ý chẩn đoán & Thay đổi bản chất tổn thương</h3>
      <p>
        Cần lưu ý rằng đôi khi một dấu hiệu được mô tả đúng là bất đối xứng khu trú trên phim nhũ ảnh tầm soát (tức là thấy được trên cả hai thế chụp tiêu chuẩn MLO và CC) có thể khi chụp nhũ ảnh chẩn đoán chuyên sâu (diagnostic mammography) lại được xác định là hai dấu hiệu khác nhau (nghĩa là hai vùng bất đối xứng riêng biệt, mỗi vùng đại diện cho mô bình thường chồng lấp lên nhau) hoặc ngược lại, bộc lộ bản chất thành một <strong>khối u thực sự (an actual mass)</strong>.
      </p>
      <p>
        Một bất đối xứng khu trú <strong>mới xuất hiện (new)</strong> hoặc <strong>đang tăng kích thước hay tăng độ nổi bật/đậm độ (increasing in size or conspicuity)</strong> khi so sánh với các phim nhũ ảnh trước đó có độ nghi ngờ ác tính cao hơn nhiều so với một bất đối xứng khu trú phát hiện trên phim nhũ ảnh nền đầu tiên (baseline mammogram). Hai thực thể này bắt buộc phải được xử trí theo các chiến lược hoàn toàn khác nhau:
      </p>
      <ul>
        <li><strong>Chỉ định sinh thiết (Biopsy):</strong> Đối với bất đối xứng khu trú mới xuất hiện hoặc đang tiến triển tăng kích thước / đậm độ.</li>
        <li><strong>Theo dõi ngắn hạn (Short-term follow-up - BI-RADS 3):</strong> Đối với bất đối xứng khu trú phát hiện trên phim nhũ ảnh nền ban đầu, với giả định rằng không phát hiện thêm bất kỳ dấu hiệu nhũ ảnh hoặc siêu âm nghi ngờ nào khác trong quá trình đánh giá chẩn đoán toàn diện.</li>
      </ul>

      <h3>Loại bỏ thuật ngữ "Developing Asymmetry" & Ý nghĩa lâm sàng then chốt</h3>
      <p>
        Mặc dù thuật ngữ mô tả <em>"Bất đối xứng tiến triển" (Developing Asymmetry)</em> đã chính thức <strong>bị bãi bỏ / ngừng sử dụng</strong> như một từ mô tả độc lập trong ấn bản BI-RADS® v2025 này, nhưng tầm quan trọng lâm sàng của một bất đối xứng khu trú mới xuất hiện hoặc ngày càng tăng độ nổi bật/đậm độ vẫn phải được <strong>đặc biệt nhấn mạnh</strong>.
      </p>
      <p>
        Nếu được xác nhận là một <em>tổn thương thực thể</em> sau khi đánh giá nhũ ảnh chẩn đoán, <strong>khuyến cáo sinh thiết mô học nên được đưa ra ngay cả khi khảo sát siêu âm không tìm thấy tổn thương tương ứng (in the absence of an ultrasound correlate)</strong>. Lý do là vì giá trị dự báo dương tính (PPV) ác tính của tổn thương này nằm trong khoảng <strong>7.4% – 12.8% khi phát hiện trong tầm soát</strong> và lên tới <strong>19.7% – 26.7% trong bối cảnh chẩn đoán</strong> [31, 32].
      </p>

      <h3>Hệ thống Ca bệnh minh họa: Bất đối xứng khu trú (Figure 1 – Figure 5)</h3>

      <figure>
        <img src="/posts/birads-v2025/fig15_focal_asymmetry_fig1_benign_stable.jpg" alt="Figure 1 – FOCAL ASYMMETRY (DM)" />
        <figcaption><strong>Figure 1 – BẤT ĐỐI XỨNG KHU TRÚ (DM).</strong> Mô đậm độ không đối xứng chiếm diện tích dưới một góc phần tư trên trong của vú phải. Được coi là lành tính. Tính ổn định lâu dài được quan sát và khẳng định qua việc so sánh đối chiếu với các lần khám trước đó.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig16_focal_asymmetry_fig2_idc.jpg" alt="Figure 2 – FOCAL ASYMMETRY (DM)" />
        <figcaption><strong>Figure 2 – BẤT ĐỐI XỨNG KHU TRÚ (DM).</strong> Dấu hiệu này được quan sát thấy trên cả hai thế chụp tầm soát CC và MLO và biểu hiện tương tự nhau trên cả hai thế (ở đây chỉ hiển thị một hình phóng to chi tiết). Vùng mô có đường bờ cong lõm, có mỡ xen kẽ, và không đi kèm khối u, xáo trộn cấu trúc hay vôi hóa bất thường. Khảo sát siêu âm định hướng (targeted US) không tìm thấy tổn thương tương ứng. Dấu hiệu này ban đầu được đánh giá là nhiều khả năng lành tính (BI-RADS 3) sau quy trình đánh giá hình ảnh chẩn đoán toàn diện, nhưng sự tăng nhẹ kích thước trong khoảng thời gian theo dõi 6 tháng sau đó đã dẫn đến xếp loại nghi ngờ (BI-RADS 4). Giải phẫu bệnh (sinh thiết lõi kim định vị nhũ ảnh stereotactic core biopsy): Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma - IDC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig17_focal_asymmetry_fig3_idc.jpg" alt="Figure 3 – FOCAL ASYMMETRY (DM). (A) MLO and (B) CC" />
        <figcaption><strong>Figure 3 – BẤT ĐỐI XỨNG KHU TRÚ (DM). (A) Thế MLO và (B) Thế CC.</strong> Dấu hiệu này không có vùng mô tương ứng ở vú đối bên và là tổn thương mới xuất hiện so với các lần chụp trước đó. Mặc dù nhận diện rõ trên cả hai bình diện, nó không thỏa mãn các tiêu chuẩn của một khối u. Đánh giá chẩn đoán chuyên sâu luôn được chỉ định đối với các bất đối xứng khu trú mới xuất hiện hoặc tăng độ nổi bật/đậm độ. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma - IDC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig18_focal_asymmetry_fig4_ilc_mammogram.jpg" alt="Figure 4 – FOCAL ASYMMETRY. (A) MLO, (B) CC, (C, D) prior exam" />
        <figcaption><strong>Figure 4 – BẤT ĐỐI XỨNG KHU TRÚ.</strong> Một bất đối xứng khu trú sờ thấy được trên lâm sàng (vị trí được chỉ điểm bởi hạt đánh dấu da hình tam giác) được ghi nhận ở phần trên vú phải (DM) trên thế (A) MLO và thế (B) CC. Đây là tổn thương mới xuất hiện khi so sánh với phim chụp trước đó (C: MLO trước đó, D: CC trước đó). Giải phẫu bệnh: Ung thư biểu mô tiểu thùy xâm nhập (Invasive lobular carcinoma - ILC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig19_focal_asymmetry_fig4_ilc_us.jpg" alt="Figure 4 – (Continued) FOCAL ASYMMETRY. Targeted US (E)" />
        <figcaption><strong>Figure 4 (Tiếp theo) – BẤT ĐỐI XỨNG KHU TRÚ.</strong> Siêu âm định hướng (E) cho thấy một tổn thương không tạo khối giảm âm có bóng lưng tương ứng (hypoechoic shadowing non-mass lesion). Sinh thiết lõi kim (core biopsy) được thực hiện dưới hướng dẫn của siêu âm. Giải phẫu bệnh: Ung thư biểu mô tiểu thùy xâm nhập (Invasive lobular carcinoma - ILC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig20_focal_asymmetry_fig5_dcis.jpg" alt="Figure 5 – FOCAL ASYMMETRY (arrows). (A) MLO and (B) CC (DM)" />
        <figcaption><strong>Figure 5 – BẤT ĐỐI XỨNG KHU TRÚ (mũi tên). (A) Thế MLO và (B) Thế CC (DM).</strong> Bất đối xứng khu trú này (mũi tên) nhìn thấy rõ hơn trên thế MLO so với thế CC nhưng là tổn thương mới xuất hiện, khẳng định sự cần thiết phải đánh giá chẩn đoán bổ sung. Lưu ý các điểm đánh dấu nốt ruồi hình tròn tình cờ và điểm đánh dấu núm vú bằng kim loại. Giải phẫu bệnh: Ung thư biểu mô thể ống tại chỗ (DCIS).</figcaption>
      </figure>

      <h2 id="phan-8-bang-so-sanh">8. Bảng tổng hợp đối chiếu 4 dấu hiệu & Lưu đồ xử trí</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Bảng tổng hợp đối chiếu 4 dấu hiệu & Lưu đồ xử trí (Ban biên tập đúc kết):</h4>
        <div class="overflow-x-auto my-3">
        <table>
          <thead>
            <tr>
              <th>Đặc Điểm Nhũ Ảnh</th>
              <th>Xáo Trộn Cấu Trúc (Architectural Distortion)</th>
              <th>Bất Đối Xứng Toàn Thể (Global Asymmetry)</th>
              <th>Bất Đối Xứng (Asymmetry)</th>
              <th>Bất Đối Xứng Khu Trú (Focal Asymmetry)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Số bình diện quan sát</strong></td>
              <td>Thường 2 bình diện hoặc chỉ thấy trên các lát cắt DBT.</td>
              <td>Thấy trên cả 2 bình diện (CC &amp; MLO).</td>
              <td><strong>Chỉ duy nhất 1 bình diện</strong> (CC hoặc MLO).</td>
              <td><strong>Cả 2 bình diện</strong> (thấy tương tự trên CC &amp; MLO).</td>
            </tr>
            <tr>
              <td><strong>Kích thước &amp; Phạm vi</strong></td>
              <td>Khu trú quanh tâm co rút nan hoa.</td>
              <td>Lan rộng <strong>&ge; 1 góc phần tư vú</strong>.</td>
              <td>Khu trú ở 1 bình diện chiếu.</td>
              <td>Giới hạn <strong>&lt; 1 góc phần tư vú</strong>.</td>
            </tr>
            <tr>
              <td><strong>Đường bờ &amp; Cấu tạo mô</strong></td>
              <td>Đường thẳng mảnh tỏa nan hoa, co kéo bờ mô, không có khối.</td>
              <td>Phân bố rộng của mô sợi tuyến bình thường không cân xứng.</td>
              <td>Thường bờ cong lõm, có mỡ xen kẽ.</td>
              <td><strong>Bờ cong lõm (concave)</strong>, có <strong>mỡ xen kẽ</strong>, thiếu trung tâm đậm đặc.</td>
            </tr>
            <tr>
              <td><strong>Tiêu chuẩn phân biệt với Khối u</strong></td>
              <td>Không có khối cản quang tròn/bầu dục rõ.</td>
              <td>Diện tích quá lớn, không tạo khối.</td>
              <td>Biến mất trên bình diện thứ 2.</td>
              <td><strong>Thiếu đường bờ cong lồi</strong> và thiếu độ đậm đặc trung tâm của khối u.</td>
            </tr>
            <tr>
              <td><strong>Bản chất thường gặp</strong></td>
              <td>IDC, ILC, Sẹo hình sao (Radial scar), Sẹo phẫu thuật cũ, Bệnh tuyến xơ cứng.</td>
              <td>Biến thể phát triển bình thường của mô sợi tuyến; hiếm gặp: ILC xâm nhập diện rộng.</td>
              <td>Xảo ảnh chồng mô (Summation artifact); Khối u hoặc Bất đối xứng khu trú bị che.</td>
              <td>Đảo mô tuyến bình thường ổn định; Tổn thương mới: <strong>IDC, ILC, DCIS</strong>.</td>
            </tr>
            <tr>
              <td><strong>Giá trị dự báo dương tính (PPV)</strong></td>
              <td>10% &ndash; 30% trên DBT, cao hơn trên DM.</td>
              <td>Rất thấp (&lt; 2%) nếu ổn định lâu dài và không có triệu chứng.</td>
              <td>Rất thấp nếu chỉ do xảo ảnh chồng lấp.</td>
              <td><strong>7.4% &ndash; 12.8%</strong> (tầm soát), <strong>19.7% &ndash; 26.7%</strong> (chẩn đoán) khi mới xuất hiện hoặc tăng kích thước.</td>
            </tr>
            <tr>
              <td><strong>Chiến lược xử trí vàng</strong></td>
              <td><strong>Chỉ định sinh thiết mô học</strong> (kể cả khi siêu âm âm tính), trừ khi có tiền sử mổ tương ứng.</td>
              <td>Nếu ổn định trên phim cũ: BI-RADS 2. Nếu mới hoặc kèm triệu chứng: Khảo sát chẩn đoán + Siêu âm.</td>
              <td>Khẳng định xảo ảnh bằng DBT (BI-RADS 1/2). Nếu tổn thương tồn tại: Gọi lại chụp ép khu trú + Siêu âm.</td>
              <td>Ổn định: BI-RADS 2; Phim nền: BI-RADS 3 (theo dõi 6 tháng); <strong>Mới hoặc tiến triển: Sinh thiết mô học</strong> (ngay cả khi siêu âm âm tính).</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <h2 id="phan-9-key-points">9. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Pitfalls)</h2>
      
      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">📌 Key Points (Điểm cốt lõi - Ban biên tập đúc kết):</h4>
        <ul>
          <li><strong>Phân biệt dứt khoát 3 dạng bất đối xứng:</strong>
            <ul>
              <li><em>Bất đối xứng toàn thể (Global):</em> Lan rộng &ge; 1 góc phần tư vú, thường là biến thể bình thường.</li>
              <li><em>Bất đối xứng một bình diện (Asymmetry):</em> Chỉ thấy trên duy nhất 1 thế chụp, đa số do xảo ảnh chồng mô.</li>
              <li><em>Bất đối xứng khu trú (Focal):</em> Thấy trên cả 2 thế chụp (&lt; 1 góc phần tư), bờ lõm, có mỡ xen kẽ, không có khối u.</li>
            </ul>
          </li>
          <li><strong>Ý nghĩa cảnh giác cao nhất của tổn thương mới:</strong> Việc loại bỏ thuật ngữ "Developing Asymmetry" không làm giảm tính chất nguy hiểm. Bất kỳ bất đối xứng khu trú nào mới xuất hiện hoặc tăng kích thước / đậm độ đều có PPV ác tính lên tới <strong>19.7% &ndash; 26.7%</strong> trong bối cảnh chẩn đoán.</li>
          <li><strong>Quy tắc vàng "Không từ bỏ sinh thiết vì siêu âm âm tính":</strong> Cả Xáo trộn cấu trúc và Bất đối xứng khu trú mới/tiến triển đều <strong>bắt buộc phải sinh thiết mô học</strong> (dưới định vị nhũ ảnh hoặc DBT) ngay cả khi siêu âm đối chiếu hoàn toàn bình thường (no ultrasound correlate).</li>
          <li><strong>Cảnh giác đặc biệt với Ung thư biểu mô tiểu thùy (ILC):</strong> ILC có đặc tính phát triển thâm nhiễm tế bào đơn độc theo dòng, không phá vỡ cấu trúc mô sợi tuyến xung quanh nên rất hiếm khi tạo khối rõ rệt mà thường chỉ biểu hiện dưới dạng bất đối xứng khu trú hoặc tổn thương không tạo khối giảm âm có bóng lưng trên siêu âm.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-2 flex items-center gap-2">⚠️ Diagnostic Pitfalls (Cạm bẫy lâm sàng - Ban biên tập lưu ý):</h4>
        <ul>
          <li><strong>Cạm bẫy 1: Giả xáo trộn cấu trúc (Pseudo-distortion):</strong> Do các cấu trúc dạng đường thẳng ở các độ sâu khác nhau vô tình chồng lấp tạo hiệu ứng giao nhau trên phim 2D. Khắc phục: Lăn chuột kiểm tra từng lát cắt mỏng DBT để tách lớp mô.</li>
          <li><strong>Cạm bẫy 2: An tâm giả tạo khi siêu âm âm tính ("No ultrasound correlate"):</strong> Đây là lỗi sai phổ biến nhất dẫn đến chậm trễ chẩn đoán ung thư vú. Nhiều bác sĩ sau khi xác nhận bất đối xứng khu trú trên nhũ ảnh chẩn đoán nhưng làm siêu âm không thấy khối u đã vội vàng hạ bậc xếp loại BI-RADS 2 hoặc BI-RADS 3. Nếu tổn thương là mới xuất hiện hoặc tiến triển, bắt buộc phải sinh thiết định vị nhũ ảnh/DBT.</li>
          <li><strong>Cạm bẫy 3: Bỏ qua sự tăng kích thước kín đáo trong khoảng theo dõi 6 tháng:</strong> Như minh họa ở Figure 2, tổn thương bất đối xứng khu trú ban đầu xếp BI-RADS 3 chỉ to nhẹ sau 6 tháng theo dõi, sinh thiết ra ung thư biểu mô thể ống xâm nhập (IDC). Do đó, việc đo đạc và so sánh trực tiếp song song với phim cũ là tối quan trọng.</li>
          <li><strong>Cạm bẫy 4: Xem thường bất đối xứng một bình diện:</strong> Dù đa số là lành tính do chồng ảnh, nhưng nếu tổn thương xuất hiện liên tục trên nhiều lát cắt DBT cùng vị trí, đó là tổn thương có thể tích thực sự và cần gọi lại làm chẩn đoán chuyên sâu ngay lập tức.</li>
        </ul>
      </div>
    `,
    views: 1250,
    readTime: "20 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 107-121)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "DBT", "Xáo trộn cấu trúc", "Bất đối xứng", "Bất đối xứng khu trú", "Focal Asymmetry", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
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
  },
  {
    id: "birads-2025-tong-quan-nhu-anh-va-dam-do-tuyen-vu",
    title: "Cẩm nang ACR BI-RADS® 2025: Tổng quan Nhũ ảnh, Bảng từ vựng Lexicon & Đậm độ tuyến vú (Breast Density)",
    slug: "birads-2025-tong-quan-nhu-anh-va-dam-do-tuyen-vu",
    date: "30 Tháng 10, 2026",
    updatedDate: "30 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "Nhũ ảnh", "X-quang", "BI-RADS 2025", "Đậm độ tuyến vú"],
    categorySlugs: ["vu", "nhu-anh", "x-quang", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-breast-density/density_fig13.jpg",
    excerpt: "Cập nhật toàn diện từ Cẩm nang ACR BI-RADS® v2025 về nền tảng Nhũ ảnh: Phân biệt Nhũ ảnh tầm soát và Chẩn đoán, Bảng danh mục từ vựng Lexicon tổng thể (Table 1), và Phân loại Đậm độ tuyến vú (Breast Density a-b-c-d) theo quy định liên bang mới nhất của FDA Hoa Kỳ, kèm đầy đủ 16 ca bệnh đối chiếu nhũ ảnh 2D (DM) và 3D tổng hợp (SM).",
    content: [
      "Cẩm nang ACR BI-RADS® v2025 phân định rõ ràng giữa Nhũ ảnh tầm soát (Screening) cho bệnh nhân không triệu chứng và Nhũ ảnh chẩn đoán (Diagnostic) nhằm trả lời câu hỏi lâm sàng cụ thể.",
      "Bảng danh mục từ vựng Nhũ ảnh BI-RADS® v2025 (Table 1) hệ thống hóa toàn diện các dấu hiệu: Khối u, Vôi hóa, Xáo trộn cấu trúc, Các dạng bất đối xứng, Hạch bạch huyết, Tổn thương da, Giãn ống tuyến và Các dấu hiệu phối hợp.",
      "Đậm độ tuyến vú (Breast Density) được phân thành 4 nhóm (a-b-c-d) dựa trên nguy cơ che khuất ung thư (masking effect) chứ không chỉ dựa vào phần trăm thể tích; quy định mới của FDA Hoa Kỳ bắt buộc thông báo kết quả đậm độ trực tiếp cho người bệnh kèm 16 hình ảnh minh họa thực tế."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Nền tảng Nhũ ảnh, Từ vựng & Đậm độ Tuyến vú
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Đây là bài giảng nền tảng mở đầu cho toàn bộ chương Nhũ ảnh (Mammography) trong Cẩm nang <em>ACR BI-RADS® v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology - ACR), bao gồm từ trang 5 đến trang 18 của tài liệu gốc. Bài viết cung cấp góc nhìn toàn diện về sự khác biệt cốt lõi giữa Nhũ ảnh tầm soát và Chẩn đoán, công bố Bảng danh mục từ vựng tổng thể (Table 1: Mammography Lexicon Overview), và phân tích chuyên sâu về <strong>Đậm độ tuyến vú (Breast Density)</strong> theo luật định mới nhất của Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) ban hành tháng 9/2024 và cập nhật tháng 7/2025.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Toàn bộ <strong>16 ca bệnh và hình ảnh minh họa nhũ ảnh thực tế</strong> (Figures 1 đến 16) đối chiếu giữa nhũ ảnh 2D kỹ thuật số (DM) và nhũ ảnh tổng hợp 3D (SM) được xuất bản nguyên bản; các nội dung dịch nguyên văn từ bài giảng giữ màu chữ đen trên nền trắng tiêu chuẩn, trong khi các phần phân tích đối chiếu lâm sàng, lưu đồ tầm soát bổ sung và cạm bẫy chẩn đoán do ban biên tập tổng hợp được đóng khung màu chuyên biệt để quý đồng nghiệp tiện theo dõi.
        </p>
      </div>

      <h2 id="phan-1-gioi-thieu-tong-quan">1. Cấu trúc tổng thể chương Nhũ ảnh trong Cẩm nang BI-RADS® v2025 (Introduction)</h2>
      <p>
        Chương Nhũ ảnh (Mammography) của Cẩm nang <em>ACR BI-RADS® v2025</em> được chia thành bảy phần chính (Sections I đến VII) cùng hai phụ lục (Appendices A và B):
      </p>
      <ul>
        <li><strong>SECTION I – Các dạng khảo sát nhũ ảnh (Types of Mammographic Studies):</strong> Phân định rõ ràng giữa nhũ ảnh tầm soát (screening) và nhũ ảnh chẩn đoán (diagnostic). Thảo luận mục đích, bằng chứng y học thực chứng về hiệu quả giảm tỷ lệ tử vong, các phương thức thu nhận và hiển thị hình ảnh (DM, DBT, SM), cũng như các công nghệ nhũ ảnh đang phát triển.</li>
        <li><strong>SECTION II – Bảng danh mục từ vựng Nhũ ảnh (Breast Imaging Lexicon – Mammography):</strong> Hệ thống thuật ngữ mô tả tổn thương nhũ ảnh được chuẩn hóa qua nhiều năm bởi Ủy ban ACR BI-RADS. Cung cấp các định nghĩa rõ ràng, súc tích nhằm tạo ra các báo cáo nhũ ảnh tiêu chuẩn hóa và có tính nhất quán cao giữa các cơ sở y tế.</li>
        <li><strong>SECTION III – Đậm độ tuyến vú (Breast Density):</strong> Định nghĩa đậm độ nhu mô vú, giải thích ý nghĩa lâm sàng về hiệu ứng che khuất (masking effect) và nguy cơ ung thư vú, đồng thời cập nhật các yêu cầu pháp lý bắt buộc trong báo cáo nhũ ảnh do FDA Hoa Kỳ ban hành.</li>
        <li><strong>SECTION IV – Các dấu hiệu tổn thương (Findings):</strong> Mô tả chi tiết từng thuật ngữ trong bảng từ vựng kèm hình ảnh minh họa nhũ ảnh thực tế, giải thích các điểm thay đổi so với ấn bản thứ 5 (5th Edition). Các thuật ngữ được sắp xếp theo trình tự từ ít nghi ngờ nhất đến nghi ngờ ác tính cao nhất.</li>
        <li><strong>SECTION V – Hệ thống báo cáo kết quả (Reporting System):</strong> Cung cấp quy trình tiếp cận có tổ chức để phân tích hình ảnh và cấu trúc văn bản kết quả nhũ ảnh. Nhấn mạnh việc sử dụng phần mềm báo cáo chuẩn hóa để tham gia Cơ sở dữ liệu Nhũ ảnh Quốc gia Hoa Kỳ (ACR National Mammography Database - NMD).</li>
        <li><strong>SECTION VI – Hướng dẫn thực hành (Guidance):</strong> Giải đáp các thắc mắc chuyên môn thực tế, giải thích cơ sở lý luận của các thay đổi thuật ngữ và phân loại, kết hợp giữa bằng chứng y văn và sự đồng thuận của các chuyên gia hàng đầu.</li>
        <li><strong>SECTION VII – Các câu hỏi thường gặp (Frequently Asked Questions):</strong> Trực tiếp giải quyết các câu hỏi và tình huống lâm sàng phổ biến nhất trong thực tế đọc nhũ ảnh.</li>
        <li><strong>APPENDIX A – Các hướng chụp nhũ ảnh (Mammographic Views):</strong> Bảng chuẩn hóa các thuật ngữ và ký hiệu viết tắt cho tất cả các hướng chụp nhũ ảnh thường quy và chuyên sâu.</li>
        <li><strong>APPENDIX B – Biểu mẫu tóm tắt từ vựng nhũ ảnh (Mammography Lexicon Summary Form):</strong> Bảng tổng hợp tóm tắt phục vụ tra cứu nhanh và làm tài liệu giảng dạy lâm sàng.</li>
      </ul>

      <h2 id="phan-2-cac-loai-khao-sat-nhu-anh">2. Phân loại các dạng khảo sát Nhũ ảnh (Types of Mammographic Studies)</h2>
      <p>
        Trong thực hành lâm sàng, các khảo sát nhũ ảnh được chia thành hai nhóm mục đích hoàn toàn khác biệt: <strong>Nhũ ảnh tầm soát (Screening)</strong> và <strong>Nhũ ảnh chẩn đoán (Diagnostic)</strong>.
      </p>

      <h3 id="screening-mammography">a. Nhũ ảnh tầm soát (Screening Mammography)</h3>
      <p>
        <strong>Mục tiêu cốt lõi:</strong> Vai trò lớn nhất của nhũ ảnh tầm soát là <em>phát hiện sớm ung thư vú ở những phụ nữ hoàn toàn không có triệu chứng lâm sàng (asymptomatic patients)</em>. Hiệu quả giảm tỷ lệ tử vong của nhũ ảnh tầm soát đã được chứng minh vững chắc qua hàng loạt thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCTs) và các nghiên cứu bệnh - chứng quy mô lớn trên thế giới.
      </p>
      <p>
        Lợi ích này đạt được nhờ khả năng phát hiện ung thư vú ở kích thước nhỏ hơn và ở giai đoạn sớm hơn nhiều so với nhóm phụ nữ không tham gia tầm soát. Trong số 8 thử nghiệm đối chứng ngẫu nhiên lớn nhất, có tới 7 thử nghiệm chứng minh mức <strong>giảm tử vong chung là 24%</strong> ở những phụ nữ được mời tham gia tầm soát [1]. Các nghiên cứu bệnh - chứng thậm chí còn ghi nhận mức lợi ích cao hơn, với tỷ lệ <strong>tử vong giảm tới 49%</strong> [2]. Kể từ năm 1990, nhũ ảnh tầm soát đã đóng góp vào mức <strong>giảm từ 45.3% đến 58.3%</strong> tỷ lệ tử vong đặc hiệu do ung thư vú đã chuẩn hóa theo tuổi tại Hoa Kỳ [3].
      </p>
      <p>
        <strong>Quy trình kỹ thuật và công nghệ ghi hình:</strong> Quy trình nhũ ảnh tầm soát tiêu chuẩn bao gồm hai hướng chụp cho mỗi bên vú: hướng chếch ngoài-trong (<strong>MLO</strong> - mediolateral-oblique) và hướng sọ-đuôi (<strong>CC</strong> - craniocaudal), thực hiện bằng nhũ ảnh kỹ thuật số 2D (DM) và/hoặc nhũ ảnh 3D cắt lớp (<strong>DBT</strong> - Digital Breast Tomosynthesis).
      </p>
      <p>
        Với công nghệ DBT, bóng phát tia X di chuyển theo một đường vòng cung qua tuyến vú để thu nhận nhiều hình ảnh liều thấp ở các góc độ khác nhau. Các dữ liệu này sau đó được tái tạo thành tập hợp các lát cắt thể tích 3D mỏng của toàn bộ tuyến vú. Từ dữ liệu nguồn DBT, một hình ảnh <strong>"nhũ ảnh tổng hợp" (Synthetic Mammogram - SM)</strong> dạng 2D có thể được tạo ra với độ phân giải và diện mạo tương tự như một phim chụp 2D (DM) thông thường. Nhờ đó, nhiều trung tâm hiện nay sử dụng phối hợp <strong>DBT + SM</strong> thay thế cho <em>DBT + DM</em> nhằm loại bỏ lần phát tia thứ hai, giúp giảm một nửa liều tia bức xạ cho người bệnh mà vẫn giữ nguyên giá trị chẩn đoán.
      </p>
      <p>
        <strong>Ưu thế vượt trội của DBT trong tầm soát:</strong>
      </p>
      <ul>
        <li><strong>Giảm tỷ lệ gọi lại (Recall Rate):</strong> DBT giảm từ <strong>15% đến 37%</strong> tỷ lệ bệnh nhân phải gọi quay lại làm thêm xét nghiệm do các hình ảnh chồng lấp mô sợi tuyến lành tính [4-6].</li>
        <li><strong>Tăng tỷ lệ phát hiện ung thư:</strong> Tăng thêm từ <strong>1.2 đến 2.7 ca ung thư trên 1000 lượt khám tầm soát</strong>, chủ yếu là các ung thư biểu mô xâm nhập (invasive breast cancer), mà không làm tăng đáng kể các tổn thương DCIS không có ý nghĩa lâm sàng [4-6].</li>
        <li><strong>Bộc lộ rõ đường bờ và định vị không gian:</strong> DBT cải thiện vượt bậc khả năng đánh giá đường bờ khối u và định vị chính xác vị trí tổn thương trong không gian 3 chiều của vú, ngay cả khi tổn thương chỉ thấy mờ nhạt trên một hướng chụp duy nhất.</li>
        <li><strong>Rút ngắn quy trình chẩn đoán:</strong> Nhờ độ tương phản và khả năng định vị vượt trội của DBT, nhiều trường hợp có thể bỏ qua các thế chụp nhũ ảnh chẩn đoán bổ sung (như ép khu trú hay phóng đại) để chuyển thẳng người bệnh sang siêu âm chẩn đoán khu trú nhằm xác định bản chất tổn thương [7, 8].</li>
      </ul>
      <p>
        <strong>Nguyên tắc tiếp cận người bệnh:</strong> Theo định nghĩa, tầm soát chỉ dành cho người <em>hoàn toàn không có triệu chứng</em>. Nếu bệnh nhân có bất kỳ triệu chứng lâm sàng mới hoặc nghi ngờ nào (khối sờ thấy, tiết dịch núm vú, đau khu trú, biến đổi da), hoặc đang cần theo dõi một tổn thương phát hiện trước đó, bệnh nhân bắt buộc phải được chuyển sang quy trình nhũ ảnh chẩn đoán. Đặc biệt, nhũ ảnh tầm soát được áp dụng cho <strong>toàn bộ cá thể người bệnh</strong> chứ không áp dụng riêng lẻ cho từng bên vú; ví dụ: không thể chỉ định chụp tầm soát ở vú bên trái trong khi đồng thời chỉ định chụp nhũ ảnh chẩn đoán ở vú bên phải.
      </p>

      <h3 id="diagnostic-mammography">b. Nhũ ảnh chẩn đoán (Diagnostic Mammography)</h3>
      <p>
        <strong>Đặc điểm nhận diện:</strong> Nhũ ảnh chẩn đoán là một khảo sát hình ảnh được <strong>thiết kế chuyên biệt theo từng cá thể (tailored imaging study)</strong> nhằm giải đáp một câu hỏi lâm sàng hoặc một nghi vấn hình ảnh học cụ thể. Bác sĩ chẩn đoán hình ảnh sẽ trực tiếp chỉ định thêm các thế chụp chuyên sâu (chụp ép khu trú, chụp phóng đại, chụp tiếp tuyến, chụp nghiêng 90° LM/ML, hoặc chụp ép khu trú trên DBT) để bộc lộ rõ nhất vùng nghi ngờ.
      </p>
      <p>
        <strong>Các nhóm đối tượng chỉ định nhũ ảnh chẩn đoán:</strong>
      </p>
      <ol>
        <li>Bệnh nhân được <strong>gọi lại sau nhũ ảnh tầm soát</strong> (để khẳng định, phân tích đặc tính hình thái và định vị chính xác tổn thương nghi ngờ).</li>
        <li>Bệnh nhân có <strong>triệu chứng lâm sàng tại tuyến vú</strong>: Sờ thấy khối bất thường, tiết dịch núm vú tự nhiên nghi ngờ (tiết dịch máu hoặc dịch trong như nước súp), đau vú khu trú một điểm kéo dài, hoặc có biến đổi da (co rút da, co rút núm vú, dày da).</li>
        <li>Bệnh nhân đang trong <strong>quy trình theo dõi định kỳ tổn thương có khả năng lành tính (BI-RADS 3)</strong> để đảm bảo tổn thương giữ nguyên kích thước và diện mạo ổn định qua thời gian theo dõi đủ dài (thường là 2 năm) trước khi hạ bậc xếp loại về lành tính (BI-RADS 2).</li>
        <li>Bệnh nhân có <strong>tiền sử bản thân mắc ung thư vú</strong> đang trong quy trình theo dõi giám sát sau điều trị.</li>
      </ol>
      <p>
        <strong>Lưu ý lâm sàng mang tính sống còn:</strong> Mặc dù nhũ ảnh phát hiện ung thư vú ở kích thước và giai đoạn sớm hơn nhiều so với khám lâm sàng trên quy mô cộng đồng, <em>không có bất kỳ một xét nghiệm hình ảnh riêng lẻ hay phối hợp nào có thể đảm bảo chắc chắn 100% rằng một cá nhân không mắc ung thư vú</em>. Các quyết định xử trí sau khi kết thúc quy trình nhũ ảnh chẩn đoán bắt buộc phải luôn kết hợp chặt chẽ với dấu hiệu lâm sàng thực tế, bởi vì ung thư vú hoàn toàn có thể <strong>âm tính giả trên nhũ ảnh (mammographically occult)</strong>, đặc biệt là ở những bệnh nhân có nhu mô tuyến vú đặc. Do đó, việc chỉ định sinh thiết mô học dưới hướng dẫn của khám lâm sàng hoặc siêu âm đối với một khối sờ thấy rõ ràng trên lâm sàng – ngay cả khi kết quả nhũ ảnh chẩn đoán trả về là hoàn toàn âm tính – là một thái độ xử trí hoàn toàn đúng đắn và bắt buộc.
      </p>

      <h2 id="phan-3-bang-tu-vung-lexicon">3. Bảng danh mục từ vựng Nhũ ảnh BI-RADS® v2025 (Table 1: Mammography Lexicon Overview)</h2>
      <p>
        Dưới đây là toàn văn <strong>Bảng 1 (Table 1)</strong> chuẩn hóa từ Cẩm nang ACR BI-RADS® v2025, đóng vai trò là "ngôn ngữ chung" quốc tế để mô tả tất cả các dấu hiệu hình ảnh trên nhũ ảnh tuyến vú:
      </p>

      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse border border-slate-300 text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-800">
              <th class="border border-slate-300 p-3 text-left font-bold w-1/3">Cấu trúc / Dấu hiệu (Findings)</th>
              <th class="border border-slate-300 p-3 text-left font-bold" colspan="2">Thuật ngữ mô tả chuẩn hóa (Standardized Terms)</th>
            </tr>
          </thead>
          <tbody>
            <!-- Breast Density -->
            <tr class="bg-blue-50 font-semibold text-slate-900">
              <td class="border border-slate-300 p-2" colspan="3">MÔ TUYẾN VÚ (BREAST TISSUE)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Đậm độ tuyến vú (Breast density)<sup>*</sup></td>
              <td class="border border-slate-300 p-2" colspan="2">
                <strong>(A)</strong> Tuyến vú hầu như hoàn toàn là mỡ (The breasts are almost entirely fatty)<br/>
                <strong>(B)</strong> Có các vùng rải rác đậm độ mô sợi tuyến (There are scattered areas of fibroglandular density)<br/>
                <strong>(C)</strong> Tuyến vú đặc không đồng nhất, có thể che khuất các khối u nhỏ (The breasts are heterogeneously dense, which may obscure small masses)<br/>
                <strong>(D)</strong> Tuyến vú cực kỳ đặc, làm giảm độ nhạy của nhũ ảnh (The breasts are extremely dense, which lowers the sensitivity of mammography)
              </td>
            </tr>

            <!-- Findings -->
            <tr class="bg-blue-50 font-semibold text-slate-900">
              <td class="border border-slate-300 p-2" colspan="3">CÁC DẤU HIỆU BẤT THƯỜNG (FINDINGS)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium" rowspan="3"><strong>A. Khối u (Masses)</strong></td>
              <td class="border border-slate-300 p-2 w-1/4">1. Hình thái (Shape)</td>
              <td class="border border-slate-300 p-2">a. Bầu dục (Oval)<br/>b. Đa cung (Lobulated – <em>mô tả mới của v2025</em>)<br/>c. Tròn (Round)<br/>d. Không đều (Irregular)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">2. Đường bờ (Margin)</td>
              <td class="border border-slate-300 p-2">a. Rõ nét (Circumscribed)<br/>b. Bị che khuất (Obscured)<br/>c. Không rõ nét (Indistinct)<br/>d. Tua gai (Spiculated)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">3. Đậm độ (Density)</td>
              <td class="border border-slate-300 p-2">a. Chứa mỡ (Fat-containing)<br/>b. Đậm độ thấp (Low density)<br/>c. Đồng đậm độ (Equal density)<br/>d. Đậm độ cao (High density)</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium" rowspan="3"><strong>B. Vôi hóa (Calcifications)</strong></td>
              <td class="border border-slate-300 p-2">1. Lành tính điển hình (Typically benign)</td>
              <td class="border border-slate-300 p-2">a. Da (Skin)<br/>b. Mạch máu (Vascular)<br/>c. Thô (Coarse)<br/>d. Que lớn (Large rod-like)<br/>e. Tròn (Round)<br/>f. Viền (Rim)<br/>g. Lắng lớp (Layering – <em>thay cho milk of calcium</em>)<br/>h. Chỉ khâu (Suture)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">2. Hình thái nghi ngờ (Suspicious morphology)</td>
              <td class="border border-slate-300 p-2">a. Vô định hình (Amorphous)<br/>b. Không đồng nhất thô (Coarse heterogeneous)<br/>c. Đa hình mịn (Fine pleomorphic)<br/>d. Dạng đường mảnh hoặc Phân nhánh (Fine linear or fine linear-branching)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">3. Kiểu phân bố (Distribution)</td>
              <td class="border border-slate-300 p-2">a. Lan tỏa (Diffuse)<br/>b. Vùng (Regional)<br/>c. Thành cụm (Grouped)<br/>d. Dạng đường (Linear)<br/>e. Theo phân thùy (Segmental)</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>C. Xáo trộn cấu trúc (Architectural distortion)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">Đường thẳng mảnh tỏa hình nan hoa từ một điểm, hoặc co rút khu trú đường bờ nhu mô vú mà không thấy khối u rõ rệt.</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>D. Các dạng bất đối xứng (Asymmetries)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">
                1. Bất đối xứng toàn thể (Global asymmetry)<br/>
                2. Bất đối xứng một bình diện (Asymmetry)<br/>
                3. Bất đối xứng khu trú (Focal asymmetry)<br/>
                <em>(Lưu ý: BI-RADS® v2025 đã chính thức loại bỏ thuật ngữ Developing Asymmetry)</em>
              </td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium" rowspan="2"><strong>E. Hạch bạch huyết (Lymph nodes)</strong></td>
              <td class="border border-slate-300 p-2">1. Hạch trong tuyến vú (Intramammary)</td>
              <td class="border border-slate-300 p-2">a. Bình thường (Normal)<br/>b. Bất thường (Abnormal)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2">2. Hạch hố nách (Axillary)</td>
              <td class="border border-slate-300 p-2">a. Bình thường (Normal)<br/>b. Bất thường (Abnormal)</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>F. Tổn thương da (Skin lesions)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">Nốt ruồi, dày sừng tiết bã, u xơ da chiếu chồng lên nhu mô vú.</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>G. Giãn ống tuyến (Dilated ducts)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">1. Nhiều ống (Multiple)<br/>2. Đơn độc (Solitary)</td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>H. Dấu hiệu kèm theo (Associated features)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">
                1. Co rút da (Skin retraction)<br/>
                2. Co rút núm vú (Nipple retraction)<br/>
                3. Dày da (Skin thickening)<br/>
                4. Dày các bè sợi liên kết (Trabecular thickening)
              </td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>I. Các trường hợp đặc biệt (Special cases)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">
                1. Nữ hóa tuyến vú ở nam giới (Gynecomastia)<br/>
                2. Túi ngực và các dạng nâng ngực khác (Implants and other forms of augmentation)<br/>
                3. Tuyến vú sau phẫu thuật đoạn nhũ (Mastectomy)
              </td>
            </tr>

            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>J. Vị trí tổn thương (Location of finding)</strong></td>
              <td class="border border-slate-300 p-2" colspan="2">
                1. Bên vú: Vú phải (Right) hoặc Vú trái (Left)<br/>
                2. Vị trí trong tuyến vú: 4 góc phần tư hoặc theo vị trí mặt đồng hồ (Clock face)<br/>
                3. Độ sâu và/hoặc khoảng cách từ tổn thương tới núm vú (Depth and/or distance from the nipple)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-slate-500 italic mt-1">
        <sup>*</sup>Ghi chú pháp lý FDA (tháng 7/2025): FDA đã phê chuẩn tiêu chuẩn diễn đạt bổ sung cho phép bác sĩ chẩn đoán hình ảnh đưa ra kết luận đánh giá đậm độ tuyến vú ở dạng số ít (singular phrasing: "the breast is...") khi thực hiện và báo cáo kết quả nhũ ảnh chỉ ở một bên vú đơn độc.
      </p>

      <h2 id="phan-4-dam-do-tuyen-vu">4. Đậm độ tuyến vú (Breast Density) & Ý nghĩa lâm sàng</h2>
      <p>
        <strong>Định nghĩa:</strong> Đậm độ tuyến vú được định nghĩa là <em>tỷ lệ tương đối giữa nhu mô tuyến vú (parenchyma) so với mô mỡ (fat) bên trong tuyến vú</em>.
      </p>
      <p>
        Trên hình ảnh nhũ ảnh, nhu mô tuyến vú xuất hiện dưới dạng các cấu trúc cản tia có màu trắng/xám sáng (radiodense), trong khi mô mỡ có tính chất thấu quang và xuất hiện màu tối/đen (radiolucent). Có bốn loại phân loại đậm độ tuyến vú (Bảng 2).
      </p>

      <h3 id="table-2-density-categories">Bảng 2. Bốn phân loại Đậm độ tuyến vú theo ACR BI-RADS® v2025 (Table 2)</h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse border border-slate-300 text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-800">
              <th class="border border-slate-300 p-3 text-center w-16">Phân loại</th>
              <th class="border border-slate-300 p-3 text-left font-bold">Mô tả định danh chuẩn hóa (ACR BI-RADS® 2025)</th>
              <th class="border border-slate-300 p-3 text-center font-bold">Phân nhóm nguy cơ</th>
              <th class="border border-slate-300 p-3 text-center font-bold">Tỷ số chênh nguy cơ (Odds Ratio)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2 text-center font-bold text-slate-700 text-base">A</td>
              <td class="border border-slate-300 p-2">
                <strong>Tuyến vú hầu như hoàn toàn là mỡ</strong><br/>
                <em>(The breasts are almost entirely fatty)</em>
              </td>
              <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">Không đặc (Non-dense)</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-emerald-700">0.6</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="border border-slate-300 p-2 text-center font-bold text-slate-700 text-base">B</td>
              <td class="border border-slate-300 p-2">
                <strong>Có các vùng rải rác đậm độ mô sợi tuyến</strong><br/>
                <em>(There are scattered areas of fibroglandular density)</em>
              </td>
              <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">Không đặc (Non-dense)</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-slate-700">1.0 (nhóm chứng)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 text-center font-bold text-amber-700 text-base">C</td>
              <td class="border border-slate-300 p-2">
                <strong>Tuyến vú đặc không đồng nhất, có thể che khuất các khối u nhỏ</strong><br/>
                <em>(The breasts are heterogeneously dense, which may obscure small masses)</em>
              </td>
              <td class="border border-slate-300 p-2 text-center text-rose-700 font-bold">Tuyến vú đặc (Dense)</td>
              <td class="border border-slate-300 p-2 text-center font-semibold text-rose-700">1.4</td>
            </tr>
            <tr class="bg-slate-50">
              <td class="border border-slate-300 p-2 text-center font-bold text-red-700 text-base">D</td>
              <td class="border border-slate-300 p-2">
                <strong>Tuyến vú cực kỳ đặc, làm giảm độ nhạy của nhũ ảnh</strong><br/>
                <em>(The breasts are extremely dense, which lowers the sensitivity of mammography)</em>
              </td>
              <td class="border border-slate-300 p-2 text-center text-rose-700 font-bold">Tuyến vú đặc (Dense)</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-red-700">1.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Quy định pháp lý bắt buộc của FDA Hoa Kỳ (tháng 9/2024):</strong> Việc ghi nhận và thông báo kết quả đậm độ tuyến vú đã chính thức trở thành <em>yêu cầu bắt buộc theo luật liên bang của Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA)</em> kể từ tháng 9 năm 2024. Ngôn ngữ mô tả trong bản kết quả trả về cho bác sĩ chỉ định cũng như thư thông báo kết quả gửi trực tiếp cho người bệnh bắt buộc phải tuân theo hướng dẫn chuẩn hóa của liên bang.
      </p>
      <p>
        Những người có tuyến vú thuộc nhóm C (đặc không đồng nhất) hoặc nhóm D (cực kỳ đặc) được xếp vào nhóm <strong>"Tuyến vú đặc" (Dense breasts)</strong>. Ngược lại, những người thuộc nhóm A (gần như hoàn toàn là mỡ) hoặc nhóm B (rải rác mô sợi tuyến) được xem là <strong>"Không đặc" (Non-dense)</strong>.
      </p>

      <h3 id="nguyen-tac-danh-gia-dam-do">Nguyên tắc đánh giá & Bước chuyển tư duy từ BI-RADS 5th đến v2025</h3>
      <p>
        Thông thường nhất trên thực hành lâm sàng, bác sĩ chẩn đoán hình ảnh đánh giá và phân loại đậm độ tuyến vú một cách định tính thông qua quan sát bằng mắt thường hình ảnh nhu mô trên các hướng chụp CC và MLO (trên phim 2D DM hoặc ảnh tổng hợp SM), mặc dù hiện nay đã có các phần mềm đo lường đậm độ tự động được FDA phê duyệt.
      </p>
      <p>
        <strong>Bước chuyển quan trọng về tư duy phân loại:</strong> Kể từ ấn bản BI-RADS thứ 5 và tiếp tục duy trì trong v2025, việc phân loại đậm độ tuyến vú đã <strong>chuyển đổi căn bản từ việc ước lượng phần trăm diện tích mô đặc đơn thuần sang đánh giá khả năng mà mô sợi tuyến che khuất tổn thương ung thư (masking effect)</strong>.
      </p>
      <p>
        <em>Quy tắc vùng che khuất:</em> Nếu mô sợi tuyến ở một khu vực nhất định của vú có đậm độ dày đặc và có tiềm năng che khuất một khối ung thư tiềm ẩn bên dưới, thì phân loại đậm độ của toàn bộ tuyến vú phải được gán theo đánh giá của khu vực đó, <strong>thay vì tính toán tỷ lệ thể tích trung bình của toàn bộ tuyến vú</strong>.
      </p>
      <p>
        <em>Quy tắc hai bên vú không đồng nhất:</em> Nếu hai bên vú của cùng một bệnh nhân rơi vào hai mức đậm độ khác nhau, thì <strong>mức đậm độ cao hơn trong hai bên sẽ được gán làm kết quả chung cho toàn bộ cuộc khám đó</strong>.
      </p>
      <p>
        <em>Tính biến thiên theo thời gian:</em> Đậm độ tuyến vú của một cá nhân có thể thay đổi theo từng năm phụ thuộc vào nhiều yếu tố sinh lý và can thiệp điều trị như tăng hoặc giảm cân, liệu pháp nội tiết thay thế (estrogen replacement therapy), giai đoạn mãn kinh, v.v. Vì vậy, đậm độ tuyến vú bắt buộc phải được đánh giá và cập nhật lại ở mỗi lần chụp nhũ ảnh định kỳ để phản ánh chính xác tình trạng hiện tại.
      </p>

      <h3 id="y-nghia-lam-sang-dam-do">Hai ý nghĩa lâm sàng then chốt của Đậm độ tuyến vú</h3>
      <p>
        Đậm độ tuyến vú mang ý nghĩa thực hành to lớn vì hai lý do trực tiếp:
      </p>
      <ol>
        <li>
          <strong>Ảnh hưởng đến độ chính xác của nhũ ảnh (Hiệu ứng che khuất - Masking Effect):</strong> Tác động bất lợi lớn nhất của mô sợi tuyến đặc là tạo ra hiệu ứng che khuất tổn thương. Với nhũ ảnh phim cổ điển trước đây, độ nhạy phát hiện ung thư giảm sút nghiêm trọng từ nhóm vú mỡ xuống nhóm vú cực kỳ đặc [9]. Sự phát triển của công nghệ nhũ ảnh kỹ thuật số (DM) và đặc biệt là nhũ ảnh 3D cắt lớp (DBT) đã làm giảm đáng kể hiệu ứng này:
          <ul>
            <li>Trong thử nghiệm kinh điển DMIST, độ nhạy nhũ ảnh ở phụ nữ có vú đặc đã tăng từ <strong>55%</strong> với nhũ ảnh phim lên <strong>70%</strong> với nhũ ảnh kỹ thuật số [10].</li>
            <li>Với công nghệ nhũ ảnh 3D cắt lớp (DBT), bác sĩ có thể cuộn xem từng lát cắt mỏng của nhu mô vú, giải tỏa hoàn toàn tình trạng chồng lấp mô sợi tuyến. Ở phụ nữ có tuyến vú đặc, tỷ lệ phát hiện ung thư đã tăng từ <strong>4.5 ca trên 1000 phụ nữ</strong> khi chụp 2D kỹ thuật số lên <strong>5.8 ca trên 1000 phụ nữ</strong> khi chụp với DBT (mức ý nghĩa thống kê $p < 0.001$) [11].</li>
          </ul>
        </li>
        <li>
          <strong>Gia tăng nguy cơ ung thư vú nội tại (Inherent Cancer Risk):</strong> Tương tự như các yếu tố nguy cơ kinh điển như tuổi tác, đột biến gen gây bệnh (BRCA1/2), tiền sử gia đình và các yếu tố sinh sản, việc có tuyến vú đặc tự bản thân nó là một yếu tố nguy cơ độc lập làm tăng khả năng phát triển ung thư vú. Khi so sánh với nhóm phụ nữ có mô sợi tuyến rải rác (Nhóm B - nhóm chứng với Odds Ratio = 1.0):
          <ul>
            <li>Nhóm A (gần như hoàn toàn là mỡ): Tỷ số chênh nguy cơ là <strong>0.6</strong> (nguy cơ thấp hơn).</li>
            <li>Nhóm C (đặc không đồng nhất): Tỷ số chênh nguy cơ là <strong>1.4</strong> (tăng 40% nguy cơ).</li>
            <li>Nhóm D (cực kỳ đặc): Tỷ số chênh nguy cơ là <strong>1.6</strong> (tăng 60% nguy cơ) [12].</li>
          </ul>
        </li>
      </ol>

      <h2 id="phan-5-hinh-anh-minh-hoa-dam-do">5. Hệ thống ca bệnh minh họa 4 nhóm Đậm độ tuyến vú (Figures 1 đến 16)</h2>
      <p>
        Dưới đây là toàn bộ <strong>16 hình ảnh minh họa nguyên bản từ Cẩm nang ACR BI-RADS® v2025</strong>, phân bổ qua 4 mức độ đậm độ A-B-C-D với các thế chụp nhũ ảnh 2D (DM) và nhũ ảnh tổng hợp 3D (SM):
      </p>

      <h3 id="density-cat-a">a. Nhóm A: Tuyến vú hầu như hoàn toàn là mỡ (Category A – Almost Entirely Fatty)</h3>
      <p>
        Nhu mô vú gần như hoàn toàn thấu quang, tạo điều kiện lý tưởng nhất cho việc phát hiện các khối u nhỏ hoặc vi vôi hóa cản tia. Độ nhạy của nhũ ảnh ở nhóm này đạt mức cao nhất (&gt; 90%).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig1.jpg" alt="Figure 1 - Breast Density: Category A (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 1 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm A (SM hướng CC).</strong> Tuyến vú hầu như hoàn toàn là mô mỡ thấu quang trên nhũ ảnh tổng hợp 3D.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig2.jpg" alt="Figure 2 - Breast Density: Category A (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 2 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm A (SM hướng MLO).</strong> Hai bên vú đối xứng, nền mỡ thấu quang chiếm ưu thế tuyệt đối.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig3.jpg" alt="Figure 3 - Breast Density: Category A (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 3 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm A (SM hướng CC).</strong> Toàn bộ thể tích nhu mô là mô mỡ, không có vùng cản tia đáng kể.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig4.jpg" alt="Figure 4 - Breast Density: Category A (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 4 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm A (DM 2D).</strong> Nhũ ảnh kỹ thuật số 2D cho thấy nền mỡ trong suốt, quan sát rõ các dải dây chằng Cooper và mạch máu.</figcaption>
        </figure>
      </div>

      <h3 id="density-cat-b">b. Nhóm B: Có các vùng rải rác đậm độ mô sợi tuyến (Category B – Scattered Fibroglandular Density)</h3>
      <p>
        Có các đảo mô sợi tuyến cản tia nằm rải rác trong nền mô mỡ. Phần lớn thể tích tuyến vú vẫn thấu quang, nhưng một số tổn thương nhỏ nằm bên trong các đảo mô đặc có thể bị che khuất nhẹ.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig5.jpg" alt="Figure 5 - Breast Density: Category B (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 5 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm B (SM).</strong> Các dải mô sợi tuyến cản tia phân bố rải rác ở vùng trung tâm và góc trên ngoài.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig6.jpg" alt="Figure 6 - Breast Density: Category B (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 6 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm B (SM).</strong> Đậm độ mô sợi tuyến rải rác đối xứng hai bên trên nhũ ảnh tổng hợp.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig7.jpg" alt="Figure 7 - Breast Density: Category B (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 7 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm B (DM).</strong> Nhũ ảnh 2D kỹ thuật số bộc lộ các đám mô sợi tuyến rải rác xen kẽ các khoang mỡ.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig8.jpg" alt="Figure 8 - Breast Density: Category B (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 8 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm B (DM).</strong> Một biến thể phân bố mô sợi tuyến rải rác tập trung chủ yếu ở cực trên vú.</figcaption>
        </figure>
      </div>

      <h3 id="density-cat-c">c. Nhóm C: Tuyến vú đặc không đồng nhất (Category C – Heterogeneously Dense)</h3>
      <p>
        Mô sợi tuyến chiếm tỷ lệ lớn và phân bố không đều. Điểm nhấn quan trọng trong định nghĩa: <strong>có thể che khuất các khối u nhỏ (which may obscure small masses)</strong>. Ngay cả khi tổng thể tích mô đặc không quá lớn nhưng tập trung dày ở một vùng, một khối ung thư nằm trong vùng đó hoàn toàn có thể bị bỏ sót trên nhũ ảnh 2D thông thường.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig9.jpg" alt="Figure 9 - Breast Density: Category C (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 9 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm C (DM).</strong> Tuyến vú đặc không đồng nhất trên nhũ ảnh 2D, các khối u nhỏ tiềm ẩn nguy cơ bị che khuất cao.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig10.jpg" alt="Figure 10 - Breast Density: Category C (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 10 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm C (SM).</strong> Lưu ý quan trọng từ cẩm nang: <em>Mặc dù tổng thể tích mô đặc không quá lớn, nhưng tổn thương ung thư hoàn toàn có thể bị che giấu tại các vùng chứa mô sợi tuyến dày đặc</em>.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig11.jpg" alt="Figure 11 - Breast Density: Category C (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 11 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm C (DM).</strong> Nhu mô đặc phân bố rộng lan tỏa qua nhiều góc phần tư.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig12.jpg" alt="Figure 12 - Breast Density: Category C (DM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 12 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm C (DM).</strong> Mô sợi tuyến dày đặc tập trung ở vùng trung tâm phía sau quầng vú; vùng này có nguy cơ che khuất tổn thương cao dù ngoại vi có mô mỡ.</figcaption>
        </figure>
      </div>

      <h3 id="density-cat-d">d. Nhóm D: Tuyến vú cực kỳ đặc (Category D – Extremely Dense)</h3>
      <p>
        Toàn bộ tuyến vú là một khối mô sợi tuyến trắng cản tia dày đặc, gần như không có mô mỡ xen kẽ. Độ nhạy của nhũ ảnh 2D ở nhóm này suy giảm nghiêm trọng (có thể xuống dưới 50%), đòi hỏi bắt buộc phải kết hợp nhũ ảnh 3D DBT và các phương tiện tầm soát bổ sung như siêu âm hoặc MRI vú.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig13.jpg" alt="Figure 13 - Breast Density: Category D (SM CC view)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 13 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm D (SM hướng CC).</strong> Tuyến vú cực kỳ đặc trên nhũ ảnh tổng hợp, mô sợi tuyến cản tia dày đặc chiếm toàn bộ thể tích vú làm giảm mạnh độ nhạy của nhũ ảnh.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig14.jpg" alt="Figure 14 - Breast Density: Category D (SM MLO view)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 14 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm D (SM hướng MLO).</strong> Hai bên vú trắng xóa dày đặc từ nền ngực tới sau núm vú.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig15.jpg" alt="Figure 15 - Breast Density: Category D (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 15 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm D (SM).</strong> Nhu mô đặc cản tia đồng nhất làm lu mờ mọi chi tiết giải phẫu bên trong.</figcaption>
        </figure>
        <figure class="my-2">
          <img src="/posts/birads-v2025-breast-density/density_fig16.jpg" alt="Figure 16 - Breast Density: Category D (SM)" class="rounded-xl shadow border border-slate-200 mx-auto" />
          <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>Figure 16 – Đậm độ tuyến vú: Phân loại BI-RADS nhóm D (SM).</strong> Tuyến vú cực kỳ đặc, hiệu ứng che khuất đạt mức tối đa, đòi hỏi chỉ định phối hợp các phương tiện chẩn đoán bổ sung.</figcaption>
        </figure>
      </div>

      <h2 id="phan-6-bang-tong-hop-lam-sang">6. Bảng tổng hợp đối chiếu & Lưu đồ thực hành lâm sàng</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>📋</span> Bảng đối chiếu lâm sàng: Đậm độ tuyến vú & Chiến lược chỉ định hình ảnh bổ sung (Ban biên tập tổng hợp)
        </h4>
        <p class="text-sm text-slate-700 mb-3">
          Nhằm hiện thực hóa các khuyến cáo của ACR và quy định mới của FDA, bảng dưới đây tổng hợp chiến lược theo dõi và lựa chọn phương tiện chẩn đoán hình ảnh bổ sung (Supplemental Screening) phù hợp cho từng nhóm đậm độ:
        </p>
        <div class="overflow-x-auto my-3">
          <table class="min-w-full border-collapse border border-slate-300 text-sm">
            <thead>
              <tr class="bg-slate-200 text-slate-800">
                <th class="border border-slate-300 p-2 text-left">Phân nhóm</th>
                <th class="border border-slate-300 p-2 text-center">Tỷ lệ dân số</th>
                <th class="border border-slate-300 p-2 text-center">Độ nhạy Nhũ ảnh 2D</th>
                <th class="border border-slate-300 p-2 text-center">Lợi ích của 3D DBT</th>
                <th class="border border-slate-300 p-2 text-center">Nguy cơ ung thư (OR)</th>
                <th class="border border-slate-300 p-2 text-left font-bold">Chiến lược Tầm soát Bổ sung (Supplemental)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Nhóm A</strong> (Toàn bộ là mỡ)</td>
                <td class="border border-slate-300 p-2 text-center">~10%</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-bold">&gt; 90%</td>
                <td class="border border-slate-300 p-2 text-center">Hiệu quả cơ bản</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-bold">0.6</td>
                <td class="border border-slate-300 p-2">Tầm soát nhũ ảnh định kỳ hàng năm. Không cần phương tiện bổ sung nếu nguy cơ trung bình.</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2 font-medium"><strong>Nhóm B</strong> (Mô sợi rải rác)</td>
                <td class="border border-slate-300 p-2 text-center">~40%</td>
                <td class="border border-slate-300 p-2 text-center text-emerald-700 font-semibold">~80 - 85%</td>
                <td class="border border-slate-300 p-2 text-center">Giảm tỷ lệ gọi lại</td>
                <td class="border border-slate-300 p-2 text-center">1.0 (chuẩn)</td>
                <td class="border border-slate-300 p-2">Nhũ ảnh hàng năm (ưu tiên DBT). Không chỉ định siêu âm tầm soát thường quy trừ khi có yếu tố nguy cơ cao.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Nhóm C</strong> (Đặc không đồng nhất)</td>
                <td class="border border-slate-300 p-2 text-center">~40%</td>
                <td class="border border-slate-300 p-2 text-center text-amber-700 font-semibold">~60 - 70%</td>
                <td class="border border-slate-300 p-2 text-center text-blue-700 font-bold">Tăng phát hiện ung thư xâm nhập (+1.2 - 2.7/1000)</td>
                <td class="border border-slate-300 p-2 text-center text-rose-700 font-bold">1.4</td>
                <td class="border border-slate-300 p-2"><strong>Bắt buộc khuyến cáo DBT</strong>. Cân nhắc siêu âm vú tầm soát (ABUS hoặc cầm tay) hoặc MRI tuyến vú nếu có thêm yếu tố nguy cơ gia đình.</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2 font-medium"><strong>Nhóm D</strong> (Cực kỳ đặc)</td>
                <td class="border border-slate-300 p-2 text-center">~10%</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">&lt; 50%</td>
                <td class="border border-slate-300 p-2 text-center text-blue-700 font-bold">Rất quan trọng nhưng vẫn hạn chế bởi mô đặc</td>
                <td class="border border-slate-300 p-2 text-center text-red-700 font-bold">1.6</td>
                <td class="border border-slate-300 p-2 font-medium text-slate-900"><strong>Chỉ định tầm soát bổ sung mạnh mẽ:</strong> Phối hợp DBT + Siêu âm vú toàn bộ (ABUS), hoặc chụp Cộng hưởng từ tuyến vú (Breast MRI) / Nhũ ảnh cản quang (CESM).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="phan-7-key-points">7. Điểm cốt lõi thực hành lâm sàng (Key Points – Ban biên tập đúc kết)</h2>
      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">
          <span>📌</span> 8 Điểm cốt lõi cần nhớ về Đậm độ Tuyến vú theo ACR BI-RADS® v2025
        </h4>
        <ul class="text-sm text-slate-700 space-y-1">
          <li><strong>1. Đổi mới tiêu chuẩn phân loại:</strong> Đậm độ tuyến vú không còn dựa vào tỷ lệ phần trăm thể tích toán học đơn thuần, mà dựa trên <em>nguy cơ che khuất tổn thương (masking effect)</em>. Một vùng mô đặc khu trú có khả năng che khuất ung thư sẽ quyết định bậc phân loại của toàn bộ tuyến vú.</li>
          <li><strong>2. Quy tắc gán đậm độ hai bên:</strong> Nếu vú trái và vú phải thuộc hai nhóm đậm độ khác nhau, <em>luôn gán mức đậm độ cao hơn</em> cho toàn bộ cuộc khám.</li>
          <li><strong>3. Nghĩa vụ pháp lý liên bang của FDA:</strong> Kể từ tháng 9/2024, phân loại đậm độ là thông tin bắt buộc phải ghi trong kết quả cho bác sĩ và gửi thư trực tiếp cho bệnh nhân, nêu rõ nguy cơ che khuất và sự cần thiết của các phương tiện bổ sung.</li>
          <li><strong>4. Tác động kép của vú đặc:</strong> Tuyến vú đặc (Nhóm C và D) vừa làm <em>giảm độ nhạy nhũ ảnh</em> (hiệu ứng che khuất), vừa là một <em>yếu tố nguy cơ độc lập</em> làm tăng xác suất mắc ung thư vú nội tại (OR 1.4 đến 1.6).</li>
          <li><strong>5. Giá trị then chốt của DBT:</strong> Với vú đặc, nhũ ảnh 3D cắt lớp (DBT) làm tăng tỷ lệ phát hiện ung thư thêm 1.2 - 2.7 / 1000 lượt khám và giảm 15-37% tỷ lệ gọi lại không cần thiết.</li>
          <li><strong>6. Nhũ ảnh tổng hợp (SM) thay thế 2D:</strong> SM tái tạo từ DBT có thể thay thế hoàn toàn phim chụp 2D thông thường, giúp tiết kiệm một nửa liều tia bức xạ cho người bệnh.</li>
          <li><strong>7. Cảnh giác với tổn thương sờ thấy:</strong> Không bao giờ dùng kết quả nhũ ảnh âm tính để loại trừ ung thư ở bệnh nhân có khối sờ thấy trên lâm sàng tại một tuyến vú đặc. Luôn chỉ định siêu âm và sinh thiết định hướng lâm sàng.</li>
          <li><strong>8. Cập nhật ở mỗi lần khám:</strong> Đậm độ tuyến vú thay đổi theo cân nặng, mãn kinh và liệu pháp nội tiết, do đó bắt buộc phải đánh giá lại độc lập ở từng lần chụp định kỳ.</li>
        </ul>
      </div>

      <h2 id="phan-8-pitfalls">8. Cạm bẫy chẩn đoán & Sai lầm thường gặp (Diagnostic Pitfalls)</h2>
      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> 6 Cạm bẫy lâm sàng thường gặp khi đánh giá Đậm độ Tuyến vú
        </h4>
        <ul class="text-sm text-slate-700 space-y-1">
          <li><strong>Cạm bẫy 1 – Vẫn áp dụng tư duy phần trăm thể tích cũ:</strong> Ước lượng diện tích mô sợi tuyến &lt; 25% hay &gt; 50% để xếp nhóm là sai nguyên lý của BI-RADS 5th và v2025. Nếu vú có 80% là mỡ nhưng 20% còn lại là một mảng mô đặc dày đặc ở vùng trung tâm (xem Figure 12), tuyến vú đó <em>bắt buộc phải xếp vào nhóm C</em> vì mảng mô đặc đó có thể che giấu hoàn toàn một khối u ác tính.</li>
          <li><strong>Cạm bẫy 2 – Bỏ qua khối sờ thấy vì nhũ ảnh trả về "bình thường":</strong> Ở phụ nữ có vú nhóm C hoặc D, độ nhạy của nhũ ảnh có thể tụt xuống dưới 50%. Khối ung thư xâm nhập dạng bè hoặc ung thư tiểu thùy xâm nhập (ILC) có thể hoàn toàn đồng đậm độ với mô xung quanh và vô hình trên nhũ ảnh. Bác sĩ lâm sàng và chẩn đoán hình ảnh tuyệt đối không được trì hoãn sinh thiết khi có khối sờ thấy nghi ngờ.</li>
          <li><strong>Cạm bẫy 3 – Lấy mức đậm độ trung bình của hai vú:</strong> Khi một bên vú là nhóm B và bên đối diện là nhóm C, việc ghi kết quả "Nhóm B" hoặc lấy mức trung bình là sai quy định. Bắt buộc phải gán "Nhóm C" cho toàn bộ cuộc khám để cảnh báo đầy đủ nguy cơ cho người bệnh.</li>
          <li><strong>Cạm bẫy 4 – Không tư vấn phương tiện tầm soát bổ sung (Supplemental Screening) cho phụ nữ có vú cực kỳ đặc:</strong> Trả lời nhũ ảnh âm tính (BI-RADS 1) mà không giải thích cho bệnh nhân nhóm D về nguy cơ âm tính giả và không tư vấn siêu âm vú hoặc MRI là thiếu sót chuyên môn nghiêm trọng theo khuyến cáo hiện hành.</li>
          <li><strong>Cạm bẫy 5 – Nhầm lẫn giữa nhũ ảnh tầm soát và chẩn đoán trên cùng một bệnh nhân:</strong> Chỉ định nhũ ảnh tầm soát cho một bệnh nhân đang có triệu chứng đau vú khu trú hoặc có khối sờ thấy là vi phạm quy định chỉ định. Bệnh nhân có triệu chứng bắt buộc phải được chụp theo quy trình nhũ ảnh chẩn đoán có bác sĩ chuyên khoa giám sát và chỉ định các thế chụp chuyên sâu tức thì.</li>
          <li><strong>Cạm bẫy 6 – Bỏ qua thay đổi đậm độ bất thường một bên theo thời gian:</strong> Nếu đậm độ tuyến vú tăng lên khu trú ở một bên vú trong khi bên kia không đổi, đây có thể là dấu hiệu cảnh báo của ứ trệ tuần hoàn tĩnh mạch/bạch huyết do ung thư biểu mô thể viêm hoặc khối u xâm lấn sâu chèn ép.</li>
        </ul>
      </div>

    `,
    views: 1280,
    readTime: "15 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 5-18)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "Đậm độ tuyến vú", "Breast Density", "Tầm soát ung thư vú", "Chẩn đoán hình ảnh vú"]
  },
  {
    id: "birads-2025-hach-tuyen-vu-ton-thuong-da-gian-ong-tuyen-va-cac-truong-hop-dac-biet",
    title: "Cẩm nang ACR BI-RADS® 2025: Hạch tuyến vú, Tổn thương da, Giãn ống tuyến, Dấu hiệu phối hợp & Các trường hợp đặc biệt",
    slug: "birads-2025-hach-tuyen-vu-ton-thuong-da-gian-ong-tuyen-va-cac-truong-hop-dac-biet",
    date: "30 Tháng 10, 2026",
    updatedDate: "30 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "Nhũ ảnh", "X-quang", "BI-RADS 2025", "Hạch vú & Nách", "Túi ngực"],
    categorySlugs: ["vu", "nhu-anh", "x-quang", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-special-cases/fig21_nipple_retraction_idc_sm.jpg",
    excerpt: "Cập nhật toàn diện các chương E, F, G, H, I, J từ Cẩm nang ACR BI-RADS® v2025: Hạch trong tuyến vú & hạch nách, Tổn thương da, Giãn ống tuyến (bước ngoặt Solitary Dilated Duct thành BI-RADS 2 lành tính), Dấu hiệu phối hợp (Co rút da/núm vú, Dày da, Dày bè sợi), Các trường hợp đặc biệt (Vú to nam giới & K vú nam, Túi ngực & tiêm silicon tự do, Đoạn nhũ & cạm bẫy hoại tử mỡ) và Quy chuẩn định vị tổn thương (khoảng cách tính theo cm nguyên chẵn). Kèm đầy đủ 43 ca bệnh đối chiếu DM, DBT và SM.",
    content: [
      "Hạch trong tuyến vú (IMLN) và hạch nách: Đánh giá dựa trên hình thái (hình hạt đậu, rốn mỡ, vỏ mỏng đồng đều); ngưỡng độ dày vỏ 3mm trên siêu âm không có giá trị đối với nhũ ảnh.",
      "Giãn ống tuyến đơn độc (Solitary Dilated Duct): Bước ngoặt quan trọng trong BI-RADS® 2025 hạ phân loại từ BI-RADS 4A (sinh thiết) ở ấn bản 5 xuống BI-RADS 2 (lành tính) nếu ổn định và không kèm triệu chứng lâm sàng.",
      "Các trường hợp đặc biệt: Bắt buộc mô tả đậm độ tuyến vú ở nam giới; nhận diện chính xác hoại tử mỡ sau đoạn nhũ trên nhũ ảnh khu trú tiếp tuyến để tránh sinh thiết nhầm vì hình ảnh giả ác tính trên siêu âm; quy định khoảng cách từ núm vú phải ghi bằng số nguyên cm (ví dụ 2 cm, tuyệt đối không dùng số thập phân 2.3 cm)."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Hạch tuyến vú, Tổn thương da, Giãn ống tuyến, Dấu hiệu phối hợp, Các trường hợp đặc biệt & Định vị tổn thương
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Bài viết này hoàn thiện toàn bộ các chương mục cốt lõi còn lại trong Cẩm nang <em>ACR BI-RADS® Mammography v2025</em> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology - ACR), bao gồm từ trang 122 đến trang 148 của tài liệu gốc: <strong>SECTION E (Hạch bạch huyết)</strong>, <strong>SECTION F (Tổn thương da)</strong>, <strong>SECTION G (Giãn ống tuyến)</strong>, <strong>SECTION H (Các dấu hiệu phối hợp)</strong>, <strong>SECTION I (Các trường hợp đặc biệt: Vú to nam giới, Túi ngực & Đoạn nhũ)</strong>, và <strong>SECTION J (Định vị tổn thương)</strong>.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Ấn bản 2025 xác lập nhiều <strong>bước ngoặt thực hành mang tính lịch sử</strong>:
        </p>
        <ul class="text-sm text-slate-700 list-disc pl-5 mt-1 space-y-1">
          <li><strong>Hạ phân loại Giãn ống tuyến đơn độc (Solitary Dilated Duct - SDD):</strong> Chuyển từ BI-RADS 4A (chỉ định sinh thiết trong ấn bản 5) xuống <strong>BI-RADS 2 (Lành tính)</strong> nếu tổn thương ổn định và bệnh nhân không có triệu chứng lâm sàng, do tỷ lệ ác tính thực tế rất thấp (&lt; 2%).</li>
          <li><strong>Bắt buộc báo cáo đậm độ tuyến vú ở nam giới:</strong> Bệnh nhân nam chụp nhũ ảnh phải được phân loại nhóm đậm độ vú (a, b, c, d) tương tự như nữ giới dựa trên vùng mô dày nhất để cảnh báo nguy cơ che khuất ung thư.</li>
          <li><strong>Quy chuẩn báo cáo khoảng cách từ núm vú theo số centimet nguyên chẵn:</strong> Bắt buộc báo cáo khoảng cách từ núm vú bằng số nguyên chẵn (ví dụ: cách núm vú 2 cm, tuyệt đối không dùng số lẻ thập phân 2.3 cm) nhằm tránh tạo ra ảo tưởng về độ chính xác vượt quá khả năng thực tế giữa các người đọc và các phương thức chụp khác nhau.</li>
          <li><strong>Nhận diện cạm bẫy hoại tử mỡ sau đoạn nhũ:</strong> Nhấn mạnh vai trò của thế chụp nhũ ảnh tiếp tuyến khu trú (spot tangential) để bộc lộ nang dầu hoặc vôi hóa viền lành tính, ngăn chặn chỉ định sinh thiết nhầm do hình ảnh khối phản âm kém bóng cản âm giả ác tính trên siêu âm.</li>
        </ul>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Toàn bộ <strong>43 ca bệnh và hình ảnh minh họa nhũ ảnh thực tế</strong> (Figures 1 đến 43) từ Cẩm nang được xuất bản nguyên bản; các nội dung dịch nguyên văn từ bài giảng giữ màu chữ đen trên nền trắng tiêu chuẩn, trong khi các phần phân tích đối chiếu lâm sàng, lưu đồ tầm soát bổ sung và cạm bẫy chẩn đoán do ban biên tập tổng hợp được đóng khung màu chuyên biệt để quý đồng nghiệp tiện theo dõi.
        </p>
      </div>

      <h2 id="section-e-lymph-nodes">SECTION E. Hạch bạch huyết (Lymph Nodes)</h2>
      <p>
        Trong giải phẫu tuyến vú, hệ thống dẫn lưu bạch huyết chủ yếu đổ về các hạch trong tuyến vú và các chuỗi hạch nách. Nhũ ảnh đóng vai trò quyết định trong việc phát hiện và đánh giá hình thái của các hạch này.
      </p>

      <h3 id="section-e1-imln">1. Hạch trong tuyến vú (Intramammary Lymph Nodes - IMLN)</h3>
      <p>
        Các hạch trong tuyến vú bình thường là những khối giới hạn rõ, có <strong>hình hạt đậu (reniform in shape)</strong> và có <strong>rốn mỡ (hilar fat)</strong>. Hiện nay vẫn chưa có các dữ liệu nghiên cứu đồng đẳng nghiêm ngặt đưa ra các tiêu chuẩn hình thái học rõ ràng để phân định giữa hạch trong tuyến vú lành tính và đáng ngờ trên nhũ ảnh. <strong>Hình thái học (Morphology)</strong> là yếu tố quan trọng nhất cần xem xét khi đánh giá các hạch bạch huyết.
      </p>
      <p>
        <strong>a. Hạch trong tuyến vú bình thường:</strong> Thường biểu hiện hình hạt đậu và có rốn mỡ. Hạch trong tuyến vú thường gặp nhất ở <strong>1/4 trên ngoài của tuyến vú</strong>, tiếp cận về phía hố nách, mặc dù chúng có thể xuất hiện ở bất kỳ vị trí nào khác trong vú. Một khối giới hạn rõ hình bầu dục mới xuất hiện <em>không nên mặc định ngay là hạch bạch huyết</em> trừ khi khối đó đáp ứng đầy đủ các tiêu chuẩn hình thái học, đặc biệt là khi khối không nằm ở vùng ngoài của vú. Hạch thường được nhìn thấy nằm sát cạnh một động mạch hoặc tĩnh mạch do đường dẫn lưu bạch huyết của vú thường chạy song hành với dẫn lưu mạch máu. Sự hiện diện của rốn mỡ và mối tương quan với mạch máu kế cận thường được nhận diện <strong>rõ ràng hơn trên DBT so với nhũ ảnh 2D thông thường (DM)</strong>.
      </p>
      <p>
        <strong>b. Hạch trong tuyến vú bất thường:</strong> Có thể biểu hiện hình thái tròn, và/hoặc mất rốn mỡ, và/hoặc vỏ hạch dày lên (được đánh giá một cách chủ quan). Những thay đổi về kích thước hoặc hình thái của hạch so với các lần chụp trước, hoặc sự bất đối xứng so với các hạch trong tuyến vú đối bên, có thể làm gia tăng mức độ nghi ngờ ác tính trong bối cảnh lâm sàng thích hợp [33, 34].
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig1_imln_tangential_dbt.jpg" alt="Figure 1 – Hạch trong tuyến vú bình thường (DBT)" />
        <figcaption><strong>Figure 1 – HẠCH TRONG TUYẾN VÚ BÌNH THƯỜNG (mũi tên).</strong> Rốn mỡ được bộc lộ theo hướng tiếp tuyến (DBT).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig2_imln_en_face_sm.jpg" alt="Figure 2 – Hạch trong tuyến vú bình thường (SM)" />
        <figcaption><strong>Figure 2 – HẠCH TRONG TUYẾN VÚ BÌNH THƯỜNG.</strong> Rốn mỡ được thể hiện trên hình ảnh nhìn trực diện (en face) (mũi tên) (Nhũ ảnh tổng hợp - SM).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig3_imln_normal_sm.jpg" alt="Figure 3 – Hạch trong tuyến vú bình thường (SM)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – HẠCH TRONG TUYẾN VÚ BÌNH THƯỜNG (mũi tên) (SM).</strong></figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig4_imln_abnormal_idc_dm.jpg" alt="Figure 4 – Hạch trong tuyến vú bất thường (DM)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – HẠCH TRONG TUYẾN VÚ BẤT THƯỜNG (DM).</strong> Hạch bạch huyết ở vùng ngoài vú trái trên một bệnh nhân có tiền sử điều trị phẫu thuật bảo tồn tuyến vú có kích thước lớn hơn so với các lần khám trước và đã mất hình dạng hạt đậu. Do những biến đổi tiến triển này, bệnh nhân được chỉ định sinh thiết lõi dưới hướng dẫn của siêu âm. Một clip kim loại đánh dấu mô nằm bên trong hạch. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma) tái phát trong hạch bạch huyết trong tuyến vú.</figcaption>
        </figure>
      </div>

      <h3 id="section-e2-axillary-ln">2. Hạch nách (Axillary Lymph Nodes)</h3>
      <p>
        Các hạch nách thường được nhìn thấy trên hướng chụp chếch ngoài - trong (MLO) và đảm nhận dẫn lưu bạch huyết cho phần ngoài của tuyến vú và chi trên.
      </p>
      <p>
        <strong>a. Hạch nách bình thường:</strong> Thể hiện đường bờ giới hạn rõ và có rốn mỡ. Mặc dù một ngưỡng độ dày vỏ hạch cụ thể chưa được xác lập cho nhũ ảnh, các hạch nách bình thường nhìn chung biểu hiện vỏ mỏng đồng đều (dù được đánh giá một cách chủ quan). <em>Chiều dài của hạch bạch huyết không phải là một yếu tố quyết định độc lập mức độ nghi ngờ ác tính</em>. Cần đánh giá thêm bằng siêu âm đối với các phát hiện không rõ ràng.
      </p>
      <p>
        <strong>b. Hình thái hạch nách bất thường:</strong> Bao gồm đậm độ cản quang cao, hình thái không phải hình hạt đậu, mất rốn mỡ, tăng độ dày vỏ hạch (có thể dày khu trú), sự hiện diện của vôi hóa, tăng kích thước qua khoảng thời gian theo dõi so với phim nền, hoặc hiếm gặp hơn là đường bờ không rõ. Những dấu hiệu này có thể xuất hiện trong nhiều bệnh cảnh lành tính cũng như ác tính khác nhau.
      </p>

      <div class="key-points">
        <strong>Lưu ý then chốt của ACR BI-RADS® v2025 về vỏ hạch nách:</strong>
        Ngưỡng độ dày vỏ hạch <strong>3 mm</strong> vốn thường được áp dụng trên siêu âm như một tiêu chuẩn nghi ngờ <strong>chưa từng được kiểm chứng / thẩm định giá trị trên nhũ ảnh (is not validated for mammography)</strong>. Do đó trên nhũ ảnh, đánh giá độ dày vỏ hạch mang tính định tính chủ quan và cần đối chiếu với phim cũ cũng như hạch đối bên.
      </div>

      <p>
        Thời gian gần đây đã ghi nhận sự gia tăng hình ảnh các hạch nách phì đại to trên nhũ ảnh liên quan đến việc tiêm vắc-xin phòng COVID-19 hoặc các loại vắc-xin khác. Các rối loạn tự miễn và nhiễm trùng cũng có thể đi kèm với các hạch bạch huyết bất thường. Việc tra cứu hồ sơ bệnh án của người bệnh có thể bộc lộ một nguyên nhân lành tính giải thích cho tình trạng bệnh lý hạch.
      </p>
      <p>
        <strong>Đánh giá tính đối xứng so với hố nách đối bên</strong> là một phần đặc biệt quan trọng trong quy trình đánh giá, bởi vì bệnh lý hạch hai bên (bilateral adenopathy) nhiều khả năng là tổn thương phản ứng hoặc viêm nhiễm lành tính hơn. Tuy nhiên, nếu không xác nhận được một tiền sử lâm sàng phù hợp để giải thích cho tình trạng hạch to, việc thực hiện quy trình đánh giá chẩn đoán chuyên sâu có thể được chỉ định nhằm loại trừ bệnh lý ác tính tiềm ẩn, bao gồm cả các bệnh ung thư ngoài tuyến vú.
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig5_axillary_ln_normal_sm.jpg" alt="Figure 1 – Hạch nách bình thường (SM)" />
        <figcaption><strong>Figure 1 – HẠCH NÁCH BÌNH THƯỜNG (SM) (mũi tên).</strong> Mặc dù hạch có kích thước tổng thể khá lớn, nó vẫn biểu hiện lớp vỏ hạch mỏng và rốn mỡ nguyên vẹn.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig6_axillary_ln_normal_sm_dbt.jpg" alt="Figure 2 – Hạch nách bình thường trên SM và DBT" />
        <figcaption><strong>Figure 2 – HẠCH NÁCH BÌNH THƯỜNG.</strong> (A) Nhũ ảnh tổng hợp (SM) và (B) DBT (hình ảnh phóng đại chi tiết).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig7_axillary_ln_ovarian_calcifications.jpg" alt="Figure 3 – Hạch nách chứa vôi hóa" />
        <figcaption><strong>Figure 3 – CÁC HẠCH NÁCH, MỘT HẠCH CHỨA VÔI HÓA (mũi tên).</strong> (A) DBT và (B) DM (hình ảnh chi tiết). Mặc dù các hạch nách quan sát được có độ dày vỏ bình thường và vẫn bảo tồn rốn mỡ, sự hiện diện của vôi hóa, đặc biệt nếu không phải là vôi hóa thô, có thể là dấu hiệu chỉ điểm bệnh lý. Chú ý thêm hạch trong tuyến vú bình thường nằm tình cờ ở vùng đuôi nách (đầu mũi tên). Giải phẫu bệnh: Ung thư biểu mô thanh dịch nhú buồng trứng di căn (Metastatic serous papillary ovarian carcinoma).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig8_axillary_ln_reactive_hyperplasia_sm.jpg" alt="Figure 4 – Hạch nách bất thường tăng sản phản ứng" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – HẠCH NÁCH BẤT THƯỜNG (SM).</strong> Giải phẫu bệnh: Tăng sản nang lympho phản ứng (Reactive follicular hyperplasia).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig9_axillary_ln_covid_vaccine_sm.jpg" alt="Figure 5 – Hạch nách trái to sau tiêm vắc-xin COVID-19" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 5 – CÁC HẠCH NÁCH TRÁI BẤT THƯỜNG (hình bên phải) sau khi tiêm vắc-xin phòng COVID-19 (SM).</strong></figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig10_axillary_ln_follicular_lymphoma_sm.jpg" alt="Figure 6 – Hạch nách bất thường do u lympho thể nang" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 6 – HẠCH NÁCH BẤT THƯỜNG (SM).</strong> Giải phẫu bệnh: U lympho thể nang (Follicular lymphoma).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig11_axillary_ln_metastatic_breast_sm.jpg" alt="Figure 7 – Hạch nách bất thường dày vỏ khu trú kín đáo" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 7 – HẠCH NÁCH BẤT THƯỜNG (SM).</strong> Vỏ của hạch này biểu hiện dày vỏ khu trú kín đáo (mũi tên). Việc phát hiện dấu hiệu tinh tế này có thể được tạo điều kiện thuận lợi bằng cách ghi nhận sự thay đổi so với các phim chụp trước đó hoặc diện mạo khác biệt độc nhất của nó so với các hạch khác cùng bên hay đối bên. Giải phẫu bệnh: Ung thư biểu mô tuyến vú di căn (Metastatic breast carcinoma).</figcaption>
        </figure>
      </div>

      <h2 id="section-f-skin-lesions">SECTION F. Tổn thương da (Skin Lesions)</h2>
      <p>
        Các tổn thương ở da, bao gồm nốt ruồi (moles), sẹo lồi (keloids) và nang biểu bì (epidermal inclusion cysts), có thể được phát hiện trên phim chụp nhũ ảnh. Khi nhìn thấy được trên bề mặt da, chúng thường được kỹ thuật viên dán một điểm đánh dấu cản quang (radio-opaque marker) để tránh nhầm lẫn với một khối u nằm trong nhu mô tuyến vú.
      </p>
      <p>
        Thông thường, các tổn thương da biểu hiện với một <strong>quầng sáng thấu quang (radiolucent halo)</strong> do lớp không khí bao quanh phần chân nổi gồ của tổn thương. Một tổn thương da có thể được định đặc điểm dễ dàng hơn trên DBT nhờ vào vị trí của nó nằm ở <strong>vài lát cắt đầu tiên hoặc vài lát cắt cuối cùng</strong> của thể tích vú được ghi hình (các lát cắt sát mặt da nhất).
      </p>
      <p>
        Các điểm đánh dấu da bằng kim loại có thể gây ra xảo ảnh (artifact) trên DBT. Do đó, một số cơ sở y tế lựa chọn không dán điểm đánh dấu lên tổn thương da, hoặc sử dụng các loại điểm đánh dấu phi kim loại chuyên dụng.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig12_skin_lesion_halo_sm.jpg" alt="Figure 1 – Tổn thương da với quầng thấu quang (SM)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – TỔN THƯƠNG DA (SM) (mũi tên).</strong> Lưu ý quầng sáng thấu quang đặc trưng (radiolucent halo), đại diện cho lớp không khí ở đường bờ của tổn thương da nổi gồ này. Nốt ruồi (Mole).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig13_skin_lesion_dbt_mole.jpg" alt="Figure 2 – Tổn thương da trên DBT" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – TỔN THƯƠNG DA (DBT) (mũi tên).</strong> Nốt ruồi (Mole) quan sát rõ ở lát cắt nông sát da.</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig14_skin_neurofibromatosis_sm.jpg" alt="Figure 3 – Vô số tổn thương da trong bệnh u sợi thần kinh" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – VÔ SỐ TỔN THƯƠNG DA NỔI GỒ (SM).</strong> Bệnh u sợi thần kinh (Neurofibromatosis).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig15_skin_moles_sm.jpg" alt="Figure 4 – Nhiều tổn thương da dạng nốt ruồi" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – TỔN THƯƠNG DA (SM) (các mũi tên).</strong> Các nốt ruồi (Moles) chiếu chồng lên trường chiếu vú.</figcaption>
        </figure>
      </div>

      <h2 id="section-g-dilated-ducts">SECTION G. Giãn ống tuyến (Dilated Ducts)</h2>

      <h3 id="section-g1-multiple-dilated-ducts">1. Giãn nhiều ống tuyến (Multiple Dilated Ducts)</h3>
      <p>
        Giãn nhiều ống tuyến là các cấu trúc dạng ống có đường kính thường <strong>lớn hơn 5 mm</strong> bắt nguồn từ núm vú, có thể xuất hiện ở một bên hoặc cả hai bên vú. Đây thường là một phát hiện lành tính và thường gặp ở những bệnh nhân đang mang thai hoặc cho con bú. Khi tổn thương mới xuất hiện, bất đối xứng, hoặc đi kèm với các triệu chứng lâm sàng hay các bất thường nhũ ảnh khác, việc đánh giá thêm bằng chẩn đoán hình ảnh có thể được chỉ định để loại trừ bệnh lý ác tính [35].
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig16_dilated_ducts_multiple_ectasia_dbt.jpg" alt="Figure 1 – Giãn nhiều ống tuyến tụ lại ở núm vú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – GIÃN NHIỀU ỐNG TUYẾN quy tụ về núm vú (DBT).</strong> Giải phẫu bệnh: Giãn ống tuyến (Duct ectasia).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig17_dilated_ducts_multiple_papilloma_dbt.jpg" alt="Figure 2 – Giãn nhiều ống tuyến do u nhú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – GIÃN NHIỀU ỐNG TUYẾN (DBT).</strong> Giải phẫu bệnh: U nhú lành tính (Benign papilloma).</figcaption>
        </figure>
      </div>

      <h3 id="section-g2-solitary-dilated-duct">2. Giãn ống tuyến đơn độc (Solitary Dilated Duct - SDD)</h3>
      <p>
        Một <strong>ống tuyến giãn đơn độc (Solitary Dilated Duct - SDD)</strong> là một cấu trúc dạng ống đơn lẻ hoặc phân nhánh ở một bên vú, thường có đường kính <strong>lớn hơn 5 mm</strong> và định hướng điển hình về phía núm vú. Giãn ống tuyến đơn độc là một phát hiện hiếm gặp trên cả nhũ ảnh tầm soát lẫn nhũ ảnh chẩn đoán. Một ống tuyến giãn đơn độc có thể là biểu hiện nhũ ảnh ở một bệnh nhân có tiết dịch núm vú.
      </p>

      <div class="synthesis-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>⚡</span> Bước ngoặt thay đổi lớn trong BI-RADS® v2025 đối với Giãn ống tuyến đơn độc (SDD):
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Các dữ liệu nghiên cứu giới hạn ghi nhận rằng <strong>tỷ lệ ác tính của một ống tuyến giãn đơn độc không kèm theo các dấu hiệu lâm sàng hoặc hình ảnh phối hợp khác là rất thấp (&lt; 2%)</strong> [36-38].
        </p>
        <p class="text-sm text-slate-800 leading-relaxed mt-2">
          Trong khi <strong>Ấn bản thứ 5 (5th Edition) trước đây quy định dấu hiệu này phải được xem là một phát hiện BI-RADS 4A</strong> (buộc phải chỉ định can thiệp sinh thiết), thì các công bố khoa học gần đây nhất cho thấy tỷ lệ ác tính thực tế đủ thấp để xem xét đưa ra <strong>kết luận LÀNH TÍNH (BI-RADS 2 - Benign Assessment)</strong> nếu tổn thương không kèm theo triệu chứng lâm sàng, không có bất thường hình ảnh bổ sung nào khác và ổn định không thay đổi qua thời gian.
        </p>
        <p class="text-sm text-slate-800 leading-relaxed mt-2">
          Ở lần chụp nhũ ảnh đầu tiên (baseline), hoặc khi tổn thương mới xuất hiện hay đi kèm với triệu chứng lâm sàng (như tiết dịch núm vú tự nhiên) hoặc các bất thường nhũ ảnh khác, việc đánh giá thêm bằng chẩn đoán hình ảnh chuyên sâu vẫn có thể được chỉ định để loại trừ bệnh ác tính [35, 39].
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig18_solitary_dilated_duct_stable_dbt.jpg" alt="Figure 1 – Giãn ống tuyến đơn độc ổn định lành tính" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – GIÃN ỐNG TUYẾN ĐƠN ĐỘC (mũi tên) (DBT).</strong> Dấu hiệu ổn định trên một bệnh nhân hoàn toàn không có triệu chứng lâm sàng, lành tính (BI-RADS 2).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig19_solitary_dilated_duct_benign_dbt.jpg" alt="Figure 2 – Giãn ống tuyến đơn độc trên DBT lành tính" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – GIÃN ỐNG TUYẾN ĐƠN ĐỘC (DBT).</strong> Dấu hiệu ổn định trên bệnh nhân không có triệu chứng, lành tính (BI-RADS 2).</figcaption>
        </figure>
      </div>

      <h2 id="section-h-associated-features">SECTION H. Các dấu hiệu phối hợp (Associated Features)</h2>
      <p>
        Các dấu hiệu phối hợp là những phát hiện liên quan được mô tả trong bối cảnh của một bất thường tuyến vú nguyên phát. Chúng cũng có thể chính là những phát hiện ban đầu thúc đẩy quy trình thăm khám chẩn đoán để tìm kiếm một bất thường nguyên phát.
      </p>

      <h3 id="section-h1-skin-retraction">1. Co rút da (Skin Retraction)</h3>
      <p>
        Trong hiện tượng co rút da, da bị kéo vào phía trong tuyến vú theo hướng của tổn thương bất thường nguyên phát. Điều này có thể biểu hiện dưới dạng vết lúm đồng tiền nhẹ (mild skin dimpling) hoặc rãnh lõm da sâu hơn (deeper skin indentation) khi thăm khám thực thể tuyến vú. Co rút da có thể là một dấu hiệu bình thường trong bệnh cảnh có tiền sử phẫu thuật trước đó.
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig20_skin_retraction_spiculated_mass_idc_sm.jpg" alt="Figure 1 – Co rút da do khối u bờ tua gai" />
        <figcaption><strong>Figure 1 – CO RÚT DA (mũi tên) (SM).</strong> Đồng thời hiện diện một khối hình tròn bờ tua gai đồng đậm độ ở sâu bên dưới (đầu mũi tên). Khối này sờ thấy được trên lâm sàng, được chỉ điểm bằng điểm đánh dấu da hình tam giác. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <h3 id="section-h2-nipple-retraction">2. Co rút núm vú (Nipple Retraction)</h3>
      <p>
        Trong hiện tượng co rút núm vú, núm vú bị kéo thụt vào trong ngay cả khi người bệnh đã được đặt tư thế chụp thích hợp với núm vú được chiếu nghiêng hoàn toàn (nipple in profile). Mức độ nghi ngờ ác tính gia tăng nếu co rút núm vú là <strong>dấu hiệu mới xuất hiện (new), xảy ra ở một bên (unilateral) hoặc không thể kéo hồi phục ra ngoài được (irreversible)</strong>.
      </p>
      <p>
        Dấu hiệu này cần được phân định rõ trên lâm sàng với hiện tượng <strong>Tụt núm vú (Nipple Inversion)</strong>: tụt núm vú là tình trạng không cố định/có thể hồi phục kéo ra ngoài được, thường xảy ra ở cả hai bên vú, biểu hiện sự ổn định lâu dài qua nhiều năm và thường là lành tính. Tương tự như co rút da, co rút núm vú có thể là một tình trạng bình thường trong bệnh cảnh có sẹo phẫu thuật cũ nằm bên dưới.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig21_nipple_retraction_idc_sm.jpg" alt="Figure 1 – Co rút núm vú do IDC" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – CO RÚT NÚM VÚ (SM).</strong> Lưu ý khối đậm độ cao bờ tua gai không đều ở lớp mô bên dưới và dày da phối hợp. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig22_nipple_inversion_benign_sm.jpg" alt="Figure 2 – Tụt núm vú lành tính" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – TỤT NÚM VÚ (SM).</strong> Núm vú không bộc lộ trọn vẹn ra ngoài, ngay cả trên thế chụp MLO được định vị tư thế chuẩn xác này. Trong trường hợp này, dấu hiệu xuất hiện ở cả hai bên và ổn định, phù hợp với tụt núm vú (nipple inversion) hơn là co rút núm vú (nipple retraction). Bệnh nguyên lành tính.</figcaption>
        </figure>
      </div>

      <h3 id="section-h3-skin-thickening">3. Dày da (Skin Thickening)</h3>
      <p>
        Dày da (được định nghĩa khi <strong>bề dày da &gt; 2 mm</strong> [40]) có thể biểu hiện khu trú hoặc lan tỏa. Da ở vùng phức hợp quầng - núm vú bình thường dày hơn so với phần còn lại của vú nhưng phải có tính đối xứng giữa hai bên.
      </p>
      <p>
        Dày da một bên là một phát hiện dự kiến sau xạ trị và nhìn chung sẽ giảm dần theo thời gian. Dày da hai bên thường là lành tính và do tình trạng phù nề từ các bệnh lý toàn thân tiềm ẩn (ví dụ: suy tim, suy gan, hoặc suy thận). Dày da mới xuất hiện, đặc biệt nếu xảy ra ở <strong>một bên và có tính chất khu trú</strong>, rất đáng lo ngại ác tính khi không có một bệnh nguyên viêm nhiễm hoặc lành tính đã biết từ trước.
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig23_skin_thickening_focal_cyst_dm.jpg" alt="Figure 1 – Dày da khu trú do nang biểu bì vỡ" />
        <figcaption><strong>Figure 1 – DÀY DA KHU TRÚ (mũi tên) (DM).</strong> Có tình trạng dày các bè sợi ở lớp mô bên dưới phối hợp. Giải phẫu bệnh: Nang biểu bì vỡ (Ruptured epidermal inclusion cyst).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig24_skin_thickening_trabecular_idc_dbt.jpg" alt="Figure 2 – Dày da và dày bè sợi do IDC" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – DÀY DA (DBT).</strong> Dày các bè sợi phối hợp. Tổ hợp các phát hiện này gợi ý khả năng ung thư vú thể viêm nhưng không đặc hiệu. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig25_skin_thickening_diffuse_mastitis_sm.jpg" alt="Figure 3 – Dày da lan tỏa do viêm vú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – DÀY DA (SM).</strong> Dày da lan tỏa, đi kèm với dày các bè sợi. Viêm vú (Mastitis).</figcaption>
        </figure>
      </div>

      <h3 id="section-h4-trabecular-thickening">4. Dày bè sợi (Trabecular Thickening)</h3>
      <p>
        Tình trạng dày các vách liên kết sợi của tuyến vú có thể gặp ở những bệnh nhân bị phù nề do bệnh lý toàn thân (ví dụ: suy tim sung huyết, bệnh lý thận) hoặc do suy giảm dẫn lưu của hệ bạch huyết, chẳng hạn như sau phẫu thuật nạo vét hạch nách. Dày bè sợi cũng có thể quan sát thấy ở bệnh nhân có di căn hạch nách lan rộng hoặc ung thư vú thể viêm (inflammatory breast carcinoma) do hiện tượng tế bào u gây tắc nghẽn các mạch bạch huyết.
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig26_trabecular_thickening_mastitis_sm.jpg" alt="Figure 1 – Dày bè sợi lan tỏa do viêm vú" />
        <figcaption><strong>Figure 1 – DÀY BÈ SỢI LAN TỎA VÚ TRÁI (SM).</strong> Dày da cũng được ghi nhận trên thế chụp CC vú trái (đầu mũi tên). Viêm vú (Mastitis).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig27_trabecular_thickening_inflammatory_idc_dm.jpg" alt="Figure 2 – Dày bè sợi lan tỏa trong ung thư vú thể viêm" />
        <figcaption><strong>Figure 2 – UNG THƯ VÚ THỂ VIÊM (DM).</strong> (A) Dày bè sợi lan tỏa vú phải kèm dày da và bệnh lý hạch nách, cùng một dấu hiệu sờ thấy ở phần trên vú (điểm đánh dấu tam giác trên bề mặt da - mũi tên). Vú trái (B) hoàn toàn bình thường. Các dấu hiệu hình ảnh hoàn toàn phù hợp với chẩn đoán lâm sàng ung thư vú thể viêm. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig28_trabecular_thickening_chf_sm.jpg" alt="Figure 3 – Dày bè sợi do suy tim sung huyết" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – DÀY BÈ SỢI VÀ DÀY DA VÚ TRÁI (SM).</strong> Mặc dù thường gặp ở cả hai bên, các nguyên nhân toàn thân gây dày da và bè sợi đôi khi có thể biểu hiện ở một bên. Suy tim sung huyết (Congestive heart failure).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig29_trabecular_thickening_renal_shunt_sm.jpg" alt="Figure 4 – Dày bè sợi do suy tim và suy thận có cầu nối lọc máu" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – DÀY BÈ SỢI VÀ DÀY DA VÚ TRÁI (SM).</strong> Bệnh nguyên: Suy tim sung huyết và bệnh lý thận (bệnh nhân có cầu nối thông động - tĩnh mạch AV shunt lọc máu ở cẳng tay bên trái).</figcaption>
        </figure>
      </div>

      <h2 id="section-i-special-cases">SECTION I. Các trường hợp đặc biệt (Special Cases)</h2>

      <h3 id="section-i1-gynecomastia">1. Vú to nam giới (Gynecomastia)</h3>
      <p>
        Vú to nam giới là sự phát triển lành tính của mô tuyến vú xảy ra ở một hoặc cả hai bên trên bệnh nhân nam hợp giới (cisgender male). Có rất nhiều nguyên nhân tiềm ẩn gây vú to nam giới. Vú to nam giới thường là hậu quả của sự thay đổi nồng độ nội tiết tố do tình trạng sinh lý ở trẻ vị thành niên hoặc người lớn tuổi.
      </p>
      <p>
        Các thuốc chống trầm cảm, thuốc điều trị ung thư tuyến tiền liệt, steroid, kháng sinh, hóa trị liệu, hoặc một số loại thuốc tim mạch có thể góp phần gây vú to nam giới, cũng như cần sa, methamphetamine, rượu và heroin. Ngoài ra, các quá trình bệnh lý toàn thân như suy gan, bệnh thận, ung thư phổi, ung thư tinh hoàn, rối loạn tuyến giáp và các khối u của tuyến thượng thận hay tuyến yên cũng có thể kích thích sự phát triển của mô tuyến vú [41].
      </p>
      <p>
        Bệnh nhân có thể đến khám với một bất thường sờ thấy ấn đau ở vùng dưới quầng vú của một hoặc cả hai bên vú. Ở nam giới có các dấu hiệu lâm sàng phù hợp với vú to nam giới hoặc giả vú to nam giới (<em>pseudogynecomastia</em> - tức là tình trạng tuyến vú to ở nam giới chủ yếu do mô mỡ mà không có mô tuyến hoặc mô đệm kèm theo), không có khuyến cáo chỉ định chụp chẩn đoán hình ảnh thường quy. <em>Mô vú phát triển do tác động của hormone xuất hiện ở người chuyển giới nữ (transfeminine patients) không được định danh là gynecomastia</em>.
      </p>

      <div class="key-points">
        <strong>Yêu cầu pháp lý & Thực hành bắt buộc của ACR BI-RADS® v2025 về Đậm độ vú ở Nam giới:</strong>
        Trên phim nhũ ảnh, <strong>đậm độ tuyến vú (Breast Density) bắt buộc phải được ghi nhận trong văn bản kết quả ở bệnh nhân nam tương tự như bệnh nhân nữ</strong>. Đậm độ tuyến vú được xếp loại dựa trên vùng mô dày đặc nhất của tuyến vú, nhằm cảnh báo tiềm năng che khuất một tổn thương ác tính (masking effect), sử dụng hệ thống phân loại BI-RADS đã được chuẩn hóa (a, b, c, d).
      </div>

      <p>
        Hiện nay chưa có các thuật ngữ mô tả mức độ lan rộng của vú to nam giới được kiểm chứng vững chắc. Bác sĩ chẩn đoán hình ảnh có thể báo cáo một đánh giá định tính về <strong>dạng hình thái của vú to nam giới</strong> (ví dụ: dạng nốt - nodular, dạng cành cây - dendritic, dạng lan tỏa - diffuse; xem các ví dụ trong Figure 1 đến Figure 5) mặc dù dữ liệu về kết cục người bệnh hiện vẫn còn thiếu.
      </p>
      <p>
        Các phát hiện khác như vôi hóa, khối u, các dạng bất đối xứng hoặc xáo trộn cấu trúc cần phải được mô tả chi tiết nếu hiện diện, vì những thực thể này thông thường <strong>không đi kèm với vú to nam giới</strong> và nhiều khả năng sẽ đòi hỏi quy trình đánh giá chẩn đoán chuyên sâu hơn để loại trừ ung thư vú nam.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig30_gynecomastia_nodular_sm.jpg" alt="Figure 1 – Vú to nam giới dạng nốt" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – VÚ TO NAM GIỚI DẠNG NỐT (Nodular Gynecomastia) (SM).</strong> Vùng mô tuyến dạng nốt tập trung ngay sau quầng vú.</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig31_gynecomastia_dendritic_sm.jpg" alt="Figure 2 – Vú to nam giới dạng cành cây" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – VÚ TO NAM GIỚI DẠNG CÀNH CÂY (Dendritic Gynecomastia) (SM).</strong> Mô tuyến tỏa ra từ núm vú vào lớp mỡ xung quanh dạng cành cây.</figcaption>
        </figure>
      </div>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig32_gynecomastia_diffuse_sm.jpg" alt="Figure 3 – Vú to nam giới dạng lan tỏa" />
        <figcaption><strong>Figure 3 – VÚ TO NAM GIỚI DẠNG LAN TỎA (Diffuse Gynecomastia) (SM).</strong> Mô sợi tuyến phát triển rộng khắp tuyến vú.</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig33_gynecomastia_diffuse_bilateral_sm.jpg" alt="Figure 4 – Vú to nam giới dạng lan tỏa hai bên" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – VÚ TO NAM GIỚI DẠNG LAN TỎA (SM).</strong></figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig34_gynecomastia_asymmetric_sm.jpg" alt="Figure 5 – Vú to nam giới dạng bất đối xứng" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 5 – VÚ TO NAM GIỚI DẠNG BẤT ĐỐI XỨNG (SM).</strong> Sự phát triển mô tuyến ưu thế rõ rệt ở một bên vú.</figcaption>
        </figure>
      </div>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig35_male_breast_cancer_idc_dm.jpg" alt="Figure 6 – Ung thư vú nam giới, không phải vú to nam giới" />
        <figcaption><strong>Figure 6 – VÍ DỤ VỀ UNG THƯ VÚ NAM GIỚI, KHÔNG PHẢI VÚ TO NAM GIỚI (DM).</strong> Qua đánh giá hình ảnh chẩn đoán của phát hiện sờ thấy này, tổn thương được xác định là một khối bờ tua gai không đều. Có tình trạng co rút núm vú phối hợp. Việc quan sát kỹ lưỡng tất cả các đặc điểm hình ảnh có thể giúp phòng ngừa việc vô tình bỏ sót một phát hiện đáng ngờ vì nghĩ là vú to nam giới. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <h3 id="section-i2-implants">2. Túi ngực & Các hình thức nâng ngực khác (Implants and Other Forms of Augmentation)</h3>
      <p>
        Túi nâng ngực là hình ảnh thường xuyên bắt gặp trong thực hành nhũ ảnh. Bản báo cáo kết quả bắt buộc phải bao gồm:
      </p>
      <ul>
        <li><strong>Loại túi ngực:</strong> Túi nước muối sinh lý (saline), túi silicone, hay túi hai khoang (dual lumen).</li>
        <li><strong>Vị trí đặt túi:</strong> Sau cơ ngực lớn (retropectoral) hay trước cơ ngực lớn (pre-pectoral, trước đây gọi là sau tuyến - retroglandular).</li>
        <li><strong>Các hướng chụp thu nhận được:</strong> Hướng chụp thường quy và các thế chụp đẩy túi ngực ra sau (implant-displaced views - kỹ thuật Eklund).</li>
      </ul>
      <p>
        Ngoài ra, đối với trường hợp túi ngực bằng silicone, việc đưa ra <strong>nhận xét về bằng chứng vỡ bao ngoài (extracapsular rupture)</strong> được khuyến cáo thực hiện cùng với mô tả chi tiết vị trí của các ổ lắng đọng silicone thoát ra ngoài bao.
      </p>
      <p>
        Đôi khi, silicone tự do, paraffin và các chất làm đầy khác có thể được tiêm trực tiếp vào tuyến vú, tạo ra diện mạo nhũ ảnh rất đặc trưng: các ổ lắng đọng dạng mỡ hình tròn thấu quang (đối với paraffin) hoặc các ổ lắng đọng cản quang đậm đặc dạng "siliconoma" (đối với silicone), có thể có hoặc không kèm theo vôi hóa viền xung quanh (rim calcification).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig36_implant_saline_retropectoral_sm.jpg" alt="Figure 1 – Túi ngực nước muối sau cơ ngực" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – TÚI NGỰC NƯỚC MUỐI (Saline), SAU CƠ NGỰC (SM).</strong> Túi ngực nước muối này ít cản quang hơn so với túi silicone.</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig37_implant_silicone_prepectoral_dm.jpg" alt="Figure 2 – Túi ngực silicone trước cơ ngực" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – TÚI NGỰC SILICONE, TRƯỚC CƠ NGỰC (DM).</strong> Cản quang đậm đặc đồng nhất che khuất phần lớn trường chụp nếu không có thế Eklund.</figcaption>
        </figure>
      </div>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig38_implant_saline_retropectoral_view_sm.jpg" alt="Figure 3 – Túi ngực nước muối sau cơ ngực" />
        <figcaption><strong>Figure 3 – TÚI NGỰC NƯỚC MUỐI, SAU CƠ NGỰC (SM).</strong> Bộc lộ rõ cơ ngực lớn nằm phía trước túi ngực.</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig39_silicone_free_injection_dm.jpg" alt="Figure 4 – Tiêm silicone tự do" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – TIÊM SILICONE TỰ DO (DM).</strong> Vô số nốt cản quang đậm đặc rải rác trong nhu mô tuyến vú.</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig40_silicone_free_injection_cc_dm.jpg" alt="Figure 5 – Tiêm silicone tự do thế CC" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 5 – TIÊM SILICONE TỰ DO (DM).</strong> Thế chụp sọ - đuôi (CC) bộc lộ sự biến dạng cấu trúc và các nốt cản quang đậm.</figcaption>
        </figure>
      </div>

      <h3 id="section-i3-mastectomy">3. Tuyến vú sau đoạn nhũ (Mastectomy)</h3>
      <p>
        Mặc dù chụp nhũ ảnh bên vú cùng bên sau phẫu thuật đoạn nhũ thường không có chỉ định tầm soát thường quy, việc ghi hình tuyến vú đã tái tạo hoặc vị trí vết mổ đoạn nhũ có thể được yêu cầu nhằm <strong>đánh giá một phát hiện lâm sàng cụ thể (tức là một phát hiện sờ thấy bất thường)</strong>.
      </p>
      <p>
        Tương tự như bất kỳ báo cáo nhũ ảnh nào khác, <strong>đậm độ tuyến vú bắt buộc phải được ghi nhận ở bệnh nhân đoạn nhũ</strong>. Khi chỉ chụp bên vú đã phẫu thuật đoạn nhũ, đậm độ vú phải được xếp loại dựa trên mô thực tế hiện diện. Thông thường, mô tuyến còn lại gần như hoàn toàn là mỡ và do đó phân loại thành phần tuyến vú <strong>BI-RADS Category A (gần như hoàn toàn là mỡ - almost entirely fatty)</strong> là phù hợp.
      </p>
      <p>
        Tuy nhiên, đôi khi một lượng mô tuyến vú vẫn còn sót lại (chẳng hạn như sau phẫu thuật đoạn nhũ bảo tồn da hoặc đoạn nhũ bán phần) và do đó các nhóm đậm độ tuyến vú cao hơn có thể phù hợp. Việc chụp nhũ ảnh cho bệnh nhân đoạn nhũ thường rất khó khăn do lượng mô còn lại rất ít, đặc biệt là ở những bệnh nhân không tái tạo vú. Do đó, chỉ có thể chụp được <strong>các hướng chụp khu trú vào vùng quan tâm (ví dụ: thế tiếp tuyến khu trú - spot tangential view)</strong>.
      </p>

      <div class="pitfalls">
        <strong>Cạm bẫy chẩn đoán sống còn: Hoại tử mỡ sau đoạn nhũ (Fat Necrosis Pitfall):</strong>
        Các thế chụp nhũ ảnh tiếp tuyến khu trú này đóng vai trò <strong>sống còn</strong>, vì hoại tử mỡ lành tính (benign fat necrosis) là một phát hiện cực kỳ phổ biến ở những bệnh nhân sau phẫu thuật đoạn nhũ.
        <br/><br/>
        Trên siêu âm, tổn thương hoại tử mỡ thường biểu hiện dưới dạng một <strong>khối bờ không đều, kèm bóng cản âm phía sau (shadowing)</strong> rất đáng ngờ, mô phỏng hoàn toàn một khối u ác tính tái phát tại chỗ. Nếu không chụp thêm phim nhũ ảnh tiếp tuyến khu trú để chứng minh sự hiện diện của <em>nang dầu thấu quang (radiolucent oil cyst) hoặc vôi hóa viền lành tính</em>, bệnh nhân sẽ rất dễ bị đẩy vào một cuộc sinh thiết xâm lấn không cần thiết.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig41_mastectomy_prepectoral_silicone_sm.jpg" alt="Figure 1 – Đoạn nhũ tái tạo túi silicone trước cơ ngực" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – ĐOẠN NHŨ TÁI TẠO TÚI SILICONE TRƯỚC CƠ NGỰC (SM).</strong> Đậm độ tuyến vú: Gần như hoàn toàn là mỡ (Category A).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-special-cases/fig42_mastectomy_spot_tangential_dm.jpg" alt="Figure 2 – Đoạn nhũ chụp tiếp tuyến khu trú vùng đau" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – ĐOẠN NHŨ (DM).</strong> Thế chụp tiếp tuyến khu trú (spot tangential) vùng đau điểm sờ thấy. Đậm độ tuyến vú: Gần như hoàn toàn là mỡ (Category A).</figcaption>
        </figure>
      </div>

      <h2 id="section-j-location">SECTION J. Vị trí tổn thương (Location of Finding)</h2>
      <p>
        Vị trí của một phát hiện quan trọng cần phải được mô tả chi tiết nhằm tạo điều kiện thuận lợi cho việc nhận diện lại một cách dễ dàng trong tương lai và đối chiếu chính xác với các dấu hiệu lâm sàng cũng như các phương thức chẩn đoán hình ảnh khác.
      </p>

      <div class="key-points">
        <strong>Trình tự chuẩn mực mô tả vị trí tổn thương theo BI-RADS® v2025:</strong>
        Vị trí tổn thương bắt buộc phải được mô tả theo thứ tự:
        <br/>
        <strong>1. Bên vú (Laterality)</strong> trước tiên &rarr; <strong>2. Vị trí theo Mặt đồng hồ (Clock face) và/hoặc Góc phần tư (Quadrant)</strong> &rarr; <strong>3. Độ sâu (Depth) hoặc Khoảng cách từ núm vú tính theo số nguyên cm (Distance from nipple)</strong>.
        <br/><br/>
        <em>Ví dụ chuẩn mực trong báo cáo nhũ ảnh:</em>
        <ul class="list-disc pl-5 mt-1">
          <li>"Tuyến vú phải, 1/4 trên ngoài, độ sâu nông" (Right breast, upper outer quadrant, anterior depth).</li>
          <li>"Tuyến vú trái, hướng 3:00, cách núm vú 5 cm" (Left breast, 3:00, 5 cm from the nipple).</li>
          <li>"Lát cắt số 20, thế chụp MLO" (Slice #20, MLO - đối với tổn thương thấy ưu thế trên DBT).</li>
        </ul>
      </div>

      <h3 id="section-j1-laterality">1. Bên vú (Laterality)</h3>
      <p>
        Chỉ rõ tổn thương nằm ở tuyến vú bên Phải (Right) hay bên Trái (Left).
      </p>

      <h3 id="section-j2-quadrant-clock">2. Vị trí trong tuyến vú theo Góc phần tư hoặc Mặt đồng hồ (Quadrant or Clock Face)</h3>
      <p>
        Bản báo cáo cần ghi nhận góc phần tư và/hoặc mặt đồng hồ:
      </p>
      <ul>
        <li><strong>Các góc phần tư (Quadrants):</strong> Phân chia tuyến vú thành 4 phân vùng nhỏ: <em>1/4 trên ngoài (upper outer), 1/4 trên trong (upper inner), 1/4 dưới ngoài (lower outer) và 1/4 dưới trong (lower inner)</em>.</li>
        <li><strong>Các thuật ngữ vị trí bổ sung không thuộc 1/4:</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li><strong>Trung tâm (Central):</strong> Nằm sâu ngay sau núm vú trên tất cả các hướng chụp, ở độ sâu giữa đến sâu (middle to posterior depth).</li>
            <li><strong>Dưới quầng vú (Retroareolar):</strong> Nằm ngay sau núm vú trên tất cả các hướng chụp, ở độ sâu nông sát bề mặt (anterior depth).</li>
            <li><strong>Đuôi nách (Axillary tail):</strong> Phần mô tuyến vú thuộc 1/4 trên ngoài trải dài tiếp giáp hố nách.</li>
            <li><strong>Hố nách (Axilla):</strong> Nằm trọn trong vùng hõm nách.</li>
          </ul>
        </li>
        <li><strong>Mặt đồng hồ (Clock face):</strong> Được định hướng dựa trên tư thế bệnh nhân <em>đối diện với người quan sát</em> và bắt buộc phải được xác định bằng một <strong>số nguyên (whole number)</strong>. Ví dụ: vị trí 3:00 nằm ở <em>phía ngoài của vú trái</em> nhưng lại nằm ở <em>phía trong của vú phải</em>.</li>
        <li><strong>Thuật ngữ Bán cầu (Hemisphere):</strong> Đối với một số tổn thương lớn chỉ quan sát thấy trên một hướng chụp duy nhất, có thể không xác định được chính xác góc phần tư hay mặt đồng hồ. Trong các tình huống này, nên sử dụng các từ mô tả bán cầu: <em>bán cầu trên (upper), bán cầu dưới (lower), bán cầu trong (inner), hoặc bán cầu ngoài (outer)</em>.</li>
      </ul>

      <h3 id="section-j3-depth-distance">3. Độ sâu hoặc Khoảng cách từ núm vú (Depth or Distance from the Nipple)</h3>
      <p>
        Mô tả vị trí dựa trên <strong>độ sâu: Nông (Anterior), Giữa (Middle), Sâu (Posterior)</strong> hoặc <strong>khoảng cách từ núm vú tính bằng số centimet nguyên chẵn (whole centimeters)</strong>:
      </p>

      <div class="synthesis-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📏</span> Quy định bắt buộc: Khoảng cách tính bằng số Centimet nguyên chẵn (Whole cm):
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Khoảng cách từ núm vú bắt buộc phải được ghi bằng <strong>số centimet nguyên chẵn (ví dụ: cách núm vú 2 cm, KHÔNG ĐƯỢC GHI 2.3 cm từ núm vú)</strong>.
        </p>
        <p class="text-sm text-slate-800 leading-relaxed mt-2">
          Việc sử dụng các khoảng gia tăng khoảng cách nhỏ hơn (như số lẻ thập phân mm) ngụ ý một mức độ chính xác cao hơn mức có thể đạt được trong thực tế giữa những người đọc khác nhau và giữa các phương thức chẩn đoán hình ảnh khác nhau. Nếu tổn thương nằm ở khoảng giữa hai vị trí centimet nguyên, <strong>phải lựa chọn và sử dụng số centimet nguyên gần nhất</strong>.
        </p>
      </div>

      <p>
        <strong>Kỹ thuật đo khoảng cách:</strong> Đo khoảng cách từ chân núm vú đến tâm của tổn thương, trên cùng một hình ảnh nếu cả hai cấu trúc đều nhìn thấy được. Nếu tổn thương nằm sát núm vú, việc mô tả bờ trước của tổn thương cách núm vú bao xa là rất quan trọng để hỗ trợ lập kế hoạch phẫu thuật. Nếu tổn thương có kích thước lớn, khoảng cách đến bờ trước và bờ sau của nó cũng có thể được bổ sung.
      </p>
      <p>
        Nếu tổn thương nằm sát da, cơ ngực lớn hoặc thành ngực, cần mô tả khoảng cách của tổn thương tới các cấu trúc giải phẫu này. Do sự khác biệt về tư thế ép vú của bệnh nhân và các yếu tố kỹ thuật khác, khoảng cách từ núm vú, da, cơ ngực và thành ngực có thể dao động giữa các phương thức chụp.
      </p>
      <p>
        <strong>Mô tả ranh giới vùng giải phẫu:</strong> Việc mô tả vùng giải phẫu nơi tổn thương tọa lạc có thể tạo thuận lợi cho việc nhận diện khi đối chiếu đa phương tiện. Ví dụ, việc ghi nhận một khối u nằm ở <em>ranh giới tiếp giáp giữa lớp mỡ dưới da và vùng mô sợi tuyến (subcutaneous fat-fibroglandular zone junction)</em> sẽ cho phép bác sĩ siêu âm tìm kiếm nhanh chóng hơn và định danh tổn thương với độ tin cậy cao hơn rất nhiều.
      </p>

      <figure>
        <img src="/posts/birads-v2025-special-cases/fig43_depth_diagrams.jpg" alt="Figure 1 – Sơ đồ phân chia độ sâu tổn thương" />
        <figcaption><strong>Figure 1 – SƠ ĐỒ ĐỘ SÂU (Depth Diagrams).</strong> Phân chia 3 tầng độ sâu: Nông (Anterior), Giữa (Middle) và Sâu (Posterior) trên các hướng chụp Sọ - Đuôi (CC), Chếch Ngoài - Trong (MLO) và Nghiêng Trong - Ngoài (ML).</figcaption>
      </figure>

      <h2 id="clinical-matrix">7. Bảng tổng hợp đối chiếu lâm sàng: Hạch, Ống tuyến, Dấu hiệu phối hợp & Trường hợp đặc biệt</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Ma trận quản lý & Phân loại ACR BI-RADS® v2025:</h4>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-sky-100 text-sky-950 font-bold">
                <th class="border border-slate-300 p-2 text-left">Dấu hiệu Nhũ ảnh</th>
                <th class="border border-slate-300 p-2 text-left">Tiêu chuẩn Lành tính (Benign)</th>
                <th class="border border-slate-300 p-2 text-left">Dấu hiệu Nghi ngờ (Suspicious)</th>
                <th class="border border-slate-300 p-2 text-left">Phân loại & Hướng xử trí</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Hạch trong vú (IMLN)</strong></td>
                <td class="border border-slate-300 p-2">Hình hạt đậu, rốn mỡ rõ, vỏ mỏng, 1/4 trên ngoài cạnh mạch máu.</td>
                <td class="border border-slate-300 p-2">Dạng tròn, mất rốn mỡ, dày vỏ hạch, tăng kích thước so với phim cũ.</td>
                <td class="border border-slate-300 p-2">BI-RADS 2 nếu điển hình; BI-RADS 4 nếu biến đổi hình thái/mất rốn mỡ.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Hạch nách (Axillary LN)</strong></td>
                <td class="border border-slate-300 p-2">Vỏ mỏng đồng đều, rốn mỡ nguyên vẹn (dù kích thước hạch lớn).</td>
                <td class="border border-slate-300 p-2">Dày vỏ khu trú kín đáo, mất rốn mỡ, vôi hóa trong hạch, bờ không rõ.</td>
                <td class="border border-slate-300 p-2">Siêu âm kiểm tra; sinh thiết nếu dày vỏ khu trú nghi ngờ hoặc vôi hóa.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Tổn thương da</strong></td>
                <td class="border border-slate-300 p-2">Quầng thấu quang do khí (radiolucent halo), thấy ở lát cắt đầu/cuối DBT.</td>
                <td class="border border-slate-300 p-2">Không có quầng khí, nằm sâu trong mô vú, không tương ứng nốt trên da.</td>
                <td class="border border-slate-300 p-2">BI-RADS 2 (Nốt ruồi, nang biểu bì); dán điểm đánh dấu phi kim loại.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Giãn nhiều ống tuyến</strong></td>
                <td class="border border-slate-300 p-2">Hai bên vú hoặc đối xứng, phụ nữ có thai/cho con bú, giãn ống tuyến lành.</td>
                <td class="border border-slate-300 p-2">Mới xuất hiện, một bên, bất đối xứng kèm tiết dịch máu tự nhiên.</td>
                <td class="border border-slate-300 p-2">BI-RADS 2 nếu đối xứng không triệu chứng; BI-RADS 0/4 nếu tiết dịch máu.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Giãn ống tuyến đơn độc (SDD)</strong></td>
                <td class="border border-slate-300 p-2">Ổn định qua các lần chụp, bệnh nhân không có triệu chứng lâm sàng.</td>
                <td class="border border-slate-300 p-2">Mới xuất hiện, tiến triển tăng kích thước, đi kèm tiết dịch núm vú/khối u.</td>
                <td class="border border-slate-300 p-2"><strong>BI-RADS 2 (Bước ngoặt v2025!)</strong> nếu ổn định; BI-RADS 4 nếu mới/kèm u.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Co rút núm vú / da</strong></td>
                <td class="border border-slate-300 p-2">Tụt núm vú (inversion) hai bên, kéo ra được; sẹo mổ cũ đã biết.</td>
                <td class="border border-slate-300 p-2">Co rút mới, một bên, không hồi phục; đi kèm khối bờ tua gai bên dưới.</td>
                <td class="border border-slate-300 p-2">BI-RADS 4/5; tìm kiếm khối u nguyên phát và xáo trộn cấu trúc bên dưới.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Dày da & Bè sợi</strong></td>
                <td class="border border-slate-300 p-2">Hai bên do suy tim, suy thận, suy gan; hoặc một bên sau xạ trị mổ cũ.</td>
                <td class="border border-slate-300 p-2">Mới xuất hiện, một bên, khu trú; sờ thấy mảng cứng, bệnh lý hạch nách.</td>
                <td class="border border-slate-300 p-2">Cảnh giác ung thư vú thể viêm (Inflammatory Breast Cancer) &rarr; BI-RADS 4/5.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Vú to nam giới (Gynecomastia)</strong></td>
                <td class="border border-slate-300 p-2">Mô tuyến đồng tâm dưới núm vú, dạng nốt/cành cây/lan tỏa, đau ấn.</td>
                <td class="border border-slate-300 p-2">Khối lệch tâm, bờ tua gai, cản quang cao, co rút núm vú, vi vôi hóa.</td>
                <td class="border border-slate-300 p-2">BI-RADS 2 nếu gynecomastia điển hình; BI-RADS 4/5 nếu nghi K vú nam.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Sau đoạn nhũ (Mastectomy)</strong></td>
                <td class="border border-slate-300 p-2">Nang dầu thấu quang, vôi hóa viền lành tính của hoại tử mỡ.</td>
                <td class="border border-slate-300 p-2">Khối cản quang cao, bờ tua gai/không đều mới xuất hiện tại diện mổ.</td>
                <td class="border border-slate-300 p-2">Thế chụp tiếp tuyến khu trú khẳng định hoại tử mỡ tránh sinh thiết nhầm.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="key-points-pitfalls">8. 10 Điểm cốt lõi cần nhớ (Key Points) & 6 Cạm bẫy chẩn đoán (Diagnostic Pitfalls)</h2>

      <div class="key-points">
        <h4 class="font-bold text-emerald-950 mb-2 flex items-center gap-2">
          <span>🌟</span> 10 Điểm cốt lõi cần nhớ từ Cẩm nang ACR BI-RADS® v2025:
        </h4>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-800">
          <li><strong>Hình thái học hạch là tối thượng:</strong> Hình hạt đậu và rốn mỡ là hai tiêu chuẩn cốt lõi xác nhận hạch bình thường. Chiều dài tuyệt đối của hạch không phản ánh bản chất ác tính.</li>
          <li><strong>Ngưỡng vỏ hạch 3mm chưa được thẩm định trên nhũ ảnh:</strong> Tiêu chuẩn vỏ hạch &gt; 3mm của siêu âm không có giá trị quy chiếu trực tiếp trên nhũ ảnh; đánh giá vỏ hạch trên nhũ ảnh mang tính định tính chủ quan.</li>
          <li><strong>Hạch to sau vắc-xin COVID-19:</strong> Hạch nách to phản ứng lành tính rất thường gặp sau tiêm chủng. Cần khai thác kỹ tiền sử tiêm ngừa và đánh giá tính đối xứng với nách đối bên.</li>
          <li><strong>Quầng sáng thấu quang (Radiolucent halo) của tổn thương da:</strong> Giúp phân định chắc chắn nốt ruồi hay nang biểu bì chiếu chồng lên nhu mô vú; DBT bộc lộ tổn thương ở vài lát cắt nông sát da ngoài cùng.</li>
          <li><strong>Bước ngoặt phân loại Solitary Dilated Duct (SDD):</strong> Không còn bắt buộc sinh thiết BI-RADS 4A như ấn bản 5; SDD ổn định trên bệnh nhân không triệu chứng chính thức được xếp <strong>BI-RADS 2 (Lành tính)</strong>.</li>
          <li><strong>Phân định Co rút núm vú vs Tụt núm vú:</strong> Co rút (Retraction) mới xuất hiện, một bên và không thể kéo hồi phục là dấu hiệu báo động đỏ ác tính; trong khi tụt núm vú (Inversion) hai bên, kéo ra được và ổn định lâu dài là lành tính.</li>
          <li><strong>Dày da & Dày bè sợi một bên:</strong> Nếu không có tiền sử xạ trị, dày da và bè sợi một bên mới xuất hiện phải được nghi ngờ cao độ là ung thư vú thể viêm (Inflammatory Breast Cancer) cho đến khi có bằng chứng ngược lại.</li>
          <li><strong>Bắt buộc báo cáo đậm độ vú ở bệnh nhân nam:</strong> Báo cáo nhũ ảnh nam giới phải ghi nhận nhóm đậm độ vú (a, b, c, d) theo đúng chuẩn mực phân loại của nữ giới.</li>
          <li><strong>Cạm bẫy hoại tử mỡ sau đoạn nhũ:</strong> Siêu âm có thể cho hình ảnh khối phản âm kém bóng cản âm giả ác tính; thế chụp nhũ ảnh tiếp tuyến khu trú phát hiện nang dầu thấu quang là cứu cánh giúp tránh can thiệp sinh thiết nhầm.</li>
          <li><strong>Khoảng cách từ núm vú phải ghi bằng centimet nguyên chẵn:</strong> Bắt buộc dùng số nguyên (ví dụ 2 cm, 5 cm); tuyệt đối không dùng số thập phân (như 2.3 cm) trong mọi báo cáo nhũ ảnh.</li>
        </ol>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-950 mb-2 flex items-center gap-2">
          <span>⚠️</span> 6 Cạm bẫy chẩn đoán thực hành nguy hiểm nhất (Diagnostic Pitfalls):
        </h4>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-800">
          <li><strong>Cạm bẫy hạch nách chứa vôi hóa:</strong> Một hạch nách dù có rốn mỡ bình thường và vỏ hạch mỏng vẫn có thể là hạch ác tính nếu chứa các vi vôi hóa không thô bên trong (chỉ điểm di căn từ ung thư buồng trứng thanh dịch nhú hoặc ung thư tuyến giáp).</li>
          <li><strong>Cạm bẫy xảo ảnh điểm đánh dấu da kim loại trên DBT:</strong> Điểm đánh dấu kim loại trên da có thể gây xảo ảnh dạng dải hoặc che khuất tổn thương nông trên DBT; khuyến cáo dùng điểm đánh dấu phi kim loại hoặc định vị dựa vào quầng khí thấu quang.</li>
          <li><strong>Cạm bẫy nhầm lẫn Ung thư vú nam với Vú to nam giới:</strong> Ung thư vú nam thường nằm lệch tâm so với quầng núm vú, có bờ tua gai không đều và đi kèm co rút núm vú. Không bao giờ được vội vã kết luận là gynecomastia nếu khối nằm lệch tâm.</li>
          <li><strong>Cạm bẫy suy tim biểu hiện một bên:</strong> Mặc dù suy tim sung huyết gây phù vú hai bên, ở bệnh nhân nằm nghiêng ưu thế hoặc có kèm cầu nối AV shunt lọc máu, phù dày bè sợi và dày da có thể biểu hiện nổi trội hoàn toàn ở một bên vú, dễ nhầm với ung thư thể viêm.</li>
          <li><strong>Cạm bẫy bỏ sót vỡ ngoài bao túi silicone:</strong> Cặn silicone tự do thoát ra ngoài bao có thể ngấm vào mô tuyến hoặc hạch nách (siliconoma) tạo khối đậm độ cao kèm phản ứng xơ hóa giống ung thư; cần thế chụp Eklund và đối chiếu MRI.</li>
          <li><strong>Cạm bẫy sinh thiết nhầm hoại tử mỡ sau đoạn nhũ:</strong> Tuyệt đối không vội vàng sinh thiết một khối nghi ngờ trên siêu âm ở diện mổ đoạn nhũ trước khi chụp nhũ ảnh tiếp tuyến khu trú để tìm hình ảnh nang dầu lành tính.</li>
        </ol>
      </div>

    `,
    views: 1450,
    readTime: "20 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 122-148)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "Hạch nách", "Hạch trong vú", "Giãn ống tuyến", "Vú to nam giới", "Túi ngực", "Hoại tử mỡ", "Chẩn đoán hình ảnh vú"]
  },
];
