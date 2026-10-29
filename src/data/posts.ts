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
      <div class="toc-box">
        <h4 class="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Mục Lục Bài Giảng</h4>
        <ul class="text-xs space-y-1.5 text-blue-700">
          <li><a href="#phan-1-dinh-nghia" class="hover:underline">1. Giới thiệu tổng quan & Định nghĩa Khối u theo BI-RADS® v2025</a></li>
          <li><a href="#phan-2-hinh-thai" class="hover:underline">2. Phân loại Hình thái khối u (Mass Shape)</a>
            <ul class="pl-4 space-y-1 text-slate-600">
              <li><a href="#shape-oval" class="hover:underline">a. Hình bầu dục (Oval) - Hình 1 đến Hình 5</a></li>
              <li><a href="#shape-lobulated" class="hover:underline">b. Hình đa cung (Lobulated) - Cập nhật mới BI-RADS 2025 - Hình 1 đến Hình 6</a></li>
              <li><a href="#shape-round" class="hover:underline">c. Hình tròn (Round) - Hình 1 đến Hình 6</a></li>
              <li><a href="#shape-irregular" class="hover:underline">d. Hình không đều (Irregular) - Hình 1 đến Hình 6</a></li>
            </ul>
          </li>
          <li><a href="#phan-3-duong-bo" class="hover:underline">3. Phân loại Đường bờ khối u (Mass Margin)</a>
            <ul class="pl-4 space-y-1 text-slate-600">
              <li><a href="#margin-circumscribed" class="hover:underline">a. Bờ rõ nét / Giới hạn rõ (Circumscribed) - Hình 1 đến Hình 6</a></li>
              <li><a href="#margin-obscured" class="hover:underline">b. Bờ bị che khuất (Obscured) - Hình 1 đến Hình 6</a></li>
              <li><a href="#margin-indistinct" class="hover:underline">c. Bờ không rõ nét (Indistinct) - Hình 1 đến Hình 6</a></li>
              <li><a href="#margin-spiculated" class="hover:underline">d. Bờ tua gai (Spiculated) - Hình 1 đến Hình 8</a></li>
            </ul>
          </li>
          <li><a href="#phan-4-dam-do" class="hover:underline">4. Phân loại Đậm độ khối u (Mass Density)</a>
            <ul class="pl-4 space-y-1 text-slate-600">
              <li><a href="#density-fat" class="hover:underline">a. Chứa mỡ (Fat-Containing) - Hình 1 đến Hình 7</a></li>
              <li><a href="#density-low" class="hover:underline">b. Đậm độ thấp (Low Density) - Hình 1 đến Hình 4</a></li>
              <li><a href="#density-equal" class="hover:underline">c. Đồng đậm độ (Equal Density) - Hình 1 đến Hình 5</a></li>
              <li><a href="#density-high" class="hover:underline">d. Đậm độ cao (High Density) - Hình 1 đến Hình 6</a></li>
            </ul>
          </li>
          <li><a href="#phan-5-dbt" class="hover:underline">5. Vai trò then chốt của Nhũ ảnh 3D cắt lớp (DBT) trong đánh giá khối</a></li>
          <li><a href="#phan-6-bang-so-sanh" class="hover:underline">6. Bảng tổng hợp đối chiếu & Nguy cơ ác tính</a></li>
          <li><a href="#phan-7-keypoints-pitfalls" class="hover:underline">7. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Diagnostic Pitfalls)</a></li>
        </ul>
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
        Mặc dù đa số các khối hình đa cung vẫn là lành tính (như u sợi tuyến hoặc chùm vi nang), khối đa cung được coi là có mức độ nghi ngờ ác tính nhỉnh hơn so với khối hình bầu dục thông thường. Thuật ngữ mô tả hình thái mới này được đưa vào nhằm bổ sung sắc thái đánh giá tinh tế hơn cho hình thái khối u.
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


      <div class="toc-box">
        <h4 class="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Mục Lục Bài Giảng</h4>
        <ul class="text-xs space-y-1.5 text-blue-700">
          <li><a href="#phan-1-tong-quan" class="hover:underline">1. Giới thiệu tổng quan & Ý nghĩa lâm sàng</a></li>
          <li><a href="#phan-2-xao-tron-cau-truc" class="hover:underline">2. Xáo trộn cấu trúc (Architectural Distortion)</a></li>
          <li><a href="#phan-3-cac-ca-xao-tron-cau-truc" class="hover:underline">3. Ca bệnh minh họa: Xáo trộn cấu trúc (Hình 1 - Hình 7)</a></li>
          <li><a href="#phan-4-tong-quan-bat-doi-xung" class="hover:underline">4. Các dạng bất đối xứng (Asymmetries) & Điểm mới BI-RADS® v2025</a></li>
          <li><a href="#phan-5-bat-doi-xung-toan-the" class="hover:underline">5. Bất đối xứng toàn thể (Global Asymmetry) & Ca minh họa</a></li>
          <li><a href="#phan-6-bat-doi-xung-mot-binh-dien" class="hover:underline">6. Bất đối xứng một bình diện (Asymmetry) & Ca minh họa</a></li>
          <li><a href="#phan-7-bang-so-sanh" class="hover:underline">7. Bảng tổng hợp so sánh & Lưu đồ xử trí</a></li>
          <li><a href="#phan-8-key-points" class="hover:underline">8. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Pitfalls)</a></li>
        </ul>
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
  }
];
