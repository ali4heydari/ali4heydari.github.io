import { Directions } from "../../../const";
import { enumToValueArray } from "./EnumToValueArray";

describe(`${enumToValueArray.name}Tests`, () => {
  test("DirectionsEnumTest", () => {
    expect(enumToValueArray(Directions)).toStrictEqual(["rtl", "ltr"]);
  });

  test("EmptyEnumTest", () => {
    enum EmptyEnum {}
    expect(enumToValueArray(EmptyEnum)).toStrictEqual([]);
  });
});
