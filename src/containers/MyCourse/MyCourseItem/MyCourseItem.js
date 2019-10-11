import React from "react";
import { Link } from "react-router-dom";

import ImgReplace from "../../../assets/img/img_replace.PNG";

const MyCourseItem = props => {
  const addDefaultSrc = ev => {
    ev.target.src = ImgReplace;
  };

  return (
    <div className="mycourse__item">
      <div>
        <img
          src={props.hinhAnh}
          alt={`hinh khóa học`}
          className="mycourse__item-img"
          onError={addDefaultSrc}
        />
      </div>

      <div className="mycourse__item-text">
        <div>
          <h4 className="mycourse__item-title">{props.tenKhoaHoc}</h4>
        </div>

        <div>
          <div>
            <span>{props.moTa}</span> | <span>{props.nguoiTao}</span>
          </div>
        </div>
      </div>

      <div className="mycourse__btn">
        <Link
          to={`/sub-course/${props.maKhoaHoc}`}
          style={{ textDecoration: "none" }}
          className="mycourse__enter"
        >
          Truy cập khóa học
        </Link>
        <button
          className="mycourse__delete"
          onClick={props.onUnsub}
          type="button"
        >
          Hủy khóa học
        </button>
      </div>
    </div>
  );
};

export default MyCourseItem;
