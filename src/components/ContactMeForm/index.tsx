import React, { ChangeEvent, useState } from "react";
import tw from "twin.macro";
import EmailIllustrationSrc from "../../assets/svg/email-illustration.svg";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Container from "../ui/Container";
import * as Styled from "./styles";
import SiteConfigs from "../../../SiteConfigs";

export function ContactMe({
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [formValues, setFormValues] = useState<{ [k: string]: string }>({
    subject: "",
    message: "",
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setFormValues({
      [event.target?.name]: event.target?.value,
    });
  };

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
              Feel free to <span css={tw`text-primary-500`}>get in touch</span>
              <wbr />
              with me.
            </Styled.Heading>
            <Styled.Description>
              {"I'll try to respond ASAP!"}
            </Styled.Description>
            <Styled.Form onSubmit={(event) => {}}>
              <Styled.Input
                onChange={onChangeInput}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <Styled.Textarea
                onChange={onChangeInput}
                name="message"
                placeholder="Your Message Here"
              />
              <OutboundLink
                href={`mailto:${SiteConfigs.CONTACT_EMAIL}?subject=Site Feedback | ${formValues.subject}&body=${formValues.message}`}
                css={tw`text-center inline-block mt-8 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 hocus:shadow-outline hocus:outline-none transition duration-300`}
              >
                {submitButtonText}
              </OutboundLink>
            </Styled.Form>
          </Styled.TextContent>
        </Styled.TextColumn>
      </Styled.TwoColumn>
    </Container>
  );
}