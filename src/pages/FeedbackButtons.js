import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaRegSadCry, FaRegSmile, FaRegMeh } from 'react-icons/fa';

const FeedbackButtons = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (emotion) => {
    setSelected(emotion);
  };

  return (
    <div className="mt-3 mb-5 text-center">
      <h6 className="fw-bold">여러분의 생각은?</h6>
      <ButtonGroup aria-label="Feedback buttons">
        <Button 
          variant={selected === 'sad' ? 'danger' : 'outline-danger'} 
          onClick={() => handleSelect('sad')}
          title="아쉬워요"
          className='fs-13'
        >
          <FaRegSadCry size={24} /> 아쉬워요
        </Button>
        <Button 
          variant={selected === 'neutral' ? 'secondary' : 'outline-secondary'} 
          onClick={() => handleSelect('neutral')}
          title="그저 그래요"
          className='fs-13'
        >
          <FaRegMeh size={24} /> 그저 그래요
        </Button>
        <Button 
          variant={selected === 'happy' ? 'success' : 'outline-success'} 
          onClick={() => handleSelect('happy')}
          title="좋아요"
          className='fs-13'
        >
          <FaRegSmile size={24} /> 좋아요
        </Button>
      </ButtonGroup>
      {selected && (
        <p className="mt-2">선택하신 감정: <b className='fs-10'>{selected === 'sad' ? '아쉬워요' : selected === 'neutral' ? '그저 그래요' : '좋아요'}</b></p>
      )}
    </div>
  );
};

export default FeedbackButtons;