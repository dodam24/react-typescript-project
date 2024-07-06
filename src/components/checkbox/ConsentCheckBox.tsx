import { useState } from "react";
import styled from "styled-components";
import { Styles } from "@/style/Styles";
import { CheckedOff, CheckedOn } from "@/pages/auth/register/_images/register_img";

interface ConsentComponentProps {
    Loan?: boolean;
}

const ConsentComponent = ({ Loan }: ConsentComponentProps) => {
    const initialCheckboxStates = Loan
        ? [
              {
                  label: "이용약관에 동의합니다. (필수)",
                  checked: false,
                  detailLink: "#",
                  id: "1",
              },
              {
                  label: "개인정보 수집 및 이용에 동의합니다. (필수)",
                  checked: false,
                  detailLink: "#",
                  id: "2",
              },
              {
                  label: "개인(신용) 정보 수집·이용·제공 동의 (필수)",
                  checked: false,
                  detailLink: "#",
                  id: "3",
              },
              {
                  label: "상품서비스 안내수단에 동의 (필수)",
                  checked: false,
                  detailLink: "",
                  id: "4",
              },
              {
                  label: "보증보험사 약관 동의 (필수)",
                  checked: false,
                  detailLink: "",
                  id: "5",
              },
          ]
        : [
              {
                  label: "이용약관에 동의합니다. (필수)",
                  checked: false,
                  detailLink: "#",
                  id: "1",
              },
              {
                  label: "개인정보 수집 및 이용에 동의합니다. (필수)",
                  checked: false,
                  detailLink: "#",
                  id: "2",
              },
              {
                  label: "만 14세 이상입니다. (필수)",
                  checked: false,
                  detailLink: "",
                  id: "3",
              },
          ];

    const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates);

    const handleCheckboxChange = (id: string) => {
        const newCheckboxStates = checkboxStates.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox,
        );
        setCheckboxStates(newCheckboxStates);
    };

    const toggleAllCheckboxes = () => {
        const allChecked = checkboxStates.every((checkbox) => checkbox.checked);
        const newCheckboxStates = checkboxStates.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxStates(newCheckboxStates);
    };

    return (
        <CommonContent>
            <div>
                <p>[서비스 이용을 위한 필수 약관 동의]</p>
                <ConsentWrapper>
                    <input
                        id="consentAll"
                        type="checkbox"
                        checked={checkboxStates.every((checkbox) => checkbox.checked)}
                        onChange={toggleAllCheckboxes}
                    />
                    <label htmlFor="consentAll">모두 동의</label>
                </ConsentWrapper>
            </div>
            <ConsentContainer>
                {checkboxStates.map((checkbox) => (
                    <ConsentList key={checkbox.id}>
                        <ConsentWrapper>
                            <input
                                id={checkbox.id}
                                type="checkbox"
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(checkbox.id)}
                            />
                            <label htmlFor={checkbox.id}>{checkbox.label}</label>
                        </ConsentWrapper>
                        {checkbox.detailLink && (
                            <a href={checkbox.detailLink} target="_blank" rel="noopener noreferrer">
                                상세
                            </a>
                        )}
                    </ConsentList>
                ))}
            </ConsentContainer>
        </CommonContent>
    );
};

const CommonContent = styled.div`
    margin-top: 0.8rem;
    div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    p {
        color: ${Styles.colors.natural80};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const ConsentWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

    input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        background: url(${CheckedOff}) no-repeat center;
        background-size: 1rem 1rem;
        appearance: none;
        margin: 0;
        min-width: 1rem;

        &:checked {
            background: url(${CheckedOn}) no-repeat center;
            background-size: 1rem 1rem;
        }
    }

    label {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize14};
        font-weight: ${Styles.font.weight.regular};
    }
`;

const ConsentContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    border-radius: 0.4rem;
    background-color: ${Styles.colors.systemBackground};
    margin: 0.4rem 0 0;
    padding: 0.85rem 0.8rem;
    word-break: break-all;
`;

const ConsentList = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;

    a {
        color: ${Styles.colors.natural60};
        font-size: ${Styles.font.size.fontsize12};
        font-weight: ${Styles.font.weight.regular};
        line-height: 140%;
        text-decoration: underline;
        text-underline-position: under;
        min-width: fit-content;
    }
`;

export default ConsentComponent;
