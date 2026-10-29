import { Post } from "@/types";

export const POSTS: Post[] = [
  {
    id: "post-birads-2025-arch-distortion-asymmetry",
    title: "Cẩm nang ACR BI-RADS® 2025: Biến dạng cấu trúc (Architectural Distortion) và Các dạng bất đối xứng tuyến vú (Asymmetries)",
    slug: "birads-2025-bien-dang-cau-truc-va-bat-doi-xung-tuyen-vu",
    date: "29 Tháng 10, 2026",
    updatedDate: "29 Tháng 10, 2026",
    author: "ACR BI-RADS® Committee (Biên dịch & Chú giải: CĐHA Cập Nhật)",
    categories: ["Vú", "X-quang", "Nhũ ảnh", "BI-RADS 2025", "Ung thư vú"],
    categorySlugs: ["vu", "x-quang", "nhu-anh", "bi-rads-2025"],
    modality: "XQ",
    specialty: "Vú",
    specialtySlug: "vu",
    coverImage: "/posts/birads-v2025/fig1_arch_distortion_dbt_idc.jpg",
    excerpt: "Cập nhật chuyên sâu từ Cẩm nang ACR BI-RADS® v2025 về hai dấu hiệu nhũ ảnh then chốt: Biến dạng cấu trúc (Architectural Distortion) và Các dạng bất đối xứng (Asymmetries). Phân tích vai trò của nhũ ảnh 3D cắt lớp (DBT), nhũ ảnh tổng hợp (SM), sự thay đổi quan trọng trong bảng từ vựng (loại bỏ thuật ngữ Developing Asymmetry) và chiến lược chỉ định sinh thiết chuẩn xác.",
    content: [
      "Biến dạng cấu trúc (Architectural Distortion) được đặc trưng bởi các đường thẳng mỏng, tăng đậm độ hoặc thấu quang tỏa hình nan hoa từ một điểm, hoặc co rút khu trú dọc bờ nhu mô vú mà không thấy khối u rõ ràng.",
      "Theo ACR BI-RADS® v2025, biến dạng cấu trúc phát hiện trên nhũ ảnh 3D (DBT) có giá trị dự báo dương tính (PPV) ác tính vừa phải, và cần được chỉ định sinh thiết mô học ngay cả khi siêu âm không tìm thấy tổn thương tương ứng.",
      "Đối với các dạng bất đối xứng (Asymmetries), BI-RADS® v2025 đã chính thức loại bỏ thuật ngữ 'Developing Asymmetry' khỏi bảng danh mục mô tả, đồng thời đưa ra các tiêu chuẩn rõ ràng để tiếp cận Bất đối xứng toàn thể (Global Asymmetry) và Bất đối xứng một bình diện (Asymmetry)."
    ],
    htmlContent: `
      <div class="toc-box">
        <h4 class="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Mục Lục Bài Giảng</h4>
        <ul class="text-xs space-y-1.5 text-blue-700">
          <li><a href="#phan-1-tong-quan" class="hover:underline">1. Giới thiệu tổng quan & Ý nghĩa lâm sàng</a></li>
          <li><a href="#phan-2-bien-dang-cau-truc" class="hover:underline">2. Biến dạng cấu trúc (Architectural Distortion)</a></li>
          <li><a href="#phan-3-cac-ca-bien-dang-cau-truc" class="hover:underline">3. Ca bệnh minh họa: Biến dạng cấu trúc (Hình 1 - Hình 7)</a></li>
          <li><a href="#phan-4-tong-quan-bat-doi-xung" class="hover:underline">4. Các dạng bất đối xứng (Asymmetries) & Điểm mới BI-RADS® v2025</a></li>
          <li><a href="#phan-5-bat-doi-xung-toan-the" class="hover:underline">5. Bất đối xứng toàn thể (Global Asymmetry) & Ca minh họa</a></li>
          <li><a href="#phan-6-bat-doi-xung-mot-binh-dien" class="hover:underline">6. Bất đối xứng một bình diện (Asymmetry) & Ca minh họa</a></li>
          <li><a href="#phan-7-bang-so-sanh" class="hover:underline">7. Bảng tổng hợp so sánh & Lưu đồ xử trí</a></li>
          <li><a href="#phan-8-key-points" class="hover:underline">8. Điểm cốt lõi cần nhớ (Key Points) & Cạm bẫy chẩn đoán (Pitfalls)</a></li>
        </ul>
      </div>

      <h2 id="phan-1-tong-quan">1. Giới thiệu tổng quan & Ý nghĩa lâm sàng</h2>
      <p>
        Trong chẩn đoán hình ảnh tuyến vú, bên cạnh các khối u dạng nốt (masses) và vi vôi hóa nghi ngờ (calcifications), <strong>Biến dạng cấu trúc (Architectural Distortion)</strong> và <strong>Các dạng bất đối xứng (Asymmetries)</strong> là hai nhóm dấu hiệu nhũ ảnh cực kỳ quan trọng nhưng cũng thường mang lại nhiều thách thức phân tích nhất cho các bác sĩ chẩn đoán hình ảnh.
      </p>
      <p>
        Ấn bản cập nhật mới nhất <strong>ACR BI-RADS® v2025 Manual</strong> của Hiệp hội Điện quang Hoa Kỳ (American College of Radiology) đã hoàn thiện và tinh chỉnh sâu sắc các định nghĩa, quy trình đối chiếu đa phương tiện (đặc biệt là nhũ ảnh 3D cắt lớp - <em>Digital Breast Tomosynthesis - DBT</em> và nhũ ảnh tổng hợp - <em>Synthesized Mammography - SM</em>), đồng thời cập nhật những thay đổi mang tính hệ thống trong bảng từ vựng mô tả tổn thương tuyến vú.
      </p>

      <div class="key-points">
        <strong>Điểm đổi mới then chốt trong BI-RADS® v2025:</strong>
        Thuật ngữ mô tả <em>"Bất đối xứng tiến triển" (Developing Asymmetry)</em> đã chính thức được <strong>loại bỏ</strong> khỏi bảng từ vựng mô tả của BI-RADS, nhằm thống nhất nguyên tắc: không lồng ghép yếu tố biến đổi theo thời gian vào thuật ngữ định danh hình thái tổn thương ban đầu. Tuy nhiên, ý nghĩa cảnh giác ác tính của một bất đối xứng khu trú đang to lên hoặc tăng đậm độ vẫn được nhấn mạnh ở mức cao nhất.
      </div>

      <h2 id="phan-2-bien-dang-cau-truc">2. Biến dạng cấu trúc (Architectural Distortion)</h2>
      <p>
        <strong>Định nghĩa:</strong> Biến dạng cấu trúc được đặc trưng bởi các đường thẳng, mảnh, tăng đậm độ và/hoặc thấu quang tỏa hình nan hoa từ một điểm (radiating from a point), và/hoặc co rút khu trú (focal retraction), kéo thẳng bất thường dọc theo đường bờ của nhu mô tuyến vú mà <strong>không quan sát thấy khối u rõ rệt</strong> kèm theo.
      </p>
      <ul>
        <li><strong>Hình thái biểu hiện:</strong> Biến dạng cấu trúc có thể là tổn thương nguyên phát độc lập (primary finding), hoặc là dấu hiệu thứ phát đi kèm với một vùng bất đối xứng, bất đối xứng khu trú hoặc vôi hóa.</li>
        <li><strong>Ưu thế vượt trội của DBT và SM:</strong> Biến dạng cấu trúc thường hiển thị rõ ràng, dễ nhận biết hơn hẳn trên nhũ ảnh 3D cắt lớp (DBT) hoặc nhũ ảnh tổng hợp (SM) so với nhũ ảnh kỹ thuật số 2D thông thường (DM). Tổn thương có thể xuất hiện rất kín đáo, đôi khi chỉ quan sát thấy được trên vài lát cắt DBT mỏng hoặc duy nhất trên một hướng chụp.</li>
      </ul>

      <h3>Đánh giá nguy cơ ác tính & Chỉ định sinh thiết</h3>
      <p>
        Mặc dù biến dạng cấu trúc được phát hiện với tần suất cao hơn đáng kể nhờ công nghệ DBT so với DM, nhưng <strong>giá trị dự báo dương tính (PPV) trên DBT thấp hơn so với DM</strong> (do DBT phát hiện thêm nhiều tổn thương lành tính như sẹo xơ, thay đổi sau mổ) [27–29]. Dù vậy, các bằng chứng y học chứng minh rằng: <em>Biến dạng cấu trúc chỉ quan sát thấy được trên DBT vẫn duy trì mức độ dự báo ác tính trung bình (moderately predictive of malignancy, ~10% – 30%)</em> [28–30].
      </p>

      <div class="key-points">
        <strong>Nguyên tắc xử trí vàng:</strong>
        Khi không có tiền sử chấn thương hoặc phẫu thuật vú trước đó, việc <strong>khuyến cáo chẩn đoán mô học (sinh thiết có định vị nhũ ảnh/DBT) là hoàn toàn phù hợp và bắt buộc</strong>, ngay cả khi khảo sát siêu âm đối chiếu không tìm thấy tổn thương tương ứng (no ultrasound correlate).
      </div>

      <h2 id="phan-3-cac-ca-bien-dang-cau-truc">3. Ca bệnh minh họa: Biến dạng cấu trúc (Hình 1 - Hình 7)</h2>

      <figure>
        <img src="/posts/birads-v2025/fig1_arch_distortion_dbt_idc.jpg" alt="Biến dạng cấu trúc trên DBT do Ung thư biểu mô thể ống xâm nhập" />
        <figcaption><strong>Hình 1 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Vùng co kéo cấu trúc tỏa nan hoa sắc nét trên lát cắt DBT. Kết quả giải phẫu bệnh: Ung thư biểu mô tuyến vú thể ống xâm nhập (Invasive ductal carcinoma - IDC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig2_arch_distortion_sclerosing_adenosis.jpg" alt="Biến dạng cấu trúc do Bệnh tuyến xơ cứng" />
        <figcaption><strong>Hình 2 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Hình ảnh co kéo mô tuyến vú ngoại vi. Kết quả giải phẫu bệnh sau sinh thiết: Bệnh tuyến xơ cứng (Sclerosing adenosis - tổn thương tăng sinh lành tính).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig3_arch_distortion_idc.jpg" alt="Biến dạng cấu trúc nan hoa trên DBT - IDC" />
        <figcaption><strong>Hình 3 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Các dải co kéo dạng sao tỏa ra từ một tâm nhỏ thấu quang. Kết quả giải phẫu bệnh: Ung thư biểu mô tuyến vú thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig4_arch_distortion_dense_tissue.jpg" alt="Biến dạng cấu trúc kín đáo trong mô vú đặc trên DBT" />
        <figcaption><strong>Hình 4 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Một tổn thương biến dạng cấu trúc rất kín đáo (mũi tên) ẩn bên trong nền mô xơ tuyến cực kỳ đặc, khẳng định vai trò vượt trội của DBT trong việc xóa mờ hiện tượng chồng ảnh. Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (IDC).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig5_arch_distortion_sm_idc.jpg" alt="Biến dạng cấu trúc trên nhũ ảnh tổng hợp SM" />
        <figcaption><strong>Hình 5 – BIẾN DẠNG CẤU TRÚC (SM):</strong> Dấu hiệu co kéo rõ nét (mũi tên) được tái tạo trên nhũ ảnh tổng hợp 2D (SM). Giải phẫu bệnh: Ung thư biểu mô thể ống xâm nhập (Invasive ductal carcinoma).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig6_arch_distortion_postsurgical.jpg" alt="Biến dạng cấu trúc do sẹo sau phẫu thuật vú" />
        <figcaption><strong>Hình 6 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Hình ảnh biến dạng co kéo rộng tỏa nan hoa ở bệnh nhân có tiền sử phẫu thuật vú trước đó. Giải phẫu bệnh: Thay đổi sau phẫu thuật (Postsurgical changes / Scarring).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig7_arch_distortion_radial_scar.jpg" alt="Biến dạng cấu trúc sẹo hình sao trên DBT" />
        <figcaption><strong>Hình 7 – BIẾN DẠNG CẤU TRÚC (DBT):</strong> Mặc dù hình thái tổn thương rất nghi ngờ ác tính trên nhũ ảnh, việc sinh thiết lấy mẫu qua da đầy đủ và đối chiếu X-quang – giải phẫu bệnh chặt chẽ đã xác nhận bản chất lành tính: <em>Sẹo hình sao (Radial scar)</em>.</figcaption>
      </figure>

      <h2 id="phan-4-tong-quan-bat-doi-xung">4. Các dạng bất đối xứng (Asymmetries) & Điểm mới BI-RADS® v2025</h2>
      <p>
        <strong>Định nghĩa cốt lõi:</strong> Các dạng bất đối xứng là những vùng mô khu trú ở một bên vú, được phát hiện do <strong>không có vùng mô tương ứng ở vị trí đối xứng gương (mirror image location)</strong> tại vú đối bên.
      </p>
      <ul>
        <li><strong>Đặc điểm nhận diện:</strong> Thường có bờ lõm (concave contours) và bên trong thường có mỡ xen kẽ (interspersed with fat).</li>
        <li><strong>Tiêu chuẩn phân biệt với Khối u (Mass):</strong> Bất đối xứng <em>không thỏa mãn định nghĩa của một khối u</em> (khối u bắt buộc phải có một trung tâm cản quang đậm đặc và đường bờ ít nhất phải có một phần cong lồi ra ngoài).</li>
      </ul>

      <p>Hệ thống ACR BI-RADS® phân chia bất đối xứng thành 3 phân loại chính:</p>
      <ol>
        <li><strong>Bất đối xứng toàn thể (Global Asymmetry)</strong></li>
        <li><strong>Bất đối xứng một bình diện (Asymmetry)</strong></li>
        <li><strong>Bất đối xứng khu trú (Focal Asymmetry)</strong></li>
      </ol>

      <h2 id="phan-5-bat-doi-xung-toan-the">5. Bất đối xứng toàn thể (Global Asymmetry) & Ca minh họa</h2>
      <p>
        <strong>Định nghĩa:</strong> Bất đối xứng toàn thể là vùng mô tuyến vú lan rộng trên một phần đáng kể của tuyến vú (<strong>ít nhất chiếm một góc phần tư - ≥ 1 quadrant</strong>) và không đối xứng với vùng tương ứng ở vú đối bên.
      </p>
      <p>
        Tổn thương này <em>không đi kèm khối u, không có biến dạng cấu trúc và không có vi vôi hóa nghi ngờ</em>. Trong đại đa số trường hợp, bất đối xứng toàn thể đại diện cho sự biến đổi giải phẫu bình thường nhưng không cân xứng của mô xơ tuyến bẩm sinh, thường được ghi nhận lần đầu tiên ngay trên phim nhũ ảnh nền (baseline mammogram).
      </p>

      <div class="pitfalls">
        <strong>Cạm bẫy chẩn đoán (Pitfall):</strong>
        Khi bất đối xứng toàn thể <em>mới xuất hiện, đang to lên theo thời gian hoặc đi kèm triệu chứng lâm sàng</em> (như sờ thấy mảng cứng bất thường, dày da, co rút núm vú), <strong>tuyệt đối không được xem là lành tính</strong>! Một số ung thư biểu mô tuyến vú xâm nhập diện rộng (như ung thư biểu mô tiểu thùy xâm nhập - ILC hoặc ung thư dạng viêm) có thể biểu hiện dưới dạng một vùng mô bất đối xứng toàn thể khổng lồ.
      </div>

      <figure>
        <img src="/posts/birads-v2025/fig8_global_asymmetry_benign.jpg" alt="Bất đối xứng toàn thể lành tính ổn định nhiều năm" />
        <figcaption><strong>Hình 8 (Page 112 - Figure 1) – BẤT ĐỐI XỨNG TOÀN THỂ LÀNH TÍNH:</strong> Trên hai thế chụp (A) MLO và (B) CC nhũ ảnh tổng hợp (SM). Nhu mô vú trái phát triển nhiều hơn hẳn vú phải nhưng bờ lõm, xen kẽ mỡ đồng nhất, không kèm co kéo hay vi vôi hóa. Tổn thương hoàn toàn ổn định qua nhiều năm theo dõi.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig9_global_asymmetry_locally_advanced_idc.jpg" alt="Bất đối xứng toàn thể vú trái ác tính kèm dày da" />
        <figcaption><strong>Hình 9 (Page 113 - Figure 2) – BẤT ĐỐI XỨNG TOÀN THỂ ÁC TÍNH (Vú trái trên DM):</strong> Chú ý dấu hiệu dày da lan tỏa ở vú trái. Tổn thương này sờ thấy được trên lâm sàng (được đánh dấu bằng miếng dán da hình tam giác). Mặc dù đa số bất đối xứng toàn thể là lành tính, nhưng khi kết hợp với triệu chứng lâm sàng hoặc hình ảnh nghi ngờ phải tiếp cận hết sức thận trọng. Giải phẫu bệnh: Ung thư biểu mô tuyến vú thể ống xâm nhập giai đoạn tiến triển tại chỗ (Locally advanced IDC).</figcaption>
      </figure>

      <h2 id="phan-6-bat-doi-xung-mot-binh-dien">6. Bất đối xứng một bình diện (Asymmetry) & Ca minh họa</h2>
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
        <img src="/posts/birads-v2025/fig10_asymmetry_cc_view_stable.jpg" alt="Bất đối xứng chỉ thấy trên thế CC ổn định lành tính" />
        <figcaption><strong>Hình 10 (Page 114 - Figure 1) – BẤT ĐỐI XỨNG MỘT BÌNH DIỆN:</strong> (A) Thế MLO và (B) Thế CC trên nhũ ảnh tổng hợp (SM). Vùng mô đậm đặc chỉ nhìn thấy trên hướng chụp CC, hoàn toàn không thấy trên MLO và không có mô tương ứng ở vú đối bên. Theo dõi ổn định qua nhiều năm, lành tính.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig11_asymmetry_summation_artifact.jpg" alt="Bất đối xứng do xảo ảnh chồng hình biến mất sau 1 năm" />
        <figcaption><strong>Hình 11 (Page 115 - Figure 2) – XẢO ẢNH CHỒNG HÌNH (SUMMATION ARTIFACT):</strong> Vùng mô đậm ở góc ngoài vú phải chỉ thấy trên thế CC (hình bên phải). Nghĩ nhiều đến xảo ảnh cộng dồn. Kiểm tra nhũ ảnh tầm soát 1 năm sau hoàn toàn biến mất.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig12_asymmetry_triangular_superimposed.jpg" alt="Bất đối xứng hình tam giác do chồng mô" />
        <figcaption><strong>Hình 12 (Page 115 - Figure 3) – BẤT ĐỐI XỨNG DẠNG TAM GIÁC (SM):</strong> Vùng mô hình tam giác rõ rệt (mũi tên), tuy nhiên bờ lõm và có mỡ xen kẽ, chỉ thấy trên một hướng chụp nên không thỏa tiêu chuẩn khối u. Khảo sát chẩn đoán bổ sung xác nhận đây là hiện tượng chồng lấp mô tuyến bình thường.</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig13_asymmetry_pash.jpg" alt="Bất đối xứng trên SM - PASH" />
        <figcaption><strong>Hình 13 (Page 116 - Figure 4) – BẤT ĐỐI XỨNG TRÊN SM:</strong> Vùng bất đối xứng khu trú ngoại vi. Kết quả sinh thiết giải phẫu bệnh: Tăng sản mô đệm giả mạch (Pseudoangiomatous stromal hyperplasia - PASH).</figcaption>
      </figure>

      <figure>
        <img src="/posts/birads-v2025/fig14_asymmetry_dm_dbt_persisting_idc.jpg" alt="Bất đối xứng tồn tại dai dẳng trên DBT - Ung thư biểu mô thể ống IDC" />
        <figcaption><strong>Hình 14 (Page 116 - Figure 5) – BẤT ĐỐI XỨNG TỒN TẠI TRÊN DBT:</strong> Ban đầu chỉ thấy trên phim tầm soát 2D (A), nhưng trên lát cắt DBT (B) tổn thương thể hiện rõ thể tích và tồn tại dai dẳng khi chụp chẩn đoán bổ sung. Khuyến cáo sinh thiết. Giải phẫu bệnh: Ung thư biểu mô tuyến vú thể ống xâm nhập (Invasive ductal carcinoma - IDC).</figcaption>
      </figure>

      <h2 id="phan-7-bang-so-sanh">7. Bảng tổng hợp so sánh & Lưu đồ xử trí</h2>
      <div class="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Đặc Điểm Nhũ Ảnh</th>
              <th>Biến Dạng Cấu Trúc (Architectural Distortion)</th>
              <th>Bất Đối Xứng Toàn Thể (Global Asymmetry)</th>
              <th>Bất Đối Xứng Một Bình Diện (Asymmetry)</th>
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
              <td>Biến thể giải phẫu bình thường của mô xơ tuyến. Hiếm gặp hơn: Ung thư biểu mô xâm nhập lan tỏa.</td>
              <td>Xảo ảnh chồng mô (Summation artifact, chiếm đa số), Khối u hoặc Bất đối xứng khu trú bị che khuất.</td>
            </tr>
            <tr>
              <td><strong>Vai trò của DBT</strong></td>
              <td>Độ nhạy phát hiện vượt trội so với DM; khử nhiễu chồng ảnh; bộc lộ tổn thương trong mô vú đặc.</td>
              <td>Đánh giá cấu trúc bên trong xem có kèm biến dạng kín đáo hoặc khối u ẩn hay không.</td>
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
          <li>Biến dạng cấu trúc trên DBT có PPV thấp hơn DM nhưng vẫn đạt mức dự báo ác tính trung bình (10–30%) và bắt buộc phải sinh thiết mô học nếu không có sẹo mổ cũ.</li>
          <li>Đừng bao giờ từ bỏ sinh thiết một biến dạng cấu trúc chỉ vì siêu âm tuyến vú trả về kết quả âm tính (no ultrasound correlate). Cần chuyển sang sinh thiết dưới hướng dẫn của nhũ ảnh hoặc DBT (stereotactic/tomosynthesis-guided biopsy).</li>
          <li>BI-RADS® v2025 đã xóa bỏ thuật ngữ "Developing Asymmetry" để chuẩn hóa phân loại hình thái. Bất kỳ bất đối xứng khu trú nào to lên hoặc tăng đậm độ đều là chỉ dấu nguy cơ cao cần chụp chẩn đoán toàn diện.</li>
          <li>Nhũ ảnh 3D (DBT) là công cụ then chốt giúp phân biệt tổn thương thực thể với các cấu trúc giả biến dạng (pseudo-distortion) do chồng lấp mô.</li>
        </ul>
      </div>

      <div class="pitfalls">
        <h4 class="font-bold text-rose-900 mb-1">Diagnostic Pitfalls (Cạm bẫy lâm sàng):</h4>
        <ul>
          <li><strong>Giả biến dạng (Pseudo-distortion):</strong> Do các dải xơ tuyến ở các độ sâu khác nhau vô tình tạo hiệu ứng giao nhau trên phim 2D. Khắc phục: Lăn chuột kiểm tra từng lát cắt mỏng DBT để tách lớp.</li>
          <li><strong>Bỏ sót ung thư biểu mô tiểu thùy (ILC):</strong> ILC thường không tạo thành khối rõ rệt mà chỉ biểu hiện dưới dạng co kéo cấu trúc kín đáo hoặc bất đối xứng toàn thể kèm dày da.</li>
          <li><strong>Xem thường bất đối xứng một bình diện:</strong> Dù đa số là lành tính do chồng ảnh, nhưng nếu tổn thương xuất hiện liên tục trên nhiều lát cắt DBT cùng vị trí, đó là tổn thương có thể tích thực sự và cần triệu tập làm chẩn đoán chuyên sâu ngay lập tức.</li>
        </ul>
      </div>
    `,
    clinicalCase: {
      history: "Tầm soát định kỳ trên bệnh nhân nữ và phân tích các dạng bất thường cấu trúc trên nhũ ảnh kỹ thuật số (DM), nhũ ảnh tổng hợp (SM) và nhũ ảnh 3D cắt lớp (DBT) theo ACR BI-RADS® v2025.",
      findings: [
        "Biến dạng cấu trúc (Architectural distortion): Co kéo nan hoa tỏa từ một tâm, có thể quan sát kín đáo trên DBT ngay cả trong nền mô vú rất đặc (Hình 1 - Hình 7).",
        "Bất đối xứng toàn thể (Global asymmetry): Mô tuyến rộng ≥ 1 góc phần tư, không kèm khối hay vôi hóa, cần cảnh giác khi có dày da hoặc khối sờ thấy (Hình 8, 9).",
        "Bất đối xứng một bình diện (Asymmetry): Chỉ thấy trên một hướng chụp, phần lớn do xảo ảnh chồng hình (summation artifact), cần DBT hoặc chụp ép khu trú để loại trừ tổn thương thực thể (Hình 10 - 14)."
      ],
      diagnosis: "Bộ tiêu chuẩn chẩn đoán Biến dạng cấu trúc & Các dạng bất đối xứng tuyến vú - Cẩm nang ACR BI-RADS® v2025",
      takeaways: [
        "Biến dạng cấu trúc không có tiền sử phẫu thuật phải được khuyến cáo sinh thiết mô học, ngay cả khi siêu âm không thấy tổn thương tương ứng.",
        "ACR BI-RADS® v2025 chính thức loại bỏ thuật ngữ 'Developing Asymmetry' khỏi bảng danh mục mô tả.",
        "DBT và SM nâng cao độ nhạy phát hiện biến dạng cấu trúc và giải quyết triệt để các trường hợp giả tổn thương do chồng hình."
      ]
    },
    views: 1250,
    readTime: "12 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 107-116)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "DBT", "Biến dạng cấu trúc", "Bất đối xứng", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
  }
];
