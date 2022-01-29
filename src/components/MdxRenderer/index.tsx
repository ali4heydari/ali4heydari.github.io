import { useMDXComponent } from "next-contentlayer/hooks";

type MdxRendererProps = { code: string };

const MdxRenderer = ({ code }: MdxRendererProps) => {
  const Component = useMDXComponent(code);
  return code ? <Component /> : null;
};

export default MdxRenderer;
