import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import regionsData from './regions.json'; // JSON 파일을 import

const Header = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setRegions(regionsData.regions); // regionsData의 regions 배열을 상태에 저장
      setLoading(false); // 데이터 로딩 완료
    } catch (err) {
      setError("데이터를 불러오는 데 오류가 발생했습니다.");
      setLoading(false); // 오류 발생 시 로딩 완료
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <>
      <Container>
        <Row>


          <Col md={3}>
            <div className="py-2">
              <a href="#" className="btn">
                선거구 후보검색
              </a>
            </div>
          </Col>

          <Col md={6}>
            <div className="py-2 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-control-user py-2"
                placeholder="후보자나 선거구 이름을 치세요"
                aria-label="Search for candidates or districts"
              />
            </div>
          </Col>

          <Col md={3}>
            <div className="py-2">

              <select id="regions" className="form-select form-control-user py-2">
                {loading ? (
                  <option>로딩 중...</option>
                ) : error ? (
                  <option>오류 발생: {error}</option>
                ) : (
                  regions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))
                )}
              </select>
              <label htmlFor="regions" className="form-label">
                급상승후보 10인:
              </label>
            </div>
          </Col>

          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
