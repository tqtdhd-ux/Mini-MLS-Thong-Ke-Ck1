const LESSONS = [
  {
    id: "chapter-01",
    title: "Chương 1. Thiết kế nghiên cứu và chọn mẫu",
    outcome: "Xác định quần thể, mẫu, cỡ mẫu và chiến lược chọn mẫu trong nghiên cứu y dược.",
    practice: "Đọc phiếu khảo sát và nhận diện biến nền cần mã hóa.",
  },
  {
    id: "chapter-02",
    title: "Chương 2. Phân loại biến số, mã hóa và nhập liệu",
    outcome: "Phân biệt biến định tính, định lượng, thang đo và quy tắc nhập liệu SPSS/Excel.",
    practice: "Mã hóa các biến nhân khẩu học và thang đo hài lòng.",
  },
  {
    id: "chapter-03",
    title: "Chương 3. Làm sạch dữ liệu trong nghiên cứu y dược",
    outcome: "Phát hiện dữ liệu thiếu, ngoại lai, lỗi mã hóa và xây dựng quy trình làm sạch.",
    practice: "Kiểm tra file DATA.csv trước phân tích.",
  },
  {
    id: "chapter-04",
    title: "Chương 4. Xây dựng đề tài và bảng khảo sát",
    outcome: "Liên kết mục tiêu nghiên cứu, giả thuyết, thang đo và cấu trúc bảng hỏi.",
    practice: "Đối chiếu phiếu khảo sát với bộ biến trong dữ liệu.",
  },
  {
    id: "chapter-05",
    title: "Chương 5. Thống kê mô tả",
    outcome: "Tóm tắt dữ liệu bằng tần số, tỷ lệ, trung bình, độ lệch chuẩn và bảng phù hợp.",
    practice: "Mô tả đặc điểm mẫu và điểm hài lòng.",
  },
  {
    id: "chapter-06",
    title: "Chương 6. Kiểm định Cronbach's Alpha",
    outcome: "Đánh giá độ tin cậy thang đo và quyết định giữ/loại biến quan sát.",
    practice: "Kiểm định các nhóm HQ, TD, QL, TT, DV, CP, SHL.",
  },
  {
    id: "chapter-07",
    title: "Chương 7. Phân tích nhân tố khám phá EFA",
    outcome: "Đọc KMO, Bartlett, tải nhân tố và phương sai trích trong EFA.",
    practice: "Xác định cấu trúc thang đo từ bộ dữ liệu khảo sát.",
  },
  {
    id: "chapter-08",
    title: "Chương 8. Tương quan Pearson",
    outcome: "Diễn giải hệ số tương quan, ý nghĩa thống kê và cảnh báo suy luận nhân quả.",
    practice: "Phân tích tương quan giữa các nhân tố và hài lòng.",
  },
  {
    id: "chapter-09",
    title: "Chương 9. Hồi quy tuyến tính bội",
    outcome: "Xây dựng mô hình dự báo hài lòng và đọc hệ số Beta, R2, VIF.",
    practice: "Chạy mô hình SHL theo HQ, TD, QL, TT, DV, CP.",
  },
  {
    id: "chapter-10",
    title: "Chương 10. T-test và ANOVA",
    outcome: "So sánh trung bình giữa hai hoặc nhiều nhóm và báo cáo kết quả.",
    practice: "Kiểm định khác biệt hài lòng theo nhóm tuổi, trình độ, phác đồ.",
  },
  {
    id: "chapter-11",
    title: "Chương 11. Hồi quy Logistic nhị phân",
    outcome: "Mã hóa biến phụ thuộc nhị phân và diễn giải Odds Ratio trong nghiên cứu y dược.",
    practice: "Dự báo SHL_NhiPhan bằng các nhân tố độc lập.",
  },
].map((lesson, index) => ({
  ...lesson,
  number: index + 1,
  href: `public/lessons/${lesson.id}.html`,
  image: `public/assets/images/${lesson.id}.png`,
  audio: `public/assets/audio/${lesson.id}.m4a`,
}));

const THESIS_TEMPLATES = {
  "chapter-01": [
    "Nghien cuu duoc thiet ke theo phuong phap ..., doi tuong nghien cuu la ... tai ... trong thoi gian ... .",
    "Co mau toi thieu duoc xac dinh dua tren ..., sau khi du phong ...%, so mau can thu thap la ... .",
  ],
  "chapter-02": [
    "Cac bien nghien cuu duoc ma hoa theo codebook, trong do bien dinh tinh duoc gan nhan gia tri va bien dinh luong duoc khai bao dang Scale.",
    "Du lieu duoc nhap vao SPSS theo nguyen tac moi dong la mot doi tuong nghien cuu, moi cot la mot bien.",
  ],
  "chapter-03": [
    "Du lieu duoc kiem tra gia tri ngoai pham vi, du lieu thieu va truong hop trung lap truoc khi phan tich.",
    "Cac sai lech nhap lieu duoc doi chieu voi phieu goc/codebook va xu ly theo nguyen tac da thong nhat.",
  ],
  "chapter-04": [
    "Bo cau hoi duoc xay dung dua tren muc tieu nghien cuu va cac nhom yeu to ly thuyet lien quan den ... .",
    "Cac muc hoi duoc sap xep theo tung nhom thang do nham dam bao tinh ro rang va thuan tien khi ma hoa du lieu.",
  ],
  "chapter-05": [
    "Dac diem chung cua doi tuong nghien cuu duoc mo ta bang tan so, ty le phan tram doi voi bien dinh tinh va trung binh, do lech chuan doi voi bien dinh luong.",
    "Cac ket qua mo ta cho thay ... la nhom chiem ty le cao nhat, phan anh dac diem mau nghien cuu tai dia ban ... .",
  ],
  "chapter-06": [
    "Do tin cay cua thang do duoc danh gia bang Cronbach's Alpha; cac bien co tuong quan bien-tong khong dat yeu cau duoc xem xet loai bo.",
    "Sau khi danh gia do tin cay, thang do ... dat yeu cau va duoc su dung cho phan tich nhan to tiep theo.",
  ],
  "chapter-07": [
    "Phan tich EFA cho thay du lieu phu hop de rut trich nhan to voi KMO = ... va kiem dinh Bartlett co y nghia thong ke.",
    "Cac bien quan sat hoi tu vao ... nhan to, giai thich ...% phuong sai cua bo du lieu.",
  ],
  "chapter-08": [
    "He so tuong quan Pearson cho thay ... co moi lien he ... voi ..., r = ..., p = ... .",
    "Ket qua nay chi phan anh moi lien quan tuyen tinh, khong du co so khang dinh quan he nhan qua.",
  ],
  "chapter-09": [
    "Mo hinh hoi quy tuyen tinh boi giai thich ...% su bien thien cua ..., R2 hieu chinh = ... .",
    "Yeu to ... co anh huong co y nghia thong ke den ..., Beta = ..., p = ..., sau khi kiem soat cac yeu to con lai.",
  ],
  "chapter-10": [
    "Ket qua kiem dinh cho thay diem trung binh ... khac biet/co khong khac biet co y nghia thong ke giua cac nhom ..., p = ... .",
    "Khi phan tich hau nghiem, su khac biet chu yeu nam giua nhom ... va nhom ... .",
  ],
  "chapter-11": [
    "Hoi quy Logistic nhi phan cho thay yeu to ... co lien quan den kha nang ..., OR = ..., KTC 95%: ..., p = ... .",
    "Mo hinh co do phu hop chap nhan duoc theo kiem dinh Hosmer-Lemeshow, p = ..., va ty le phan loai dung dat ...% .",
  ],
};

