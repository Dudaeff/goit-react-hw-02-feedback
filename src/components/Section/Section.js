import { SectionTitle, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Wrapper>
  );
};
