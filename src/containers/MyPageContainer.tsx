import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Division } from "../components/common";
import { useRecoilValue } from 'recoil';

import { ReactComponent as ProfileIcon } from "../static/icons/icon-modifyprofile.svg";
import { ReactComponent as Icon1 } from "../static/icons/icon-mypage-1.svg";
import { ReactComponent as Icon2 } from "../static/icons/icon-mypage-2.svg";
import { ReactComponent as Icon3 } from "../static/icons/icon-mypage-3.svg";
import { ReactComponent as Icon4 } from "../static/icons/icon-mypage-4.svg";
import { ReactComponent as Icon5 } from "../static/icons/icon-mypage-5.svg";
import { ReactComponent as Icon6 } from "../static/icons/icon-mypage-6.svg";
import UserState from "../recoil/user";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info-left {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .profile-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #e5f2f8;
  }

  .tab-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: repeat(2, calc((100vw - 40px) / 3));
    grid-template-columns: repeat(3, minmax(auto, 1fr));

    @media (min-width: 1024px) {
      grid-template-rows: 100px;
      grid-template-columns: repeat(6, minmax(100px, 1fr));
    }
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid #e5f2f8;
    color: #004f76;
    gap: 10px;

    p {
      font-size: 14px;
    }
  }

  .flex-box {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  .box {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightgray;
    border-radius: 10px;
    gap: 20px;
    .title {
      color: red;
      font-weight: bold;
    }
    .contents {
      text-align: center;
      font-size: 14px;
    }
    .btn-container {
      display: flex;
      justify-content: space-between;
      width: 70%;
      
      .btn {
        border: 1px solid;
        border-radius: 15px;
        width: 80px;
        padding: 5px;
        text-align: center;
        background-color: white;
        font-size: 15px;
      }
    }

    @media (min-width: 1024px) {
      width: 335px;
      height: 100px;
    }
  }
`;

const MyPageContainer = () => {
  const user = useRecoilValue(UserState);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="info-wrapper">
          <div className="info-left">
            <div className="profile-img" />
            <p style={{ fontSize: 16 }}>{user?.email}</p>
          </div>
          <ProfileIcon
            onClick={() => navigate("/profile_edit")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Division />
        <div className="flex-box">
          <div className="tab-grid">
            <Link to="/products" className="tab">
              <Icon2 />
              <p>제품 소개</p>
            </Link>
            <Link to="/notice" className="tab">
              <Icon3 />
              <p>공지사항</p>
            </Link>
            <Link to="/usage" className="tab">
              <Icon4 />
              <p>메뉴얼</p>
            </Link>
            <Link to="/company" className="tab">
              <Icon1 />
              <p>고객 지원</p>
            </Link>
            <Link to="/request" className="tab">
              <Icon5 />
              <p>FAQ</p>
            </Link>
            <Link to="/settings" className="tab">
              <Icon6 />
              <p>설정</p>
            </Link>
          </div>
          <div className="box" >
            <div className={'title'}>
              현재위치 날씨 , 실외공기질,식중독지수
            </div>
            <div className={'contents'}>
              <div>
                현재위치 또는 주소검색 버튼을 눌러<br/>
              </div>
              <div>날씨,공기질, 식중독 지역을 설정해 주세요</div>
            </div>
            <div className={'btn-container'}>
              <div className={'btn'}>현재위치</div>
              <div className={'btn'}>주소검색</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyPageContainer;
