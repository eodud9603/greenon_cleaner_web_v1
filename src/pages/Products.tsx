import React, {useCallback, useEffect, useState} from "react";
import { ContentHeader } from "../components/base";
import styled from "styled-components";
import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: red;
  margin-top: 40px;
  //padding: 20px;
  gap: 5px;
`;

// const width = window.innerWidth;

const PdfContainer = ({obj}) => {
    const [page,setPage] = useState(1);
    const [pageNumber,setPageNumber] = useState(1);
    function onDocumentLoadSuccess ({ numPages }) {
        console.log('numpage :: ',numPages)
        setPage(numPages);
    }
    return<>
        <Box>
            <Document file={obj} onLoadSuccess={onDocumentLoadSuccess}>
                <Page width={400} pageNumber={pageNumber} onClick={() => {
                    console.log('number::',pageNumber)
                    if(pageNumber < page)
                    setPageNumber(e => e+1)
                    else alert('페이지 초과' + pageNumber)
                }} />
            </Document>
        </Box>
    </>

}

const ImgContainer = ({obj}) => {

    const [page,setPage] = useState(0);


        return<>
            <img src={obj[page]} style={{width:'100%'}} onClick={() => {
                if(page < 1)
                setPage(e => e+1)
                else setPage(0);
            }}/>
        </>
}

const Products = () => {
    const arr_cleaner = [require('../static/menual_1-1.png'),require('../static/menual_1-2.png')]
    const arr = [require('../static/menual_2-1.png'),require('../static/menual_2-2.png'),]


  return (
    <>
      <ContentHeader title="제품 소개" />
        <Container>
      <Box>
          <div style={{marginLeft:10}}>1. 공기청정제균기</div>
          <ImgContainer obj={arr_cleaner} />
          {/*<img src={arr[0]} onClick={() => }/>*/}
            {/*<PdfContainer obj={require('../static/menual2_2.pdf')}/>*/}
            {/*<PdfContainer obj={{*/}
            {/*    url: 'http://52.79.150.136:3001/uploads/menual2_2.pdf',withCredentials: true*/}
            {/*}}/>*/}
      </Box>
            {/*<img src={require('../static/menual1.psd').default}/>*/}
            {/*<PdfContainer obj={require('../static/menual1.pdf')}/>*/}
      <Box>
          <div style={{marginLeft:10}}>2. 공간해충살균기</div>
          <ImgContainer obj={arr}/>
            {/*<PdfContainer obj={{*/}
            {/*    url: 'http://52.79.150.136:3001/uploads/menual2_1.pdf',withCredentials: true*/}
            {/*}}/>*/}
      </Box>
      {/*<Box>3. 공간해충살균기 (업소용)</Box>*/}
      {/*      <PdfContainer obj={require('../static/menual2_2.pdf')}/>*/}

        </Container>
    </>
  );
};

export default Products;
