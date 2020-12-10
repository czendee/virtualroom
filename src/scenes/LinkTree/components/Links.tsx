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
  radius: number;
};

const linkArr: any = [];
let offset = 0;

const Links = (props: LinksProps) => {
  const { links, color, font, radius = 5 } = props;

  for (const link of links) {
    linkArr.push(
      <Link
        position={[Math.cos(offset) * radius, 0, Math.sin(offset) * radius]}
        rotY={Math.PI / 2 - offset + Math.PI}
        text={link.desc}
        color={color}
        font={font}
        link={link.link}
      />
    );
    offset += (2 * Math.PI) / links.length;
  }

  return <>{linkArr}</>;
};

export default Links;