const QUIZZES = {
  "chapter-01": [
    { q: "Mục tiêu chính của chọn mẫu trong nghiên cứu y dược là gì?", a: ["Tăng cỡ mẫu bằng mọi cách", "Tạo mẫu đại diện cho quần thể nghiên cứu", "Loại bỏ toàn bộ sai số", "Thay thế thiết kế nghiên cứu"], correct: 1 },
    { q: "Đơn vị phân tích trong khảo sát hài lòng bệnh nhân thường là gì?", a: ["Bệnh viện", "Khoa phòng", "Từng bệnh nhân/người trả lời", "Toàn bộ phác đồ"], correct: 2 },
    { q: "Yếu tố nào cần xác định trước khi tính cỡ mẫu?", a: ["Mục tiêu nghiên cứu và biến chính", "Màu biểu đồ", "Tên file SPSS", "Số trang báo cáo"], correct: 0 },
    { q: "Chọn mẫu thuận tiện có hạn chế chính nào?", a: ["Luôn đại diện tốt nhất", "Dễ gây sai lệch chọn mẫu", "Không cần mô tả phương pháp", "Không dùng được dữ liệu định lượng"], correct: 1 },
    { q: "Trong báo cáo khoa học, phần chọn mẫu cần trình bày gì?", a: ["Chỉ ghi số mẫu", "Tiêu chuẩn chọn, loại trừ và phương pháp chọn mẫu", "Chỉ ghi phần mềm", "Chỉ ghi thời gian nhập liệu"], correct: 1 },
  ],
  "chapter-02": [
    { q: "Giới tính là loại biến nào?", a: ["Định lượng liên tục", "Định tính danh định", "Định lượng rời rạc", "Thời gian sống"], correct: 1 },
    { q: "Thang Likert 1-5 thường được xử lý như loại dữ liệu nào trong phân tích thang đo?", a: ["Chuỗi ký tự", "Biến thứ bậc/điểm thang đo", "Ngày tháng", "Biến nhị phân bắt buộc"], correct: 1 },
    { q: "Mã hóa biến cần đảm bảo nguyên tắc nào?", a: ["Không cần codebook", "Mã nhất quán và có từ điển biến", "Đổi mã sau mỗi lần chạy", "Chỉ dùng chữ tự do"], correct: 1 },
    { q: "Biến SHL_NhiPhan phù hợp với phân tích nào?", a: ["Hồi quy Logistic nhị phân", "Chỉ vẽ biểu đồ tròn", "Không thể phân tích", "EFA bắt buộc"], correct: 0 },
    { q: "Trong SPSS, mỗi hàng dữ liệu khảo sát thường biểu diễn gì?", a: ["Một biến", "Một người trả lời/quan sát", "Một câu hỏi trong codebook", "Một lệnh phân tích"], correct: 1 },
  ],
  "chapter-03": [
    { q: "Bước đầu khi làm sạch dữ liệu là gì?", a: ["Chạy hồi quy ngay", "Kiểm tra mã hóa, thiếu dữ liệu và phạm vi giá trị", "Xóa tất cả dữ liệu thiếu", "Đổi tên toàn bộ biến"], correct: 1 },
    { q: "Giá trị 9 trong thang Likert 1-5 thường gợi ý điều gì?", a: ["Giá trị hợp lệ", "Lỗi nhập hoặc mã thiếu cần kiểm tra", "Điểm hài lòng cao nhất", "Biến định lượng liên tục"], correct: 1 },
    { q: "Ngoại lai nên được xử lý như thế nào?", a: ["Luôn xóa", "Kiểm tra nguyên nhân và quyết định có cơ sở", "Luôn giữ", "Đổi thành trung bình không cần giải thích"], correct: 1 },
    { q: "Codebook giúp gì trong làm sạch dữ liệu?", a: ["Định nghĩa tên biến, nhãn và mã hợp lệ", "Tăng tốc internet", "Tự viết báo cáo", "Thay thế dữ liệu gốc"], correct: 0 },
    { q: "Dữ liệu thiếu cần được báo cáo vì sao?", a: ["Ảnh hưởng độ tin cậy và khả năng suy luận", "Chỉ để trang trí", "Không ảnh hưởng phân tích", "Vì SPSS bắt buộc"], correct: 0 },
  ],
  "chapter-04": [
    { q: "Bảng khảo sát tốt cần liên kết trực tiếp với yếu tố nào?", a: ["Mục tiêu và giả thuyết nghiên cứu", "Màu logo", "Tên người nhập liệu", "Dung lượng file"], correct: 0 },
    { q: "Một thang đo thường gồm gì?", a: ["Một biến duy nhất bắt buộc", "Nhiều biến quan sát cùng đo một khái niệm", "Chỉ biến giới tính", "Chỉ câu hỏi mở"], correct: 1 },
    { q: "Câu hỏi khảo sát nên tránh điều gì?", a: ["Rõ nghĩa", "Một ý trong một câu", "Câu hỏi dẫn dắt hoặc hai ý trong một câu", "Thang trả lời nhất quán"], correct: 2 },
    { q: "Phiếu khảo sát cần được thử nghiệm trước vì sao?", a: ["Để phát hiện câu khó hiểu và lỗi cấu trúc", "Để tăng số trang", "Để thay thế phân tích thống kê", "Không có lý do"], correct: 0 },
    { q: "Biến phụ thuộc trong nghiên cứu hài lòng thường là gì?", a: ["Mã phiếu", "Sự hài lòng", "Ngày nhập liệu", "Tên file"], correct: 1 },
  ],
  "chapter-05": [
    { q: "Biến định tính thường mô tả bằng chỉ số nào?", a: ["Tần số và tỷ lệ phần trăm", "Chỉ độ lệch chuẩn", "Chỉ hệ số Beta", "Odds Ratio"], correct: 0 },
    { q: "Biến định lượng phân phối gần chuẩn thường trình bày bằng gì?", a: ["Trung bình và độ lệch chuẩn", "Chỉ tần số", "Chỉ mã hóa", "Không cần mô tả"], correct: 0 },
    { q: "Mục tiêu của thống kê mô tả là gì?", a: ["Suy luận nhân quả", "Tóm tắt đặc điểm dữ liệu", "Thay thế thiết kế nghiên cứu", "Chứng minh mọi giả thuyết"], correct: 1 },
    { q: "Khi báo cáo tỷ lệ, cần kèm theo gì?", a: ["Mẫu số rõ ràng", "Màu nền", "Tên máy tính", "Không cần gì"], correct: 0 },
    { q: "Bẫy thường gặp trong thống kê mô tả là gì?", a: ["Dùng chỉ số không phù hợp loại biến", "Ghi rõ đơn vị đo", "Kiểm tra dữ liệu thiếu", "Có bảng mô tả"], correct: 0 },
  ],
  "chapter-06": [
    { q: "Cronbach's Alpha dùng để đánh giá gì?", a: ["Độ tin cậy nội tại của thang đo", "Khác biệt trung bình", "Tương quan từng cặp", "Tỷ lệ nam nữ"], correct: 0 },
    { q: "Corrected Item-Total Correlation thấp gợi ý điều gì?", a: ["Biến có thể không phù hợp với thang đo", "Biến luôn tốt", "Không cần xem xét", "Tăng cỡ mẫu"], correct: 0 },
    { q: "Alpha quá thấp thường cho thấy gì?", a: ["Các biến quan sát chưa nhất quán", "Mô hình Logistic tốt", "Dữ liệu không có biến định tính", "Không cần phân tích"], correct: 0 },
    { q: "Khi loại biến, cần dựa vào gì?", a: ["Chỉ cảm tính", "Tương quan biến-tổng, Alpha nếu loại biến và ý nghĩa nội dung", "Tên biến ngắn", "Vị trí cột"], correct: 1 },
    { q: "Cronbach's Alpha thường thực hiện trước bước nào?", a: ["EFA hoặc phân tích nhân tố", "Nhập liệu", "Thiết kế phiếu", "Mã hóa giới tính"], correct: 0 },
  ],
  "chapter-07": [
    { q: "EFA dùng để làm gì?", a: ["Khám phá cấu trúc nhân tố của thang đo", "So sánh hai trung bình", "Mã hóa dữ liệu", "Tạo mật khẩu"], correct: 0 },
    { q: "KMO phản ánh điều gì?", a: ["Mức độ phù hợp của dữ liệu cho EFA", "Tỷ lệ nữ", "Điểm quiz", "Số file tải về"], correct: 0 },
    { q: "Bartlett có ý nghĩa thống kê thường gợi ý gì?", a: ["Ma trận tương quan phù hợp để phân tích nhân tố", "Không có tương quan nào", "Không cần mẫu", "Biến phụ thuộc nhị phân"], correct: 0 },
    { q: "Factor loading thể hiện điều gì?", a: ["Mức liên hệ giữa biến quan sát và nhân tố", "Số người trả lời", "Tên nhóm tuổi", "Độ dài file"], correct: 0 },
    { q: "Sau EFA, cần xem xét gì ngoài con số?", a: ["Ý nghĩa nội dung của nhân tố", "Chỉ màu bảng", "Chỉ thứ tự cột", "Tên máy tính"], correct: 0 },
  ],
  "chapter-08": [
    { q: "Pearson đo lường điều gì?", a: ["Mức độ và chiều hướng liên hệ tuyến tính giữa hai biến", "Khác biệt tỷ lệ", "Độ tin cậy thang đo", "Tần số tuyệt đối"], correct: 0 },
    { q: "Hệ số r âm nghĩa là gì?", a: ["Hai biến có xu hướng biến thiên ngược chiều", "Không có dữ liệu", "Biến luôn sai", "Mẫu quá lớn"], correct: 0 },
    { q: "Tương quan có ý nghĩa thống kê có khẳng định nhân quả không?", a: ["Không, cần thiết kế và lập luận nhân quả", "Có, luôn khẳng định", "Chỉ khi r dương", "Chỉ khi có biểu đồ"], correct: 0 },
    { q: "Trước Pearson nên xem xét điều gì?", a: ["Quan hệ tuyến tính và ngoại lai", "Mật khẩu học viên", "Tên file ảnh", "Màu giao diện"], correct: 0 },
    { q: "r gần 0 thường gợi ý gì?", a: ["Liên hệ tuyến tính yếu hoặc không có", "Liên hệ hoàn hảo", "Dữ liệu thiếu toàn bộ", "Alpha cao"], correct: 0 },
  ],
  "chapter-09": [
    { q: "Hồi quy tuyến tính bội dùng khi biến phụ thuộc có dạng nào?", a: ["Định lượng liên tục", "Danh định nhiều nhóm", "Chỉ chuỗi ký tự", "Luôn nhị phân"], correct: 0 },
    { q: "VIF dùng để kiểm tra vấn đề gì?", a: ["Đa cộng tuyến", "Dữ liệu thiếu", "Tỷ lệ phản hồi", "Tính bảo mật"], correct: 0 },
    { q: "R bình phương cho biết gì?", a: ["Tỷ lệ biến thiên của biến phụ thuộc được mô hình giải thích", "Số biến bị thiếu", "Tỷ lệ nữ", "Độ dài bảng hỏi"], correct: 0 },
    { q: "Hệ số Beta chuẩn hóa giúp gì?", a: ["So sánh mức ảnh hưởng tương đối giữa biến độc lập", "Tạo codebook", "Mã hóa giới tính", "Tính cỡ mẫu"], correct: 0 },
    { q: "Phần dư trong hồi quy cần kiểm tra vì sao?", a: ["Để đánh giá giả định mô hình", "Để đổi mật khẩu", "Để tạo ảnh", "Không cần kiểm tra"], correct: 0 },
  ],
  "chapter-10": [
    { q: "Independent samples t-test dùng khi nào?", a: ["So sánh trung bình giữa hai nhóm độc lập", "So sánh ba nhóm trở lên", "Dự báo biến nhị phân", "Đánh giá thang đo"], correct: 0 },
    { q: "ANOVA một yếu tố dùng khi nào?", a: ["So sánh trung bình từ ba nhóm trở lên", "Chỉ hai nhóm ghép cặp", "Biến phụ thuộc nhị phân", "Tạo codebook"], correct: 0 },
    { q: "Nếu ANOVA có ý nghĩa thống kê, bước tiếp theo thường là gì?", a: ["Kiểm định hậu nghiệm/post-hoc khi phù hợp", "Xóa dữ liệu", "Dừng báo cáo", "Đổi tên biến"], correct: 0 },
    { q: "Levene test thường dùng để kiểm tra gì?", a: ["Đồng nhất phương sai", "Độ tin cậy thang đo", "Tương quan", "Odds Ratio"], correct: 0 },
    { q: "Khi báo cáo t-test/ANOVA cần có gì?", a: ["Trung bình, độ lệch chuẩn, p-value và kết luận", "Chỉ p-value", "Chỉ ảnh giao diện", "Chỉ tên file"], correct: 0 },
  ],
  "chapter-11": [
    { q: "Hồi quy Logistic nhị phân dùng khi biến phụ thuộc có dạng nào?", a: ["Hai trạng thái/nhị phân", "Định lượng liên tục", "Chuỗi văn bản tự do", "Ngày tháng"], correct: 0 },
    { q: "Odds Ratio lớn hơn 1 thường gợi ý gì?", a: ["Yếu tố làm tăng odds của biến kết cục", "Không có ảnh hưởng trong mọi trường hợp", "Dữ liệu sai", "Cỡ mẫu bằng 0"], correct: 0 },
    { q: "Biến SHL_NhiPhan phù hợp với mô hình nào?", a: ["Logistic nhị phân", "T-test ghép cặp", "Cronbach's Alpha", "Thống kê tần số duy nhất"], correct: 0 },
    { q: "Trong Logistic, cần kiểm tra điều gì khi đưa nhiều biến độc lập?", a: ["Đa cộng tuyến và ý nghĩa lâm sàng/thực tiễn", "Chỉ màu biểu đồ", "Tên file âm thanh", "Số slide"], correct: 0 },
    { q: "Báo cáo Logistic thường trình bày gì?", a: ["OR, khoảng tin cậy, p-value và diễn giải", "Chỉ trung bình", "Chỉ KMO", "Chỉ Alpha"], correct: 0 },
  ],
};

