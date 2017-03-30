
# Ứng dụng trên điện thoại ôn thi THPT hiệu quả và thú vị. Sử dụng Cordova + Framewrok7 + VueJS + Vuex + Webpack2 + Firebase + Swipper :tada:
[![dependencies Status](https://david-dm.org/cuduy197/cunghoctot/status.svg)](https://david-dm.org/cuduy197/cunghoctot)
[![Build Status](https://travis-ci.org/cuduy197/HocTiengAnh.svg?branch=master)](https://travis-ci.org/cuduy197/HocTiengAnh)
# Hướng dẫn :tada:
- B1: Sau khi clone xong mở cmd nhập "npm i" xong đi uống càfe gì đó 1 lúc 
- B2: Thêm platforms cho cordova bằng "cordova platform add browser --save" và "cordova platform add android --save" 
- B3: Thêm plugin cho cordova
    + cordova plugin add cordova-plugin-inappbrowser --save
    + cordova plugin add cordova-plugin-statusbar --save
    + cordova plugin add cordova-plugin-tts --save
    + cordova plugin add cordova-plugin-vibration --save

# Chạy app trên trình duyệt bằng lệnh "npm run dev" :tada:
- Sau khi chạy, sẽ tự động mở địa chỉ của app trên máy là : "localhost:8081"
- App sử dụng webpack đã cấu hình các loader để chạy và thay đổi trực tiếp khi chỉnh sửa (live reload)

# Android :tada:
- Xuất apk demo bằng "cordova build" (lưu ý: phải thêm platform android cho cordova thì mới build được nhé, sau đó để xuất được thì máy cần cài java jdk bản 1.8, adnroid sdk sau đó cài đặt ANDROID_HOME, JAVA_HOME trong Environment variables)

