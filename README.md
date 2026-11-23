# HỆ THỐNG THU THẬP THÔNG TIN BÀI TẬP DENTALX (VLU)

Bộ công cụ hỗ trợ nhóm sinh viên Khoa Răng Hàm Mặt - Trường Đại học Văn Lang điền thông tin để tự động hóa toàn bộ bài tập lớn môn **"Lập kế hoạch xây dựng phòng khám + Quản trị rủi ro"**.

---

## 1. CÁC CÁCH SỬ DỤNG

### Cách 1: Dùng trực tiếp file Excel
- Mở file `DentalX_Danh_Sach_Thu_Thap_Sinh_Vien.xlsx` trong thư mục.
- Gửi file này (hoặc tải lên Google Drive tạo Google Sheet) cho các bạn trong nhóm điền.
- Khi các bạn điền xong, tab **"Công Thức Sinh Prompt"** sẽ tự động ghép thông tin thành câu lệnh hoàn chỉnh. Bạn chỉ việc copy câu lệnh đó dán vào Antigravity là xong!

### Cách 2: Mở trực tiếp Web Form trên máy tính
- Click đúp vào file `index.html` trong thư mục này để mở trên Chrome/Edge.
- Tự nhập hoặc điền thông tin các bạn.
- Bấm **"Xuất File Excel"** để tải file `.xlsx` hoặc bấm **"Copy Prompt"** để AI làm bài ngay.

### Cách 3: Đưa lên GitHub Pages (Để chia sẻ link cho cả lớp/nhóm cùng điền online)
Chỉ mất đúng 2 phút để đưa trang web lên mạng miễn phí:
1. Đăng nhập vào [GitHub](https://github.com) -> Tạo một Repository mới (ví dụ đặt tên: `dentalx-form`). Để chế độ **Public**.
2. Tải toàn bộ các file trong thư mục này (`index.html`, `README.md`) lên repository đó.
3. Vào tab **Settings** của repository -> Chọn menu **Pages** ở thanh bên trái.
4. Tại mục **Branch**, chọn `main` (hoặc `master`) và thư mục `/(root)`, rồi nhấn **Save**.
5. Sau 30 giây, GitHub sẽ cung cấp link công khai:
   `https://<ten-username-github>.github.io/dentalx-form/`
6. Gửi link này vào nhóm Zalo/Messenger cho các bạn điền thông tin trên điện thoại hoặc máy tính!

---

## 2. KẾT NỐI TỰ ĐỘNG VỚI GOOGLE SHEETS (TÙY CHỌN)
Nếu muốn khi các bạn điền form trên link web thì dữ liệu tự động đổ về Google Sheet của bạn:
1. Tạo 1 Google Sheet trên Drive.
2. Vào **Tiện ích mở rộng (Extensions)** -> **Apps Script**.
3. Dán code trong file `google_apps_script.js` vào.
4. Bấm **Deploy (Triển khai)** -> **New deployment** -> Chọn **Web App** -> Ai có quyền: **Anyone (Bất kỳ ai)**.
5. Copy link Web App dán vào ô cài đặt trên trang web form là xong!

---

## 3. CÁCH ĐƯA THÔNG TIN VÀO AI ĐỂ TỰ ĐỘNG LÀM BÀI
Khi đã có thông tin của một bạn (từ Web hoặc Excel), bạn chỉ cần dán đoạn Prompt sau vào Antigravity:

```text
Hãy hoàn thành trọn gói bài tập DentalX cho bạn: [HỌ VÀ TÊN] (MSSV: [MSSV], Lớp: [NHÓM]).
- Đường dẫn DentalX: https://vlu-[MSSV].dentalx.vn/
- Tài khoản: [TÀI KHOẢN]
- Mật khẩu: [MẬT KHẨU]
- Tên phòng khám: [TÊN PHÒNG KHÁM hoặc để AI tự chọn]
- Bác sĩ thứ 2: [TÊN BS 2 hoặc để AI tự chọn]
- Yêu cầu: Đủ 3 ghế nha, 2 bác sĩ, 1 quản lý, 1 phụ tá, 1 lễ tân.
- Khách hàng & Doanh thu: Tạo ngẫu nhiên 5-10 khách hàng, doanh thu ngẫu nhiên phân bổ tự nhiên cho 2 bác sĩ.
- In ấn: In Bệnh án điện tử trám răng (ban ngày giờ hành chính), in Đơn thu tiền và Đơn thuốc Paracetamol 500mg chuẩn format website.
- Báo cáo: Chụp đủ 10 ảnh mục 1, chèn ảnh in ấn mục 2 & 3, xuất file Word "[MSSV] - [HỌ TÊN] - [NHÓM].docx" chuẩn chữ đen 14pt, title 16pt bold, giãn dòng 1.5, không mô tả thừa.
```
