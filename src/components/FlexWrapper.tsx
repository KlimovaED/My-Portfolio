import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    justify?:string
    align?: string
    wrap?: string
    position?:string
    gap?:string
    padding?:string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${props =>props.direction || "row"};
    justify-content:${props =>props.justify || "flex-start"};
    align-items:${props =>props.align || "stretch"};
    flex-wrap: ${props =>props.wrap || "nowrap"};
    position:  ${props =>props.position || "static"};
    gap:  ${props =>props.gap || "0px"};
    padding: ${props =>props.padding || "0px"};
`;