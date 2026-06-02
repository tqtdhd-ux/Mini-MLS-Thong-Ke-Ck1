# Mini-MLS Thống kê CK1 Dược

Website học tập tĩnh cho lớp Chuyên khoa 1 Dược, gồm 22 tài khoản học viên theo `DSHV-DIENBIEN.xlsx`, 1 tài khoản giáo viên, bài học Elearning, audio, dữ liệu thực hành và quản lý tiến trình bằng `localStorage`.

## Chạy thử

Mở trực tiếp file `index.html` trong trình duyệt để chạy thử nhanh. Khi triển khai chính thức, nên chạy qua web server/IIS/Nginx để đường dẫn học liệu, audio và câu hỏi quiz tải ổn định hơn.

Nếu máy cho phép chạy Node, có thể chạy server tĩnh kèm theo:

```powershell
node server.cjs
```

Sau đó truy cập `http://127.0.0.1:5173`.

## Tài khoản

- Giáo viên: `gv01` / `GV@2026`
- Học viên: dùng `Mã học viên` trong file `DSHV-DIENBIEN.xlsx`
- Mật khẩu học viên: `CK1@` + 4 số cuối của mã học viên
- Ví dụ: `2521004` / `CK1@1004`

## Cấu trúc

- `index.html`: điểm vào website.
- `src/app.js`: dữ liệu khóa học, tài khoản, logic đăng nhập, tiến trình và xuất báo cáo.
- `src/quiz-bank.js`: ngân hàng quiz 20 câu/chương được trích từ phần Trắc nghiệm Lượng giá trong các file HTML.
- `src/styles.css`: giao diện đáp ứng cho desktop/mobile.
- `public/lessons`: 11 bài học HTML.
- `public/assets`: ảnh, audio, dữ liệu CSV/SAV, PDF, DOCX và video thực hành.
- `public/assets/docs/DSHV-DIENBIEN.xlsx`: danh sách học viên dùng để tạo tài khoản.

## Tiêu chuẩn hoàn thành bài học

Một bài học được tính là hoàn thành khi học viên đạt đủ 5 tiêu chí:

- Đã mở bài học.
- Đã xem/nghe 100% học liệu chính, ghi nhận tự động qua trình phát audio.
- Quiz cuối bài được hệ thống tự chấm, lấy câu hỏi từ mục `Trắc nghiệm Lượng giá` trong file HTML từng chương và phải đạt từ 80% trở lên.
- Có ảnh minh chứng thực hành SPSS, dán trực tiếp từ clipboard bằng Ctrl+V.
- Có ảnh minh chứng tương tác nhanh trong bài học, dán trực tiếp từ clipboard bằng Ctrl+V.

Học viên chỉ mở được bài kế tiếp sau khi bài hiện tại đạt chuẩn. Giáo viên có thể xem số bài đạt chuẩn trong báo cáo và xuất CSV, gồm cả số bài đạt từng nhóm tiêu chí.

## Ghi chú triển khai Hub

Phiên bản này phù hợp để đặt trên Hub nội bộ hoặc static hosting. Dữ liệu tiến trình được lưu theo trình duyệt; nếu cần quản lý tập trung nhiều máy, bước tiếp theo là bổ sung backend hoặc tích hợp LMS/xAPI/LTI.

## Uu tien trien khai moi

- Moi bai hoc hien thi muc "Con thieu gi de dat chuan" dua tren 5 tieu chi hoan thanh.
- Moi chuong co mau cau viet luan van, dung de chuyen ket qua SPSS thanh cau van hoc thuat.
- Che do mang yeu/offline co the bat/tat tren thanh tren cung; khi bat, giao dien han che tai anh dai dien va chi tai audio khi hoc vien bam nghe.
- Nut "Ho tro nhanh" tao noi dung bao loi gom tai khoan, trang hien tai, tien do, che do mang va huong dan gui kem anh chup man hinh.