const EXTRA_QUIZ_TOPICS = {
  "chapter-01": [
    ["Khung mẫu trong nghiên cứu là gì?", "Danh sách hoặc nguồn xác định các đơn vị có thể được chọn vào mẫu"],
    ["Sai số chọn mẫu xuất hiện chủ yếu vì lý do nào?", "Nghiên cứu chỉ khảo sát một phần quần thể"],
    ["Tiêu chuẩn loại trừ dùng để làm gì?", "Xác định các trường hợp không phù hợp tham gia nghiên cứu"],
    ["Mô tả mẫu nghiên cứu cần nêu nội dung nào?", "Nguồn mẫu, thời gian, địa điểm và phương pháp chọn mẫu"],
    ["Chọn mẫu ngẫu nhiên đơn yêu cầu điều kiện nào?", "Mỗi đơn vị trong khung mẫu có cơ hội được chọn xác định"],
    ["Cỡ mẫu quá nhỏ gây nguy cơ gì?", "Giảm độ chính xác và lực thống kê"],
    ["Chọn mẫu phân tầng phù hợp khi nào?", "Khi quần thể có các nhóm quan trọng cần được đại diện"],
    ["Trong nghiên cứu cắt ngang, mẫu thường được thu thập như thế nào?", "Tại một thời điểm hoặc khoảng thời gian xác định"],
    ["Tính đại diện của mẫu phụ thuộc nhiều vào yếu tố nào?", "Phương pháp chọn mẫu và tỷ lệ tham gia"],
    ["Khi có không đáp ứng, báo cáo nên trình bày gì?", "Số lượng, tỷ lệ không đáp ứng và cách xử lý"],
  ],
  "chapter-02": [
    ["Biến tuổi đo bằng năm là loại biến nào?", "Biến định lượng"],
    ["Trình độ học vấn thường thuộc thang đo nào?", "Thang đo thứ bậc"],
    ["Mã hóa thiếu dữ liệu cần điều kiện gì?", "Có quy ước rõ trong codebook"],
    ["Tên biến trong SPSS nên được đặt như thế nào?", "Ngắn, không dấu, dễ hiểu và nhất quán"],
    ["Value Labels trong SPSS dùng để làm gì?", "Gắn nhãn ý nghĩa cho các mã số"],
    ["Measure trong SPSS gồm các lựa chọn phổ biến nào?", "Nominal, Ordinal và Scale"],
    ["Mã hóa đảo chiều cần thực hiện khi nào?", "Khi câu hỏi có chiều ý nghĩa ngược với thang đo"],
    ["Một lỗi nhập liệu thường gặp là gì?", "Nhập giá trị ngoài phạm vi mã hợp lệ"],
    ["Biến phác đồ điều trị có nhiều nhóm thường là loại biến nào?", "Biến định tính danh định"],
    ["Dữ liệu nhập tốt cần đảm bảo điều gì?", "Mã, nhãn, loại biến và giá trị hợp lệ nhất quán"],
  ],
  "chapter-03": [
    ["Kiểm tra tần số giúp phát hiện vấn đề gì?", "Mã ngoài phạm vi và phân bố bất thường"],
    ["Missing value có thể được biểu diễn như thế nào?", "Ô trống hoặc mã được quy ước là thiếu"],
    ["Làm sạch dữ liệu nên được thực hiện khi nào?", "Trước phân tích thống kê chính"],
    ["Duplicate cases là gì?", "Các dòng dữ liệu bị lặp"],
    ["Range check dùng để làm gì?", "Kiểm tra giá trị nằm trong khoảng hợp lệ"],
    ["Khi phát hiện lỗi nhập từ phiếu gốc nên xử lý thế nào?", "Đối chiếu phiếu và sửa có ghi nhận"],
    ["Ngoại lai có thể do nguyên nhân nào?", "Lỗi nhập hoặc một giá trị thực sự đặc biệt"],
    ["Biến tổng hợp thang đo nên tính khi nào?", "Sau khi kiểm tra và làm sạch biến quan sát"],
    ["Nhật ký làm sạch dữ liệu có vai trò gì?", "Tăng tính minh bạch và khả năng tái lập"],
    ["Kiểm tra logic giữa các biến giúp phát hiện gì?", "Mâu thuẫn nội tại trong câu trả lời"],
  ],
  "chapter-04": [
    ["Câu hỏi đo một khái niệm nên có đặc điểm gì?", "Rõ ràng, một nghĩa và phù hợp mục tiêu"],
    ["Thang đo hài lòng thường cần cấu trúc nào?", "Nhiều biến quan sát đại diện các khía cạnh của khái niệm"],
    ["Pilot test bảng hỏi giúp gì?", "Kiểm tra khả năng hiểu câu hỏi và thời gian trả lời"],
    ["Câu hỏi bắt buộc cần cân nhắc điều gì?", "Tính cần thiết và nguy cơ làm người trả lời bỏ cuộc"],
    ["Một bảng hỏi tốt cần tránh điều gì?", "Câu mơ hồ và thuật ngữ khó hiểu với người trả lời"],
    ["Mã câu hỏi như HQ1, HQ2 giúp gì?", "Liên kết câu hỏi với nhóm thang đo và dữ liệu"],
    ["Nội dung đồng thuận tham gia nghiên cứu liên quan đến vấn đề nào?", "Đạo đức nghiên cứu"],
    ["Cấu trúc bảng khảo sát nên theo nguyên tắc nào?", "Từ dễ đến khó và nhóm câu hỏi cùng chủ đề"],
    ["Biến độc lập trong mô hình hài lòng có thể là gì?", "Các nhân tố chất lượng dịch vụ, chi phí hoặc thông tin"],
    ["Câu hỏi dẫn dắt có nguy cơ gì?", "Làm sai lệch câu trả lời của người tham gia"],
  ],
  "chapter-05": [
    ["Median phù hợp khi nào?", "Khi dữ liệu lệch hoặc có ngoại lai"],
    ["Độ lệch chuẩn mô tả điều gì?", "Mức phân tán quanh trung bình"],
    ["Biểu đồ cột phù hợp với loại biến nào?", "Biến phân nhóm hoặc định tính"],
    ["Histogram thường dùng để làm gì?", "Quan sát phân bố biến định lượng"],
    ["Bảng đặc điểm mẫu cần chọn chỉ số dựa trên gì?", "Loại biến và phân bố dữ liệu"],
    ["Tỷ lệ phần trăm phải được hiểu cùng yếu tố nào?", "Mẫu số"],
    ["Mean không phù hợp khi nào?", "Khi dữ liệu lệch mạnh hoặc biến là danh định"],
    ["Bảng mô tả trước hồi quy có vai trò gì?", "Giúp hiểu mẫu và biến trước phân tích suy luận"],
    ["Số chữ số thập phân nên trình bày thế nào?", "Nhất quán và phù hợp độ chính xác"],
    ["Khi có dữ liệu thiếu, bảng mô tả nên làm gì?", "Nêu số lượng hợp lệ hoặc thiếu khi cần"],
  ],
  "chapter-06": [
    ["Cronbach's Alpha thường được xem xét cùng chỉ số nào?", "Corrected Item-Total Correlation"],
    ["Alpha cao nhưng nội dung biến không nhất quán thì nên làm gì?", "Xem lại ý nghĩa nội dung, không chỉ dựa vào con số"],
    ["Cronbach's Alpha nên chạy cho nhóm biến nào?", "Các biến quan sát cùng đo một khái niệm"],
    ["Alpha if Item Deleted giúp gì?", "Xem Alpha nếu loại từng biến"],
    ["Biến có tương quan biến-tổng âm cần kiểm tra gì trước?", "Chiều mã hóa hoặc mã hóa đảo chiều"],
    ["Độ tin cậy thang đo khác với khái niệm nào?", "Giá trị đo lường của thang đo"],
    ["Sau khi loại biến trong Cronbach cần làm gì?", "Chạy lại và báo cáo quyết định có lý do"],
    ["Alpha quá cao bất thường có thể gợi ý gì?", "Các câu hỏi có nội dung trùng lặp"],
    ["Báo cáo Cronbach nên nêu gì?", "Alpha, số biến và quyết định giữ hoặc loại"],
    ["Cronbach phù hợp nhất với loại dữ liệu nào?", "Các mục đo cùng thang Likert hoặc điểm thang đo"],
  ],
  "chapter-07": [
    ["Eigenvalue thường dùng để gợi ý điều gì?", "Số nhân tố được trích"],
    ["Phép xoay nhân tố giúp gì?", "Làm cấu trúc tải nhân tố dễ diễn giải hơn"],
    ["Communality phản ánh điều gì?", "Mức biến quan sát được giải thích bởi các nhân tố"],
    ["Cross-loading là tình huống nào?", "Một biến tải cao trên nhiều nhân tố"],
    ["Đặt tên nhân tố nên dựa vào gì?", "Nội dung các biến tải lên nhân tố"],
    ["EFA nên thực hiện sau bước nào?", "Đánh giá sơ bộ độ tin cậy thang đo"],
    ["Tải nhân tố thấp thường gợi ý gì?", "Biến có thể không đại diện tốt cho nhân tố"],
    ["Tổng phương sai trích cho biết gì?", "Tỷ lệ biến thiên được các nhân tố giải thích"],
    ["Điều kiện mẫu trong EFA cần chú ý vì sao?", "Mẫu quá nhỏ làm cấu trúc nhân tố kém ổn định"],
    ["Sau EFA, điểm nhân tố có thể dùng cho bước nào?", "Phân tích tương quan hoặc hồi quy tiếp theo"],
  ],
  "chapter-08": [
    ["Giá trị tuyệt đối của r càng lớn cho biết gì?", "Liên hệ tuyến tính càng mạnh"],
    ["p-value trong tương quan cho biết gì?", "Bằng chứng thống kê về liên hệ khác 0"],
    ["Scatterplot giúp đánh giá gì?", "Dạng quan hệ và ngoại lai"],
    ["Tương quan Pearson phù hợp nhất với quan hệ nào?", "Quan hệ tuyến tính giữa các biến định lượng"],
    ["Nếu dữ liệu lệch mạnh hoặc thứ bậc, có thể cân nhắc gì?", "Tương quan Spearman"],
    ["Ma trận tương quan giúp gì trước hồi quy?", "Xem quan hệ giữa biến và dấu hiệu đa cộng tuyến sơ bộ"],
    ["r = 1 nghĩa là gì?", "Tương quan tuyến tính dương hoàn hảo"],
    ["r = -1 nghĩa là gì?", "Tương quan tuyến tính âm hoàn hảo"],
    ["Khi kiểm định nhiều cặp tương quan cần thận trọng với gì?", "Sai lầm loại I do kiểm định nhiều lần"],
    ["Diễn giải tương quan nên bao gồm gì?", "Chiều, độ mạnh, p-value và ý nghĩa thực tiễn"],
  ],
  "chapter-09": [
    ["Biến độc lập trong hồi quy tuyến tính bội có thể là gì?", "Nhiều nhân tố dự báo biến phụ thuộc"],
    ["Hệ số B chưa chuẩn hóa cho biết gì?", "Mức thay đổi kỳ vọng của Y khi X tăng một đơn vị"],
    ["Giả định tuyến tính trong hồi quy nghĩa là gì?", "Quan hệ giữa X và Y gần tuyến tính"],
    ["Độc lập phần dư thường được xem bằng chỉ số nào?", "Durbin-Watson"],
    ["Homoscedasticity là gì?", "Phương sai phần dư tương đối đồng nhất"],
    ["Adjusted R Square hữu ích khi nào?", "So sánh mô hình có số biến khác nhau"],
    ["Biến gây nhiễu cần được xử lý thế nào?", "Cân nhắc đưa vào mô hình nếu có cơ sở"],
    ["Kết luận hồi quy nên tránh điều gì?", "Khẳng định nhân quả quá mức khi thiết kế không phù hợp"],
    ["Kiểm tra phân phối phần dư giúp đánh giá gì?", "Giả định của mô hình tuyến tính"],
    ["Mô hình hồi quy tốt cần dựa vào gì?", "Thống kê, giả định và ý nghĩa chuyên môn"],
  ],
  "chapter-10": [
    ["Paired samples t-test dùng khi nào?", "So sánh hai đo lường trên cùng đối tượng hoặc ghép cặp"],
    ["Post-hoc test dùng để làm gì?", "Xác định cặp nhóm khác biệt sau ANOVA"],
    ["Nếu phương sai không đồng nhất trong t-test độc lập, có thể dùng gì?", "Kết quả Welch hoặc dòng Equal variances not assumed"],
    ["Biến phụ thuộc trong t-test/ANOVA thường là gì?", "Biến định lượng"],
    ["Biến nhóm trong ANOVA là gì?", "Biến phân loại có từ ba nhóm trở lên"],
    ["Effect size giúp gì?", "Đánh giá độ lớn khác biệt, không chỉ ý nghĩa thống kê"],
    ["p-value < 0,05 trong t-test thường kết luận gì?", "Có bằng chứng khác biệt trung bình giữa nhóm theo mức ý nghĩa"],
    ["Trước khi chọn t-test hay ANOVA cần xác định gì?", "Số nhóm và tính độc lập hoặc ghép cặp"],
    ["ANOVA có ý nghĩa thống kê cho biết điều gì?", "Ít nhất một nhóm có trung bình khác"],
    ["Bảng kết quả nên đi kèm diễn giải nào?", "Ý nghĩa thống kê và ý nghĩa thực tiễn"],
  ],
  "chapter-11": [
    ["Logit trong Logistic là gì?", "Log của odds biến kết cục"],
    ["Biến phụ thuộc Logistic nhị phân thường mã hóa thế nào?", "0 và 1"],
    ["Khoảng tin cậy 95% của OR không chứa 1 gợi ý gì?", "Tác động có ý nghĩa thống kê ở mức tương ứng"],
    ["Pseudo R Square trong Logistic dùng để làm gì?", "Đánh giá mức giải thích tương đối của mô hình"],
    ["Hosmer-Lemeshow thường dùng để xem gì?", "Độ phù hợp mô hình Logistic"],
    ["Classification table cho biết gì?", "Khả năng phân loại đúng của mô hình"],
    ["OR = 2 có thể diễn giải sơ bộ thế nào?", "Odds kết cục tăng khoảng 2 lần khi yếu tố tăng hoặc hiện diện"],
    ["Với biến độc lập liên tục, OR ứng với gì?", "Mỗi một đơn vị tăng của biến độc lập"],
    ["Khi diễn giải OR cần thận trọng điều gì?", "OR không giống risk ratio, nhất là khi kết cục phổ biến"],
    ["Mô hình Logistic cần số sự kiện đủ vì sao?", "Để ước lượng ổn định khi có nhiều biến"],
  ],
};

