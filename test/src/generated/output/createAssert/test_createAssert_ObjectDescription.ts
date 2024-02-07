import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_createAssert_ObjectDescription = _test_assert(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input: any): ObjectDescription => {
  const __is = (input: any): input is ObjectDescription => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.id &&
      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) &&
      "boolean" === typeof input.deprecated &&
      "string" === typeof input.title &&
      Array.isArray(input.descriptions) &&
      input.descriptions.every((elem: any) => "string" === typeof elem) &&
      "number" === typeof input.newLine &&
      Number.isFinite(input.newLine);
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ObjectDescription => {
      const $guard = (typia.createAssert as any).guard;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (("string" === typeof input.id &&
          (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.id,
          ) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: 'string & Format<"uuid">',
              value: input.id,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".id",
            expected: '(string & Format<"uuid">)',
            value: input.id,
          })) &&
        ("boolean" === typeof input.deprecated ||
          $guard(_exceptionable, {
            path: _path + ".deprecated",
            expected: "boolean",
            value: input.deprecated,
          })) &&
        ("string" === typeof input.title ||
          $guard(_exceptionable, {
            path: _path + ".title",
            expected: "string",
            value: input.title,
          })) &&
        (((Array.isArray(input.descriptions) ||
          $guard(_exceptionable, {
            path: _path + ".descriptions",
            expected: "Array<string>",
            value: input.descriptions,
          })) &&
          input.descriptions.every(
            (elem: any, _index1: number) =>
              "string" === typeof elem ||
              $guard(_exceptionable, {
                path: _path + ".descriptions[" + _index1 + "]",
                expected: "string",
                value: elem,
              }),
          )) ||
          $guard(_exceptionable, {
            path: _path + ".descriptions",
            expected: "Array<string>",
            value: input.descriptions,
          })) &&
        (("number" === typeof input.newLine &&
          Number.isFinite(input.newLine)) ||
          $guard(_exceptionable, {
            path: _path + ".newLine",
            expected: "number",
            value: input.newLine,
          }));
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectDescription",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "ObjectDescription",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});