import styled from "styled-components";

import AppBackHeader from "@/components/header/AppBackHeader";
import AppLayout from "@/components/layout/AppLayout";

import { Styles } from "@/style/Styles";
import AppBaseWrapper from "@/components/layout/AppBaseWrapper";

const RealtyDepositList = () => {
    const depositData = [
        {
            id: 1,
            title: "임대료",
            status: "입금대기",
            date: "2023.03.01 09:58:34",
            amount: "500,000",
            scheduledDate: "2023.03.05",
        },
        {
            id: 2,
            title: "관리비",
            status: "입금완료",
            date: "2023.03.02 14:20:45",
            amount: "300,000",
            scheduledDate: "2023.03.10",
        },
        {
            id: 3,
            title: "수리비",
            status: "입금대기",
            date: "2023.03.03 11:30:22",
            amount: "200,000",
            scheduledDate: "2023.03.08",
        },
    ];

    return (
        <AppLayout props={{ header: <AppBackHeader title="입금목록" /> }}>
            <AppBaseWrapper title={`항목을 터치하면 입금 상세내역을\n확인할 수 있습니다.`}>
                <StyledDepositList>
                    {depositData.map((item) => (
                        <StyledDepositItem key={item.id}>
                            <div className="top_box">
                                <div>
                                    <h2>{item.title}</h2>
                                    <h3>{item.status}</h3>
                                </div>
                                <p>{item.date}</p>
                            </div>
                            <div className="botton_box">
                                <p>
                                    <span>입금(예정일)</span> {item.scheduledDate}
                                </p>
                                <h4>{item.amount}</h4>
                            </div>
                        </StyledDepositItem>
                    ))}
                </StyledDepositList>
            </AppBaseWrapper>
        </AppLayout>
    );
};

const StyledDepositList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 1.5rem 0 1.2rem;
`;
const StyledDepositItem = styled.li`
    padding: 1rem;
    border-radius: 0.4rem;
    border: 1px solid ${Styles.colors.natural00};
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .top_box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.3rem;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            h2 {
                color: ${Styles.colors.natural90};
                font-size: ${Styles.font.size.fontsize15};
                font-weight: ${Styles.font.weight.medium};
                margin: 0;
            }
            h3 {
                color: ${Styles.colors.systemError};
                font-size: ${Styles.font.size.fontsize14};
                font-weight: ${Styles.font.weight.regular};
            }
        }
        p {
            color: ${Styles.colors.natural50};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            text-align: left;
        }
    }
    .botton_box {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        border-radius: 0.25rem;
        background-color: ${Styles.colors.systemBackground};
        align-self: stretch;
        align-items: center;
        p {
            color: ${Styles.colors.natural40};
            font-size: ${Styles.font.size.fontsize13};
            font-weight: ${Styles.font.weight.regular};
            span {
                color: ${Styles.colors.systemError};
                text-overflow: ellipsis;
            }
        }
        h4 {
            color: ${Styles.colors.natural90};
            font-size: ${Styles.font.size.fontsize15};
            font-weight: ${Styles.font.weight.regular};
        }
    }
`;

export default RealtyDepositList;
