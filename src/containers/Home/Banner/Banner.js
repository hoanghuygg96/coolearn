import React from "react";

import { ReactComponent as SchoolLogo } from "../../../assets/SVG/school.svg";
import { ReactComponent as GobalLogo } from "../../../assets/SVG/public.svg";
import { ReactComponent as AlarmLogo } from "../../../assets/SVG/access_alarms.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__item">
        <SchoolLogo />
        <h3 className="heading-teriary u-margin-top-small u-margin-bottom-small u-padding-bottom-small">
          100+ khóa học online
        </h3>
        <p className="banner__item--text ">
          Các khóa học được cập nhật liên tục & đạt chuẩn quốc tế
        </p>
      </div>

      <div className="banner__item">
        <GobalLogo />
        <h3 className="heading-teriary u-margin-top-small u-margin-bottom-small u-padding-bottom-small">
          Giảng viên tận tình
        </h3>
        <p className="banner__item--text ">
          Tìm một người hướng dẫn phù hợp & đồng hành cùng bạn
        </p>
      </div>

      <div className="banner__item">
        <AlarmLogo />
        <h3 className="heading-teriary u-margin-top-small u-margin-bottom-small u-padding-bottom-small">
          Linh hoạt về thời gian
        </h3>
        <p className="banner__item--text ">
          Học tập với thời gian linh hoạt, chủ động & phù hợp với lịch trình
        </p>
      </div>
    </div>
  );
};

export default Banner;
