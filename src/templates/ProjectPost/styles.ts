import styled from "styled-components";
import tw from "twin.macro";
import { Disqus } from "gatsby-plugin-disqus";

export const Description = styled.p``;

export const Image = styled.figure`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10`};
`;

export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-2 sm:w-full`}
`;

export const TagsHeader = styled.h6`
  ${tw`text-lg  text-center m-2 w-full`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-interactive border border-primary rounded-full px-2 py-1 mr-2`}
`;

export const DisqusProject = styled(Disqus)`
  ${tw`w-full`}
`;
