import { Htag } from "@/components";
import { Button } from "@/components";
import { Paragraph } from "@/components";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>
        text
      </Htag>
      <Button arrow="right" appearance='primary'>button</Button>
      <Button arrow="down" appearance='ghost'>button</Button>
      <Paragraph appearance="small">text</Paragraph>
      <Paragraph appearance="medium">text</Paragraph>
      <Paragraph appearance="large">text</Paragraph>


    </>
  );
}
