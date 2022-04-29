import Container from "src/components/Container";
import TitleSection from "src/components/TitleSection";
import React from "react";
import { socialMedias } from "src/constants/socialMedias";
import SiteConfigs from "site.config";
import classNames from "classnames";

const ContactInfo: React.FC = () => {
  return (
    <Container section maxWidth="lg">
      <TitleSection
        title={"Contacts"}
        subtitle={"For more info contact me"}
        center
      />
      <img
        className="w-full"
        src={"/images/profile-high-resolution.jpg"}
        alt={SiteConfigs.SHORT_NAME}
      />
      <div className="mt-8 flex w-full flex-wrap items-center justify-center">
        {socialMedias.map((media) => {
          return (
            <a
              className={classNames(
                "mx-2 text-blue-400 hover:text-blue-400",
                "mx-4 inline-block cursor-pointer transition duration-300",
                "dark:text-gray-50 hover:dark:text-gray-50"
              )}
              key={media.link}
              href={media.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`link to authors'${media.name} account`}
            >
              <media.icon className={"m-1 h-16 w-16"} />
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default ContactInfo;
