import React, { useEffect, useState } from 'react';
import { ListGroup, Image, Spinner } from 'react-bootstrap';

const sampleComments = [
  {
    id: 1,
    username: "윤짜장",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "정말 좋은 정보 감사합니다!"
  },
  {
    id: 2,
    username: "윤압색",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "아쉬운 부분이 좀 있네요."
  },
    {
    id: 3,
    username: "안농운",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "정말 좋은 정보 감사합니다!"
  },
  {
    id: 4,
    username: "이준색",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "아쉬운 부분이 좀 있네요."
  }
];

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch 대신 예시 데이터 사용
    setComments(sampleComments);
    setLoading(false);
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;

  return (
    <ListGroup variant="flush" className="mt-3">
      {comments.map(({ id, username, avatar, comment }) => (
        <ListGroup.Item key={id} className="d-flex align-items-start">
          <Image 
            src={avatar} 
            roundedCircle 
            width={40} 
            height={40} 
            className="me-3" 
            alt={`${username} avatar`}
          />
          <div>
            <strong>{username}</strong>
            <p className="mb-1">{comment}</p>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Comments;
