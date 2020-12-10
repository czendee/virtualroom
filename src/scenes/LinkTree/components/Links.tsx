// @ts-ignore
import Link from "./Link";

type LinksProps = {
  links: {
    link: string;
    desc: string;
    src: string;
  }[];
  color?: string;
  font?: string;
};

const linkArr: any = [];

const Links = (props: LinksProps) => {
  const { links, color, font } = props;

  linkArr.push(
    <Link
      position={[-5.5, 3, 1]}
      rotY={Math.PI / 2}
      text={links[0].desc}
      color={color}
      font={font}
      link={links[0].link}
      src={links[0].src}
    />
  );
  linkArr.push(
    <Link
      position={[-6.5, 3, 1]}
      rotY={-Math.PI / 2}
      text={links[1].desc}
      color={color}
      font={font}
      link={links[1].link}
      src={links[1].src}
    />
  );
  linkArr.push(
    <Link
      position={[-5.5, 3, 17]}
      rotY={Math.PI / 2}
      text={links[2].desc}
      color={color}
      font={font}
      link={links[2].link}
      src={links[2].src}
    />
  );
  linkArr.push(
    <Link
      position={[-6.5, 3, 17]}
      rotY={-Math.PI / 2}
      text={links[3].desc}
      color={color}
      font={font}
      link={links[3].link}
      src={links[3].src}
    />
  );
  linkArr.push(
    <Link
      position={[-5.5, 3, 33]}
      rotY={Math.PI / 2}
      text={links[4].desc}
      color={color}
      font={font}
      link={links[4].link}
      src={links[4].src}
    />
  );
  linkArr.push(
    <Link
      position={[-6.5, 3, 33]}
      rotY={-Math.PI / 2}
      text={links[5].desc}
      color={color}
      font={font}
      link={links[5].link}
      src={links[5].src}
    />
  );

  return <group scale={[1 / 20, 1 / 20, 1 / 20]}>{linkArr}</group>;
};

export default Links;
