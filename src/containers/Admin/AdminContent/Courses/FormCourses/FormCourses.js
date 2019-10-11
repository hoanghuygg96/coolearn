import React, { Component } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
  //  FormText
} from "reactstrap";
class FromCourses extends Component {
  render() {
    const {
      onChange,
      // onSelectImg,
      isDisabled,

      maKhoaHoc,
      tenKhoaHoc,
      // hinhAnh,
      moTa,
      danhMucKhoaHoc
    } = this.props;
    return (
      <Form>
        <Row form>
          <Col md={12}>
            <FormGroup className="admin-form-group">
              <Label for="maKhoaHoc">Mã khóa học</Label>
              <Input
                type="text"
                name="maKhoaHoc"
                id="maKhoaHoc"
                placeholder="Mã khóa học"
                onChange={onChange()}
                disabled={isDisabled ? true : false}
                value={maKhoaHoc}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={12}>
            <FormGroup className="admin-form-group">
              <Label for="tenKhoaHoc">Tên khóa học</Label>
              <Input
                type="text"
                name="tenKhoaHoc"
                id="tenKhoaHoc"
                placeholder="Tên khóa học"
                onChange={onChange()}
                value={tenKhoaHoc}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup className="admin-form-group">
              <Label for="moTa">Mô tả</Label>
              <Input
                type="text"
                name="moTa"
                id="moTa"
                placeholder="Mô tả"
                onChange={onChange()}
                value={moTa}
              />
            </FormGroup>
          </Col>
        </Row>

        {/* //// */}
        <Row form>
          <Col sm={12}>
            <FormGroup className="admin-form-group">
              <Label for="maDanhMucKhoaHoc">Loại khóa học</Label>
              <Input
                type="select"
                name="maDanhMucKhoaHoc"
                id="maDanhMucKhoaHoc"
                onChange={onChange()}
                value={danhMucKhoaHoc}
              >
                <option value="EMPTY">Chưa chọn</option>
                <option value="TuDuy">Tư duy lập trình</option>
                <option value="FullStack">Lập trình Full Stack</option>
                <option value="FrontEnd">Lập trình Front end</option>
                <option value="DiDong">Lập trình di động</option>
                <option value="Design">Thiết kế Web</option>
                <option value="BackEnd">Lập trình Backend</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        {/* //// */}
        {/* <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="hinhAnh">Hình ảnh</Label>
              <Input
                type="file"
                name="hinhAnh"
                id="hinhAnh"
                onChange={onSelectImg()}
              />
              <FormText color="muted"></FormText>
            </FormGroup>
          </Col>
        </Row> */}
      </Form>
    );
  }
}

export default FromCourses;