const genericDistractors = ["Một thao tác trình bày không ảnh hưởng phân tích", "Một lựa chọn không phù hợp với mục tiêu bài học", "Một thông tin hành chính không phải kết luận thống kê"];

Object.entries(EXTRA_QUIZ_TOPICS).forEach(([lessonId, items]) => {
  QUIZZES[lessonId].push(
    ...items.map(([q, answer]) => ({
      q,
      a: [answer, ...genericDistractors],
      correct: 0,
    })),
  );
});



const RESOURCES = [
  {
    title: "DATA.csv",
    text: "Dữ liệu thực hành phân tích thống kê và mô hình hài lòng.",
    href: "public/assets/data/DATA.csv",
  },
  {
    title: "DATA.sav",
    text: "File SPSS để học viên thao tác trực tiếp.",
    href: "public/assets/data/DATA.sav",
  },
  {
    title: "Codebook",
    text: "Từ điển biến hỗ trợ mã hóa và đọc kết quả.",
    href: "public/assets/data/DATA_codebook.csv",
  },
  {
    title: "Phiếu khảo sát",
    text: "Bảng hỏi ý kiến bệnh nhân ở định dạng PDF.",
    href: "public/assets/docs/phieu-khao-sat-y-kien-benh-nhan.pdf",
  },
  {
    title: "Tài liệu SPSS CK1",
    text: "Tài liệu hướng dẫn chính ở định dạng Word.",
    href: "public/assets/docs/SPSS_CK1_Duoc.docx",
  },
  
  {
    title: "Video hướng dẫn SPSS",
    text: "Video thao tác SPSS ngành Dược.",
    href: "public/assets/docs/huong-dan-spss-nganh-duoc.mp4",
  },
];

