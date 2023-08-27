import styled from "styled-components";

interface FlexPropsInterface {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  flexDirection?: string;
  gap?: string;
  fontSize?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
  display: flex;

  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "start"};
  background: ${(props) => props.background || "none"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || "none"};
  font-size: ${(props) => props.fontSize || "17px"};
  backgroundImage: ${(props) => props.backgroundImage || "none"};
  backgroundPosition: ${(props) => props.backgroundPosition || "center"};
  backgroundSize: ${(props) => props.backgroundSize || "cover"};
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
