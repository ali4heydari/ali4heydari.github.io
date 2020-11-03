import { FluidObject } from "gatsby-image";

export type ImageSharpFluid = FluidObject | FluidObject[];

export type ObjectType = Record<string, any>;

export interface SectionTitle {
  title: string;
  subtitle: string;
}