const state = {
  view: "dashboard",
  user: null,
  assessmentLesson: null,
  lessonQuizzes: {},
  quizSourceStatus: "loading",
  lowBandwidth: readJson("miniMLS.lowBandwidth", false),
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function progressKey(username) {
  return `miniMLS.progress.${username}`;
}

function getProgress(username) {
  return readJson(progressKey(username), {});
}

function getQuiz(lessonId) {
  return state.lessonQuizzes[lessonId] ?? QUIZZES[lessonId] ?? [];
}

async function loadLessonQuizzes() {
  if (window.MINI_MLS_QUIZ_BANK) {
    state.lessonQuizzes = window.MINI_MLS_QUIZ_BANK;
    state.quizSourceStatus = "bundled";
    return;
  }
  const loaded = {};
  await Promise.all(
    LESSONS.map(async (lesson) => {
      try {
        const response = await fetch(lesson.href, { cache: "no-store" });
        if (!response.ok) throw new Error(`Cannot load ${lesson.href}`);
        const html = await response.text();
        const quiz = extractQuizData(html);
        if (quiz.length) loaded[lesson.id] = quiz;
      } catch {
        const html = await loadHtmlViaIframe(lesson.href);
        const quiz = html ? extractQuizData(html) : [];
        loaded[lesson.id] = quiz.length ? quiz : QUIZZES[lesson.id] ?? [];
      }
    }),
  );
  state.lessonQuizzes = loaded;
  state.quizSourceStatus = Object.keys(loaded).length ? "loaded" : "fallback";
}

function loadHtmlViaIframe(src) {
  return new Promise((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.left = "-10000px";
    iframe.style.top = "-10000px";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.setAttribute("aria-hidden", "true");
    iframe.onload = () => {
      try {
        const html = iframe.contentDocument?.documentElement?.outerHTML ?? "";
        iframe.remove();
        resolve(html);
      } catch {
        iframe.remove();
        resolve("");
      }
    };
    iframe.onerror = () => {
      iframe.remove();
      resolve("");
    };
    iframe.src = src;
    document.body.appendChild(iframe);
  });
}

function extractQuizData(html) {
  for (const variableName of ["quizData", "quizQuestions"]) {
    const rawItems = extractArrayByVariable(html, variableName);
    const normalized = normalizeQuizItems(rawItems);
    if (normalized.length) return normalized;
  }
  return extractHtmlRadioQuiz(html);
}

function extractArrayByVariable(html, variableName) {
  const marker = variableName;
  const markerIndex = html.indexOf(marker);
  if (markerIndex < 0) return [];
  const arrayStart = html.indexOf("[", markerIndex);
  if (arrayStart < 0) return [];
  const arrayEnd = findMatchingBracket(html, arrayStart);
  if (arrayEnd < 0) return [];
  const arrayLiteral = html.slice(arrayStart, arrayEnd + 1);
  const rawItems = Function(`"use strict"; return (${arrayLiteral});`)();
  return Array.isArray(rawItems) ? rawItems : [];
}

function normalizeQuizItems(rawItems) {
  if (!Array.isArray(rawItems)) return [];
  return rawItems
    .map((item) => {
      const answers = Array.isArray(item.a)
        ? item.a.map((answer) => String(answer))
        : item.answers && typeof item.answers === "object"
          ? Object.values(item.answers).map((answer) => String(answer))
          : [];
      const answerKeys = item.answers && typeof item.answers === "object" ? Object.keys(item.answers) : [];
      const rawCorrect = item.correct ?? item.c;
      const correct = typeof rawCorrect === "string" && answerKeys.length ? answerKeys.indexOf(rawCorrect) : Number(rawCorrect);
      return {
        q: String(item.q ?? item.question ?? "").trim(),
        a: answers,
        correct,
        explain: String(item.explain ?? item.e ?? item.exp ?? item.rationale ?? "").trim(),
      };
    })
    .filter((item) => item.q && item.a.length >= 2 && Number.isInteger(item.correct));
}

function extractHtmlRadioQuiz(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const answers = extractAnswersObject(html);
  const names = [...new Set([...doc.querySelectorAll("input[type='radio'][name]")].map((input) => input.name))]
    .filter((name) => answers[name]);
  return names
    .map((name) => {
      const inputs = [...doc.querySelectorAll(`input[type='radio'][name="${cssEscape(name)}"]`)];
      const container = findQuestionContainer(inputs[0]);
      const title = container?.querySelector("h4, .quiz-title, p")?.textContent ?? "";
      const options = inputs.map((input) => input.closest("label")?.textContent?.trim() ?? input.value);
      const values = inputs.map((input) => input.value);
      return {
        q: cleanQuizText(title),
        a: options.map(cleanQuizText),
        correct: values.indexOf(answers[name]),
        explain: "",
      };
    })
    .filter((item) => item.q && item.a.length >= 2 && item.correct >= 0);
}

function findQuestionContainer(input) {
  let node = input?.parentElement;
  while (node && node !== input.ownerDocument.body) {
    const hasTitle = Boolean(node.querySelector("h4, .quiz-title, p"));
    const radioCount = node.querySelectorAll("input[type='radio']").length;
    if (hasTitle && radioCount >= 2) return node;
    node = node.parentElement;
  }
  return input?.parentElement ?? null;
}

function extractAnswersObject(html) {
  const marker = "const answers";
  const index = html.lastIndexOf(marker);
  if (index < 0) return {};
  const objectStart = html.indexOf("{", index);
  if (objectStart < 0) return {};
  const objectEnd = findMatchingBrace(html, objectStart);
  if (objectEnd < 0) return {};
  const objectLiteral = html.slice(objectStart, objectEnd + 1);
  try {
    return Function(`"use strict"; return (${objectLiteral});`)();
  } catch {
    return {};
  }
}

function findMatchingBrace(text, startIndex) {
  return findMatchingPair(text, startIndex, "{", "}");
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replaceAll('"', '\\"');
}

function cleanQuizText(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function findMatchingBracket(text, startIndex) {
  return findMatchingPair(text, startIndex, "[", "]");
}

function findMatchingPair(text, startIndex, openChar, closeChar) {
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = startIndex; index < text.length; index++) {
    const char = text[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === openChar) depth++;
    if (char === closeChar) depth--;
    if (depth === 0) return index;
  }
  return -1;
}

function normalizeLessonEvidence(raw = {}) {
  return {
    opened: Boolean(raw.opened || raw.completed),
    openedAt: raw.openedAt ?? raw.completedAt ?? null,
    audioPercent: Number(raw.audioPercent ?? 0),
    quizAnswers: Array.isArray(raw.quizAnswers) ? raw.quizAnswers : [],
    quizScore: raw.quizScore === "" || raw.quizScore == null ? "" : Number(raw.quizScore),
    practiceImage: raw.practiceImage ?? "",
	practiceImagePath: raw.practiceImagePath ?? raw.practice_image_path ?? "",
	practiceImageName: raw.practiceImageName ?? "",
	interactionImage: raw.interactionImage ?? "",
	interactionImagePath:
  	raw.interactionImagePath ?? raw.interaction_image_path ?? "",
	interactionImageName: raw.interactionImageName ?? "",
    completedAt: raw.completedAt ?? null,
    updatedAt: raw.updatedAt ?? null,
  };
}

function evidenceStatus(evidence, lessonId) {
  const normalized = normalizeLessonEvidence(evidence);
  const quiz = lessonId ? getQuiz(lessonId) : [];
  const quizScore = quiz.length ? scoreQuiz(quiz, normalized.quizAnswers) : Number(normalized.quizScore);
  const checks = {
    opened: normalized.opened,
    media: normalized.audioPercent >= 100,
    quiz: quizScore >= 80,
    	practiceImage: Boolean(normalized.practiceImagePath),
	interactionImage: Boolean(normalized.interactionImagePath),
  };
  const passed = Object.values(checks).filter(Boolean).length;
  return {
    ...checks,
    quizScore,
    passed,
    total: Object.keys(checks).length,
    complete: passed === Object.keys(checks).length,
  };
}

function missingStandardItems(status, evidence) {
  const items = [];
  if (!status.opened) items.push("Mo bai hoc it nhat mot lan.");
  if (!status.media) items.push(`Xem/nghe hoc lieu dat 100% (hien tai ${Math.min(100, Math.round(evidence.audioPercent))}%).`);
  if (!status.quiz) items.push(`Lam quiz dat toi thieu 80% (hien tai ${Number.isFinite(status.quizScore) ? status.quizScore : 0}%).`);
  if (!status.practiceImage) items.push("Dan anh minh chung thuc hanh SPSS.");
  if (!status.interactionImage) items.push("Dan anh minh chung tuong tac nhanh trong bai.");
  return items;
}

function scoreQuiz(quiz, answers = []) {
  if (!quiz.length) return 0;
  const correct = quiz.filter((item, index) => {
    const answer = answers[index];
    return answer !== null && answer !== undefined && answer !== "" && Number(answer) === item.correct;
  }).length;
  return Math.round((correct / quiz.length) * 100);
}

function databaseRowToEvidence(row) {
  return normalizeLessonEvidence({
    opened: Boolean(row.opened_at),
    openedAt: row.opened_at,
    audioPercent: row.audio_percent,
    quizAnswers: row.quiz_answers,
    quizScore: row.quiz_score,
    practiceImagePath: row.practice_image_path,
    interactionImagePath: row.interaction_image_path,
    completedAt: row.completed_at,
    updatedAt: row.updated_at,
  });
}

function evidenceToDatabaseRow(lessonId, evidence) {
  return {
    user_id: state.user.id,
    lesson_id: lessonId,
    opened_at: evidence.openedAt,
    audio_percent: evidence.audioPercent,
    quiz_answers: evidence.quizAnswers,
    quiz_score: Number(evidence.quizScore || 0),
    practice_image_path: evidence.practiceImagePath || null,
    interaction_image_path: evidence.interactionImagePath || null,
    completed_at: evidence.completedAt,
    updated_at: new Date().toISOString(),
  };
}

async function loadCurrentUserProgress() {
  if (!state.user?.id) return;

  const { data, error } = await supabaseClient
    .from("lesson_progress")
    .select("*")
    .eq("user_id", state.user.id);

  if (error) throw error;

  const progress = {};

  for (const row of data) {
    const evidence = databaseRowToEvidence(row);

evidence.practiceImage = evidence.practiceImagePath
  ? await getEvidenceSignedUrl(evidence.practiceImagePath)
  : "";

evidence.interactionImage = evidence.interactionImagePath
  ? await getEvidenceSignedUrl(evidence.interactionImagePath)
  : "";

progress[row.lesson_id] = evidence;
  }

  writeJson(progressKey(state.user.username), progress);
}


async function saveLessonProgressRemote(lessonId, evidence) {
  if (!state.user?.id) return;

  const { error } = await supabaseClient
    .from("lesson_progress")
    .upsert(
      evidenceToDatabaseRow(lessonId, evidence),
      { onConflict: "user_id,lesson_id" },
    );

  if (error) throw error;
}


function updateLessonEvidence(username, lessonId, patch) {
  const progress = getProgress(username);
  const previous = normalizeLessonEvidence(progress[lessonId]);
  const next = { ...previous, ...patch, updatedAt: new Date().toISOString() };
  const beforeComplete = evidenceStatus(previous, lessonId).complete;
  const afterComplete = evidenceStatus(next, lessonId).complete;
  next.completedAt = afterComplete ? previous.completedAt ?? new Date().toISOString() : null;
  progress[lessonId] = next;
  writeJson(progressKey(username), progress);

if (state.user?.id && username === state.user.username) {
  saveLessonProgressRemote(lessonId, next).catch((error) => {
    console.error("Không đồng bộ được tiến trình:", error);
  });
}


  if (!beforeComplete && afterComplete) logEvent(username, "completed-standard", lessonId);
  if (beforeComplete && !afterComplete) logEvent(username, "reopened-standard", lessonId);
}

function logEvent(username, verb, lessonId) {
  const events = readJson("miniMLS.events", []);
  events.push({
    actor: username,
    verb,
    lessonId,
    at: new Date().toISOString(),
  });
  writeJson("miniMLS.events", events.slice(-1000));
}

function completionRate(username) {
  const progress = getProgress(username);
  const done = LESSONS.filter((lesson) => evidenceStatus(progress[lesson.id], lesson.id).complete).length;
  return {
    done,
    total: LESSONS.length,
    percent: Math.round((done / LESSONS.length) * 100),
  };
}

function getLessonIndex(lessonId) {
  return LESSONS.findIndex((lesson) => lesson.id === lessonId);
}

function isLessonUnlocked(lessonId, username = state.user?.username) {
  if (!username || state.user?.role === "teacher") return true;
  const index = getLessonIndex(lessonId);
  if (index <= 0) return true;
  const previous = LESSONS[index - 1];
  return evidenceStatus(getProgress(username)[previous.id], previous.id).complete;
}

async function loadProfile(userId) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, full_name, gender, role")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return {
    id: data.id,
    username: data.username,
    name: data.full_name,
    gender: data.gender ?? "",
    role: data.role,
  };
}


