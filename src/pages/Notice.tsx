import React, {useState} from "react";
import styled from "styled-components";
import { ContentHeader } from "../components/base";
import { Article } from "../components/notice";
import { apis } from "../lib/axios";

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  `;
const TextRow = styled.div`
  
`;

const Notice = () => {
  const [notices, setNotices] = React.useState([]);
  const [length, setLength] = useState(0);

  React.useEffect(() => {
    apis.getNotices().then((res) => {
        console.log(res.data)
      setNotices(res.data);
        setLength(res.data.filter(notice => notice.fix === 0).length);
    });
  }, []);

  return (
    <>
      <ContentHeader title="공지사항" />
      {/*<Container>*/}
      {/*    <TextRow onClick={() => window.open( 'http://greenon.co.kr','_blank')}># 공지 그린온 홈페이지</TextRow>*/}
      {/*    <TextRow onClick={() => window.open('https://blog.naver.com/greenonbluetouch','_blank')}># 공지 그린온 블로그</TextRow>*/}
      {/*    <TextRow onClick={() => window.open('https://facebook.com/profile.php?id=100083079197847','_blank')}># 공지 그린온 페이스북</TextRow>*/}
      {/*</Container>*/}
        <ArticleList>
            {/*{notices.filter((notice) => notice.fix === 1).map(notice => <Article key={notice.id} data={notice} />)}*/}
            {/*{notices.filter((notice) => notice.fix === 0).map(notice => <Article key={notice.id} data={notice} />)}*/}
            {notices.map((notice) => Number(notice.fix) === 1 && (
                <Article key={notice.id} data={notice} number={0}/>
            ))}
            {notices.map((notice,index) => Number(notice.fix) === 0 && (
                <Article key={notice.id} data={notice} number={length - index + 1}/>
            ))}
        </ArticleList>
    </>
  );
};

export default Notice;
