// @ts-ignore
import Link from "./Link";
import { Vector3 } from "three";

type LinksProps = {
  links: {
    link: string;
    desc: string;
    src: string;
  }[];
  color?: string;
  font?: string;
};

const places = [
  {
    p: new Vector3(-5.5, 4, 1),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 1),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 17),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 17),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 33),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 1),
    r: -Math.PI / 2,
  },
];

const linkArr: any = [];

const Links = (props: LinksProps) => {
  const { links, color, font } = props;

  for (let i = 0; i < links.length; i++) {
    linkArr.push(
      <Link
        position={places[i].p}
        rotY={places[i].r}
        text={links[i].desc}
        color={color}
        font={font}
        link={links[i].link}
        src={links[i].src}
        key={i}
      />
    );
  }

  return <group scale={[1 / 20, 1 / 20, 1 / 20]}>{linkArr}</group>;
};

export default Links;
