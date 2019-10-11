import React, { Component } from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import carousel

// import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

// svg
import { ReactComponent as Facebook } from "../../../assets/SVG/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/SVG/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/SVG/instagram.svg";

// img
import Review_1 from "../../../assets/img/review-1.jpeg";
import Review_2 from "../../../assets/img/review-2.jpeg";
import Review_3 from "../../../assets/img/review-3.jpeg";

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="testimonials__content">
          <h2 className="testimonials__heading">
            Tham gia với chúng tôi ngay hôm nay.
          </h2>

          <p>
            Hơn <strong>10,000</strong> học viên khắp cả nước đã thành công sau
            mỗi khóa học.
          </p>
          <div className="testimonials__logo">
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
            <a href="https://twitter.com/">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="testimonials__feelback">
          <TestimonialItem
            picture={Review_1}
            text="Đây lầ trung tâm đào tạo tốt nhất tôi từng tham gia, khóa học tốt có giá hợp lý, đây là cách mạng trong việc dạy online."
            name="Trần"
            locate="Front End"
          />

          <TestimonialItem
            picture={Review_2}
            text="HAY QUÁ ... hay quá là hay, khóa học đơn giản, và vui, tổ chức bài giảng hợp lý, tôi có thể tìm thấy tất cả các thứ cần học ở đây mà không cần đi đâu xa."
            name="Hoàng"
            locate="Back End"
          />

          <TestimonialItem
            picture={Review_3}
            text="Thật là tuyệt vời. Khóa học dạy từng bước rất cẩn thận. Tôi sẽ học nhiều nhiều hơn nữa từ hôm nay. Hãy tiếp tục phát huy."
            name="Huy"
            locate="Full Stack"
          />
        </div>
      </div>
    );
  }
}

export default Testimonials;
