import tw from "twin.macro";
import CheckCircleOutlineIcon from "mdi-react/CheckCircleOutlineIcon";

export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
export const Subheading = tw.h5`font-bold text-primary-500`;
export const FeatureList = tw.ul`mt-12 leading-loose`;
export const Feature = tw.li`flex items-center`;
export const FeatureIcon = tw(CheckCircleOutlineIcon)`w-5 h-5 text-primary-500`;
export const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
