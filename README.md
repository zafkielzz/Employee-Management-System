# Employee-Management-System

Ứng dụng web quản lý nhân viên viết bằng **React**.  
Dự án sử dụng **Material UI (MUI)** để xây dựng giao diện, **Axios** để kết nối API, và hỗ trợ **filter, dialog hiển thị danh sách nhân viên, download dữ liệu**.

---

##  Tính năng chính
-  Hiển thị danh sách nhân viên từ **Mock API**.
-  **Filter/Search** theo tên hoặc ID.
-  Thêm,  Sửa,  Xóa nhân viên.
-  **Dialog** hiển thị chi tiết nhân viên.
-  **Download dữ liệu** dạng file bằng `Blob`.
-  Giao diện bằng **Material UI**.

---

##  Công nghệ sử dụng
- [React](https://react.dev/)  
- [Material UI (MUI)](https://mui.com/)  
- [Axios](https://axios-http.com/)  

---

##  Cách chạy dự án
1. Clone repo về máy:
   ```bash
   git clone https://github.com/your-username/employee-management.git
   cd employee-management
   
---
2. Cài đặt dependencies:
   ```bash
   npm install   
---

3. Chạy project:
   ```bash
   npm start 
---
##  Mock API (JSON Server)

1. Cài JSON Server (nếu chưa có):  
   ```bash
   npm install -g json-server
---

 
2.Chạy API với file db.json (dứng dụng để port 3000)
   ```bash
   json-server --watch db.json --port 3000
```
---
3.Endpoint sẽ ở:
  ```bash
    http://localhost:3000/employees
```