async function login(username, password) {
  const normalizedUsername = username.trim().toLowerCase();

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: `${normalizedUsername}@${AUTH_EMAIL_DOMAIN}`,
    password,
  });

  if (error || !data.user) return false;

  state.user = await loadProfile(data.user.id);
  writeJson("miniMLS.currentUser", state.user);
	await loadCurrentUserProgress();
  logEvent(state.user.username, "logged-in", "hub");
  render();

  return true;
}

async function logout() {
  await supabaseClient.auth.signOut();
  localStorage.removeItem("miniMLS.currentUser");
  state.user = null;
  state.view = "dashboard";
  render();
}

function toggleLowBandwidth() {
  state.lowBandwidth = !state.lowBandwidth;
  writeJson("miniMLS.lowBandwidth", state.lowBandwidth);
  render();
}

function setView(view) {
  state.view = view;
  state.assessmentLesson = null;
  render();
}

function icon(name) {
  const icons = {
    dashboard: "▦",
    lessons: "▤",
    resources: "⬇",
    report: "◷",
    accounts: "◉",
    logout: "↥",
  };
  return icons[name] ?? "•";
}

function renderLogin() {
  document.querySelector("#app").innerHTML = `
    <main class="login-page">
      <section class="login-hero">
        <div class="brand" aria-label="Mini-MLS Thống kê CK1 Dược">
          <span class="brand-mark">MLS</span>
          <div>
            <strong>Mini-MLS Thống kê CK1 Dược</strong>
            <span>Hub học tập, thực hành SPSS và quản lý tiến trình</span>
          </div>
        </div>
        <div>
          <h1>Mini-MLS Thống kê CK1 Dược</h1>
          <p>Hệ thống học tập gọn nhẹ cho 22 học viên chuyên khoa 1 và giáo viên phụ trách, tích hợp bài giảng, audio, dữ liệu thực hành, khảo sát và báo cáo tiến độ.</p>
        </div>
      </section>
      <section class="login-panel">
        <div>
          <h2>Đăng nhập Hub</h2>
          <p class="muted">Dùng tài khoản học viên hoặc giáo viên đã cấp sẵn.</p>
        </div>
        <form id="loginForm">
          <div class="field">
            <label for="username">Tài khoản</label>
            <input id="username" autocomplete="username" value="2521004" />
          </div>
          <div class="field">
            <label for="password">Mật khẩu</label>
            <input id="password" type="password" autocomplete="current-password" value="CK1@1004" />
          </div>
          <button class="btn" type="submit">Đăng nhập</button>
        </form>
        <div class="notice">
          Giáo viên: <strong>gv01</strong> / <strong>GV@2026</strong>. Học viên dùng <strong>Mã học viên</strong> trong danh sách Điện Biên; mật khẩu mặc định là <strong>CK1@</strong> + 4 số cuối của mã.
        </div>
      </section>
    </main>
  `;
  document.querySelector("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.currentTarget.querySelector("button[type='submit']");
  button.disabled = true;
  button.textContent = "Đang đăng nhập...";

  try {
    const ok = await login(
      document.querySelector("#username").value,
      document.querySelector("#password").value,
    );

    if (!ok) alert("Tài khoản hoặc mật khẩu chưa đúng.");
  } catch (error) {
    console.error(error);
    alert(`Không đăng nhập được: ${error.message}`);
  } finally {
    button.disabled = false;
    button.textContent = "Đăng nhập";
  }
});
}

