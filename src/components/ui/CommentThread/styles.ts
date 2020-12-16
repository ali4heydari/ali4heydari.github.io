import styled from "styled-components";
import { Disqus } from "gatsby-plugin-disqus";
import tw from "twin.macro";

export interface DisqusProps {
  config: {
    /**
     * Tells the Disqus service how to identify the current page.
     * When the Disqus embed is loaded, the identifier is used to look up
     * the correct thread.
     */
    identifier: string;

    /**
     * Tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus.
     */
    title: string;

    /**
     * Tells the Disqus service the URL of the current page.
     * This URL is used when a thread is created so that Disqus knows which
     * page a thread belongs to.
     * (If undefined, Disqus will use the global.location.href)
     */
    url: string;
    /**
     * Tells the Disqus service to override the default site language for the
     * current page.
     * This allows for dynamically loading the Disqus embed in different
     * languages on a per-page basis.
     * (If undefined, Disqus will use the default site language)
     */
    language?: string;
    /**
     * The generated payload used to pass Single Sign-On (SSO) user data
     */
    remoteAuthS3?: string;
    /**
     *  This is the public API key for your Single Sign-On (SSO) integration
     * */
    apiKey?: string;
  };
  /**
   * rerender component on theme change
   * */
  theme?: string;
}

export const DisqusThread = styled(Disqus)<DisqusProps>`
  ${tw`w-full mt-3`}
`;
