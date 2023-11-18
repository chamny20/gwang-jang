import styled from "styled-components";

import next from "@/assets/bottom_arrow.svg";
import { SimilarTopicBox } from "@/components/molecules/longTopicBox";
import { SimilarTopicesProps } from "@/types";

const SimilarTopic = ({ data }: { data: SimilarTopicesProps }) => {
  return (
    <Container>
      <div className="keyword-text">
        <div className="title-top">
          <p>{data.topic}</p> 와
        </div>
        <div>비슷한 주제에요</div>
      </div>

      <TopicWraaper>
        <div className="TopicBoxes">
          {data.item.map((el) => {
            return <SimilarTopicBox data={el} />;
          })}
        </div>
        <DifferentTopicBtn>
          <p>다른 주제도 둘러보세요</p>
          <img
            src={next}
            alt=">"
          />
        </DifferentTopicBtn>
      </TopicWraaper>
    </Container>
  );
};

export default SimilarTopic;

const Container = styled.div`
  .keyword-text {
    padding: 0 24px;
    margin-bottom: 20px;
    /* width: 400px; */
    display: flex;
    flex-direction: column;
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    .title-top {
      display: flex;
    }

    p {
      font-weight: 700;
      color: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      box-shadow: inset 0 -9px 0 #1ae276;
      margin-right: 5px;
    }
  }
`;
const TopicWraaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.6);
  .TopicBoxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const DifferentTopicBtn = styled.div`
  margin: 29px 0 26px;
  padding: 14px 21px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: flex;
  border-radius: 55px;
  background-color: var(--Gray2_100, #f5f5f5);
  width: fit-content;
  box-sizing: border-box;
  color: var(--Gray8_700, #616161);
  cursor: pointer;

  img {
    transform: rotate(-90deg);
  }
`;