function renderShell(inner) {
  const user = state.user;
  const navItems = [
    ["dashboard", "Tổng quan"],
    ["lessons", "Lộ trình học"],
    ["resources", "Tài nguyên"],
    ...(user.role === "teacher" ? [] : []),
  ];
  document.querySelector("#app").innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand">
          <span class="brand-mark">MLS</span>
          <div>
            <strong>Mini-MLS</strong>
            <span>Thống kê CK1 Dược</span>
          </div>
        </div>
        <nav class="nav" aria-label="Điều hướng chính">
          ${navItems
            .map(
              ([id, label]) =>
                `<button class="${state.view === id ? "active" : ""}" data-view="${id}"><span>${icon(id)}</span>${label}</button>`,
            )
            .join("")}
        </nav>
        <div class="user-box">
          <div>
            <strong>${user.name}</strong>
            <div class="meta">${user.role === "teacher" ? "Giáo viên" : "Học viên"} · ${user.username}</div>
          </div>
          <button class="btn ghost" id="logoutBtn">${icon("logout")} Đăng xuất</button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <strong>${pageTitle()}</strong>
            <div class="muted">Chuẩn hóa học liệu, thực hành dữ liệu và theo dõi hoàn thành</div>
          </div>
          <div class="topbar-actions">
            <button class="btn secondary" id="supportBtn" type="button">Hỗ trợ nhanh</button>
            <button class="btn secondary" id="lowBandwidthBtn" type="button">${state.lowBandwidth ? "Mạng yếu: Bật" : "Mạng yếu: Tắt"}</button>
            <a class="btn secondary" href="public/assets/data/DATA.csv" download>Tải DATA.csv</a>
          </div>
        </header>
        <section class="content">${inner}</section>
      </main>
    </div>
  `;
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelector("#logoutBtn").addEventListener("click", logout);
  document.querySelector("#lowBandwidthBtn")?.addEventListener("click", toggleLowBandwidth);
  document.querySelector("#supportBtn")?.addEventListener("click", openSupportRequest);
}

function pageTitle() {
  return {
    dashboard: "Tổng quan Hub",
    lessons: "Lộ trình học",
    resources: "Tài nguyên thực hành",
    report: "Báo cáo giáo viên",
    accounts: "Danh sách tài khoản",
  }[state.view];
}

function dashboardView() {
  const rate = completionRate(state.user.username);
  const classRows = USERS.filter((user) => user.role === "student").map((user) => completionRate(user.username));
  const classAvg = Math.round(classRows.reduce((sum, item) => sum + item.percent, 0) / classRows.length);
  const progress = getProgress(state.user.username);
  const next = LESSONS.find((lesson) => !evidenceStatus(progress[lesson.id], lesson.id).complete) ?? LESSONS[0];
  return `
    <section class="hero-band">
      <h1>Thống kê ứng dụng trong nghiên cứu Dược</h1>
      <p>11 chương học theo chu trình nghiên cứu: thiết kế, thu thập, làm sạch, đánh giá thang đo, kiểm định và mô hình hóa dữ liệu hài lòng bệnh nhân.</p>
    </section>
    <section class="grid">
      <div class="panel pad span-3 metric"><span class="muted">Tiến độ cá nhân</span><strong>${rate.percent}%</strong><div class="progress" style="--value:${rate.percent}%"><span></span></div></div>
      <div class="panel pad span-3 metric"><span class="muted">Bài đã hoàn thành</span><strong>${rate.done}/${rate.total}</strong><span class="muted">Theo 5 tiêu chí đánh giá</span></div>
      <div class="panel pad span-3 metric"><span class="muted">Tài nguyên</span><strong>${RESOURCES.length}</strong><span class="muted">CSV, SAV, PDF, DOCX, XLSX, video</span></div>
      <div class="panel pad span-3 metric"><span class="muted">Trung bình lớp</span><strong>${classAvg}%</strong><span class="muted">Dựa trên dữ liệu trình duyệt này</span></div>
      <div class="panel pad span-12">
        <div class="section-title"><div><h2>Bài tiếp theo</h2><p>${next.outcome}</p></div></div>
        ${lessonCard(next)}
      </div>
      <div class="panel pad span-12 support-strip">
        <div>
          <h2>Chế độ mạng yếu/offline</h2>
          <p class="muted">${state.lowBandwidth ? "Đang bật: giao diện hạn chế tải ảnh đại diện và chỉ tải audio khi học viên bấm nghe." : "Đang tắt: giao diện hiển thị đầy đủ ảnh đại diện và audio tải metadata."} Website vẫn có thể học trực tiếp khi đã đặt nguyên thư mục Mini-MLS trên máy chủ, USB hoặc Hub nội bộ.</p>
        </div>
        <button class="btn secondary" id="lowBandwidthPanelBtn" type="button">${state.lowBandwidth ? "Tắt chế độ mạng yếu" : "Bật chế độ mạng yếu"}</button>
      </div>
      <div class="panel pad span-12">
        <h2>Tiêu chuẩn triển khai</h2>
        <p class="muted">Cấu trúc theo vai trò, học liệu theo mô-đun, tài nguyên thực hành đi kèm, báo cáo hoàn thành và xuất dữ liệu tiến trình. Phiên bản này chạy tĩnh để dễ đặt trên Hub nội bộ.</p>
      </div>
    </section>
  `;
}

function lessonsView() {
  return `
    <section class="panel pad">
      <div class="section-title">
        <div>
          <h2>11 mô-đun Elearning</h2>
          <p>Mỗi chương gồm bài HTML, ảnh chủ đề, audio tóm tắt, quiz lấy từ mục Trắc nghiệm Lượng giá của bài và nhiệm vụ thực hành trên dữ liệu khảo sát.</p>
        </div>
      </div>
      <div class="lesson-list">${LESSONS.map(lessonCard).join("")}</div>
    </section>
  `;
}

function lessonCard(lesson) {
  const progress = getProgress(state.user.username);
  const evidence = normalizeLessonEvidence(progress[lesson.id]);
  const status = evidenceStatus(evidence, lesson.id);
  const done = status.complete;
  const locked = !isLessonUnlocked(lesson.id);
  const assessmentOpen = state.assessmentLesson === lesson.id && !locked;
  const missingItems = missingStandardItems(status, evidence);
  const thumb = state.lowBandwidth
    ? `<div class="lesson-thumb offline-thumb">C${lesson.number}</div>`
    : `<img src="${lesson.image}" alt="${lesson.title}" loading="lazy" />`;
  return `
    <article class="lesson-card ${locked ? "locked" : ""}">
      ${thumb}
      <div>
        <span class="pill ${done ? "done" : locked ? "locked-pill" : ""}">${done ? "Đạt chuẩn" : locked ? "Đang khóa" : `Chương ${lesson.number} · ${status.passed}/${status.total}`}</span>
        <h3>${lesson.title}</h3>
        <p>${lesson.outcome}</p>
        <p><strong>Thực hành:</strong> ${lesson.practice}</p>
        ${!locked && !done ? `<p class="missing-inline"><strong>Còn thiếu:</strong> ${missingItems.slice(0, 2).join(" ")}${missingItems.length > 2 ? " ..." : ""}</p>` : ""}
        ${locked ? `<p class="lock-note">Cần hoàn thành đạt chuẩn chương ${lesson.number - 1} trước khi học chương này.</p>` : ""}
      </div>
      <div class="lesson-actions">
        <audio class="audio-player" controls preload="${state.lowBandwidth ? "none" : "metadata"}" src="${locked ? "" : lesson.audio}" data-audio="${lesson.id}" ${locked ? "disabled" : ""}></audio>
        ${locked ? `<button class="btn secondary" disabled>Mở bài</button>` : `<a class="btn secondary" href="${lesson.href}" target="_blank" rel="noopener" data-open-lesson="${lesson.id}">Mở bài</a>`}
        <button class="btn" data-assessment="${lesson.id}" ${locked ? "disabled" : ""}>${assessmentOpen ? "Ẩn đánh giá" : "Đánh giá"}</button>
      </div>
      ${assessmentOpen ? assessmentPanel(lesson, evidence, status) : ""}
    </article>
  `;
}

function assessmentPanel(lesson, evidence, status) {
  const quiz = getQuiz(lesson.id);
  const missingItems = missingStandardItems(status, evidence);
  return `
    <form class="assessment-panel" data-assessment-form="${lesson.id}">
      <div class="assessment-head">
        <div>
          <h4>Tiêu chuẩn hoàn thành bài học</h4>
          <p class="muted">Bài học đạt chuẩn khi mở bài, xem/nghe đủ 100% học liệu, quiz tự chấm đạt từ 80%, và có đủ 2 ảnh minh chứng. Câu hỏi được lấy từ mục Trắc nghiệm Lượng giá trong bài HTML.</p>
        </div>
        <span class="pill ${status.complete ? "done" : ""}">${status.complete ? "Đã đạt chuẩn" : `${status.passed}/${status.total} tiêu chí`}</span>
      </div>
      <div class="criteria-grid">
        ${criteriaItem("Mở bài học", status.opened, evidence.openedAt ? new Date(evidence.openedAt).toLocaleString("vi-VN") : "Chưa ghi nhận")}
        ${criteriaItem("Xem/nghe học liệu", status.media, `${Math.min(100, Math.round(evidence.audioPercent))}% audio`)}
        ${criteriaItem("Quiz tự động", status.quiz, evidence.quizAnswers.length ? `${status.quizScore}%` : "Chưa làm quiz")}
        ${criteriaItem("Ảnh thực hành SPSS", status.practiceImage, evidence.practiceImageName || "Chưa tải ảnh")}
        ${criteriaItem("Ảnh tương tác nhanh", status.interactionImage, evidence.interactionImageName || "Chưa tải ảnh")}
      </div>
      ${missingStatusPanel(missingItems)}
      <div class="assessment-fields">
        ${thesisTemplatePanel(lesson)}
        <fieldset class="quiz-module">
          <legend>Quiz cuối bài · yêu cầu đạt tối thiểu 80% · ${quiz.length} câu</legend>
          ${quiz.map((item, qIndex) => quizQuestion(item, qIndex, evidence.quizAnswers[qIndex])).join("")}
        </fieldset>
        <div class="evidence-grid">
          ${imageEvidenceField("practiceImage", "Ảnh minh chứng thực hành SPSS", evidence.practiceImage, evidence.practiceImageName)}
          ${imageEvidenceField("interactionImage", "Ảnh minh chứng tương tác nhanh trong bài", evidence.interactionImage, evidence.interactionImageName)}
        </div>
      </div>
      <div class="assessment-actions">
        <button class="btn" type="submit">Chấm và lưu đánh giá</button>
        <span class="muted">Chỉ khi đủ 5 tiêu chí, bài tiếp theo mới được mở khóa.</span>
      </div>
    </form>
  `;
}

function quizQuestion(item, qIndex, selected) {
  return `
    <div class="quiz-question">
      <strong>${qIndex + 1}. ${formatMathText(stripQuestionNumber(item.q))}</strong>
      <div class="quiz-options">
        ${item.a.map((answer, aIndex) => `
          <label>
            <input type="radio" name="q${qIndex}" value="${aIndex}" ${Number(selected) === aIndex ? "checked" : ""} />
            <span>${formatMathText(answer)}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function stripQuestionNumber(value) {
  return String(value).replace(/^\s*(?:câu\s*)?\d+\s*[\.\):\-]\s*/i, "");
}

function imageEvidenceField(name, label, image, imageName) {
  return `
    <div class="image-evidence">
      <label>${label}</label>
      <div class="paste-zone" contenteditable="true" data-paste-target="${name}" role="textbox" aria-label="${label}">
        ${image ? `<img src="${image}" alt="${label}" />` : `<span>Dán ảnh tại đây bằng Ctrl+V</span>`}
      </div>
      <span class="muted">${imageName ? escapeHtml(imageName) : "Chụp màn hình kết quả, quay lại đây và nhấn Ctrl+V."}</span>
    </div>
  `;
}

function missingStatusPanel(items) {
  if (!items.length) {
    return `
      <section class="standard-panel passed">
        <strong>Đã đủ điều kiện đạt chuẩn bài học</strong>
        <span>Học viên có thể chuyển sang bài kế tiếp.</span>
      </section>
    `;
  }
  return `
    <section class="standard-panel">
      <strong>Còn thiếu gì để đạt chuẩn</strong>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function thesisTemplatePanel(lesson) {
  const templates = THESIS_TEMPLATES[lesson.id] ?? [];
  return `
    <section class="learning-helper">
      <div>
        <h4>Mẫu câu viết luận văn sau chương ${lesson.number}</h4>
        <p class="muted">Có thể điều chỉnh theo đề tài, địa điểm và kết quả phân tích thực tế.</p>
      </div>
      <div class="template-list">
        ${templates.map((item) => `<p>${item}</p>`).join("")}
      </div>
    </section>
  `;
}

function criteriaItem(label, passed, detail) {
  return `
    <div class="criteria-item ${passed ? "passed" : ""}">
      <strong>${passed ? "✓" : "○"} ${label}</strong>
      <span>${detail}</span>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatMathText(value) {
  let text = escapeHtml(value);
  text = text.replace(/\\\((.*?)\\\)/g, (_, expr) => renderMathInline(expr));
  text = text.replace(/\$(.+?)\$/g, (_, expr) => renderMathInline(expr));
  return text;
}

function renderMathInline(expr) {
  let output = escapeHtml(expr)
    .replaceAll("\\\\", "\\")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β")
    .replace(/\\Delta/g, "Δ")
    .replace(/\\epsilon/g, "ε")
    .replace(/\\\s*imes/g, "×")
    .replace(/\\times/g, "×")
    .replace(/\\pm/g, "±")
    .replace(/\\geq?/g, "≥")
    .replace(/\\leq?/g, "≤")
    .replace(/\\rightarrow/g, "→")
    .replace(/\\bar\{([^}]+)\}/g, '<span class="math-overline">$1</span>')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="math-frac"><span>$1</span><span>$2</span></span>')
    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>")
    .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>")
    .replace(/\^([A-Za-z0-9+\-]+)/g, "<sup>$1</sup>")
    .replace(/_([A-Za-z0-9+\-]+)/g, "<sub>$1</sub>");
  return `<span class="math-inline">${output}</span>`;
}
function resourcesView() {
  return `
    <section class="panel pad">
      <div class="section-title">
        <div>
          <h2>Tài nguyên thực hành</h2>
          <p>Dữ liệu và tài liệu gốc đã được đóng gói trong website.</p>
        </div>
      </div>
      <div class="resource-grid">
        ${RESOURCES.map(
          (item) => `
          <article class="resource">
            <strong>${item.title}</strong>
            <span class="muted">${item.text}</span>
            <a class="btn secondary" href="${item.href}" target="_blank" rel="noopener" download>Tải/Mở</a>
          </article>
        `,
        ).join("")}
      </div>
    </section>
  `;
}

function reportView() {
  const students = USERS.filter((user) => user.role === "student");
  const rows = students
    .map((user) => {
      const rate = completionRate(user.username);
      const progress = getProgress(user.username);
      const statuses = LESSONS.map((lesson) => evidenceStatus(progress[lesson.id], lesson.id));
      const criteria = ["opened", "media", "quiz", "practiceImage", "interactionImage"].map((key) =>
        statuses.filter((status) => status[key]).length,
      );
      const lastDone = Object.values(progress)
        .map((item) => normalizeLessonEvidence(item).completedAt)
        .filter(Boolean)
        .sort()
        .at(-1);
      return `
        <tr>
          <td>${user.username}</td>
          <td>${user.name}</td>
          <td>${rate.done}/${rate.total}</td>
          <td><div class="progress" style="--value:${rate.percent}%"><span></span></div></td>
          <td>${rate.percent}%</td>
          <td>${criteria.map((count) => `${count}/${LESSONS.length}`).join(" · ")}</td>
          <td>${lastDone ? new Date(lastDone).toLocaleString("vi-VN") : "Chưa có"}</td>
          <td><button class="btn secondary small-btn" data-reset-student="${user.username}">Xóa</button></td>
        </tr>
      `;
    })
    .join("");
  return `
    <section class="panel pad">
      <div class="section-title">
        <div>
          <h2>Bảng tiến trình học viên</h2>
          <p>Theo dõi hoàn thành theo tài khoản trên trình duyệt hiện tại. Có thể xuất CSV để lưu vào hồ sơ lớp.</p>
        </div>
        <div class="toolbar-actions">
          <button class="btn secondary" id="resetAllProgress">Xóa tiến trình toàn lớp</button>
          <button class="btn" id="exportCsv">Xuất CSV</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tài khoản</th><th>Học viên</th><th>Hoàn thành</th><th>Tiến độ</th><th>%</th><th>5 tiêu chí</th><th>Lần cập nhật cuối</th><th>Thao tác</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function accountsView() {
  return `
    <section class="panel pad">
      <div class="section-title"><div><h2>Tài khoản lớp học</h2><p>Danh sách đăng nhập theo file DSHV-DIENBIEN.xlsx: 22 học viên và 1 giáo viên.</p></div></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Vai trò</th><th>Tài khoản</th><th>Mật khẩu</th><th>Tên hiển thị</th><th>Giới tính</th></tr></thead>
          <tbody>
            ${USERS.map(
              (user) => `<tr><td>${user.role === "teacher" ? "Giáo viên" : "Học viên"}</td><td>${user.username}</td><td>${user.password}</td><td>${user.name}</td><td>${user.gender ?? ""}</td></tr>`,
            ).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function resetStudentProgress(username) {
  if (!confirm(`Xóa toàn bộ tiến trình của học viên ${username}?`)) return;
  localStorage.removeItem(progressKey(username));
  logEvent(state.user.username, "reset-progress", username);
  render();
}

function resetAllProgress() {
  if (!confirm("Xóa toàn bộ tiến trình của tất cả học viên trong trình duyệt này?")) return;
  USERS.filter((user) => user.role === "student").forEach((user) => {
    localStorage.removeItem(progressKey(user.username));
  });
  logEvent(state.user.username, "reset-all-progress", "class");
  render();
}

function exportCsv() {
  const header = [
    "username",
    "name",
    "gender",
    "completed",
    "total",
    "percent",
    "openedCriteria",
    "mediaCriteria",
    "quizCriteria",
    "practiceImageCriteria",
    "interactionImageCriteria",
    "lastCompletedAt",
  ];
  const rows = USERS.filter((user) => user.role === "student").map((user) => {
    const rate = completionRate(user.username);
    const progress = getProgress(user.username);
    const statuses = LESSONS.map((lesson) => evidenceStatus(progress[lesson.id], lesson.id));
    const counts = ["opened", "media", "quiz", "practiceImage", "interactionImage"].map((key) =>
      statuses.filter((status) => status[key]).length,
    );
    const lastDone = Object.values(progress)
      .map((item) => normalizeLessonEvidence(item).completedAt)
      .filter(Boolean)
      .sort()
      .at(-1) ?? "";
    return [user.username, user.name, user.gender ?? "", rate.done, rate.total, rate.percent, ...counts, lastDone];
  });
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `mini-mls-progress-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

async function openSupportRequest() {
  const progress = state.user ? completionRate(state.user.username) : { done: 0, total: 0, percent: 0 };
  const text = [
    "YEU CAU HO TRO MINI-MLS",
    `Tai khoan: ${state.user?.username ?? "chua dang nhap"} - ${state.user?.name ?? ""}`,
    `Vai tro: ${state.user?.role ?? ""}`,
    `Trang hien tai: ${pageTitle()}`,
    `Tien do: ${progress.done}/${progress.total} (${progress.percent}%)`,
    `Che do mang yeu/offline: ${state.lowBandwidth ? "bat" : "tat"}`,
    `Trang thai trinh duyet: ${navigator.onLine ? "online" : "offline"}`,
    `Duong dan: ${location.href}`,
    "",
    "Mo ta loi:",
    "- Chuong/bai dang hoc:",
    "- Thao tac vua thuc hien:",
    "- Thong bao loi neu co:",
    "- Da thu tai lai trang/chuyen sang che do mang yeu chua:",
    "",
    "Huong dan gui kem: chup man hinh loi, dan anh minh chung bang Ctrl+V trong bai neu loi lien quan den thuc hanh.",
  ].join("\n");
  try {
    await navigator.clipboard?.writeText(text);
  } catch {
    // Clipboard may be blocked on file://; mail body still carries the same content.
  }
  const subject = encodeURIComponent("Ho tro Mini-MLS thong ke CK1 Duoc");
  const body = encodeURIComponent(text);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
  alert("Đã tạo nội dung hỗ trợ. Nếu máy không mở email, nội dung đã được cố gắng sao chép vào clipboard để dán gửi cho giáo viên/quản trị.");
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-assessment]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!isLessonUnlocked(button.dataset.assessment)) return;
      state.assessmentLesson = state.assessmentLesson === button.dataset.assessment ? null : button.dataset.assessment;
      render();
    });
  });
  document.querySelectorAll("[data-open-lesson]").forEach((link) => {
    link.addEventListener("click", () => {
      if (!isLessonUnlocked(link.dataset.openLesson)) return;
      updateLessonEvidence(state.user.username, link.dataset.openLesson, {
        opened: true,
        openedAt: new Date().toISOString(),
      });
    });
  });
  document.querySelectorAll("[data-audio]").forEach((audio) => {
    audio.addEventListener("timeupdate", () => {
      if (!isLessonUnlocked(audio.dataset.audio)) return;
      if (!audio.duration || !Number.isFinite(audio.duration)) return;
      const percent = audio.ended ? 100 : Math.min(99, Math.floor((audio.currentTime / audio.duration) * 100));
      const progress = getProgress(state.user.username);
      const current = normalizeLessonEvidence(progress[audio.dataset.audio]).audioPercent;
      if (percent > current && (percent === 100 || percent - current >= 10)) {
        updateLessonEvidence(state.user.username, audio.dataset.audio, { audioPercent: percent });
      }
    });
    audio.addEventListener("ended", () => {
      if (!isLessonUnlocked(audio.dataset.audio)) return;
      updateLessonEvidence(state.user.username, audio.dataset.audio, { audioPercent: 100 });
      render();
    });
  });
  document.querySelectorAll("[data-assessment-form]").forEach((form) => {
    form.querySelectorAll("[data-paste-target]").forEach((zone) => {
      zone.addEventListener("paste", async (event) => {
  const imageFile = [...event.clipboardData.files]
    .find((file) => file.type.startsWith("image/"));

  if (!imageFile) return;

  event.preventDefault();

  const lessonId = form.dataset.assessmentForm;
  const evidenceType = zone.dataset.pasteTarget;
  const note = zone.nextElementSibling;

  try {
    zone.classList.add("uploading");
    if (note) note.textContent = "Đang nén và tải ảnh...";

    const dataUrl = await fileToCompressedDataUrl(imageFile);
    const imagePath = await uploadEvidenceImage(
      lessonId,
      evidenceType,
      dataUrl,
    );

    form.dataset[evidenceType] = dataUrl;
    form.dataset[`${evidenceType}Path`] = imagePath;
    form.dataset[`${evidenceType}Name`] = imagePath.split("/").at(-1);

    zone.innerHTML = `<img src="${dataUrl}" alt="Ảnh đã dán" />`;

    if (note) {
      note.textContent =
        "Đã tải ảnh lên hệ thống. Bấm Chấm và lưu đánh giá.";
    }
  } catch (error) {
    console.error(error);
    if (note) note.textContent = `Không tải được ảnh: ${error.message}`;
  } finally {
    zone.classList.remove("uploading");
  }
});
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const lessonId = form.dataset.assessmentForm;
      const current = normalizeLessonEvidence(getProgress(state.user.username)[lessonId]);
      const quiz = getQuiz(lessonId);
      const quizAnswers = quiz.map((_, index) => {
        const value = formData.get(`q${index}`);
        return value == null ? null : Number(value);
      });
      const practiceImage = form.dataset.practiceImage || current.practiceImage;
      const interactionImage = form.dataset.interactionImage || current.interactionImage;
      updateLessonEvidence(state.user.username, lessonId, {
        quizAnswers,
        quizScore: scoreQuiz(quiz, quizAnswers),
        practiceImage,
practiceImagePath:
  form.dataset.practiceImagePath || current.practiceImagePath,
practiceImageName:
  form.dataset.practiceImageName || current.practiceImageName,
interactionImage,
interactionImagePath:
  form.dataset.interactionImagePath || current.interactionImagePath,
interactionImageName:
  form.dataset.interactionImageName || current.interactionImageName,
      });
      render();
    });
  });
  document.querySelector("#exportCsv")?.addEventListener("click", exportCsv);
  document.querySelector("#resetAllProgress")?.addEventListener("click", resetAllProgress);
  document.querySelector("#lowBandwidthPanelBtn")?.addEventListener("click", toggleLowBandwidth);
  document.querySelectorAll("[data-reset-student]").forEach((button) => {
    button.addEventListener("click", () => resetStudentProgress(button.dataset.resetStudent));
  });
}

