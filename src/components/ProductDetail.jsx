import React from "react";
import styled from "styled-components";
import { Button, Col, Row } from "antd";
import { useParams } from "react-router-dom";

const ProductDetailStyle = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 20px;
  height: calc(100vh - 20px);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <ProductDetailStyle>
      <Row style={{ height: "100%" }}>
        <Col span={8}>
          <img
            alt="item"
            src="https://getbootstrap.com.vn/blog/wp-content/uploads/2020/02/min-la-ai.jpg"
            style={{ width: "100%", height: "90%", objectFit: "cover" }}
          />
          <div style={{ marginTop: "20px", alignItem: "center" }}>
            <Button type="primary" block>
              Thêm vào giỏ hàng
            </Button>
          </div>
        </Col>
        <Col span={16} style={{ paddingLeft: "20px" }}>
          <p style={{ padding: "2px 10px", fontSize: "30px" }}>
            Nguyễn Minh Hằng, thường được biết đến với n sdfadđfsdfghệ danh Min
            là một nữ ca sĩ và vũ công người
          </p>
          <p
            style={{
              padding: "2px 10px",
              margin: 0,
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            20000 đ
          </p>
          <p
            style={{
              padding: "2px 10px",
              margin: 0,
              fontWeight: "350",
              fontSize: "20px",
            }}
          >
            Năm 2012, sau một biến cố, gia đình cô bị phá sản và phải đối mặt
            với khoản nợ lớn,[4] cô trở về Việt Nam và làm biên tập viên của một
            kênh truyền hình về quốc phòng. Do đã có thời gian tự học nhảy từ
            năm 14 tuổi khi còn ở bên Đức, nên khi ứng tuyển vào st.319 cô đã
            trở thành vũ công chính tại nhóm nhảy St.319. Không lâu sau đó cô
            quyết định từ chức để trở thành một vũ công.[1][3] Trong thời gian
            hoạt động tại nhóm nhảy St.319, Min đã thu hút được nhiều sự chú ý
            của khán giả và những nghệ sĩ quốc tế, cùng với đó là những giải
            thưởng trong các cuộc thi về vũ đạo. Min trở thành một trong những
            thành viên nổi bật nhất của nhóm nhảy St.319. Cô cũng chính là thành
            viên đầu tiên có video dance cover quảng bá solo khi thể hiện vũ đạo
            ca khúc "Sherlock" của SHINee và ca khúc "Only One" của BoA.[3]
            Riêng màn cover vũ đạo ca khúc Only One của Min đã được chính BoA
            dành những lời có cánh khen ngợi, cùng với đó là những bình luận
            tích cực từ giới hâm mộ quốc tế cũng như những nghệ sĩ nổi tiếng
            trong làng giải trí Hàn Quốc.[5][6] Năm 2012, Min xuất hiện trong MV
      
          </p>
        </Col>
      </Row>
    </ProductDetailStyle>
  );
}
