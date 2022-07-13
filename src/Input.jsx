import React from 'react';

import CommonButton from './CommonButton';

export default function Input({ handleClick, handleChange, inputTextValue }) {
  return (
    <div>
      <form>
        <label htmlFor="todoInput" style={{ fontSize: 0 }}>
          오늘 할 일 입력
        </label>
        <input id="todoInput" type="text" onChange={handleChange} />
        {/* disabled={inputTextValue == '' && true} → 인풋에 입력 값이 없을 경우 disabled 속성이 활성화 되도록 조건처리 */}
        <CommonButton lable="추가" handleClick={handleClick} disabled={inputTextValue === '' && true} />
      </form>
    </div>
  );
}
