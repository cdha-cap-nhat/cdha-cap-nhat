import { Post } from "@/types";

export const POSTS: Post[] = [
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
        Tổn thương này <em>không đi kèm khối u, không có xáo trộn cấu trúc và không có vi vôi hóa nghi ngờ</em>. Trong đại đa số trường hợp, bất đối xứng toàn thể đại diện cho sự biến đổi giải phẫu bình thường nhưng không cân xứng của mô xơ tuyến bẩm sinh, thường được ghi nhận lần đầu tiên ngay trên phim nhũ ảnh nền (baseline mammogram).
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
          <li><strong>Giả xáo trộn cấu trúc (Pseudo-distortion):</strong> Do các dải xơ tuyến ở các độ sâu khác nhau vô tình tạo hiệu ứng giao nhau trên phim 2D. Khắc phục: Lăn chuột kiểm tra từng lát cắt mỏng DBT để tách lớp.</li>
          <li><strong>Bỏ sót ung thư biểu mô tiểu thùy (ILC):</strong> ILC thường không tạo thành khối rõ rệt mà chỉ biểu hiện dưới dạng co kéo cấu trúc kín đáo hoặc bất đối xứng toàn thể kèm dày da.</li>
          <li><strong>Xem thường bất đối xứng một bình diện:</strong> Dù đa số là lành tính do chồng ảnh, nhưng nếu tổn thương xuất hiện liên tục trên nhiều lát cắt DBT cùng vị trí, đó là tổn thương có thể tích thực sự và cần triệu tập làm chẩn đoán chuyên sâu ngay lập tức.</li>
        </ul>
      </div>
    `,
    clinicalCase: {
      history: "Tầm soát định kỳ trên bệnh nhân nữ và phân tích các dạng bất thường cấu trúc trên nhũ ảnh kỹ thuật số (DM), nhũ ảnh tổng hợp (SM) và nhũ ảnh 3D cắt lớp (DBT) theo ACR BI-RADS® v2025.",
      findings: [
        "Xáo trộn cấu trúc (Architectural distortion): Co kéo nan hoa tỏa từ một tâm, có thể quan sát kín đáo trên DBT ngay cả trong nền mô vú rất đặc (Hình 1 - Hình 7).",
        "Bất đối xứng toàn thể (Global asymmetry): Mô tuyến rộng ≥ 1 góc phần tư, không kèm khối hay vôi hóa, cần cảnh giác khi có dày da hoặc khối sờ thấy (Hình 8, 9).",
        "Bất đối xứng một bình diện (Asymmetry): Chỉ thấy trên một hướng chụp, phần lớn do xảo ảnh chồng hình (summation artifact), cần DBT hoặc chụp ép khu trú để loại trừ tổn thương thực thể (Hình 10 - 14)."
      ],
      diagnosis: "Bộ tiêu chuẩn chẩn đoán Xáo trộn cấu trúc & Các dạng bất đối xứng tuyến vú - Cẩm nang ACR BI-RADS® v2025",
      takeaways: [
        "Xáo trộn cấu trúc không có tiền sử phẫu thuật phải được khuyến cáo sinh thiết mô học, ngay cả khi siêu âm không thấy tổn thương tương ứng.",
        "ACR BI-RADS® v2025 chính thức loại bỏ thuật ngữ 'Developing Asymmetry' khỏi bảng danh mục mô tả.",
        "DBT và SM nâng cao độ nhạy phát hiện xáo trộn cấu trúc và giải quyết triệt để các trường hợp giả tổn thương do chồng hình."
      ]
    },
    views: 1250,
    readTime: "12 phút đọc",
    source: "ACR BI-RADS® Mammography v2025 Manual (pp. 107-116)",
    tags: ["BI-RADS 2025", "Nhũ ảnh", "DBT", "Xáo trộn cấu trúc", "Bất đối xứng", "Ung thư vú", "Chẩn đoán hình ảnh vú"]
  }
];
