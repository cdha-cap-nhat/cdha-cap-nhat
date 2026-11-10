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
  {
    id: "birads-2025-he-thong-bao-cao-guidance-va-bang-tu-vung-lexicon",
    title: "Cẩm nang ACR BI-RADS® 2025: Hệ thống báo cáo (Reporting System), Hướng dẫn thực hành (Guidance), Câu hỏi thường gặp (FAQs) & Phụ lục Từ vựng (Appendices)",
    slug: "birads-2025-he-thong-bao-cao-guidance-va-bang-tu-vung-lexicon",
    date: "01 Tháng 11, 2026",
    updatedDate: "01 Tháng 11, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "Nhũ ảnh", "X-quang", "BI-RADS 2025", "Hệ thống báo cáo", "Phân loại BI-RADS"],
    categorySlugs: ["vu", "nhu-anh", "x-quang", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-reporting/cover_reporting_system.jpg",
    excerpt: "Chương kết thúc cẩm nang ACR BI-RADS® v2025 (trang 149–176): Phân tích toàn diện Hệ thống Báo cáo (Reporting System - Categories 0 đến 6 theo sửa đổi luật MQSA 2024), Hướng dẫn thực hành (Guidance) giải thích cơ sở khoa học của các cập nhật danh pháp, Giải đáp 14 tình huống lâm sàng hóc búa (FAQs), Bảng tra cứu chuẩn hóa các hướng chụp (Appendix A) và Toàn bộ Bảng từ vựng tổng kết (Appendix B: Lexicon Summary Form).",
    content: [
      "Phân loại đánh giá BI-RADS Categories 0 đến 6: Cập nhật sửa đổi luật MQSA 2024 tách Category 0 thành 2 nhóm (Cần đánh giá thêm hình ảnh VS Cần phim cũ để so sánh); tiêu chuẩn áp dụng chặt chẽ cho Category 3 theo dõi 6-12-24 tháng.",
      "Hướng dẫn thực hành (Guidance) & Hệ thống phân tầng hành động khi báo cáo phối hợp đa phương thức trong cùng ngày: Áp dụng thứ tự ưu tiên 5 > 4 > 0 > 6 > 3 > 2 > 1 để quyết định phân loại và khuyến nghị xử trí cuối cùng.",
      "Giải đáp 14 câu hỏi thường gặp (FAQs), Bảng tra cứu ký hiệu viết tắt các hướng chụp (Appendix A: Mammographic Views) và Bảng từ điển tóm tắt toàn bộ từ vựng nhũ ảnh BI-RADS 2025 (Appendix B: Lexicon Summary Form)."
    ],
    htmlContent: `
      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Hệ thống Báo cáo, Hướng dẫn Thực hành (Guidance), Câu hỏi thường gặp & Phụ lục Từ vựng Toàn diện
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Đây là <strong>chương kết thúc cẩm nang và mang tính thực hành pháp lý quan trọng nhất</strong> trong toàn bộ Cẩm nang <em>ACR BI-RADS® Mammography v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology - ACR), bao gồm từ trang 149 đến trang 176 của tài liệu gốc. Bài viết cung cấp hệ thống quy chuẩn hoàn chỉnh nhất về: <strong>SECTION V (Hệ thống Báo cáo kết quả - Reporting System)</strong>, <strong>SECTION VI (Hướng dẫn thực hành lâm sàng - Guidance)</strong>, <strong>SECTION VII (Giải đáp 14 câu hỏi thường gặp - FAQs)</strong>, <strong>APPENDIX A (Bảng chuẩn hóa các hướng chụp nhũ ảnh)</strong> và <strong>APPENDIX B (Biểu mẫu tóm tắt từ vựng nhũ ảnh - Lexicon Summary Form)</strong>.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Ấn bản 2025 xác lập nhiều <strong>cập nhật mang tính bản lề và bắt buộc tuân thủ pháp lý theo luật định liên bang MQSA/FDA mới nhất</strong>:
        </p>
        <ul class="text-sm text-slate-700 list-disc pl-5 mt-1 space-y-1">
          <li><strong>Tách đôi phân loại Category 0 theo sửa đổi luật MQSA (hiệu lực từ ngày 10/09/2024):</strong> Bãi bỏ cụm từ kết hợp cũ, chính thức phân thành hai mã phân loại độc lập: <em>Category 0: Incomplete: Need additional imaging evaluation (Cần đánh giá thêm hình ảnh)</em> và <em>Category 0: Incomplete: Need prior mammograms for comparison (Cần phim chụp trước đó để so sánh)</em>, đi kèm quy trình theo dõi nghiêm ngặt 100% trong vòng 30 ngày.</li>
          <li><strong>Cấu trúc chỉ định lâm sàng chuẩn hóa (Structured Exam Indications - Table 6):</strong> Quy chuẩn hóa các lý do chụp nhũ ảnh thành các danh mục cấu trúc nhằm phục vụ theo dõi kết cục và kiểm định chất lượng phát hiện ung thư quốc gia.</li>
          <li><strong>Tiêu chuẩn thay thế FDA Alternative Standard #26 (tháng 07/2025):</strong> Bắt buộc báo cáo đậm độ tuyến vú trên mọi phim chụp, đồng thời cho phép sử dụng câu từ dạng số ít (singular phrasing) đối với các trường hợp chụp nhũ ảnh một bên (unilateral mammograms).</li>
          <li><strong>Quy tắc phân tầng mức độ bất thường khi báo cáo đa phương thức (Hierarchy of Abnormality - Table 8):</strong> Khi thực hiện kết hợp nhiều kỹ thuật (Nhũ ảnh + Siêu âm / MRI) trong cùng một ngày, phân loại và khuyến nghị xử trí cuối cùng bắt buộc tuân theo thứ tự ưu tiên giảm dần: <strong>5 &gt; 4 &gt; 0 &gt; 6 &gt; 3 &gt; 2 &gt; 1</strong>.</li>
          <li><strong>Nguyên tắc tương đồng Đánh giá - Xử trí (Assessment-Management Concordance) & Xử lý bất tương đồng:</strong> Hướng dẫn chi tiết cách báo cáo các tình huống lâm sàng đặc biệt (sờ thấy khối nhưng nhũ ảnh âm tính; nang đau cần chọc hút; vỡ túi ngực) nhằm đảm bảo an toàn tuyệt đối cho người bệnh và tránh nhầm lẫn pháp lý.</li>
          <li><strong>Từ điển tra cứu hoàn chỉnh nhất (Appendices A & B):</strong> Bảng tra cứu chuẩn hóa toàn bộ các hướng chụp thường quy/bổ sung và Biểu mẫu tóm tắt toàn bộ từ vựng phân loại BI-RADS 2025.</li>
        </ul>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Theo đúng quy ước biên tập thống nhất: nội dung dịch nguyên văn từ cẩm nang giữ màu chữ đen trên nền trắng tiêu chuẩn; các bảng tra cứu gốc được đính kèm bản chụp cắt lớp độ phân giải cao (300 DPI); các phần tổng hợp ma trận lâm sàng, 12 điểm cốt lõi và 8 cạm bẫy thực hành do ban biên tập đúc kết được đóng khung màu chuyên biệt để quý đồng nghiệp dễ dàng nhận biết và kiểm chứng.
        </p>
      </div>

      <h2 id="section-v-reporting-system">SECTION V. Hệ thống Báo cáo kết quả (Reporting System)</h2>
      <p>
        Hệ thống báo cáo kết quả nhũ ảnh của ACR BI-RADS® được thiết kế nhằm mục đích chuẩn hóa ngôn ngữ báo cáo, giảm thiểu sự mơ hồ trong việc truyền đạt thông tin chẩn đoán hình ảnh giữa bác sĩ điện quang và bác sĩ lâm sàng, đồng thời tạo cơ sở dữ liệu đồng nhất phục vụ công tác kiểm định chất lượng (audit) và nghiên cứu khoa học.
      </p>

      <h3 id="section-v-a-assessment-categories">A. Các phân loại đánh giá (Assessment Categories)</h3>
      <p>
        Trong hệ thống BI-RADS, mỗi phân loại đánh giá phản ánh một khoảng xác suất ác tính (Likelihood of Cancer) được xác định rõ ràng và đi kèm với một khuyến nghị xử trí lâm sàng tương thích (Management Recommendation).
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-reporting/table4_concordance_categories_management.jpg" alt="Table 4 – Sự tương thích giữa các phân loại đánh giá BI-RADS và khuyến nghị xử trí" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 4 – Bảng tương thích chuẩn thức giữa các Phân loại Đánh giá BI-RADS® và Khuyến nghị Xử trí</strong> (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Mammography v2025</em>, trang 149).</figcaption>
      </figure>

      <h4 id="table-4-concordance" class="font-bold text-slate-900 mt-6 mb-3">Bảng 4: Sự tương thích giữa các Phân loại Đánh giá BI-RADS® và Khuyến nghị Xử trí</h4>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="bg-sky-100 text-sky-950 font-bold">
              <th class="border border-slate-300 p-2 text-left">Phân loại Đánh giá (Assessment)</th>
              <th class="border border-slate-300 p-2 text-left">Khuyến nghị Xử trí (Management)</th>
              <th class="border border-slate-300 p-2 text-left">Khả năng Ác tính (Likelihood of Cancer)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">
                <strong>Category 0: Chưa hoàn chỉnh: Cần đánh giá thêm bằng hình ảnh</strong><br/>
                <em>(Category 0: Incomplete: Need Additional Imaging Evaluation)</em><br/>
                HOẶC<br/>
                <strong>Category 0: Chưa hoàn chỉnh: Cần phim chụp trước đó để so sánh</strong><br/>
                <em>(Category 0: Incomplete: Need Prior Mammograms for Comparison)</em>
              </td>
              <td class="border border-slate-300 p-2">
                <strong>Gọi lại để chụp/làm thêm hình ảnh bổ sung</strong> (Recall for additional imaging)<br/>
                HOẶC<br/>
                <strong>Cần so sánh với các lần khám trước</strong> (Need comparison to prior examination(s))
              </td>
              <td class="border border-slate-300 p-2 font-semibold text-slate-600">Không áp dụng (N/A)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Category 1: Âm tính</strong> <em>(Negative)</em></td>
              <td class="border border-slate-300 p-2">Nhũ ảnh tầm soát định kỳ thường quy (Routine mammography screening)</td>
              <td class="border border-slate-300 p-2 font-semibold text-emerald-700">Thực tế bằng 0% (Essentially 0%)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Category 2: Lành tính</strong> <em>(Benign)</em></td>
              <td class="border border-slate-300 p-2">Nhũ ảnh tầm soát định kỳ thường quy (Routine mammography screening)</td>
              <td class="border border-slate-300 p-2 font-semibold text-emerald-700">Thực tế bằng 0% (Essentially 0%)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Category 3: Khả năng lành tính</strong> <em>(Probably Benign)</em></td>
              <td class="border border-slate-300 p-2">Theo dõi khoảng cách ngắn (0 đến 6 tháng) hoặc tiếp tục giám sát (12 tháng) (Short-interval follow-up or continued surveillance)</td>
              <td class="border border-slate-300 p-2 font-semibold text-amber-700">&gt; 0% nhưng &le; 2%</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">
                <strong>Category 4: Nghi ngờ</strong> <em>(Suspicious)</em><br/>
                &bull; <strong>4A:</strong> Nghi ngờ ác tính thấp (Low suspicion)<br/>
                &bull; <strong>4B:</strong> Nghi ngờ ác tính trung gian (Intermediate suspicion)<br/>
                &bull; <strong>4C:</strong> Nghi ngờ ác tính cao (High suspicion)
              </td>
              <td class="border border-slate-300 p-2">
                <strong>Chẩn đoán mô học</strong> (Tissue diagnosis / Biopsy)<br/>
                <em>"Cần sinh thiết nếu không có chống chỉ định lâm sàng"</em>
              </td>
              <td class="border border-slate-300 p-2 font-semibold text-rose-700">
                &gt; 2% nhưng &lt; 95%<br/>
                &bull; <strong>4A:</strong> &gt; 2% đến &le; 10%<br/>
                &bull; <strong>4B:</strong> &gt; 10% đến &le; 50%<br/>
                &bull; <strong>4C:</strong> &gt; 50% đến &lt; 95%
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Category 5: Rất gợi ý ác tính</strong> <em>(Highly Suggestive of Malignancy)</em></td>
              <td class="border border-slate-300 p-2"><strong>Chẩn đoán mô học</strong> (Tissue diagnosis)</td>
              <td class="border border-slate-300 p-2 font-semibold text-rose-900">&ge; 95% khả năng ác tính</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Category 6: Đã biết ác tính qua sinh thiết</strong> <em>(Known Biopsy-Proven Malignancy)</em></td>
              <td class="border border-slate-300 p-2">Theo dõi lâm sàng với phẫu thuật viên và/hoặc bác sĩ ung bướu, và điều trị triệt căn tại chỗ (thường là phẫu thuật) khi phù hợp về mặt lâm sàng</td>
              <td class="border border-slate-300 p-2 font-semibold text-slate-600">Không áp dụng (N/A)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 id="category-0" class="font-bold text-slate-900 mt-6 mb-2">1. Đánh giá Nhũ ảnh Chưa Hoàn chỉnh (Mammographic Assessment is Incomplete) – Category 0</h4>
      <p>
        Các sửa đổi đối với quy định của Đạo luật Tiêu chuẩn Chất lượng Nhũ ảnh (MQSA), có hiệu lực chính thức từ ngày <strong>10 tháng 9 năm 2024</strong>, đã dẫn đến việc thành lập <strong>hai phân loại đánh giá mới trực thuộc nhóm Category 0</strong> (thay thế cho cụm từ mô tả kết hợp trước đây là <em>"Category 0: Incomplete: Need additional imaging evaluation and/or prior imaging for comparison"</em>). Hai phân loại mới bao gồm:
      </p>
      <ul>
        <li><strong>Category 0: Incomplete: Need additional imaging evaluation (Chưa hoàn chỉnh: Cần đánh giá thêm bằng hình ảnh):</strong> Được sử dụng để chỉ ra rằng cuộc khảo sát chưa được đánh giá đầy đủ, và khuyến nghị là cần thực hiện thêm các khảo sát hình ảnh bổ sung (nghĩa là các hướng chụp nhũ ảnh bổ sung chuyên biệt và/hoặc siêu âm tuyến vú).</li>
        <li><strong>Category 0: Incomplete: Need prior mammograms for comparison (Chưa hoàn chỉnh: Cần phim chụp trước đó để so sánh):</strong> Được sử dụng nếu việc tìm lại và đối chiếu với các lần khám trước đó là bắt buộc trước khi có thể đưa ra một kết luận đánh giá cuối cùng.</li>
      </ul>
      <p>
        Phân loại <em>Category 0: Cần đánh giá thêm bằng hình ảnh</em> hầu như luôn được sử dụng trong <strong>bối cảnh tầm soát (screening)</strong> để chỉ điểm một cuộc khảo sát tầm soát bất thường không hoàn toàn âm tính (category 1) hoặc lành tính (category 2). Điều này phản ánh bản chất nhị phân của việc đánh giá tầm soát (dương tính so với âm tính) và các khuyến nghị xử trí (tầm soát thường quy so với hành động kịp thời). Ngay cả khi một bất thường nghi ngờ ác tính rõ ràng được bộc lộ trên phim chụp tầm soát, phân loại Category 0 vẫn phải được sử dụng, chỉ ra nhu cầu cần một cuộc khảo sát chẩn đoán hoàn chỉnh để đánh giá chính xác hơn mức độ lan rộng của tổn thương tiềm ẩn trước khi tiến hành sinh thiết.
      </p>
      <p>
        Việc sử dụng đánh giá Category 0 cho tất cả các cuộc khám tầm soát bất thường nhấn mạnh rằng <strong>tỷ lệ diễn giải bất thường (Recall Rate - Tỷ lệ gọi lại)</strong> phải phản ánh đúng cả những cuộc khảo sát tầm soát có phát hiện bất thường đủ mức để chỉ định chẩn đoán mô học. Một khi hình ảnh chẩn đoán đã hoàn tất, một kết luận đánh giá cuối cùng sẽ được đưa ra cho lần khám chẩn đoán đó, nhưng lần khám nhũ ảnh tầm soát ban đầu vẫn giữ nguyên phân loại Category 0 trong dữ liệu lưu trữ.
      </p>
      <p>
        Khi có thể, đặc biệt nếu một cuộc khám nhũ ảnh không được xếp loại âm tính hay lành tính, khuyến cáo nên so sánh phim chụp hiện tại với (các) phim chụp trước đó, điều này giúp <strong>làm giảm đáng kể tỷ lệ bệnh nhân phải gọi lại (Recall Rate)</strong> [42, 43]. Do đó, phân loại <em>Category 0: Cần phim chụp trước đó để so sánh</em> chỉ nên được sử dụng khi việc so sánh như vậy là bắt buộc để đưa ra đánh giá cuối cùng. Thường gặp nhất là các trường hợp có một phát hiện khả năng lành tính (probably benign) có thể được kết luận là lành tính dứt khoát nếu chứng minh được tổn thương đã ổn định qua thời gian.
      </p>

      <div class="key-points">
        <strong>Quy định giám sát bắt buộc đối với Category 0 chờ phim cũ:</strong>
        Các cơ sở nhũ ảnh khi sử dụng phân loại <em>Category 0: Cần phim chụp trước đó để so sánh</em> phải có một <strong>quy trình theo dõi bảo đảm độ tin cậy 100%</strong> rằng một đánh giá cuối cùng sẽ được đưa ra <strong>trong vòng 30 ngày (tốt nhất là sớm hơn)</strong>, ngay cả khi các phim chụp trước đó không thể tìm lại được.
        <br/><br/>
        Nếu không có quy trình đảm bảo độ tin cậy 100%, cơ sở nên lựa chọn giải pháp giữ lại ca bệnh (hold the case) cho đến khi xác định được có thể lấy được phim cũ hay không thay vì phát hành báo cáo Category 0. Khi có phim cũ để đối chiếu, một <strong>bản bổ sung báo cáo (addendum)</strong> phải được phát hành và phân loại chưa hoàn chỉnh được thay thế bằng một đánh giá cuối cùng.
      </div>

      <p>
        Trong những tình huống hiếm hoi, phân loại Category 0 này có thể được sử dụng trong báo cáo nhũ ảnh chẩn đoán nếu quy trình đánh giá chẩn đoán chưa được hoàn tất đầy đủ (chẳng hạn như bệnh nhân tự ý rời khỏi cơ sở y tế trước khi thực hiện xong các hướng chụp nhũ ảnh bổ sung hoặc siêu âm chẩn đoán).
      </p>
      <p>
        <strong>Quy định nghiêm ngặt về chỉ định MRI đối với Category 0:</strong> Phân loại Category 0 nhìn chung <strong>không được sử dụng</strong> cho các dấu hiệu hình ảnh chẩn đoán tuyến vú cần đánh giá thêm bằng cộng hưởng từ (MRI). Thay vào đó, bác sĩ đọc phim phải đưa ra một đánh giá cuối cùng trong báo cáo được hoàn thành trước khi chụp MRI:
      </p>
      <ul>
        <li>Trường hợp nhũ ảnh âm tính (Category 1) hoặc lành tính (Category 2) nhưng bác sĩ mong muốn có thêm thông tin sinh lý học từ MRI vú do đậm độ tuyến vú cao (tầm soát bổ sung) hoặc do triệu chứng lâm sàng (tiết dịch núm vú nghi ngờ): Bắt buộc phải xếp phân loại nhũ ảnh là <strong>Category 1 hoặc Category 2</strong>, đi kèm câu khuyến nghị xử trí bất tương đồng là đề nghị chụp MRI vú.</li>
        <li><strong>Tuyệt đối không sử dụng Category 0</strong> để đề nghị chụp MRI nhằm trì hoãn việc sinh thiết đối với một tổn thương vốn đã biểu hiện nghi ngờ ác tính trên nhũ ảnh. Những trường hợp này bắt buộc phải được đánh giá là nghi ngờ và xếp vào <strong>Category 4 hoặc Category 5</strong>.</li>
      </ul>

      <h4 id="category-1-2" class="font-bold text-slate-900 mt-6 mb-2">2. Đánh giá Hoàn chỉnh: Category 1 (Âm tính) & Category 2 (Lành tính)</h4>
      <p>
        <strong>Category 1: Âm tính (Negative):</strong> Đây là một cuộc khảo sát hoàn toàn bình thường. Không có tổn thương dạng khối, xáo trộn cấu trúc hay vôi hóa đáng ngờ.
      </p>
      <p>
        <strong>Category 2: Lành tính (Benign):</strong> Tương tự như Category 1, đây là một kết luận bình thường (khả năng ác tính thực tế bằng 0%), nhưng bác sĩ chẩn đoán hình ảnh lựa chọn mô tả một phát hiện lành tính cụ thể trong bản báo cáo nhũ ảnh. U sợi tuyến thoái hóa vôi hóa, vôi hóa da, dị vật kim loại (clip phẫu thuật hoặc clip đánh dấu sau sinh thiết), và các khối chứa mỡ (nang dầu, u mỡ, nang sữa, u mô thừa hamartoma) đều có diện mạo lành tính kinh điển và có thể được mô tả với độ tự tin tuyệt đối.
      </p>
      <p>
        Bác sĩ cũng có thể lựa chọn mô tả các hạch trong tuyến vú, vôi hóa mạch máu, túi ngực, hoặc xáo trộn cấu trúc liên quan rõ ràng đến sẹo phẫu thuật cũ trong khi vẫn kết luận không có bằng chứng nhũ ảnh của bệnh lý ác tính. Tuy nhiên, nếu người đọc quyết định không mô tả những phát hiện này, cuộc khảo sát nên được xếp loại là âm tính (Category 1).
      </p>

      <h4 id="category-3" class="font-bold text-slate-900 mt-6 mb-2">3. Category 3: Khả năng Lành tính (Probably Benign) & Phác đồ Giám sát</h4>
      <p>
        Một phát hiện được xếp vào phân loại này phải có <strong>xác suất ác tính &gt; 0% nhưng &le; 2%</strong>, cao hơn mức thực tế bằng 0% của một phát hiện lành tính đặc trưng.
      </p>
      <p>
        <strong>Nguyên tắc cốt tử:</strong> Một đánh giá Category 3 <strong>không bao giờ được đưa ra trực tiếp trên một cuộc chụp nhũ ảnh tầm soát</strong>, mà chỉ được đưa ra sau khi đã hoàn tất quy trình đánh giá chẩn đoán hình ảnh toàn diện (chụp ép khu trú, phóng đại, siêu âm). Việc đưa ra đánh giá Category 3 trực tiếp từ tầm soát đã được chứng minh dẫn đến hai hậu quả bất lợi nghiêm trọng:
      </p>
      <ol class="list-decimal pl-5 space-y-1">
        <li>Theo dõi không cần thiết nhiều phát hiện vốn có thể được kết luận là lành tính ngay lập tức nếu làm chẩn đoán kịp thời;</li>
        <li>Làm chậm trễ việc chẩn đoán một số lượng nhỏ các ung thư mà đáng lẽ có thể được phát hiện ở kích thước nhỏ hơn và giai đoạn sớm hơn nếu được xác nhận ngay qua đánh giá chẩn đoán [44].</li>
      </ol>
      <p>
        Một tổn thương khả năng lành tính không được kỳ vọng sẽ thay đổi trong suốt khoảng thời gian giám sát hình ảnh được đề xuất, nhưng bác sĩ cần phải xác lập tính ổn định lâu dài trước khi khuyến nghị quay trở lại tầm soát định kỳ thường quy. Phân loại Category 3 <strong>không phải là một nhóm "không xác định"</strong> để dùng khi bác sĩ đơn giản là phân vân giữa lành tính (Cat 2) và nghi ngờ (Cat 4), và cũng <em>không được sử dụng chỉ để "chờ xem điều gì sẽ xảy ra"</em>.
      </p>

      <div class="synthesis-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📋</span> 3 Dấu hiệu Nhũ ảnh Kinh điển duy nhất đủ tiêu chuẩn xếp BI-RADS Category 3 trên phim nền:
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Y văn y học thực chứng hùng hậu ghi nhận chỉ có <strong>ba phát hiện</strong> quan sát thấy trên phim nhũ ảnh ban đầu (baseline) sau khi làm xong đánh giá chẩn đoán toàn diện mới có xác suất ác tính nằm trong khoảng của Category 3 (&le; 2%) [45-47]:
        </p>
        <ol class="list-decimal pl-5 mt-2 space-y-1 text-sm text-slate-800 font-medium">
          <li><strong>Khối đặc giới hạn rõ, không vôi hóa, đơn độc</strong> (Solitary noncalcified circumscribed solid mass);</li>
          <li><strong>Bất đối xứng khu trú không có tương quan bất thường trên siêu âm</strong> (Focal asymmetry without an ultrasound correlate);</li>
          <li><strong>Cụm vôi hóa tròn đơn độc</strong> (Solitary group of round calcifications).</li>
        </ol>
        <p class="text-xs text-slate-700 mt-2">
          Việc áp dụng Category 3 cho các phát hiện khác ngoài 3 dấu hiệu trên chỉ nên được xem xét trong những tình huống đặc thù mà bác sĩ có đủ kinh nghiệm cá nhân (ví dụ: vôi hóa không rõ ràng xuất hiện tại diện mổ cũ nghĩ nhiều đến hoại tử mỡ đang tiến triển, hoặc bất đối xứng khu trú tại vị trí chấn thương gần đây) [44].
        </p>
      </div>

      <p>
        <strong>Phác đồ Giám sát Thời gian 2 năm chuẩn mực của Category 3:</strong>
      </p>
      <ul>
        <li><strong>Lần 1 (Sau 6 tháng):</strong> Chụp kiểm tra bên vú có tổn thương khả năng lành tính (0 đến 6 tháng). Nếu ổn định, tiếp tục xếp Category 3.</li>
        <li><strong>Lần 2 (Sau 12 tháng kể từ ban đầu - tức 6 tháng sau lần 1):</strong> Chụp kiểm tra cả hai bên vú nếu vú đối bên đã đến kỳ tầm soát hàng năm. Nếu tiếp tục ổn định, tiếp tục xếp Category 3 nhưng giãn khoảng cách theo dõi lên 1 năm.</li>
        <li><strong>Lần 3 (Sau 24 tháng kể từ ban đầu):</strong> Chụp kiểm tra sau 1 năm theo dõi tiếp theo. Sau khi đã chứng minh được <strong>tính ổn định vững chắc trong 2 năm liên tục (2 years of stability)</strong>, phân loại đánh giá cuối cùng bắt buộc phải được chuyển thành <strong>Lành tính (BI-RADS Category 2)</strong> và đưa bệnh nhân trở lại quy trình tầm soát thường quy hàng năm [50].</li>
      </ul>
      <p>
        Nếu trong quá trình theo dõi, tổn thương nhỏ đi hoặc biến mất hoàn toàn, hoặc bộc lộ các đặc tính lành tính chắc chắn, đánh giá lập tức được hạ xuống <strong>Category 2 hoặc Category 1</strong>. Ngược lại, nếu tổn thương <em>tăng kích thước, tăng độ cản quang hoặc xuất hiện thêm các đặc điểm nghi ngờ</em>, đánh giá phải được nâng ngay lập tức lên <strong>Category 4 hoặc Category 5 và chỉ định sinh thiết mô học ngay lập tức</strong>.
      </p>
      <p>
        <strong>Tình huống bệnh nhân hoặc bác sĩ điều trị yêu cầu sinh thiết đối với tổn thương Category 3:</strong> Cách tiếp cận báo cáo chuẩn mực là: Vẫn đưa ra đánh giá <strong>Category 3: Khả năng lành tính</strong> kèm khuyến nghị xử trí tương thích là theo dõi nhũ ảnh định kỳ ngắn hạn, nhưng bổ sung một câu văn tiếp theo nêu rõ rằng: <em>"Xét nghiệm chẩn đoán mô học sẽ được thực hiện thay thế do nguyện vọng của người bệnh hoặc bác sĩ điều trị."</em>
      </p>

      <h4 id="category-4" class="font-bold text-slate-900 mt-6 mb-2">4. Category 4: Nghi ngờ Ác tính (Suspicious) & Các Phân nhóm 4A, 4B, 4C</h4>
      <p>
        Phân loại Category 4 được sử dụng cho các phát hiện có độ nghi ngờ ác tính đủ cao để <strong>chỉ định chẩn đoán mô học (sinh thiết)</strong>, nhưng chưa có các dấu hiệu kinh điển đặc trưng tuyệt đối cho ung thư. Khoảng xác suất ác tính của Category 4 rất rộng, dao động từ <strong>&gt; 2% đến &lt; 95%</strong>. Khuyến nghị xử trí chuẩn tắc là: <em>"Cần thực hiện sinh thiết nếu không có chống chỉ định lâm sàng"</em>.
      </p>
      <p>
        Nhiều cơ sở y tế đã áp dụng việc chia nhỏ Category 4 thành 3 phân nhóm phụ:
      </p>
      <ul>
        <li><strong>Category 4A – Nghi ngờ ác tính thấp (&gt; 2% đến &le; 10%):</strong> Tổn thương cần can thiệp mô học nhưng khả năng ác tính thấp, không kỳ vọng kết quả ác tính (ví dụ: khối đặc giới hạn rõ một phần, nang phức hợp không điển hình). Một số bệnh nhân có ngưỡng chấp nhận rủi ro cao có thể cân nhắc từ chối sinh thiết nếu họ chấp nhận nguy cơ tối đa 10% là ung thư.</li>
        <li><strong>Category 4B – Nghi ngờ ác tính trung gian (&gt; 10% đến &le; 50%):</strong> Tổn thương có nguy cơ ác tính thực sự. Bắt buộc phải đối chiếu cẩn thận giữa hình ảnh và giải phẫu bệnh nếu kết quả sinh thiết kim trả về là lành tính. Ví dụ: cụm vôi hóa đa hình thái mịn, khối đặc bờ không rõ.</li>
        <li><strong>Category 4C – Nghi ngờ ác tính cao (&gt; 50% đến &lt; 95%):</strong> Tổn thương nhiều khả năng là ác tính hơn là lành tính. Ví dụ: khối đặc mới bờ không đều/không rõ, cụm vi vôi hóa mới dạng đường mảnh. Nếu kết quả sinh thiết kim trả về là lành tính, hầu hết sẽ bị xem là bất tương đồng (discordant) và bác sĩ giải phẫu bệnh thường phải cắt thêm lát cắt sâu hoặc khuyến cáo phẫu thuật sinh thiết lại.</li>
      </ul>

      <h4 id="category-5" class="font-bold text-slate-900 mt-6 mb-2">5. Category 5: Rất Gợi ý Ác tính (Highly Suggestive of Malignancy - &ge; 95%)</h4>
      <p>
        Phân loại Category 5 được đưa ra khi xác suất ác tính ước tính <strong>&ge; 95%</strong>. Phân loại này được thiết lập từ thời kỳ phẫu thuật cắt bỏ là phương tiện chẩn đoán mô học chủ yếu, cho phép phẫu thuật viên thực hiện điều trị phẫu thuật triệt căn một thì ngay sau khi có kết quả sinh thiết tức thì (frozen section) khẳng định ung thư.
      </p>
      <p>
        Ngày nay, chẩn đoán ung thư vú đối với các phát hiện trên chẩn đoán hình ảnh hầu như luôn được thực hiện bằng sinh thiết kim qua da (core needle biopsy). Do đó, lý do cốt lõi hiện nay để sử dụng Category 5 là: <strong>Xác định những phát hiện mà nếu kết quả sinh thiết kim qua da trả về không phải là ác tính thì hầu như luôn bị coi là BẤT TƯƠNG ĐỒNG (DISCORDANT)</strong>, dẫn đến khuyến cáo bắt buộc phải làm lại sinh thiết (thường là phẫu thuật cắt bỏ tổn thương).
      </p>
      <p>
        Cần lưu ý rằng: <strong>Không có bất kỳ một dấu hiệu nhũ ảnh đơn độc nào có giá trị dự báo ác tính &ge; 95%</strong>. Tương tự như trên siêu âm và MRI, bắt buộc phải có <em>sự kết hợp của nhiều đặc điểm hình ảnh nghi ngờ</em> (ví dụ: khối đậm độ cao bờ tua gai không đều kèm vi vôi hóa phân nhánh dạng đúc khuôn phân bố theo phân thùy) mới đủ điều kiện để xếp vào Category 5.
      </p>

      <h4 id="category-6" class="font-bold text-slate-900 mt-6 mb-2">6. Category 6: Đã Biết Ác tính Qua Sinh thiết (Known Biopsy-Proven Malignancy)</h4>
      <p>
        Phân loại Category 6 được sử dụng khi hình ảnh tuyến vú được thực hiện <strong>sau khi đã có chẩn đoán mô học là ung thư nhưng trước khi tiến hành điều trị triệt căn tại chỗ</strong> (thường là phẫu thuật, hoặc các liệu pháp điều trị tại chỗ triệt căn khác được hội chẩn đa chuyên khoa thống nhất), và không có bất kỳ bất thường nhũ ảnh mới hoặc bổ sung nào khác ngoài khối ung thư đã biết cần phải đánh giá.
      </p>
      <p>
        Category 6 được sử dụng trong các tình huống:
      </p>
      <ul>
        <li>Hội chẩn ý kiến thứ hai (second opinion) đối với các ca bệnh đã sinh thiết có kết quả ác tính;</li>
        <li>Sau khi đã cố gắng lấy bỏ toàn bộ tổn thương đích bằng sinh thiết lõi nhưng chưa phẫu thuật triệt căn;</li>
        <li><strong>Theo dõi đáp ứng điều trị hóa chất tân bổ trợ (Monitoring response to neoadjuvant chemotherapy):</strong> Sau khi kết thúc điều trị tân bổ trợ, nếu tổn thương đã biến mất hoàn toàn trên nhũ ảnh, báo cáo vẫn phải xếp <strong>Category 6</strong> vì phẫu thuật triệt căn tại chỗ chưa diễn ra.</li>
        <li>Đánh giá sau phẫu thuật cắt rộng (lumpectomy) mà kết quả giải phẫu bệnh báo cáo <strong>diện cắt dương tính (positive resection margins)</strong> và nhũ ảnh còn thấy ít nhất một dấu hiệu gợi ý u còn sót lại. Mục đích chụp phim lúc này là định vị chính xác vị trí nghi ngờ u tồn dư để phẫu thuật viên cắt rộng lại diện mổ.</li>
      </ul>
      <p>
        <strong>Các trường hợp KHÔNG ĐƯỢC dùng Category 6:</strong>
      </p>
      <ul>
        <li>Không dùng cho theo dõi giám sát sau phẫu thuật cắt u vú khi diện cắt giải phẫu bệnh âm tính hoàn toàn. Nếu chỉ thấy sẹo mổ cũ, xếp Category 2; nếu thấy tổn thương mới nghi ngờ, xếp Category 4.</li>
        <li>Không dùng Category 6 nếu trên phim chụp phát hiện thêm một tổn thương nghi ngờ mới khác ngoài khối ung thư đã biết; khi đó tổn thương mới đòi hỏi hành động khẩn cấp và phải xếp <strong>Category 4 hoặc Category 5</strong>.</li>
        <li>Không dùng Category 6 cho các bệnh lý ác tính không có nguồn gốc từ tuyến vú (ví dụ: u lympho hay bệnh bạch cầu di căn nách).</li>
      </ul>
      <p>
        <em>Lưu ý kiểm định chất lượng:</em> Toàn bộ các ca chụp xếp Category 6 <strong>không được đưa vào tính toán kiểm toán nhũ ảnh (Audit)</strong> nhằm tránh làm sai lệch các thông số đo lường hiệu suất phát hiện ung thư của cơ sở y tế.
      </p>

      <h4 id="post-procedure-marker" class="font-bold text-slate-900 mt-6 mb-2">7. Phim Nhũ ảnh Sau Thủ thuật để Xác nhận Clip Đánh dấu (Post-Procedure Mammogram for Marker Placement)</h4>
      <p>
        Sửa đổi quy định MQSA năm 2023 đã bổ sung thêm một phân loại đánh giá đặc biệt: <em>"Post-Procedure Mammogram for Marker Placement"</em>. Phân loại này được sử dụng riêng cho các phim chụp với mục đích duy nhất là xác nhận sự hiện diện và vị trí chính xác của clip kim loại đánh dấu mô đã đặt sau sinh thiết lõi. ACR không gán mã số dạng số cho phân loại này và các ca này được miễn trừ khỏi kiểm toán nhũ ảnh.
      </p>

      <h3 id="section-v-b-report-organization">B. Cấu trúc Tổ chức Bản Báo cáo Nhũ ảnh (Report Organization)</h3>
      <p>
        Bản báo cáo kết quả nhũ ảnh chuẩn mực cần ngắn gọn, súc tích và có cấu trúc chặt chẽ gồm 7 phần được tiêu chuẩn hóa theo Bảng 5:
      </p>

      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Bảng 5: 7 Thành phần Cấu trúc Bản Báo cáo Nhũ ảnh Chuẩn hóa theo ACR BI-RADS® v2025:</h4>
        <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-800">
          <li><strong>Chỉ định khảo sát (Indication for examination):</strong> Sử dụng hệ thống danh mục cấu trúc chuẩn.</li>
          <li><strong>So sánh với các lần khám trước (Comparison to previous examination(s)):</strong> Nêu rõ ngày tháng các phim đối chiếu.</li>
          <li><strong>Kỹ thuật chụp (Technique):</strong> DM, DBT, SM, các thế chụp chuyên sâu hoặc phần mềm AI/CAD hỗ trợ.</li>
          <li><strong>Đậm độ tuyến vú (Breast density):</strong> Bắt buộc theo đúng quy định câu chữ chuẩn của FDA.</li>
          <li><strong>Mô tả rõ ràng các phát hiện quan trọng (Clear description of any important findings):</strong> Mô tả chi tiết hình thái, kích thước, vị trí.</li>
          <li><strong>Phân loại đánh giá tổng thể (Overall assessment):</strong> Sử dụng thuật ngữ được FDA phê duyệt kèm mã số BI-RADS.</li>
          <li><strong>Khuyến nghị xử trí (Management recommendations):</strong> Tương thích chặt chẽ với phân loại đánh giá.</li>
        </ol>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-reporting/table6_structured_indications.jpg" alt="Table 6 – Chỉ định khảo sát có cấu trúc chuẩn hóa" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 6 – Bảng Chuẩn hóa Chỉ định Khảo sát Hình ảnh Tuyến vú</strong> (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Mammography v2025</em>, trang 155).</figcaption>
      </figure>

      <h4 id="indication-table-6" class="font-bold text-slate-900 mt-6 mb-2">Bảng 6: Các Danh mục Chỉ định Khảo sát Tuyến vú có Cấu trúc (Structured Exam Indications)</h4>
      <div class="overflow-x-auto my-3">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="bg-sky-100 text-sky-950 font-bold">
              <th class="border border-slate-300 p-2 text-left">Chỉ định Chính (Major Indication)</th>
              <th class="border border-slate-300 p-2 text-left">Phân nhóm Tùy chọn (Optional Subcategory)</th>
              <th class="border border-slate-300 p-2 text-left">Tiền sử Lâm sàng Liên quan Cần Báo cáo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Tầm soát không triệu chứng</strong><br/><em>(Asymptomatic Screening)</em></td>
              <td class="border border-slate-300 p-2">
                &bull; Nguy cơ tăng cao (Elevated risk)<br/>
                &bull; Vú đặc (Dense breasts)<br/>
                &bull; Tiền sử ung thư vú, đã hoàn tất điều trị (Prior breast cancer, treatment completed)<br/>
                &bull; Khác (Other)
              </td>
              <td class="border border-slate-300 p-2">
                &bull; Đột biến gen đã biết (Gene mutation)<br/>
                &bull; Ước tính phần trăm nguy cơ ung thư (Estimated cancer risk)<br/>
                &bull; Tiền sử chi tiết bệnh ung thư vú trước đây
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Đánh giá Chẩn đoán</strong><br/><em>(Diagnostic Work-up)</em></td>
              <td class="border border-slate-300 p-2">
                &bull; Dấu hiệu lâm sàng (Clinical findings)<br/>
                &bull; Dấu hiệu hình ảnh (Imaging findings)<br/>
                &bull; Theo dõi Category 3 (Follow-up category 3)<br/>
                &bull; Theo dõi sau sinh thiết (Follow-up after biopsy)<br/>
                &bull; Đánh giá túi ngực (Implant assessment)<br/>
                &bull; Khác (Other)
              </td>
              <td class="border border-slate-300 p-2">
                &bull; Loại dấu hiệu lâm sàng (sờ thấy khối, tiết dịch núm vú, đau vú)<br/>
                &bull; Loại dấu hiệu hình ảnh cần gọi lại kiểm tra (vôi hóa, bất đối xứng, v.v.)
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium"><strong>Chẩn đoán: Bệnh nhân hiện đang mắc Ung thư vú</strong><br/><em>(Diagnostic: Current Breast Cancer)</em></td>
              <td class="border border-slate-300 p-2">
                &bull; Đánh giá mức độ lan rộng trước điều trị/phẫu thuật (Extent of disease before therapy)<br/>
                &bull; Đánh giá đáp ứng trong hoặc sau hóa trị tân bổ trợ (Response during/after neoadjuvant therapy)<br/>
                &bull; Khác (Other)
              </td>
              <td class="border border-slate-300 p-2">
                &bull; Vị trí và kích thước khối ung thư trên các lần đánh giá hình ảnh trước đó
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 id="comparison-technique-density" class="font-bold text-slate-900 mt-6 mb-2">So sánh Phim cũ, Kỹ thuật & Yêu cầu Pháp lý về Đậm độ Tuyến vú</h4>
      <p>
        <strong>So sánh phim cũ:</strong> Bắt buộc ghi nhận rõ ngày tháng của các lần chụp trước được mang ra so sánh. Nếu là lần đầu tiên chụp nhũ ảnh, ghi rõ "Phim nền ban đầu" (Baseline exam). Nếu bệnh nhân có phim cũ chụp ở nơi khác nhưng chưa chuyển đến được, cần ghi rõ trong báo cáo.
      </p>
      <p>
        <strong>Kỹ thuật chụp:</strong> Mô tả các thế chụp kỹ thuật số 2D (DM), 3D cắt lớp (DBT) và/hoặc nhũ ảnh tổng hợp (SM). Khuyến khích nêu rõ việc áp dụng các phần mềm Trí tuệ nhân tạo (AI) hay Phát hiện hỗ trợ máy tính (CAD).
      </p>
      <p>
        <strong>Đậm độ tuyến vú (Breast Density):</strong> Bắt buộc 100% phải có mặt trong mọi báo cáo nhũ ảnh (tầm soát, chẩn đoán, kiểm tra clip sau thủ thuật, bệnh nhân đoạn nhũ và bệnh nhân nam).
      </p>

      <div class="key-points">
        <strong>Tiêu chuẩn Thay thế FDA Alternative Standard #26 (Tháng 07/2025):</strong>
        Đối với các trường hợp <strong>chụp nhũ ảnh một bên (unilateral mammogram)</strong>, FDA đã chính thức cho phép sử dụng câu từ dạng số ít (singular phrasing) hoặc dạng trung tính thay cho câu từ số nhiều dạng hai bên:
        <br/><br/>
        &bull; <em>"The breast is almost entirely fatty"</em> (Tuyến vú gần như hoàn toàn là mỡ);<br/>
        &bull; <em>"There are scattered areas of fibroglandular density"</em> (Có các vùng đậm độ mô sợi tuyến rải rác);<br/>
        &bull; <em>"The breast is heterogeneously dense, which may obscure small masses"</em> (Tuyến vú dày không đồng nhất, có thể che khuất các khối u nhỏ);<br/>
        &bull; <em>"The breast is extremely dense, which lowers the sensitivity of mammography"</em> (Tuyến vú cực kỳ đặc, làm giảm độ nhạy của nhũ ảnh).
      </div>

      <h4 id="description-findings" class="font-bold text-slate-900 mt-6 mb-2">Quy chuẩn Mô tả Chi tiết Từng Dạng Tổn thương</h4>
      <p>
        Mỗi dạng tổn thương phải được mô tả đầy đủ các thuộc tính cốt lõi theo thứ tự từ vựng chuẩn mực:
      </p>
      <ul>
        <li><strong>Khối (Mass):</strong> Kích thước &rarr; Hình thái (Bầu dục, Đa cung, Tròn, Không đều) &rarr; Đường bờ (Giới hạn rõ, Bị che khuất, Không rõ, Tua gai) &rarr; Đậm độ (Chứa mỡ, Thấp, Đồng đậm độ, Cao) &rarr; Dấu hiệu thứ phát &rarr; Dấu hiệu phối hợp &rarr; Vị trí.</li>
        <li><strong>Vôi hóa (Calcifications):</strong> Kích thước/Độ lan rộng &rarr; Hình thái (Thường lành tính: 8 dạng; Nghi ngờ: Vô định hình, Thô không đồng nhất, Đa hình thái mịn, Dạng đường mảnh/phân nhánh) &rarr; Phân bố (Lan tỏa, Vùng, Thành cụm, Dạng đường, Phân thùy) &rarr; Vị trí.</li>
        <li><strong>Xáo trộn cấu trúc (Architectural Distortion):</strong> Kích thước, dấu hiệu phối hợp, vị trí.</li>
        <li><strong>Các dạng bất đối xứng (Asymmetries):</strong> Bất đối xứng toàn thể, Bất đối xứng một bình diện, Bất đối xứng khu trú &rarr; Kích thước, dấu hiệu phối hợp, vị trí.</li>
        <li><strong>Hạch bạch huyết (Lymph nodes):</strong> Trong tuyến vú / Nách &rarr; Vị trí, hình thái, rốn mỡ, vỏ hạch.</li>
        <li><strong>Tổn thương da & Giãn ống tuyến (SDD):</strong> Vị trí, đặc điểm.</li>
      </ul>

      <h3 id="section-v-c-wording-table-7">C. Quy chuẩn Từ ngữ trong Báo cáo & Bảng Table 7 (FDA-Approved Wording)</h3>
      <p>
        Theo luật định liên bang của FDA Hoa Kỳ (MQSA Final Rule), phần kết luận đánh giá (Assessment) bắt buộc phải sử dụng các <strong>cụm từ ngữ tương đương được FDA phê chuẩn</strong> đặt trước mã số phân loại BI-RADS [54].
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-reporting/table7_fda_approved_wording.jpg" alt="Table 7 – Thuật ngữ tương đương được FDA phê chuẩn cho phân loại BI-RADS" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 7 – Bảng Thuật ngữ Báo cáo Phân loại Đánh giá được FDA Hoa Kỳ Phê chuẩn Tương đương</strong> (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Mammography v2025</em>, trang 158 và 166-167).</figcaption>
      </figure>

      <h2 id="section-vi-guidance">SECTION VI. Hướng dẫn Thực hành Lâm sàng (Guidance)</h2>
      <p>
        Chương Hướng dẫn thực hành (Guidance) đi sâu giải thích cơ sở lý luận khoa học và bằng chứng y học thực chứng đằng sau những thay đổi lớn nhất của Cẩm nang BI-RADS® ấn bản 2025.
      </p>

      <h3 id="guidance-lexicon">1. Hướng dẫn Thay đổi Từ vựng Nhũ ảnh (Lexicon Updates)</h3>
      <ul>
        <li><strong>Khối u (Mass) vs Bất đối xứng (Asymmetry):</strong> Tất cả các dạng bất đối xứng đều có đường bờ cong lõm (concave contour) và thường có mỡ xen kẽ, thiếu độ nổi bật; trong khi khối u có bờ cong lồi hoàn toàn hoặc một phần và đậm hơn ở trung tâm. BI-RADS® 2025 khẳng định: Một tổn thương bộc lộ đầy đủ bờ lồi và độ dày 3D trên các lát cắt liên tiếp của DBT hoàn toàn được định danh là <strong>Khối (Mass) dù chỉ nhìn thấy trên một hướng chụp duy nhất</strong>.</li>
        <li><strong>Hình thái "Đa cung" (Lobulated) & Loại bỏ bờ "Vi đa cung" (Microlobulated):</strong> Thuật ngữ hình thái "Đa cung" (Lobulated - một hoặc nhiều chỗ lõm nông tạo đường viền lượn sóng) chính thức được phục hồi vì phản ánh độ nghi ngờ ác tính cao hơn hình bầu dục thông thường. Đồng thời, thuật ngữ đường bờ "Vi đa cung" (Microlobulated) bị loại bỏ hoàn toàn để tránh trùng lặp; tổn thương có vi đa cung trước đây nay được xếp vào nhóm <strong>Đường bờ không rõ (Indistinct margin)</strong>.</li>
        <li><strong>Vôi hóa Thường Lành tính:</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Bãi bỏ thuật ngữ "Dạng bắp rang" (Popcorn-like) và sáp nhập vào thuật ngữ <strong>Vôi hóa thô (Coarse)</strong> để tránh dùng các từ mô tả liên quan đến thức ăn.</li>
            <li>Sáp nhập hoàn toàn <strong>Vôi hóa dị dưỡng (Dystrophic)</strong> vào danh mục <em>Vôi hóa thô (Coarse)</em>.</li>
            <li>Thay thế "Sữa canxi" (Milk of calcium) bằng <strong>Vôi hóa lắng lớp (Layering)</strong> nhằm nhấn mạnh bản chất hình thái lắng đọng cơ học thay vì thành phần hóa sinh.</li>
            <li>Loại bỏ thuật ngữ "Dạng chấm" (Punctate); mọi vôi hóa tròn dù lớn hay nhỏ hơn 0.5 mm đều được gọi thống nhất là <strong>Vôi hóa tròn (Round)</strong>.</li>
          </ul>
        </li>
        <li><strong>Giãn ống tuyến đơn độc (Solitary Dilated Duct - SDD):</strong> Hạ bậc phân loại từ BI-RADS 4A (sinh thiết ở ấn bản 5) xuống <strong>BI-RADS 2 (Lành tính)</strong> nếu tổn thương ổn định và bệnh nhân không có triệu chứng lâm sàng.</li>
        <li><strong>Bãi bỏ thuật ngữ "Bất đối xứng tiến triển" (Developing Asymmetry):</strong> Loại bỏ thuật ngữ này khỏi bảng từ vựng độc lập để tránh gắn yếu tố thời gian vào định nghĩa hình thái. Tổn thương nay được mô tả là <em>Bất đối xứng khu trú (Focal Asymmetry)</em> và ghi nhận thêm nhận xét về sự thay đổi kích thước/đậm độ. Bác sĩ phải đặc biệt lưu ý: một bất đối xứng khu trú mới xuất hiện hoặc tăng kích thước có giá trị dự báo dương tính ác tính (PPV) rất cao: <strong>7.4% – 12.8% trong tầm soát và 19.7% – 26.7% trong chẩn đoán</strong>, do đó bắt buộc chỉ định sinh thiết ngay cả khi siêu âm không thấy tổn thương tương ứng.</li>
        <li><strong>Quy chuẩn vị trí trên phim MLO:</strong> Độ sâu trên thế chụp MLO được xác định bằng các đường thẳng tưởng tượng chạy <strong>song song với góc nghiêng của cơ ngực lớn</strong>. Phương pháp này hợp lý về mặt giải phẫu, đảm bảo rằng các tổn thương chiếu lên vùng hố nách sẽ luôn được xếp ở <em>độ sâu Sâu (Posterior)</em> chứ không bị rơi vào độ sâu Giữa như trước đây.</li>
      </ul>

      <h3 id="guidance-report-organization">2. Hướng dẫn về Tổ chức Báo cáo & Các Tình huống Lâm sàng Đặc thù</h3>

      <h4 id="guidance-concordance" class="font-bold text-slate-900 mt-4 mb-2">Tương đồng Đánh giá - Xử trí & Các Tình huống Bất tương đồng Thường gặp</h4>
      <p>
        Nguyên tắc vàng của báo cáo nhũ ảnh là: Phân loại đánh giá phải tương thích hoàn toàn với khuyến nghị xử trí (Bảng 4). Tuy nhiên, có những trường hợp lâm sàng đặc thù đòi hỏi khuyến nghị xử trí có vẻ "bất tương đồng" với hình ảnh nhũ ảnh. BI-RADS® 2025 đưa ra quy tắc giải quyết chuẩn mực:
      </p>
      <ul>
        <li><strong>Tình huống 1: Bệnh nhân sờ thấy khối nhưng nhũ ảnh hoàn toàn bình thường:</strong> Kết luận đánh giá nhũ ảnh bắt buộc phải là <strong>Category 1: Âm tính</strong> kèm khuyến nghị tầm soát thường quy tương thích. Sau đó, bổ sung thêm một câu văn khuyến nghị lâm sàng: <em>"Đề nghị khám chuyên khoa phẫu thuật hoặc làm xét nghiệm mô học đối với tổn thương sờ thấy nếu trên lâm sàng thấy cần thiết."</em></li>
        <li><strong>Tình huống 2: Nang đơn thuần điển hình lành tính nhưng gây đau nhiều:</strong> Phân loại đánh giá là <strong>Category 2: Lành tính</strong> kèm khuyến nghị tầm soát định kỳ, bổ sung câu văn: <em>"Đề nghị chọc hút nang để giải áp triệu chứng đau cho người bệnh."</em></li>
        <li><strong>Tình huống 3: Nghi ngờ vỡ túi ngực nhưng không có dấu hiệu ác tính:</strong> Phân loại đánh giá là <strong>Category 2: Lành tính</strong> kèm khuyến nghị tầm soát định kỳ, bổ sung câu văn: <em>"Đề nghị hội chẩn phẫu thuật hoặc chụp MRI vú để đánh giá sự toàn vẹn của bao túi ngực."</em></li>
      </ul>

      <h4 id="guidance-multimodal-table-8" class="font-bold text-slate-900 mt-6 mb-2">Báo cáo Phối hợp Nhiều Kỹ thuật Cùng Ngày & Hệ thống Phân tầng Bất thường (Table 8)</h4>
      <p>
        Khi thực hiện nhiều kỹ thuật chẩn đoán hình ảnh vú trong cùng một ngày (ví dụ: Nhũ ảnh + Siêu âm), ACR khuyến cáo nên phát hành <strong>một bản báo cáo tích hợp chung</strong>. Khi các kết luận của từng phương thức khác nhau, phân loại đánh giá tổng thể và khuyến nghị xử trí cuối cùng bắt buộc phải được đưa ra dựa trên <strong>phát hiện có mức độ ưu tiên hành động cao nhất</strong>.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-reporting/table8_abnormality_hierarchy.jpg" alt="Table 8 – Hệ thống phân tầng mức độ bất thường trong BI-RADS" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 8 – Hệ thống Phân tầng Mức độ Bất thường Giảm dần</strong> (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Mammography v2025</em>, trang 163).</figcaption>
      </figure>

      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">⚡ Thứ tự Phân tầng Mức độ Bất thường Giảm dần (Abnormality Hierarchy):</h4>
        <div class="text-sm font-semibold text-sky-950 p-2 bg-white rounded border border-sky-300 text-center my-2">
          Category 5 &gt; Category 4 &gt; Category 0 &gt; Category 6 &gt; Category 3 &gt; Category 2 &gt; Category 1
        </div>
        <p class="text-xs text-slate-700 leading-relaxed mt-1">
          <em>Ví dụ điển hình:</em> Một bệnh nhân chụp nhũ ảnh chẩn đoán kiểm tra khối sờ thấy cho kết quả bình thường (Category 1), nhưng siêu âm cùng ngày phát hiện một khối đặc bờ không rõ nghi ngờ ác tính (Category 4). Báo cáo tích hợp cuối cùng bắt buộc phải kết luận <strong>BI-RADS Category 4: Nghi ngờ</strong> với khuyến nghị sinh thiết.
          <br/><br/>
          <em>Lưu ý đối với Category 0:</em> Nếu một phát hiện Category 0 trên nhũ ảnh đã được giải quyết dứt điểm bằng siêu âm thực hiện ngay trong cùng ngày (ví dụ: khối trên nhũ ảnh được siêu âm xác nhận là nang đơn thuần Category 2), thì Category 0 đã được giải tỏa hoàn toàn và phân loại tổng thể cuối cùng của báo cáo tích hợp là <strong>Category 2</strong>, không phải Category 0.
        </p>
      </div>

      <h4 id="guidance-single-vs-separate" class="font-bold text-slate-900 mt-6 mb-2">Báo cáo Một Đánh giá Chung so với Đánh giá Riêng cho Từng Bên Vú</h4>
      <p>
        Quy định của FDA cho phép cơ sở y tế lựa chọn đưa ra <strong>một đánh giá tổng thể duy nhất cho cả hai vú</strong> hoặc <strong>đánh giá riêng biệt cho từng bên vú</strong>:
      </p>
      <ul>
        <li>Nếu đưa ra một đánh giá chung duy nhất: Phân loại phải lấy theo bên vú có mức độ bất thường cao hơn (dựa trên hệ thống phân tầng Table 8 nêu trên). Ví dụ: vú phải Category 3, vú trái Category 4 &rarr; Đánh giá tổng thể là <strong>Category 4</strong>.</li>
        <li>Nếu đưa ra đánh giá riêng cho từng vú: FDA bắt buộc gửi một bản báo cáo y khoa duy nhất cho bác sĩ điều trị; bản tóm tắt gửi cho bệnh nhân phải dựa trên đánh giá của bên vú bất thường cao hơn; và ca đọc chỉ được tính là một cuộc khám duy nhất đối với kinh nghiệm chuyên môn của bác sĩ.</li>
      </ul>

      <h2 id="section-vii-faqs">SECTION VII. Các Câu hỏi Thường gặp (Frequently Asked Questions - FAQs)</h2>
      <p>
        Hội đồng ACR BI-RADS® đã tập hợp và giải đáp 14 tình huống lâm sàng thực tế gây nhiều băn khoăn nhất cho các bác sĩ chẩn đoán hình ảnh:
      </p>

      <div class="space-y-4 my-6">
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 1: Sự khác biệt giữa yêu cầu của MQSA và ACR trong việc lập báo cáo nhũ ảnh là gì?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Đạo luật MQSA do FDA thực thi quy định các tiêu chuẩn tối thiểu bắt buộc bằng luật định liên bang. Báo cáo nhũ ảnh phải tuân thủ câu từ được FDA phê chuẩn (FDA-approved wording), sử dụng các cụm từ mô tả tổng thể (như Âm tính, Lành tính, Nghi ngờ...) chứ không bắt buộc dùng mã số. Ngược lại, ACR cung cấp hướng dẫn chuyên môn sâu sắc hơn, sử dụng các mã số và phân nhóm (như 4A, 4B, 4C) để phục vụ kiểm toán và nghiên cứu khoa học. Về mặt pháp lý, báo cáo bắt buộc phải chứa câu từ phê chuẩn của FDA.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 2: Có mã số dạng số trong BI-RADS cho phim "Nhũ ảnh sau thủ thuật để xác nhận vị trí clip đánh dấu" không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Không. ACR không gán mã số dạng số cho phân loại này. Phân loại này chỉ dùng cho mục đích xác nhận vị trí clip sau sinh thiết, được loại trừ khỏi kiểm toán. Lưu ý: nếu phim kiểm tra clip được thực hiện vào một ngày khác với ngày sinh thiết, bắt buộc vẫn phải báo cáo đậm độ tuyến vú theo luật FDA.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 3: Khi phát hành bản bổ sung báo cáo (Addendum) hoặc báo cáo so sánh phim cũ, yêu cầu của FDA là gì?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Sau khi so sánh với phim cũ, bắt buộc phải đưa ra một phân loại đánh giá cuối cùng trong bản bổ sung. Báo cáo này phải được gửi cho bác sĩ điều trị và một bản tóm tắt dễ hiểu phải được gửi cho bệnh nhân (kể cả khi kết quả đánh giá không thay đổi). Bản bổ sung cũng bắt buộc phải bao gồm phân loại đậm độ tuyến vú.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 4: Cơ sở y tế có được dùng các phân nhóm 4A, 4B, 4C thay thế hoàn toàn cho Category 4 (Nghi ngờ) không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Không. Bạn có quyền ghi thêm các phân nhóm 4A, 4B, 4C vào báo cáo, nhưng quy định của FDA bắt buộc từ ngữ "Nghi ngờ" (Suspicious) phải luôn hiện diện và đi trước phân nhóm, không được phép thay thế hoàn toàn thuật ngữ Suspicious bằng 4A/4B/4C.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 5: Khảo sát tầm soát và chẩn đoán thực hiện cùng ngày có thể gộp chung vào một báo cáo hay phải tách làm hai?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Cơ sở có thể phát hành báo cáo riêng hoặc báo cáo gộp. ACR khuyến cáo nên phát hành hai báo cáo riêng biệt để không làm sai lệch số liệu kiểm toán (Audit). Nếu phát hành báo cáo gộp, báo cáo phải nêu rõ đây là kết quả tích hợp, có một đánh giá chung duy nhất, nhưng trong dữ liệu kiểm toán nội bộ phải ghi nhận mã đánh giá riêng cho từng cuộc khám để tính toán tỷ lệ gọi lại (Recall rate) chính xác.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 6: Thấy hạch nách to trên nhũ ảnh tầm soát nhưng hai bên tuyến vú hoàn toàn bình thường: Xử trí BI-RADS thế nào?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Nếu là <strong>hạch nách to đơn độc một bên</strong> không rõ nguyên nhân viêm/nhiễm trùng: Xếp <strong>Category 0</strong> và khuyến nghị gọi lại làm siêu âm chẩn đoán. Khai thác kỹ tiền sử tiêm vắc-xin COVID-19 hoặc vắc-xin khác cùng bên cánh tay trong thời gian gần đây; nếu hồ sơ xác nhận nguyên nhân tiêm chủng lành tính, có thể kết luận Category 2 (nếu mô tả trong báo cáo) hoặc Category 1 (nếu không mô tả).
            <br/><br/>
            Nếu là <strong>hạch nách to hai bên</strong>: Thường do bệnh hệ thống (bệnh tự miễn, nhiễm trùng toàn thân, bệnh lý huyết học/lympho). Nếu có tiền sử rõ ràng, xếp Category 2. Nếu không có tiền sử giải thích, vẫn phải xếp <strong>Category 0</strong> để làm siêu âm và cân nhắc sinh thiết. Lưu ý: Không bao giờ xếp Category 6 cho u lympho hay bạch cầu vì Category 6 chỉ dành riêng cho ung thư có nguồn gốc từ vú.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 7: Có bắt buộc ghi ngày tháng cụ thể của các phim chụp so sánh trước đây không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Mặc dù không bắt buộc bằng luật, ACR đặc biệt khuyến cáo nên ghi cụ thể ngày tháng của các lần khám trước được đưa ra so sánh, đặc biệt là khi đang theo dõi tính ổn định của tổn thương Category 3 hoặc đánh giá đáp ứng điều trị.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 8: Có bắt buộc phải ghi nhận đậm độ tuyến vú cho mọi cuộc khám nhũ ảnh, kể cả phim chẩn đoán khu trú?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Có. BI-RADS và luật FDA bắt buộc phân loại đậm độ tuyến vú trên <strong>mọi cuộc khám nhũ ảnh</strong> dẫn đến một kết luận đánh giá (từ 0 đến 6), kể cả trên bệnh nhân nam, bệnh nhân đã phẫu thuật đoạn nhũ và phim kiểm tra vị trí clip sau thủ thuật. Nếu phim chẩn đoán chỉ chụp một phần mô khu trú, giải pháp tốt nhất là lặp lại phân loại đậm độ của lần chụp hai bên gần nhất để tránh gây nhầm lẫn.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 9: Chỉ ghi ký tự phân loại đậm độ (A, B, C, D) mà không ghi câu mô tả bằng chữ có được không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Không. Tối thiểu bắt buộc phải sử dụng các câu mô tả bằng chữ được FDA phê chuẩn trong báo cáo. Việc bổ sung thêm các ký tự A, B, C, D được khuyến khích để tăng cường tính rõ ràng.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 10: Bác sĩ điều trị chỉ định nhũ ảnh tầm soát kèm "làm siêu âm nếu cần" trên bệnh nhân vú đặc: Xếp BI-RADS nào?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Nếu nhũ ảnh tầm soát bình thường, kết luận đánh giá bắt buộc phải là <strong>Category 1 (Âm tính) hoặc Category 2 (Lành tính)</strong>. Tuyệt đối không được xếp Category 0 chỉ vì bệnh nhân có vú đặc và có thể cần tầm soát bổ sung bằng siêu âm. Thay vào đó, bổ sung một câu khuyến nghị: <em>"Do bệnh nhân có mô tuyến vú đặc, có thể xem xét chỉ định tầm soát bổ sung."</em>
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 11: Bệnh nhân có túi ngực silicone, nhũ ảnh không thấy ung thư nhưng nghi vỡ túi: Có xếp Category 0 để đề nghị chụp MRI không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Không. Kết luận đánh giá nhũ ảnh đúng phải là <strong>Category 2: Lành tính</strong>, đi kèm một câu văn bổ sung khuyến nghị chụp MRI tuyến vú để đánh giá sự toàn vẹn của bao túi ngực.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 12: Tại sao không được xếp Category 3 cho một cụm vôi hóa thấy trên phim nhũ ảnh tầm soát?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Xếp Category 3 chỉ được phép sau khi đã hoàn tất đánh giá chẩn đoán toàn diện. Nếu gọi lại làm thế chụp phóng đại ngay, tổn thương có thể bộc lộ bản chất lành tính (như vôi hóa lắng lớp - layering) giúp bệnh nhân không phải theo dõi 2 năm vô ích; hoặc ngược lại, có thể bộc lộ các vi vôi hóa đa hình thái mịn kín đáo của ung thư biểu mô tại chỗ (DCIS) cần sinh thiết khẩn cấp.
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 13: Bệnh nhân sau phẫu thuật cắt u vú rộng (lumpectomy) diện cắt âm tính có tự động xếp Category 3 không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Không. Các biến đổi sau mổ (sẹo xơ) là dấu hiệu bình thường dự kiến và nếu không có tổn thương mới nghi ngờ thì phải xếp <strong>Category 2: Lành tính</strong>. Chỉ xếp Category 3 nếu xuất hiện một phát hiện đơn độc mới đáp ứng tiêu chuẩn khả năng lành tính (như vôi hóa thô đang tiến triển tại diện mổ nghĩ nhiều đến hoại tử mỡ).
          </p>
        </div>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-1">FAQ 14: Thấy tổn thương có bờ lồi trên nhiều lát cắt DBT liên tiếp nhưng chỉ thấy trên một hướng chụp duy nhất: Có được gọi là Khối không?</h4>
          <p class="text-xs text-slate-700 leading-relaxed">
            Có. Nhờ công nghệ DBT bộc lộ tổn thương trên các lát cắt liên tiếp, việc xác định đầy đủ các đặc tính thể tích 3D của một khối có thể được thực hiện ngay cả khi tổn thương chỉ thấy trên một hướng chụp (do hướng chụp kia bị che khuất hoặc nằm ngoài trường chụp).
          </p>
        </div>
      </div>

      <h2 id="appendix-a-views">APPENDIX A. Các Hướng Chụp Nhũ Ảnh & Bảng Table 9 (Mammographic Views)</h2>
      <p>
        Phụ lục A cung cấp bảng chuẩn hóa quốc tế toàn diện về thuật ngữ và ký hiệu viết tắt cho tất cả các hướng chụp nhũ ảnh thường quy, bổ sung chuyên sâu và kỹ thuật định vị can thiệp:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/table9_mammography_views_p1.jpg" alt="Table 9 – Ký hiệu viết tắt các hướng chụp nhũ ảnh (Phần 1)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 9 (Phần 1) – Danh mục Thuật ngữ và Ký hiệu Viết tắt các Hướng Chụp Nhũ Ảnh</strong> (Trang 171).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/table9_mammography_views_p2.jpg" alt="Table 9 – Ký hiệu viết tắt các hướng chụp nhũ ảnh (Phần 2)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Table 9 (Phần 2) – Ký hiệu Viết tắt các Kỹ thuật Định vị Can thiệp và Sinh thiết</strong> (Trang 172).</figcaption>
        </figure>
      </div>

      <div class="overflow-x-auto my-4">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="bg-sky-100 text-sky-950 font-bold">
              <th class="border border-slate-300 p-2 text-left">Hướng Chụp / Kỹ thuật (Projection/View)</th>
              <th class="border border-slate-300 p-2 text-left">Mã Viết tắt (Labeling Code)</th>
              <th class="border border-slate-300 p-2 text-left">Mô tả & Ứng dụng Lâm sàng Cốt lõi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Chếch ngoài - trong</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">MLO</td>
              <td class="border border-slate-300 p-2">Hướng chụp thường quy bộc lộ toàn bộ mô tuyến vú và cơ ngực lớn, hố nách.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Nghiêng ngoài - trong (90&deg;)</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">ML</td>
              <td class="border border-slate-300 p-2">Bộc lộ chuyển động rơi/lắng lớp của vôi hóa (*layering*); xác định tọa độ tổn thương ngoài.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Nghiêng trong - ngoài (90&deg;)</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">LM</td>
              <td class="border border-slate-300 p-2">Tối ưu hóa độ phân giải cho các tổn thương nằm ở nửa trong tuyến vú.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Sọ - đuôi</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">CC</td>
              <td class="border border-slate-300 p-2">Hướng chụp thường quy bộc lộ mô tuyến nửa trong và ngoài.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Sọ - đuôi kéo dài ra ngoài</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">XCCL</td>
              <td class="border border-slate-300 p-2">Bộc lộ tối đa phần mô sâu sát thành ngực ở góc 1/4 trên ngoài và đuôi nách.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Sọ - đuôi kéo dài vào trong</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">XCCM</td>
              <td class="border border-slate-300 p-2">Bộc lộ tối đa mô tuyến nằm sâu sát xương ức ở phía trong.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Đuôi - sọ (từ dưới lên)</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">FB</td>
              <td class="border border-slate-300 p-2">From Below: bóng phát từ dưới lên, áp dụng cho tổn thương cực trên cao hoặc bệnh nhân gù.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Rãnh liên vú</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">CV</td>
              <td class="border border-slate-300 p-2">Cleavage: bộc lộ mô tuyến sâu nhất vùng khe giữa hai vú.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Đuôi nách</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">AT</td>
              <td class="border border-slate-300 p-2">Axillary Tail: bộc lộ riêng phần đuôi nách của Spence.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Tiếp tuyến</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">TAN</td>
              <td class="border border-slate-300 p-2">Tangential: bộc lộ tổn thương da hoặc sẹo mổ đoạn nhũ, khẳng định hoại tử mỡ.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Ép khu trú</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">S (Spot)</td>
              <td class="border border-slate-300 p-2">Dùng bản ép nhỏ tách rời mô chồng lấp, xác định bờ khối và xáo trộn cấu trúc.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Phóng đại</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">M (Mag)</td>
              <td class="border border-slate-300 p-2">Đánh giá tối ưu hình thái và phân bố vi vôi hóa.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Lăn vú (Rolled views)</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">-RL, -RM, -RS, -RI</td>
              <td class="border border-slate-300 p-2">Lăn mô vú để tách hai cấu trúc nghi ngờ bị chồng hình trên một hướng chụp.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Đẩy túi ngực (Kỹ thuật Eklund)</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">ID</td>
              <td class="border border-slate-300 p-2">Implant-Displaced: đẩy túi ngực ra sau sát thành ngực để ép tối đa nhu mô vú phía trước.</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-2 font-medium">Chiếu nghiêng núm vú</td>
              <td class="border border-slate-300 p-2 font-mono font-bold text-sky-900">-NP</td>
              <td class="border border-slate-300 p-2">Nipple in profile: đảm bảo núm vú chiếu tiếp tuyến không chồng lên mô tuyến sau quầng vú.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="appendix-b-summary-form">APPENDIX B. Biểu Mẫu Tóm Tắt Từ Vựng Nhũ Ảnh BI-RADS® 2025 (Lexicon Summary Form)</h2>
      <p>
        Phụ lục B là <strong>bản từ điển tóm lược hoàn chỉnh nhất</strong> của toàn bộ Hệ thống Từ vựng Nhũ ảnh BI-RADS® v2025 (trang 173–176). Đây là công cụ tra cứu gối đầu giường bắt buộc cho mọi bác sĩ điện quang thực hành vú.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/appendix_b_lexicon_summary_p1.jpg" alt="Appendix B – Biểu mẫu tóm tắt từ vựng (Trang 1)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Appendix B (Trang 1):</strong> Đậm độ tuyến vú, Khối u (Hình thái, Bờ, Đậm độ), Vôi hóa thường lành tính (Trang 173).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/appendix_b_lexicon_summary_p2.jpg" alt="Appendix B – Biểu mẫu tóm tắt từ vựng (Trang 2)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Appendix B (Trang 2):</strong> Vôi hóa nghi ngờ, Kiểu phân bố vôi hóa, Xáo trộn cấu trúc (Trang 174).</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/appendix_b_lexicon_summary_p3.jpg" alt="Appendix B – Biểu mẫu tóm tắt từ vựng (Trang 3)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Appendix B (Trang 3):</strong> Các dạng bất đối xứng, Hạch bạch huyết, Tổn thương da, Giãn ống tuyến, Dấu hiệu phối hợp, Trường hợp đặc biệt (Trang 175).</figcaption>
        </figure>
        <figure class="m-0">
          <img src="/posts/birads-v2025-reporting/appendix_b_lexicon_summary_p4.jpg" alt="Appendix B – Biểu mẫu tóm tắt từ vựng (Trang 4)" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Appendix B (Trang 4):</strong> Vị trí tổn thương, Hệ thống phân loại đánh giá Categories 0 đến 6 (Trang 176).</figcaption>
        </figure>
      </div>

      <h2 id="synthesis-matrix">8. Bảng Ma Trận Quản Lý & Đối Chiếu Pháp Lý FDA/MQSA</h2>
      <div class="synthesis-box">
        <h4 class="font-bold text-slate-900 mb-2 flex items-center gap-2">📋 Ma trận Đối chiếu Toàn diện BI-RADS 2025, Nguy cơ Ác tính & Quy định MQSA/FDA:</h4>
        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs border-collapse">
            <thead>
              <tr class="bg-sky-100 text-sky-950 font-bold">
                <th class="border border-slate-300 p-2 text-left">Phân loại & Mã số</th>
                <th class="border border-slate-300 p-2 text-left">Thuật ngữ FDA Phê duyệt Bắt buộc</th>
                <th class="border border-slate-300 p-2 text-left">Khả năng Ác tính</th>
                <th class="border border-slate-300 p-2 text-left">Khuyến nghị Xử trí</th>
                <th class="border border-slate-300 p-2 text-left">Quy định Kiểm toán & Lưu ý Pháp lý</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 0 (Hình ảnh)</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Incomplete: Need Additional Imaging Evaluation</td>
                <td class="border border-slate-300 p-2">N/A</td>
                <td class="border border-slate-300 p-2">Gọi lại chụp thêm hướng nhũ ảnh chuyên sâu và/hoặc siêu âm.</td>
                <td class="border border-slate-300 p-2">Đưa vào tính tỷ lệ gọi lại (Recall rate). Cấm dùng cho MRI khi nhũ ảnh âm tính.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 0 (Phim cũ)</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Incomplete: Need Prior Mammograms for Comparison</td>
                <td class="border border-slate-300 p-2">N/A</td>
                <td class="border border-slate-300 p-2">Tìm lại phim cũ để so sánh tính ổn định.</td>
                <td class="border border-slate-300 p-2">Bắt buộc ra kết luận cuối trong vòng 30 ngày (addendum kèm báo cáo đậm độ).</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 1</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Negative Mammogram</td>
                <td class="border border-slate-300 p-2 font-semibold text-emerald-700">~ 0%</td>
                <td class="border border-slate-300 p-2">Tầm soát định kỳ thường quy hàng năm.</td>
                <td class="border border-slate-300 p-2">Dùng khi không mô tả bất kỳ tổn thương lành tính nào trong báo cáo.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 2</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Benign Finding / Benign Mammogram</td>
                <td class="border border-slate-300 p-2 font-semibold text-emerald-700">~ 0%</td>
                <td class="border border-slate-300 p-2">Tầm soát định kỳ thường quy hàng năm.</td>
                <td class="border border-slate-300 p-2">Dùng khi có mô tả tổn thương lành tính (u xơ thoái hóa vôi, nang dầu, IMLN, SDD ổn định).</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 3</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Probably Benign - Short Interval Follow-up Suggested</td>
                <td class="border border-slate-300 p-2 font-semibold text-amber-700">&gt; 0% đến &le; 2%</td>
                <td class="border border-slate-300 p-2">Theo dõi nhũ ảnh ngắn hạn: 6 tháng &rarr; 12 tháng &rarr; 24 tháng.</td>
                <td class="border border-slate-300 p-2">Chỉ dùng cho 3 tổn thương kinh điển sau chẩn đoán. Cấm dùng trực tiếp trên tầm soát.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 4 (4A, 4B, 4C)</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Suspicious Finding - Biopsy Should be Considered</td>
                <td class="border border-slate-300 p-2 font-semibold text-rose-700">&gt; 2% đến &lt; 95%</td>
                <td class="border border-slate-300 p-2">Chẩn đoán mô học (sinh thiết kim dưới hướng dẫn siêu âm/stereotactic).</td>
                <td class="border border-slate-300 p-2">Từ "Suspicious" bắt buộc đi trước 4A/4B/4C. Kiểm toán PPV2/PPV3 chặt chẽ.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 5</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Highly Suggestive of Malignancy - Appropriate Action Should be Taken</td>
                <td class="border border-slate-300 p-2 font-semibold text-rose-900">&ge; 95%</td>
                <td class="border border-slate-300 p-2">Chẩn đoán mô học khẩn cấp; nếu kết quả lành tính bị coi là bất tương đồng.</td>
                <td class="border border-slate-300 p-2">Cần tổ hợp nhiều dấu hiệu ác tính. Sinh thiết lại bằng phẫu thuật nếu kim âm tính.</td>
              </tr>
              <tr>
                <td class="border border-slate-300 p-2 font-medium"><strong>Category 6</strong></td>
                <td class="border border-slate-300 p-2 font-mono text-sky-900">Known Biopsy - Proven Malignancy</td>
                <td class="border border-slate-300 p-2">N/A</td>
                <td class="border border-slate-300 p-2">Theo dõi lâm sàng với ung bướu/phẫu thuật; điều trị triệt căn tại chỗ.</td>
                <td class="border border-slate-300 p-2">Miễn trừ khỏi kiểm toán nhũ ảnh. Cấm dùng cho ung thư ngoài nguồn gốc vú.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="key-points-pitfalls">9. 12 Điểm Cốt Lõi Cần Nhớ (Key Points) & 8 Cạm Bẫy Thực Hành (Diagnostic Pitfalls)</h2>

      <div class="key-points">
        <h4 class="font-bold text-emerald-950 mb-2 flex items-center gap-2">
          <span>🌟</span> 12 Điểm Cốt lõi Cần nhớ từ Cẩm nang ACR BI-RADS® v2025:
        </h4>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-800">
          <li><strong>Tách Category 0 thành 2 nhóm riêng biệt:</strong> Bắt buộc phân biệt rõ giữa <em>Cần đánh giá thêm hình ảnh</em> và <em>Cần phim cũ để so sánh</em> theo luật định MQSA 2024.</li>
          <li><strong>Thời hạn 30 ngày cho Category 0 chờ phim cũ:</strong> Cơ sở phải bảo đảm 100% ra được kết luận cuối cùng trong vòng 30 ngày kể cả khi không tìm thấy phim cũ.</li>
          <li><strong>Quy tắc phân tầng đa phương thức:</strong> Khi làm nhiều kỹ thuật trong cùng ngày, phân loại tổng thể tuân theo thứ tự: <strong>5 &gt; 4 &gt; 0 &gt; 6 &gt; 3 &gt; 2 &gt; 1</strong>.</li>
          <li><strong>Cấm xếp Category 3 trực tiếp từ tầm soát:</strong> Bắt buộc phải thực hiện đánh giá chẩn đoán toàn diện trước khi được phép đưa ra phân loại Category 3.</li>
          <li><strong>Chỉ có 3 dấu hiệu kinh điển cho Category 3 trên phim nền:</strong> Khối đặc bờ rõ đơn độc; Bất đối xứng khu trú không có tương quan siêu âm; và Cụm vôi hóa tròn đơn độc.</li>
          <li><strong>Phác đồ 2 năm theo dõi Category 3:</strong> 6 tháng &rarr; 12 tháng &rarr; 24 tháng. Đạt đủ 2 năm ổn định mới được chuyển thành Category 2 Lành tính.</li>
          <li><strong>Xử lý bất tương đồng giữa Đánh giá và Xử trí:</strong> Sờ thấy khối nhưng nhũ ảnh âm tính &rarr; Xếp Category 1 tương thích tầm soát, kèm câu khuyến nghị khám ngoại khoa hoặc sinh thiết.</li>
          <li><strong>Quy định nghiêm ngặt về chỉ định MRI:</strong> Nhũ ảnh âm tính nhưng cần MRI tầm soát bổ sung cho vú đặc &rarr; Xếp Category 1 hoặc 2 + khuyến nghị MRI; TUYỆT ĐỐI không xếp Category 0.</li>
          <li><strong>Bắt buộc báo cáo đậm độ vú ở mọi đối tượng:</strong> Kể cả phim chẩn đoán khu trú, bệnh nhân nam, sau đoạn nhũ, và kiểm tra clip sau thủ thuật.</li>
          <li><strong>Áp dụng FDA Alternative Standard #26:</strong> Được dùng cấu trúc câu số ít cho các ca chụp nhũ ảnh một bên (Unilateral mammograms).</li>
          <li><strong>Bước ngoặt Solitary Dilated Duct (SDD):</strong> Không còn xếp 4A sinh thiết như ấn bản 5; SDD ổn định không triệu chứng chính thức là <strong>BI-RADS 2 Lành tính</strong>.</li>
          <li><strong>Loại bỏ Microlobulated và Developing Asymmetry:</strong> Bờ vi đa cung gộp vào bờ không rõ (Indistinct); bất đối xứng tiến triển gọi là bất đối xứng khu trú kèm nhận xét thay đổi theo thời gian.</li>
        </ol>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-950 mb-2 flex items-center gap-2">
          <span>⚠️</span> 8 Cạm Bẫy Chẩn đoán & Báo cáo Thực hành Nguy hiểm nhất (Diagnostic Pitfalls):
        </h4>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-800">
          <li><strong>Cạm bẫy trì hoãn sinh thiết tổn thương nghi ngờ để chờ phim cũ:</strong> Nếu tổn thương đã bộc lộ rõ tính chất nghi ngờ (Category 4 hoặc 5), bắt buộc chỉ định sinh thiết ngay; TUYỆT ĐỐI không xếp Category 0 để chờ phim cũ làm chậm trễ điều trị ung thư.</li>
          <li><strong>Cạm bẫy lạm dụng Category 0 để hoãn sinh thiết bằng chụp MRI:</strong> MRI không bao giờ được dùng như một phương tiện để "trì hoãn" hoặc "hạ bậc" chỉ định sinh thiết đối với một tổn thương đã nghi ngờ trên nhũ ảnh.</li>
          <li><strong>Cạm bẫy tự động xếp Category 3 cho bệnh nhân sau phẫu thuật cắt u vú (lumpectomy):</strong> Thay đổi xơ sẹo sau mổ thông thường là Category 2; chỉ xếp Category 3 khi có phát hiện đơn độc mới đáp ứng tiêu chuẩn khả năng lành tính (như vôi hóa hoại tử mỡ tiến triển).</li>
          <li><strong>Cạm bẫy dùng Category 6 cho ung thư di căn ngoài vú:</strong> Bệnh nhân mắc u lympho hay bạch cầu có hạch nách to không được xếp Category 6 vì phân loại này chỉ dành riêng cho ung thư nguyên phát từ biểu mô tuyến vú.</li>
          <li><strong>Cạm bẫy xếp Category 0 khi siêu âm cùng ngày đã giải quyết được tổn thương:</strong> Nếu khối trên nhũ ảnh được siêu âm xác nhận là nang đơn thuần, phân loại tổng thể của báo cáo kết hợp phải là <strong>Category 2</strong>, không được để sót Category 0.</li>
          <li><strong>Cạm bẫy nhầm lẫn giữa tụt núm vú và co rút núm vú:</strong> Tụt núm vú (Inversion) hai bên, kéo ra được là lành tính; co rút núm vú (Retraction) mới xuất hiện, một bên và không kéo hồi phục được là dấu hiệu báo động đỏ ác tính.</li>
          <li><strong>Cạm bẫy bỏ qua bất đối xứng khu trú mới vì siêu âm âm tính:</strong> Bất đối xứng khu trú mới có PPV ác tính lên tới 26.7%; bắt buộc chỉ định sinh thiết dưới hướng dẫn nhũ ảnh/stereotactic ngay cả khi siêu âm không thấy gì.</li>
          <li><strong>Cạm bẫy dùng số thập phân cho khoảng cách từ núm vú:</strong> Bắt buộc ghi bằng số nguyên cm (ví dụ 2 cm, 5 cm); tuyệt đối không ghi 2.3 cm hay 4.8 cm để tránh gây ảo tưởng sai lầm về độ chính xác giữa các phương thức chụp.</li>
        </ol>
      </div>

    `,
    views: 1680,
    readTime: "25 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 149-176)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "Hệ thống báo cáo", "Reporting System", "BI-RADS Categories", "Guidance", "Từ vựng Nhũ ảnh", "Chẩn đoán hình ảnh vú"]
  },
  {
    id: "birads-2025-sieu-am-tuyen-vu-giai-phau-ky-thuat-toi-uu-va-abus",
    title: "Cẩm nang ACR BI-RADS® 2025: Siêu âm Tuyến vú (Ultrasound) – Giải phẫu, Tối ưu hóa Kỹ thuật, Đo đạc & Siêu âm 3D tự động (ABUS)",
    slug: "birads-2025-sieu-am-tuyen-vu-giai-phau-ky-thuat-toi-uu-va-abus",
    date: "02 Tháng 11, 2026",
    updatedDate: "02 Tháng 11, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "Siêu âm", "BI-RADS 2025", "Giải phẫu", "Kỹ thuật", "ABUS"],
    categorySlugs: ["vu", "sieu-am", "bi-rads-2025"],
    modality: "Siêu âm",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025-ultrasound-general/cover_ultrasound_anatomy.jpg",
    excerpt: "Cập nhật toàn diện từ Cẩm nang ACR BI-RADS® v2025 phần Siêu âm tuyến vú (trang 190–226): Giải phẫu học siêu âm các lớp mô vú và hạch nách, mốc giải phẫu định vị đối chiếu với nhũ ảnh/MRI, tối ưu hóa thông số kỹ thuật (tần số đầu dò, áp lực nén, FOV, tiêu điểm, gain thang xám, compound imaging), quy chuẩn gán nhãn và đo đạc (viền tăng âm vs vỏ giả), nguyên tắc lưu trữ hồ sơ và vai trò của siêu âm 3D tự động toàn vú (ABUS) trong tầm soát vú đặc.",
    content: [
      "Giải phẫu học siêu âm 5 lớp mô vú và hạch nách: Tiêu chuẩn bề dày vỏ hạch bình thường <= 3 mm; mốc giải phẫu cốt lõi định vị đối chiếu tổn thương giữa Nhũ ảnh / MRI sang Siêu âm.",
      "Tối ưu hóa 6 thông số kỹ thuật máy siêu âm: Tần số đầu dò linear >= 12-18 MHz, áp lực nén bảo tồn Doppler, trường nhìn FOV thích hợp, vị trí tiêu cự, gain thang xám và đánh đổi của compound imaging.",
      "Quy chuẩn gán nhãn, đo đạc trực giao 3 chiều (bắt buộc đo bao gồm viền tăng âm ở khối ác tính), tiêu chuẩn lưu trữ hồ sơ và giá trị của siêu âm 3D tự động (ABUS) với hiện tượng co kéo (retraction phenomenon) trong tầm soát vú đặc."
    ],
    htmlContent: `
      <div class="synthesis-box">
        <h4 class="font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <span>🎯</span> TÓM TẮT NỘI DUNG THEN CHỐT
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Chương mở đầu toàn diện của phần <strong>Siêu âm tuyến vú (ULTRASOUND)</strong> trong Cẩm nang <em>ACR BI-RADS® v2025</em> (trang 190–226): Phân tích chi tiết giải phẫu học siêu âm 5 lớp mô tuyến vú và hệ bạch huyết nách (tiêu chuẩn bề dày vỏ hạch bình thường &le; 3 mm); Các mốc giải phẫu cốt lõi để định vị và đối chiếu tổn thương giữa Nhũ ảnh / MRI sang Siêu âm; Quy chuẩn tối ưu hóa 6 thông số máy then chốt (tần số đầu dò, áp lực nén, trường nhìn FOV, tiêu cự, độ khuếch đại thang xám, compound imaging); Nguyên tắc gán nhãn và đo đạc chuẩn mực (phân biệt sống còn giữa đo vỏ giả của u lành và đo viền tăng âm của u ác tính); Tiêu chuẩn lưu trữ hồ sơ; và Vai trò của siêu âm 3D tự động toàn vú (ABUS) trong tầm soát vú đặc cùng hiện tượng co kéo (retraction phenomenon) trên mặt phẳng coronal.
        </p>
      </div>

      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: Cẩm nang ACR BI-RADS® v2025 – Khởi đầu Phần Siêu âm Tuyến vú (Ultrasound)
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Đây là <strong>phần nội dung mở đầu cho toàn bộ hệ thống Siêu âm tuyến vú (Ultrasound)</strong> trong Cẩm nang <em>ACR BI-RADS® v2025 Manual</em> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology - ACR), tiếp nối sau trọn bộ 6 bài giảng về Nhũ ảnh (Mammography). Chương này bao gồm từ trang 190 đến trang 226 của tài liệu gốc, thiết lập nền tảng khoa học và kỹ thuật lâm sàng cho toàn bộ việc thực hành siêu âm vú hiện đại.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Các điểm nhấn cập nhật và quy chuẩn thực hành quan trọng nhất bao gồm:
        </p>
        <ul class="text-sm text-slate-700 list-disc pl-5 mt-1 space-y-1">
          <li><strong>Giải phẫu học siêu âm & Cảnh báo an toàn:</strong> Mô tả chi tiết cấu trúc 5 lớp giải phẫu từ nông đến sâu; đặc điểm ống dẫn sữa và đơn vị ống tận - tiểu thùy (TDLU); đặc biệt lưu ý hình thái nụ tuyến vú tuổi dậy thì (pubertal breast bud) - nghiêm cấm sinh thiết hay phẫu thuật cắt bỏ vì sẽ làm tuyến vú mất hoàn toàn khả năng phát triển.</li>
          <li><strong>Mốc giải phẫu định vị đối chiếu (Location Landmarks):</strong> Việc ghi nhận chính xác lớp mô giải phẫu chứa tổn thương (lớp mỡ dưới da, mô sợi tuyến, lớp mỡ sau tuyến, hay ranh giới giữa các lớp) có giá trị định vị cao hơn nhiều so với ước lượng độ sâu hoặc khoảng cách từ núm vú trên phim ép nhũ ảnh.</li>
          <li><strong>Tối ưu hóa 6 thông số kỹ thuật máy siêu âm:</strong> Hướng dẫn cụ thể về tần số đầu dò linear (&ge; 12–18 MHz), áp lực nén thích hợp (tránh đè xẹp dòng chảy chậm trên Doppler), trường nhìn FOV (không để quá sâu gây lãng phí độ phân giải), vị trí tiêu cự (tránh xảo ảnh tạo âm phản xạ giả trong nang), độ khuếch đại thang xám (mỡ dưới da phải là màu xám trung bình) và đánh đổi của siêu âm kết hợp không gian (compound imaging làm giảm bóng lưng âm học).</li>
          <li><strong>Quy tắc đo đạc chuẩn mực & Phân biệt Viền tăng âm vs Vỏ giả:</strong> Đo 3 chiều trực giao theo trục dài nhất của tổn thương; u lành bờ rõ (u sợi tuyến) chỉ đo lõi giảm âm loại trừ vỏ giả; u ác tính bờ không rõ/tua gai <em>bắt buộc phải đo bao gồm cả viền tăng âm (echogenic rind)</em> vì viền này tương quan trực tiếp với phản ứng xơ hóa mô đệm và xâm lấn tế bào ung thư, dự báo chính xác nhất kích thước mô bệnh học.</li>
          <li><strong>Siêu âm 3D tự động toàn vú (ABUS) & Hiện tượng co kéo:</strong> Giá trị của ABUS trong tầm soát bổ sung ở phụ nữ có mô tuyến vú đặc; hiện tượng co kéo (retraction phenomenon) trên mặt phẳng coronal tái tạo 3D; quy tắc pháp lý tối thượng: ABUS tầm soát nghi ngờ chỉ được xếp <strong>Category 0 (Incomplete)</strong> để gọi lại làm siêu âm chẩn đoán cầm tay, tuyệt đối không xếp trực tiếp Category 3, 4 hoặc 5.</li>
        </ul>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Theo đúng quy ước biên tập thống nhất: toàn văn bài dịch nguyên bản từ cẩm nang được trình bày với chữ đen trên nền trắng tiêu chuẩn; toàn bộ 34 hình ảnh minh họa độ phân giải cao (300 DPI) được nhúng kèm chú thích chi tiết; các phần tổng hợp ma trận kỹ thuật, 10 điểm cốt lõi và 8 cạm bẫy thực hành được đóng khung màu nổi bật để quý đồng nghiệp dễ dàng nhận diện và tra cứu.
        </p>
      </div>

      <h2 id="section-i-general-considerations">SECTION I. Các xem xét chung (General Considerations)</h2>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Phần Siêu âm tuyến vú trong Cẩm nang ACR BI-RADS® v2025 mở đầu bằng các xem xét nền tảng về giải phẫu học siêu âm, cơ sở kỹ thuật tối ưu hóa thiết bị, quy chuẩn gán nhãn, đo đạc kích thước và các phương thức siêu âm hiện đại. Việc nắm vững các nguyên lý này là điều kiện tiên quyết để đạt được chất lượng hình ảnh chẩn đoán cao nhất và chuẩn hóa ngôn ngữ báo cáo quốc tế.
      </p>

      <h3 id="section-i-a-breast-anatomy">A. Giải phẫu Tuyến vú (Breast Anatomy)</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Tuyến vú nằm trên thành ngực trước, trải dài giữa xương sườn thứ hai và xương sườn thứ sáu, được bọc trong các lá của mạc ngực nông (superficial pectoral fascia). Mô mỡ và mô sợi tuyến của vú nằm kẹp giữa lá nông của mạc này (ngay dưới da) và lá sâu của mạc ngực (ngay phía trước cơ ngực lớn - <em>pectoralis major muscle</em>) (<strong>Hình 1</strong>).
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/figure1_netter_breast_anatomy.jpg" alt="Hình 1 – Giải phẫu tuyến vú bình thường trên bình diện Coronal và Axial (Sơ đồ Frank Netter)" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – NORMAL BREAST ANATOMY.</strong> Sơ đồ giải phẫu tuyến vú bình thường trên bình diện trán (Coronal - A) và bình diện trục (Axial - B). Thể hiện rõ các thành phần: núm vú, quầng vú, củ Montgomery, xoang sữa (lactiferous sinus / ampulla), các ống dẫn sữa (lactiferous ducts), các nang tuyến (acini/alveoli) cùng nhu mô, mỡ dưới da, mỡ trong tuyến vú, mạc nông, mạc sâu, dây chằng treo Cooper và cơ ngực lớn (Pectoralis major) (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Ultrasound v2025</em>, trang 190, bản quyền minh họa Netter / Elsevier Inc.).</figcaption>
      </figure>

      <h4 id="anatomy-lobes-ducts-tdlu" class="font-bold text-slate-900 mt-6 mb-3">1. Cấu trúc Thùy, Tiểu thùy và Đơn vị Ống tận - Tiểu thùy (TDLU)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Tuyến vú được cấu thành từ khoảng 12 đến 20 phân khu hoặc thùy (lobes). Mỗi thùy bao gồm nhiều tiểu thùy nhỏ hơn (lobules) - tức là các mô sợi tuyến mà khi được kích thích thích hợp bởi các hormone sẽ sản xuất ra sữa. Các tiểu thùy bắt đầu từ những nhánh ngoại vi nhỏ và tận cùng tại một ống góp lớn (ống dẫn sữa), có lỗ mở (punctum) nhìn thấy được trên núm vú (<strong>Hình 2</strong>). Các ống dẫn sữa xa nhất ở ngoại vi, gọi là các ống tận trong tiểu thùy (intra-lobular terminal ducts), kết thúc tại <strong>đơn vị ống tận - tiểu thùy (Terminal Duct Lobular Units - TDLUs)</strong>. Đây chính là cấu trúc vi thể nguồn gốc phát sinh phần lớn các bệnh lý lành tính và ác tính thường gặp của tuyến vú.
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/figure2_lactiferous_duct.jpg" alt="Hình 2 – Giải phẫu ống dẫn sữa bình thường trên mặt cắt nan hoa" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – NORMAL BREAST ANATOMY.</strong> Mặt cắt nan hoa (Radial view) minh họa giải phẫu bình thường của một ống dẫn sữa bắt nguồn từ các tiểu thùy ở ngoại vi, uốn cong ra phía trước (đầu mũi tên) hướng về phía núm vú. Ống dẫn sữa nằm bên trong vùng mô sợi tuyến ngay bên dưới một lớp mỡ (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Ultrasound v2025</em>, trang 191).</figcaption>
      </figure>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> CẢNH BÁO AN TOÀN SỐNG CÒN: NỤ TUYẾN VÚ TUỔI DẬY THÌ (PUBERTAL BREAST BUD)
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Sự phát triển tuyến vú (thelarche) thường đánh dấu sự khởi đầu của tuổi dậy thì ở nữ giới (<strong>Hình 3</strong>). Tuyến vú bé gái ở tuổi dậy thì có hình ảnh siêu âm tương tự như nữ hóa tuyến vú (gynecomastia) ở nam giới, với cấu trúc mô giảm âm (hypoechoic tissue) nằm ngay phía sau núm vú. Bởi vì những bệnh nhân trẻ tuổi này thông thường không chụp nhũ ảnh, <strong>điều tối quan trọng là không được diễn giải sai nụ tuyến vú giảm âm sau quầng vú này như một bất thường cần phải sinh thiết</strong>. Vùng này phải được nhận diện là cấu trúc giải phẫu hoàn toàn bình thường ở lứa tuổi dậy thì; <strong>nếu nụ tuyến này bị phẫu thuật cắt bỏ, tuyến vú bên đó sẽ vĩnh viễn không thể phát triển!</strong>
        </p>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/figure3_pubertal_breast_bud.jpg" alt="Hình 3 – Nụ tuyến vú tuổi dậy thì bình thường" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – NORMAL BREAST ANATOMY - PUBERTAL.</strong> Cấu trúc mô giảm âm sinh lý bình thường nằm ngay phía sau núm vú (mũi tên) ở trẻ em gái tuổi dậy thì (Trích nguyên tác Cẩm nang <em>ACR BI-RADS® Ultrasound v2025</em>, trang 191).</figcaption>
      </figure>

      <h4 id="anatomy-vascular-lymphatics" class="font-bold text-slate-900 mt-6 mb-3">2. Mạch máu và Hệ thống Dẫn lưu Bạch huyết</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Nguồn cấp máu động mạch cho tuyến vú được cung cấp bởi các động mạch dưới đòn (subclavian) và động mạch nách (axillary) cùng các nhánh ngực ngoài (lateral thoracic), ngực cùng vai (thoracoacromial), ngực trên (superior thoracic) và động mạch vú trong (internal mammary / internal thoracic). Hệ thống mạch máu tĩnh mạch nằm chủ yếu ở lớp nông ngay sâu dưới da. <strong>Trên 90% lượng dịch bạch huyết của tuyến vú dẫn lưu vào hố nách cùng bên (ipsilateral axilla)</strong>, với một tỷ lệ nhỏ dẫn lưu vào chuỗi hạch vú trong. Ở những bệnh nhân đã phẫu thuật nạo vét hạch nách hoặc đoạn nhũ lan rộng vào hố nách, dòng dẫn lưu bạch huyết có thể đổi hướng sang hố nách đối bên.
      </p>

      <h4 id="anatomy-normal-axillary-lymph-nodes" class="font-bold text-slate-900 mt-6 mb-3">3. Đặc điểm Hạch Nách Bình thường (Axillary Lymph Nodes)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Hố nách chứa các hạch bạch huyết, đám rối thần kinh cánh tay (brachial plexus), động mạch và tĩnh mạch nách. Số lượng và kích thước của các hạch nách bình thường biến thiên rất lớn giữa các cá thể. <strong>Không có giới hạn kích thước trên cho một hạch nách bình thường nếu phần vỏ hạch vẫn duy trì độ mỏng thích hợp</strong>. Bề dày vỏ hạch là một thước đo chưa hoàn hảo cho tính chất lành tính của hạch, nhưng <strong>hầu hết các hạch bình thường đều có phần vỏ không dày quá 3 mm (&le; 3 mm)</strong> [1].
      </p>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Sự đối xứng hai bên về kích thước, hình thái và số lượng hạch là yếu tố rất hữu ích giúp phân biệt hạch bình thường với bất thường. Trên nhũ ảnh, các hạch nách thường được ghi nhận dưới dạng khối bờ rõ, hình bầu dục, thường có hình hạt đậu/hình quả thận (reniform) với rốn hạch sáng chứa mỡ và phần vỏ có đậm độ mô mềm. Trên siêu âm, <strong>hạch nách hoặc hạch trong tuyến vú bình thường có rốn hạch tăng âm chứa mỡ (echogenic fatty hilum) và phần vỏ giảm âm mỏng đồng đều (hypoechoic cortex)</strong> (<strong>Hình 4</strong>).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/figure4a_normal_lymph_node_trans.jpg" alt="Hình 4A – Hạch nách bình thường mặt cắt ngang" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4A – NORMAL AXILLARY LYMPH NODE.</strong> Mặt cắt ngang (Transverse plane - A) của hạch nách có kích thước, bề dày vỏ hạch bình thường (&le; 3 mm) và rốn hạch tăng âm, mang hình thái quả thận thu nhỏ (Trích nguyên tác trang 192).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/figure4bc_normal_lymph_node_long_axilla.jpg" alt="Hình 4B, C – Hạch nách bình thường mặt cắt dọc và giải phẫu hố nách" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4B, C – NORMAL AXILLARY LYMPH NODE (Tiếp theo).</strong> (B) Mặt cắt dọc (Longitudinal plane) của hạch nách bình thường. (C) Giải phẫu hố nách: Cơ ngực lớn (PM) nằm trước cơ ngực bé (pm) với tĩnh mạch nách (AV) nằm sâu dưới cả hai cơ (Trích nguyên tác trang 193).</figcaption>
        </figure>
      </div>

      <h4 id="anatomy-nipple-areola" class="font-bold text-slate-900 mt-6 mb-3">4. Núm vú và Quầng vú (Nipple and Areola)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Phức hợp núm - quầng vú biến thiên rất nhiều, với đường kính quầng vú khác biệt lớn giữa các bệnh nhân dựa trên độ tuổi và thể tích vú, điều này khiến <strong>núm vú trở thành một mốc giải phẫu đáng tin cậy hơn nhiều so với quầng vú</strong> [2]. Núm vú bình thường có thể nhô cao, phẳng hoặc tụt. Khi nghi ngờ có bất thường ở núm vú, việc so sánh đối chiếu với bên đối diện là rất hữu ích.
      </p>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Các khe nứt và bề mặt gồ ghề của núm vú có thể gây ra bóng lưng âm học phía sau (posterior shadowing) trong khi quét siêu âm. Việc sử dụng một lớp gel dày hoặc đệm gel (gel standoff pad / gel offset) có thể tạo ra môi trường truyền âm lý tưởng để bộc lộ rõ núm vú (<strong>Hình 5</strong>). Tuy nhiên, trên thực hành, các mô nằm ngay sau núm vú và quầng vú thường được khảo sát tốt nhất bằng cách quét đầu dò chếch góc (oblique scanning) để chùm tia không truyền trực tiếp xuyên qua núm vú. Lớp da quầng vú thon mỏng dần khi lan tỏa ra xa núm vú. Bề dày da bình thường của tuyến vú lên tới 2 mm, ngoại trừ vùng quầng vú và nếp lằn dưới vú (inframammary fold), nơi da sinh lý thường dày hơn một chút [3].
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/figure5_nipple_gel_offset.jpg" alt="Hình 5 – Giải phẫu núm vú với đệm gel" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 5 – ANATOMY: NIPPLE AND UNDERLYING BREAST TISSUE.</strong> Đệm gel (A và B) giúp bộc lộ da và mô nông. (A) Núm vú bình thường. (B) Núm vú phì đại do ung thư biểu mô tuyến thể nhầy (mucinous carcinoma) nằm bên trong núm (Trích nguyên tác trang 194).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/figure6_nipple_3d_abus.jpg" alt="Hình 6 – Siêu âm 3D tự động toàn vú (ABUS) khảo sát núm vú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 6 – ANATOMY: NIPPLE AND UNDERLYING BREAST (ABUS).</strong> Quét siêu âm toàn vú tự động tư thế nằm ngửa. Trực giao 3 mặt phẳng: Coronal (Z-plane góc trên trái); Sagittal (Y-plane góc trên phải); Tái tạo 3D (góc dưới phải); B-mode ngang (X-plane góc dưới trái). Mô dưới núm vú không bị bóng lưng che khuất như siêu âm cầm tay (Trích nguyên tác trang 195).</figcaption>
        </figure>
      </div>

      <h4 id="anatomy-breast-layers-zones" class="font-bold text-slate-900 mt-6 mb-3">5. Cấu trúc Năm Lớp Mô Giải phẫu Tuyến vú (Anatomical Layers)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Hình ảnh siêu âm tuyến vú thể hiện cấu trúc phân tầng rõ rệt của giải phẫu bình thường (<strong>Hình 7</strong>). Tính từ nông vào sâu, các lớp giải phẫu bao gồm:
      </p>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-800 mb-4">
        <li><strong>Lớp Da (Skin):</strong> Tăng âm (echogenic), có bề dày bình thường &lt; 2 mm.</li>
        <li><strong>Lớp Mỡ dưới da (Subcutaneous fat - SubQ):</strong> Đồng phản âm (isoechoic) hoặc giảm âm nhẹ so với nhu mô tuyến, bao gồm các thùy mỡ hình bầu dục được nâng đỡ bởi các vách dây chằng treo Cooper.</li>
        <li><strong>Vùng Mô Sợi Tuyến (Fibroglandular zone - FGZ):</strong> Tăng âm, chứa các thùy và tiểu thùy tuyến vú. Độ phản âm có thể thay đổi tùy thuộc vào tỷ lệ thành phần mô tuyến và mô mỡ bên trong.</li>
        <li><strong>Lớp Mỡ sau tuyến vú (Retroglandular fat - Retro):</strong> Lớp mỡ mỏng đồng phản âm nằm giữa mặt sau mô sợi tuyến và mạc ngực sâu.</li>
        <li><strong>Cơ Ngực lớn (Pectoralis major muscle - Pec):</strong> Cấu trúc dải cơ đồng phản âm nằm sâu nhất trên thành ngực trước.</li>
      </ol>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/figure7_breast_layers_anatomy.jpg" alt="Hình 7 – Cấu trúc năm tầng lớp giải phẫu siêu âm tuyến vú" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 7 – ANATOMY: LAYERED APPEARANCE OF NORMAL BREAST.</strong> Hình ảnh siêu âm minh họa cấu trúc phân tầng giải phẫu bình thường của tuyến vú. Từ nông đến sâu: da (skin), mỡ dưới da (subQ), vùng mô sợi tuyến (fgz) chứa các tiểu thùy, mỡ sau tuyến (retro), và cơ ngực lớn (pec) (Trích nguyên tác trang 195).</figcaption>
      </figure>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/figure8_normal_skin_complex.jpg" alt="Hình 8 – Cấu trúc phức hợp da bình thường ở tần số 18 MHz và 26 MHz" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 8 – ANATOMY: NORMAL SKIN COMPLEX.</strong> Khảo sát da ở tần số 18 MHz (A) và 26 MHz (B). Hai đường tăng âm sắc nét giới hạn một lớp ít tăng âm hơn ở giữa có tổng bề dày &lt; 2 mm (ngoại trừ vùng quầng vú hoặc nếp lằn dưới vú có thể dày hơn). Đệm gel giúp quan sát rõ lớp nông của da. Vùng hội tụ (focal zone) phải được đặt ở lớp nông khi đánh giá da (Trích nguyên tác trang 196).</figcaption>
      </figure>

      <h4 id="anatomy-location-of-findings" class="font-bold text-slate-900 mt-6 mb-3">6. Định vị Tổn thương (Location of Findings): Vai trò của các Tầng Lớp Giải phẫu</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Cấu trúc phân tầng của giải phẫu vú bình thường cung cấp những <strong>mốc chuẩn then chốt giúp định vị một khối u ban đầu được phát hiện trên các phương thức hình ảnh khác (như Nhũ ảnh, MRI) hoặc qua khám lâm sàng</strong>.
      </p>
      <div class="synthesis-box my-4">
        <h5 class="font-bold text-indigo-950 text-xs uppercase mb-1">💡 NGUYÊN TẮC ĐỊNH VỊ CỐT LÕI CỦA BI-RADS 2025</h5>
        <p class="text-xs text-slate-800 leading-relaxed">
          Khi mô tả vị trí của một khối u, vùng bất đối xứng hoặc xáo trộn cấu trúc nghi ngờ phát hiện trên nhũ ảnh, <strong>việc ghi nhận chính xác lớp mô mà tổn thương cư trú (lớp mỡ dưới da, vùng mô sợi tuyến, hay lớp mỡ sau tuyến) có giá trị thực tiễn cao hơn nhiều so với việc báo cáo độ sâu biểu kiến hoặc khoảng cách chính xác từ núm vú ước tính trên các thế chụp nhũ ảnh bị ép nén</strong>. Khoảng cách từ núm vú trên nhũ ảnh có thể được ước lượng tương đối theo một phần ba trước (nông), một phần ba giữa, hoặc một phần ba sau (sâu) của tuyến vú (<strong>Hình 1–4 dưới đây</strong>).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/location_fig1_subq_node.jpg" alt="Vị trí tổn thương Hình 1 – Hạch trong tuyến vú ở lớp mỡ dưới da" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – LOCATION (Mỡ dưới da).</strong> Mô tả lớp mô giúp bác sĩ siêu âm tìm đúng cấu trúc tương ứng. Nhũ ảnh MLO (A) thấy khối bầu dục bờ rõ trong lớp mỡ dưới da (dấu tam giác). Vị trí này được xác nhận chính xác trên siêu âm (B). GPB: Hạch trong tuyến vú phản ứng (Trích nguyên tác trang 197).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/location_fig2_fgz_fibroadenoma.jpg" alt="Vị trí tổn thương Hình 2 – U sợi tuyến trong vùng mô sợi tuyến" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – LOCATION (Vùng mô sợi tuyến).</strong> Khối phát hiện trên lát cắt DBT vú trái (A) nằm bên trong vùng mô sợi tuyến (khoanh tròn). Siêu âm tương ứng (B) thấy khối không đều, bờ không rõ trong vùng FGZ. Việc đối chiếu đúng lớp mô khẳng định tổn thương trên nhũ ảnh và siêu âm là một. GPB: U sợi tuyến (Trích nguyên tác trang 198).</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/location_fig3_retroglandular_idc.jpg" alt="Vị trí tổn thương Hình 3 – Ung thư xâm lấn trong lớp mỡ sau tuyến" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – LOCATION (Lớp mỡ sau tuyến).</strong> Khối trên thế ép khu trú CC (A) và MLO (B) nằm trong lớp mỡ sau tuyến vú. Siêu âm (C) thấy khối không song song kèm viền tăng âm (echogenic rind) trong lớp mỡ sau tuyến (retro). GPB: Ung thư biểu mô tuyến ống xâm lấn (IDC) (Trích nguyên tác trang 199).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/location_fig4_interface_microcysts.jpg" alt="Vị trí tổn thương Hình 4 – Cụm vi nang tại ranh giới giữa mỡ dưới da và mô sợi tuyến" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – LOCATION (Ranh giới giao diện).</strong> Ranh giới giữa các lớp mô là mốc định vị rất hữu ích. Khối (mũi tên) trên nhũ ảnh ML (A) nằm ngay tại ranh giới giữa mỡ dưới da và mô sợi tuyến. Trên siêu âm (B), khối là một cụm vi nang (cluster of microcysts) nằm đúng tại ranh giới giữa subQ và fgz (Trích nguyên tác trang 200).</figcaption>
        </figure>
      </div>

      <h3 id="section-i-b-image-quality">B. Chất lượng Hình ảnh & Tối ưu hóa Thiết bị (Image Quality)</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Giá trị lâm sàng của siêu âm tuyến vú phụ thuộc hoàn toàn vào việc tạo ra những hình ảnh có chất lượng kỹ thuật cao nhất. Khảo sát siêu âm vú cầm tay sử dụng đầu dò tần số cao phụ thuộc chủ yếu vào <strong>kỹ năng của người thực hành, chất lượng trang thiết bị và cấu hình tối ưu của các thông số kỹ thuật trên hệ thống máy siêu âm</strong>. Chất lượng hình ảnh kém có thể dẫn đến việc diễn giải sai các dấu hiệu, chẩn đoán nhầm lẫn giữa tổn thương lành tính và ác tính, hoặc bỏ sót hoàn toàn các ung thư giai đoạn sớm.
      </p>

      <h4 id="iq-transducer-frequency" class="font-bold text-slate-900 mt-6 mb-3">1. Tần số Đầu dò (Transducer Frequency)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Để khảo sát tuyến vú, Hiệp hội Điện quang Hoa Kỳ (ACR) khuyến nghị sử dụng <strong>đầu dò linear mảng phẳng (linear array) có dải tần số cao, thông thường từ 12 đến 18 MHz trở lên</strong>. Tần số đầu dò cao mang lại độ phân giải không gian (spatial resolution) và độ phân giải tương phản (contrast resolution) vượt trội, cho phép bộc lộ sắc nét đường bờ của các khối u nghi ngờ, đánh giá xáo trộn cấu trúc xung quanh và phân biệt các vi vôi hóa nhỏ nằm trong ống tuyến (<strong>Hình 1 & 2</strong>).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_freq_fig1_transducer_frequency_idc.jpg" alt="Chất lượng hình ảnh Hình 1 – Tần số đầu dò bộc lộ bờ u và xáo trộn cấu trúc" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – IMAGE QUALITY: TRANSDUCER FREQUENCY.</strong> Đường bờ và xáo trộn cấu trúc bao quanh khối u không đều này trở nên sắc nét và dễ đặc trưng hóa hơn rất nhiều nhờ độ phân giải được nâng cao của đầu dò tần số cao (18 MHz so với tần số thấp hơn). GPB: Ung thư biểu mô tuyến ống xâm lấn (IDC) (Trích nguyên tác trang 201).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_freq_fig2_microcalcifications.jpg" alt="Chất lượng hình ảnh Hình 2 – Đầu dò 17-5 MHz bộc lộ vi vôi hóa trong ống tuyến" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – IMAGE QUALITY: TRANSDUCER FREQUENCY.</strong> Hình ảnh thu được bằng đầu dò linear dải tần 12–5 MHz (A) đủ tiêu chuẩn chẩn đoán, nhưng được cải thiện vượt bậc khi chuyển sang đầu dò dải tần 17–5 MHz (B). Trong cả hai hình, các vi vôi hóa nằm trong lòng ống tuyến (mũi tên) trong vùng mô sợi tuyến được thấy rõ hơn nhiều trên hình (B) (Trích nguyên tác trang 202).</figcaption>
        </figure>
      </div>

      <h4 id="iq-transducer-pressure" class="font-bold text-slate-900 mt-6 mb-3">2. Áp lực Đầu dò (Transducer Pressure) & Kỹ thuật Ép</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Việc tạo một áp lực nén thích hợp của đầu dò lên bề mặt da tuyến vú đem lại nhiều lợi ích quan trọng:
      </p>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-1">
        <li>Làm mỏng lớp mô vú cần khảo sát, giúp tăng độ xuyên thấu của chùm sóng âm.</li>
        <li><strong>Triệt tiêu các bóng lưng âm học giả tạo (artifactual acoustic shadowing)</strong> sinh ra do sự uốn khúc của các vách mô xơ và dây chằng Cooper (<strong>Hình 3</strong>).</li>
        <li>Làm rõ nét ranh giới đường bờ của các tổn thương dạng nang hoặc khối đặc.</li>
      </ul>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> LƯU Ý SỐNG CÒN KHI SỬ DỤNG DOPPLER MÀU: NÉN ĐẦU DÒ QUÁ MỨC
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Ngược lại với chế độ B-mode, <strong>khi khảo sát tưới máu bằng Doppler màu (Color Doppler) hoặc Doppler năng lượng (Power Doppler), việc ấn đầu dò quá mạnh sẽ đè xẹp các vi mạch máu có áp lực thấp và dòng chảy chậm bên trong khối u</strong>, dẫn đến nhận định sai lầm là khối u không có tưới máu (<strong>Hình 4</strong>). Luôn quét Doppler với lực tiếp xúc đầu dò nhẹ nhàng nhất có thể.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_press_fig3_compression_cyst.jpg" alt="Chất lượng hình ảnh Hình 3 – Áp lực nén đầu dò bộc lộ bờ nang và xóa bóng lưng giả" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – IMAGE QUALITY: TRANSDUCER PRESSURE.</strong> Mặt cắt ngược nan hoa (Antiradial) của một nang trống âm. Hình (A) nén chưa đủ làm bờ nang bị nhòe và mô xơ xung quanh tạo bóng lưng giả. Tăng lực nén thích hợp (B) bộc lộ bờ nang sắc nét và xóa sạch bóng lưng xảo ảnh (Trích nguyên tác trang 202).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_press_fig4_doppler_slow_flow.jpg" alt="Chất lượng hình ảnh Hình 4 – Áp lực đầu dò trong khảo sát Doppler màu dòng chảy chậm" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – IMAGE QUALITY: TRANSDUCER PRESSURE (DOPPLER).</strong> Khối hỗn hợp đặc và nang. Ở hình (A), lực ép đầu dò mạnh làm giảm hiển thị mạch máu. Cùng tần số Doppler nhưng ép nhẹ đầu dò (B), dòng chảy mạch máu tốc độ chậm được bộc lộ đầy đủ và chính xác. GPB: U sợi tuyến (Trích nguyên tác trang 203).</figcaption>
        </figure>
      </div>

      <h4 id="iq-field-of-view" class="font-bold text-slate-900 mt-6 mb-3">3. Trường nhìn (Field of View - FOV) & Tối ưu hóa Độ sâu</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Trường nhìn (FOV) là phạm vi mô được hiển thị trên màn hình siêu âm. <strong>Cài đặt tối ưu là trường nhìn cho phép quan sát trọn vẹn từ bề mặt da cho đến bờ trước cơ ngực lớn (pectoralis major muscle) và KHÔNG bao gồm màng phổi hay phổi</strong> (<strong>Hình 1</strong>).
      </p>
      <div class="synthesis-box my-4">
        <h5 class="font-bold text-indigo-950 text-xs uppercase mb-1">📐 QUY TẮC PHẠM VI CHIỀU SÂU FOV</h5>
        <p class="text-xs text-slate-800 leading-relaxed">
          Mô tuyến vú cần khảo sát (từ da đến cơ ngực lớn) <strong>phải chiếm ít nhất 75% chiều sâu của màn hình hiển thị</strong>. Nếu trường nhìn đặt quá sâu (FOV too deep), toàn bộ mô vú chỉ co cụm ở nửa trên màn hình (chiếm 50% hoặc ít hơn), trong khi vùng sâu từ 2–4 cm chỉ là phổi và xương sườn hoàn toàn vô giá trị (<strong>Hình 2 & 3</strong>). Điều này làm suy giảm nghiêm trọng độ phân giải, khiến các tổn thương nhỏ hoặc nông trông bị thu nhỏ quá mức và không thể đặc trưng hóa chính xác. Ngược lại, nếu đặt FOV quá nông hoặc phóng đại quá mức, bờ khối có thể bị nhòe và các tổn thương ở lớp sâu sẽ bị bỏ sót.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig1_appropriate_fov.jpg" alt="Chất lượng hình ảnh Hình 1 – Trường nhìn FOV thích hợp" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – IMAGE QUALITY: FIELD OF VIEW (FOV).</strong> Hình thang xám mở rộng (EFOV) mặt cắt ngang thể hiện FOV thích hợp: da (mũi tên) ở trường gần và cơ ngực lớn (đầu mũi tên) ở trường xa. Vùng mỡ dưới da (*) có màu xám trung bình, vùng mô sợi tuyến FGZ nằm sau mỡ dưới da (Trích nguyên tác trang 204).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig2_too_deep.jpg" alt="Chất lượng hình ảnh Hình 2 – Trường nhìn FOV quá sâu gây suy giảm độ phân giải" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – IMAGE QUALITY: FOV TOO DEEP.</strong> Lát cắt dưới chuẩn tại vị trí 6:00 vú trái: mô vú từ da đến cơ ngực chỉ chiếm 50% độ sâu của FOV. Từ độ sâu 2–4 cm hoàn toàn không có thông tin về vú. Tiêu điểm (biểu tượng XX) cũng bị đặt quá sâu (Trích nguyên tác trang 205).</figcaption>
        </figure>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig3_complicated_cyst_deep.jpg" alt="Chất lượng hình ảnh Hình 3 – Cài đặt độ sâu FOV không chuẩn cho nang biến chứng" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – IMAGE QUALITY: FIELD OF VIEW (FOV).</strong> Nang biến chứng hình bầu dục, hướng song song, có tăng âm phía sau. Tiêu điểm đặt đúng vị trí nang; tuy nhiên độ sâu FOV dưới chuẩn và quá sâu, bao gồm cả xương sườn và màng phổi, có thể dẫn đến phân loại và diễn giải sai lệch nang này (Trích nguyên tác trang 205).</figcaption>
      </figure>

      <h4 id="iq-trapezoidal-efov-panoramic" class="font-bold text-slate-900 mt-6 mb-3">Trường nhìn Hình thang (Trapezoidal), Toàn cảnh (Extended FOV / Panoramic) & Siêu âm 3D</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Các đầu dò linear dùng cho tuyến vú thường có chiều dài bề mặt từ 4.0 đến 5.5 cm. Khi gặp tổn thương kích thước lớn hoặc đa tổn thương lan rộng:
      </p>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-1">
        <li><strong>Trường nhìn hình thang (Trapezoidal FOV):</strong> Chuyển màn hình từ dạng chữ nhật sang hình thang giúp mở rộng góc quét ở lớp sâu, bộc lộ toàn bộ tổn thương lớn (<strong>Hình 4 & 5</strong>).</li>
        <li><strong>Chế độ chia đôi màn hình (Split screen):</strong> Chụp nửa bên phải rồi nửa bên trái để ghép nối đo kích thước ước tính.</li>
        <li><strong>Trường nhìn mở rộng / Toàn cảnh (Extended FOV / Panoramic - EFOV):</strong> Quét quét liên tục tạo một dải hình ảnh toàn cảnh dài, cho phép thể hiện toàn bộ phạm vi của một ổ tụ dịch/áp xe lớn, hoặc tương quan vị trí giữa nhiều khối u với núm vú (<strong>Hình 5, 6, 7</strong>) [5].</li>
        <li><strong>Khảo sát thể tích 3D (Volumetric Acquisition / ABUS):</strong> Sử dụng đầu dò chuyên dụng 14–15 cm quét quét tự động thu thập dữ liệu thể tích toàn vú, tái tạo đồng thời 3 mặt phẳng trực giao (X-plane ngang, Y-plane đứng dọc, Z-plane coronal) giúp hiểu rõ không gian ba chiều của tổn thương (<strong>Hình 8, 9, 10</strong>).</li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig4_trapezoidal.jpg" alt="Chất lượng hình ảnh Hình 4 – Trường nhìn hình thang đánh giá u sợi tuyến 3 cm" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – IMAGE QUALITY: TRAPEZOIDAL FOV.</strong> Trường nhìn hình thang đánh giá khối giảm âm 3 cm đa cung, song song, bờ rõ, tăng âm sau. FOV cài đặt chuẩn bao gồm cơ ngực nhưng không có phổi. Tiêu điểm đặt đúng vị trí u. GPB: U sợi tuyến (Trích nguyên tác trang 206).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig5_palpable_lump_rectangular_trapezoid_efov.jpg" alt="Chất lượng hình ảnh Hình 5 – So sánh trường nhìn chữ nhật, hình thang và EFOV" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 5 – IMAGE QUALITY: RECTANGULAR VS TRAPEZOIDAL VS EFOV.</strong> Khối sờ thấy 5 cm. Hình chữ nhật (A) bị giới hạn; hình thang (B) bộc lộ toàn vẹn khối; trường nhìn mở rộng EFOV (C) mang lại hình ảnh tương quan hoàn hảo của khối với mô xung quanh (Trích nguyên tác trang 207).</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig6_abscess_rectangular_vs_efov.jpg" alt="Chất lượng hình ảnh Hình 6 – EFOV bộc lộ toàn bộ ổ áp xe vú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 6 – IMAGE QUALITY: EFOV IN BREAST ABSCESS.</strong> Hình chữ nhật (A) chỉ thấy một phần khối hỗn hợp có cặn di động. Hình EFOV (B) bộc lộ trọn vẹn toàn bộ phạm vi ổ tụ mủ áp xe ở bệnh nhân sau sinh bị viêm tuyến vú tái phát. GPB: Áp xe (Trích nguyên tác trang 208).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig7_panoramic_multiple_cysts.jpg" alt="Chất lượng hình ảnh Hình 7 – Quét toàn cảnh EFOV chuỗi đa nang tuyến vú" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 7 – IMAGE QUALITY: EFOV OF MULTIPLE CYSTS.</strong> Lát cắt toàn cảnh EFOV bộc lộ vô số nang đơn giản nằm rải rác bên trong vùng mô sợi tuyến, giúp bác sĩ nắm bắt nhanh chóng phân bố tổn thương (Trích nguyên tác trang 209).</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig8_volumetric_abus_planes.jpg" alt="Chất lượng hình ảnh Hình 8 – Tái tạo 3 mặt phẳng trực giao trên hệ thống ABUS" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 8 – ABUS VOLUMETRIC ACQUISITION.</strong> Hệ thống tự động 3D hiển thị mặt phẳng đứng dọc (trái), mặt phẳng coronal tái tạo (giữa) và mặt phẳng ngang (phải). Dấu chấm vàng biểu thị núm vú (Trích nguyên tác trang 209).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig9_granulomatous_mastitis_abus.jpg" alt="Chất lượng hình ảnh Hình 9 – Ổ mủ áp xe vô khuẩn trong viêm vú hạt trên ABUS" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 9 – ABUS IN GRANULOMATOUS MASTITIS.</strong> Khối tụ dịch mủ vô khuẩn được xác định trên 3 bình diện trực giao với tâm chữ thập. GPB: Viêm vú hạt (Granulomatous mastitis) (Trích nguyên tác trang 210).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_fov_fig10_multiple_masses_abus.jpg" alt="Chất lượng hình ảnh Hình 10 – Khảo sát đa khối u trên ABUS thể tích" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 10 – ABUS LARGE FOV MULTIPLE MASSES.</strong> Tâm chữ thập giao tại khối bầu dục, bờ rõ, song song tại vị trí 12:00. Mặt phẳng coronal tái tạo mô sợi tuyến màu trắng và mô mỡ màu xám đậm (Trích nguyên tác trang 211).</figcaption>
        </figure>
      </div>

      <h4 id="iq-focal-zone" class="font-bold text-slate-900 mt-6 mb-3">4. Vùng Hội tụ / Tiêu cự (Focal Zone)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Để phân biệt chính xác tổn thương, <strong>tiêu cự phải được đặt ở mức một phần ba trước-đến-giữa của vùng quan tâm, hoặc đặt ngay tại trung tâm/bờ sâu của tổn thương</strong>.
      </p>
      <div class="pitfalls my-6">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> CẠM BẪY XẢO ẢNH PHẢN XẠ GIẢ KHI ĐẶT SAI TIÊU CỰ
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Nếu tiêu điểm bị đặt không thích hợp ở vị trí sâu bên dưới khối u, chùm sóng âm chưa hội tụ ở lớp nông sẽ tạo ra <strong>các âm vang phản xạ giả (artifactual internal echoes) lấp đầy bên trong nửa trước của một nang trống âm hoàn toàn (Hình 1)</strong>! Điều này khiến nang đơn thuần bị chẩn đoán nhầm thành khối u đặc hoặc nang biến chứng. Khi chỉnh tiêu điểm về đúng giữa nang, tính chất trống âm thuần nhất được khẳng định ngay lập tức.
        </p>
      </div>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Việc cài đặt 2–3 tiêu điểm hoặc 1 tiêu điểm dải rộng sẽ tăng độ phân giải của mô trong vùng đó; tuy nhiên, nếu dùng quá 3 tiêu điểm trên các máy đời cũ, tốc độ khung hình (frame rate) sẽ bị chậm rõ rệt, cản trở việc quét thời gian thực (<strong>Hình 1–4</strong>).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_focal_fig1_cyst_internal_echoes_artifact.jpg" alt="Chất lượng hình ảnh Hình 1 – Tiêu điểm đặt sai tạo âm vang giả trong nang" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – IMAGE QUALITY: FOCAL ZONE.</strong> Tiêu cự (biểu tượng XX) đặt sai bên dưới khối (A) tạo âm vang giả ở nửa trước nang. Khi đặt tiêu điểm đúng ở giữa nang (B), tính chất trống âm hoàn toàn không còn nghi ngờ (Trích nguyên tác trang 212).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_focal_fig2_posterior_vs_anterior.jpg" alt="Chất lượng hình ảnh Hình 2 – Vị trí tiêu điểm ở tổn thương nông" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – IMAGE QUALITY: FOCAL ZONE (NÔNG).</strong> Tiêu điểm đặt ở sau khối nông trong (A) và đặt ở mặt trước khối trong (B). Vị trí tiêu cự chuẩn giúp bộc lộ rõ đường bờ (Trích nguyên tác trang 213).</figcaption>
        </figure>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_focal_fig3_carcinoma_conspicuity.jpg" alt="Chất lượng hình ảnh Hình 3 – Tiêu cự ảnh hưởng đến độ rõ nét của ung thư" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – IMAGE QUALITY: FOCAL ZONE (UNG THƯ).</strong> Vị trí đặt tiêu cự ảnh hưởng trực tiếp đến độ rõ nét và tính nổi bật của tổn thương ung thư. Đặt tiêu điểm lệch khỏi tổn thương (B) làm đường bờ trở nên kém sắc nét rõ rệt (Trích nguyên tác trang 214).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_focal_fig4_abscess_focal_zone.jpg" alt="Chất lượng hình ảnh Hình 4 – Cài đặt tiêu cự trong ổ áp xe" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 4 – IMAGE QUALITY: FOCAL ZONE (ÁP XE).</strong> Tiêu điểm đặt tại mức trung tâm ổ tụ mủ giúp đánh giá thành phần dịch và các dải vách ngăn bên trong. GPB: Áp xe (Trích nguyên tác trang 215).</figcaption>
        </figure>
      </div>

      <h4 id="iq-grayscale-gain" class="font-bold text-slate-900 mt-6 mb-3">5. Độ Khuếch đại Thang xám (Grayscale Gain)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Sóng siêu âm bị hấp thụ và suy giảm khi truyền vào các mô ở sâu. Tăng Gain thang xám giúp bù trừ sự suy giảm năng lượng này.
      </p>
      <div class="synthesis-box my-4">
        <h5 class="font-bold text-indigo-950 text-xs uppercase mb-1">🎯 MỐC THAM CHIẾU CHUẨN XÁC CHO GAIN THANG XÁM</h5>
        <p class="text-xs text-slate-800 leading-relaxed">
          Gain thang xám phải được cài đặt sao cho nhu mô tuyến vú bình thường trải rộng trên toàn bộ dải sắc thái xám. <strong>Mốc tham chiếu chuẩn: Các thùy mỡ dưới da (subcutaneous fat lobules) BẮT BUỘC PHẢI CÓ MÀU XÁM TRUNG BÌNH (medium gray), TUYỆT ĐỐI KHÔNG ĐƯỢC CÓ MÀU ĐEN</strong>.
        </p>
      </div>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-red-900 mb-2 flex items-center gap-2">
          <span>🚨</span> NGUY HIỂM CHẾT NGƯỜI: CÀI ĐẶT GAIN QUÁ THẤP TRONG UNG THƯ VÚ TAM ÂM (TNBC)
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          - <strong>Nếu Gain đặt quá cao:</strong> Mô vú chuyển thành màu trắng sáng, che lấp các tổn thương nhỏ và khiến các nang đơn giản trông giống như khối u đặc.<br />
          - <strong>Nếu Gain đặt quá thấp:</strong> Mô mỡ dưới da chuyển sang màu đen thui. <strong>Hậu quả cực kỳ nguy hiểm là một khối u đặc rất giảm âm (đặc biệt là Ung thư vú thể tam âm - Triple Negative Breast Cancer / TNBC) sẽ bị biến thành cấu trúc trống âm (anechoic) và bị chẩn đoán nhầm thành nang đơn giản (Hình 2)</strong>!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_gain_fig1_simple_cyst_optimal_gain.jpg" alt="Chất lượng hình ảnh Hình 1 – Gain tối ưu cho nang đơn giản" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – IMAGE QUALITY: GRAY SCALE GAIN (NANG).</strong> Nang đơn giản được khảo sát tối ưu với gain và tiêu điểm chuẩn. Trung tâm nang hoàn toàn trống âm, phân biệt rõ với mô mỡ và nhu mô màu xám trung bình xung quanh. Mũi tên chỉ xảo ảnh dội lại (reverberation) ở thành trước nang (Trích nguyên tác trang 216).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_gain_fig2_triple_negative_gain_too_low.jpg" alt="Chất lượng hình ảnh Hình 2 – Gain quá thấp gây chẩn đoán nhầm ung thư vú tam âm" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – IMAGE QUALITY: GAIN IN TRIPLE NEGATIVE CANCER.</strong> Hai bệnh nhân ung thư vú thể tam âm (TNBC). Ở hình (A), cài đặt Gain quá thấp không phù hợp khiến khối ung thư này trông như hoàn toàn trống âm (anechoic). Mô mỡ phải có màu xám như trong hình (B) để không chẩn đoán nhầm ung thư thành nang! (Trích nguyên tác trang 217).</figcaption>
        </figure>
      </div>

      <h4 id="iq-compound-imaging" class="font-bold text-slate-900 mt-6 mb-3">6. Siêu âm Kết hợp Không gian (Spatial Compound Imaging) & Giảm Đốm nhiễu</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Kỹ thuật kết hợp không gian (Spatial Compounding) điều khiển chùm sóng âm phát theo nhiều góc độ quét khác nhau để tạo thành một hình ảnh tổng hợp trung bình.
      </p>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-1">
        <li><strong>Lợi ích vượt trội:</strong> Giảm nhiễu đốm (speckle reduction), triệt tiêu các xảo ảnh phản xạ nhiều lần (reverberation artifacts) ở thành trước nang (<strong>Hình 1</strong>), và làm sắc nét rõ rệt đường bờ của khối u cùng các xáo trộn cấu trúc mô đệm [6, 7].</li>
        <li><strong>Đánh đổi kỹ thuật (Trade-off):</strong> <strong>Kỹ thuật này có thể làm suy giảm hoặc triệt tiêu bóng lưng âm học phía sau (Acoustic Shadowing)</strong> — vốn là một dấu hiệu gợi ý ác tính rất quan trọng (<strong>Hình 2 & 3</strong>). Hiện tượng tăng âm phía sau cũng có thể bị thu hẹp thành hình nón. Bác sĩ cần linh hoạt bật/tắt compound imaging khi cần đánh giá bóng lưng âm học.</li>
      </ul>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/iq_compound_fig1_cyst_reverberation_elimination.jpg" alt="Chất lượng hình ảnh Hình 1 – Compound imaging triệt tiêu xảo ảnh dội lại trong nang" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – IMAGE QUALITY: COMPOUND IMAGING.</strong> Chế độ thông thường (A) thấy xảo ảnh dội lại ở thành trước nang (mũi tên). Kỹ thuật kết hợp không gian (B) triệt tiêu hoàn toàn xảo ảnh, giúp nang trở về trạng thái trống âm thuần khiết (Trích nguyên tác trang 218).</figcaption>
      </figure>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_compound_fig2_simple_cyst.jpg" alt="Chất lượng hình ảnh Hình 2 – Nang đơn giản lành tính trên Compound Imaging" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – IMAGE QUALITY: COMPOUND IMAGING.</strong> Nang đơn giản lành tính không có bóng lưng âm học phía sau dưới chế độ siêu âm kết hợp không gian (Trích nguyên tác trang 219).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/iq_compound_fig3_loss_of_shadowing.jpg" alt="Chất lượng hình ảnh Hình 3 – Compound imaging làm suy giảm bóng lưng âm học sau khối u" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – COMPOUND IMAGING & LOSS OF SHADOWING.</strong> Khối giảm âm có bờ không đều và bóng lưng sau rõ trên siêu âm thông thường (A). Khi bật kết hợp không gian (B), đường bờ trở nên sắc nét hơn nhưng bóng lưng âm học phía sau bị suy giảm đáng kể (Trích nguyên tác trang 219).</figcaption>
        </figure>
      </div>

      <h3 id="section-i-c-labeling-measurement">C. Quy chuẩn Gán nhãn & Đo đạc Kích thước Tổn thương (Labeling and Measurement)</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Việc gán nhãn chính xác và đo đạc chuẩn mực là bắt buộc theo Tiêu chuẩn Thực hành của ACR đối với siêu âm tuyến vú chẩn đoán [4] và các thủ thuật can thiệp vú dưới hướng dẫn siêu âm [8].
      </p>

      <h4 id="labeling-standards" class="font-bold text-slate-900 mt-6 mb-3">1. Chín Thông số Gán nhãn Bắt buộc trên Hình ảnh Siêu âm</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Mỗi bức ảnh siêu âm lưu trong hồ sơ bệnh án bắt buộc phải chứa đầy đủ 9 thông số sau:
      </p>
      <ol class="list-decimal pl-5 space-y-1.5 text-sm text-slate-800 mb-4">
        <li>Tên cơ sở y tế và địa điểm thực hiện (Facility name and location).</li>
        <li>Ngày giờ thực hiện cuộc khám (Examination date).</li>
        <li>Họ và tên đầy đủ của người bệnh (Patient's first and last name).</li>
        <li>Mã số định danh y tế (ID) và/hoặc Ngày tháng năm sinh (Date of birth).</li>
        <li>Chỉ định rõ bên vú: <strong>Vú Phải (Right - RT)</strong> hoặc <strong>Vú Trái (Left - LT)</strong>.</li>
        <li>Vị trí giải phẫu theo quy ước mặt đồng hồ (Clock-face notation, làm tròn đến giờ gần nhất, ví dụ 2:00, 10:30) hoặc sơ đồ tuyến vú có đánh dấu.</li>
        <li>Hướng quét của đầu dò: Nan hoa (Radial - Rad), Ngược nan hoa (Antiradial - ARad), Cắt ngang (Transverse - Trans), Cắt dọc (Sagittal - Sag), hoặc Chếch (Oblique).</li>
        <li><strong>Khoảng cách từ núm vú đến tâm tổn thương tính bằng centimet (cm from nipple - FN):</strong> Đo từ núm vú làm mốc chuẩn (không đo từ bờ quầng vú vì quầng vú biến thiên rất lớn). <em>Làm tròn lên hoặc xuống đến số nguyên centimet gần nhất (ví dụ 1 cm FN, 4 cm FN) để tránh tạo ảo tưởng sai lầm về độ chính xác cơ học</em>.</li>
        <li>Mã số, chữ ký viết tắt hoặc ký hiệu định danh của kỹ thuật viên siêu âm và/hoặc bác sĩ đọc kết quả.</li>
      </ol>

      <h4 id="measurement-rules" class="font-bold text-slate-900 mt-6 mb-3">2. Quy tắc Đo đạc Kích thước Ba Chiều Trực giao</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        - <strong>Quy chuẩn làm tròn số:</strong> Khi sử dụng đơn vị cm, làm tròn không quá một chữ số thập phân (ví dụ: 0.45–0.49 cm làm tròn thành 0.5 cm; 2.43 cm làm tròn thành 2.4 cm). Khi sử dụng đơn vị mm, bắt buộc ghi số nguyên (ví dụ: 12.4 mm làm tròn thành 12 mm). Bắt buộc sử dụng thống nhất một loại đơn vị trong toàn bộ bản báo cáo.<br />
        - <strong>Ba kích thước trực giao:</strong> Khi có thể, phải cung cấp 3 kích thước của tổn thương. Kích thước lớn nhất biểu thị <strong>trục dài nhất của tổn thương (longest axis)</strong>. Kích thước thứ hai định hướng vuông góc với trục thứ nhất. Kích thước thứ ba được đo trên mặt cắt vuông góc 90 độ so với hai kích thước ban đầu (<strong>Sơ đồ trực giao bên dưới</strong>).
      </p>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/measuring_diagram_orthogonal_planes.jpg" alt="Sơ đồ đo đạc 3 chiều trực giao của tổn thương" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>DIAGRAM – THREE ORTHOGONAL MEASUREMENTS.</strong> Sơ đồ nguyên tắc đo đạc 3 chiều trực giao: (A) Hình ảnh ban đầu tìm trục dài nhất; (B) Xoay đầu dò 90 độ đo chiều trực giao thứ ba: Trên - Dưới (Superior - Inferior), Ngoài - Trong (Lateral - Medial), Trước - Sau (Anterior - Posterior) (Trích nguyên tác trang 220).</figcaption>
      </figure>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <span>⚠️</span> SAI LẦM PHỔ BIẾN KHI ĐO KHỐI U NẰM CHẾCH
        </h4>
        <p class="text-sm text-slate-800 leading-relaxed">
          Đối với các khối u hoặc nang nằm chếch góc, <strong>thước đo phải được đặt theo trục thực tế dài nhất của khối rồi kẻ đường vuông góc (Hình 1A). TUYỆT ĐỐI KHÔNG ĐƯỢC lấy khung hình chữ nhật của màn hình máy siêu âm làm mốc để đo chiều ngang và chiều dọc (Hình 1B)</strong> vì sẽ bóp méo hoàn toàn kích thước thực tế của tổn thương!
        </p>
      </div>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/measuring_fig1_longest_axis_vs_box.jpg" alt="Quy chuẩn đo đạc Hình 1 – Đo theo trục dài nhất so với đo theo khung hình sai lầm" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – LABELING AND MEASUREMENT.</strong> Đo đạc đa chiều của một nang nằm chếch: Hình (A) đo chuẩn xác bằng cách tìm trục dài nhất của khối rồi đo kích thước vuông góc với trục đó. Hình (B) đo sai hoàn toàn khi lấy khung hình chữ nhật của màn hình làm hệ quy chiếu (Trích nguyên tác trang 221).</figcaption>
      </figure>

      <h4 id="measurement-pseudocapsule-vs-rind" class="font-bold text-slate-900 mt-6 mb-3">3. Phân biệt Sống còn: Vỏ Giả (Pseudocapsule) vs Viền Tăng Âm (Echogenic Rind / Halo)</h4>
      <div class="synthesis-box my-4">
        <h5 class="font-bold text-indigo-950 text-xs uppercase mb-1">⚖️ NGUYÊN TẮC ĐO ĐẠC ĐỈNH CAO CỦA ACR BI-RADS 2025</h5>
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>
            <strong>1. Đối với Khối lành tính bờ rõ (chuyển tiếp đột ngột - như U sợi tuyến):</strong><br />
            Phép đo <strong>chỉ bao gồm phần lõi giảm âm (hypoechoic portion)</strong>. Tuyệt đối <em>KHÔNG đo viền tăng âm mỏng bao quanh</em> (<strong>Hình 2 - trái</strong>) vì viền này thực chất là <strong>vỏ giả (pseudocapsule)</strong> đại diện cho mô lành xung quanh bị khối u chèn ép sinh lý.
          </p>
          <p>
            <strong>2. Đối với Khối nghi ngờ ác tính có bờ không rõ hoặc tua gai (chuyển tiếp nhòe mờ):</strong><br />
            Tổn thương thường đi kèm một <strong>viền tăng âm dày (echogenic rind)</strong> chứa các dải tua gai tỏa ra mô xung quanh. Phép đo trên siêu âm <strong>BẮT BUỘC PHẢI BAO GỒM CẢ PHẦN GIẢM ÂM TRUNG TÂM VÀ VIỀN TĂNG ÂM XUNG QUANH (Hình 2 - phải & Hình 3)</strong>!
          </p>
          <p>
            <strong>Cơ sở khoa học:</strong> Các nghiên cứu giải phẫu bệnh [9, 10] chứng minh rằng viền tăng âm này chính là vùng <strong>phản ứng xơ hóa mô đệm (desmoplastic reaction) đi kèm sự xâm lấn của các tế bào ung thư</strong>. Nếu chỉ đo phần giảm âm trung tâm, kích thước khối u sẽ bị đánh giá thấp hơn thực tế từ 2 mm đến hơn 5 mm, làm sai lệch giai đoạn T (TNM staging) và diện cắt phẫu thuật tồn dư ung thư!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/measuring_fig2_pseudocapsule_vs_echogenic_rind.jpg" alt="Quy chuẩn đo đạc Hình 2 – So sánh vỏ giả của u sợi tuyến và viền tăng âm của ung thư" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – PSEUDOCAPSULE VS ECHOGENIC RIND.</strong> Bên trái: U sợi tuyến có bờ rõ, đo chỉ lấy phần giảm âm, không đo vỏ giả mỏng (mũi tên). Bên phải: Khối không đều có viền tăng âm tua gai, phép đo bắt buộc phải gồm cả khối giảm âm và viền tăng âm để dự báo chính xác kích thước mô bệnh học (Trích nguyên tác trang 221).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/measuring_fig3_echogenic_rind_prediction.jpg" alt="Quy chuẩn đo đạc Hình 3 – Đo bao gồm viền tăng âm tương quan tốt nhất với GPB" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 3 – MEASURING ECHOGENIC RIND.</strong> Khối ung thư giảm âm không đều. (A) Đo bao gồm cả u và viền tăng âm cho kích thước tương quan chuẩn xác nhất với GPB. (B) Thể hiện sự chênh lệch: nếu chỉ đo lõi giảm âm, kích thước bị hụt mất khoảng 2 mm (Trích nguyên tác trang 222).</figcaption>
        </figure>
      </div>

      <h3 id="section-i-d-documentation">D. Quy tắc Ghi nhận & Lưu trữ Hồ sơ Siêu âm (Documentation)</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Việc lưu trữ hồ sơ siêu âm cần đảm bảo tính chặt chẽ về pháp lý nhưng đồng thời phải tối ưu hóa thời gian và tài nguyên lưu trữ của cơ sở y tế:
      </p>

      <h4 id="doc-cysts-nodes-masses" class="font-bold text-slate-900 mt-6 mb-3">1. Quy chuẩn cho Nang, Hạch trong Tuyến vú và Đa khối U lành tính</h4>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-2">
        <li><strong>Khi có nhiều nang (Multiple Cysts):</strong> Các hình ảnh đại diện là đủ. Không cần thiết phải lưu ảnh và đo đạc từng nang một trên hai mặt cắt; <strong>chỉ cần đo nang lớn nhất ở mỗi bên vú theo trục dài nhất là đủ tiêu chuẩn</strong>. Nếu siêu âm nhằm giải quyết một bất thường cụ thể trên nhũ ảnh hoặc vị trí sờ thấy khối lâm sàng, nang đó bắt buộc phải được đo 3 chiều đầy đủ.</li>
        <li><strong>Nang đơn độc không triệu chứng tình cờ phát hiện khi siêu âm tầm soát:</strong> Nếu bác sĩ quyết định mô tả trong kết quả (đánh giá lành tính Category 2), chỉ cần lưu 1 hình ảnh theo trục dài nhất. Nếu bác sĩ không mô tả vào kết quả (đánh giá âm tính Category 1), không bắt buộc phải lưu hình ảnh.</li>
        <li><strong>Lưu ý vị trí đuôi nách:</strong> Nang có thể xuất hiện ở đuôi nách hoặc mô vú phụ trong hố nách; tuy nhiên, tổn thương dạng nang ở vị trí này cần đặc biệt cảnh giác chẩn đoán phân biệt với <strong>hạch di căn hoại tử dịch</strong>! Khảo sát Doppler màu và siêu âm đàn hồi (elastography) giúp khẳng định tính chất nang đơn giản hoàn toàn trống âm, không có dòng chảy.</li>
        <li><strong>Hạch trong tuyến vú (Intramammary Lymph Nodes):</strong> Một hạch trong tuyến vú lành tính điển hình, không triệu chứng, được quan sát thấy tình cờ không bắt buộc phải lưu ảnh hồ sơ.</li>
        <li><strong>Đa khối u đặc hai bên (Multiple Bilateral Solid Masses):</strong> Xếp <strong>Category 2 (Lành tính)</strong> nếu tất cả các khối đều có hình thái tương tự nhau và mang tính chất lành tính điển hình [11, 12]. Nếu bác sĩ muốn ghi nhận tất cả, báo cáo nên ở dạng danh sách gồm: vị trí giờ, khoảng cách núm vú và 3 kích thước trực giao (<strong>Hình 1</strong>). Khi có nhiều u ở cùng một vùng, ghi nhận thêm độ sâu từ da đến tâm khối u.</li>
      </ul>

      <figure class="my-6">
        <img src="/posts/birads-v2025-ultrasound-general/documentation_fig1_abus_multiple_masses_list.jpg" alt="Lưu trữ hồ sơ Hình 1 – Tài liệu hóa đa khối u hai bên trên ABUS" class="w-full h-auto rounded shadow" />
        <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – DOCUMENTATION: MULTIPLE MASSES.</strong> Mặt cắt coronal của vú phải (A) và vú trái (B) trên hệ thống ABUS tự động bộc lộ vô số khối bờ rõ hai bên. Lát cắt axial ở góc trên phải của (B) và lát cắt sagittal ở góc dưới phải. Tâm chữ thập tương ứng vị trí tổn thương. Bảng danh mục liệt kê giờ, khoảng cách núm vú và độ sâu giúp hồ sơ ngắn gọn, minh bạch (Trích nguyên tác trang 224).</figcaption>
      </figure>

      <h4 id="doc-image-storage-standards" class="font-bold text-slate-900 mt-6 mb-3">2. Quy chuẩn Lưu trữ Hình ảnh Hai Hướng Vuông góc</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Đối với bất kỳ tổn thương bất thường nào cần theo dõi hoặc can thiệp, cơ sở y tế bắt buộc phải lưu trữ:
      </p>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-1">
        <li><strong>Hai hình ảnh vuông góc nhau:</strong> Gồm 1 hình ảnh có đặt thước đo kích thước (calipers) và 1 hình ảnh nguyên bản KHÔNG có vạch thước đo (để quan sát trọn vẹn đường bờ tổn thương và các xảo ảnh âm học phía sau không bị che khuất).</li>
        <li>Hình ảnh video vòng lặp (cine loop) nếu hệ thống PACS cho phép lưu trữ để đối chiếu động học.</li>
      </ul>

      <h3 id="section-i-e-handheld-vs-abus">E. Siêu âm Cầm tay vs Siêu âm 3D Tự động (ABUS) & Bác sĩ vs Kỹ thuật viên (Handheld vs. Automated)</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Những hạn chế cố hữu của nhũ ảnh ở phụ nữ có mô tuyến vú đặc (dense breasts) đã dẫn đến sự gia tăng mạnh mẽ của việc chỉ định siêu âm tầm soát trong thập kỷ qua. Cẩm nang BI-RADS 2025 cập nhật chỉ định: <strong>Siêu âm toàn bộ tuyến vú như một công cụ tầm soát bổ sung (supplemental screening tool) có thể được cân nhắc cho phụ nữ có mô tuyến vú đặc không đồng nhất (heterogeneously dense) hoặc cực kỳ đặc (extremely dense), phụ nữ có nguy cơ ung thư vú tích lũy suốt đời cao (&ge; 20%) không thể chụp được MRI tuyến vú hoặc những người khó tiếp cận với dịch vụ MRI</strong> [13].
      </p>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Các thử nghiệm lâm sàng đa trung tâm tiền cứu quy mô lớn như <strong>ACRIN 6666, J-START và ASTOUND</strong> đã kết luận nhất quán: việc bổ sung siêu âm tầm soát giúp tăng đáng kể tỷ lệ phát hiện các ung thư vú xâm lấn kích thước nhỏ, hạch nách âm tính so với nhũ ảnh đơn thuần ở phụ nữ có vú đặc, mặc dù có đi kèm với sự gia tăng tỷ lệ dương tính giả [14–16].
      </p>

      <h4 id="abus-cdr-evidence" class="font-bold text-slate-900 mt-6 mb-3">1. Bằng chứng Tỷ lệ Phát hiện Ung thư (Cancer Detection Rate - CDR)</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Siêu âm cầm tay (HHUS) có thể do bác sĩ chẩn đoán hình ảnh hoặc kỹ thuật viên thực hiện. Tổng quan công bố năm 2019 [17] phân tích kết quả trên hàng trăm ngàn lượt khám cho thấy kết cục lâm sàng tương đương nhau:
      </p>
      <ul class="text-sm text-slate-800 list-disc pl-5 mb-4 space-y-1">
        <li><strong>Bác sĩ thực hiện siêu âm cầm tay (361.502 ca):</strong> Tỷ lệ phát hiện ung thư bổ sung trung bình (Incremental CDR) đạt <strong>2.0 ca ung thư / 1.000 phụ nữ</strong> được tầm soát.</li>
        <li><strong>Kỹ thuật viên thực hiện siêu âm cầm tay (64.018 ca):</strong> Đạt <strong>2.7 ca ung thư / 1.000 phụ nữ</strong> được tầm soát.</li>
        <li><strong>Siêu âm tự động toàn vú ABUS (27.163 ca):</strong> Đạt <strong>2.5 ca ung thư / 1.000 phụ nữ</strong> được tầm soát.</li>
      </ul>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Hệ thống ABUS tự động giải phóng bác sĩ khỏi việc quét máy kéo dài, lưu trữ toàn bộ dữ liệu thể tích vú để bác sĩ đọc phim sau đó độc lập với thời gian thu nhận hình ảnh.
      </p>

      <h4 id="abus-retraction-phenomenon" class="font-bold text-slate-900 mt-6 mb-3">2. Hiện tượng Co kéo (Retraction Phenomenon) trên Mặt phẳng Coronal ABUS 3D</h4>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Hệ thống siêu âm tự động 3D có năng lực tái tạo mặt phẳng trán (coronal view) độc nhất vô nhị. <strong>Khi xuất hiện trên mặt phẳng coronal tái tạo, mẫu hình xáo trộn cấu trúc dạng co kéo (retraction phenomenon) mang tính đặc trưng và có giá trị dự báo ác tính cực kỳ cao (PPV rất cao)</strong> [18].
      </p>
      <div class="synthesis-box my-4">
        <h5 class="font-bold text-indigo-950 text-xs uppercase mb-1">🔬 BẢN CHẤT GIẢI PHẪU BỆNH CỦA HIỆN TƯỢNG CO KÉO (RETRACTION PHENOMENON)</h5>
        <p class="text-xs text-slate-800 leading-relaxed">
          Mẫu hình này xuất hiện dưới dạng <strong>các đường giảm âm tỏa tia vuông góc và hội tụ vào một khối giảm âm trung tâm</strong>, đại diện cho sự xâm lấn vi thể của tế bào ung thư vào mô xung quanh. Đi kèm dấu hiệu này là một <strong>viền tăng âm bao quanh (surrounding echogenic rind)</strong> biểu hiện cho phản ứng xơ hóa mô đệm (desmoplastic reaction) (<strong>Hình 1 & 2</strong>). Dấu hiệu co kéo này trên mặt phẳng coronal của ABUS tương đương với hình ảnh xáo trộn cấu trúc tua gai trên phim cắt lớp nhũ ảnh 3D (DBT)!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/abus_screening_fig1_retraction_phenomenon.jpg" alt="ABUS Hình 1 – Hiện tượng co kéo trên bình diện coronal 3D" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 1 – AUTOMATED SCREENING ULTRASOUND: RETRACTION PHENOMENON.</strong> Bệnh nhân vú đặc tầm soát bổ sung bằng ABUS. Các hình ảnh coronal 3D liên tiếp bộc lộ khối giảm âm không đều kèm viền tăng âm và xáo trộn cấu trúc. Hiện tượng co kéo gắn liền với viền tăng âm (mũi tên) có giá trị dự báo ác tính rất cao (Trích nguyên tác trang 226).</figcaption>
        </figure>
        <figure>
          <img src="/posts/birads-v2025-ultrasound-general/abus_screening_fig2_coronal_and_axial_idc.jpg" alt="ABUS Hình 2 – Khối ung thư xâm lấn trên mặt phẳng coronal và axial" class="w-full h-auto rounded shadow" />
          <figcaption class="mt-2 text-xs text-slate-600"><strong>Figure 2 – ABUS SCREENING: INVASIVE DUCTAL CARCINOMA.</strong> Ảnh coronal 3D (A) thấy khối giảm âm ở tâm chữ thập. Ảnh EFOV axial tương ứng (B) thấy khối giảm âm bờ đa cung nhỏ không có biến đổi âm học sau. GPB: Ung thư biểu mô tuyến ống xâm lấn độ mô học trung bình (Trích nguyên tác trang 226).</figcaption>
        </figure>
      </div>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-red-900 mb-2 flex items-center gap-2">
          <span>🚨</span> NGUYÊN TẮC PHÁP LÝ TỐI THƯỢNG CỦA BI-RADS 2025: PHÂN LOẠI ABUS TẦM SOÁT
        </h4>
        <div class="space-y-2 text-xs text-slate-800 leading-relaxed">
          <p>
            <strong>QUY TẮC BẮT BUỘC: Bất kỳ phát hiện nghi ngờ hoặc chưa xác định rõ nào trên cuộc khám siêu âm tầm soát (dù là ABUS hay siêu âm cầm tay HHUS) BẮT BUỘC PHẢI ĐƯỢC XẾP CATEGORY 0 (INCOMPLETE)!</strong>
          </p>
          <p>
            Bệnh nhân phải được <strong>gọi lại (recall) để làm siêu âm chẩn đoán cầm tay khu trú (focused diagnostic handheld ultrasound)</strong>. Bệnh nhân có thể được làm siêu âm chẩn đoán ngay trong ngày; tuy nhiên, cuộc khám thứ hai được tính là một cuộc khám chẩn đoán độc lập và cả hai cuộc khám bắt buộc phải có mã phân loại đánh giá riêng biệt để phục vụ công tác kiểm toán chất lượng (Audit).
          </p>
          <p class="font-bold text-red-700">
            CHỈ CÁC MÃ BI-RADS 0, 1 HOẶC 2 MỚI ĐƯỢC PHÉP GÁN CHO CUỘC KHÁM SIÊU ÂM TẦM SOÁT. TUYỆT ĐỐI KHÔNG BAO GIỜ GÁN MÃ CATEGORY 3, 4 HOẶC 5 TRỰC TIẾP TRÊN MỘT CUỘC KHÁM SIÊU ÂM TẦM SOÁT!
          </p>
        </div>
      </div>

      <h3 id="us-technical-matrix">Bảng Ma trận Đối chiếu Kỹ thuật Siêu âm Tuyến vú BI-RADS® 2025</h3>
      <p class="text-sm text-slate-800 leading-relaxed mb-4">
        Dưới đây là bảng tổng hợp các thông số kỹ thuật tối ưu hóa máy siêu âm tuyến vú theo khuyến chuẩn ACR BI-RADS® v2025 và giải pháp xử lý xảo ảnh:
      </p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="bg-indigo-900 text-white font-bold">
              <th class="border border-indigo-700 p-2.5 text-left">Thông số Kỹ thuật</th>
              <th class="border border-indigo-700 p-2.5 text-left">Cài đặt Tối ưu (Optimal Setting)</th>
              <th class="border border-indigo-700 p-2.5 text-left">Hậu quả Cài đặt Sai (Suboptimal Setting)</th>
              <th class="border border-indigo-700 p-2.5 text-left">Hành động Khắc phục Chuẩn hóa</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white text-slate-800">
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">1. Đầu dò (Transducer)</td>
              <td class="border border-slate-300 p-2">Linear mảng phẳng dải rộng <strong>&ge; 12–18 MHz</strong></td>
              <td class="border border-slate-300 p-2">Tần số thấp (&lt; 10 MHz) làm mất độ phân giải không gian, mờ bờ khối, sót vi vôi hóa</td>
              <td class="border border-slate-300 p-2">Luôn ưu tiên tần số cao nhất có thể đạt được độ xuyên thấu đến cơ ngực lớn</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">2. Áp lực Nén (Pressure)</td>
              <td class="border border-slate-300 p-2">Nén vừa đủ để làm mỏng mô và xóa bóng lưng giả dây chằng Cooper trên B-mode</td>
              <td class="border border-slate-300 p-2">Ép quá nhẹ tạo bóng lưng giả; Ép quá mạnh trên Doppler làm đè xẹp vi mạch máu khối u</td>
              <td class="border border-slate-300 p-2">Ép thích hợp khi làm B-mode; Quét tiếp xúc nhẹ nhàng tối đa khi làm Doppler màu</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">3. Trường nhìn (FOV & Depth)</td>
              <td class="border border-slate-300 p-2">Bao trọn từ Da đến Cơ ngực lớn (mô vú chiếm <strong>&ge; 75%</strong> chiều sâu màn hình)</td>
              <td class="border border-slate-300 p-2">Đặt quá sâu lấy cả phổi/xương sườn làm thu nhỏ tổn thương; Đặt quá nông bỏ sót khối sâu</td>
              <td class="border border-slate-300 p-2">Chỉnh độ sâu vừa chạm bờ trước cơ ngực lớn; Dùng Trapezoid hoặc EFOV cho u &gt; 3 cm</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">4. Vùng Tiêu cự (Focal Zone)</td>
              <td class="border border-slate-300 p-2">Đặt tại tâm hoặc bờ sâu của tổn thương (1–2 tiêu điểm tối ưu)</td>
              <td class="border border-slate-300 p-2">Tiêu điểm đặt sâu dưới nang tạo phản âm giả trong nang; Đặt quá nhiều tiêu điểm làm tụt frame rate</td>
              <td class="border border-slate-300 p-2">Đưa tiêu điểm ngang mức trung tâm khối nghi ngờ để đạt độ phân giải ngang tối đa</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">5. Gain Thang xám (Grayscale Gain)</td>
              <td class="border border-slate-300 p-2">Mỡ dưới da có màu <strong>xám trung bình (medium gray)</strong>; Nang đơn giản trống âm hoàn toàn</td>
              <td class="border border-slate-300 p-2">Gain quá cao làm mờ u; Gain quá thấp làm mỡ đen thui và ung thư vú tam âm bị nhầm thành nang</td>
              <td class="border border-slate-300 p-2">Lấy thùy mỡ dưới da làm mốc chuẩn chỉnh Gain: không bao giờ để mỡ có màu đen</td>
            </tr>
            <tr class="hover:bg-slate-50">
              <td class="border border-slate-300 p-2 font-bold text-indigo-950">6. Compound Imaging</td>
              <td class="border border-slate-300 p-2">Quét chùm tia đa góc giảm nhiễu đốm, làm sắc nét đường bờ tổn thương</td>
              <td class="border border-slate-300 p-2">Làm suy giảm hoặc triệt tiêu bóng lưng âm học phía sau (Acoustic Shadowing) của khối ác tính</td>
              <td class="border border-slate-300 p-2">Linh hoạt tắt/bật kết hợp không gian khi cần kiểm tra bóng lưng âm học phía sau</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="key-points my-6">
        <h4 class="font-bold text-emerald-900 mb-2 flex items-center gap-2">
          <span>🌟</span> 10 ĐIỂM CỐT LÕI CẦN NHỚ (KEY TAKEAWAYS)
        </h4>
        <ol class="list-decimal pl-5 space-y-2 text-xs text-slate-800">
          <li><strong>Bảo vệ Nụ tuyến vú dậy thì (Pubertal bud):</strong> Vùng giảm âm sau núm vú ở bé gái dậy thì là mầm mô vú bình thường; tuyệt đối cấm sinh thiết hoặc phẫu thuật cắt bỏ vì sẽ làm vú ngừng phát triển hoàn toàn.</li>
          <li><strong>Tiêu chuẩn Hạch nách bình thường:</strong> Không có giới hạn kích thước trên nếu bề dày vỏ hạch duy trì &le; 3 mm và rốn hạch giàu mỡ tăng âm cân xứng hai bên.</li>
          <li><strong>Định vị đối chiếu bằng Tầng lớp Giải phẫu:</strong> Xác định tổn thương ở lớp mỡ dưới da, vùng mô sợi tuyến, hay lớp mỡ sau tuyến là mốc tin cậy nhất để tìm tổn thương từ nhũ ảnh/MRI sang siêu âm.</li>
          <li><strong>Mốc tham chiếu Gain chuẩn mực:</strong> Lớp mỡ dưới da bắt buộc phải hiển thị màu xám trung bình (medium gray), không bao giờ được phép có màu đen.</li>
          <li><strong>Cạm bẫy Ung thư vú tam âm (TNBC):</strong> TNBC thường có phản âm rất giảm âm; nếu cài Gain quá thấp sẽ làm khối trông như trống âm thuần nhất và bị nhầm thành nang đơn giản.</li>
          <li><strong>Kỹ thuật Doppler màu:</strong> Chỉ tiếp xúc đầu dò nhẹ nhàng; tuyệt đối không ấn mạnh vì sẽ đè xẹp vi mạch máu dòng chảy chậm của khối u ác tính.</li>
          <li><strong>Đo trục dài nhất của khối:</strong> Đo theo trục giải phẫu dài nhất thực tế của tổn thương rồi kẻ đường vuông góc; không đo theo khung hình chữ nhật của màn hình máy siêu âm.</li>
          <li><strong>Bắt buộc đo Viền Tăng Âm (Echogenic Rind) của khối ác tính:</strong> Phép đo phải bao gồm cả lõi giảm âm và viền tăng âm xung quanh vì viền này đại diện cho phản ứng xơ hóa mô đệm và tế bào u xâm lấn, tương quan chính xác nhất với kích thước giải phẫu bệnh.</li>
          <li><strong>Hiện tượng Co kéo (Retraction Phenomenon) trên ABUS:</strong> Mẫu hình các dải giảm âm tỏa tia hội tụ trên mặt phẳng coronal tái tạo 3D của ABUS là dấu hiệu có giá trị dự báo ác tính rất cao.</li>
          <li><strong>Quy tắc Phân loại ABUS Tầm soát:</strong> Phát hiện nghi ngờ trên siêu âm tầm soát chỉ được xếp Category 0 (Incomplete) để gọi lại làm siêu âm chẩn đoán; tuyệt đối cấm gán Category 3, 4, 5 trực tiếp từ cuộc khám tầm soát.</li>
        </ol>
      </div>

      <div class="pitfalls my-6">
        <h4 class="font-bold text-red-900 mb-2 flex items-center gap-2">
          <span>🚨</span> 8 CẠM BẪY LÂM SÀNG NGUY HIỂM NHẤT TRONG SIÊU ÂM TUYẾN VÚ
        </h4>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-800">
          <li><strong>Cạm bẫy cắt bỏ nụ tuyến vú dậy thì:</strong> Nhầm lẫn nụ tuyến sinh lý sau núm vú ở bé gái dậy thì thành khối u xơ/u diệp thể cần cắt bỏ, hủy hoại vĩnh viễn sự phát triển vú của trẻ.</li>
          <li><strong>Cạm bẫy bỏ sót ung thư vú tam âm do Gain quá thấp:</strong> Đặt gain quá thấp biến khối u đặc ác tính giảm âm thành cấu trúc "trống âm" giả tạo giống nang đơn thuần.</li>
          <li><strong>Cạm bẫy đè xẹp mạch máu trên Doppler màu:</strong> Ấn đầu dò quá mạnh làm biến mất hoàn toàn tín hiệu tưới máu của khối u ác tính.</li>
          <li><strong>Cạm bẫy xảo ảnh âm phản xạ giả trong nang do đặt sai tiêu cự:</strong> Đặt tiêu điểm sâu dưới nang tạo ra các chấm phản âm giả ở nửa trước nang, khiến nang đơn thuần bị chẩn đoán nhầm thành u đặc.</li>
          <li><strong>Cạm bẫy mất bóng lưng âm học khi dùng Compound Imaging:</strong> Quá lạm dụng siêu âm kết hợp chùm tia làm xóa sạch bóng lưng sau — che lấp dấu hiệu ác tính kinh điển của ung thư thể ống xâm lấn.</li>
          <li><strong>Cạm bẫy đo thiếu kích thước ung thư do bỏ qua Viền Tăng Âm:</strong> Chỉ đo phần lõi giảm âm mà bỏ qua viền tăng âm (echogenic rind) khiến kích thước u trên siêu âm bị hụt 2–5 mm so với giải phẫu bệnh thực tế, gây nguy cơ cắt không sạch diện mổ.</li>
          <li><strong>Cạm bẫy nhầm lẫn nang đuôi nách với hạch di căn hoại tử:</strong> Khối dạng nang nằm cao ở đuôi nách hoặc hố nách phải luôn cảnh giác cao độ với hạch hoại tử dịch của ung thư di căn.</li>
          <li><strong>Cạm bẫy xếp Category 4 trực tiếp trên ABUS tầm soát:</strong> Bỏ qua bước gọi lại (recall) làm siêu âm chẩn đoán cầm tay mà chỉ định sinh thiết trực tiếp từ ảnh ABUS tầm soát, vi phạm nghiêm trọng quy chuẩn kiểm toán chất lượng BI-RADS.</li>
        </ol>
      </div>

    `,
    views: 1820,
    readTime: "25 phút đọc",
    source: "ACR BI-RADS® Ultrasound v2025 Manual (pp. 190-226)",
    tags: ["BI-RADS 2025", "Siêu âm tuyến vú", "Ultrasound", "Giải phẫu tuyến vú", "Chất lượng hình ảnh", "ABUS", "Đo đạc siêu âm", "Viền tăng âm", "Co kéo"]
  },
  {
    id: "post-radiographics-2026-nonthrombotic-pulmonary-artery-embolism",
    title: "Các bộ mặt đa dạng của Thuyên tắc Động mạch Phổi không do Huyết khối (Nonthrombotic Pulmonary Artery Embolism – NTPE)",
    slug: "cac-bo-mat-da-dang-cua-thuyen-tac-dong-mach-phoi-khong-do-huyet-khoi-ntpe",
    date: "09 Tháng 11, 2026",
    updatedDate: "09 Tháng 11, 2026",
    author: "Anupama Ramachandran, MD; Mark M. Hammer, MD; Rachna Madan, MD (RadioGraphics 2026 – Biên dịch: CĐHA Cập Nhật)",
    categories: ["Ngực", "Cắt lớp vi tính", "CT", "CT Mạch máu phổi", "Thuyên tắc phổi", "NTPE", "RadioGraphics"],
    categorySlugs: ["nguc", "ct", "thuyen-tac-phoi", "ntpe"],
    modality: "CT",
    specialty: "Ngực",
    specialtySlug: "nguc",
    coverImage: "/posts/nonthrombotic-pulmonary-embolism/cover_ntpe.jpg",
    excerpt: "Tổng quan chuyên sâu từ RSNA RadioGraphics (2026) về Thuyên tắc Động mạch Phổi không do Huyết khối (NTPE): Phân tích chi tiết cơ chế bệnh sinh, hình ảnh học CTPA, DECT, PCCT, PET/CT và xạ hình V/Q của 4 nhóm nguyên nhân lớn (nhiễm trùng, tân sinh/sarcoma ĐM phổi, can thiệp/dị vật ngoại sinh, thuyên tắc mỡ và nước ối) cùng 4 bảng tra cứu đối chiếu và 20 ca bệnh thực chiến.",
    content: [
      "Thuyên tắc động mạch phổi không do huyết khối (NTPE) là tình trạng tắc nghẽn các nhánh động mạch phổi bởi các vật liệu không phải cục máu đông thông thường, bao gồm tế bào u, vi sinh vật, mỡ, dịch ối, khí và dị vật ngoại sinh.",
      "Khác với thuyên tắc huyết khối thường (bland PE), NTPE kích hoạt chuỗi phản ứng viêm nội mô và độc tế bào, đòi hỏi các chiến lược điều trị đặc hiệu theo từng nguyên nhân thay vì chỉ dùng thuốc chống đông.",
      "RadioGraphics hệ thống hóa 4 nhóm bệnh lý cốt lõi, ma trận phân biệt Sarcoma động mạch phổi (PAS) với huyết khối thường, nhận diện thuyên tắc vi u (PTTM) và phân tích các xảo ảnh dòng chảy dạng khói trên CTPA."
    ],
    htmlContent: `

      <div class="synthesis-box">
        <h4 class="font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <span>🎯</span> TÓM TẮT NỘI DUNG THEN CHỐT
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Bài tổng quan toàn diện từ tạp chí danh tiếng <em>RadioGraphics (RSNA 2026)</em> của các chuyên gia Chẩn đoán Hình ảnh Lồng ngực thuộc Bệnh viện Brigham and Women's – Trường Y Harvard: Phân tích chuyên sâu về <strong>Thuyên tắc động mạch phổi không do huyết khối (Nonthrombotic Pulmonary Artery Embolism – NTPE)</strong>. Khác với thuyên tắc huyết khối thường (bland PE), NTPE hình thành do các vật liệu không phải cục máu đông như vi sinh vật, tế bào u, mỡ, khí, nước ối, thiết bị nội mạch hoặc tá dược ngoại sinh. Bài viết hệ thống hóa toàn bộ phổ bệnh học, 4 bảng tra cứu đối chiếu then chốt, 20 ca bệnh hình ảnh học đa phương tiện (CTPA, DECT, PCCT, PET/CT, V/Q scan) và các dấu hiệu phân biệt sống còn giúp bác sĩ CĐHA tránh chẩn đoán nhầm lẫn với thuyên tắc huyết khối thông thường hoặc tăng áp động mạch phổi mạn tính (CTEPH).
        </p>
      </div>

      <div class="editorial-box">
        <h4 class="font-bold text-sky-900 mb-2 flex items-center gap-2">
          <span>📖</span> Bối cảnh biên dịch & Lời tòa soạn: RadioGraphics 2026 – Các bộ mặt đa dạng của Thuyên tắc Động mạch Phổi không do Huyết khối (NTPE)
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">
          Trong thực hành lâm sàng CĐHA lồng ngực khẩn cấp, phần lớn các trường hợp khuyết thuốc cản quang lòng động mạch phổi trên CTPA được chẩn đoán là thuyên tắc huyết khối (Thrombotic PE) và điều trị thường quy bằng thuốc chống đông. Tuy nhiên, một nhóm bệnh lý nguy hiểm và thường bị chẩn đoán muộn là <strong>Thuyên tắc động mạch phổi không do huyết khối (NTPE)</strong>. Việc nhận diện chính xác bản chất của vật liệu thuyên tắc có ý nghĩa sống còn vì phác đồ điều trị hoàn toàn khác biệt: kháng sinh đường tĩnh mạch cho thuyên tắc nhiễm trùng, phẫu thuật bóc tách và hóa trị cho sarcoma động mạch phổi hoặc thuyên tắc u, hồi sức hỗ trợ chuyên sâu cho thuyên tắc mỡ và nước ối, hoặc can thiệp nội mạch lấy dị vật.
        </p>
        <p class="text-sm text-slate-700 leading-relaxed mt-2">
          Quy ước trình bày: Toàn bộ nội dung dịch nguyên văn từ bài báo gốc được hiển thị với <strong>chữ đen trên nền trắng tiêu chuẩn</strong>; các khung tổng hợp lời tòa soạn, 5 điểm giảng dạy cốt lõi (Teaching Points), ma trận phân biệt và cạm bẫy thực hành được đóng khung màu riêng biệt để người đọc dễ dàng nhận biết và kiểm chứng. Toàn bộ 20 hình ảnh ca bệnh độ nét cao nguyên bản được cắt sạch sẽ, không dính chữ thừa, tích hợp phóng to toàn màn hình kèm chú giải tiếng Việt chi tiết.
        </p>
      </div>

      <div class="teaching-points my-6 p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
        <h4 class="font-bold text-amber-900 mb-3 flex items-center gap-2 text-base">
          <span>💡</span> TEACHING POINTS: 5 ĐIỂM GIẢNG DẠY CỐT LÕI (RADIO GRAPHICS)
        </h4>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-800 leading-relaxed">
          <li><strong>Ổ nhồi máu trong thuyên tắc nhiễm trùng (Septic Emboli):</strong> Kinh điển tiến triển thành hoại tử trung tâm, dẫn đến các nốt tổn thương tạo hang (cavitation). Hiện tượng tạo hang cũng có thể xuất hiện trong nhồi máu do huyết khối thường (bland PE), nhưng cực kỳ hiếm gặp.</li>
          <li><strong>Dấu hiệu then chốt gợi ý Sarcoma động mạch phổi (PAS) hơn là Huyết khối PE:</strong> Bao gồm tổn thương khuyết thuốc một bên choán toàn bộ lòng thân chính hoặc nhánh gốc động mạch phổi; phình giãn khẩu kính động mạch liên quan kèm tổn thương thâm nhiễm thành mạch và <em>dấu hiệu che khuất thành mạch (wall-eclipsing sign)</em>; cùng khối choán chỗ tồn tại dai dẳng hoặc tăng kích thước dù đã điều trị kháng đông đầy đủ.</li>
          <li><strong>Độ hấp thu FDG biến thiên của Sarcoma động mạch phổi:</strong> PAS có thể có mức độ bắt thuốc rất thay đổi trên FDG PET/CT dựa trên mức độ biệt hóa mô học, khiến cho tính chất ái lực FDG (FDG avidity) không phải là chỉ dấu tin cậy tuyệt đối để loại trừ hoặc khẳng định tính chất ác tính.</li>
          <li><strong>Phân biệt Thuyên tắc u (Tumor Embolism) với Huyết khối thường:</strong> Cực kỳ thách thức. Ba dấu hiệu hình ảnh hữu ích giúp hướng tới thuyên tắc u gồm: (1) Giãn và có dạng chuỗi hạt các động mạch phổi ngoại vi (<em>dấu hiệu nụ trên cành dạng mạch máu - vascular tree-in-bud sign</em>) trong thuyên tắc vi thể; (2) Ngấm thuốc cản quang không đồng nhất của khuyết thuốc trong thuyên tắc đại thể; và (3) Tổn thương khuyết thuốc không thoái triển khi theo dõi hình ảnh dù đã điều trị kháng đông kéo dài.</li>
          <li><strong>Bệnh phổi do tá dược (Excipient Lung Disease - ELD):</strong> CT ngực độ phân giải cao điển hình cho thấy các vi nốt trung tâm tiểu thùy lan tỏa (&lt; 3 mm), có hoặc không kèm theo các dấu hiệu tăng áp động mạch phổi và suy tim phải.</li>
        </ul>
      </div>

      <h2 id="gioi-thieu-tong-quan">1. Giới thiệu tổng quan (Introduction)</h2>
      <p>
        <strong>Thuyên tắc động mạch phổi không do huyết khối (Nonthrombotic Pulmonary Artery Embolism – NTPE)</strong> là tình trạng tắc nghẽn các nhánh động mạch phổi bởi các vật liệu thuyên tắc không phải là cục máu đông đơn thuần (bland thrombus), chẳng hạn như các mảnh mô tế bào, vi sinh vật, dịch ối, mỡ, chất khí, hoặc các dị vật ngoại sinh. Mặc dù NTPE ít gặp hơn so với thuyên tắc huyết khối tĩnh mạch (1), bệnh lý này đi kèm với tỷ lệ mắc bệnh và tỷ lệ tử vong đáng kể. Tỷ lệ hiện mắc thực sự trong cộng đồng vẫn chưa được xác định chắc chắn, do NTPE bao gồm một nhóm bệnh lý rất không đồng nhất và thường xuyên bị bỏ sót hoặc chẩn đoán dưới mức trong thực hành lâm sàng.
      </p>
      <p>
        Tương tự như thuyên tắc phổi do huyết khối (PE), NTPE có thể dẫn đến tắc nghẽn một phần hoặc toàn bộ tuần hoàn động mạch phổi. Tuy nhiên, cơ chế sinh bệnh học của NTPE vượt xa sự tắc nghẽn cơ học đơn thuần của các nhánh mạch máu: tình trạng này thường đi kèm với <strong>tổn thương nội mô vi mạch</strong> và kích hoạt một <strong>chuỗi phản ứng viêm miễn dịch toàn thân và tuần hoàn phổi</strong> dữ dội, tùy thuộc vào bản chất lý hóa và sinh học của tác nhân thuyên tắc (1,2). NTPE có thể bắt nguồn từ rất nhiều chất liệu, vật liệu và mô có nguồn gốc nội sinh (sinh học) hoặc ngoại sinh (Bảng 1). Biểu hiện lâm sàng và đặc điểm hình ảnh thay đổi sâu sắc theo từng nguyên nhân cụ thể.
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-300 text-sm">
          <caption class="text-base font-bold text-slate-900 mb-2 text-left">Bảng 1: Các nguyên nhân gây Thuyên tắc Động mạch Phổi không do Huyết khối (Causes of NTPE)</caption>
          <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
            <tr>
              <th class="p-3 border border-slate-300 w-1/3">Nhóm bệnh lý</th>
              <th class="p-3 border border-slate-300">Các thực thể và tác nhân cụ thể</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-800 bg-white">
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Các thực thể Nhiễm trùng<br/><span class="text-xs font-normal text-slate-500">(Infectious entities)</span></td>
              <td class="p-3 border border-slate-300">
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Thuyên tắc nhiễm trùng (Septic embolism):</strong> Vi khuẩn (Staphylococcus aureus, Streptococcus), vi nấm (Candida, Aspergillus, Mucor).</li>
                  <li><strong>Thuyên tắc ký sinh trùng (Parasitic emboli):</strong> Giun đũa (<em>Ascaris lumbricoides</em>), Nang sán hydatid (<em>Echinococcus granulosus</em>), Sán máng (<em>Schistosoma mansoni</em>).</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Các thực thể Tân sinh<br/><span class="text-xs font-normal text-slate-500">(Neoplastic entities)</span></td>
              <td class="p-3 border border-slate-300">
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Sarcoma động mạch phổi nguyên phát (Primary PAS):</strong> Sarcoma nội mạc (intimal sarcoma), Leiomyosarcoma mạch máu.</li>
                  <li><strong>Thuyên tắc u di căn (Metastatic tumor embolism):</strong> Thuyên tắc đại thể hoặc thuyên tắc vi thể (PTTM).</li>
                  <li><strong>Xâm lấn trực tiếp từ ung thư phổi</strong> vào các nhánh mạch máu trung tâm.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Thực thể do can thiệp y khoa & Tác nhân ngoại sinh<br/><span class="text-xs font-normal text-slate-500">(Iatrogenic & exogenous)</span></td>
              <td class="p-3 border border-slate-300">
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Thiết bị nội mạch (Intravascular devices):</strong> Đoạn gãy catheter tĩnh mạch trung tâm, dây máy tạo nhịp tim (pacemaker lead), vòng xoắn kim loại gây tắc mạch (embolization coils).</li>
                  <li><strong>"Cục máu nóng" Fluorodeoxyglucose (FDG "hot clot" artifact)</strong> trên PET/CT.</li>
                  <li><strong>Thuyên tắc xi măng sinh học (Cement embolization)</strong> sau tạo hình đốt sống qua da (vertebroplasty/kyphoplasty).</li>
                  <li><strong>Dầu iod (Iodinated oil)</strong> sau chụp bạch mạch CT (CT lymphangiography) hoặc TACE.</li>
                  <li><strong>Thuyên tắc khí (Air embolism):</strong> Do thủ thuật tĩnh mạch trung tâm hoặc giải áp.</li>
                  <li><strong>Bột talc (Talc)</strong> và <strong>Keo sinh học (Glue - cyanoacrylate)</strong> sau điều trị xơ búi giãn tĩnh mạch.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Các thực thể Hỗn hợp khác<br/><span class="text-xs font-normal text-slate-500">(Miscellaneous entities)</span></td>
              <td class="p-3 border border-slate-300">
                <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Hội chứng thuyên tắc mỡ (Fat embolism syndrome - FES):</strong> Sau gãy xương dài, chấn thương khung chậu hoặc phẫu thuật chỉnh hình.</li>
                  <li><strong>Thuyên tắc nước ối (Amniotic fluid embolization):</strong> Tai biến sản khoa tối khẩn cấp trong chuyển dạ.</li>
                  <li><strong>Bệnh phổi do tá dược (Excipient lung disease - ELD):</strong> Viêm u hạt do tiêm chích viên thuốc uống nghiền nát (chứa bột talc, cellulose vi tinh thể, tinh bột, crospovidone).</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Chẩn đoán lâm sàng của NTPE có thể cực kỳ nan giải. Bệnh nhân có thể xuất hiện với các triệu chứng âm thầm, tiến triển chậm tại các phòng khám ngoại trú; ví dụ: bệnh nhân thuyên tắc vi u mạch máu phổi (microscopic tumor embolism) có thể chỉ biểu hiện khó thở tăng dần bán cấp kèm các dấu hiệu của tăng áp động mạch phổi. Ngược lại, bệnh nhân có thể biểu hiện kịch phát dưới bệnh cảnh <strong>Hội chứng suy hô hấp cấp tiến triển (ARDS)</strong> tối cấp; ví dụ: bệnh nhân thuyên tắc mỡ (FES) hoặc thuyên tắc nước ối (1). Biểu hiện cấp tính đe dọa tính mạng này thường là hậu quả trực tiếp của tổn thương phổi do phản ứng sinh hóa, miễn dịch và độc tính tế bào từ các thành phần nội mạch bị tắc nghẽn phóng thích ra.
      </p>
      <p>
        Các xét nghiệm cận lâm sàng trong NTPE thường ghi nhận <strong>nồng độ D-dimer tăng cao</strong>, tuy nhiên chỉ số này hoàn toàn không đặc hiệu và thường dẫn đến việc chẩn đoán nhầm thành thuyên tắc huyết khối cấp tính (Acute PE) ở thời điểm nhập viện ban đầu. Ở những bệnh nhân có biểu hiện âm thầm kéo dài, tổn thương rất dễ bị chẩn đoán nhầm là <em>Tăng áp động mạch phổi do huyết khối thuyên tắc mạn tính (CTEPH)</em> – một chẩn đoán phân biệt then chốt khác. Những thách thức chẩn đoán hình ảnh cốt lõi và nguyên nhân bệnh học cơ bản được tóm lược chi tiết trong Bảng 2.
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-300 text-sm">
          <caption class="text-base font-bold text-slate-900 mb-2 text-left">Bảng 2: Những Thách thức Chẩn đoán Hình ảnh trong NTPE (Diagnostic Challenges in Imaging NTPE)</caption>
          <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
            <tr>
              <th class="p-3 border border-slate-300 w-1/3">Thách thức chẩn đoán</th>
              <th class="p-3 border border-slate-300">Mô tả và Cơ chế bệnh sinh</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-800 bg-white">
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Xét nghiệm D-dimer không giúp phân biệt</td>
              <td class="p-3 border border-slate-300">
                NTPE do các tác nhân ngoại sinh có thể không kích hoạt chuỗi phản ứng đông máu hay tiêu sợi huyết; do đó, nồng độ D-dimer thường hoàn toàn bình thường trong các bệnh cảnh này.<br/>
                Mặt khác, D-dimer có thể tăng rất cao trong các nguyên nhân như hội chứng thuyên tắc mỡ (FES) và thuyên tắc nước ối, nhưng sự gia tăng này mang tính phản ứng viêm không đặc hiệu và không giúp phân biệt được với PE do huyết khối thông thường.
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Khởi phát muộn kéo dài<br/><span class="text-xs font-normal text-slate-500">(Delayed presentation)</span></td>
              <td class="p-3 border border-slate-300">
                Sự di chuyển qua lòng mạch của các vật liệu ngoại sinh không sinh học (nonbiologic exogenous materials) tạo ra thách thức lớn, bởi vì sự di chuyển và tắc nghẽn thứ phát có thể diễn ra từ nhiều tuần, nhiều tháng, thậm chí nhiều năm sau can thiệp ban đầu.
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Bị che lấp bởi thuốc cản quang iod trên CT<br/><span class="text-xs font-normal text-slate-500">(Obscuration by contrast material)</span></td>
              <td class="p-3 border border-slate-300">
                Ở nhiều dạng thuyên tắc đại thể ngoại sinh (nonbiologic macroembolism), vật liệu tắc nghẽn có tỷ trọng tự nhiên rất cao (hyperattenuating, như xi măng sinh học PMMA, kim loại) và có thể hoàn toàn không bị phát hiện do bị che lấp bởi thuốc cản quang iod sáng chói trong lòng mạch máu. Do đó, các tổn thương này được nhận diện tốt nhất trên <strong>cửa sổ xương (bone windows)</strong> hoặc trên <strong>chuỗi ảnh ảo không tiêm thuốc (virtual noncontrast - VNC)</strong> của CT hai mức năng lượng (DECT).
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Thuyên tắc vi thể "vô hình" trong lòng mạch<br/><span class="text-xs font-normal text-slate-500">(Invisible microemboli)</span></td>
              <td class="p-3 border border-slate-300">
                Trong các trường hợp thuyên tắc vi thể (như mỡ, dịch ối, mảnh vụn xương, tế bào u vi mô, u hạt talc), bản thân vật liệu thuyên tắc nằm trong các tiểu động mạch và mao mạch nhỏ nên không thể nhìn thấy trực tiếp trên hình ảnh CT mạch máu. Vì vậy, việc chẩn đoán hoàn toàn phụ thuộc vào sự tổng hợp chính xác giữa <strong>các dấu hiệu tổn thương nhu mô phổi thứ phát</strong> với bệnh sử lâm sàng toàn diện.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Trong khi thuyên tắc huyết khối cấp tính (Acute PE) được điều trị chuẩn mực bằng thuốc chống đông và CTEPH được chỉ định phẫu thuật bóc nội mạc động mạch phổi (pulmonary endarterectomy - PEA), thì việc điều trị NTPE hoàn toàn phụ thuộc vào nguyên nhân gốc rễ: ví dụ, điều trị hỗ trợ nội khoa tích cực cho hội chứng thuyên tắc mỡ (FES) và kháng sinh phổ rộng đường tĩnh mạch cho thuyên tắc nhiễm trùng. Ở bệnh nhân thuyên tắc u hoặc sarcoma động mạch phổi (PAS), phác đồ bắt buộc phải phối hợp giữa kiểm soát bệnh ác tính nguyên phát (hóa trị, xạ trị và phẫu thuật triệt căn) kết hợp với thuốc chống đông vì những bệnh nhân này có xu hướng rất cao hình thành huyết khối thường thứ phát bám trên bề mặt khối u. Điều này một lần nữa khẳng định tầm quan trọng sống còn của việc chẩn đoán sớm và chính xác.
      </p>

      <h2 id="cac-phuong-tien-chan-doan-hinh-anh">2. Các Phương tiện Chẩn đoán Hình ảnh (Imaging Modalities)</h2>
      <p>
        <strong>X-quang ngực (Chest Radiography):</strong> Thường là phương tiện hình ảnh đầu tay được chỉ định để thăm dò các triệu chứng hô hấp. X-quang ngực có thể đủ để xác lập chẩn đoán đối với một số trường hợp NTPE do các vật liệu cản quang cao, chẳng hạn như đoạn catheter đứt gãy, dây máy tạo nhịp tim di lệch, xi măng tạo hình đốt sống, hoặc dầu iod. Tuy nhiên, các dấu hiệu X-quang thường không đặc hiệu ở đa số các nguyên nhân NTPE khác. Với các tổn thương thuyên tắc đại thể vùng trung tâm, X-quang có thể bộc lộ hình ảnh giãn lớn động mạch phổi trung tâm (<em>dấu hiệu Fleischner - Fleischner sign</em>), vùng tăng sáng vô mạch ngoại vi do giảm tưới máu (<em>dấu hiệu Westermark - Westermark sign</em>), hoặc đám mờ hình chêm đáy tựa màng phổi do nhồi máu (<em>dấu hiệu bướu Hampton - Hampton hump</em>), tương tự như mô tả trong PE do huyết khối (3). Trên thực tế lâm sàng, vai trò quan trọng hàng đầu của X-quang ngực là loại trừ các nguyên nhân đau ngực và khó thở thường gặp khác, chẳng hạn như viêm phổi và tràn khí màng phổi.
      </p>
      <p>
        <strong>Cắt lớp vi tính Động mạch phổi (CT Pulmonary Angiography - CTPA):</strong> Là phương tiện hình ảnh trụ cột và là tiêu chuẩn chăm sóc hiện nay cho cả PE và NTPE. Tương tự như trong PE, sự hiện diện của <strong>khuyết thuốc cản quang trong lòng mạch (intraluminal filling defects)</strong> tại các nhánh động mạch phổi được coi là dấu hiệu trực tiếp của NTPE. Các dấu hiệu gián tiếp (thứ phát) bao gồm:
      </p>
      <ul class="list-disc pl-5 space-y-1.5 text-slate-800">
        <li><strong>Dấu hiệu nhu mô:</strong> Các ổ nhồi máu phổi (thường là đám đông đặc hình chêm ở ngoại vi, đáy tựa màng phổi, tương đối nghèo hình ảnh khí phế quản đồ và có thể xuất hiện <em>dấu hiệu halo đảo ngược - reverse halo sign</em>). Dải kính mờ xung quanh có thể xuất hiện do thành phần xuất huyết từ các nhánh động mạch phế quản còn thông suốt. Nhánh mạch máu dẫn trực tiếp vào trung tâm nốt hoặc đám đông đặc — được gọi là <em>dấu hiệu mạch máu nuôi (feeding vessel sign)</em> — rất thường gặp, đặc biệt trong thuyên tắc nhiễm trùng và thuyên tắc u.</li>
        <li><strong>Dấu hiệu tưới máu:</strong> Tình trạng giảm tưới máu khu trú dẫn đến hình ảnh <em>tưới máu dạng khảm (mosaic perfusion pattern)</em>.</li>
        <li><strong>Dấu hiệu mạch máu:</strong> Thay đổi khẩu kính, phình giãn nở rộng các mạch máu bị tổn thương và các dấu hiệu quá tải, căng giãn thất phải (right heart strain).</li>
      </ul>

      <p>
        <strong>Cắt lớp vi tính hai mức năng lượng (DECT) và CT đếm photon (PCCT):</strong> Việc chụp hình với các máy CT hai mức năng lượng (Dual-Energy CT - DECT) và CT đếm photon (Photon-Counting CT - PCCT) giúp nâng cao vượt bậc năng lực chẩn đoán của CTPA. DECT thu nhận hình ảnh ở hai mức năng lượng khác nhau (thường là kVp cao và thấp), cho phép phân tích và phân định chính xác bản chất vật liệu. PCCT là bước tiến công nghệ đầu thu mang tính đột phá gần đây, cho phép chụp phổ đa mức năng lượng với độ phân giải không gian siêu cao (4). Cả DECT và PCCT đều có thể tái tạo chuỗi <strong>ảnh ảo không tiêm thuốc (Virtual Noncontrast - VNC)</strong> và <strong>bản đồ phân bố iod (Iodine distribution maps)</strong>:
      </p>
      <ul class="list-disc pl-5 space-y-1.5 text-slate-800">
        <li>Ảnh ảo không tiêm thuốc (VNC), tạo ra bằng cách triệt tiêu thuật toán tín hiệu của iod, cho phép đánh giá vượt trội các vật liệu ngoại sinh tăng tỷ trọng tự nhiên (như xi măng sinh học hoặc dị vật kim loại) mà không bị thuốc cản quang lòng mạch che khuất.</li>
        <li>Bản đồ phân bố iod phản ánh nồng độ iod tương đối trong nhu mô phổi sau khi tiêm thuốc và có thể được sử dụng như một chỉ số đại diện (surrogate) cho tình trạng tưới máu phổi. Bản đồ thể tích máu phổi (Pulmonary Blood Volume - PBV) trên DECT cung cấp thông tin chức năng tưới máu song hành cùng các hình ảnh giải phẫu kinh điển của CTPA. Các vùng giảm tưới máu trong PE và NTPE biểu hiện dưới dạng các ổ khuyết tưới máu rõ nét trên các bản đồ này (5,6).</li>
      </ul>

      <p>
        <strong>Xạ hình Thông khí - Tưới máu phổi (V/Q Scintigraphy):</strong> Là kỹ thuật kinh điển đã được khẳng định vững chắc trong chẩn đoán PE (7) và chủ yếu được chỉ định khi bệnh nhân có chống chỉ định với CTPA, chẳng hạn như suy thận nặng hoặc tiền sử dị ứng trầm trọng với thuốc cản quang chứa iod (8). Trong NTPE cũng như PE, xạ hình V/Q có thể phát hiện các ổ khuyết tưới máu trong khi thông khí vẫn được bảo tồn hoàn toàn, được gọi là <strong>khiếm khuyết bất tương xứng (mismatched defects)</strong>. Ví dụ: các khuyết tưới máu dạng phân thùy có thể bắt nguồn từ thuyên tắc vi mạch do u (9), và các khiếm khuyết tưới máu bất tương xứng cũng được ghi nhận kinh điển trong sarcoma nội mạc động mạch phổi (10).
      </p>
      <p>
        <strong>Chụp Động mạch phổi qua catheter thông thường (Conventional Catheter Pulmonary Angiography):</strong> Từng được coi là tiêu chuẩn tham chiếu vàng lịch sử để chứng minh khuyết thuốc lòng mạch. Tuy nhiên, do tính chất xâm lấn, kỹ thuật này hiện nay không còn được chỉ định thường quy để chẩn đoán đơn thuần, mà chỉ dành riêng cho những ca bệnh có kết quả CTPA không thể kết luận chắc chắn hoặc khi đã có kế hoạch can thiệp nội mạch điều trị.
      </p>


      <h2 id="pho-hinh-anh-nhiem-trung">3. Phổ Biểu hiện Hình ảnh: Các Thực thể Nhiễm trùng (Infectious Entities)</h2>
      
      <h3 id="thuyen-tac-nhiem-trung">3.1. Thuyên tắc nhiễm trùng (Septic Embolism)</h3>
      <p>
        <strong>Thuyên tắc nhiễm trùng (Septic embolism)</strong> đại diện cho tình trạng thuyên tắc của một cục huyết khối có chứa các vi sinh vật sống (vi khuẩn hoặc vi nấm). Bệnh cảnh lâm sàng điển hình xuất hiện với sốt cao và cần phải luôn được cảnh giác nghi ngờ ở những bệnh nhân có nhiễm khuẩn huyết, nhiễm trùng liên quan đến catheter tĩnh mạch lưu trú, viêm nội tâm mạc nhiễm khuẩn, hoặc tiền sử tiêm chích ma túy (11).
      </p>
      <p>
        Phim X-quang ngực ở giai đoạn sớm có thể hoàn toàn bình thường. Khi bệnh tiến triển, xuất hiện các nốt mờ ngoại vi ở hai bên phổi, thường tiến triển tạo hang (cavitation) ở các giai đoạn tiến hóa khác nhau (12).
      </p>
      <p>
        Các dấu hiệu CT ngực đặc trưng của thuyên tắc nhiễm trùng bao gồm các <strong>nốt tổn thương đa ổ ở hai bên phổi hoặc các ổ nhồi máu</strong>, thường phân bố nhiều hơn ở các thùy dưới do ưu thế dòng máu tưới. Kích thước các ổ tổn thương rất khác nhau, phản ánh từng đợt giải phóng cục thuyên tắc lặp đi lặp lại (repeated embolic shower). Ban đầu, tổn thương biểu hiện dưới dạng các đám đông đặc hình chêm ở ngoại vi, đáy tựa sát màng phổi kèm theo <em>dấu hiệu quầng sáng (halo sign)</em> hoặc <em>dấu hiệu halo đảo ngược (reverse halo sign)</em> (13,14). Sau đó, quầng sáng mờ dần và các tổn thương gom lại thành các nốt rõ rệt.
      </p>
      <p>
        Các ổ nhồi máu trong thuyên tắc nhiễm trùng kinh điển sẽ <strong>tiến triển hoại tử trung tâm, dẫn đến các nốt tạo hang (cavitation)</strong> (Hình 1). Hiện tượng tạo hang cũng có thể xuất hiện trong nhồi máu do huyết khối thường (bland PE), nhưng cực kỳ hiếm gặp (15). Trong đa số các trường hợp thuyên tắc nhiễm trùng, không thể nhìn thấy trực tiếp khuyết thuốc cản quang trong lòng động mạch trên CT vì các ổ thuyên tắc nằm ở mao mạch vi thể; tuy nhiên, đôi khi một <strong>mảnh sùi lớn từ van tim</strong> có thể bong ra và di chuyển vào các nhánh động mạch phổi lớn, dễ dàng nhận diện trên CT mạch máu và thường gây nhồi máu phổi diện rộng dạng phân thùy hoặc thùy (Hình 2).
      </p>
      <p>
        Chẩn đoán phân biệt của các nốt phổi tạo hang bao gồm: di căn phổi tạo hang (cavitary metastases), u hạt kèm viêm đa mạch (granulomatosis with polyangiitis - GPA), viêm phổi do nấm, và các nốt hoại tử vô khuẩn (necrobiotic nodules) gặp trong viêm khớp dạng thấp hoặc bệnh lý viêm ruột mạn tính (IBD).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure1_septic_emboli.jpg" alt="Hình 1 – Thuyên tắc nhiễm trùng ở nam giới 30 tuổi với các nốt tạo hang và dấu hiệu reverse halo" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 1. Thuyên tắc nhiễm trùng (Septic embolism) được chẩn đoán ở một nam bệnh nhân 30 tuổi.</strong> Hình ảnh CT ngực cửa sổ nhu mô lớp cắt ngang cho thấy các ổ nhồi máu phổi ở nhiều giai đoạn tiến triển khác nhau. Có nhiều nốt tổn thương ngoại vi hai bên (các mũi tên), một số nốt bắt đầu hoại tử tạo hang (mũi tên nét đứt ở A). Một ổ nhồi máu ngoại vi hình chêm mang <em>dấu hiệu halo đảo ngược (reverse halo sign)</em> (vòng elip ở A) hiện diện tại thùy dưới phổi trái.
          </figcaption>
        </figure>
      </div>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure2_tricuspid_vegetation.jpg" alt="Hình 2 – Mảnh sùi lớn van ba lá thuyên tắc động mạch phổi ở bệnh nhân nữ 51 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 2. Mảnh sùi lớn van tim thuyên tắc vào các nhánh động mạch phổi ở bệnh nhân nữ 51 tuổi có tiền sử nhiễm HIV, nhiễm khuẩn huyết tái diễn, viêm nội tâm mạc van ba lá nhân tạo do nấm Candida parapsilosis và tràn dịch màng phổi khu trú.</strong> (A) Hình ảnh CT có tiêm thuốc cản quang lát cắt ngang cho thấy một ổ khuyết thuốc rất lớn (mũi tên) nằm trong thân động mạch phổi phải lan tới động mạch thùy dưới phổi phải, dẫn đến một ổ nhồi máu lớn (*) tại thùy dưới phổi phải. (B) Hình CT cửa sổ nhu mô phổi khẳng định ổ nhồi máu lớn (*). (C) Hình CT ngực lát cắt ngang qua tim bộc lộ khối sùi lớn bám trên van ba lá (các mũi tên) thò vào buồng tống thất phải (RVOT).
          </figcaption>
        </figure>
      </div>

      <p>
        Quản lý và điều trị thuyên tắc nhiễm trùng tập trung cốt lõi vào việc kiểm soát ổ nhiễm trùng gốc bằng kháng sinh hoặc kháng nấm thích hợp. Các biến chứng nặng nề như <strong>mủ màng phổi (empyema)</strong> và <strong>tràn khí màng phổi tự phát</strong> có thể phát sinh nhanh chóng, do vị trí tổn thương nằm sát màng phổi tạng và bản chất hoại tử tạo hang của các ổ nhồi máu. X-quang ngực đóng vai trò hữu ích trong việc theo dõi sát sự tiến triển của các ổ nhồi máu và phát hiện kịp thời các biến chứng màng phổi trong suốt quá trình điều trị kháng vi sinh.
      </p>

      <h3 id="thuyen-tac-ky-sinh-trung">3.2. Thuyên tắc ký sinh trùng (Parasitic Emboli)</h3>
      <p>
        Bệnh giun đũa (gây bởi <em>Ascaris lumbricoides</em>), bệnh sán máng (gây bởi <em>Schistosoma mansoni</em>), và bệnh nang sán hydatid (gây bởi <em>Echinococcus granulosus</em>) là các nhiễm trùng ký sinh trùng có thể đi kèm với thuyên tắc động mạch phổi:
      </p>
      <ul class="list-disc pl-5 space-y-1.5 text-slate-800">
        <li><strong>Nhiễm giun đũa (Ascariasis):</strong> Điển hình gây ra các phản ứng viêm trong phế nang di chuyển, thoáng qua và khu trú (hội chứng Löffler) trong giai đoạn ấu trùng chu du qua phổi. Tuy nhiên, y văn đã ghi nhận những ca bệnh tắc nghẽn động mạch phổi cấp tính do thuyên tắc ấu trùng ồ ạt trong bệnh giun đũa lan tỏa, dẫn đến đột tử tức thì (16).</li>
        <li><strong>Bệnh nang sán Hydatid (Echinococcosis):</strong> Có thể khu trú ở bất kỳ cơ quan nào nhưng phổ biến nhất là gan và phổi (17,18). Thuyên tắc động mạch phổi do nang sán hydatid là một biến chứng hiếm gặp nhưng vô cùng nghiêm trọng, gây ra do nang sán ở gan vỡ vào tĩnh mạch chủ dưới (IVC), giải phóng các nang con (daughter cysts) trôi tự do về các buồng tim phải và bắn vào các nhánh động mạch phổi (19). Ít gặp hơn, bệnh có thể bắt nguồn từ việc vỡ một nang sán nằm trong cơ tim phải (20), hoặc hiếm hơn nữa là do nang sán nguyên phát ở phổi xâm lấn trực tiếp vào thành động mạch phổi (21). Thuyên tắc hydatid có thể biểu hiện kịch phát gây tử vong đột ngột, hoặc gây tăng áp động mạch phổi bán cấp và mạn tính (22). Trên hình ảnh CT, các ổ thuyên tắc hydatid biểu hiện dưới dạng <em>cấu trúc dạng nang giảm tỷ trọng nằm trong lòng động mạch phổi gây phình giãn nở rộng lòng mạch khu trú</em> (23). Ban đầu bệnh nhân có thể hoàn toàn không có triệu chứng do tuần hoàn bàng hệ từ động mạch phế quản duy trì tưới máu, nhưng sự phát triển tăng dần kích thước của các nang con cuối cùng sẽ dẫn đến tắc nghẽn hoàn toàn lòng mạch (24).</li>
        <li><strong>Bệnh sán máng (Schistosomiasis):</strong> Thường gây xơ hóa gan dẫn đến tăng áp lực tĩnh mạch cửa và hình thành tuần hoàn bàng hệ cửa - chủ. Trứng sán máng có thể di chuyển vào hệ tĩnh mạch hệ thống qua các cầu nối bàng hệ này, sau đó mắc kẹt lại trong các tiểu động mạch phổi nhỏ, khởi phát phản ứng viêm u hạt ngoại lai và tái cấu trúc thành mạch dữ dội, cuối cùng dẫn đến tăng áp động mạch phổi liên quan đến sán máng (25).</li>
      </ul>

      <h2 id="pho-hinh-anh-tan-sinh">4. Phổ Biểu hiện Hình ảnh: Các Thực thể Tân sinh (Neoplastic Entities)</h2>

      <h3 id="sarcoma-dong-mach-phoi-nguyen-phat">4.1. Sarcoma Động mạch Phổi Nguyên phát (Primary PAS)</h3>
      <p>
        <strong>Sarcoma động mạch phổi nguyên phát (Pulmonary Artery Sarcoma – PAS)</strong> là một khối u ác tính cực kỳ hiếm gặp, xuất phát từ các tế bào trung mô của lớp nội mạc động mạch phổi (26). Về mặt mô học, sarcoma không biệt hóa (undifferentiated sarcoma) và sarcoma cơ trơn (leiomyosarcoma) là các phân type hay gặp nhất tấn công các mạch máu phổi lớn. Phần lớn bệnh nhân là phụ nữ trong độ tuổi từ 45 đến 55 tuổi (27).
      </p>
      <p>
        Trên hình ảnh CTPA, PAS biểu hiện dưới dạng <strong>khuyết thuốc dạng khối choán chỗ (masslike filling defect)</strong> chiếm giữ lòng thân động mạch phổi chính hoặc các nhánh động mạch phổi gốc. Khối thường lấp kín toàn bộ đường kính lòng mạch và làm <strong>phình giãn nở rộng kích thước mạch máu liên quan</strong>. Thành của động mạch phổi thường bị hòa lẫn vào tổn thương và trở nên mờ nhạt, mất liên tục — dấu hiệu kinh điển này được gọi là <strong>dấu hiệu che khuất thành mạch (wall-eclipsing sign)</strong> (28,29) (Hình 3). Khối u thường tiến triển rất nhanh, phá vỡ thành mạch để xâm lấn trực tiếp vào nhu mô phổi lân cận hoặc các cấu trúc trung thất (Hình 4).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure3_wall_eclipsing_pas.jpg" alt="Hình 3 – Dấu hiệu che khuất thành mạch (wall-eclipsing sign) ở bệnh nhân nữ 45 tuổi mắc PAS" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 3. Dấu hiệu che khuất thành mạch (Wall-eclipsing sign) ở một phụ nữ 45 tuổi mắc Sarcoma động mạch phổi (PAS).</strong> (A) Hình CTPA lát cắt ngang bộc lộ khối dạng u nhiều múi (*) choán trọn lòng thân động mạch phổi. Cả hai thành bên của thân động mạch phổi (các mũi tên) đều bị khối u xóa nhòa và che khuất hoàn toàn. (B) Hình CTPA lát cắt ngang thấp hơn cho thấy khối u (*) phát triển lan ngược dòng vào buồng tống thất phải (các mũi tên).
          </figcaption>
        </figure>
      </div>

      <p>
        Phương pháp điều trị triệt căn duy nhất của PAS là phẫu thuật cắt bỏ rộng rãi. Tiên lượng của PAS rất xấu, và tiên lượng này càng trầm trọng hơn do tình trạng <strong>chẩn đoán muộn kéo dài</strong> (Hình 4E, 4F). Do tính chất hiếm gặp và biểu hiện hình ảnh chồng lấp, ban đầu PAS hầu như luôn bị chẩn đoán nhầm thành thuyên tắc huyết khối (PE), dẫn đến việc bệnh nhân bị điều trị kháng đông kéo dài mà bệnh vẫn âm thầm tiến triển.
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure4_pas_progression.jpg" alt="Hình 4 – Diễn tiến lâm sàng và xâm lấn của PAS ở bệnh nhân nữ 40 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 4. Diễn tiến lâm sàng của Sarcoma động mạch phổi (PAS) ở bệnh nhân nữ 40 tuổi có triệu chứng khó thở bán cấp.</strong> (A) Hình CT ngực tái tạo coronal ban đầu cho thấy khuyết thuốc nhỏ ở ĐM thùy dưới phải và khuyết thuốc gây tắc hoàn toàn ĐM thùy giữa và thùy trên phải (các mũi tên). (B) Hình CT lát cắt ngang cùng thời điểm cho thấy một lượng nhỏ mô mềm ngoài lòng mạch (vùng quan tâm). Bệnh nhân bị chẩn đoán nhầm là PE và được chỉ định dùng thuốc kháng đông. (C) Hình CTPA tái tạo coronal 3 tháng sau ghi nhận khuyết thuốc nội mạch lan rộng đáng kể dù đã dùng kháng đông, cắt cụt ĐM thùy trên và thùy giữa phải (các mũi tên). (D) Hình CT mạch máu lát cắt ngang sau 3 tháng chứng minh khối mô mềm ngoài lòng mạch phát triển mạnh mẽ xâm lấn vào nhu mô phổi và trung thất lân cận (vùng quan tâm). Sinh thiết qua phẫu thuật lồng ngực nội soi có hỗ trợ video (VATS) khẳng định sarcoma nội mạc động mạch phổi xâm lấn nhu mô phổi và mỡ rốn phổi. (E, F) Hình CT ngực 1 năm sau phẫu thuật cắt toàn bộ phổi phải cho thấy di căn gan, các nốt gieo rắc cạnh tim và cạnh thực quản (* ở E) cùng các nốt di căn phổi trái (vòng tròn ở F), minh chứng cho tiên lượng tử vong rất cao của PAS.
          </figcaption>
        </figure>
      </div>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-300 text-sm">
          <caption class="text-base font-bold text-slate-900 mb-2 text-left">Bảng 3: Ma trận Chẩn đoán Phân biệt giữa Sarcoma Động mạch Phổi (PAS) và Huyết khối Động mạch Phổi (Bland PE)</caption>
          <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
            <tr>
              <th class="p-3 border border-slate-300 w-1/4">Đặc điểm đối chiếu</th>
              <th class="p-3 border border-slate-300 w-3/8 bg-red-50 text-red-900">Sarcoma Động mạch Phổi (PAS)</th>
              <th class="p-3 border border-slate-300 w-3/8 bg-blue-50 text-blue-900">Huyết khối Thường (Bland PE)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-800 bg-white">
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Triệu chứng lâm sàng</td>
              <td class="p-3 border border-slate-300">Khó thở tiến triển từ từ, sụt cân, mệt mỏi, các triệu chứng toàn thân (B-symptoms)</td>
              <td class="p-3 border border-slate-300">Khó thở khởi phát đột ngột hoặc bán cấp, đau ngực kiểu màng phổi, ho ra máu</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Nồng độ D-dimer</td>
              <td class="p-3 border border-slate-300">Thường hoàn toàn <strong>bình thường</strong> (hoặc chỉ tăng nhẹ nếu có huyết khối bám kèm)</td>
              <td class="p-3 border border-slate-300">Thường <strong>tăng rất cao</strong></td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Vị trí tổn thương</td>
              <td class="p-3 border border-slate-300">Trung tâm (thân chính ĐM phổi hoặc các nhánh ĐM phổi gốc), thường ưu thế một bên</td>
              <td class="p-3 border border-slate-300">Có thể gặp ở trung tâm hoặc ngoại vi (nhánh thùy, phân thùy), thường phân bố hai bên</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Đường kính mạch máu</td>
              <td class="p-3 border border-slate-300"><strong>Phình giãn nở rộng</strong> rõ rệt mạch máu bị tổn thương do khối u choán chỗ</td>
              <td class="p-3 border border-slate-300">Mạch có thể giãn nhẹ trong tắc cấp, bình thường hoặc teo hẹp trong huyết khối mạn</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Ngấm thuốc cản quang (CT/MRI)</td>
              <td class="p-3 border border-slate-300"><strong>Ngấm thuốc không đồng nhất</strong> hoặc dạng loang lổ (nhận diện rõ trên DECT)</td>
              <td class="p-3 border border-slate-300"><strong>Hoàn toàn không ngấm thuốc</strong> cản quang</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Hạn chế khuếch tán (DWI/MRI)</td>
              <td class="p-3 border border-slate-300">Thường hiện diện rõ rệt (do mật độ tế bào u cao)</td>
              <td class="p-3 border border-slate-300">Thường không có hạn chế khuếch tán</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Vôi hóa trên CT</td>
              <td class="p-3 border border-slate-300">Rất hiếm gặp (trừ khi có thành phần tạo xương)</td>
              <td class="p-3 border border-slate-300">Có thể xuất hiện dạng viền hoặc chấm trong huyết khối mạn tính</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Dấu hiệu che khuất thành mạch & Xâm lấn</td>
              <td class="p-3 border border-slate-300"><strong>Hiện diện trong rất nhiều trường hợp</strong>; phá hủy thành mạch lan vào trung thất/phổi</td>
              <td class="p-3 border border-slate-300"><strong>Hoàn toàn không có</strong> (thành mạch luôn sắc nét và bảo tồn)</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">Đáp ứng với thuốc kháng đông</td>
              <td class="p-3 border border-slate-300"><strong>Hoàn toàn không cải thiện</strong>; khối u tồn tại dai dẳng hoặc to lên</td>
              <td class="p-3 border border-slate-300"><strong>Có đáp ứng thoái triển</strong> hoặc ly giải cục máu sau vài tuần đến vài tháng</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Đôi khi, sự ngấm thuốc của khối u có thể khó phát hiện trên CTPA do thì chụp mạch máu quá sớm, và sự xâm lấn ngoài lòng mạch có thể chưa xuất hiện ở các giai đoạn khởi phát của PAS. Trong những tình huống này, <strong>các ổ nhồi máu phổi bán cấp một bên tiến triển liên tục dù đang dùng kháng đông đầy đủ</strong> có thể là dấu hiệu lâm sàng - hình ảnh đầu tiên gợi ý PAS (Hình 5). Do đó, sự hiện diện của các ổ nhồi máu phổi một bên không thoái triển mà ngày càng gia tăng bắt buộc phải gióng lên hồi chuông cảnh báo về một khối u nội mạch gốc và bác sĩ điều trị cần được thông báo ngay lập tức!
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure5_pas_infarcts.jpg" alt="Hình 5 – Các ổ nhồi máu phổi một bên tiến triển trong PAS" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 5. Hình ảnh CT ngực cửa sổ nhu mô ở bệnh nhân nữ 40 tuổi mắc PAS (cùng bệnh nhân ở Hình 4).</strong> (A) Một ổ nhồi máu nhỏ hình chêm (mũi tên) tại thùy trên phổi phải là tổn thương duy nhất lúc khởi phát ban đầu, chưa hề quan sát thấy khuyết thuốc rõ ở thân động mạch phổi. (B) Chụp CT kiểm tra 3 tháng sau cho thấy các ổ nhồi máu phổi tiến triển lan rộng ở phổi phải, gồm một ổ nhồi máu lớn (*) tại thùy dưới phải cùng vô số ổ nhồi máu nhỏ hơn ở ngoại vi (vòng tròn), cảnh báo sự hiện diện của khối u nội mạch trung tâm đang tiến triển!
          </figcaption>
        </figure>
      </div>

      <p>
        Một chẩn đoán phân biệt quan trọng khác của PAS là <strong>viêm xơ hóa trung thất (fibrosing mediastinitis)</strong> – một tình trạng tăng sinh lành tính của các mô xơ đặc quánh trong trung thất. Việc phân biệt có thể gặp khó khăn; tuy nhiên viêm xơ hóa trung thất có xu hướng ưu thế tấn công các cấu trúc tĩnh mạch và đường thở. Sự tiến triển nhanh chóng và xuất hiện các thành phần mô mềm dạng u choán chỗ rõ rệt là các yếu tố then chốt ủng hộ PAS hơn là viêm xơ hóa trung thất.
      </p>
      <p>
        Các kỹ thuật hình ảnh tiên tiến như PET/CT và MRI có thể hỗ trợ chẩn đoán PAS và gia tăng độ rõ nét của tổn thương. Trên MRI, PAS biểu hiện hạn chế khuếch tán trên chuỗi xung DWI và ngấm thuốc cản từ rõ trên các chuỗi xung sau tiêm gadolinium (32). Tuy nhiên, độ nhạy của chụp cộng hưởng từ mạch máu (MRA) đối với các nhánh khuyết thuốc ở xa ngoại vi vẫn còn hạn chế (33).
      </p>
      <p>
        <strong>18F-FDG PET/CT</strong> thường xuyên được chỉ định ở các bệnh nhân nghi ngờ PAS. Nhiều nghiên cứu ghi nhận mức độ hấp thu FDG rất cao trong PAS (34), nhưng một số nghiên cứu khác lại báo cáo mức độ hấp thu FDG rất thấp (35). Các khối u sarcoma có thể có mức độ bắt giữ FDG rất dao động tùy thuộc vào mức độ biệt hóa mô học của chúng, điều này khiến cho <em>tính chất ái lực FDG (FDG avidity) trở thành một chỉ số không hoàn toàn đáng tin cậy để xác định bản chất ác tính</em> (Hình 6) (36). Mặt khác, bản thân các cục huyết khối lành tính (PE) trong giai đoạn viêm hoạt động cũng có thể bắt FDG cao (37), và viêm xơ hóa trung thất cũng có mức độ hấp thu FDG biến thiên tùy thuộc vào mức độ viêm hoạt động (38).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure6_pas_pet_ct.jpg" alt="Hình 6 – CTPA và FDG PET/CT ở bệnh nhân PAS" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 6. Hình ảnh CTPA và PET/CT ở bệnh nhân nữ 40 tuổi mắc PAS (cùng bệnh nhân ở Hình 4).</strong> (A) Hình CTPA lát cắt ngang bộc lộ khối u sarcoma nội mạc động mạch phổi phát triển lan rộng ra ngoài lòng mạch (các mũi tên) thâm nhiễm vào nhu mô phổi và trung thất. (B) Hình FDG PET/CT lát cắt ngang cho thấy khối u mô mềm chỉ bắt FDG ở mức độ nhẹ (các mũi tên). Mặc dù PET/CT giúp làm tăng độ tương phản nhận diện tổn thương nhưng không đủ giá trị để khẳng định hay phân định bản chất ác tính nếu chỉ dựa vào cường độ SUV.
          </figcaption>
        </figure>
      </div>

      <h3 id="thuyen-tac-u-dong-mach-phoi">4.2. Thuyên tắc U Động mạch Phổi (Pulmonary Tumor Embolism)</h3>
      <p>
        Các tế bào hoặc mảnh mô u di căn từ các khối u ác tính trong hoặc ngoài lồng ngực có thể di chuyển và mắc kẹt trong các nhánh động mạch phổi, với các nghiên cứu tử thiết ghi nhận <strong>tỷ lệ hiện mắc từ 3% đến 26% ở các bệnh nhân tử vong do ung thư tạng đặc (solid tumors)</strong> (39). Phổ bệnh học của thuyên tắc u trải dài từ các khối u lớn trong lòng mạch (thuyên tắc đại thể - macroembolism) gây triệu chứng kịch phát mô phỏng PE cấp tính, cho đến các ổ vi huyết khối u tế bào (thuyên tắc vi thể - microscopic tumor embolism) thường dẫn đến biểu hiện suy hô hấp và tăng áp phổi bán cấp.
      </p>
      
      <p><strong>Thuyên tắc u đại thể (Macroscopic tumor emboli):</strong> Tấn công các nhánh động mạch phổi chính, thùy hoặc phân thùy và biểu hiện lâm sàng rất giống PE. Các đặc điểm hình ảnh then chốt giúp phân biệt với huyết khối thường bao gồm: <em>sự ngấm thuốc cản quang rõ rệt trong khối khuyết thuốc trên CT hoặc MRI</em> và <em>sự tăng hấp thu FDG mạnh mẽ trên PET/CT</em> khi khối u nguyên phát là loại u ái lực FDG (Hình 7, Hình 8). Một số khối u có nguồn gốc mô liên kết như osteosarcoma di căn có thể bộc lộ các ổ vôi hóa, khoáng hóa đậm độ xương ngay bên trong khối huyết khối u nội mạch (Hình 8).</p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure7_thyroid_tumor_thrombus.jpg" alt="Hình 7 – Huyết khối u và thuyên tắc u đại thể ở bệnh nhân ung thư biểu mô tuyến giáp thoái sản" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 7. Huyết khối u (tumor thrombus) và thuyên tắc u đại thể (tumor macroembolism) ở nam bệnh nhân 52 tuổi mắc ung thư biểu mô tuyến giáp thể thoái sản (anaplastic thyroid carcinoma).</strong> (A) Hình CT ngực có cản quang lát cắt ngang bộc lộ khối u lớn ở thùy trên phổi trái (*) kèm thành phần xâm lấn nội mạch nổi bật (mũi tên liền) nằm trong ĐM phổi chính bên trái. Một khối u nội mạch tương tự (mũi tên nét đứt) cũng được ghi nhận trong thân ĐM phổi phải. (B) Hình FDG PET/CT lát cắt ngang cho thấy sự bắt giữ FDG rất mạnh mẽ trong khối u thùy trên trái (*) lan liên tục vào ĐM phổi trái (mũi tên bên trái), đại diện cho huyết khối u xâm lấn trực tiếp. Ngoài ra còn có ổ tăng hấp thu FDG đậm nét trong khối mô mềm nội mạch ở ĐM phổi phải (mũi tên bên phải), khẳng định tình trạng thuyên tắc u đại thể di căn xa.
          </figcaption>
        </figure>
      </div>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure8_osteosarcoma_tumor_thrombus.jpg" alt="Hình 8 – Huyết khối u và nhồi máu phổi ở bệnh nhân 18 tuổi mắc osteosarcoma di căn" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 8. Huyết khối u và nhồi máu phổi ở một bệnh nhân nam 18 tuổi mắc osteosarcoma di căn.</strong> (A) Hình CT ngực có cản quang lát cắt ngang cho thấy các ổ khuyết thuốc trong ĐM phổi xuống bên phải (*) và các nhánh phân thùy thùy dưới trái và thùy lưỡi (các mũi tên), kèm theo sự giãn lớn của các động mạch này. Chú ý hiện tượng <strong>khoáng hóa đậm độ xương (prominent mineralization)</strong> nổi bật ngay bên trong khối huyết khối u đặc trưng của osteosarcoma. (B) Hình CT lát cắt ngang qua nhu mô phổi bộc lộ đám đông đặc hình chêm ở ngoại vi thùy dưới phổi trái (dấu sao), đại diện cho một ổ nhồi máu phổi thứ phát.
          </figcaption>
        </figure>
      </div>

      <p><strong>Thuyên tắc u nhánh nhỏ và vi thể (Small & Microscopic Tumor Emboli):</strong> Tấn công các nhánh động mạch dưới phân thùy và các tiểu động mạch trung tâm tiểu thùy phổi thứ cấp. Tổn thương biểu hiện đặc trưng dưới dạng <strong>các động mạch phổi ngoại vi giãn lớn và có dạng chuỗi hạt (dilated and beaded peripheral pulmonary arteries)</strong> (Hình 9). Các <em>nốt nụ trên cành dạng mạch máu (vascular tree-in-bud nodules)</em> và hiện tượng chuỗi hạt mạch máu là các dấu hiệu hình ảnh kinh điển của thuyên tắc u nhánh nhỏ, nhưng rất dễ bị nhầm lẫn với viêm tiểu phế quản nhiễm trùng (infectious bronchiolitis) hoặc viêm phổi hít – vốn là các bệnh lý thường gặp hơn rất nhiều trên lâm sàng (40).</p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure9_chondrosarcoma_microembolism.jpg" alt="Hình 9 – Thuyên tắc u vi thể ở bệnh nhân nam 57 tuổi mắc chondrosarcoma thanh quản" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 9. Thuyên tắc u vi mạch (Tumor microembolism) ở nam bệnh nhân 57 tuổi mắc chondrosarcoma thanh quản di căn, hiện không điều trị.</strong> (A) Hình CT ngực lát cắt ngang cho thấy tình trạng giãn nở và chuỗi hạt đa ổ của các nhánh mạch máu (các mũi tên). (B) Hình CT ngực lát cắt ngang bộc lộ các nốt "nụ trên cành" (vòng tròn và hình bầu dục). Mặc dù hình thái nụ trên cành thường gặp nhất trong nhiễm trùng lan theo đường thở và hít sặc; tuy nhiên ở một bệnh nhân có bệnh lý ác tính tiềm ẩn, sự xuất hiện dai dẳng và tiến triển của các nốt nụ trên cành dạng mạch máu bắt buộc phải hướng tới chẩn đoán thuyên tắc u vi mạch.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Dấu hiệu phân biệt cốt lõi giữa thuyên tắc u dạng nụ trên cành với viêm tiểu phế quản nhiễm trùng/hít sặc:</strong>
      </p>
      <ul class="list-disc pl-5 space-y-1 text-slate-800">
        <li><strong>Sự vắng mặt của tình trạng dày thành đường thở và nút nhầy phế quản:</strong> Bệnh nhân thuyên tắc u không có dày thành phế quản hay ứ đọng nhầy trong lòng ống thở.</li>
        <li><strong>Đặc tính tiến triển theo thời gian:</strong> Thuyên tắc u sẽ liên tục to lên và lan rộng theo thời gian; ngược lại viêm đường thở do nhiễm trùng hoặc hít sặc sẽ có xu hướng thuyên giảm, thoái triển hoặc biến đổi thất thường khi được điều trị.</li>
        <li><strong>Khẩu kính mạch máu:</strong> Thuyên tắc u có xu hướng <em>làm phình giãn nở rộng các nhánh mạch máu ngoại vi</em> khi quan sát kỹ; trong khi các nút nhầy phế quản đơn thuần hầu như không làm giãn nở lòng đường thở (trừ khi có giãn phế quản sẵn từ trước).</li>
      </ul>

      <p>
        Các khối u nguyên phát hay gặp nhất đi kèm với thuyên tắc u vi thể bao gồm: ung thư biểu mô tuyến vú, ung thư dạ dày tế bào nhẫn (signet ring cell carcinoma), ung thư biểu mô tế bào gan (HCC), ung thư biểu mô tế bào thận (RCC), ung thư tiền liệt tuyến, và ung thư biểu mô màng đệm (choriocarcinoma) (41). Trong y văn phương Tây, ung thư vú là nguyên nhân thường gặp nhất (42). Các dấu hiệu hình ảnh trên CT có thể rất kín đáo, chỉ biểu hiện dưới dạng dày màng liên tiểu thùy dạng nốt hoặc nhẵn và các vùng kính mờ ngoại vi (Hình 10). Các đám mờ này có thể thay đổi vị trí theo thời gian mô phỏng một quá trình viêm phổi tổ chức hóa.
      </p>
      <p>
        Trên xạ hình V/Q scan, các ổ thuyên tắc u vi thể có thể tạo nên một hình ảnh cực kỳ đặc trưng được gọi là <strong>"bản đồ đường viền" (contour mapping)</strong>: tạo nên bởi vô số các ổ khuyết tưới máu ngoại vi nhỏ, ranh giới sắc nét ở cả hai bên phổi, chạy men theo đúng đường viền ranh giới của các phân thùy phế quản phổi (9) (Hình 10D).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure10_microscopic_tumor_embolism.jpg" alt="Hình 10 – Thuyên tắc u vi thể ở thai phụ 42 tuổi có tiền sử ung thư vú" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 10. Thuyên tắc u vi thể (Microscopic tumor embolism) ở thai phụ 42 tuổi có tiền sử ung thư biểu mô tuyến vú thể ống xâm lấn, ung thư biểu mô tuyến giáp thể nhú và u lympho Hodgkin, nhập viện vì khó thở bán cấp tăng dần.</strong> (A–C) Hình CT ngực lát cắt ngang (A, B) và tái tạo coronal (C) bộc lộ các đám kính mờ ngoại vi đa ổ hai bên phổi (các hình bầu dục và vòng tròn), tồn tại dai dẳng trên các phim CT kiểm tra. Ngoài ra bệnh nhân có tổn thương di căn xương lan tỏa. Các chẩn đoán phân biệt ban đầu bao gồm nhồi máu bán cấp tiến triển, nhiễm trùng không điển hình và viêm phổi tổ chức hóa. (D) Xạ hình V/Q scan tiếp theo cho thấy vô số các ổ khuyết tưới máu nhỏ ở ngoại biên (các mũi tên), tạo nên dấu hiệu "bản đồ đường viền" (contour mapping) kinh điển. Siêu âm tim ghi nhận áp lực buồng tim phải tăng rất cao. Bệnh nhân được mổ lấy thai khẩn cấp, giải phẫu bệnh bánh nhau phát hiện các đám tế bào ung thư vú di căn. Khuyết thuốc lòng mạch thường hoàn toàn không thấy trong thuyên tắc vi mạch u, và tổn thương nhu mô phổi có thể là manh mối hình ảnh duy nhất!
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Bệnh lý vi mạch huyết khối do u ở phổi (Pulmonary Tumor Thrombotic Microangiopathy – PTTM):</strong> Là một thể lâm sàng cực kỳ ác tính và tối cấp của thuyên tắc u vi mạch động mạch phổi. PTTM mang cơ chế bệnh sinh rất độc đáo: các ổ vi thuyên tắc tế bào u mắc kẹt trong tiểu động mạch sẽ tiết ra các yếu tố tăng trưởng mạch máu như <strong>VEGF (vascular endothelial growth factor), PDGF (platelet-derived growth factor), và osteopontin</strong> (43). Các cytokine này kích hoạt sự tăng sinh tế bào sợi cơ lớp nội mạc mạch máu (fibrocellular intimal proliferation) và tái cấu trúc thành mạch dữ dội. Hậu quả là sức cản mạch máu phổi tăng vọt kịch phát, dẫn đến <strong>tăng áp động mạch phổi tối cấp và tâm phế cấp/bán cấp (cor pulmonale)</strong> (44).
      </p>
      <p>
        Hình ảnh CT ngực trong PTTM bao gồm: <em>hình ảnh lát đá (crazy paving appearance)</em> trên nền các nốt nụ trên cành dạng mạch máu và các mạch máu giãn chuỗi hạt. Các dấu hiệu đi kèm gồm giãn lớn thân động mạch phổi (tăng áp phổi) và các dấu hiệu suy chức năng thất phải nặng nề (thất phải giãn to, vách liên thất bị đẩy phẳng hoặc cong lệch sang trái). PTTM bắt buộc phải được đưa vào chẩn đoán phân biệt ở bất kỳ bệnh nhân ung thư nào đột ngột xuất hiện tăng áp phổi diễn tiến nhanh và tâm phế cấp không giải thích được. Tiên lượng của PTTM là vô cùng tàn khốc: thời gian sống sót trung vị chỉ vỏn vẹn <strong>9 ngày</strong> kể từ khi khởi phát triệu chứng (45)!
      </p>

      <h3 id="u-co-tron-trong-long-mach">4.3. U Cơ Trơn Trong Lòng Mạch (Intravascular Leiomyomatosis)</h3>
      <p>
        Sự xâm lấn lòng mạch máu phổi không phải lúc nào cũng bắt nguồn từ các khối u ác tính. <strong>U cơ trơn trong lòng mạch (Intravascular Leiomyomatosis)</strong> là một thực thể đặc biệt đặc trưng bởi sự tăng sinh trong lòng mạch của các tế bào cơ trơn hoàn toàn lành tính về mặt mô học. Tổn thương có thể phát sinh nguyên phát trong thành mạch hoặc phổ biến hơn là phát triển lan rộng trực tiếp từ một khối u xơ tử cung (uterine leiomyoma) vào các đám rối tĩnh mạch chậu và tĩnh mạch sinh dục lân cận (46).
      </p>
      <p>
        Khối u tiếp tục bò dọc theo tĩnh mạch buồng trứng, tĩnh mạch chủ dưới (IVC), chui vào các buồng tim phải và hiếm hơn có thể vươn tới các nhánh động mạch phổi (47–49) (Hình 11). Bệnh lý này phụ thuộc chặt chẽ vào nồng độ estrogen, và phần lớn bệnh nhân là phụ nữ tiền mãn kinh ở độ tuổi trung niên. Phương pháp điều trị là phẫu thuật bóc tách triệt để toàn bộ khối u; điều này thường khả thi về mặt kỹ thuật do khối u hầu như không dính chặt hoặc chỉ dính một phần rất nhỏ vào lớp nội mạc thành mạch máu (48,50).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure11_intravascular_leiomyomatosis.jpg" alt="Hình 11 – U cơ trơn trong lòng mạch ở bệnh nhân nữ 45 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 11. U cơ trơn trong lòng mạch (Intravascular leiomyomatosis) ở một phụ nữ 45 tuổi nhập viện vì mệt mỏi và chướng bụng.</strong> (A) Hình CT ổ bụng có tiêm thuốc cản quang tái tạo coronal cho thấy một khối u xơ tử cung phát triển lan liên tục vào đám rối tĩnh mạch cạnh tử cung bên phải, tĩnh mạch buồng trứng phải, tĩnh mạch chủ dưới (IVC) và các buồng tim phải (các mũi tên), lấp đầy toàn bộ lòng mạch. (B) Hình CT thì tĩnh mạch lát cắt ngang qua tim bộc lộ phần u trong tim (*) nằm choán chỗ trong tâm nhĩ phải và tâm thất phải. Khối u đã được phẫu thuật bóc tách thành công, kết quả giải phẫu bệnh khẳng định u cơ trơn lành tính. (C) Hình CT ngực 6 tháng sau phẫu thuật ghi nhận một ổ thuyên tắc u cơ trơn (mũi tên) nằm trong nhánh ĐM thùy dưới phổi phải.
          </figcaption>
        </figure>
      </div>


      <h2 id="pho-hinh-anh-can-thiep-va-ngoai-sinh">5. Phổ Biểu hiện Hình ảnh: Thực thể do Can thiệp Y khoa & Tác nhân Ngoại sinh (Iatrogenic & Exogenous)</h2>
      <p>
        Số lượng các thủ thuật can thiệp chẩn đoán và điều trị nội mạch ngày càng gia tăng đã kéo theo sự gia tăng tương ứng của các biến chứng liên quan đến sự di chuyển bất thường của các vật liệu ngoại sinh vào các nhánh động mạch phổi. <strong>Cửa sổ xương (Bone window)</strong> và các thuật toán tái tạo chuyên sâu thường là chìa khóa then chốt giúp phát hiện các vật liệu thuyên tắc cản quang cao này.
      </p>

      <h3 id="thuyen-tac-thiet-bi-noi-mach">5.1. Thuyên tắc Thiết bị Nội mạch (Intravascular Devices)</h3>
      <p>
        <strong>Gãy đoạn catheter tĩnh mạch trung tâm:</strong> Các đoạn đứt gãy của catheter tĩnh mạch trung tâm hoặc catheter lọc máu có thể di chuyển xuôi dòng về tĩnh mạch chủ, tâm nhĩ phải, tâm thất phải và kẹt lại trong các nhánh động mạch phổi. Tỷ lệ đứt gãy catheter tĩnh mạch được báo cáo vào khoảng <strong>0.1%</strong> (51) (Hình 12). Rất nhiều bệnh nhân hoàn toàn không có triệu chứng lâm sàng và tổn thương thường chỉ được phát hiện tình cờ trên phim chụp X-quang ngực kiểm tra định kỳ. Can thiệp nội mạch bằng thòng lọng (snare) gắp dị vật được chỉ định thực hiện khi điều kiện giải phẫu cho phép.
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure12_catheter_fragment.jpg" alt="Hình 12 – Đoạn gãy catheter thuyên tắc động mạch phổi ở bệnh nhân nữ 23 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 12. Đoạn gãy catheter thuyên tắc vào động mạch phổi ở một bệnh nhân nữ 23 tuổi mắc bệnh thận mạn giai đoạn cuối.</strong> Phim X-quang ngực thẳng (A) và nghiêng (B) cho thấy một bóng mờ dạng đường thẳng (mũi tên) nằm đúng vị trí giải phẫu của ĐM thùy dưới phổi trái, đại diện cho một mảnh catheter bị đứt gãy và trôi tự do, nhiều khả năng từ một catheter lọc máu cũ. Bệnh nhân có bóng tim to do hở van hai lá nặng và xơ cứng rải rác.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Đứt gãy và thuyên tắc dây máy tạo nhịp tim (Pacemaker lead fracture & embolization):</strong> Là một biến chứng hiếm gặp liên quan đến thao tác rút bỏ dây máy tạo nhịp truyền thống, xảy ra trong khoảng <strong>0.1%–0.2%</strong> các trường hợp (52) (Hình 13). Sự di chuyển của đầu dây tạo nhịp bị đứt từ các buồng tim phải vào lưới mạch máu phổi là kịch bản hay gặp nhất. Chiến lược xử trí bao gồm gắp bỏ can thiệp hoặc chấp nhận lưu giữ theo dõi (abandonment), tùy thuộc vào bối cảnh lâm sàng và tính khả thi kỹ thuật. Khi đoạn dây đã chui sâu vào các nhánh xa của động mạch phổi ngoại vi, nguy cơ rách thủng mạch máu khi cố gắp qua da là rất cao; trong tình huống đó, theo dõi bảo tồn là giải pháp được ưu tiên nếu bệnh nhân không có triệu chứng (53). Việc ứng dụng máy tạo nhịp không dây (leadless pacemaker) trong kỷ nguyên mới giúp loại bỏ hoàn toàn các biến chứng này.
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure13_pacemaker_lead.jpg" alt="Hình 13 – Đứt gãy và thuyên tắc dây máy tạo nhịp ở nam bệnh nhân 78 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 13. Đứt gãy và thuyên tắc đầu dây máy tạo nhịp tim ở cụ ông 78 tuổi đặt máy tạo nhịp hai buồng.</strong> Phim X-quang ngực sau - trước cho thấy các dây tạo nhịp nằm trong tâm nhĩ phải và tâm thất phải. Đầu mút đứt gãy bị thuyên tắc của một dây (mũi tên) nhìn thấy rõ trong nhánh ĐM thùy dưới phổi phải, đại diện cho tai biến của thủ thuật rút bỏ và cấy lại dây máy tạo nhịp.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Vòng xoắn kim loại gây tắc mạch (Embolization coils):</strong> Được sử dụng rộng rãi để bít các cầu nối thông động - tĩnh mạch hoặc điều trị rò dưỡng chấp màng phổi (chylothorax), đôi khi có thể bị áp lực dòng chảy cuốn trôi và thuyên tắc vào tuần hoàn phổi (54) (Hình 14).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure14_coils_embolization.jpg" alt="Hình 14 – Vòng xoắn coil thuyên tắc tuần hoàn phổi ở bệnh nhân nữ 36 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 14. Vòng xoắn coil thuyên tắc vào tuần hoàn phổi ở một phụ nữ 36 tuổi có tiền sử ghép phổi hai bên và can thiệp bít tắc ống ngực bằng coil và keo sinh học do rò dưỡng chấp.</strong> (A, B) Hình CT ngực lát cắt ngang cho thấy các cấu trúc tăng tỷ trọng kim loại rất cao nằm trong các nhánh ĐM thùy trên phổi phải (các mũi tên) và trong lòng ống ngực (vòng tròn). Vật liệu cản quang trong ống ngực chủ yếu là coil kim loại, cùng một lượng nhỏ hỗn hợp keo và coil đã tràn qua bàng hệ vào ĐM thùy trên phổi phải. (C) X-quang ngực bộc lộ các vòng xoắn coil trong ống ngực (các mũi tên) và vật liệu thuyên tắc trong ĐM thùy trên phổi phải (hình bầu dục).
          </figcaption>
        </figure>
      </div>

      <h3 id="thuyen-tac-tac-nhan-ngoai-sinh">5.2. Thuyên tắc các Chất Ngoại sinh (Exogenous Agents)</h3>
      <p>
        <strong>Thuyên tắc xi măng sinh học sau tạo hình đốt sống (Vertebroplasty Cement Embolism):</strong> Liên quan đến sự rò rỉ của xi măng xương (polymethylmethacrylate - PMMA) qua các đám rối tĩnh mạch quanh đốt sống trong hoặc ngay sau thủ thuật bơm xi măng qua da tạo hình thân đốt sống (vertebroplasty hoặc kyphoplasty) (55) (Hình 15). Do tính chất lỏng quánh của xi măng khi mới pha, áp lực tiêm có thể đẩy xi măng vào tĩnh mạch đĩa đệm và trôi về tim phải, lên động mạch phổi. Polymethylmethacrylate có <strong>độ cản quang cực kỳ cao</strong> (tỷ trọng từ 1000 đến trên 2000 HU) và dễ dàng được nhận diện trên X-quang ngực, CT không cản quang hoặc cửa sổ xương trên CTPA (55).
      </p>
      <p>
        <strong>Thuyên tắc keo sinh học (Glue Embolism):</strong> Keo sinh học (<em>n-butyl-2-cyanoacrylate</em>) là biến chứng tiềm ẩn đe dọa tính mạng sau nội soi tiêm xơ điều trị xuất huyết do vỡ giãn tĩnh mạch phình vị dạ dày, do keo rò rỉ vào tĩnh mạch chủ dưới qua các vòng nối bàng hệ vị - thận hoặc lách - thận (56). Đặc điểm hình ảnh học hoàn toàn tương tự như thuyên tắc xi măng xương với các cấu trúc cản quang hình dải phân nhánh trong lòng mạch.
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure15_cement_embolization.jpg" alt="Hình 15 – Thuyên tắc xi măng sinh học sau tạo hình đốt sống ở nam bệnh nhân 76 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 15. Thuyên tắc xi măng sinh học (Cement embolization) ở cụ ông 76 tuổi mới trải qua thủ thuật tạo hình thân đốt sống qua da bằng xi măng sinh học (percutaneous vertebroplasty).</strong> Hình ảnh CT ngực lát cắt ngang cửa sổ trung thất bộc lộ rõ vùng tăng tỷ trọng hình ống đặc quánh dạng kim loại (hình bầu dục) nằm trong một nhánh phân thùy của ĐM phổi xuống bên phải, đặc trưng của thuyên tắc polymethylmethacrylate.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Thuyên tắc dầu iod (Iodinated Oil Embolism):</strong> Xuất hiện trong bệnh cảnh chụp hệ bạch huyết qua CT (CT lymphangiography) (Hình 16), sau thủ thuật nút mạch hóa chất điều trị ung thư biểu mô tế bào gan (TACE) (57), và đôi khi sau chụp tử cung vòi trứng (HSG) bằng chất cản quang gốc dầu (58). CT ngực cho thấy các đám tăng tỷ trọng dạng hạt đậm đặc trong lòng các mạch máu phổi kèm theo các đám kính mờ loang lổ đa ổ do phản ứng viêm hóa học phế nang.
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure16_iodinated_oil_embolism.jpg" alt="Hình 16 – Thuyên tắc dầu iod sau chụp bạch mạch ở nam bệnh nhân 50 tuổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 16. Thuyên tắc dầu iod (Iodinated oil embolization) sau chụp hệ bạch huyết ở nam bệnh nhân 50 tuổi có tiền sử ghép phổi hai bên biến chứng rò dưỡng chấp.</strong> Hình CT ngực tái tạo sagittal (A, B) bộc lộ các dải tăng tỷ trọng hình ống phân nhánh (hình bầu dục ở A) trong các nhánh dưới phân thùy của ĐM thùy trên phổi phải, kèm theo các ổ xuất huyết phế nang (*) và ổ nhồi máu phổi (mũi tên ở B) tại thùy trên phải.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Các tác nhân ngoại sinh hiếm gặp khác:</strong>
      </p>
      <ul class="list-disc pl-5 space-y-1.5 text-slate-800">
        <li><strong>Thuyên tắc thủy ngân (Mercury embolism):</strong> Thường do tiêm tĩnh mạch tự sát (59) hoặc tai biến rút máu tĩnh mạch bằng bơm tiêm có gắn nút bịt thủy ngân. Chẩn đoán xác định dễ dàng trên X-quang ngực với vô số hạt tròn kim loại nhỏ sáng rực phân bố dọc cây mạch máu phổi.</li>
        <li><strong>Thuyên tắc hạt cấy phóng xạ (Brachytherapy seeds):</strong> Là biến chứng đã được biết rõ của liệu pháp cấy hạt phóng xạ điều trị ung thư tiền liệt tuyến (60). Các hạt cấy gần rìa tuyến tiền liệt có thể di chuyển qua đám rối tĩnh mạch quanh tiền liệt tuyến vào tĩnh mạch chậu và lên động mạch phổi, thường hoàn toàn không có triệu chứng và phát hiện tình cờ dưới dạng các que kim loại nhỏ cản quang.</li>
        <li><strong>Silicone lỏng tự do (Liquid silicone):</strong> Được tiêm bất hợp pháp để thẩm mỹ nâng ngực hoặc làm đầy cơ thể, đặc biệt ở người chuyển giới nữ (61). Silicone lỏng tiêm tự do có thể thẩm thấu trực tiếp vào tuần hoàn tĩnh mạch, gây thuyên tắc phổi diện rộng có thể tử vong. Bệnh nhân biểu hiện ARDS dữ dội và <strong>xuất huyết phế nang lan tỏa (diffuse alveolar hemorrhage)</strong>, với hình ảnh kính mờ, đông đặc và dày màng liên tiểu thùy dày đặc hai bên (62).</li>
      </ul>

      <p>
        <strong>Xảo ảnh "Cục máu nóng" FDG (FDG "Hot Clot" Artifact):</strong> Đại diện cho vùng tích tụ chất đánh dấu phóng xạ rất mạnh trong nhu mô phổi trên PET nhưng <em>hoàn toàn không có bất kỳ tổn thương giải phẫu tương ứng nào trên phim CT đồng thời</em>. Đây là một xảo ảnh kinh điển do hiện tượng <strong>kết tụ (ngưng kết) của phân tử 18F-FDG</strong> trước khi tiêm vào lòng mạch bệnh nhân. Cục "thuyên tắc" FDG này trôi tự do và mắc kẹt trong một tiểu động mạch phổi nhỏ, gây ra một ổ bắt thuốc phóng xạ khu trú giả tạo. Xảo ảnh này có tầm quan trọng đặc biệt trong thực hành ung bướu, vì nó rất dễ bị chẩn đoán nhầm thành nốt di căn phổi đơn độc, dẫn đến việc xếp giai đoạn bệnh quá mức (upstaging) và thay đổi sai lệch hoàn toàn kế hoạch điều trị của người bệnh (Hình 17). Cần lưu ý rằng: <em>nếu chụp kiểm tra lặp lại lần thứ hai, ổ bắt thuốc này sẽ biến mất hoàn toàn</em>!
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure17_fdg_hot_clot.jpg" alt="Hình 17 – Xảo ảnh cục máu nóng FDG (hot clot artifact) ở bệnh nhân ung thư phổi" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 17. Xảo ảnh "Cục máu nóng" FDG (FDG hot clot artifact) ở một phụ nữ 62 tuổi mắc ung thư biểu mô tuyến của phổi (lung adenocarcinoma).</strong> (A) Hình ảnh FDG PET/CT lát cắt ngang bộc lộ một ổ tăng hấp thu phóng xạ khu trú rất mạnh (mũi tên) tại thùy trên phổi trái, đại diện cho ổ kết tụ FDG do can thiệp y khoa. (B) Hình CT ngực cùng mặt cắt được thực hiện trong cùng ngày hoàn toàn <strong>không có bất kỳ tổn thương dạng nốt hay cấu trúc bất thường tương ứng nào</strong> tại vị trí bắt thuốc này, khẳng định đây là một xảo ảnh do kỹ thuật!
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Thuyên tắc khí Động mạch Phổi (Air Embolism):</strong> Thường có nguồn gốc do can thiệp y khoa, xuất hiện sau khi tiêm truyền thuốc hoặc thao tác trên catheter tĩnh mạch trung tâm. Không khí xâm nhập vào các tĩnh mạch hệ thống, đi qua các buồng tim phải và bắn vào các nhánh động mạch phổi. Thuyên tắc khí tĩnh mạch lượng nhỏ khá phổ biến (gặp ở 23% các ca chụp CT) và thường lành tính (63). Tuy nhiên, một thể tích khí từ <strong>200–500 mL được bơm vào tĩnh mạch với tốc độ nhanh &ge; 100 mL/giây</strong> sẽ gây tắc nghẽn cơ học hoàn toàn buồng tống thất phải và tuần hoàn phổi, dẫn đến tử vong nhanh chóng (11,63,64).
      </p>
      <p>
        Thuyên tắc khí tĩnh mạch có nguy cơ nghiêm trọng chuyển thành <strong>thuyên tắc nghịch thường (paradoxical embolism)</strong> đi vào tuần hoàn động mạch hệ thống nếu bệnh nhân có tồn tại lỗ bầu dục (PFO) hoặc shunt động - tĩnh mạch phổi. Ngược lại, thuyên tắc khí động mạch hệ thống nguyên phát xảy ra khi bọt khí đi vào các tĩnh mạch phổi sau các thủ thuật xuyên thành ngực (sinh thiết phổi xuyên thành ngực, áp lạnh hoặc đốt sóng cao tần u phổi). Trong trường hợp này, <em>chỉ cần một thể tích khí cực nhỏ khoảng 2–3 mL xâm nhập vào tĩnh mạch phổi cũng có thể gây tử vong tức thì</em> do nguy cơ tắc nghẽn trực tiếp động mạch vành và động mạch não (65)!
      </p>

      <h2 id="pho-hinh-anh-thuc-the-hon-hop">6. Phổ Biểu hiện Hình ảnh: Các Thực thể Hỗn hợp Khác (Miscellaneous Entities)</h2>

      <h3 id="hoi-chung-thuyen-tac-mo">6.1. Hội chứng Thuyên tắc Mỡ (Fat Embolism Syndrome – FES)</h3>
      <p>
        <strong>Hội chứng thuyên tắc mỡ (Fat Embolism Syndrome – FES)</strong> điển hình xảy ra trong bệnh cảnh gãy các xương dài (đặc biệt là xương đùi) hoặc phẫu thuật chỉnh hình lớn trên xương, trong đó các hạt mỡ tủy xương bị giải phóng vào vòng tuần hoàn tĩnh mạch. Thuyên tắc mỡ xảy ra ở 1%–3% các ca gãy xương dài đơn độc, nhưng <strong>tỷ lệ này vọt lên tới 33% ở các trường hợp gãy hai xương đùi hoặc gãy phức tạp khung chậu</strong> (66,67). Ngoài chấn thương, FES cũng có thể gặp trong các bệnh cảnh không do chấn thương như bệnh huyết sắc tố (bệnh hồng cầu hình liềm), bỏng nặng, viêm tụy cấp hoại tử, viêm tủy xương, truyền máu lượng lớn, phẫu thuật tim phổi nhân tạo, bệnh giảm áp và phẫu thuật hút mỡ (liposuction) (68).
      </p>
      <p>
        Cơ chế bệnh sinh của FES là sự kết hợp kép giữa <strong>tắc nghẽn cơ học vi mạch</strong> bởi các hạt mỡ và <strong>phản ứng viêm hóa học độc tế bào</strong> dữ dội do các acid béo tự do độc hại được giải phóng từ các giọt mỡ bị mắc kẹt tại lưới mao mạch phổi. Tác động của thuyên tắc mỡ biểu hiện rõ nét nhất ở 3 cơ quan đích tạo nên <strong>tam chứng kinh điển: Phổi, Não và Da</strong>:
      </p>
      <ul class="list-disc pl-5 space-y-1 text-slate-800">
        <li>Tổn thương phổi: Khó thở tiến triển, hạ oxy máu nghiêm trọng, ARDS.</li>
        <li>Tổn thương thần kinh: Kích động, lú lẫn, li bì đến hôn mê.</li>
        <li>Tổn thương da: Ban xuất huyết dạng chấm (petechial rash) đặc trưng ở vùng ngực, nách, kết mạc mắt và niêm mạc miệng.</li>
      </ul>
      <p>
        Chẩn đoán FES dựa trên lâm sàng và được hỗ trợ bởi các tiêu chuẩn như <strong>tiêu chuẩn Gurd & Wilson</strong> (69) hoặc <strong>tiêu chuẩn Schonfeld</strong> (70). Điểm then chốt trên hình ảnh học là: <strong>các dấu hiệu tổn thương phổi điển hình chỉ xuất hiện sau khoảng thời gian tiềm phục từ 1 đến 2 ngày sau chấn thương</strong>. Khoảng thời gian tiềm phục (time lapse) này là yếu tố vàng giúp phân biệt FES với các tổn thương chấn thương trực tiếp tức thì như giập phổi (pulmonary contusion) – vốn xuất hiện ngay lập tức sau va chạm (11).
      </p>
      <p>
        Dấu hiệu CT ngực điển hình bao gồm các đám kính mờ lan tỏa hai bên và các ổ đông đặc rải rác (Hình 18) – phản ánh hội chứng tổn thương phổi cấp. Sự vắng mặt của bóng tim to, đường Kerley B và tràn dịch màng phổi giúp phân biệt chắc chắn với phù phổi cấp do tim (12).
      </p>
      <p>
        Khuyết thuốc trực tiếp trong lòng các nhánh động mạch phổi lớn do mỡ rất hiếm khi quan sát thấy. Trong trường hợp hiếm hoi nhìn thấy, <strong>đo tỷ trọng CT (Hounsfield Unit - HU) của khối khuyết thuốc là chìa khóa quyết định</strong>: huyết khối máu thường có tỷ trọng dương tính trung bình khoảng <strong>+55 HU</strong> (71), trong khi các cục thuyên tắc chứa mỡ luôn có <strong>tỷ trọng âm tính đặc trưng (âm từ -20 đến -100 HU)</strong>!
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure18_fat_embolism.jpg" alt="Hình 18 – Hội chứng thuyên tắc mỡ ở phụ nữ 30 tuổi bị đa chấn thương gãy xương" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 18. Hội chứng thuyên tắc mỡ phổi (Pulmonary fat embolism) ở một phụ nữ 30 tuổi bị đa chấn thương.</strong> (A, B) Hình CT ngực lát cắt ngang (A) và tái tạo coronal (B) bộc lộ các đám kính mờ loang lổ và các ổ đông đặc nhỏ nằm đè lên nền kính mờ lan tỏa hai bên phổi, trong bối cảnh lâm sàng gợi ý cao tổn thương phổi cấp do thuyên tắc mỡ. (C) X-quang chi dưới bộc lộ các ổ gãy nát di lệch phức tạp của xương đùi, xương chày và xương mác – nguồn giải phóng mỡ tủy xương ồ ạt vào lòng mạch.
          </figcaption>
        </figure>
      </div>

      <h3 id="thuyen-tac-nuoc-oi">6.2. Thuyên tắc Nước ối (Amniotic Fluid Embolism)</h3>
      <p>
        <strong>Thuyên tắc nước ối</strong> là một biến chứng sản khoa cực kỳ nguy hiểm và thường dẫn đến tử vong, với tỷ lệ tử vong được báo cáo lên tới <strong>20%–60%</strong> (72). Cơ chế bệnh sinh liên quan đến sự kích hoạt bùng nổ của chuỗi phản ứng miễn dịch và đông máu khi dịch ối chứa lông tơ, tế bào biểu mô bong và chất gây xâm nhập vào tuần hoàn người mẹ thông qua các vết rách vi thể ở tĩnh mạch tử cung trong quá trình chuyển dạ hoặc mổ lấy thai.
      </p>
      <p>
        Bệnh nhân đột ngột khó thở kịch phát, tím tái, tụt huyết áp trụy tim mạch dữ dội, tiến triển tức thì thành <strong>Đông máu nội mạch lan tỏa (DIC)</strong>, suy tuần hoàn hô hấp tối cấp và phù phổi nặng nề (73). Chẩn đoán chủ yếu dựa vào lâm sàng. Hình ảnh CT ngực biểu hiện các tổn thương phổi cấp tính với các đám kính mờ và đông đặc lan tỏa hai bên của phù phổi không do tim (74). Các vi thuyên tắc nước ối trong lòng tiểu động mạch phổi hoàn toàn "vô hình" trên các phương tiện chẩn đoán hình ảnh.
      </p>

      <h3 id="benh-phoi-do-ta-duoc">6.3. Bệnh Phổi do Tá dược (Excipient Lung Disease – ELD)</h3>
      <p>
        <strong>Bệnh phổi do tá dược (Excipient Lung Disease – ELD)</strong>, còn được gọi là <em>Bệnh u hạt mạch máu dị vật ở phổi (Pulmonary foreign-body angiogranulomatosis)</em>, là một tình trạng bệnh lý không thường gặp xảy ra khi các đối tượng nghiện ma túy nghiền nát các viên thuốc uống để hòa tan và tiêm chích vào tĩnh mạch (75). Các viên thuốc uống chứa đầy các tá dược (excipients) – là các vật liệu độn dạng hạt không hòa tan trơ về mặt hóa học, phổ biến nhất là <strong>bột talc, cellulose vi tinh thể (microcrystalline cellulose), crospovidone, và tinh bột</strong> (76,77).
      </p>
      <p>
        Khi tiêm vào tĩnh mạch, các hạt tá dược không tan này trôi về tim phải và mắc kẹt tại mạng lưới tiểu động mạch và mao mạch phổi, khởi phát phản ứng viêm hạt ngoại lai mạn tính (foreign-body granulomatous reaction), dẫn đến tắc nghẽn lòng mạch tiến triển, xơ hóa và cuối cùng là <strong>tăng áp động mạch phổi nặng nề và tâm phế mạn</strong>. Biểu hiện lâm sàng rất đa dạng, từ hoàn toàn không triệu chứng ở giai đoạn đầu cho tới suy tim phải mất bù nhanh chóng.
      </p>
      <p>
        Đặc điểm hình ảnh CT ngực kinh điển là <strong>các vi nốt trung tâm tiểu thùy lan tỏa (&lt; 3 mm) phân bố đồng đều ở cả hai phổi</strong> (Hình 19), có hoặc không kèm theo dấu hiệu tăng áp phổi và suy tim phải. Các nốt vi thể này hiển thị cực kỳ sắc nét trên <em>chuỗi ảnh tái tạo cường độ tối đa (MIP - Maximum Intensity Projection)</em>. Trên phân tích mô bệnh học, ngoại trừ crospovidone, hầu hết các hạt tá dược này biểu hiện dưới dạng các tinh thể lưỡng chiết phát sáng rực rỡ dưới kính hiển vi ánh sáng phân cực (77). Chẩn đoán phân biệt hình ảnh chính của ELD bao gồm bệnh u máu mao mạch phổi (PCH) (76) và PTTM (75).
      </p>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure19_excipient_lung_disease.jpg" alt="Hình 19 – Bệnh phổi do tá dược (ELD) ở phụ nữ 29 tuổi tiêm chích ma túy" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 19. Bệnh phổi do tá dược (ELD) ở một phụ nữ 29 tuổi có tiền sử lạm dụng tiêm chích ma túy đường tĩnh mạch, nhập viện vì khó thở.</strong> (A) Phim X-quang ngực thẳng cho thấy vô số vi nốt mờ lan tỏa hai bên phổi. (B) Hình CT ngực lát cắt ngang bộc lộ rõ các nốt trung tâm tiểu thùy lan tỏa phân bố đồng đều khắp cả hai phế trường. (C) Trên hình CT tái tạo cường độ tối đa (MIP) lát cắt ngang, các nốt mờ và kiểu phân bố trung tâm tiểu thùy của chúng trở nên nổi bật và sắc nét vượt trội. Bệnh cảnh hình ảnh này kết hợp tiền sử tiêm chích viên thuốc uống khẳng định bệnh phổi do tá dược.
          </figcaption>
        </figure>
      </div>

      <h2 id="xao-anh-tren-ctpa-mo-phong-thuyen-tac-phoi">7. Các Xảo ảnh trên CTPA Mô phỏng Thuyên tắc Phổi (Artifacts at CTPA Simulating NTPE and PE)</h2>
      <p>
        Việc đọc và diễn giải chính xác phim CTPA đòi hỏi nồng độ cản quang trong lòng động mạch phổi phải đạt mức cao đồng nhất và tỷ lệ tín hiệu trên nhiễu (contrast-to-noise ratio) tối ưu. Một số xảo ảnh kỹ thuật tại động mạch phổi có thể mô phỏng rất giống cục thuyên tắc huyết khối (PE) hoặc NTPE, tiềm ẩn nguy cơ dẫn đến chẩn đoán dương tính giả tai hại. Bảng 4 tóm tắt các xảo ảnh động mạch phổi quan trọng nhất, đặc điểm nhận diện và các biện pháp kỹ thuật khắc phục (78).
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-300 text-sm">
          <caption class="text-base font-bold text-slate-900 mb-2 text-left">Bảng 4: Các Xảo ảnh trên CTPA Mô phỏng NTPE và Huyết khối PE (Artifacts at CTPA)</caption>
          <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
            <tr>
              <th class="p-3 border border-slate-300 w-1/5">Loại xảo ảnh</th>
              <th class="p-3 border border-slate-300 w-1/4">Nguyên nhân cơ chế</th>
              <th class="p-3 border border-slate-300 w-1/3">Đặc điểm hình ảnh nhận diện</th>
              <th class="p-3 border border-slate-300">Biện pháp khắc phục (Troubleshooting)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-800 bg-white">
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300" rowspan="3">
                Xảo ảnh dòng chảy ĐM phổi<br/>
                <em>("Khói" trong lòng mạch - Smoke artifact)*</em>
              </td>
              <td class="p-3 border border-slate-300">
                <strong>Chụp quá sớm:</strong> Chụp trước khi thuốc cản quang hòa trộn đồng nhất trong ĐM phổi (thường gặp ở bệnh nhân suy tim ứ huyết).
              </td>
              <td class="p-3 border border-slate-300">
                Khuyết thuốc bờ không rõ nét với ranh giới dạng sợi khói mỏng ("smoke"); <strong>tỷ trọng khuyết thuốc cao &gt; 78 HU</strong>.<br/>
                Chưa thấy hoặc thấy rất ít thuốc cản quang trong quai động mạch chủ và các nhánh ĐM phổi xa.
              </td>
              <td class="p-3 border border-slate-300">
                Chụp ở thì muộn hơn (delayed acquisition) với điểm kích hoạt tự động (bolus tracking) đặt tại quai động mạch chủ.
              </td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-300">
                <strong>Dòng chảy chậm do co mạch:</strong> Hiện tượng co mạch do thiếu oxy (hypoxemic vasoconstriction) ở các vùng phổi bệnh lý (đông đặc hoặc xẹp phổi).
              </td>
              <td class="p-3 border border-slate-300">
                Khuyết thuốc bờ mờ dạng khói; tỷ trọng &gt; 78 HU.<br/>
                Không có sự thay đổi khẩu kính mạch máu, tổn thương chỉ khu trú tại một nhánh mạch đơn độc cấp máu cho vùng phổi đông đặc.
              </td>
              <td class="p-3 border border-slate-300">
                Chụp ở thì muộn hơn với trigger kích hoạt từ động mạch chủ.
              </td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-300">
                <strong>Dòng máu vào từ ĐM phế quản:</strong> Trong bệnh phổi mạn tính (giãn phế quản, xơ nang), mạng lưới bàng hệ ĐM phế quản phì đại đổ dòng máu không ngấm thuốc ngược vào tuần hoàn ĐM phổi.
              </td>
              <td class="p-3 border border-slate-300">
                Khuyết thuốc có ranh giới rõ hơn ở ngoại vi (nơi máu chưa ngấm thuốc từ ngoại vi đổ vào ĐM phổi) và xuất hiện "dạng khói" ở vùng ĐM phổi trung tâm (Hình 20).
              </td>
              <td class="p-3 border border-slate-300">
                Chụp ở thì muộn hơn với trigger kích hoạt từ động mạch chủ.
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">
                Xảo ảnh cứng hóa chùm tia hoặc vệt sáng<br/>
                <span class="text-xs font-normal text-slate-500">(Beam-hardening / streak artifact)</span>
              </td>
              <td class="p-3 border border-slate-300">
                Liều bolus thuốc cản quang quá đậm đặc nằm trong tĩnh mạch chủ trên (SVC) hoặc do các kim loại cấy ghép lân cận.
              </td>
              <td class="p-3 border border-slate-300">
                Các vệt tối dạng đường thẳng băng qua mạch máu mô phỏng các khuyết thuốc giảm đậm độ.
              </td>
              <td class="p-3 border border-slate-300">
                Bơm đuổi bằng nước muối sinh lý (saline chaser); sử dụng máy CT hai mức năng lượng (DECT) nếu có.
              </td>
            </tr>
            <tr>
              <td class="p-3 font-semibold bg-slate-50 border border-slate-300">
                Hiệu ứng thể tích bán phần do cử động<br/>
                <span class="text-xs font-normal text-slate-500">(Partial volume averaging)</span>
              </td>
              <td class="p-3 border border-slate-300">
                Độ dày lát cắt quá dày hoặc mạch máu có hướng chạy chéo so với mặt phẳng cắt ngang.
              </td>
              <td class="p-3 border border-slate-300">
                Hình ảnh giả khuyết thuốc tại rìa thành mạch do sự tính trung bình tỷ trọng giữa nhu mô phổi chứa khí và mạch máu chứa thuốc.
              </td>
              <td class="p-3 border border-slate-300">
                Tái tạo lát cắt mỏng (&le; 1 mm); luôn đối chiếu và kiểm tra trên các mặt phẳng tái tạo đa hướng (MPR).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6">
        <figure class="my-4">
          <img src="/posts/nonthrombotic-pulmonary-embolism/figure20_flow_artifacts.jpg" alt="Hình 20 – Xảo ảnh dòng chảy động mạch phổi mô phỏng huyết khối" class="w-full h-auto rounded-xl shadow-md" />
          <figcaption class="mt-2 text-xs text-slate-600 leading-relaxed">
            <strong>Hình 20. Xảo ảnh dòng chảy động mạch phổi (Pulmonary artery flow artifacts).</strong> (A) Hình CT lát cắt ngang bộc lộ một khuyết thuốc dạng "sợi khói" (các mũi tên) trong ĐM phổi trái, nhiều khả năng do tăng áp động mạch phổi khu trú. (B, C) Hình CTPA lát cắt ngang (B) và tái tạo coronal (C) ở một phụ nữ 20 tuổi mắc bệnh xơ nang (cystic fibrosis) cho thấy một ổ khuyết thuốc nhỏ dạng đường cong (mũi tên) nằm trong ĐM thùy lưỡi, gây ra do dòng máu chưa ngấm thuốc từ các động mạch phế quản phì đại đổ ngược vào lòng động mạch phổi, dễ bị đọc nhầm thành thuyên tắc huyết khối nếu không quan sát kỹ!
          </figcaption>
        </figure>
      </div>

      <p>
        Bên cạnh các xảo ảnh trên, các cấu trúc giải phẫu nằm kế cận như phế quản ứ đọng nút nhầy, tĩnh mạch phổi ngấm thuốc kém hoặc các hạch bạch huyết phì đại tì đè sát thành ngoài động mạch phổi cũng có thể tạo ra hình ảnh giả khuyết thuốc trong lòng mạch (79).
      </p>

      <h2 id="ket-luan">8. Kết luận (Conclusion)</h2>
      <p>
        Thuyên tắc động mạch phổi không do huyết khối (NTPE) bao gồm một phổ bệnh lý rộng lớn, hiếm gặp nhưng tiềm ẩn nguy cơ tử vong rất cao, đòi hỏi sự <strong>nhận diện chính xác ở giai đoạn sớm</strong> và <strong>chiến lược điều trị đặc hiệu theo từng nguyên nhân</strong>. Mặc dù các biểu hiện lâm sàng thường chồng lấp sâu sắc với thuyên tắc huyết khối thông thường, việc kết hợp nhuần nhuyễn các kiểu hình ảnh học tinh tế trên CTPA/DECT với bệnh sử lâm sàng toàn diện sẽ mở ra cánh cửa chẩn đoán chính xác. Các bác sĩ chẩn đoán hình ảnh cần nắm vững phổ bệnh học này để kịp thời gióng lên hồi chuông cảnh báo, giúp cứu sống người bệnh và cải thiện tiên lượng sống còn.
      </p>

      <div class="key-points my-6 p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200">
        <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-base">
          <span>🌟</span> 10 ĐIỂM CỐT LÕI CẦN NHỚ TRONG THỰC HÀNH (KEY TAKEAWAYS)
        </h4>
        <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-800 leading-relaxed">
          <li><strong>Bản chất khác biệt của NTPE:</strong> Không phải cục máu đông đơn thuần mà là tế bào u, vi sinh vật, mỡ, khí, nước ối hoặc dị vật; cơ chế gây bệnh bao gồm phản ứng viêm nội mô và độc tế bào chứ không chỉ là tắc nghẽn cơ học.</li>
          <li><strong>D-dimer không có giá trị loại trừ hay chẩn đoán:</strong> D-dimer thường hoàn toàn bình thường ở các tác nhân ngoại sinh (xi măng, coil, dị vật) và tăng không đặc hiệu ở thuyên tắc mỡ/dịch ối.</li>
          <li><strong>Dấu hiệu hang trong thuyên tắc nhiễm trùng:</strong> Nhồi máu phổi nhiễm trùng kinh điển hoại tử trung tâm tạo nốt hang; kèm dấu hiệu mạch máu nuôi (feeding vessel) và halo đảo ngược (reverse halo sign).</li>
          <li><strong>Tam chứng vàng của Sarcoma động mạch phổi (PAS):</strong> (1) Khối choán toàn bộ lòng thân/nhánh gốc ĐM phổi; (2) Phình giãn nở rộng mạch máu kèm <em>dấu hiệu che khuất thành mạch (wall-eclipsing sign)</em>; (3) Khối tồn tại hoặc to lên dù dùng kháng đông đầy đủ.</li>
          <li><strong>Độ bắt FDG của PAS không đồng nghĩa với loại trừ u:</strong> PAS có thể bắt FDG từ rất thấp đến rất cao phụ thuộc vào độ biệt hóa mô học; không thể chỉ dựa vào FDG âm tính để loại trừ sarcoma.</li>
          <li><strong>Ba dấu hiệu phân biệt thuyên tắc u:</strong> Khuyết thuốc ngấm thuốc cản quang không đồng nhất; các nhánh ĐM ngoại vi giãn nở và dạng chuỗi hạt (<em>vascular tree-in-bud</em>); và tổn thương không thoái triển trên phim theo dõi.</li>
          <li><strong>Hiểm họa PTTM ở bệnh nhân ung thư:</strong> Tế bào vi u tiết VEGF/PDGF gây xơ hóa tăng sinh nội mạc, tăng áp phổi kịch phát và tâm phế cấp; hình ảnh lát đá (crazy paving) và "bản đồ đường viền" trên V/Q; tử vong trung vị sau 9 ngày!</li>
          <li><strong>Tỷ trọng âm tính của Thuyên tắc Mỡ (FES):</strong> Khuyết thuốc do mỡ có tỷ trọng âm tính (&lt; 0 HU), khác biệt hoàn toàn với huyết khối thường (+55 HU); tổn thương nhu mô phổi xuất hiện sau khoảng thời gian tiềm phục 1–2 ngày.</li>
          <li><strong>Vi nốt trung tâm tiểu thùy trong Bệnh phổi Tá dược (ELD):</strong> Tiêm chích viên thuốc nghiền gây u hạt mạch máu, biểu hiện vô số vi nốt trung tâm tiểu thùy (&lt; 3 mm) sắc nét trên chuỗi xung MIP.</li>
          <li><strong>Phân biệt Xảo ảnh "Khói" dòng chảy trên CTPA:</strong> Vùng giảm tỷ trọng dạng khói mờ ảo có tỷ trọng &gt; 78 HU (huyết khối thật sự &lt; 78 HU), gặp do chụp quá sớm, co mạch thiếu oxy hoặc dòng máu chưa ngấm thuốc từ ĐM phế quản phì đại đổ vào.</li>
        </ol>
      </div>

      <div class="pitfalls my-6 p-5 rounded-2xl bg-rose-50/80 border border-rose-200">
        <h4 class="font-bold text-rose-900 mb-3 flex items-center gap-2 text-base">
          <span>🚨</span> 8 CẠM BẪY LÂM SÀNG NGUY HIỂM NHẤT TRONG CHẨN ĐOÁN NTPE
        </h4>
        <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-800 leading-relaxed">
          <li><strong>Cạm bẫy điều trị kháng đông kéo dài cho Sarcoma Động mạch Phổi:</strong> Nhầm PAS thành huyết khối thường (bland PE), cho dùng kháng đông hàng tháng trời trong khi khối u âm thầm xâm lấn ra ngoài thành mạch vào trung thất và di căn xa, làm mất cơ hội phẫu thuật triệt căn.</li>
          <li><strong>Cạm bẫy bỏ sót khối u trung tâm khi thấy nhồi máu phổi một bên tiến triển:</strong> Bệnh nhân có các ổ nhồi máu phổi một bên tái diễn và ngày càng nhiều dù đang dùng kháng đông đầy đủ phải luôn tìm kiếm khối u nội mạch gốc (PAS hoặc tumor thrombus).</li>
          <li><strong>Cạm bẫy nhầm lẫn thuyên tắc u dạng nụ trên cành với viêm tiểu phế quản/hít sặc:</strong> Đọc nốt nụ trên cành dạng mạch máu (vascular tree-in-bud) thành viêm đường thở, bỏ sót tình trạng thuyên tắc u vi mạch ác tính. Cần kiểm tra: không có dày thành phế quản, không có nút nhầy lòng phế quản, và mạch máu ngoại vi bị giãn phình.</li>
          <li><strong>Cạm bẫy xảo ảnh "Cục máu nóng" FDG trên PET/CT:</strong> Kết tụ phân tử 18F-FDG tạo ổ bắt thuốc rất mạnh ở phổi nhưng không có tổn thương trên CT, dễ bị đọc nhầm thành nốt di căn phổi gây xếp sai giai đoạn ung thư (upstaging). Biến mất hoàn toàn khi chụp lại.</li>
          <li><strong>Cạm bẫy bị thuốc cản quang che lấp vật liệu ngoại sinh:</strong> Xi măng xương (PMMA) hay kim loại có tỷ trọng siêu cao bị che lấp hoàn toàn bởi thuốc cản quang lòng mạch trên cửa sổ trung thất thường quy. Luôn mở cửa sổ xương (bone window) hoặc dùng ảnh ảo không thuốc (VNC) trên DECT để phát hiện.</li>
          <li><strong>Cạm bẫy nhầm xảo ảnh dòng chảy ("khói" trong lòng mạch) thành huyết khối thật:</strong> Chụp quá sớm ở bệnh nhân suy tim hoặc dòng máu không cản quang từ ĐM phế quản phì đại (trong giãn phế quản/xơ nang) tạo vệt giảm đậm độ trong lòng mạch. Đo tỷ trọng: nếu &gt; 78 HU thì đó là xảo ảnh dòng chảy, không phải cục huyết khối!</li>
          <li><strong>Cạm bẫy nhầm thuyên tắc mỡ (FES) với giập phổi chấn thương:</strong> Giập phổi xuất hiện ngay tức thì sau va chạm; trong khi tổn thương phổi do FES luôn có khoảng thời gian tiềm phục từ 24 đến 48 giờ sau gãy xương mới bùng phát.</li>
          <li><strong>Cạm bẫy thuyên tắc khí gây tử vong khi làm thủ thuật lồng ngực:</strong> Khí xâm nhập vào tĩnh mạch phổi trong sinh thiết xuyên thành ngực hay đốt u phổi chỉ cần một lượng siêu nhỏ (2–3 mL) cũng có thể gây thuyên tắc mạch vành và mạch não gây ngừng tim đột ngột!</li>
        </ol>
      </div>

    `,
    views: 1420,
    readTime: "25 phút đọc",
    source: "RadioGraphics 2026; 46(4):e250129 (Brigham and Women's Hospital, Harvard Medical School)",
    tags: ["Thuyên tắc phổi", "NTPE", "Pulmonary Embolism", "Sarcoma động mạch phổi", "PAS", "Thuyên tắc u", "PTTM", "Thuyên tắc nhiễm trùng", "Thuyên tắc mỡ", "FES", "Thuyên tắc nước ối", "Bệnh phổi do tá dược", "ELD", "CTPA", "DECT", "Xảo ảnh CT"]
  },
  {
    id: "post-radiographics-2023-gallbladder-polyps-sru-update",
    title: "Cập nhật RadioGraphics: Khuyến cáo Mới về Theo dõi và Quản lý Tổn thương dạng Polyp Túi mật (Đồng thuận SRU 2022/2023)",
    slug: "khuyen-cao-moi-theo-doi-va-quan-ly-polyp-tui-mat-sru-2023",
    date: "10 Tháng 11, 2026",
    updatedDate: "10 Tháng 11, 2026",
    author: "Katerina S. Konstantinoff, MD; Katharina F. Feister, MD; Vincent M. Mellnick, MD (RadioGraphics 2023 – Biên dịch: CĐHA Cập Nhật)",
    categories: ["Bụng - chậu", "Siêu âm", "Túi mật", "Polyp túi mật", "SRU", "RadioGraphics"],
    categorySlugs: ["bung-chau", "sieu-am", "polyp-tui-mat", "sru"],
    modality: "Siêu âm",
    specialty: "Bụng - chậu",
    specialtySlug: "bung-chau",
    coverImage: "/posts/gallbladder-polyps-sru-2023/cover_gallbladder_polyps_sru.jpg",
    excerpt: "Cập nhật mang tính bước ngoặt từ RSNA RadioGraphics và Hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (SRU): Nâng ngưỡng phẫu thuật cắt túi mật từ 10 mm lên 15 mm cho polyp nguy cơ thấp, phân tầng nguy cơ tinh tế dựa trên hình thái (có cuống quả bóng đính trên thành, cuống mảnh, cuống dày/không cuống và dày thành túi mật), nâng tốc độ phát triển ngưỡng lên 4 mm/năm và rút ngắn thời gian theo dõi tối đa xuống còn 3 năm.",
    content: [
      "Đồng thuận mới của Hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (SRU) làm thay đổi căn bản cách tiếp cận polyp túi mật phát hiện tình cờ trên siêu âm.",
      "Bằng chứng thuần tập 20 năm khẳng định nguy cơ ung thư ở polyp túi mật cực kỳ thấp (chỉ 0,4% ở polyp > 10 mm), giúp nâng ngưỡng mổ cắt túi mật lên 15 mm đối với các polyp có hình thái nguy cơ thấp.",
      "Lưu đồ thuật toán chuẩn hóa xử trí: phân tầng 3 nhóm nguy cơ, loại trừ bệnh nhân có dày thành tiếp giáp (ngưỡng mổ 7 mm) và bệnh nhân viêm xơ đường mật tiên phát (PSC)."
    ],
    htmlContent: `<div class="prose prose-slate max-w-none text-slate-800 bg-white">

  <!-- HỘP BIÊN TẬP / LỜI GIỚI THIỆU -->
  <div class="not-prose my-8 p-6 rounded-2xl bg-blue-50/80 border border-blue-200/90 shadow-xs">
    <div class="flex items-center gap-3 mb-3">
      <span class="px-2.5 py-1 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wider">RadioGraphics Update</span>
      <span class="text-xs font-semibold text-blue-800">Gastrointestinal Imaging • RSNA 2023</span>
    </div>
    <h3 class="text-lg font-bold text-blue-950 mb-2">Lời Ban Biên Tập & Giới Thiệu Chuyên Đề</h3>
    <p class="text-sm text-blue-900/90 leading-relaxed mb-3">
      <strong>Lời Ban Biên tập RadioGraphics (Editor's Note):</strong> Các bài viết Cập nhật của <em>RadioGraphics (RadioGraphics Update)</em> nhằm mục đích bổ sung hoặc cập nhật thông tin trong các bài viết toàn văn đã được công bố trước đây trên <em>RadioGraphics</em>. Các bài cập nhật này, được chấp bút bởi ít nhất một tác giả của bài viết trước, cung cấp một bản tóm lược súc tích nhấn mạnh các thông tin mới quan trọng như các tiến bộ công nghệ, quy trình chụp hình ảnh sửa đổi, các hướng dẫn lâm sàng mới liên quan đến hình ảnh học, hoặc các hệ thống phân loại cập nhật.
    </p>
    <p class="text-xs text-blue-700 leading-relaxed border-t border-blue-200/60 pt-2.5">
      <strong>Ghi chú chuyên môn CĐHA:</strong> Năm 2022, Hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (SRU - Society of Radiologists in Ultrasound) đã công bố bản Đồng thuận mới (Consensus Conference Recommendations) làm thay đổi căn bản cách tiếp cận và quản lý tổn thương dạng polyp túi mật phát hiện tình cờ trên siêu âm. Điểm đột phá lớn nhất là <strong>nâng ngưỡng phẫu thuật cắt túi mật từ 10 mm lên 15 mm</strong> cho các polyp nguy cơ thấp, phân tầng nguy cơ tinh tế dựa trên <strong>hình thái có cuống / không cuống / dày thành</strong>, và <strong>rút ngắn thời gian theo dõi tối đa từ 5 năm xuống còn 3 năm</strong>, giúp giải phóng hàng triệu bệnh nhân khỏi các ca mổ cắt túi mật và theo dõi kéo dài không cần thiết.
    </p>
  </div>

  <!-- KHUNG ĐIỂM GIẢNG DẠY CỐT LÕI (TEACHING POINTS) -->
  <div class="not-prose my-8 p-6 rounded-2xl bg-emerald-50/90 border border-emerald-300 shadow-xs">
    <div class="flex items-center gap-2.5 mb-3 text-emerald-900 font-bold text-base">
      <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span>5 ĐIỂM CỐT LÕI THAY ĐỔI THỰC HÀNH TỪ ĐỒNG THUẬN SRU (2022 – 2023)</span>
    </div>
    <ul class="space-y-2.5 text-sm text-emerald-950/90 leading-relaxed">
      <li class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 shrink-0">1. Nguy cơ ung thư cực kỳ thấp:</span>
        <span>Một nghiên cứu thuần tập 20 năm trên 2.055 bệnh nhân có polyp túi mật &gt; 10 mm cho thấy tỷ lệ ung thư túi mật chỉ là <strong>0,4%</strong>. Trong một khảo sát trên hơn 3 triệu lượt siêu âm túi mật của các chuyên gia SRU, <em>chưa từng ghi nhận bất kỳ trường hợp nào</em> có polyp có cuống &lt; 10 mm mà là u ác tính.</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 shrink-0">2. Nâng ngưỡng kích thước phẫu thuật lên 15 mm:</span>
        <span>Ngưỡng kích thước chỉ định hội chẩn phẫu thuật cắt túi mật ở nhóm polyp có hình thái nguy cơ thấp hoặc cực thấp đã được nâng chính thức từ <strong>10 mm lên 15 mm</strong>. Kích thước &gt; 15 mm mới là yếu tố nguy cơ độc lập xác định polyp tân sinh.</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 shrink-0">3. Phân tầng nguy cơ dựa vào hình thái học (Morphology):</span>
        <span>Phân loại rõ 3 nhóm: <strong>Nguy cơ cực kỳ thấp</strong> (có cuống dạng quả bóng đính trên thành hoặc cuống mảnh - thường là polyp cholesterol), <strong>Nguy cơ thấp</strong> (có cuống dày/rộng, hoặc không cuống chân rộng), và <strong>Nguy cơ không xác định</strong> (dày khu trú thành túi mật &ge; 4 mm tiếp giáp cạnh polyp).</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 shrink-0">4. Thay đổi ngưỡng tốc độ phát triển lên 4 mm/năm:</span>
        <span>Sự tăng nhẹ kích thước 2–3 mm/năm hoặc dao động tăng/giảm kích thước là diễn tiến tự nhiên lành tính của polyp túi mật và không liên quan đến tiềm năng ác tính. Ngưỡng tốc độ tăng kích thước cần can thiệp ngoại khoa được nâng từ <strong>2 mm/năm lên &ge; 4 mm/năm</strong>. Nếu polyp giảm &ge; 4 mm thì ngừng theo dõi.</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 shrink-0">5. Rút ngắn thời gian theo dõi tối đa xuống 3 năm:</span>
        <span>Hơn 50% ung thư túi mật được phát hiện trong 6 tháng đầu và tỷ lệ phát hiện giảm về gần 0% sau 4 năm. Do đó, thời gian theo dõi siêu âm dọc tối đa được rút ngắn từ <strong>5 năm xuống còn 3 năm</strong>.</span>
      </li>
    </ul>
  </div>

  <!-- NỘI DUNG NGUYÊN VĂN BÀI BÁO (CHỮ ĐEN NỀN TRẮNG) -->
  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    1. Đặt vấn đề và Tổng quan (Introduction)
  </h2>
  
  <p class="leading-relaxed text-slate-800 mb-4">
    Năm 2015, Mellnick và cộng sự (1) đã trình bày chi tiết về phổ bệnh lý của các tổn thương dạng polyp túi mật với sự đối chiếu giải phẫu bệnh học tương ứng. Bài viết này cung cấp một bản cập nhật ngắn gọn các tài liệu y văn về chủ đề này kể từ thời điểm đó, bao gồm phần tóm lược các khuyến cáo theo dõi và quản lý cập nhật gần đây của Hiệp hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (Society of Radiologists in Ultrasound – SRU) đối với polyp túi mật (2).
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Tổn thương dạng polyp của túi mật là những phát hiện hình ảnh tình cờ rất phổ biến và mang một chẩn đoán phân biệt rộng, bao gồm các khối u lành tính và ác tính cũng như các giả u (ví dụ: polyp cholesterol, bệnh u cơ tuyến adenomyomatosis, và polyp viêm). Có thể có sự chồng lấp đáng kể về mặt hình ảnh học giữa các polyp lành tính và polyp ác tính, và mục tiêu tối thượng trong việc theo dõi các polyp túi mật phát hiện tình cờ là nhằm xác định các tổn thương có nguy cơ cao trước khi chúng trở nên xâm lấn hoặc di căn. Mặc dù ung thư túi mật là một bệnh lý hiếm gặp, nó thường diễn tiến âm thầm không triệu chứng, dẫn đến việc chẩn đoán thường ở giai đoạn muộn và tiên lượng rất xấu.
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Kể từ bài báo trước (1), các dữ liệu ngày càng gia tăng tiếp tục chỉ ra rằng phần lớn áp đảo các polyp túi mật là tổn thương lành tính, đặc biệt là các polyp kích thước nhỏ. Thêm vào đó, nhiều nghiên cứu đã gợi ý rằng các ngưỡng kích thước và tốc độ phát triển trước đây là quá thận trọng (quá bảo thủ) và thực tế chỉ có một tỷ lệ rất nhỏ ung thư túi mật phát sinh từ các tổn thương tiền thân dạng polyp (3). Trước những dữ liệu mới này, một nhu cầu cấp thiết về các khuyến cáo theo dõi và quản lý cập nhật đã nảy sinh, bởi vì trước đây chúng ta có khả năng đã theo dõi quá mức rất nhiều polyp túi mật có tiềm năng ác tính thấp hoặc thậm chí không có tiềm năng ác tính. Việc quản lý quá mức tích cực đối với các polyp túi mật gần như chắc chắn lành tính bằng phẫu thuật cắt bỏ túi mật và theo dõi hình ảnh kéo dài không phải là không có hại, bao gồm các nguy cơ phẫu thuật liên quan đến cắt túi mật, sự lo lắng kéo dài của bệnh nhân, chi phí y tế không cần thiết và sự bất tiện trong cuộc sống.
  </p>

  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    2. Kích thước Polyp túi mật (Gallbladder Polyp Size)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Các hướng dẫn thực hành trước đây khuyến cáo theo dõi định kỳ các polyp có kích thước từ 6–10 mm và chỉ định phẫu thuật cắt bỏ túi mật đối với các polyp lớn hơn 10 mm (1). Chúng ta đều biết rằng các polyp tân sinh (neoplastic polyps) có xu hướng lớn hơn các polyp không tân sinh (nonneoplastic polyps), và bằng chứng khoa học tiếp tục củng cố nhận định này.
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Năm 2020, Szpakowski và Tucker (4) đã công bố một nghiên cứu thuần tập lớn theo dõi suốt 20 năm, cho thấy trong số 2.055 bệnh nhân có polyp túi mật lớn hơn 10 mm, tỷ lệ mới mắc ung thư túi mật thực tế chỉ là <strong>0,4%</strong>. Năm 2021, Liu và cộng sự (5) phát hiện ra rằng kích thước lớn hơn 15 mm mới là yếu tố nguy cơ độc lập để nhận diện các polyp tân sinh. 
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Năm 2022, Middleton và cộng sự (6) đã tiến hành khảo sát các thành viên chính thức của Hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (SRU): trong ước tính tổng số lượt khám siêu âm hình ảnh túi mật kết hợp vượt quá 3 triệu ca, <strong>không có bất kỳ người tham gia khảo sát nào từng nhìn thấy một polyp có cuống nhỏ hơn 10 mm mà sau đó được chứng minh là ác tính</strong>. Các khuyến cáo theo dõi và quản lý cập nhật đã chính thức tăng ngưỡng kích thước chỉ định phẫu thuật cắt túi mật ở các polyp có hình thái nguy cơ thấp lên mức <strong>15 mm</strong>, như được trình bày chi tiết ở phần sau của bài viết này.
  </p>

  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    3. Sự thay đổi kích thước của Polyp túi mật theo thời gian (Changes in Gallbladder Polyp Size)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Các hướng dẫn thực hành trước đây khuyến cáo rằng ngưỡng tốc độ phát triển từ 2 mm/năm là căn cứ để chuyển khám và can thiệp ngoại khoa. Kể từ bài viết trước của chúng tôi, nhiều nghiên cứu đã tập trung khảo sát ý nghĩa lâm sàng của sự tăng trưởng polyp.
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Cả Walsh và cộng sự (7) cũng như Szpakowski và Tucker (4) đều chỉ ra rằng diễn tiến tự nhiên của polyp túi mật thường bao gồm sự tăng nhẹ kích thước (2–3 mm/năm), cũng như những dao động về mặt kích thước bao gồm cả việc giảm kích thước. Đáng chú ý, sự phát triển của polyp trong cả hai nghiên cứu lớn này đều không cho thấy có mối liên quan với tiềm năng ác tính. Do đó, các hướng dẫn cập nhật của SRU đã tăng tỷ lệ ngưỡng tăng trưởng theo khoảng thời gian lên mức <strong>4 mm/năm</strong>.
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Các lý do được đưa ra để giải thích cho sự dao động kích thước polyp phụ thuộc vào bản chất nguyên nhân của polyp:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-slate-800 mb-6">
    <li><strong>Đối với polyp cholesterol:</strong> Lượng cholesterol có thể hòa tan và kết tủa trở lại ra khỏi dung dịch mật, nó có thể bị các đại thực bào ăn vào (phagocytosed), hoặc bản thân polyp có thể tự bong tróc một phần ra ngoài.</li>
    <li><strong>Đối với polyp có cuống:</strong> Phần gốc cuống còn lại sau khi polyp bong tróc sau đó có thể đóng vai trò như một ổ (nidus) để phát triển tái sinh trở lại (7).</li>
    <li><strong>Các yếu tố kỹ thuật và sinh lý:</strong> Sự dao động mức độ căng trướng của túi mật tại các thời điểm thăm khám khác nhau cũng có thể dẫn đến sự biến thiên trong việc bộc lộ hình ảnh và kích thước đo đạc của polyp trên siêu âm.</li>
  </ul>

  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    4. Hình thái học của Polyp túi mật (Gallbladder Polyp Morphology)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Năm 2020, Wennmacker và cộng sự (8) đã nghiên cứu trên hơn 2.000 trường hợp polyp hoặc các vùng dày khu trú thành túi mật và phát hiện ra rằng các polyp tân sinh và ung thư túi mật có nhiều khả năng biểu hiện dưới dạng <strong>dày thành khu trú</strong>. 
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Thêm vào đó, qua phân tích mô bệnh học trên hơn 400 polyp, Taskin và cộng sự (9) ghi nhận rằng các polyp cholesterol có cuống rất mỏng mảnh, tương ứng trực tiếp với hình thái có cuống dạng "quả bóng đính trên thành" (pedunculated ball-on-the-wall) nguy cơ cực kỳ thấp và hình thái có cuống với cuống mảnh (pedunculated with thin stalk) được mô tả trong các hướng dẫn cập nhật của SRU. Ngược lại, người ta nhận thấy rằng các polyp thực sự (true polyps) như polyp cơ sợi (fibromuscular polyps) hoặc u tuyến thường có hình thái không cuống chân rộng (broad-based sessile morphology).
  </p>

  <!-- FIGURE 1 -->
  <figure class="not-prose my-8 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
    <div class="relative group cursor-zoom-in">
      <img 
        src="/posts/gallbladder-polyps-sru-2023/figure1_inflammatory_polyp.jpg" 
        alt="Hình 1: Polyp túi mật dạng viêm có cuống quả bóng đính trên thành" 
        class="w-full h-auto object-contain bg-black/5 mx-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="p-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
      <strong>Hình 1. Polyp viêm (Inflammatory polyp).</strong> Hình ảnh siêu âm cắt ngang (A), hình ảnh cắt lớp vi tính (CT) cắt ngang đối chiếu tương ứng (B), và hình ảnh Doppler màu (C) cho thấy một tổn thương polyp kích thước 11 mm với hình thái có cuống dạng "quả bóng đính trên thành" (pedunculated ball-on-the-wall) và một cuống mạch nuôi nhỏ mỏng ở phần gốc đáy (C). Hình siêu âm cắt ngang (A) cũng cho thấy cặn bùn lắng đọng ở phần thấp phụ thuộc trọng lực trong lòng túi mật. Bệnh nhân đã được phẫu thuật cắt túi mật, với kết quả phân tích giải phẫu bệnh học chứng minh là một polyp viêm lành tính.
    </figcaption>
  </figure>

  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    5. Thời gian theo dõi dọc (Duration of Follow-up)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Trong nghiên cứu dọc dài hạn của mình, Szpakowski và Tucker (4) nhận thấy rằng <strong>hơn 50% các trường hợp ung thư túi mật được chẩn đoán trong vòng 6 tháng đầu tiên</strong> sau khi phát hiện polyp ban đầu và tỷ lệ phát hiện ung thư túi mật giảm xuống mức gần bằng 0% vào mốc 4 năm. Điều này chỉ ra rằng việc theo dõi hình ảnh kéo dài quá thời điểm này mang lại giá trị phát hiện rất thấp.
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Dựa trên bằng chứng này, các hướng dẫn cập nhật của SRU khuyến cáo thời gian theo dõi tối đa là <strong>3 năm</strong> (thay vì 5 năm như trước đây), như được mô tả chi tiết ở phần sau của bài viết này.
  </p>

  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    6. Thuật toán quản lý theo khuyến cáo đồng thuận SRU cập nhật Tháng 7/2022 (SRU Management Algorithm)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Thuật toán quản lý cập nhật được tóm tắt qua các bước tuần tự như sau (2):
  </p>
  
  <p class="leading-relaxed text-slate-800 mb-4">
    <strong>Bước 1: Xác định khả năng áp dụng thuật toán SRU.</strong> Khi phát hiện một polyp túi mật trên siêu âm, bước đầu tiên là xác định xem thuật toán SRU có áp dụng được cho trường hợp lâm sàng này hay không. Các tình huống loại trừ mà thuật toán SRU không được áp dụng bao gồm:
  </p>

  <ul class="list-disc pl-6 space-y-2 text-slate-800 mb-6">
    <li>Hình ảnh siêu âm không đạt tiêu chuẩn kỹ thuật (khi đó khuyến cáo siêu âm kiểm tra lại khoảng cách ngắn trong 1–2 tháng).</li>
    <li>Không thể phân biệt cặn bùn dạng u kích thước &gt; 10 mm hoặc bệnh u cơ tuyến adenomyomatosis với một polyp nghi ngờ (khuyến cáo siêu âm lại sau 1–2 tháng hoặc chụp siêu âm có chất cản âm CEUS / chụp MRI đường mật).</li>
    <li>Mức độ nghi ngờ cao một khối u ác tính hoặc xâm lấn ra mô xung quanh (khuyến cáo chuyển tuyến hội chẩn chuyên khoa ung bướu).</li>
    <li>Bệnh nhân có tiền sử viêm xơ đường mật tiên phát – PSC (áp dụng các hướng dẫn chuyên khoa tiêu hóa gan mật riêng biệt).</li>
  </ul>

  <p class="leading-relaxed text-slate-800 mb-4">
    <strong>Bước 2: Xác định hình thái học và phân tầng nguy cơ.</strong> Nếu thuật toán SRU áp dụng được, kích thước và hình thái học của polyp trước tiên phải được mô tả kỹ lưỡng. Việc phân tầng nguy cơ tiếp theo dựa trên hình thái học của polyp:
  </p>

  <ul class="list-disc pl-6 space-y-2 text-slate-800 mb-6">
    <li><strong>Nhóm nguy cơ cực kỳ thấp (Extremely Low Risk):</strong> Hình thái có cuống dạng quả bóng đính trên thành (pedunculated ball-on-the-wall) và hình thái có cuống với cuống mỏng mảnh (pedunculated with thin stalk).</li>
    <li><strong>Nhóm nguy cơ thấp (Low Risk):</strong> Polyp có cuống với cuống dày hoặc chân cuống rộng (pedunculated with thick or wide stalk) và polyp không cuống / chân rộng (sessile polyps).</li>
    <li><strong>Nhóm nguy cơ không xác định (Indeterminate Risk):</strong> Dày thành khu trú tiếp giáp ngay cạnh polyp (focal wall thickening adjacent to a polyp).</li>
  </ul>

  <p class="leading-relaxed text-slate-800 mb-6">
    <strong>Bước 3: Quản lý dựa trên kích thước trong từng nhóm nguy cơ.</strong> Kích thước polyp trong mỗi nhóm sau đó sẽ quyết định trực tiếp các khuyến cáo xử trí và theo dõi, như được chi tiết hóa trong Hình 2.
  </p>

  <!-- LƯU ĐỒ DỊCH HÌNH 2 (ẢNH NGUYÊN BẢN & BẢN DỊCH VIỆT HÓA) -->
  <figure class="not-prose my-8 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
    <div class="relative group cursor-zoom-in">
      <img 
        src="/posts/gallbladder-polyps-sru-2023/figure2_sru_flowchart_vi.png" 
        alt="Hình 2: Lưu đồ phác đồ theo dõi và quản lý cập nhật cho polyp túi mật từ khuyến cáo đồng thuận của SRU (Bản dịch tiếng Việt)" 
        class="w-full h-auto object-contain bg-white mx-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="p-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
      <strong>Hình 2. Lưu đồ phác đồ theo dõi và quản lý cập nhật cho polyp túi mật từ khuyến cáo đồng thuận của SRU (2) – Bản Việt hóa toàn văn.</strong> Nếu có sự phân vân / không chắc chắn giữa các nhóm phân loại, hãy chọn nhóm <strong>nguy cơ thấp (low-risk category)</strong>.<br/>
      <span class="inline-block mt-1 font-semibold text-rose-600">[a]</span> Khuyến cáo siêu âm theo dõi khoảng cách ngắn trong vòng 1–2 tháng.<br/>
      <span class="inline-block mt-0.5 font-semibold text-rose-600">[b]</span> Khuyến cáo siêu âm theo dõi khoảng cách ngắn trong vòng 1–2 tháng hoặc siêu âm có chất cản âm (CEUS) hoặc chụp cộng hưởng từ (MRI).<br/>
      <span class="inline-block mt-0.5 font-semibold text-rose-600">[c]</span> Khuyến cáo chuyển tuyến hội chẩn chuyên khoa ung bướu.<br/>
      <span class="inline-block mt-0.5 font-semibold text-rose-600">[d]</span> Tham khảo các hướng dẫn chuyên khoa tiêu hóa gan mật.<br/>
      <span class="inline-block mt-0.5 font-semibold text-rose-600">[e]</span> Khi siêu âm theo dõi, nếu kích thước tăng từ 4 mm trở lên trong vòng 12 tháng (hoặc ít hơn) hoặc polyp đạt ngưỡng kích thước chỉ định mổ của nhóm nguy cơ tương ứng, khuyến cáo hội chẩn phẫu thuật. Nếu polyp giảm kích thước từ 4 mm trở lên, ngừng theo dõi.<br/>
      <span class="inline-block mt-0.5 font-semibold text-rose-600">[f]</span> Hội chẩn phẫu thuật có thể phù hợp đối với các polyp 10–14 mm ở nhóm nguy cơ cực kỳ thấp tùy thuộc vào các yếu tố nguy cơ của người bệnh.
    </figcaption>
  </figure>

  <!-- LƯU ĐỒ TƯƠNG TÁC HTML RESPONSIVE (DỊCH NGUYÊN VĂN TỪNG KHỐI) -->
  <div class="not-prose my-10 p-6 rounded-2xl bg-slate-50/90 border border-slate-300 shadow-sm">
    <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
      <div class="flex items-center gap-2.5">
        <span class="p-2 rounded-lg bg-blue-600 text-white font-bold text-xs uppercase tracking-wider">Lưu đồ trực quan</span>
        <h3 class="text-lg font-bold text-slate-900">Chi Tiết Từng Bước Theo Dõi & Xử Trí Theo SRU 2022/2023</h3>
      </div>
      <span class="text-xs font-semibold text-slate-500 hidden sm:inline">Phác đồ chuẩn hóa thực hành</span>
    </div>

    <!-- Bước 1: Khởi đầu & Tiêu chuẩn loại trừ -->
    <div class="space-y-6">
      <div class="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center max-w-xl mx-auto shadow-2xs">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Khởi đầu thăm khám</span>
        <h4 class="text-base font-bold text-blue-950">PHÁT HIỆN TỔN THƯƠNG DẠNG POLYP TÚI MẬT TRÊN SIÊU ÂM (US)</h4>
      </div>

      <div class="flex justify-center">
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>

      <!-- Khối loại trừ -->
      <div class="p-5 rounded-xl bg-white border border-slate-300 shadow-xs max-w-3xl mx-auto">
        <h4 class="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          Kiểm tra các Tiêu chuẩn Loại trừ (Exclusion Criteria)
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 mb-4">
          <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <strong>1. Kỹ thuật không đạt:</strong> Hình ảnh siêu âm không đạt chuẩn đánh giá <span class="text-rose-600 font-bold">[a]</span>
          </div>
          <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <strong>2. Nghi ngờ u cơ tuyến / cặn bùn:</strong> Không phân biệt được cặn bùn dạng u &gt; 10 mm hoặc adenomyomatosis <span class="text-rose-600 font-bold">[b]</span>
          </div>
          <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <strong>3. Nghi ngờ ác tính cao:</strong> Tổn thương xâm lấn ra ngoài thành hoặc nghi ngờ u ác tính rõ <span class="text-rose-600 font-bold">[c]</span>
          </div>
          <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <strong>4. Bệnh lý nền kèm theo:</strong> Tiền sử viêm xơ đường mật tiên phát (PSC) <span class="text-rose-600 font-bold">[d]</span>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs">
          <div class="flex items-center gap-2 text-rose-700 font-medium">
            <span class="px-2 py-0.5 rounded bg-rose-100 font-bold">CÓ (YES)</span>
            <span>Không áp dụng thuật toán SRU &rarr; Chuyển xử trí theo hướng dẫn chuyên biệt</span>
          </div>
          <div class="flex items-center gap-2 text-emerald-700 font-medium">
            <span class="px-2 py-0.5 rounded bg-emerald-100 font-bold">KHÔNG (NO)</span>
            <span>Áp dụng Thuật toán Quản lý SRU</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>

      <!-- Bước 2: Xác định hình thái học -->
      <div class="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center max-w-xl mx-auto shadow-2xs">
        <span class="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-0.5">Bước then chốt</span>
        <h4 class="text-base font-bold text-slate-900">XÁC ĐỊNH HÌNH THÁI HỌC CỦA POLYP (POLYP MORPHOLOGY)</h4>
        <p class="text-xs text-amber-800 font-medium mt-1">
          * Nguyên tắc thận trọng: Nếu có sự phân vân giữa các nhóm, luôn xếp vào nhóm NGUY CƠ THẤP!
        </p>
      </div>

      <div class="flex justify-center">
        <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>

      <!-- 3 CỘT NGUY CƠ VÀ XỬ TRÍ THEO KÍCH THƯỚC -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- CỘT 1: NGUY CƠ CỰC KỲ THẤP -->
        <div class="rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="p-2.5 rounded-xl bg-emerald-600 text-white text-center mb-3">
              <h5 class="text-sm font-bold uppercase tracking-wider">Nguy cơ Cực kỳ Thấp</h5>
              <span class="text-xs opacity-90">(Extremely Low Risk)</span>
            </div>
            <div class="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 mb-4 space-y-1">
              <span class="font-bold text-emerald-900 block text-xs uppercase">Đặc điểm hình thái:</span>
              <p>• Có cuống, dạng <strong>"quả bóng đính trên thành"</strong> (ball-on-the-wall)</p>
              <p>• HOẶC Có cuống với <strong>cuống mỏng mảnh</strong> (thin stalk)</p>
              <p class="text-[11px] text-slate-500 italic mt-1">&rarr; Đa phần là polyp cholesterol lành tính</p>
            </div>
            <div class="space-y-2 text-xs">
              <span class="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">Xử trí theo kích thước:</span>
              
              <div class="p-2.5 rounded-lg bg-white border border-slate-200">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-slate-900">&le; 9 mm</span>
                  <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">KHÔNG CẦN THEO DÕI</span>
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-white border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">10 – 14 mm</span>
                  <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Theo dõi SA</span>
                </div>
                <p class="text-[11px] text-slate-600">
                  Siêu âm vào các tháng thứ <strong>6, 12 và 24</strong> <span class="text-rose-600 font-bold">[e, f]</span> (có thể cân nhắc hội chẩn Ngoại tùy yếu tố người bệnh).
                </p>
              </div>

              <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-300">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-rose-950">&ge; 15 mm</span>
                  <span class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold">HỘI CHẨN PHẪU THUẬT</span>
                </div>
                <p class="text-[11px] text-rose-800 mt-1">Chỉ định cắt túi mật phòng ngừa ác tính</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CỘT 2: NGUY CƠ THẤP -->
        <div class="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="p-2.5 rounded-xl bg-amber-500 text-white text-center mb-3">
              <h5 class="text-sm font-bold uppercase tracking-wider">Nguy cơ Thấp</h5>
              <span class="text-xs opacity-90">(Low Risk)</span>
            </div>
            <div class="p-3 rounded-xl bg-white border border-amber-200 text-xs text-slate-700 mb-4 space-y-1">
              <span class="font-bold text-amber-900 block text-xs uppercase">Đặc điểm hình thái:</span>
              <p>• Có cuống với <strong>cuống dày hoặc cuống rộng</strong> (thick/wide stalk)</p>
              <p>• HOẶC Dạng <strong>không cuống / chân rộng</strong> (sessile polyp)</p>
              <p class="text-[11px] text-slate-500 italic mt-1">&rarr; Thường là polyp cơ sợi, u tuyến hoặc giả u</p>
            </div>
            <div class="space-y-2 text-xs">
              <span class="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">Xử trí theo kích thước:</span>
              
              <div class="p-2.5 rounded-lg bg-white border border-slate-200">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-slate-900">&le; 6 mm</span>
                  <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">KHÔNG CẦN THEO DÕI</span>
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-white border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">7 – 9 mm</span>
                  <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Theo dõi SA</span>
                </div>
                <p class="text-[11px] text-slate-600">
                  Siêu âm kiểm tra lại 1 lần duy nhất vào <strong>tháng thứ 12</strong> <span class="text-rose-600 font-bold">[e]</span>.
                </p>
              </div>

              <div class="p-2.5 rounded-lg bg-white border border-slate-200">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">10 – 14 mm</span>
                  <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">SA hoặc Mổ</span>
                </div>
                <p class="text-[11px] text-slate-600">
                  Siêu âm vào các tháng thứ <strong>6, 12, 24, 36</strong> <span class="text-rose-600 font-bold">[e]</span> HOẶC Hội chẩn phẫu thuật cắt túi mật.
                </p>
              </div>

              <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-300">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-rose-950">&ge; 15 mm</span>
                  <span class="px-2 py-0.5 rounded bg-rose-600 text-white font-bold">HỘI CHẨN PHẪU THUẬT</span>
                </div>
                <p class="text-[11px] text-rose-800 mt-1">Chỉ định cắt túi mật phòng ngừa ác tính</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CỘT 3: NGUY CƠ KHÔNG XÁC ĐỊNH -->
        <div class="rounded-2xl border-2 border-rose-400 bg-rose-50/70 p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="p-2.5 rounded-xl bg-rose-600 text-white text-center mb-3">
              <h5 class="text-sm font-bold uppercase tracking-wider">Nguy cơ Không Xác định</h5>
              <span class="text-xs opacity-90">(Indeterminate Risk)</span>
            </div>
            <div class="p-3 rounded-xl bg-white border border-rose-200 text-xs text-slate-700 mb-4 space-y-1">
              <span class="font-bold text-rose-900 block text-xs uppercase">Đặc điểm kèm theo:</span>
              <p>• <strong>Dày khu trú thành túi mật &ge; 4 mm</strong> nằm ngay tiếp giáp cạnh polyp</p>
              <p class="text-[11px] text-rose-700 font-semibold mt-1">&rarr; Nguy cơ ung thư biểu mô hoặc u xâm lấn cao hơn rõ rệt!</p>
            </div>
            <div class="space-y-2 text-xs">
              <span class="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">Xử trí theo kích thước:</span>
              
              <div class="p-2.5 rounded-lg bg-white border border-rose-200">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-bold text-slate-900">&le; 6 mm</span>
                  <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">SA hoặc Mổ</span>
                </div>
                <p class="text-[11px] text-slate-600">
                  Siêu âm vào các tháng thứ <strong>6, 12, 24, 36</strong> <span class="text-rose-600 font-bold">[e]</span> HOẶC Hội chẩn phẫu thuật cắt túi mật.
                </p>
              </div>

              <div class="p-3 rounded-lg bg-rose-100/80 border-2 border-rose-500 mt-3">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-rose-950 text-sm">&ge; 7 mm</span>
                  <span class="px-2 py-0.5 rounded bg-rose-700 text-white font-bold">PHẪU THUẬT NGAY</span>
                </div>
                <p class="text-[11px] text-rose-900 font-medium mt-1.5 leading-snug">
                  Hội chẩn phẫu thuật cắt túi mật (ngưỡng mổ hạ xuống 7 mm do nguy cơ tân sinh cao khi có dày thành tiếp giáp).
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Ghi chú nguyên tắc thay đổi kích thước [e] -->
      <div class="p-4 rounded-xl bg-amber-100/70 border border-amber-300 text-xs text-amber-950 mt-4 leading-relaxed">
        <strong>Quy tắc biến thiên kích thước khi theo dõi siêu âm [e]:</strong>
        <ul class="list-disc pl-5 mt-1 space-y-1">
          <li>Nếu kích thước polyp <strong>tăng từ 4 mm trở lên trong vòng 12 tháng</strong> (hoặc khoảng thời gian ngắn hơn) &rarr; Khuyến cáo hội chẩn phẫu thuật cắt túi mật.</li>
          <li>Nếu polyp đạt đến ngưỡng kích thước can thiệp ngoại khoa của nhóm nguy cơ tương ứng &rarr; Khuyến cáo hội chẩn phẫu thuật cắt túi mật.</li>
          <li>Nếu polyp <strong>giảm kích thước từ 4 mm trở lên</strong> &rarr; <strong>NGỪNG THEO DÕI</strong> (khẳng định bản chất lành tính/giả u).</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    Những điểm thay đổi cốt lõi so với các hướng dẫn thực hành trước đây
  </h3>

  <p class="leading-relaxed text-slate-800 mb-4">
    So với các hướng dẫn thực hành đã được thiết lập trước đây, các cập nhật chính trong thuật toán mới này bao gồm:
  </p>

  <ol class="list-decimal pl-6 space-y-2 text-slate-800 mb-6">
    <li><strong>Phân tầng nguy cơ dựa trên hình thái học (Risk stratification based on morphology):</strong> Thay vì chỉ dựa đơn thuần vào kích thước, hình thái cuống (mỏng, dày, không cuống) và tình trạng thành túi mật tiếp giáp là yếu tố định hướng hàng đầu.</li>
    <li><strong>Rút ngắn thời gian theo dõi tối đa xuống 3 năm:</strong> Trước đây khuyến cáo theo dõi kéo dài tới 5 năm.</li>
    <li><strong>Tăng ngưỡng tốc độ phát triển lên 4 mm/năm:</strong> Trước đây ngưỡng 2 mm/năm đã chuyển mổ, gây ra nhiều chỉ định can thiệp quá mức.</li>
    <li><strong>Tăng ngưỡng kích thước chỉ định phẫu thuật cắt bỏ lên 15 mm:</strong> Trước đây là 10 mm cho tất cả các polyp. Ngưỡng 15 mm áp dụng cho các polyp có hình thái nguy cơ thấp và cực thấp.</li>
    <li><strong>Hạ ngưỡng kích thước phẫu thuật xuống 7 mm cho nhóm nguy cơ không xác định:</strong> Đối với các polyp có kèm dày thành túi mật khu trú &ge; 4 mm tiếp giáp, nguy cơ ác tính tăng cao nên ngưỡng mổ được hạ từ 10 mm xuống còn 7 mm.</li>
    <li><strong>Cá thể hóa xử trí cho polyp 10–14 mm:</strong> Việc hội chẩn phẫu thuật có thể được cân nhắc tùy thuộc vào các yếu tố nguy cơ của bệnh nhân (tuổi tác, triệu chứng sỏi mật đi kèm, tiền sử gia đình) hoặc khi tốc độ phát triển đạt ngưỡng trong quá trình theo dõi.</li>
  </ol>

  <!-- SO SÁNH HƯỚNG DẪN CHÂU ÂU (EUROPEAN GUIDELINES) -->
  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    7. Đối chiếu với các Hướng dẫn Đồng thuận của Châu Âu (European Guidelines)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Các hướng dẫn của Châu Âu cũng mới được cập nhật gần đây (10 – Bản hướng dẫn đồng thuận chung giữa Hội Chẩn đoán Hình ảnh Tiêu hóa Bụng Châu Âu [ESGAR], Hội Phẫu thuật Nội soi Châu Âu [EAES], Hội Phẫu thuật Tiêu hóa Châu Âu [EFISDS] và Hội Nội soi Tiêu hóa Châu Âu [ESGE]).
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Mặc dù một số chi tiết cụ thể giữa hướng dẫn của SRU (Bắc Mỹ) và hướng dẫn của Châu Âu có sự khác biệt (ví dụ: hướng dẫn Châu Âu phân định yếu tố nguy cơ người bệnh gồm tuổi &ge; 60, tiền sử PSC, dày thành túi mật &ge; 4 mm; và chỉ định cắt túi mật ở ngưỡng &ge; 10 mm, hoặc 6–9 mm nếu có yếu tố nguy cơ người bệnh), tuy nhiên <strong>cả hai nhóm đồng thuận chuyên gia đều đã thực hiện những thay đổi bước ngoặt hướng tới việc phân tầng nguy cơ sắc thái và tinh tế hơn cho polyp túi mật</strong>.
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Mục tiêu bao trùm của cả hai hệ thống hướng dẫn là cùng khuyến cáo theo dõi dài hạn và phẫu thuật cắt túi mật cho <strong>ít bệnh nhân hơn đáng kể</strong> so với trước đây, hạn chế tối đa các ca phẫu thuật không cần thiết đối với tổn thương lành tính.
  </p>

  <!-- BẢNG ĐỐI CHIẾU MATRIX 3 BÊN -->
  <div class="not-prose my-8 overflow-x-auto">
    <table class="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden shadow-xs">
      <thead>
        <tr class="bg-slate-900 text-white">
          <th class="p-3.5 border-b border-slate-800 font-bold">Tiêu chí So sánh</th>
          <th class="p-3.5 border-b border-slate-800 font-bold bg-slate-800 text-slate-300">Hướng dẫn Cũ (Trước 2022)</th>
          <th class="p-3.5 border-b border-slate-800 font-bold bg-blue-900 text-blue-100">Đồng thuận SRU Mới (2022/2023)</th>
          <th class="p-3.5 border-b border-slate-800 font-bold bg-emerald-900 text-emerald-100">Đồng thuận Châu Âu ESGAR (2022)</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white text-slate-800">
        <tr class="hover:bg-slate-50">
          <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Phân tầng ban đầu</td>
          <td class="p-3.5 text-slate-600">Dựa chủ yếu vào kích thước (6–10 mm vs &gt; 10 mm)</td>
          <td class="p-3.5 font-semibold text-blue-950 bg-blue-50/40">Dựa vào Hình thái học (3 nhóm nguy cơ: Cực thấp, Thấp, Không xác định)</td>
          <td class="p-3.5 text-emerald-950 bg-emerald-50/40">Dựa vào Kích thước kết hợp Yếu tố nguy cơ người bệnh (Tuổi &ge; 60, PSC, Dày thành)</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Ngưỡng mổ cắt túi mật</td>
          <td class="p-3.5 text-rose-700 font-semibold">&gt; 10 mm cho tất cả polyp</td>
          <td class="p-3.5 font-bold text-blue-950 bg-blue-50/40">
            &ge; 15 mm (nguy cơ thấp/cực thấp)<br/>
            &ge; 7 mm (khi có dày thành tiếp giáp)
          </td>
          <td class="p-3.5 font-semibold text-emerald-950 bg-emerald-50/40">
            &ge; 10 mm (tất cả)<br/>
            6–9 mm (nếu có yếu tố nguy cơ)
          </td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Tốc độ phát triển ngưỡng</td>
          <td class="p-3.5 text-slate-600">&ge; 2 mm/năm &rarr; Chuyển phẫu thuật</td>
          <td class="p-3.5 font-bold text-blue-950 bg-blue-50/40">&ge; 4 mm/năm (hoặc &lt; 12 tháng) &rarr; Chuyển phẫu thuật</td>
          <td class="p-3.5 text-emerald-950 bg-emerald-50/40">Tăng &ge; 2 mm trong quá trình theo dõi &rarr; Cân nhắc mổ</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Thời gian theo dõi tối đa</td>
          <td class="p-3.5 text-slate-600">Lên tới 5 năm</td>
          <td class="p-3.5 font-bold text-blue-950 bg-blue-50/40">Tối đa 3 năm (Nguy cơ phát hiện sau 4 năm gần bằng 0%)</td>
          <td class="p-3.5 text-emerald-950 bg-emerald-50/40">Lên tới 5 năm nếu ổn định</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Polyp giảm kích thước</td>
          <td class="p-3.5 text-slate-600">Không có quy định rõ</td>
          <td class="p-3.5 font-bold text-emerald-700 bg-blue-50/40">Giảm &ge; 4 mm &rarr; NGỪNG THEO DÕI HOÀN TOÀN</td>
          <td class="p-3.5 text-slate-600 bg-emerald-50/40">Tiếp tục theo dõi theo lịch trình</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- KHUNG CẠM BẪY LÂM SÀNG & MẸO PHÂN BIỆT HÌNH THÁI (PEARLS & PITFALLS) -->
  <div class="not-prose my-8 p-6 rounded-2xl bg-amber-50/90 border border-amber-300 shadow-xs">
    <div class="flex items-center gap-2.5 mb-3 text-amber-900 font-bold text-base">
      <svg class="w-5 h-5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
      <span>CẠM BẪY HÌNH ẢNH HỌC & MẸO CHẨN ĐOÁN PHÂN BIỆT TRÊN SIÊU ÂM (PEARLS & PITFALLS)</span>
    </div>
    <div class="space-y-3 text-xs sm:text-sm text-amber-950/90 leading-relaxed">
      <div>
        <strong class="text-amber-900">1. Phân biệt Polyp thật vs Cặn bùn dạng u (Tumefactive Sludge):</strong>
        <p class="mt-0.5">
          Cặn bùn mật vón cục có thể tạo hình khối dính vào thành túi mật mô phỏng polyp hoặc u sùi. Hãy <strong>thay đổi tư thế người bệnh</strong> (nằm nghiêng trái, đứng hoặc nằm sấp) để kiểm tra tính di động theo trọng lực, hoặc bật <strong>Doppler năng lượng / Doppler màu</strong> để tìm cuống mạch. Cặn bùn mật hoàn toàn vô mạch, trong khi polyp thật có cuống mạch nuôi ở gốc. Nếu vẫn nghi ngờ &gt; 10 mm, hãy xếp vào nhóm loại trừ và hẹn siêu âm lại sau 1–2 tháng hoặc chụp CEUS / MRI.
        </p>
      </div>
      <div>
        <strong class="text-amber-900">2. Nhận diện U cơ tuyến túi mật (Adenomyomatosis):</strong>
        <p class="mt-0.5">
          Tổn thương u cơ tuyến có đặc trưng là sự tăng sinh lớp cơ niêm kèm các hốc xoang Rokitansky-Aschoff giãn rộng. Dấu hiệu kinh điển là <strong>ảnh giả đuôi sao chổi (comet-tail artifact)</strong> do tinh thể cholesterol nằm trong xoang và dày thành dạng hạt/vòng nhẫn. Cần tránh nhầm lẫn u cơ tuyến khu trú đáy túi mật với polyp chân rộng hoặc ung thư.
        </p>
      </div>
      <div>
        <strong class="text-amber-900">3. Cẩn trọng tối đa với dấu hiệu "Dày thành tiếp giáp polyp" (Wall Thickening):</strong>
        <p class="mt-0.5">
          Đa số ung thư túi mật khởi phát dưới dạng dày khu trú thành túi mật chứ không phải là polyp có cuống thanh mảnh. Khi thấy một polyp có phần thành túi mật ngay chân bám hoặc tiếp giáp xung quanh dày từ <strong>&ge; 4 mm</strong>, đây là dấu hiệu báo động nguy cơ ác tính cao. Thuật toán SRU hạ ngay ngưỡng chỉ định mổ xuống <strong>&ge; 7 mm</strong> trong tình huống này.
        </p>
      </div>
      <div>
        <strong class="text-amber-900">4. Không được bỏ qua bệnh nhân Viêm xơ đường mật tiên phát (PSC):</strong>
        <p class="mt-0.5">
          Ở bệnh nhân PSC, bất kỳ tổn thương polyp túi mật nào – bất kể kích thước nhỏ ra sao – đều mang nguy cơ chuyển dạng ung thư biểu mô tuyến hoặc ung thư biểu mô đường mật cực cao. Thuật toán SRU loại trừ nhóm bệnh nhân này để chuyển sang quản lý tích cực theo chuyên khoa Tiêu hóa (thường chỉ định cắt túi mật ở ngưỡng kích thước nhỏ hơn rất nhiều, thậm chí &ge; 8 mm hoặc mọi polyp có triệu chứng).
        </p>
      </div>
    </div>
  </div>

  <!-- KẾT LUẬN -->
  <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mt-10 mb-4">
    8. Kết luận (Conclusion)
  </h2>

  <p class="leading-relaxed text-slate-800 mb-4">
    Đánh giá hình ảnh học đối với các tổn thương dạng polyp túi mật vẫn là một tình huống lâm sàng vô cùng phổ biến và đôi khi đầy thách thức trong thực hành hàng ngày, do có thể có sự chồng lấp hình ảnh đáng kể giữa tổn thương tân sinh và không tân sinh. 
  </p>

  <p class="leading-relaxed text-slate-800 mb-4">
    Kể từ bài báo trước đây của chúng tôi, bằng chứng khoa học ngày càng củng cố vững chắc cho thấy diễn tiến lành tính ở phần lớn các polyp túi mật. Các khuyến cáo theo dõi và quản lý cập nhật từ Hội các Bác sĩ Siêu âm Chẩn đoán Hình ảnh Hoa Kỳ (SRU) gần đây đã được công bố phản ánh chính xác những xu hướng thực chứng này.
  </p>

  <p class="leading-relaxed text-slate-800 mb-6">
    Các điểm nhấn then chốt bao gồm:
  </p>
  <ul class="list-disc pl-6 space-y-2 text-slate-800 mb-8">
    <li>Phân tầng nguy cơ mới của polyp dựa trên hình thái học (Morphology-based risk stratification).</li>
    <li>Các khuyến cáo theo dõi và quản lý dựa trên kích thước trong từng nhóm nguy cơ cụ thể.</li>
    <li>Rút ngắn thời gian theo dõi dọc với mức tối đa là 3 năm.</li>
    <li>Tăng ngưỡng kích thước chỉ định phẫu thuật cắt túi mật lên 15 mm cho các polyp có cuống nguy cơ thấp và cực thấp.</li>
    <li>Hạ ngưỡng phẫu thuật xuống 7 mm khi phát hiện có dày khu trú thành túi mật tiếp giáp polyp.</li>
  </ul>

  <!-- THÔNG TIN TÁC GIẢ & TÀI LIỆU THAM KHẢO -->
  <div class="not-prose my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
    <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Thông tin Tác giả & Cam kết lợi ích</h4>
    <p class="mb-3">
      <strong>Đơn vị công tác của tác giả:</strong> Viện Chẩn đoán Hình ảnh Mallinckrodt (Mallinckrodt Institute of Radiology), Trường Y Đại học Washington, 510 S Kingshighway Blvd, St Louis, MO 63110, Hoa Kỳ.<br/>
      <strong>Tác giả liên hệ:</strong> K.S.K. (email: <span class="text-blue-600">konstantinoffk@wusm.wustl.edu</span>).<br/>
      <strong>Công bố xung đột lợi ích:</strong> Tất cả các tác giả đều tuyên bố không có mối quan hệ lợi ích tài chính hoặc cá nhân liên quan nào.
    </p>

    <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 pt-2 border-t border-slate-200">Danh mục Tài liệu Tham khảo (References)</h4>
    <ol class="list-decimal pl-5 space-y-1.5 leading-relaxed text-[11px] sm:text-xs">
      <li>Mellnick VM, Menias CO, Sandrasegaran K, et al. Polypoid lesions of the gallbladder: disease spectrum with pathologic correlation. <em>RadioGraphics</em> 2015;35(2):387–399.</li>
      <li>Kamaya A, Fung C, Szpakowski JL, et al. Management of Incidentally Detected Gallbladder Polyps: Society of Radiologists in Ultrasound Consensus Conference Recommendations. <em>Radiology</em> 2022. 10.1148/radiol.213079. Published online July 5, 2022.</li>
      <li>Adsay V, Jang KT, Roa JC, et al. Intracholecystic papillary-tubular neoplasms (ICPN) of the gallbladder (neoplastic polyps, adenomas, and papillary neoplasms that are &ge;1.0 cm): clinicopathologic and immunohistochemical analysis of 123 cases. <em>Am J Surg Pathol</em> 2012;36(9):1279–1301.</li>
      <li>Szpakowski JL, Tucker LY. Outcomes of Gallbladder Polyps and Their Association with Gallbladder Cancer in a 20-Year Cohort. <em>JAMA Netw Open</em> 2020;3(5):e205143.</li>
      <li>Liu K, Lin N, You Y, et al. Risk factors to discriminate neoplastic polypoid lesions of gallbladder: a large-scale case-series study. <em>Asian J Surg</em> 2021;44(12):1515–1519.</li>
      <li>Middleton WD, Fung C, Dahiya N, et al. Survey Study on the Experience, Practice Patterns, and Preferences of the Fellows of the Society of Radiologists in Ultrasound for Evaluation and Management of Gallbladder Polyps Detected With Ultrasound. <em>Ultrasound Q</em> 2022;38(2):96–102.</li>
      <li>Walsh AJ, Bingham DB, Kamaya A. Longitudinal Ultrasound Assessment of Changes in Size and Number of Incidentally Detected Gallbladder Polyps. <em>AJR Am J Roentgenol</em> 2022;218(3):472–483.</li>
      <li>Wennmacker SZ, de Savornin Lohman EAJ, Hasami NA, et al. Overtreatment of Nonneoplastic Gallbladder Polyps Due to Inadequate Routine Ultrasound Assessment. <em>Dig Surg</em> 2020;38(1):73–79.</li>
      <li>Taskin OC, Bellolio E, Dursun N, et al. Non-neoplastic Polyps of the Gallbladder: a Clinicopathologic Analysis of 447 Cases. <em>Am J Surg Pathol</em> 2020;44(4):467–476.</li>
      <li>Foley KG, Lahaye MJ, Thoeni RF, et al. Management and follow-up of gallbladder polyps: updated joint guidelines between the ESGAR, EAES, EFISDS and ESGE. <em>Eur Radiol</em> 2022;32(5):3358–3368.</li>
    </ol>
  </div>

</div>`,
    views: 1280,
    readTime: "15 phút đọc",
    source: "RadioGraphics 2023; 43(3):e220189 (Mallinckrodt Institute of Radiology, Washington University School of Medicine)",
    tags: ["Polyp túi mật", "Gallbladder Polyps", "Siêu âm túi mật", "Đồng thuận SRU", "SRU Guidelines", "Ung thư túi mật", "Cắt túi mật", "Polyp cholesterol", "U cơ tuyến túi mật", "Adenomyomatosis", "Dày thành túi mật", "RadioGraphics Update"]
  },
];
