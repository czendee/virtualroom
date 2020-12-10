// @ts-ignore
import Link from "./Link";

type LinksProps = {
  links: {
    link: string;
    desc: string;
    asset: string;
  }[];
  color?: string;
  font?: string;
};

const linkArr: any = [];

const Links = (props: LinksProps) => {
  const { links, color, font } = props;

  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[0].desc}
  //     color={color}
  //     font={font}
  //     link={links[0].link}
  //   />
  // );
  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[1].desc}
  //     color={color}
  //     font={font}
  //     link={links[1].link}
  //   />
  // );
  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[2].desc}
  //     color={color}
  //     font={font}
  //     link={links[2].link}
  //   />
  // );
  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[3].desc}
  //     color={color}
  //     font={font}
  //     link={links[3].link}
  //   />
  // );
  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[4].desc}
  //     color={color}
  //     font={font}
  //     link={links[4].link}
  //   />
  // );
  // linkArr.push(
  //   <Link
  //     position={[]}
  //     text={links[5].desc}
  //     color={color}
  //     font={font}
  //     link={links[5].link}
  //   />
  // );

  return <>{linkArr}</>;
};

export default Links;
