import React from "react";
import tw from "twin.macro";
import EmailIllustrationSrc from "../../assets/svg/email-illustration.svg";
import Container from "../ui/Container";
import * as Styled from "./styles";
import SiteConfigs from "../../../SiteConfigs";

export function ContactMe({ submitButtonText = "Send", textOnLeft = true }) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <Styled.TwoColumn>
        <Styled.ImageColumn>
          <EmailIllustrationSrc
            css={tw`rounded bg-contain bg-no-repeat bg-center h-full w-full`}
          />
        </Styled.ImageColumn>
        <Styled.TextColumn textOnLeft={textOnLeft}>
          <Styled.TextContent>
            <Styled.Subheading>{"Contact me"}</Styled.Subheading>
            <Styled.Heading>
              Feel free to <span css={tw`text-primary`}>get in touch</span>
              <wbr />
              with me.
            </Styled.Heading>
            <Styled.Description>
              {"I'll try to respond ASAP!"}
            </Styled.Description>
            <Styled.Form
              action={`https://getform.io/f/${SiteConfigs.CONTACT_GET_FORM_ID}`}
              method="POST"
            >
              <Styled.Input
                required
                type="text"
                name="name"
                placeholder="Name"
              />
              <Styled.Input
                required
                type="email"
                name="email"
                placeholder="eMail"
              />
              <Styled.Textarea
                required
                name="message"
                placeholder="Your Message Here"
              />
              <Styled.SubmitButton type="submit">
                {submitButtonText}
              </Styled.SubmitButton>
            </Styled.Form>
          </Styled.TextContent>
        </Styled.TextColumn>
      </Styled.TwoColumn>
    </Container>
  );
}
