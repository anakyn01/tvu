import {Container, Row, Col, Carousel, Form, Button} from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
import WordBubbleChart from './WordBubbleChart';
import AreaChart from './AreaChart';
import FeedbackButtons from './FeedbackButtons'; 
import Comment from './Comment';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// 도넛 차트 데이터 (좌측)
const doughnutData = {
  labels: [
    '이슈-민생/실업',
    '인물-인성/능력',
    '인물-범죄/전과물의',
    '인물-사상/혐오/지역차별',
    '이슈-정부조직',
    'Construction Negative',
    'Not related',
  ],
  datasets: [
    {
      data: [10, 15, 8, 35, 12, 18, 2],
      backgroundColor: [
        '#2E7D32',
        '#1A237E',
        '#FBC02D',
        '#E040FB',
        '#EF5350',
        '#6D4C41',
        '#33691E',
      ],
    },
  ],
};

// 면적 그래프 데이터 (우측)
const areaChartData = {
  labels: [7, 8, 9, 10, 11, 12, 13],
  datasets: [
    {
      label: '전체 언급량',
      data: [5, 10, 8, 15, 25, 10, 12],
      backgroundColor: 'rgba(156, 39, 176, 0.3)',
      borderColor: 'rgba(156, 39, 176, 1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: '부정 언급량',
      data: [2, 4, 3, 5, 7, 3, 4],
      backgroundColor: 'rgba(123, 31, 162, 0.3)',
      borderColor: 'rgba(123, 31, 162, 1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const socialMediaUsageData = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  datasets: [
    {
      label: '네이버',
      data: [80, 90, 85, 88, 95, 92, 96],
      borderColor: '#03A9F4',
      backgroundColor: 'rgba(3, 169, 244, 0.2)',
      fill: false,
      tension: 0.3,
    },
    {
      label: '페이스북',
      data: [60, 65, 70, 72, 75, 73, 70],
      borderColor: '#4267B2',
      backgroundColor: 'rgba(66, 103, 178, 0.2)',
      fill: false,
      tension: 0.3,
    },
    {
      label: '구글',
      data: [90, 92, 94, 96, 98, 97, 99],
      borderColor: '#DB4437',
      backgroundColor: 'rgba(219, 68, 55, 0.2)',
      fill: false,
      tension: 0.3,
    },
    {
      label: '트위터',
      data: [50, 55, 60, 58, 62, 65, 67],
      borderColor: '#1DA1F2',
      backgroundColor: 'rgba(29, 161, 242, 0.2)',
      fill: false,
      tension: 0.3,
    },
  ],
};

const Home = () => {
    return(
<>
<div>
    <Container>
        <Row>
            <Col md="12">
             <Carousel className=''>
      <Carousel.Item className='bg-white'>
        <Row>
		<div class="col-md-6">
<iframe width="100%" height="360" src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0" allowfullscreen class="video_tag my-5" ></iframe>
</div>
            <Col lg="6">
                <Form.Group className="mainColor mt-4 mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='fw-bold'>프로필</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mainColor mt-4 mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='fw-bold'>전과기록</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mainColor mt-4 mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='fw-bold'>공약</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Col>
        </Row>
        {/*<img
          className="d-block w-100"
          src=""
          alt="First slide"
        />*/}
        {/*<Carousel.Caption className='bg-white'>
          <h5>First slide label</h5>
          <textarea></textarea>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>*/}
      </Carousel.Item>
      </Carousel>
            </Col>
        </Row>
      <Row>
        <h5 className='fw-bold'>선거공약/ 후보자정보에 대한 반응</h5>
        <div className='navBg p-3 text-white fw-bold'>그래프를 클릭하시면 보실수 있습니다</div>
      </Row>
 <Row>
        <Col md={6}>
          <h5 className="fw-bold mt-4 mb-2">이슈 분포 <small>(도넛 그래프)</small></h5>
          <Doughnut data={doughnutData} />
        </Col>
        <Col md={6}>
          <h5 className="fw-bold mt-4 mb-2">시간대별 언급량 <small>(면적 그래프)</small></h5>

            <Line data={areaChartData} />

          
        </Col>
      </Row>

      <Row>
        <h5 className='fw-bold'>일주일간 긍부정 변화그래프</h5>
        <div className='navBg p-3 text-white fw-bold'>그래프를 클릭하시면 보실수 있습니다</div>
      </Row>
    <Row>
    <Col>
        <WordBubbleChart />
    </Col>
    </Row>

      <Row>
        <h5 className='fw-bold'>소셜미디어 댓글수</h5>
        <div className='navBg p-3 text-white fw-bold'>그래프를 클릭하시면 보실수 있습니다</div>
      </Row>

<Row>
  <Col>
    <AreaChart />
  </Col>
</Row>

      <Row>
        <h5 className='fw-bold'>인터넷 검색수</h5>
        <div className='navBg p-3 text-white fw-bold'>그래프를 클릭하시면 보실수 있습니다</div>
      </Row>

      <Row>
   <Col>
    <Line data={socialMediaUsageData} className='fs-12'/>
    <FeedbackButtons />
  </Col>
</Row>

<Row>
<Col md={12}>
<div className='input-group mt-4 mb-2'>
<input type='search' className='form-control'/>
<Button className='btn navBg'>send</Button>  
</div>
</Col>
</Row>

<Row>
<Comment/> 
</Row>

<Row>
  <Col md={12}>
  <div className='my-5'>
  <Button className='form-control navBg py-3'>더보기</Button>
  </div>
  </Col>
</Row>

    </Container>
</div>
</>       
    )
}
export default Home;