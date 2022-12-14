import React from "react";
import { AuthDynamicModal } from "../../components/auth";
import { ContentHeader } from "../../components/base";
import {useLocation, useParams} from "react-router-dom";

const Agree1 = () => {
  const [isPc, setIsPc] = React.useState(false);
  const {type} = useParams();

  React.useEffect(() => {
    function onResize() {
      setIsPc(window.innerWidth > 540);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isPc ? (
    <>
      <ContentHeader title="약관 동의" />
      이용약관
    </>
  ) : (
    <AuthDynamicModal headerTitle="약관 동의">{terms[type]}</AuthDynamicModal>
  );
};

export default Agree1;

const terms = {
  terms1 : '(필수) 그린온 서비스 이용약관\n' +//서비스 이용약관
      '\n' +
      '㈜그린온 서비스 이용약관\n' +
      '\n' +
      ' \n' +
      '\n' +
      '㈜그린온 (이하 “회사”)의 제품 및 서비스를 선택한 여러분(이하 ”이용자”)께 감사 드립니다.\n' +
      '\n' +
      '그린온 서비스 이용약관(이하 “본 약관”)에는 회사의 제품, 스마트기기 및 그와 관련하여 회사가 제공하는 다양한 모바일 어플리케이션, 웹사이트 등의 서비스(일부 이용자의 선호에 기반한 맞춤형 서비스 포함)(총칭하여 이하 “그린온 서비스”) 이용 시 알아야 할 아래 예시와 같은 사항이 포함되어 있습니다.\n' +
      '\n' +
      '• 이용자의 그린온 서비스 이용절차 및 회사의 서비스 제공 방식\n' +
      '\n' +
      '• 이용자의 그린온 서비스 이용에 관하여 회사 및 이용자 간 권리·의무 및 이용 규칙\n' +
      '\n' +
      '• 그린온 서비스에서 사용 가능한 콘텐츠 및 소프트웨어의 지식재산권 및 그 권리관계\n' +
      '\n' +
      '• 이용자가 그린온 서비스 이용과 관련하여 가지는 기타 법적 권리\n' +
      '\n' +
      '그린온 서비스를 이용하려면 본 약관에 동의하여야 합니다. 일부 서비스 이용 시 그린온 서비스 회원(이하 “회원”) 가입이 필요할 수 있습니다. 본 약관의 내용을 자세히 살펴봐 주시기 바랍니다. 본 약관 외에도 회사는 그린온 서비스 개인정보 처리방침 등 그린온 서비스 운영 정책을 게시하고 있으므로, 관련 내용의 이해를 위하여 읽어 보실 것을 권장합니다.\n' +
      '\n' +
      '회사가 제공하는 그린온 서비스에는 기본적으로 본 약관이 적용됩니다. 다만, 회사의 다양한 여러 그린온 서비스의 제공과 관련하여 본 약관 외에 서비스특별조건 또는 추가약관(그린온 서비스를 통해 전자거래의 방법으로 재화나 서비스 구매 시 해당 전자상거래와 관련하여 적용되는 그린온 서비스 전자상거래 이용약관 포함)이 제공될 수 있으며, 서비스특별조건 및 추가약관은 본 약관에 우선하여 적용됩니다. 또한, 일부 서비스에 대해서는 정책, 지침, 안내 및 고지 등이 추가로 제공될 수 있으므로, 개별 서비스 이용 전 주의하여 읽어 보시기 바랍니다. 귀하는 회원 가입 또는 해당 서비스 이용 시 각 추가약관의 내용을 확인할 수 있습니다.\n' +
      '\n' +
      '1. 그린온 서비스 제공자\n' +
      '\n' +
      '본 약관에 따라 그린온 서비스를 제공하기 위하여 이용자와 계약을 체결하는 주체는 다음과 같습니다.\n' +
      '\n' +
      '상호: ㈜그린온\n' +
      '주소: 서울특별시 영등포구 양산로 57-5 (이노플렉스) 506호\n' +
      '대표전화: 02-6010-7735\n' +
      '사업자등록번호: 138-81-73224\n' +
      '\n' +
      ' \n' +
      '\n' +
      '2. 그린온 서비스 이용 및 회원 가입\n' +
      '\n' +
      '회원 가입 기준 및 절차\n' +
      '\n' +
      '이용자는 본 약관을 읽고 동의한 후 회원가입을 신청할 수 있으며, 회사는 가입신청자에게 이메일 인증 또는 휴대폰 인증을 요구할 수 있습니다. 인증절차가 성공적으로 완료되고, 회사가 이용자의 회원 가입 신청을 승낙하면 회원가입 절차가 완료되고 이용자에게 그린온 서비스 이용계정(이하 “계정”)이 부여됩니다. 이후 최초 로그인 시 또는 그린온 서비스 이용 중 실명 인증 절차를 요구할 수 있습니다.\n' +
      '\n' +
      '회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 다음 각 호의 사유가 발생된 경우 회원에 대한 통지로 이용계약을 해지하거나 회원의 자격을 상실시킬 수 있습니다.\n' +
      '\n' +
      '• 가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우. 다만, 회원자격 상실 후 1년이 경과한 자로서 회사의 회원 재가입 승낙을 얻은 경우에 는 예외로 함.\n' +
      '\n' +
      '• 회원가입시에 실명이 아니거나 타인의 명의를 이용한 경우\n' +
      '\n' +
      '• 회원가입 또는 그린온서비스 이용 관련하여 허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우\n' +
      '\n' +
      '• 회원이 본 약관 상의 회원의 의무 또는 관련 법을 위반했을 경우\n' +
      '\n' +
      '• 가입신청자가 만 14세 미만의 아동인 경우\n' +
      '\n' +
      '• 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우\n' +
      '\n' +
      '• 회사의 경영상 불가피한 사유가 있고, 이용자의 권리를 부당하게 침해하지 않는 경우. 다만, 기존 회원에 대해서는 30일의 기간을 두고 사전 통지 후 이용계약을 해지하거나, 회원의 자격을 상실시킬 수 있음\n' +
      '\n' +
      '단, 회원이 사망한 경우에는 별도의 통보 없이 자격이 상실됩니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '회원 가입 및 계정 이용 시 이용자 준수사항\n' +
      '\n' +
      '• 회원 가입 시 정확하고 완전한 정보를 회사에 제공해야 합니다.\n' +
      '\n' +
      '• 제공한 정보에 변동이 생기면 지체 없이 변경해야 합니다. 정보를 변경하지 아니하여 발생하는 불이익에 대해서는 회사가 책임을 지지 않습니다.\n' +
      '\n' +
      '• 회원 계정 사용 시 비밀번호가 유출되거나 타인에게 공유되지 않도록 주의해야 합니다.\n' +
      '\n' +
      '• 회원 계정의 무단 사용이 의심된다면, 즉시 회사에 통지해야 합니다.\n' +
      '\n' +
      '• 본인인증을 요구하는 서비스의 경우 이용자가 본인인증을 위하여 요청받은 개인정보를 회사에 제공하여야만 그 이용이 가능합니다.\n' +
      '\n' +
      '본인 계정 보호를 위해 필요한 합리적인 조치를 취하는 것을 포함하여 본인의 계정 이용에 관한 책임은 이용자에게 있습니다. 비밀번호 관리 소홀 등 이용자 본인의 귀책사유로 발생한 모든 결과에 대해 회사는 책임을 지지 아니하며 그에 관한 책임은 이용자에게 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '회원은 언제든지 회사 모바일 어플리케이션이나 웹사이트에서 계정 해지 및 회원 탈퇴를 할 수 있으며 재가입할 수 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '다수의 그린온 서비스 관련 이용자 정보 통합\n' +
      '\n' +
      '회사가 제시하는 방법에 따른 본인인증을 마친 회원이 그린온 계정을 이용하여 다수의 그린온 서비스를 이용하는 경우, 회사는 여러가지 경로로 수집된 회원의 정보를 확인하고 통합할 수 있고, 이를 바탕으로 맞춤형 서비스를 제공할 수 있습니다. 이는 회사가 회원이 그린온 서비스를 원활하게 이용하고, 그린온이 운영하는 서비스 전체를 보다 유기적으로 이용할 수 있도록 하기 위한 것입니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '3. 이용자의 권리·의무\n' +
      '\n' +
      '이용자의 법적 권리\n' +
      '\n' +
      '본 약관은 이용자에게 관련 법령에 따라 인정되는 (1) 특정 서비스 품질에 대한 권리 및 (2) 문제 발생 시 해결 방법에 대한 권리를 제한하거나 박탈하지 않습니다. 예를 들어, 이용자가 그린온 서비스상에서 상품을 구매한 소비자인 경우, 관련 법령상 소비자에게 부여되는 모든 법적 권리를 계속해서 누릴 수 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '이용자 준수사항\n' +
      '\n' +
      '이용자는 그린온 서비스 이용 시 다음과 같은 사항을 준수해야 합니다.\n' +
      '\n' +
      '• 본 약관 및 관련 법령 준수\n' +
      '\n' +
      '• 개인정보 보호, 프라이버시권 및 지식재산권을 포함한 타인의 권리 존중\n' +
      '\n' +
      '• 회사나 타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 행위 금지\n' +
      '\n' +
      '• 그린온 서비스를 악용하거나, 방해하거나, 중단시키거나, 서비스에 피해를 주는 행위 금지\n' +
      '\n' +
      '• 회원은 회사가 제공한 멤버십 서비스, 멤버십 포인트, 기타 멤버십 서비스가 제공하는 혜택 을 이용하여 영업 활동을 할 수 없습니다.\n' +
      '\n' +
      '• 회원은 멤버십 서비스의 이용권한, 보유하고 있는 멤버십 포인트, 기타 이용 계약상 지위, 를 타인에게 양도 또는 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '회사는 그린온 서비스를 이용하는 모든 이용자의 보안과 안전을 지키기 위해 노력하며, 이용자들이 그린온 서비스를 자유롭게 이용할 수 있도록 최선을 다하고 있습니다. 이를 위해 이용자는 다음과 같은 용도로 그린온 서비스를 이용하지 않도록 유의해 주시기 바랍니다.\n' +
      '\n' +
      '• 소프트웨어 역설계 등의 방법으로 그린온 서비스의 소스코드나 알고리즘을 알아내기 위한 시도\n' +
      '\n' +
      '• 그린온 서비스의 기능을 임의로 수정하거나 비활성화하려는 시도\n' +
      '\n' +
      '• 그린온 서비스에 기초하여 2차적 저작물을 만드는 행위\n' +
      '\n' +
      '• 그린온 서비스를 이용한 대여, 재실시, 호스팅과 같은 서비스를 제공하는 행위\n' +
      '\n' +
      '• 그린온 서비스 이용과 관련하여 회사 또는 제3자의 저작권 등 지식재산권을 침해하는 행위\n' +
      '\n' +
      '• 본 약관이나 관련 법령에 반하는 불법적인 목적이나 방법으로 그린온 서비스를 사용하는 행위\n' +
      '\n' +
      '• 악의적 또는 부정적인 방법으로 그린온 서비스를 이용하는 행위 (예: 해킹 또는 바이러스와 같은 악성코드나 유해한 데이터를 배포하는 행위 등)\n' +
      '\n' +
      '• 회사의 업무 또는 다른 이용자를 방해하거나, 시스템을 손상, 과부하, 악화시키거나, 또는 보안을 취약하게 만드는 방법으로 서비스를 이용하는 행위\n' +
      '\n' +
      '• 그린온 서비스와 서버 간의 전송 신호를 해독하려고 시도하거나, 서비스 또는 시스템으로부터 데이터나 정보를 수집하는 모든 행위\n' +
      '\n' +
      ' \n' +
      '\n' +
      '이용자가 이상의 준수사항을 지키지 아니하는 경우, 회사는 상당한 기간을 정하여 해당 이용자의 서비스 이용을 중지할 수 있습니다. 해당 이용자의 준수사항 위반에 대한 입증책임은 회사에게 있으며, 해당 이용자가 준수사항 위반에 대하여 본인의 고의나 과실이 없음을 입증한 경우, 회사는 이용중지 조치를 철회합니다. 서비스 이용이 중지되는 해당 기간 내에 이용중지 사유가 해소되지 아니하는 경우, 회사는 해당 이용자의 계정을 말소할 수 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '이용자 책임\n' +
      '\n' +
      '이용자가 그린온 서비스를 이용함에 있어 행한 불법행위나 본 약관 위반으로 인하여 회사가 제3자로부터 손해배상 청구 등 소송을 포함한 여하한 이의를 제기 받는 경우 당해 이용자는 자신의 책임과 비용으로 회사를 면책시켜야 하며, 회사가 면책되지 못하는 경우 해당 이용자는 그로 인하여 회사에게 발생한 모든 손해를 배상하여야 합니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '4. 라이선스\n' +
      '\n' +
      '그린온 서비스 라이선스\n' +
      '\n' +
      '회사는 이용자가 자유롭게 그린온 서비스를 이용할 수 있도록 그린온 서비스 사용에 관한 이용 권한을 부여합니다. 다만, 라이선스는 제한적이며, 양도할 수 없고, 철회 가능하며 독점적으로 제공되지 않으며, 이용자는 개인적이고 비상업적 목적으로만 그린온 서비스를 이용할 수 있습니다. 제공되는 라이선스에는 그린온 서비스를 제공하기 위하여 필요한 소프트웨어 및 기타 자료에 더하여, 관련 업데이트, 업그레이드, 개선, 수정, 변경, 추가도 포함됩니다. 본 약관에 동의하더라도 이용자에게는 해당 약관에 명시된 조건에 부합하는 범위 내에서만 그린온 서비스 사용에 관한 이용 권한이 부여됩니다. 또한, 그린온 서비스 적용 국가, 사용 디바이스, 운영체제(OS) 종류, 회사 또는 파트너의 내부 정책 등 운영 및 기술상의 필요에 따라서 부여되는 이용 권한의 내용이나 범위 등이 변경될 수 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '이용자 콘텐츠에 대한 라이선스\n' +
      '\n' +
      '이용자는 일부 그린온 서비스에서 본인이 저작권을 보유하는 게시글, 사진, 메시지, 문서 등의 콘텐츠(이하 “이용자 콘텐츠”)를 업로드, 제출, 저장, 전송, 수신 또는 공유할 수 있습니다. 이용자 콘텐츠의 저작권은 이용자가 보유하며, 이용자는 그린온 서비스에 콘텐츠를 제공할 의무는 없습니다.\n' +
      '\n' +
      '이용자 콘텐츠가 그린온 서비스에 업로드 또는 공유되면 회사는 그린온 서비스의 운영, 홍보 및 개선을 위해 필요한 범위 내에서 이용자 콘텐츠를 복사, 편집, 배포, 번역, 디지털화, 출판, 실행, 표시, 수정, 파생저작물을 생성할 수 있는 전세계적이며, 비독점적이고, 무상으로 제공되고, 취소불가능하고, 양도가능하며 재실시 가능한 라이선스를 가지게 됩니다.\n' +
      '\n' +
      '또한, 회사는 다음 대상에 대해 상기 권리를 재실시할 수 있습니다\n' +
      '\n' +
      '• 서비스가 원래 의도에 따라 작동하도록 하기 위해 다른 이용자들에게 재실시(예: 선택한 사람과 게시글을 공유할 수 있는 기능)\n' +
      '\n' +
      '• 회사와의 계약에 서명한 업무계약 체결자에게 회사의 본 약관에 따른 그린온 서비스 제공을 위한 제한적 목적을 위한 재실시\n' +
      '\n' +
      '이상의 규정에도 불구하고, 회사는 오로지 법령에서 허용되는 범위 내에서만 이용자 콘텐츠에 대한 권리를 보유하며, 그 범위를 초과하는 권리를 부여 받지는 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '5. 그린온 서비스의 이용 제한 및 이용자 콘텐츠 삭제\n' +
      '\n' +
      '문제 상황에서의 조치\n' +
      '\n' +
      '회사는 다음과 같은 경우 이용자의 서비스 이용을 일시적으로 또는 영구적으로 정지 또는 해지하거나, 이용자의 계정 또는 이용자 콘텐츠를 삭제할 권리를 보유합니다. 회사는 이용자의 서비스 이용을 정지 또는 해지하거나, 이용자의 계정을 삭제하고자 하는 경우 그 사유, 일시 및 기간을 정하여 서면 또는 전화 등의 방법을 이용하여 해당 이용자 또는 대리인에게 통지합니다. 다만, 회사가 긴급하게 이용을 중지해야 할 필요가 있다고 인정하는 경우에는 위 통지 없이 서비스 이용을 정지할 수 있습니다.\n' +
      '\n' +
      '• 이용자 또는 이용자가 게시한 콘텐츠의 내용이 본 약관, 추가약관, 회사의 기타 정책 또는 관련 법령을 중대하거나 반복적으로 위반하거나 공공질서 내지 미풍양속에 반하는 행위를 한 경우\n' +
      '\n' +
      '• 이용자가 본 약관 및 추가약관을 준수할 의사가 없음을 명시적으로 표시한 경우\n' +
      '\n' +
      '• 법적 의무 또는 법원의 명령을 준수하기 위해 필요한 경우\n' +
      '\n' +
      '• 이용자의 행동 또는 이용자가 게시한 콘텐츠가 다른 이용자, 제3자 또는 회사에 위해나 책임을 야기한다고 판단되는 합리적인 사유가 있는 경우(예: 해킹, 피싱, 괴롭힘, 스팸 발송, 타인을 오도하는 행위, 명예훼손 또는 이용자 소유가 아닌 콘텐츠 게시)\n' +
      '\n' +
      '• 이용자가 부정한 용도로 서비스를 이용하고자 하는 경우\n' +
      '\n' +
      '• 이용자가 영리를 추구할 목적으로 서비스를 이용하고자 하는 경우\n' +
      '\n' +
      '• 기타 회사가 정한 세부 게시물 관련 지침에 위반하는 경우\n' +
      '\n' +
      '본 조의 규정에 의하여 서비스 이용중지를 통지 받은 이용자 또는 그 대리인은 서비스 이용중지에 대하여 이의 신청을 할 수 있습니다. 회사는 이용중지 사유가 해소된 것이 확인된 경우에 한하여 이용중지 조치를 즉시 해제합니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '통지\n' +
      '\n' +
      '위와 같은 조치를 취하기 전에 회사는 합리적으로 가능한 경우 사전에 이용자에게 조치의 이유를통지하여 이용자가 원인이 된 사유를 해결할 수 있는 기회를 제공합니다. 다만, 다음과 같은 상황에 해당할 것으로 판단되는 합리적인 사유가 있는 경우, 이용자에 대한 통지를 하지 않을 수 있습니다.\n' +
      '\n' +
      '• 다른 이용자, 제3자 또는 회사에 위해 또는 책임을 야기하는 경우\n' +
      '\n' +
      '• 관련 법령 또는 규제당국의 명령에 위반하는 경우\n' +
      '\n' +
      '• 규제당국의 조사를 방해하는 경우\n' +
      '\n' +
      '• 그린온 서비스의 운영, 무결성 또는 보안을 저해하는 경우\n' +
      '\n' +
      ' \n' +
      '\n' +
      '이용제한 등 조치로 인한 이용자의 책임\n' +
      '\n' +
      '이용자의 서비스 이용 제한 또는 계정 해지와 관련하여 발생한 손해 및 손실(데이터 및 콘텐츠 포함)은 해당 이용자가 책임을 부담하고, 회사는 이에 대한 책임을 지지 않습니다. 그린온 서비스를 통해 저장된 관련 데이터 및 콘텐츠가 손실되지 않도록 복사본을 만들거나 온라인 백업 서비스 등을 활용하여 다른 위치에 반드시 백업해 주시기 바랍니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '6. 그린온 서비스 변경, 중단 및 종료\n' +
      '\n' +
      '그린온 서비스 변경\n' +
      '\n' +
      '회사는 언제든지 다음과 같이 그린온 서비스를 변경할 수 있습니다.\n' +
      '\n' +
      '• 일부 서비스 또는 기능을 변경, 추가, 삭제할 수 있음\n' +
      '\n' +
      '• 이용자의 계정이나 계정에 포함된 파일 또는 다른 콘텐츠에 대한 접근을 포함하여, 서비스 이용이나 접근을 중단하거나 제한할 수 있음\n' +
      '\n' +
      '• 서비스를 통해 제공되는 콘텐츠를 검토, 플래그 표시, 수정, 게재 거부, 접근 차단, 제거할 수 있음\n' +
      '\n' +
      '• 이용자에게 향상된 기능을 제공하기 위하여 서비스 업데이트를 위해 필요한 데이터를 이용자의 제품/기기에 수시로 저장 할 수 있음. 이와 같이 저장된 데이터는 오직 이용자의 동의를 받아 서비스를 업데이트 할 경우에만 이용됨\n' +
      '\n' +
      ' \n' +
      '\n' +
      '그린온 서비스 중단 및 종료\n' +
      '\n' +
      '회사는 다음과 같은 사유가 있는 경우에는 언제든지 그린온 서비스의 전부 또는 일부를 중단하거나 종료할 수 있습니다.\n' +
      '\n' +
      '• 회사가 그린온 서비스의 운영 또는 개선을 위하거나 또는 법령상 의무 준수를 위한 경우\n' +
      '\n' +
      '• 회사에 서비스를 제공하는 제휴사가 서비스 전부 또는 일부의 제공을 종료하기로 결정하는 경우\n' +
      '\n' +
      '• 컴퓨터, 서버, 통신망 등 정보통신설비의 보수점검, 교체 또는 고장, 서비스 이용의 폭주, 통신두절 등 운영상 서비스를 지속하기 어려운 상당한 이유가 있는 경우\n' +
      '\n' +
      ' \n' +
      '\n' +
      '변경, 중단, 종료 시 안내, 보상 및 책임\n' +
      '\n' +
      '그린온 서비스 이용에 불리한 영향을 미치는 중대한 서비스 변경, 중단 및 종료에 대해서는 계정 등록 이메일이나 서비스 내 공지사항 등 합리적인 방식으로 사전에 통지하겠습니다. 다만, 사전 통지가 가능하지 않다고 판단되는 합리적인 사유가 있거나, 이용자에게 편익을 주는 서비스에 새로운 기능을 추가하는 변경 또는 법적인 이유로 시행되는 변경은 사전 통지 없이 즉시 적용될 수 있습니다.\n' +
      '\n' +
      '관련 법령에 특별한 규정이 없는 한 그린온 서비스의 전부 또는 일부의 변경, 중단 또는 종료를 사유로 별도의 보상은 하지 않습니다.\n' +
      '\n' +
      '한편, 그린온 서비스가 종료되거나 계정이 해지되더라도 본 약관의 유효기간 동안 발생한 이용자 또는 회사의 권리 및 의무에 대한 책임은 존속합니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '7. 휴면회원\n' +
      '\n' +
      '회사는 개인정보보호법 제39조의6 및 같은 법 시행령 제48조의5에 따라, 1년간 온라인 및 오프라인 연계 서비스 이용 기록이 없는 경우 해당 이용자를 휴면회원으로 전환하며, 휴면회원으로 전환될 경우 관련된 정보를 파기하고(단, 관계 법령의 규정에 따라 분리 보관하는 정보 제외) 서비스 이용계약을 해지합니다.\n' +
      '\n' +
      '휴면회원 전환으로 인한 서비스 이용 계약 해지로 인해, 이용자가 계정을 통해 이용하는 회사의 서비스가 하나도 존재하지 않게 될 경우, 계정 이용계약이 해지되며 이용자의 계정 및 관련 정보가 삭제됩니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '8. 회사의 책임 및 보증\n' +
      '\n' +
      '회사의 책임\n' +
      '\n' +
      '본 약관은 오로지 관련 법령이 허용하는 한도에서 회사의 책임을 제한합니다. 회사는 무료로 제공하는 서비스의 이용과 관련하여 개인정보 처리방침에서 정하는 내용에 위반하지 않는 한 어떠한 손해에 대하여도 책임을 지지 않습니다. 이용자가 회사의 고의 또는 과실로 인하여 손해를 입게 될 경우, 회사는 관련 법령에 따라 이용자가 입은 손해를 배상하지만, 천재지변 또는 이에 준하는 불가항력, 이용자의 고의 또는 과실 및 그 외 회사가 합리적으로 통제할 수 없는 사유 (법률, 하위법령, 명령, 통신두절, 파업, 전쟁, 폭동, 테러행위 또는 그 위협, 자연재해, 전염병 등을 포함함)로 인하여 발생한 손해에 대해서는 책임을 부담하지 않습니다. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여는 책임을 지지 않으며, 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다. 회사는 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않으며, 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다. 회사는 이용자의 컴퓨터 오류에 의해 손해가 발생한 경우 또는 이용자가 본인인증 서비스를 이용함에 있어 자신의 개인정보를 부실하게 기재하여 손해가 발생한 경우에 책임을 지지 않습니다.\n' +
      '\n' +
      '그린온 서비스를 이용하기 위해서는 인터넷 접속이 필요한 경우가 있습니다. 인터넷 접속 시 이용자가 가입한 요금제에 따라 추가 요금이 발생할 수 있으며, 회사는 인터넷 접속 가능 여부 또는 속도에 대해 책임을 지지 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '회사의 보증\n' +
      '\n' +
      '회사는 그린온 서비스(서비스 내 콘텐츠, 서비스의 특정 기능, 신뢰성, 가용성, 이용자의 필요를 충족할 수 있는 능력 포함)와 관련하여 오로지 (1) 본 약관 및 추가약관에 기술되어 있는 사항 또는 (2) 관련 법령에서 정한 사항만을 보증합니다. 그린온 서비스와 관련하여 그 외의 다른 사항에 관한 약속은 하지 않습니다. 특히, 그린온 서비스와 연동되는 스마트 기기가 네트워크 접속 불량 또는 그린온 서비스 업데이트 등의 이유로 그린온 서비스와 연동되지 아니하고 이용이 중단될 수도 있습니다.\n' +
      '\n' +
      '또한 법령에서 요구하지 않는 한, 회사는 상품성, 특정 목적에의 적합성 및 비침해성 등에 대한 묵시적인 보증을 포함하여 어떠한 사항에 대해서도 묵시적 보증도 제공하지 않습니다.\n' +
      '\n' +
      '그린온 서비스는 관련 법령이 허용하는 한도 내에서 어떠한 사항의 보증도 없이 ‘있는 그대로’ 또는 ‘이용 가능한 상태로’ 제공됩니다. 예를 들어, 회사는 서비스에 관해 어떠한 상업성, 양호한 품질의 유지, 숙련된 기기 조작 능력, 특정 목적 적합성, 신뢰성, 정확성, 바이러스 부재, 조용한 환경 유지, 제3자 권리나 기타 권리에 대한 비침해 등을 포함한 사항에 관하여 구체적으로 어떠한 약속을 하거나 법률적으로 보증을 하지 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '9. 제3자 서비스\n' +
      '\n' +
      '그린온 서비스에는 제3자가 제공하는 콘텐츠(정보, 링크, 광고 등), 제품, 서비스, 기타 자료 등(이하 "제3자 서비스")이 포함될 수 있습니다. 제3자 서비스를 통해 다양한 혜택을 누릴 수 있지만, 회사는 제3자 서비스에 대한 어떠한 통제력도 없습니다. 회사는 귀하의 제3자 서비스 이용에 대하여 그 어떠한 진술이나 보증도 하지 않으며, 회사는 이용자의 제3자 서비스 이용으로 인해 초래되는 손해나 손실에 대해 어떠한 책임도 지지 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '10. 광고 \n' +
      '\n' +
      '회사는 다양한 그린온 서비스를 무료로 제공하며, 이를 위해 일부 그린온 서비스에는 광고가 표시되며, 일부 이용자의 선호에 기반하여 맞춤형 광고가 제공될 수 있습니다. 그린온 서비스에 회사 또는 제3자가 제공하는 광고, 마케팅 관련 정보를 표시할 수 있으며, 회사는 광고주인 제3자가 제공한 정보 및 광고의 유용성과 정확성 또는 완전성 등에 대하여 어떠한 권한도 가지고 있지 아니합니다. 따라서, 회사는 광고에 대한 신뢰의 결과로 발생한 이용자의 손해를 비롯하여 이용자와 광고주 간의 교신 또는 거래에 관하여 회사의 귀책사유가 없는 한 광고에 관하여 어떠한 책임이나 의무도 부담하지 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '11. 분쟁 해결, 준거법 및 관할\n' +
      '\n' +
      '준거법\n' +
      '\n' +
      '본 약관에 명시되지 않은 사항은 전기통신사업법 등 대한민국의 관계법령과 상관습에 따릅니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '관할\n' +
      '\n' +
      '서비스 이용과 관련하여 회사와 이용자 간에 발생하는 분쟁과 관련한 소송의 관할 법원은 민사소송법상의 관할을 가지는 대한민국 법원으로 하며, 준거법은 대한민국법으로 합니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '12. 본 약관의 변경\n' +
      '\n' +
      '회사는 수시로 관련 법령을 위반하지 않는 범위 내에서 본 약관 및 추가약관을 변경할 수 있으며, 변경 시 적어도 10일 전에 그 개정 이유와 적용 일자를 알리겠습니다. 또한, 이용자에게 불리할 수 있는 중대한 내용의 변경의 경우, 최소 30일 이전에 알리겠습니다.\n' +
      '\n' +
      '본 약관 및 추가약관의 변경 등 본 약관에 따라 회사가 회원에게 안내 또는 고지 해야 할 내용은 해당 서비스 내 공지, 별도의 전자적 수단(이메일 등), 서면, 가맹점 내 게시, SMS통지, 회사 인터넷 홈페이지 게시 등 해당 서비스의 특성을 고려할 때 합리적인 수단 중 1가지 이상을 통해 미리 안내해드리도록 하겠습니다. 회사가 E-MAIL 통보 또는 서면통보의 방법으로 본 약관이 개정된 사실 및 개정된 내용 등을 회원에게 고지하는 경우에는 회원이 회사에 기 제공한 E-MAIL이나 주소 지 중 가장 최근에 제공된 E-MAIL 또는 주소지로 통보합니다.\n' +
      '\n' +
      '변경 약관 시행 후 그린온 서비스 이용 시, 이용자는 변경 약관에 동의한 것으로 간주됩니다. 이용자는 언제든지 회원을 탈퇴하여 계정을 해지함으로써 더 이상 변경된 약관의 적용을 받지 않을 수 있습니다. 회원이 개정약관의 적용에 명시적으로 동의하지 않는다는 의사를 표시한 경우 회사는 개정 약관의 내용을 적용할 수 없으며, 이 경우 회사 및 회원은 이용계약을 해지할 수 있습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '13. 일반사항\n' +
      '\n' +
      '• 이용자는 법률에 따라 본 서비스 약관과 같은 계약으로 제한할 수 없는 일정한 권리를 보유합니다. 본 약관은 어떠한 경우에도 그러한 권리를 제한하지 않습니다.\n' +
      '\n' +
      '• 본 약관은 이용자와 회사 간의 관계를 설명하는 문서이고, 본 약관에 따른 이용자와 회사의 관계로 인해 제3자가 이익을 얻더라도, 해당 제3자에게 어떠한 법적 권리도 발생하지 않습니다.\n' +
      '\n' +
      '• 본 약관과 추가약관이 상충되는 경우 해당 서비스에 대해서는 추가약관이 우선 적용됩니다.\n' +
      '\n' +
      '• 본 약관의 특정 조항이 유효하지 않거나 집행 불가능한 것으로 판명되는 경우, 이는 다른 조항에 영향을 미치지 않습니다.\n' +
      '\n' +
      '• 본 약관(일체의 추가약관 포함)은 이용자와 회사 간의 완전한 법적 합의로서, 이용자의 본 서비스 이용에 대한 사항을 규율하며, 본 서비스에 관하여 이용자와 회사 간에 체결된 그 어떠한 구두 또는 서면 합의에 우선합니다.\n' +
      '\n' +
      '• 이용자가 본 약관 또는 추가약관을 준수하지 않을 경우, 회사가 즉시 조치를 취하지 않더라도 이는 향후 조치를 취하는 것을 포함하여 회사가 보유한 권리를 포기한다는 의미는 아닙니다.\n' +
      '\n' +
      '• 이용자에게 서비스를 제공하기 위해 회사가 각종 정보를 서비스상 공지사항으로 제공하거나 우편물, 이메일 및 SMS, MMS 등을 통해 이용자에게 제공할 수 있습니다. 다만, 이용자가 정보 제공을 원치 않는다는 의사를 밝히는 경우 해당 이용자는 정보 제공 대상에서 제외되며, 정보 제공 대상에서 제외되어 정보를 제공받지 못해 불이익이 발생할 경우 회사는 이에 대한 책임을 지지 않습니다.\n' +
      '\n' +
      '• 회사는 이용자의 본 약관에 따른 권리에 중대한 영향이 없는 범위 내에서 본 약관에 따른 회사의 권리의무 전부 또는 일부를 제3자에게 양도하거나 위탁 또는 이전할 수 있습니다. 이용자는 회사에게 서면으로 요청하고 회사가 이용자와 합의하지 않는 한 본 약관에 따른 본인의 권리의무를 제3자에게 양도하거나 위탁 또는 이전할 수 없습니다.\n' +
      '\n' +
      '• 회사는 법률상 허용되는 범위 내에서 회사가 합리적으로 통제할 수 없는 사유(예: 법률, 하위법령, 명령, 통신두절, 파업, 전쟁, 폭동, 테러행위 또는 그 위협, 자연재해 등)로 회사가 본 약관에 따른 의무를 이행하지 못하는 경우, 이에 대한 일체의 책임을 부담하지 않습니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      '본 약관은 2022년 6월 1일부터 시행합니다.',
  terms2:'(필수) ㈜그린온 한국 서비스 개인정보 수집 이용 동의\n' +//개인정보 수집 이용 동의
      '\n' +
      '㈜그린온 한국 서비스 개인정보 수집•이용 동의\n' +
      '\n' +
      '㈜그린온(이하 “당사”)는 ㈜그린온 서비스를 이용하는 귀하의 개인정보를 아래와 같이 수집·이용합니다.\n' +
      '\n' +
      '1. 수집하는 개인정보 항목\n' +
      '\n' +
      '가. 회원가입을 위해 필요한 정보\n' +
      '\n' +
      '계정\n' +
      '\n' +
      '수집하는 개인정보 항목\n' +
      '\n' +
      '㈜그린온 계정\n' +
      '\n' +
      '아이디(이메일 주소 또는 휴대폰번호), 비밀번호, 이름, 생년월일, 성별, 휴대폰번호, 내/외국인, 통신사\n' +
      '\n' +
      ' \n' +
      '\n' +
      '나. 각 서비스 및 기능 이용을 위해 필요한 정보 (실제 해당 서비스 및 기능 이용 시 수집)\n' +
      '\n' +
      '구분\n' +
      '\n' +
      '수집하는 개인정보 항목\n' +
      '\n' +
      '기기 및 앱 이용시 공통으로 수집 되는 정보\n' +
      '\n' +
      '기기 모델번호, 앱 ID(IMEI), 세션로그정보, 방문기록(IP Address, 접속로그), 쿠키, 서비스 이용 기록(이용 시간, 이용자가 입력한 검색어), 위치정보(위치기반서비스 이용약관 동의 시), 광고식별자, 앱 사용 데이터\n' +
      '\n' +
      '스토어 이용시 수집되는 정보\n' +
      '\n' +
      '필수\n' +
      '\n' +
      '상품 주문/배송 요청 정보[주문자정보(이름, 휴대폰번호, 이메일), 수취인정보(이름, 휴대폰번호, 배송지주소)]\n' +
      '\n' +
      '상담 신청 정보(이름, 휴대폰번호, 이메일)\n' +
      '\n' +
      '상품문의 정보(이메일, 문의내역)\n' +
      '\n' +
      '사전방문 신청 정보(이름, 전화번호, 휴대폰번호, 주소)\n' +
      '\n' +
      '소모품샵 재입고알림 신청 정보(회원 Key, 휴대폰번호)\n' +
      '\n' +
      '선택\n' +
      '\n' +
      '현금영수증발행정보(휴대폰번호 또는 현금영수증카드번호), 환불계좌정보(은행명, 계좌번호, 예금주, 생년월일)\n' +
      '\n' +
      ' \n' +
      '\n' +
      '다. 데이터 결합 활용을 위하여 수집∙생성되는 정보\n' +
      '\n' +
      '※ 실제 데이터 결합 활용을 위하여 이용되는 개인정보의 항목 및 활용 내용은 ㈜그린온 서비스 개인정보 처리방침에서 확인하실 수 있습니다\n' +
      '\n' +
      '구분\n' +
      '\n' +
      '수집하는 개인정보 항목\n' +
      '\n' +
      '㈜그린온이 운영하는 다른 서비스를 통해 수집되는 항목\n' +
      '\n' +
      '(실제 해당 서비스 및 기능 이용 시 수집)\n' +
      '\n' +
      '이용자가 ㈜그린온이 제공하는 서비스를 이용하며 개인정보의 수집 및 이용에 동의한 경우 해당 서비스에서 수집되는 개인정보 (예를 들면, 구매/배송 내역, 서비스 이용내역, 서비스를 이용하는 모바일 기기 정보, TV멤버십 이용 시 수집되는 정보)\n' +
      '\n' +
      '데이터 결합을 통해 생성되는 정보\n' +
      '\n' +
      '㈜그린온이 개인정보 항목들을 결합∙분석함으로써 생성되는 정보\n' +
      '\n' +
      ' \n' +
      '\n' +
      ' \n' +
      '\n' +
      '2. 개인정보 수집∙이용 목적\n' +
      '\n' +
      '가. 회원 관리: 본인확인, 미성년자의 확인, 이용자 식별 및 당사가 보유하고 있는 다른 개인정보와의 통합/연계, 불량 회원의 부정 이용 및 비인가 사용 방지, 가입 의사 확인, 가입 제한, 분쟁 처리를 위한 기록 보존, 불만 민원 처리, 고지사항 전달 등\n' +
      '\n' +
      '나. 서비스 제공: 당사가 제공하는 서비스 제공, 제품 사용 형태 및 제품 상태 모니터링, 원격 제어, 진단 결과 확인을 통한 서비스 제공, 제품을 이용한 측정 정보 제공, 1:1 문의, 온라인/오프라인 상담, 제품 구매, 수리, A/S, 서비스 예약, 서비스 이력 관리, 기타 서비스 유지 보수, 회원 정보 및 제품 정보 활용을 통한 추가적인 서비스 제공, 카카오톡 알림톡 발송, 온라인 견적 요청 및 렌탈 서비스 제공, 렌탈 정기 유지관리 방문서비스, 인구 통계학적 특성에 따른 서비스 제공 및 광고 게재, 혜택 제공 및 안내, 콜센터 상담 운영, 알리미 서비스 조회, 결제정보 조회 및 변경, 이용자의 기기 사용 내역 및 관심사항 등을 고려한 1:1 맞춤형 서비스 및 광고 제공 등\n' +
      '\n' +
      '다. 제품 및 서비스 개발: 로그 분석을 통한 기능 개선 및 맞춤 서비스 제공, 관심 분야 파악을 통한 제품 개발, 고객 기호 확인을 통한 추가 서비스 개발, 서비스 및 이용행태 분석, 서비스 개선, 부정 이용 방지, 정보통계, 신규서비스 연구, 신규 콘텐츠 개발, 가격할인 제공, 상품추천, 고객 혜택적 서비스 제공, 신규 서비스 개발, 접속 빈도 파악 등\n' +
      '\n' +
      '라. 콘텐츠 제공 및 상품 판매, 대여 및 회수 등: 이용자 콘텐츠 관리 및 제공(영상 및 촬영 사진 제공, 추천 서비스, 자동 상황 제어, 에너지 사용량 분석 등), 상품 제공, 청구서 발송, 구매 및 결제, 요금 수납/이체/추심, 상품 주문시의 배송, 상품 설치 및 회수, 신용 확인, 계좌 유효성 검증, 세금계산서 발행, 상품 설치 및 회수, 신용 확인, 계좌 유효성 검증, 세금계산서 발행, 결제정보 처리, 계약이행의 연락 및 안내 등의 고지 등\n' +
      '\n' +
      '마. 광고성 정보의 전송 및 이벤트 안내 등: 이벤트 및 광고성 정보 전달, 공모작 접수에 따른 본인 확인, 질문에 대한 답변처리, 접수결과 안내 및 심사결과 통보, 차기 공모전 개최 안내 및 공모전 외 진행하는 이벤트 안내, 경품 및 상금 지급, 이벤트/경품 추첨 및 당첨 결과 안내, 경품 발송, 신규 서비스 및 신상품/이벤트 안내, 고객지향적 마케팅 분석 및 서비스 개발, 각종 판촉행사 및 경품배송, 행사 제품 안내, 고객지향적 마케팅, 서비스 및 정보 제공, 고객 의견 수렴, 만족도 조사 등\n' +
      '\n' +
      '바. ㈜그린온 제품 구매자 혜택 서비스 제공 관련 제반 업무: 신청내역 확인, ㈜그린온 제품 구매자 혜택 서비스 참여자 정보 조회 및 통계/관리 등\n' +
      '\n' +
      '사. 맞춤형 서비스∙광고 제공 및 제품∙서비스 개선을 위한 데이터 결합∙분석\n' +
      '\n' +
      '※ ㈜그린온의 맞춤형 서비스는 이용자 개개인의 ㈜그린온 서비스, 제품의 구매∙이용내역 등의 정보를 바탕으로 이용자가 ㈜그린온의 서비스∙제품을 보다 효율적이고 유기적으로 사용할 수 있도록 서비스 추천, 관련 정보 제공 등 향상된 경험을 제공합니다.\n' +
      '\n' +
      ' \n' +
      '\n' +
      ' \n' +
      '\n' +
      '3. 보유 및 이용기간\n' +
      '\n' +
      '당사는 정보주체로부터 개인정보를 수집하는 경우 서비스 이용기간 동안 개인정보를 이용·보관함을 원칙으로 하며 이용 목적이 달성 되면 지체 없이 파기 합니다.\n' +
      '다만, 관계법령의 규정이나 회사 내부 방침에 의하여 보존할 필요가 있는 경우 당사는 해당 법령 및 당사 개인정보처리방침에서 정한 바에 따라 개인정보를 보관할 수 있습니다.\n' +
      '\n' +
      '귀하는 위 정보에 대한 수집∙이용 동의를 거부할 수 있는 권리가 있으나, 이에 동의하지 않을 경우 ㈜그린온 서비스 이용이 제한될 수 있습니다.\n' +
      '\n' +
      '위와 같이 개인정보를 수집∙이용하는데 동의하십니까?\n',
  terms3:'14세.',//만 14세 이상
  terms4:'(선택) ㈜그린온 서비스 마케팅 정보 수신 동의\n' +//마케팅 정보 수신 동의
      '\n' +
      '㈜그린온 서비스 마케팅 정보 수신 동의\n' +
      ' \n' +
      '\n' +
      '당사에서 보내는 마케팅 정보 및 당사와 파트너사의 마케팅 정보를 전화, 문자메시지, 이메일 및 앱 푸쉬 알림 등을 통해 받게 됩니다.\n' +
      '\n' +
      '※ ㈜그린온 서비스에 가입하고 광고성 정보 수신 동의를 한 이용자는 ㈜그린온 서비스에 포함된 모든 서비스 의 광고성 정보 수신에도 동의한 것으로 간주됩니다.',
}
