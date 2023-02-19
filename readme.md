# Cài đặt expressjs
 ### B1: cài môi trường nodejs
 ```
  npm init
 ``` 
 - **package name** là tên của pakage mình sử dụng (enter để lấy mặc định)
 - **version** là version của phiên bản hiện tại
 - **description** mô tả của dự án
 - **entry point** Khi ứng dụng chạy sẽ lấy file này làm file mặc định khởi chạy (mặc định là index.js). Mình có thể thay đổi tùy ý
 - **test command** Dùng để chạy các test để đảm bảo ứng dụng có hoạt động đúng với mong muốn hay không (Có thể bỏ qua)
 - **git reponsitory** Là reponsitory của git hub, copy đoạn remote quăng vào là được
 - **keywords** (Có thể bỏ qua)
 - **author** Tác giả của mã nguồn (Có thể bỏ qua)

 # Thư viện nodemon
 Dùng để lắng nghe sự thay đổi của các file nodejs. Nó sẽ tự render lại giao diện (Nếu không cài thì thay đổi gì cũng phải tắt server và chạy lại)

 ```
 npm i nodemon
 ```

 ### Cài đặt script
 
 ```
   "scripts": {
      "start": "nodemon --inspect ./index.js",
    }
 ```
  --inspect dùng để cài node debug trong devtool, khi cài dòng lệnh trên thì chỉ cần gõ ***npm start*** là ứng dụng sẽ chạy