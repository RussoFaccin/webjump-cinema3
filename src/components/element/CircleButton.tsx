import styled from "styled-components";

interface CircleButtonProps {
    icon: string,
    text: string
}

interface BaseButtonProps {
    icon: string
}

const BaseButton = styled.button<BaseButtonProps>`
    background-color: transparent;
    border: 0;

    &:focus {
        outline: 0;
    }

    .srOnly {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
    }

    &::before {
    display: block;
    content: "";
    width: 40px;
    height: 40px;
    background-image: url(${props => props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 60%;
    }
`;

const CircleButton = ({icon, text}: CircleButtonProps) => {
    return (
        <BaseButton icon={icon}>
            <span className="srOnly">{text}</span>
        </BaseButton>
    );
}

export default CircleButton;
