/**
 * GOOGLE APPS SCRIPT CHO FORM THU THẬP THÔNG TIN DENTALX
 * 
 * HƯỚNG DẪN CÀI ĐẶT TRONG 1 PHÚT:
 * 1. Mở một Google Sheet mới trên Google Drive của bạn (đặt tên: "Danh Sách Sinh Viên DentalX").
 * 2. Vào menu: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xóa hết code cũ trong file Code.gs và dán toàn bộ đoạn code này vào.
 * 4. Nhấn nút "Triển khai" (Deploy) ở góc trên bên phải -> Chọn "Triển khai mới" (New deployment).
 * 5. Chọn loại: "Ứng dụng web" (Web App).
 *    - Mô tả: "DentalX Collector"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone).
 * 6. Nhấn "Triển khai" (Deploy), cấp quyền truy cập, rồi copy đường link Web App URL.
 * 7. Dán link này vào ô "Đồng Bộ Trực Tiếp Vào Google Sheets" trên trang web form là xong!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Nếu sheet chưa có tiêu đề, tạo hàng tiêu đề ở dòng 1
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian gửi", 
        "Họ và tên", 
        "MSSV", 
        "Nhóm", 
        "Đường dẫn DentalX", 
        "Tài khoản", 
        "Mật khẩu", 
        "Tên phòng khám", 
        "Bác sĩ 2", 
        "Khoảng doanh thu", 
        "Số lượng KH", 
        "Ghi chú / Yêu cầu riêng"
      ]);
      // Định dạng dòng tiêu đề
      var headerRange = sheet.getRange(1, 1, 1, 12);
      headerRange.setBackground("#1F4E79");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    // Đọc dữ liệu JSON gửi lên từ Web Form
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Ghi một dòng dữ liệu mới vào Google Sheet
    sheet.appendRow([
      timestamp,
      data.fullname,
      data.mssv,
      data.groupName,
      data.subdomain,
      data.account,
      data.password,
      data.clinicName,
      data.doctor2,
      data.revenueOption,
      data.patientCount,
      data.notes
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
