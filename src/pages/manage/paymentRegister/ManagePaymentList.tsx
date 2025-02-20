import { Link } from "react-router-dom";
import styled from "styled-components";

import SpeechBubble from "@/components/SpeechBubble";
import useSpeechBubble from "@/hooks/useSpeechBubble";
import { paymentListData } from "@/pages/manage/paymentRegister/_data/ManagePaymetData";

import { Styles } from "@/style/Styles";

const ManagePaymentList = () => {
    const { isClose, closeSpeechBubble } = useSpeechBubble();
    return (
        <StyledPaymentListWrapper>
            <SpeechBubble
                contents={"항목을 선택하면 지급내용을 수정할 수 있어요!"}
                isClose={isClose}
                closeSpeechBubble={closeSpeechBubble}
                left={59}
                top={21.8}
            />
            {paymentListData.map((payment) => (
                <li key={payment.id}>
                    <Link to={`/manage/payment/info/${payment.id}`}>
                        <StyledPaymentItemTop>
                            <div>
                                <h3>{payment.name}</h3>
                                <span>{payment.paymentType}</span>
                            </div>
                            <div>
                                <h4>예상급여</h4>
                                <p>{payment.expectedPayment}</p>
                            </div>
                            <div>
                                <h4>지급급여</h4>
                                <p>{payment.actualPayment}</p>
                            </div>
                        </StyledPaymentItemTop>
                        <StyledPaymentItemBottom>
                            <p>근무기간</p>
                            <p>{`${payment.startDate} ~ ${payment.endDate}`}</p>
                        </StyledPaymentItemBottom>
                    </Link>
                </li>
            ))}
        </StyledPaymentListWrapper>
    );
};

export default ManagePaymentList;

const StyledPaymentListWrapper = styled.ul`
    margin-top: 1.85rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
        border-radius: 0.4rem;
        border: 1px solid ${Styles.colors.natural10};
    }
    margin-bottom: 4rem;
`;

const StyledPaymentItemTop = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0.5rem;
    gap: 0.5rem;
    word-break: break-all;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.4rem;
        h3 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.medium};
        }
        span {
            color: ${Styles.colors.primary100};
            font-size: ${Styles.font.size.fontsize12};
            font-weight: ${Styles.font.weight.regular};
            line-height: 1.4;
            padding: 0.15rem 0.4rem;
            border: 1px solid ${Styles.colors.primary100};
            border-radius: 0.4rem;
            min-width: fit-content;
        }
        h4 {
            color: ${Styles.colors.natural60};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            min-width: fit-content;
        }
        p {
            color: ${Styles.colors.natural80};
            font-size: ${Styles.font.size.fontsize14};
            font-weight: ${Styles.font.weight.regular};
            text-align: right;
        }
    }
`;

const StyledPaymentItemBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    background-color: ${Styles.colors.systemBackground};
    p {
        color: ${Styles.colors.natural50};
        font-size: ${Styles.font.size.fontsize13};
        font-weight: ${Styles.font.weight.regular};
    }
`;
