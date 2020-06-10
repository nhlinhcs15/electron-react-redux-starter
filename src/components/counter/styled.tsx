import styled from 'styled-components';

type Props = {
  visible: boolean;
};

const root = styled.div`
  display: ${(props: Props) => (props.visible ? 'block' : 'none')};
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background: #fff3;
`;

const button = styled.button`
  background: #fff;
  color: #008080;
  margin-right: 20px;
`;

export { root as Root, button as Button };
