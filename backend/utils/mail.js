const nodemailer = require("nodemailer");

exports.generateOTP = (otp_length = 6) => {
  // generate 6 digit otp
  let OTP = "";
  for (let i = 0; i <= otp_length; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }

  return OTP;
};

exports.generateMailTransporter = () =>
  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0b96b585a3d71c",
      pass: "ad8f0a1ffcf03f",
    },
  });
