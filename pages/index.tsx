import { Htag, Tag, Button, Paragraph, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>
        text
      </Htag>
      <Button arrow="none" appearance='primary'>button</Button>
      <Button arrow="right" appearance='ghost'>button</Button>
      <Paragraph appearance="small">text</Paragraph>
      <Paragraph appearance="medium">text</Paragraph>
      <Paragraph appearance="large">text</Paragraph>
      <Tag color="red" appearance="small">red</Tag>
      <Tag color="green" appearance="medium">green</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);