function dataUrlToBlob(dataUrl) {
  const [header, base64] = dataUrl.split(",");
  const mime = header.match(/data:(.*?);base64/)?.[1] ?? "image/jpeg";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index++) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mime });
}

async function uploadEvidenceImage(lessonId, evidenceType, dataUrl) {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) {
    throw new Error("Phiên đăng nhập đã hết hạn.");
  }

  const blob = dataUrlToBlob(dataUrl);
  const fileName = `${evidenceType}-${Date.now()}.jpg`;
  const filePath = `${user.id}/${lessonId}/${fileName}`;

  const { data, error } = await supabaseClient.storage
    .from("evidence")
    .upload(filePath, blob, {
      contentType: "image/jpeg",
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  return data.path;
}


async function getEvidenceSignedUrl(imagePath) {
  if (!imagePath) return "";

  const { data, error } = await supabaseClient.storage
    .from("evidence")
    .createSignedUrl(imagePath, 3600);

  if (error) throw error;

  return data.signedUrl;
}

function fileToCompressedDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1100;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function render() {
  if (!state.user) {
    renderLogin();
    return;
  }
  const views = {
    dashboard: dashboardView,
    lessons: lessonsView,
    resources: resourcesView,
    report: reportView,
    accounts: accountsView,
  };
  if (state.user.role !== "teacher" && ["report", "accounts"].includes(state.view)) {
    state.view = "dashboard";
  }
  renderShell((views[state.view] ?? dashboardView)());
  bindDynamicEvents();
}

async function init() {
  document.querySelector("#app").innerHTML =
    `<div class="empty">Đang tải Mini-MLS...</div>`;

  await loadLessonQuizzes();

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  if (session?.user) {
    try {
      state.user = await loadProfile(session.user.id);
      writeJson("miniMLS.currentUser", state.user);
	await loadCurrentUserProgress();


    } catch (error) {
      console.error(error);
      await supabaseClient.auth.signOut();
    }
  }

  render();
}
init();
