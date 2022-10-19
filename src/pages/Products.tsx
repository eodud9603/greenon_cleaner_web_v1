import React, {useCallback, useEffect, useState} from "react";
import { ContentHeader } from "../components/base";
import styled from "styled-components";
import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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
const Products = () => {

  return (
    <>
      <ContentHeader title="제품 소개" />
        <Container>
      <Box>
          <div style={{marginLeft:10}}>1. 공기청정제균기</div>
            {/*<PdfContainer obj={require('../static/menual2_2.pdf')}/>*/}
            <PdfContainer obj={{
                url: 'http://52.79.150.136:3001/uploads/menual2_2.pdf'
            }}/>
      </Box>
            {/*<img src={require('../static/menual1.psd').default}/>*/}
            {/*<PdfContainer obj={require('../static/menual1.pdf')}/>*/}
      <Box>
          <div style={{marginLeft:10}}>2. 공간해충살균기</div>
            <PdfContainer obj={{
                url: 'http://52.79.150.136:3001/uploads/menual2_1.pdf'
            }}/>
      </Box>
      {/*<Box>3. 공간해충살균기 (업소용)</Box>*/}
      {/*      <PdfContainer obj={require('../static/menual2_2.pdf')}/>*/}

        </Container>
    </>
  );
};

export default Products;
