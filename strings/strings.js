let LocalizedStrings = require('react-native-localization');

let strings = new LocalizedStrings({
  en: {
    login: "Login",
    register: "Register",
    login_with_email: "Login with email",
    login_facebook: "Login facebook",
    login_google: "Login google",
    login_twitter: "Login twitter",
    username_or_email: "Username or Email",
    display_name: "Display name",
    password: "Password",
    re_password: "Confirm Password",
    dont_have_account: "Don't have account? Sign up",

    success: "Success",
    successful: "Successful!",
    login_success: "Login success",
    warning: "Warning",
    failed: "Failed",
    error: "Error",
    cancel: "Cancel",
    ok: "Ok",
  },
  vi: {
    login: "Đăng nhập",
    register: "Đăng ký",
    login_facebook: "Đăng nhập facebook",
    login_google: "Đăng nhập google",
    username_or_email: "Tên đăng nhập hoặc Email",
    password: "Mật khẩu",

    success: "Thành công",
    successful: "Thành công",
    login_success: "Đăng nhập thành công",
    warning: "Cảnh báo",
    failed: "Thất bại",
    error: "Lỗi",
    cancel: "Hủy",
    ok: "Ok",
  }
});

module.exports = strings;