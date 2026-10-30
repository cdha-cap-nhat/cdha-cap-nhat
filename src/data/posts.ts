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
      <div class="overflow-x-auto my-6">
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
        <h4 class="font-bold text-blue-900 mb-1">Key Points (Điểm cốt lõi cần nhớ):</h4>
        <ul>
          <li><strong>Định nghĩa khối 3D trên DBT:</strong> Khối có thể được xác lập chỉ trên một hướng chụp duy nhất của DBT nếu hướng kia bị mô sợi tuyến che khuất hoặc khối nằm ngoài trường chụp.</li>
          <li><strong>Bổ sung hình thái Lobulated:</strong> BI-RADS 2025 chính thức công nhận hình thái Đa cung (Lobulated) để phân biệt các tổn thương có bờ gợn sóng có mức độ nghi ngờ nhỉnh hơn so với hình bầu dục.</li>
          <li><strong>Xóa bỏ thuật ngữ Microlobulated ở đường bờ:</strong> Khối có đa cung nhỏ nay được quy về bờ không rõ nét (Indistinct) hoặc hình thái đa cung (Lobulated) tùy theo tính chất sắc nét của ranh giới.</li>
          <li><strong>Quy tắc ưu tiên mức độ nghi ngờ cao nhất:</strong> Nếu một khối có bờ rõ nét ở đa số chu vi nhưng có một điểm nghi ngờ bờ tua gai hoặc bờ không rõ, tổn thương bắt buộc phải được đánh giá dựa trên thành phần tua gai/không rõ đó.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-1">Diagnostic Pitfalls (Cạm bẫy lâm sàng cần tránh):</h4>
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
      <div class="overflow-x-auto">
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
        <h4 class="font-bold text-blue-900 mb-1">Key Points (Điểm cốt lõi):</h4>
        <ul>
          <li>Xáo trộn cấu trúc trên DBT có PPV thấp hơn DM nhưng vẫn đạt mức dự báo ác tính trung bình (10–30%) và bắt buộc phải sinh thiết mô học nếu không có sẹo mổ cũ.</li>
          <li>Đừng bao giờ từ bỏ sinh thiết một xáo trộn cấu trúc chỉ vì siêu âm tuyến vú trả về kết quả âm tính (no ultrasound correlate). Cần chuyển sang sinh thiết dưới hướng dẫn của nhũ ảnh hoặc DBT (stereotactic/tomosynthesis-guided biopsy).</li>
          <li>BI-RADS® v2025 đã xóa bỏ thuật ngữ "Developing Asymmetry" để chuẩn hóa phân loại hình thái. Bất kỳ bất đối xứng khu trú nào to lên hoặc tăng đậm độ đều là chỉ dấu nguy cơ cao cần chụp chẩn đoán toàn diện.</li>
          <li>Nhũ ảnh 3D (DBT) là công cụ then chốt giúp phân biệt tổn thương thực thể với các cấu trúc giả xáo trộn cấu trúc (pseudo-distortion) do chồng lấp mô.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-1">Diagnostic Pitfalls (Cạm bẫy lâm sàng):</h4>
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
      <h2 id="phan-1-tong-quan">1. Tổng quan & Tiếp cận phân tích vôi hóa theo BI-RADS® v2025</h2>
      <p>
        Trong chẩn đoán hình ảnh tuyến vú, <strong>vôi hóa (calcifications)</strong> là một trong những dấu hiệu nhũ ảnh then chốt và kinh điển nhất. Không giống như các khối u (masses) hay xáo trộn cấu trúc (architectural distortion) thường biểu hiện khi bệnh lý đã tiến triển, vi vôi hóa là phát hiện duy nhất giúp phát hiện sớm ung thư biểu mô tuyến vú tại chỗ (<strong>Ductal Carcinoma In Situ - DCIS</strong>) và các ung thư xâm nhập ở giai đoạn tiền lâm sàng (chưa sờ thấy khối u).
      </p>

      <div class="note-box">
        <h4 class="font-bold text-amber-900 mb-1">Mục tiêu lâm sàng cốt lõi của đánh giá vôi hóa:</h4>
        <p class="mb-0 text-amber-800">
          Phân biệt chính xác giữa các vôi hóa biểu hiện bệnh lý thoái hóa lành tính thông thường (để tránh can thiệp sinh thiết không cần thiết) với các vi vôi hóa có hình thái và phân bố gợi ý lắng đọng calci hoại tử trong lòng ống dẫn sữa bị ung thư xâm lấn (cần chỉ định sinh thiết mô học kịp thời).
        </p>
      </div>

      <h3 id="phan-1-chien-luoc-tiep-can">Chiến lược tiếp cận ma trận hai bước: Hình thái × Phân bố</h3>
      <p>
        Hệ thống ACR BI-RADS® luôn nhấn mạnh rằng để đánh giá chính xác nguy cơ ác tính của một tổn thương vôi hóa, bác sĩ chẩn đoán hình ảnh không được đánh giá rời rạc mà phải kết hợp chặt chẽ giữa hai trục mô tả:
      </p>
      <ol>
        <li>
          <strong>Hình thái học (Morphology):</strong> Phản ánh cơ chế sinh bệnh học và vị trí lắng đọng calci (trong lòng ống tuyến, nang tuyến, mô đệm hay thành mạch). Hình thái được chia thành hai nhóm lớn: <em>Thường lành tính (Typically Benign)</em> và <em>Có hình thái nghi ngờ (Suspicious Morphology)</em>.
        </li>
        <li>
          <strong>Cách thức phân bố (Distribution):</strong> Phản ánh mức độ lan rộng và con đường giải phẫu của tổn thương (lan tỏa ngẫu nhiên, tụ cụm khu trú, chạy dọc ống tuyến hay theo toàn bộ một phân thùy giải phẫu).
        </li>
      </ol>

      <div class="important-box">
        <h4 class="font-bold text-rose-900 mb-1">Nguyên tắc vàng về mức độ nghi ngờ (Highest Suspicion Principle):</h4>
        <p class="mb-0 text-rose-800">
          Khi một tổn thương vôi hóa chứa nhiều hình thái khác nhau trong cùng một vùng (ví dụ vừa có vôi hóa tròn lành tính, vừa có vài hạt vi vôi hóa đa hình thái mịn hoặc dạng đường mảnh), <strong>việc mô tả hình thái tổng thể, phân loại BI-RADS và chỉ định sinh thiết LUÔN LUÔN phải căn cứ vào hình thái có mức độ nghi ngờ cao nhất</strong>. Không bao giờ được hạ mức nghi ngờ dựa trên số lượng áp đảo của các hạt vôi hóa lành tính đi kèm.
        </p>
      </div>

      <h3 id="phan-1-thay-doi-buoc-ngoat">Các thay đổi mang tính bước ngoặt trong ACR BI-RADS® v2025</h3>
      <p>
        Phiên bản <strong>ACR BI-RADS® v2025 (Manual ấn bản mới nhất)</strong> đã tiến hành chuẩn hóa toàn diện danh pháp mô tả vôi hóa nhằm loại bỏ các thuật ngữ dựa trên cơ chế giả định hoặc khó định lượng vi thể, chuyển dịch hoàn toàn sang các thuật ngữ mô tả khách quan dựa trên hình thái học thực nghiệm:
      </p>

      <div class="overflow-x-auto my-6">
        <table class="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <thead class="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider">
            <tr>
              <th class="py-3 px-4 border-b text-left">Thuật ngữ trước đây (BI-RADS 5th)</th>
              <th class="py-3 px-4 border-b text-left">Thuật ngữ mới (BI-RADS® v2025)</th>
              <th class="py-3 px-4 border-b text-left">Lý do & Ý nghĩa cập nhật</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-rose-700">Dạng bắp rang (Popcorn-like)</td>
              <td class="py-2.5 px-4 font-bold text-emerald-700">Vôi hóa thô (Coarse)</td>
              <td class="py-2.5 px-4 text-slate-600">Bãi bỏ hoàn toàn thuật ngữ tượng hình "popcorn-like". Thống nhất gọi là vôi hóa thô do bản chất kích thước lớn và bờ nhẵn láng.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-rose-700">Loạn dưỡng (Dystrophic)</td>
              <td class="py-2.5 px-4 font-bold text-emerald-700">Sáp nhập vào Vôi hóa thô (Coarse)</td>
              <td class="py-2.5 px-4 text-slate-600">Loại bỏ thuật ngữ "Dystrophic" như một phân loại độc lập; sáp nhập hoàn toàn vào nhóm Coarse do có cùng hình thái thô to, bờ ngoài nhẵn và bản chất lành tính sau phẫu thuật/xạ trị/chấn thương.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-rose-700">Dạng chấm (Punctate)</td>
              <td class="py-2.5 px-4 font-bold text-emerald-700">Sáp nhập vào Vôi hóa tròn (Round)</td>
              <td class="py-2.5 px-4 text-slate-600">Loại bỏ thuật ngữ "Punctate" (trước đây phân biệt cơ học &lt; 0.5 mm) vì không thực tế và bất khả thi khi đo lường kích thước vi thể của từng hạt vôi hóa riêng lẻ. Nay tất cả đều quy về vôi hóa tròn.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-rose-700">Sữa calci (Milk of calcium)</td>
              <td class="py-2.5 px-4 font-bold text-emerald-700">Vôi hóa lắng lớp (Layering)</td>
              <td class="py-2.5 px-4 text-slate-600">Thay thế bằng thuật ngữ khách quan mô tả hiện tượng hình học "Layering" thay vì suy đoán thành phần hóa học sinh lý. Đặc trưng bởi sự thay đổi hình thái theo góc tia X (mờ nhạt trên CC, ngấn mức dịch nằm ngang/bán nguyệt trên 90° Lateral).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="phan-2-voi-hoa-lanh-tinh">2. Vôi hóa thường lành tính (Typically Benign) – 8 nhóm hình thái</h2>
      <p>
        Các vôi hóa thuộc nhóm "Thường lành tính" có đặc điểm hình thái và đường bờ rất đặc trưng, phản ánh các quá trình thoái hóa mô hạt, xơ hóa thành mạch, hoại tử mỡ hay chất bã trong nang. Khi các vôi hóa này mang hình thái điển hình, chúng được xếp vào <strong>BI-RADS 2</strong> mà không cần thêm bất kỳ thăm dò xâm lấn nào.
      </p>

      <h3 id="phan-2-1-voi-hoa-da">2.1 Vôi hóa da (Skin Calcifications)</h3>
      <p>
        Vôi hóa da thường nằm trong các tuyến bã hoặc chân lông biểu bì. Đặc điểm kinh điển là các nốt vôi hóa có <strong>tâm thấu quang (lucent-centered)</strong>, kích thước nhỏ (&lt; 5 mm), bờ tròn hoặc đa giác đều đặn, thường tập trung thành cụm nhỏ.
      </p>
      <p>
        Vị trí xuất hiện phổ biến nhất là dọc <em>nếp lằn dưới vú (inframammary fold)</em>, vùng cạnh xương ức, vùng nách chồng lên mô vú, và xung quanh quầng vú. Nếu vi vôi hóa có vẻ nghi ngờ nhưng nằm sát bề mặt da, bác sĩ cần chỉ định <strong>thế chụp tiếp tuyến (tangential view)</strong> kèm gắn marker định vị ngoài da để chứng minh vôi hóa nằm hoàn toàn trong lớp bì.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_01_skin_lucent.jpg" alt="Figure 1 – SKIN calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA DA (DM).</strong> Hiện diện một vài nốt vôi hóa có tâm thấu quang (mũi tên), điển hình của vôi hóa biểu bì/trung bì tại nếp lằn dưới vú.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_02_skin_tangential.jpg" alt="Figure 4 – Grouped SKIN calcifications (CC SM vs Tangential view)" />
        <figcaption><strong>Figure 4 – VÔI HÓA DA (A: CC SM; B: Thế tiếp tuyến).</strong> (A) Các vôi hóa này tụ thành cụm nhưng không có hình thái tâm thấu quang kinh điển. (B) Trên thế chụp tiếp tuyến (tangential view), các vôi hóa được chứng minh nằm hoàn toàn trong bề dày của lớp da (mũi tên), xác nhận bản chất lành tính tuyệt đối.</figcaption>
      </figure>

      <h3 id="phan-2-2-voi-hoa-mach-mau">2.2 Vôi hóa mạch máu (Vascular Calcifications)</h3>
      <p>
        Vôi hóa mạch máu là sự lắng đọng calci ở lớp áo giữa của động mạch tuyến vú (xơ cứng động mạch Mönckeberg). Hình ảnh kinh điển là <strong>hai đường thẳng vôi hóa song song dạng "đường ray xe lửa" (tram-track)</strong> hoặc dạng ống phân nhánh, chạy ngoằn ngoèo theo đường đi giải phẫu của mạch máu.
      </p>
      <p>
        Ở giai đoạn rất sớm khi calci mới bắt đầu lắng đọng ngắt quãng, vôi hóa mạch máu có thể chỉ biểu hiện như một vài đốm vôi hóa ngắt quãng thẳng hàng. Tuy nhiên, việc theo dõi dọc theo trục mạch máu hoặc kiểm tra trên nhũ ảnh 3D (DBT) sẽ giúp nhận diện đường đi hình ống của thành mạch.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_03_vascular_tramtrack.jpg" alt="Figure 1 – VASCULAR calcifications (SM and DBT)" />
        <figcaption><strong>Figure 1 – VÔI HÓA MẠCH MÁU (A: SM và B: DBT).</strong> Các dải vôi hóa chạy song song hình đường ray xe lửa dọc theo thành động mạch tuyến vú, là dấu hiệu lành tính kinh điển.</figcaption>
      </figure>

      <h3 id="phan-2-3-voi-hoa-tho">2.3 Vôi hóa thô (Coarse Calcifications – Đã sáp nhập Loạn dưỡng & Bãi bỏ "Bắp rang")</h3>
      <p>
        Trong ACR BI-RADS® v2025, danh mục <strong>Vôi hóa thô (Coarse)</strong> được định nghĩa là các vôi hóa kích thước lớn (thường <strong>&gt; 2–3 mm</strong> ở đường kính lớn nhất), mật độ cản quang rất cao (đậm độ calci đặc) và có xu hướng kết tụ, hợp lưu lại với nhau:
      </p>
      <ul>
        <li>
          <strong>U xơ tuyến thoái hóa vôi hóa:</strong> Trước đây thường gọi là "popcorn-like" (dạng bắp rang). Calci bắt đầu lắng đọng ở ngoại vi hoặc trung tâm khối u xơ thoái triển, sau nhiều năm sẽ hợp lưu thành một khối calci thô to, đặc quánh.
        </li>
        <li>
          <strong>Vôi hóa sau tổn thương mô (trước đây gọi là vôi hóa loạn dưỡng - dystrophic):</strong> Hình thành tại vùng mô vú từng bị xạ trị, phẫu thuật bảo tồn (lumpectomy), chấn thương hoặc nhiễm trùng. Chúng thường có kích thước lớn, đường bờ ngoài nhẵn láng, bên trong có thể kèm vùng thấu quang do hoại tử mỡ.
        </li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_04_coarse_fibroadenoma.jpg" alt="Figure 1 – Grouped COARSE calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA THÔ TỤ THÀNH CỤM (DM). (A) thế CC và (B) thế MLO.</strong> Các vôi hóa kích thước lớn, đậm độ cao đang tiến triển hợp lưu lại với nhau. Tổn thương ổn định qua nhiều năm theo dõi, tương ứng u xơ tuyến thoái triển vôi hóa.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_05_coarse_post_lumpectomy.jpg" alt="Figure 6 – COARSE calcifications post breast-conserving treatment (SM)" />
        <figcaption><strong>Figure 6 – VÔI HÓA THÔ (SM). (A) thế MLO và (B) thế CC.</strong> Bệnh nhân sau phẫu thuật bảo tồn tuyến vú và xạ trị. Các vôi hóa này trước đây được gọi là vôi hóa loạn dưỡng (dystrophic) nhưng nay trong BI-RADS® v2025 đã được gộp chung vào danh mục vôi hóa thô (coarse).</figcaption>
      </figure>

      <h3 id="phan-2-4-voi-hoa-que-lon">2.4 Vôi hóa dạng que lớn (Large Rod-Like Calcifications)</h3>
      <p>
        Vôi hóa dạng que lớn xuất hiện dưới dạng các thanh vôi hóa đặc hoặc ngắt quãng, đường bờ rất rõ nét và nhẵn nhụi, đường kính dày <strong>&gt; 0.5 mm</strong>.
      </p>
      <p>
        Tổn thương này phân bố điển hình theo mạng lưới ống dẫn sữa, hướng tâm hội tụ về phía núm vú, đôi khi có phân nhánh và thường gặp đối xứng ở cả hai bên vú ở phụ nữ trên 60 tuổi. Về mặt bệnh học, đây là hiện tượng lắng đọng calci do <em>bệnh lý tiết dịch (secretory disease)</em>, <em>viêm tuyến vú tế bào huyết tương (plasma cell mastitis)</em> hoặc <em>dãn ống tuyến sữa (duct ectasia)</em>.
      </p>
      <div class="note-box">
        <strong class="text-blue-900">Dấu hiệu phân biệt với DCIS:</strong> Vôi hóa dạng que lớn có đường kính dày (&gt; 0.5 mm), bờ nhẵn láng và đặc biệt là <strong>thon nhọn dần ở hai đầu tận (tapering at ends)</strong>, hoàn toàn trái ngược với các đường vôi hóa mỏng vụn, gãy khúc, bờ nham nhở của ung thư biểu mô tại chỗ.
      </div>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_06_large_rod_like_secretory.jpg" alt="Figure 1 – LARGE ROD-LIKE calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA DẠNG QUE LỚN (DM).</strong> Các dải vôi hóa đặc, phân bố đối xứng hai vú theo hệ thống ống tuyến hướng tâm về phía núm vú. Đường bờ nhẵn láng và thon nhọn ở hai đầu tận, khác biệt hoàn toàn với vi vôi hóa trong DCIS.</figcaption>
      </figure>

      <h3 id="phan-2-5-voi-hoa-tron">2.5 Vôi hóa tròn (Round Calcifications – Đã sáp nhập dạng Chấm / Punctate)</h3>
      <p>
        Vôi hóa tròn là các nốt vôi hóa có đường bờ nhẵn láng, hình tròn đều đặn, kích thước thường nhỏ (&lt; 1 mm). Khi có nhiều nốt, chúng có thể dao động nhẹ về kích thước và đậm độ cản quang. Chúng hình thành chủ yếu bên trong các nang nhỏ của tiểu thùy (lobular acini).
      </p>
      <div class="important-box">
        <h4 class="font-bold text-amber-900 mb-1">Cập nhật v2025: Bãi bỏ phân nhóm "Punctate" (Dạng chấm):</h4>
        <p class="mb-0 text-amber-800">
          Trong các phiên bản trước, vôi hóa tròn nhỏ &lt; 0.5 mm được gọi là "punctate". Phiên bản 2025 đã chính thức loại bỏ thuật ngữ này vì việc phân định ranh giới 0.5 mm trên hình ảnh lâm sàng vi thể là không thực tế. Tất cả hiện nay đều được gọi chung là <strong>Vôi hóa tròn (Round)</strong>.
        </p>
      </div>
      <p>
        <strong>Chiến lược quản lý vôi hóa tròn:</strong>
      </p>
      <ul>
        <li><strong>Phân bố lan tỏa hoặc nhiều cụm đối xứng hai bên vú:</strong> Xếp <strong>BI-RADS 2 (Lành tính)</strong>.</li>
        <li><strong>Một cụm vôi hóa tròn đơn độc trên nhũ ảnh lần đầu (baseline)</strong> chưa có phim cũ so sánh: Sau khi xác nhận trên các thế phóng đại, xếp <strong>BI-RADS 3 (Khả năng lành tính cao)</strong> và theo dõi định kỳ 6 tháng.</li>
        <li><strong>Một cụm vôi hóa tròn mới xuất hiện, tăng lên về số lượng</strong>, hoặc phân bố dạng đường/phân thùy: Cần chỉ định <strong>sinh thiết mô học (BI-RADS 4)</strong> vì có thể là biểu hiện của tân sinh biểu mô tiểu thùy (LCIS/ALH) hoặc ung thư biểu mô thể ống.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_07_round_acini.jpg" alt="Figure 1 – Grouped ROUND calcifications (DBT)" />
        <figcaption><strong>Figure 1 – VÔI HÓA TRÒN TỤ THÀNH CỤM (DBT).</strong> Các nốt vôi hóa nhỏ, tròn đều, hình thành trong các nang nhỏ của tiểu thùy tuyến vú. Tổn thương lành tính, ổn định qua nhiều năm theo dõi.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_08_round_specimen.jpg" alt="Figure 3 – ROUND calcifications on specimen radiograph (DM)" />
        <figcaption><strong>Figure 3 – VÔI HÓA TRÒN (X-quang bệnh phẩm sau sinh thiết lõi DM).</strong> Các vôi hóa tròn này (mũi tên) tăng lên về số lượng theo thời gian, do đó sinh thiết lõi và phẫu thuật cắt rộng sau đó được khuyến cáo. Giải phẫu bệnh: Ung thư biểu mô tiểu thùy tại chỗ thể đa hình thái (Pleomorphic LCIS).</figcaption>
      </figure>

      <h3 id="phan-2-6-voi-hoa-vien">2.6 Vôi hóa viền (Rim Calcifications / Eggshell)</h3>
      <p>
        Vôi hóa viền là các dải calci rất mỏng (bề dày <strong>&lt; 1 mm</strong> khi quan sát tiếp tuyến) lắng đọng trên bề mặt hình cầu của một cấu trúc nang hoặc bọc dịch.
      </p>
      <p>
        Hình ảnh kinh điển là <em>viền vỏ trứng (eggshell)</em> bao quanh một trung tâm thấu quang (chứa mỡ hoặc dịch nang). Nguyên nhân hàng đầu là <strong>hoại tử mỡ (fat necrosis)</strong> tạo thành nang dầu (oil cyst), hoặc calci lắng đọng trên thành các nang đơn giản cũ.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_09_rim_fat_necrosis.jpg" alt="Figure 1 – RIM calcifications (SM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA VIỀN (SM).</strong> Đi kèm một số nốt vôi hóa thô (mũi tên). Hình ảnh gợi ý tiền sử chấn thương tuyến vú và có hình thái lành tính điển hình, phù hợp với hoại tử mỡ (fat necrosis).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_10_rim_evolving.jpg" alt="Figure 6 – Evolving RIM calcifications post-surgery (DM)" />
        <figcaption><strong>Figure 6 – VÔI HÓA VIỀN ĐANG TIẾN TRIỂN (DM).</strong> Một năm sau phẫu thuật lành tính (A), các vôi hóa này gợi ý vôi hóa viền đang hình thành nhưng chưa hoàn toàn điển hình, được chỉ định theo dõi. Sáu tháng sau (B), vôi hóa đã biểu hiện rõ hình thái viền mỏng (RIM) kinh điển quanh nang dầu, ổ phẫu thuật co nhỏ lại và xuất hiện thêm vôi hóa viền lân cận. Biến đổi lành tính sau phẫu thuật.</figcaption>
      </figure>

      <h3 id="phan-2-7-voi-hoa-lang-lop">2.7 Vôi hóa lắng lớp (Layering Calcifications – Thay thế "Milk of calcium")</h3>
      <p>
        Trong ACR BI-RADS® v2025, thuật ngữ truyền thống "Milk of calcium" (Sữa calci) đã chính thức được thay thế bằng <strong>Layering (Vôi hóa lắng lớp)</strong>. Thuật ngữ mới mô tả chính xác đặc tính hình ảnh động học theo trọng lực thay vì dựa trên phỏng đoán hóa sinh.
      </p>
      <p>
        Dấu hiệu chẩn đoán mang tính quyết định là <strong>sự thay đổi hình dạng rõ rệt giữa hai tư thế chụp vuông góc</strong>:
      </p>
      <ul>
        <li><strong>Trên thế chụp sọ - đuôi (CC view - chùm tia thẳng góc từ trên xuống):</strong> Cặn calci lắng dưới đáy nang tròn biểu hiện như các đốm vôi hóa mờ nhạt, bờ nhòe, không rõ hình thù (dễ nhầm với vôi hóa vô định hình nghi ngờ).</li>
        <li><strong>Trên thế chụp nghiêng 90° (True Lateral: LM hoặc ML view - chùm tia nằm ngang song song mặt đất):</strong> Dưới tác động của trọng lực, các tinh thể calci chìm xuống phần thấp nhất của lòng nang, tạo thành hình <em>mặt trăng khuyết</em>, <em>đáy chén (tea-cupping)</em>, đường cong lõm lên trên hoặc một đường ngang sắc nét.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_11_layering_dbt_ml.jpg" alt="Figure 1 – LAYERING calcifications on DBT ML view" />
        <figcaption><strong>Figure 1 – VÔI HÓA LẮNG LỚP TRÊN THẾ NGHIÊNG ML (DBT).</strong> Calci lắng đọng ở phần thấp theo trọng lực bên trong hai khối giới hạn rõ cạnh nhau, phù hợp với các đại nang biến chứng chứa cặn lắng calci.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_12_layering_cc_vs_ml.jpg" alt="Figure 3 – LAYERING calcifications (A: CC view and B: ML view DM)" />
        <figcaption><strong>Figure 3 – VÔI HÓA LẮNG LỚP (A: thế CC và B: thế nghiêng 90° ML DM).</strong> Trên thế CC, các hạt calci xuất hiện mờ nhạt, vô định hình; ngược lại trên thế nghiêng 90° ML, calci lắng đọng thành đường cong hình mặt trăng khuyết/đáy chén (dấu hiệu tea-cupping), xác nhận chẩn đoán lành tính tuyệt đối.</figcaption>
      </figure>

      <h3 id="phan-2-8-voi-hoa-chi-khau">2.8 Vôi hóa chỉ khâu (Suture Calcifications)</h3>
      <p>
        Vôi hóa chỉ khâu là sự lắng đọng muối calci trên các sợi chỉ phẫu thuật không tiêu hoặc tiêu chậm, thường gặp tại nền sẹo mổ cũ sau phẫu thuật lành tính hoặc xạ trị ung thư vú.
      </p>
      <p>
        Hình thái đặc trưng là các dải vôi hóa dạng đường thẳng, đường cong hoặc dạng ống, và thường thấy các <strong>nút thắt chỉ (knots/loops)</strong> điển hình.
      </p>
      <div class="important-box">
        <h4 class="font-bold text-rose-900 mb-1">Cảnh giác ung thư tái phát cạnh chỉ khâu:</h4>
        <p class="mb-0 text-rose-800">
          Dù vôi hóa chỉ khâu là lành tính, luôn luôn phải quan sát tỉ mỉ mô xung quanh sẹo mổ để tìm kiếm các vi vôi hóa nghi ngờ mới xuất hiện (vô định hình, đa hình thái mịn). Ung thư biểu mô tái phát có thể phát triển ngay tại vết mổ kề cận sợi chỉ khâu.
        </p>
      </div>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_13_suture_knots.jpg" alt="Figure 1 & 2 – SUTURE calcifications (DM)" />
        <figcaption><strong>Figure 1 & 2 – VÔI HÓA CHỈ KHÂU (DM).</strong> Các dải vôi hóa hình sợi chỉ uốn lượn có các nút thắt đặc trưng trên nền vết mổ cũ.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_14_suture_mixed_suspicious.jpg" alt="Figure 5 – SUTURE calcifications with co-existing suspicious calcifications (SM)" />
        <figcaption><strong>Figure 5 – VÔI HÓA CHỈ KHÂU ĐI KÈM VÔI HÓA NGHI NGỜ (SM).</strong> Bên cạnh vôi hóa chỉ khâu lành tính, còn xuất hiện một cụm vi vôi hóa thô không đồng nhất và đa hình thái mịn (mũi tên). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập tái phát (Recurrent IDC liên quan đến vùng vi vôi hóa nghi ngờ).</figcaption>
      </figure>

      <h2 id="phan-3-hinh-thai-nghi-ngo">3. Vôi hóa có hình thái nghi ngờ (Suspicious Morphology) – 4 nhóm hình thái</h2>
      <p>
        Nhóm hình thái nghi ngờ bao gồm các vi vôi hóa hình thành do quá trình tăng sinh bất thường của tế bào biểu mô ống tuyến, kèm theo hoại tử trung tâm hoặc lắng đọng calci trong chất tiết bất thường của tế bào ung thư.
      </p>
      <p>
        ACR BI-RADS® v2025 phân loại thành <strong>4 hình thái nghi ngờ</strong>, xếp theo bậc thang nguy cơ ác tính tăng dần từ thấp đến cao:
      </p>

      <h3 id="phan-3-1-voi-hoa-vo-dinh-hinh">3.1 Vôi hóa vô định hình (Amorphous Calcifications)</h3>
      <p>
        Vôi hóa vô định hình là các hạt vi vôi hóa có kích thước rất nhỏ, hình ảnh mờ nhạt (hazy) và về mặt định nghĩa là <strong>không có hình thù xác định (essentially formless)</strong>, khiến người đọc không thể gán cho chúng bất kỳ một hình thái hình học cụ thể nào.
      </p>
      <ul>
        <li><strong>Đặc điểm nhận diện:</strong> Giống như bụi phấn hoặc các hạt đường rắc mờ trên phim nhũ ảnh. Chúng không thay đổi hình dạng giữa các góc chụp (khác với vôi hóa lắng lớp).</li>
        <li><strong>Giá trị dự báo dương tính (PPV):</strong> Dao động từ <strong>8% đến 20%</strong> (mức độ nghi ngờ trung bình, thường xếp <strong>BI-RADS 4B</strong>).</li>
        <li><strong>Quản lý:</strong> Khi phân bố dạng cụm, dạng đường hoặc phân thùy (hoặc phân bố vùng mới xuất hiện/tăng lên), chỉ định sinh thiết là bắt buộc. Nếu phân bố lan tỏa đối xứng hai bên vú, có thể xếp lành tính (BI-RADS 2).</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_15_amorphous_regional.jpg" alt="Figure 1 – Regional AMORPHOUS calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA VÔ ĐỊNH HÌNH PHÂN BỐ VÙNG (DM).</strong> Các hạt calci rất nhỏ, mờ nhạt và không thể xác định được hình dạng cụ thể. Giải phẫu bệnh: Biến đổi sợi bọc lành tính (Benign fibrocystic changes).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_16_amorphous_with_dcis.jpg" alt="Figure 3 – Regional AMORPHOUS calcifications with fine pleomorphic forms (DM)" />
        <figcaption><strong>Figure 3 – VÔI HÓA VÔ ĐỊNH HÌNH PHÂN BỐ VÙNG (mũi tên), ĐI KÈM CHÙM VI VÔI HÓA ĐA HÌNH THÁI MỊN (đầu mũi tên) (DM).</strong> Sinh thiết vùng vôi hóa đa hình thái mịn cho kết quả DCIS. Các vùng vôi hóa vô định hình luôn cần được quan sát kỹ lưỡng để loại trừ các hình thái nghi ngờ cao hơn cùng tồn tại. Giải phẫu bệnh: DCIS.</figcaption>
      </figure>

      <h3 id="phan-3-2-voi-hoa-tho-khong-dong-nhat">3.2 Vôi hóa thô không đồng nhất (Coarse Heterogeneous Calcifications)</h3>
      <p>
        Vôi hóa thô không đồng nhất là các mảnh vôi hóa có hình dạng gồ ghề không đều, kích thước thường từ <strong>0.5 mm đến 1 mm</strong>, và có xu hướng dính kết tụ lại với nhau.
      </p>
      <div class="note-box">
        <strong class="text-blue-900">Phân biệt với Vôi hóa thô lành tính (Benign Coarse):</strong> Vôi hóa thô không đồng nhất nhỏ hơn vôi hóa thô lành tính (&lt; 1 mm so với &gt; 2-3 mm) và có các góc cạnh sắc nhọn, không đều đặn.
      </div>
      <ul>
        <li><strong>Giá trị dự báo dương tính (PPV):</strong> Dao động từ <strong>7% đến 32%</strong> (mức độ nghi ngờ trung bình, thường xếp <strong>BI-RADS 4B</strong>).</li>
        <li><strong>Nguyên nhân bệnh học:</strong> Có thể gặp trong các tổn thương lành tính (u xơ tuyến giai đoạn đầu thoái hóa, xơ hóa chất đệm, biến đổi giả u xơ), tổn thương nguy cơ cao (tăng sinh ống tuyến không điển hình - ADH), hoặc ung thư biểu mô tại chỗ (DCIS).</li>
        <li><strong>Quản lý:</strong> Chỉ định sinh thiết khi tổn thương tụ thành cụm đơn độc, phân bố dạng đường hoặc phân thùy. Nếu có nhiều cụm tương tự đối xứng hai bên vú ổn định qua thời gian, có thể kết luận lành tính.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_17_coarse_heterogeneous_grouped.jpg" alt="Figure 1 – Grouped COARSE HETEROGENEOUS calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA THÔ KHÔNG ĐỒNG NHẤT TỤ THÀNH CỤM (DM).</strong> Bệnh nhân này có nhiều cụm tương tự đối xứng hai bên vú, ổn định qua nhiều năm theo dõi, lành tính.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_18_coarse_heterogeneous_dcis.jpg" alt="Figure 4 – Grouped COARSE HETEROGENEOUS calcifications (SM)" />
        <figcaption><strong>Figure 4 – VÔI HÓA THÔ KHÔNG ĐỒNG NHẤT TỤ THÀNH CỤM ĐƠN ĐỘC (SM).</strong> Kích thước các mảnh vôi hóa từ 0.5–1 mm, bờ không đều và có xu hướng kết tụ. Giải phẫu bệnh: Ung thư biểu mô tuyến vú thể ống tại chỗ (DCIS).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_19_coarse_heterogeneous_mixed.jpg" alt="Figure 6 – Grouped COARSE HETEROGENEOUS calcifications with fine linear forms (DM)" />
        <figcaption><strong>Figure 6 – CỤM VÔI HÓA THÔ KHÔNG ĐỒNG NHẤT (mũi tên trắng).</strong> Chú ý sự cùng tồn tại của các vôi hóa dạng đường mảnh phân bố thẳng hàng (đầu mũi tên) cũng như vôi hóa thô dạng cụm (mũi tên vàng). Việc đánh giá mức độ nghi ngờ luôn phải căn cứ vào hình thái nghi ngờ nhất. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <h3 id="phan-3-3-voi-hoa-da-hinh-thai-min">3.3 Vôi hóa đa hình thái mịn (Fine Pleomorphic Calcifications)</h3>
      <p>
        Vôi hóa đa hình thái mịn có kích thước và hình dáng rất đa dạng, sắc nhọn, gồ ghề (hình đa giác, chữ nhật, tam giác, hình sao), nhưng kích thước thường rất nhỏ (<strong>&lt; 0.5 mm</strong>).
      </p>
      <ul>
        <li><strong>So sánh nhận diện:</strong> So với vôi hóa vô định hình, vôi hóa đa hình thái mịn <strong>rõ nét hơn hẳn (more conspicuous)</strong>, có các góc cạnh tách biệt rõ ràng. Tuy nhiên chúng không tạo thành các đường kéo dài liên tục như dạng đường mảnh.</li>
        <li><strong>Giá trị dự báo dương tính (PPV):</strong> Rất cao, dao động từ <strong>28% đến 79%</strong> (xếp <strong>BI-RADS 4B đến 4C</strong>).</li>
        <li><strong>Ý nghĩa lâm sàng:</strong> Liên quan mật thiết với ung thư biểu mô thể ống tại chỗ (DCIS độ mô học trung bình hoặc cao) và ung thư xâm nhập. Sinh thiết có hướng dẫn hình ảnh là chỉ định bắt buộc.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_20_fine_pleomorphic_idc_dcis.jpg" alt="Figure 1 – Grouped FINE PLEOMORPHIC calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA ĐA HÌNH THÁI MỊN TỤ THÀNH CỤM (DM).</strong> Các hạt calci có kích thước và hình dạng khác nhau, sắc nhọn, thường &lt; 0.5 mm. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (IDC) kèm DCIS.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_21_fine_pleomorphic_dcis.jpg" alt="Figure 4 – Grouped FINE PLEOMORPHIC calcifications in two distinct groups (DM)" />
        <figcaption><strong>Figure 4 – VÔI HÓA ĐA HÌNH THÁI MỊN TỤ THÀNH CỤM (DM).</strong> Hai cụm tổn thương riêng biệt hiện diện. Một vài mảnh vôi hóa thô không đồng nhất cũng xuất hiện trong mỗi cụm, tuy nhiên mô tả hình thái tổng thể phải dựa trên thành phần nghi ngờ nhất. Giải phẫu bệnh: DCIS ở cả hai cụm tổn thương.</figcaption>
      </figure>

      <h3 id="phan-3-4-voi-hoa-duong-manh">3.4 Vôi hóa dạng đường mảnh hoặc dạng đường mảnh phân nhánh (Fine Linear / Fine Linear-Branching)</h3>
      <p>
        Đây là hình thái có <strong>giá trị dự báo ác tính (PPV) cao nhất</strong> trong toàn bộ các loại vôi hóa tuyến vú.
      </p>
      <p>
        Tổn thương biểu hiện dưới dạng các đường calci rất mỏng, mảnh khảnh, gãy khúc ngắt quãng, đường kính thường <strong>&lt; 0.5 mm</strong>. Đôi khi có thể bắt gặp các hình thái phân nhánh theo hình chữ Y hoặc chữ V.
      </p>
      <ul>
        <li><strong>Cơ chế bệnh sinh:</strong> Calci lắng đọng trực tiếp và <strong>đúc khuôn (casting calcifications)</strong> trong lòng các nhánh ống dẫn sữa bị lấp đầy bởi các tế bào ung thư hoại tử (đặc biệt là DCIS thể trứng cá - comedocarcinoma).</li>
        <li><strong>Giá trị dự báo dương tính (PPV):</strong> Đạt từ <strong>53% đến 100%</strong> (thường xếp <strong>BI-RADS 4C hoặc BI-RADS 5</strong>).</li>
        <li><strong>Lưu ý quan trọng:</strong> Nếu kết quả sinh thiết lõi của một cụm vôi hóa dạng đường mảnh phân nhánh trả về kết quả mô bệnh học lành tính, kết quả đó <strong>bắt buộc phải được xem là không tương thích (discordant)</strong> và phải chỉ định phẫu thuật sinh thiết mở cắt rộng tổn thương ngay lập tức để không bỏ sót ung thư.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_22_fine_linear_segmental.jpg" alt="Figure 1 – FINE LINEAR calcifications in segmental distribution (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA DẠNG ĐƯỜNG MẢNH PHÂN BỐ THEO PHÂN THÙY (DM).</strong> Mặc dù diện tích liên quan không lớn, các hạt vôi hóa dạng đường mảnh chạy uốn lượn theo các nhánh ống tuyến phân đôi, tạo nên kiểu phân bố phân thùy. Giải phẫu bệnh: DCIS độ mô học cao (high nuclear grade).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_23_fine_linear_branching_casting.jpg" alt="Figure 2 – Segmental FINE LINEAR-BRANCHING calcifications (DM)" />
        <figcaption><strong>Figure 2 – VÔI HÓA DẠNG ĐƯỜNG MẢNH PHÂN NHÁNH PHÂN BỐ THEO PHÂN THÙY (DM).</strong> Nhìn thấy rõ các dạng đường calci phân nhánh đúc khuôn lòng ống dẫn sữa (casting type). Một số vôi hóa có thể dày hơn nhưng bờ rất gồ ghề và không thon nhọn như vôi hóa que lớn lành tính. Hình ảnh này cực kỳ đặc hiệu cho ung thư biểu mô tại chỗ (DCIS); kết quả sinh thiết lành tính phải được xem là không tương thích (discordant). Giải phẫu bệnh: DCIS.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_24_fine_linear_comedo_dcis.jpg" alt="Figure 5 – Grouped FINE LINEAR calcifications (DM)" />
        <figcaption><strong>Figure 5 – VÔI HÓA DẠNG ĐƯỜNG MẢNH TỤ THÀNH CỤM (DM).</strong> Đi kèm một số hạt đa hình thái mịn. Giải phẫu bệnh: DCIS thể trứng cá (Comedocarcinoma).</figcaption>
      </figure>

      <h3 id="phan-3-5-bang-ppv">Bảng đối chiếu Giá trị dự báo dương tính (PPV) theo các nghiên cứu thực chứng</h3>
      <p>
        Bảng 3 trong Cẩm nang ACR BI-RADS® v2025 tổng hợp tỷ lệ ác tính (PPV) của 4 hình thái nghi ngờ từ các công trình nghiên cứu kinh điển và đa trung tâm quy mô lớn:
      </p>

      <div class="overflow-x-auto my-6">
        <table class="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <thead class="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider">
            <tr>
              <th class="py-3 px-4 border-b text-left">Hình thái mô tả</th>
              <th class="py-3 px-3 border-b text-center">Choi et al. 2020</th>
              <th class="py-3 px-3 border-b text-center">Park et al. 2019</th>
              <th class="py-3 px-3 border-b text-center">Kim et al. 2015</th>
              <th class="py-3 px-3 border-b text-center">Bent et al. 2010</th>
              <th class="py-3 px-3 border-b text-center">Burnside et al. 2007</th>
              <th class="py-3 px-4 border-b text-center">Phân loại gợi ý</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-slate-900">Vô định hình (Amorphous)</td>
              <td class="py-2.5 px-3 text-center">9.1%</td>
              <td class="py-2.5 px-3 text-center">15.9%</td>
              <td class="py-2.5 px-3 text-center">7.9%</td>
              <td class="py-2.5 px-3 text-center">20.0%</td>
              <td class="py-2.5 px-3 text-center">13.0%</td>
              <td class="py-2.5 px-4 text-center font-bold text-amber-700">BI-RADS 4B</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-slate-900">Thô không đồng nhất (Coarse Heterogeneous)</td>
              <td class="py-2.5 px-3 text-center">16.1%</td>
              <td class="py-2.5 px-3 text-center">31.7%</td>
              <td class="py-2.5 px-3 text-center">17.8%</td>
              <td class="py-2.5 px-3 text-center">20.0%</td>
              <td class="py-2.5 px-3 text-center">7.0%</td>
              <td class="py-2.5 px-4 text-center font-bold text-amber-700">BI-RADS 4B</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-4 font-semibold text-slate-900">Đa hình thái mịn (Fine Pleomorphic)</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-600">78.8%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-600">58.2%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-600">63.2%</td>
              <td class="py-2.5 px-3 text-center">28.0%</td>
              <td class="py-2.5 px-3 text-center">29.0%</td>
              <td class="py-2.5 px-4 text-center font-bold text-rose-700">BI-RADS 4B – 4C</td>
            </tr>
            <tr class="hover:bg-slate-50/80 bg-rose-50/30">
              <td class="py-2.5 px-4 font-bold text-rose-900">Dạng đường mảnh / Phân nhánh (Fine Linear / Branching)</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-700">78.6%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-700">90.6%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-700">100.0%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-700">70.0%</td>
              <td class="py-2.5 px-3 text-center font-bold text-rose-700">53.0%</td>
              <td class="py-2.5 px-4 text-center font-black text-rose-800">BI-RADS 4C – 5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="phan-4-phan-bo-voi-hoa">4. Các kiểu phân bố vôi hóa (Distribution Descriptors)</h2>
      <p>
        Trong đánh giá nguy cơ ác tính, <strong>cách thức phân bố vôi hóa có tầm quan trọng tương đương, thậm chí đôi khi vượt trội hơn cả hình thái vi thể</strong>. Sự sắp xếp trong không gian giải phẫu phản ánh trực tiếp quá trình lan tràn của tế bào tân sinh theo mạng lưới ống dẫn sữa.
      </p>

      <h3 id="phan-4-1-phan-bo-lan-toa">4.1 Phân bố lan tỏa (Diffuse)</h3>
      <p>
        Vôi hóa phân bố rải rác ngẫu nhiên khắp toàn bộ thể tích vú.
      </p>
      <ul>
        <li>Khi xuất hiện <strong>đối xứng ở cả hai bên vú</strong> và có hình thái tròn hoặc vô định hình, phân bố lan tỏa hầu như luôn luôn là biểu hiện lành tính (<strong>BI-RADS 2</strong>).</li>
        <li><strong>Ngoại lệ cảnh giác:</strong> Vôi hóa lan tỏa <em>chỉ ở một bên vú (unilateral diffuse)</em> là hiện tượng không phổ biến và có thể là biểu hiện của DCIS lan rộng thể xâm lấn toàn thể, đặc biệt nếu vi vôi hóa có hình thái thô không đồng nhất, đa hình thái mịn hoặc phân nhánh.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_25_dist_diffuse_round.jpg" alt="Figure 1 – DIFFUSE, primarily round calcifications (DM)" />
        <figcaption><strong>Figure 1 – PHÂN BỐ LAN TỎA, CHỦ YẾU LÀ VÔI HÓA TRÒN (DM).</strong> Nhiều hạt vôi hóa có tâm thấu quang nhưng không có hạt nào nằm trên bề mặt da. Tổn thương tương tự hiện diện đối xứng ở vú đối bên. Tính chất nhiều ổ, đối xứng hai bên, phân bố lan tỏa và không có hình thái nghi ngờ xác lập kết luận lành tính (BI-RADS 2).</figcaption>
      </figure>

      <h3 id="phan-4-2-phan-bo-vung">4.2 Phân bố vùng (Regional)</h3>
      <p>
        Vôi hóa phân bố chiếm một thể tích lớn của tuyến vú (thường <strong>&gt; 2 cm</strong> ở kích thước lớn nhất, hoặc lan rộng qua nhiều phân vùng/hạ phân thùy), nhưng không chiếm toàn bộ vú như phân bố lan tỏa.
      </p>
      <p>
        Đặc trưng của phân bố vùng là các hạt calci rải rác ngẫu nhiên và <strong>không tuân theo giải phẫu của một hệ thống ống tuyến hay phân thùy dẫn sữa</strong>. Do liên quan đến diện tích rộng không theo phân thùy, khả năng ác tính thường thấp hơn so với phân bố dạng đường hay phân thùy. Tuy nhiên, nếu hình thái là đa hình thái mịn hoặc dạng đường mảnh, tổn thương vẫn bắt buộc phải sinh thiết.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_26_dist_regional_trauma.jpg" alt="Figure 1 – REGIONAL coarse calcifications post-trauma (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA THÔ PHÂN BỐ VÙNG (DM).</strong> Bệnh nhân từng bị chấn thương do dây đai an toàn xe hơi ở vú này. Các vôi hóa phân bố rải rác ngẫu nhiên ở vùng trung tâm vú, không theo hệ thống ống tuyến. Hoại tử mỡ lành tính.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_27_dist_regional_dcis.jpg" alt="Figure 4 – REGIONAL fine pleomorphic and fine linear calcifications (DM)" />
        <figcaption><strong>Figure 4 – VÔI HÓA ĐA HÌNH THÁI MỊN VÀ DẠNG ĐƯỜNG MẢNH PHÂN BỐ VÙNG (DM).</strong> Mặc dù vôi hóa phân bố rải rác trên diện rộng ở phần trên vú, hình thái của chúng thuộc nhóm nghi ngờ cao, bắt buộc phải sinh thiết. Giải phẫu bệnh: DCIS.</figcaption>
      </figure>

      <h3 id="phan-4-3-phan-bo-thanh-cum">4.3 Phân bố thành cụm (Grouped)</h3>
      <p>
        Phân bố thành cụm được định nghĩa là sự tập trung của ít nhất <strong>5 hạt vôi hóa trong phạm vi diện tích 1 cm</strong>, hoặc một số lượng hạt lớn hơn tập trung trong phạm vi <strong>2 cm</strong>.
      </p>
      <p>
        Khái niệm này ngụ ý một tập hợp vôi hóa khu trú, không ngẫu nhiên. Đây là kiểu phân bố phổ biến nhất cần đánh giá trên lâm sàng:
      </p>
      <ul>
        <li>Hình thái học của từng hạt quan trọng hơn số lượng tuyệt đối: Nếu hình thái nghi ngờ cao (như dạng đường phân nhánh), ngay cả khi chỉ có 3–4 hạt cũng phải chỉ định sinh thiết.</li>
        <li>Một cụm vôi hóa tròn đơn độc mới xuất hiện được xếp <strong>BI-RADS 3</strong> hoặc <strong>BI-RADS 4A</strong> tùy tiền sử nguy cơ của bệnh nhân.</li>
      </ul>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_28_dist_grouped_round.jpg" alt="Figure 1 – GROUPED, round calcifications (DM)" />
        <figcaption><strong>Figure 1 – VÔI HÓA TRÒN PHÂN BỐ THÀNH CỤM (DM).</strong> Ổ vôi hóa chiếm diện tích nhỏ (&lt; 1 cm), ổn định qua nhiều năm theo dõi, lành tính.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_29_dist_grouped_dcis.jpg" alt="Figure 5 – GROUPED fine pleomorphic and fine linear calcifications (DM)" />
        <figcaption><strong>Figure 5 – VÔI HÓA ĐA HÌNH THÁI MỊN VÀ DẠNG ĐƯỜNG MẢNH PHÂN BỐ THÀNH CỤM (DM).</strong> Giải phẫu bệnh: DCIS.</figcaption>
      </figure>

      <h3 id="phan-4-4-phan-bo-dang-duong">4.4 Phân bố dạng đường (Linear)</h3>
      <p>
        Vôi hóa được sắp xếp thẳng hàng nối tiếp nhau thành một đường thẳng hoặc đường cong. Kiểu phân bố này mang <strong>mức độ nghi ngờ ác tính cao</strong>, vì nó phản ánh trực tiếp sự lắng đọng calci bên trong lòng của một nhánh ống dẫn sữa đơn độc.
      </p>
      <p>
        Trừ trường hợp mang hình thái lành tính điển hình (như vôi hóa thành mạch máu hoặc que lớn của viêm tuyến vú tế bào huyết tương), bất kỳ vôi hóa nào có hình thái nghi ngờ phân bố dạng đường đều phải xếp loại <strong>BI-RADS 4C</strong> và chỉ định sinh thiết ngay lập tức.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_30_dist_linear_dcis.jpg" alt="Figure 1 – LINEAR distribution of fine pleomorphic calcifications (DM)" />
        <figcaption><strong>Figure 1 – PHÂN BỐ DẠNG ĐƯỜNG CỦA VÔI HÓA ĐA HÌNH THÁI MỊN (mũi tên), CẠNH CỤM VÔI HÓA THÔ KHÔNG ĐỒNG NHẤT (đầu mũi tên) (DM).</strong> Giải phẫu bệnh: DCIS (ở vùng mũi tên) và u xơ tuyến ổn định (ở đầu mũi tên).</figcaption>
      </figure>

      <h3 id="phan-4-5-phan-bo-phan-thuy">4.5 Phân bố phân thùy (Segmental)</h3>
      <p>
        Vôi hóa phân bố theo hình tam giác hoặc hình nón, với <strong>đỉnh nón hướng về phía núm vú</strong> và đáy hướng ra ngoại vi trên ít nhất một bình diện chụp.
      </p>
      <p>
        Sự sắp xếp này tương ứng chính xác với toàn bộ mạng lưới phân nhánh của một thùy tuyến vú giải phẫu (ductal system). Phân bố phân thùy chỉ điểm sự lắng đọng calci lan tràn trong nhiều nhánh ống dẫn sữa của cùng một thùy, cảnh báo <strong>ung thư biểu mô tuyến vú lan rộng hoặc đa ổ (multifocal/extensive DCIS)</strong>. Bất cứ khi nào vôi hóa không mang hình thái thường lành tính mà phân bố phân thùy, nguy cơ ác tính là cực kỳ cao.
      </p>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_31_dist_segmental_dcis.jpg" alt="Figure 1 – SEGMENTAL distribution of fine linear and fine pleomorphic calcifications (DM)" />
        <figcaption><strong>Figure 1 – PHÂN BỐ PHÂN THÙY CỦA VÔI HÓA DẠNG ĐƯỜNG MẢNH VÀ ĐA HÌNH THÁI MỊN (DM).</strong> Sự sắp xếp hình tam giác/hình nón hướng đỉnh về núm vú gợi ý lắng đọng calci trong nhiều nhánh của cùng một thùy tuyến vú. Giải phẫu bệnh: DCIS độ cao.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025-calcifications/fig_32_dist_segmental_mastectomy.jpg" alt="Figure 2 – SEGMENTAL distribution of fine linear-branching calcifications (SM and specimen DM)" />
        <figcaption><strong>Figure 2 – PHÂN BỐ PHÂN THÙY LAN RỘNG CỦA VÔI HÓA DẠNG ĐƯỜNG MẢNH PHÂN NHÁNH. (A) thế CC và (B) thế MLO (SM); (C) X-quang bệnh phẩm sau đoạn nhũ theo hướng trán (DM).</strong> Các đầu mũi tên chỉ vị trí kẹp kim loại sau sinh thiết lõi; mũi tên trắng chỉ núm vú chiếu trực diện trên bệnh phẩm đoạn nhũ. Giải phẫu bệnh: Ung thư biểu mô ống tuyến vú xâm nhập (IDC) kèm DCIS diện rộng.</figcaption>
      </figure>

      <h2 id="phan-5-ky-thuat-hinh-anh">5. Kỹ thuật hình ảnh chuyên sâu: Nhũ ảnh phóng đại & Nhũ ảnh 3D (DBT)</h2>
      <p>
        Trong kỷ nguyên của các công nghệ hình ảnh tiên tiến, việc lựa chọn đúng kỹ thuật để phân tích vi vôi hóa là yếu tố sống còn quyết định độ chính xác chẩn đoán.
      </p>

      <h3 id="phan-5-1-nhu-anh-phong-dai">Vai trò bất khả thay thế của Nhũ ảnh 2D phóng đại (2D Magnification Views)</h3>
      <p>
        Dù công nghệ nhũ ảnh 3D (DBT) đã trở thành tiêu chuẩn trong tầm soát phát hiện khối u và xáo trộn cấu trúc, <strong>chụp phóng đại ép khu trú (Spot Magnification) trên nhũ ảnh 2D kỹ thuật số (DM) vẫn là tiêu chuẩn vàng tuyệt đối để khảo sát vi vôi hóa</strong>:
      </p>
      <ul>
        <li>
          <strong>Độ phân giải không gian vượt trội:</strong> Nhũ ảnh 2D phóng đại sử dụng tiêu điểm nhỏ (small focal spot: 0.1 mm) và tăng khoảng cách từ vật thể đến detector (air-gap technique), giúp phóng đại hình ảnh lên 1.5 đến 1.8 lần mà không làm mờ hình học, bộc lộ rõ các gai nhọn vi thể &lt; 0.5 mm của vôi hóa đa hình thái mịn hoặc đường phân nhánh.
        </li>
        <li>
          <strong>Tư thế bắt buộc 90° Lateral (LM/ML view):</strong> Khi phát hiện vôi hóa có vẻ vô định hình hoặc mờ nhạt trên thế CC, <strong>bắt buộc phải chụp bổ sung thế phóng đại nghiêng 90° chùm tia song song mặt đất</strong> để tìm kiếm hiện tượng vôi hóa lắng lớp (layering sign). Nếu calci lắng thành hình đáy chén/mặt trăng khuyết, bệnh nhân được khẳng định lành tính (BI-RADS 2) và tránh được một cuộc sinh thiết xâm lấn không đáng có.
        </li>
      </ul>

      <h3 id="phan-5-2-vai-tro-dbt">Vai trò và giới hạn của Nhũ ảnh 3D (Tomosynthesis - DBT) đối với vi vôi hóa</h3>
      <ul>
        <li>
          <strong>Ưu điểm của DBT:</strong> Giúp xác định chính xác vị trí vôi hóa trong không gian 3 chiều theo trục sâu của vú; phân biệt vôi hóa da thực sự nhờ nhận diện lớp lát cắt bì; phát hiện các tổn thương mô mềm kết hợp (khối u ngầm hoặc xáo trộn cấu trúc) nằm ẩn giấu phía sau cụm vi vôi hóa.
        </li>
        <li>
          <strong>Giới hạn của DBT:</strong> Do chuyển động quét góc của đầu đèn và thuật toán tái tạo tái cắt lớp (reconstruction artifacts), các vi vôi hóa cực nhỏ (&lt; 0.3 mm) có thể bị nhòe mờ hoặc suy giảm độ tương phản trên các lát cắt DBT mỏng. Do đó, <strong>không bao giờ được dựa hoàn toàn vào DBT đơn thuần để loại trừ ác tính đối với vi vôi hóa nghi ngờ</strong> mà không có phim 2D phóng đại đối chứng.
        </li>
      </ul>

      <h2 id="phan-6-bang-doi-chieu-xu-tri">6. Bảng tổng hợp đối chiếu & Chiến lược xử trí lâm sàng (Management Strategy)</h2>
      <p>
        Bảng ma trận phối hợp Hình thái × Phân bố theo khuyến cáo của Cẩm nang ACR BI-RADS® v2025 giúp chuẩn hóa quyết định lâm sàng:
      </p>

      <div class="overflow-x-auto my-6">
        <table class="min-w-full text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <thead class="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider">
            <tr>
              <th class="py-3 px-3 border-b text-left">Hình thái vôi hóa</th>
              <th class="py-3 px-3 border-b text-left">Kiểu phân bố</th>
              <th class="py-3 px-2 border-b text-center">BI-RADS</th>
              <th class="py-3 px-3 border-b text-center">Nguy cơ ác tính</th>
              <th class="py-3 px-4 border-b text-left">Khuyến cáo xử trí chuẩn</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 bg-white">
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-3 font-semibold text-slate-800">Da, mạch máu, thô, que lớn, viền, lắng lớp, chỉ khâu</td>
              <td class="py-2.5 px-3 text-slate-600">Bất kỳ kiểu phân bố nào</td>
              <td class="py-2.5 px-2 text-center font-bold text-emerald-700">2</td>
              <td class="py-2.5 px-3 text-center text-emerald-600 font-semibold">~0%</td>
              <td class="py-2.5 px-4 text-slate-700">Tầm soát định kỳ hàng năm theo độ tuổi.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-3 font-semibold text-slate-800">Tròn (Round)</td>
              <td class="py-2.5 px-3 text-slate-600">Lan tỏa đối xứng 2 vú</td>
              <td class="py-2.5 px-2 text-center font-bold text-emerald-700">2</td>
              <td class="py-2.5 px-3 text-center text-emerald-600 font-semibold">~0%</td>
              <td class="py-2.5 px-4 text-slate-700">Tầm soát định kỳ thông thường.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-3 font-semibold text-slate-800">Tròn (Round)</td>
              <td class="py-2.5 px-3 text-slate-600">Thành cụm đơn độc (lần đầu khám)</td>
              <td class="py-2.5 px-2 text-center font-bold text-blue-700">3</td>
              <td class="py-2.5 px-3 text-center text-blue-600 font-semibold">&le; 2%</td>
              <td class="py-2.5 px-4 text-slate-700">Chụp nhũ ảnh phóng đại kiểm tra sau 6 tháng, 12 tháng và 24 tháng để xác nhận tính ổn định.</td>
            </tr>
            <tr class="hover:bg-slate-50/80">
              <td class="py-2.5 px-3 font-semibold text-slate-800">Vô định hình (Amorphous)</td>
              <td class="py-2.5 px-3 text-slate-600">Lan tỏa đối xứng 2 vú</td>
              <td class="py-2.5 px-2 text-center font-bold text-emerald-700">2</td>
              <td class="py-2.5 px-3 text-center text-emerald-600 font-semibold">~0%</td>
              <td class="py-2.5 px-4 text-slate-700">Lành tính, không cần can thiệp.</td>
            </tr>
            <tr class="hover:bg-slate-50/80 bg-amber-50/20">
              <td class="py-2.5 px-3 font-bold text-amber-900">Vô định hình (Amorphous)</td>
              <td class="py-2.5 px-3 text-slate-700">Thành cụm / Dạng đường / Phân thùy</td>
              <td class="py-2.5 px-2 text-center font-bold text-amber-700">4B</td>
              <td class="py-2.5 px-3 text-center text-amber-700 font-semibold">10% – 20%</td>
              <td class="py-2.5 px-4 text-slate-800 font-medium">Chỉ định sinh thiết có hỗ trợ hút chân không (VABB) dưới hướng dẫn định vị nhũ ảnh stereotactic/tomosynthesis.</td>
            </tr>
            <tr class="hover:bg-slate-50/80 bg-amber-50/20">
              <td class="py-2.5 px-3 font-bold text-amber-900">Thô không đồng nhất (Coarse Heterogeneous)</td>
              <td class="py-2.5 px-3 text-slate-700">Thành cụm đơn độc / Mới xuất hiện</td>
              <td class="py-2.5 px-2 text-center font-bold text-amber-700">4B</td>
              <td class="py-2.5 px-3 text-center text-amber-700 font-semibold">15% – 30%</td>
              <td class="py-2.5 px-4 text-slate-800 font-medium">Sinh thiết định vị stereotactic / VABB.</td>
            </tr>
            <tr class="hover:bg-slate-50/80 bg-rose-50/30">
              <td class="py-2.5 px-3 font-bold text-rose-900">Đa hình thái mịn (Fine Pleomorphic)</td>
              <td class="py-2.5 px-3 text-slate-700">Thành cụm / Vùng / Dạng đường</td>
              <td class="py-2.5 px-2 text-center font-bold text-rose-700">4B – 4C</td>
              <td class="py-2.5 px-3 text-center text-rose-700 font-bold">30% – 80%</td>
              <td class="py-2.5 px-4 text-rose-900 font-medium">Sinh thiết mô học khẩn trương (VABB/Stereotactic core biopsy). Chụp X-quang bệnh phẩm sau sinh thiết để xác nhận lấy trúng vi vôi hóa.</td>
            </tr>
            <tr class="hover:bg-slate-50/80 bg-rose-50/50">
              <td class="py-2.5 px-3 font-black text-rose-950">Dạng đường mảnh / Phân nhánh (Fine Linear / Branching)</td>
              <td class="py-2.5 px-3 text-slate-800 font-semibold">Dạng đường / Phân thùy</td>
              <td class="py-2.5 px-2 text-center font-black text-rose-900">4C – 5</td>
              <td class="py-2.5 px-3 text-center text-rose-800 font-black">&gt; 80% – 100%</td>
              <td class="py-2.5 px-4 text-rose-950 font-bold">Sinh thiết mô học ngay lập tức. Đặt clip định vị ổ tổn thương. Nếu giải phẫu bệnh trả lời lành tính, xem là bất tương thích (discordant) và mổ sinh thiết mở rộng.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="phan-7-key-points">7. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Pitfalls)</h2>
      
      <div class="key-points">
        <h4 class="font-bold text-blue-900 mb-1">Key Points (Điểm cốt lõi):</h4>
        <ul>
          <li><strong>Nguyên tắc hình thái nghi ngờ nhất:</strong> Bất cứ khi nào có nhiều dạng vôi hóa hỗn hợp, quyết định can thiệp sinh thiết luôn được chi phối bởi hình thái có độ nghi ngờ cao nhất.</li>
          <li><strong>Cập nhật BI-RADS® v2025:</strong> Nhớ rõ 4 thay đổi danh pháp then chốt: (1) Bãi bỏ Popcorn-like và sáp nhập Dystrophic vào Coarse; (2) Gộp Punctate vào Round; (3) Thay Milk of calcium bằng Vôi hóa lắng lớp (Layering); (4) Khẳng định vai trò độc lập của 2D phóng đại.</li>
          <li><strong>Giá trị của thế 90° Lateral:</strong> Luôn luôn thực hiện thế phóng đại nghiêng 90° (ML/LM) khi gặp các vi vôi hóa mờ nhạt dạng cụm để tìm kiếm dấu hiệu vôi hóa lắng lớp (layering), giúp tránh can thiệp sinh thiết không cần thiết.</li>
          <li><strong>X-quang bệnh phẩm (Specimen Radiography):</strong> Sau khi sinh thiết vi vôi hóa dưới hướng dẫn định vị, bắt buộc phải chụp X-quang các mẩu mô sinh thiết ngay tại phòng can thiệp để khẳng định chắc chắn đã lấy trúng các hạt vi vôi hóa mục tiêu.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-1">Diagnostic Pitfalls (Cạm bẫy lâm sàng & Cách phòng tránh):</h4>
        <ul>
          <li><strong>Cạm bẫy 1 – Nhầm lẫn Vôi hóa da với tổn thương nhu mô:</strong> Các vôi hóa da ở nếp lằn dưới vú hoặc quầng vú có thể chiếu chồng lên nhu mô vú tạo ảo giác vi vôi hóa nghi ngờ. <em>Khắc phục:</em> Quan sát kỹ tâm thấu quang, kiểm tra trên các lát cắt DBT sát da hoặc chụp thế tiếp tuyến có gắn chỉ điểm (tangential view with skin marker).</li>
          <li><strong>Cạm bẫy 2 – Bỏ sót vi vôi hóa nghi ngờ bên cạnh vôi hóa chỉ khâu:</strong> Thấy vôi hóa chỉ khâu dạng nút thắt thường dễ dẫn đến tâm lý chủ quan coi là sẹo mổ lành tính. <em>Khắc phục:</em> Luôn soi kỹ mô sợi tuyến bao quanh sẹo mổ để tìm kiếm các hạt vi vôi hóa đa hình thái mịn của ung thư tái phát.</li>
          <li><strong>Cạm bẫy 3 – Đánh giá thấp phân bố phân thùy:</strong> Ngay cả khi các hạt vi vôi hóa có vẻ nhỏ và số lượng ít, nhưng nếu chúng sắp xếp hình tam giác hướng đỉnh về núm vú theo phân thùy giải phẫu, nguy cơ ung thư biểu mô tại chỗ (DCIS) lan rộng là cực kỳ cao.</li>
          <li><strong>Cạm bẫy 4 – Chấp nhận kết quả sinh thiết lành tính bất tương thích:</strong> Với vi vôi hóa dạng đường mảnh phân nhánh (casting calcifications) có PPV ác tính lên tới 90–100%, nếu kết quả sinh thiết lõi trả về "biến đổi sợi bọc lành tính" hoặc mô mỡ thông thường, bác sĩ chẩn đoán hình ảnh phải kiên quyết hội chẩn giải phẫu bệnh (radio-pathologic correlation) và yêu cầu sinh thiết mở lại để tránh bỏ sót ung thư.</li>
        </ul>
      </div>

    `,
    views: 1540,
    readTime: "18 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 48-106)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "Vôi hóa tuyến vú", "Calcifications", "DCIS", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
  }
];
