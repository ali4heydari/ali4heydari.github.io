import React, { ChangeEvent, FormEventHandler, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons";
import EmailIllustrationSrc from "../images/svg/email-illustration.svg";
import SiteConfigs from "../../SiteConfigs";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props: { textOnLeft: boolean }) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export function ContactMe({
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [formValues, setFormValues] = useState<{ [k: string]: string }>({});

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      [event.target?.name]: event.target?.value,
    });
  };

  return (
    <Container id="contact-me">
      <TwoColumn>
        <ImageColumn>
          <EmailIllustrationSrc
            css={tw`rounded bg-contain bg-no-repeat bg-center h-full w-full`}
          />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{"Contact me"}</Subheading>
            <Heading>
              Feel free to <span css={tw`text-primary-500`}>get in touch</span>
              <wbr />
              with me.
            </Heading>
            <Description>{"I'll try to respond ASAP!"}</Description>
            <Form onSubmit={(event) => {}}>
              <Input
                onChange={onChangeInput}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <Textarea
                onChange={onChangeInput}
                name="message"
                placeholder="Your Message Here"
              />
              <a
                href={`mailto:${SiteConfigs.CONTACT_EMAIL}?subject=Site Feedback | ${formValues.subject}&body=${formValues.message}`}
                css={tw`inline-block mt-8 px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`}
              >
                {submitButtonText}
              </a>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
}
