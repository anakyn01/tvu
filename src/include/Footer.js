import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return(
<>
<div className="bg-secondary w-100">
<Container className="">
<Row>
    <Col md={3}>
    <h1 className="mt-3 fw-bold text-white">TVU</h1>
    </Col>
    <Col md={9} className="py-3 text-white fw-bold">
    "TVU는 여러분의 참신한 아이디어를 환영합니다" <br/>발행인 겸 편집인 : 이영애 | 서울시 종로구 지하문로 16길 1 <br/>
    전화 : 02-737-8266 사업자정보: 101-86-87833
    </Col>
</Row>
</Container>
</div>
</>
    );
}
export default Footer;