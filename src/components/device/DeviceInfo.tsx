import React from "react";
import styled from "styled-components";

import { ReactComponent as AirPuriIcon } from "../../static/icons/icon-airpuri.svg";
import { ReactComponent as AirPuriIconGray } from "../../static/icons/icon-airpuri_gray.svg";

const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

const ColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

interface Props {
  title: string;
  name: string;
  type: string;
  power?: number;
}

const DeviceInfo = ({ title, name, type, power }: Props) => {
  return (
    <RowBox style={{ justifyContent: "space-between" }}>
      <Title>{title}</Title>
      <RowBox style={{ gap: 10 }}>
        <ColBox style={{ textAlign: "right" }}>
          <small style={{ color: "#007ba8" }}>{name}</small>
          <small style={{ color: "#007ba8" }}>{type}</small>
        </ColBox>
          {power === 0 ? <AirPuriIconGray/> : <AirPuriIcon  />}
      </RowBox>
    </RowBox>
  );
};

export default DeviceInfo;
