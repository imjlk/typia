import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_createAssert_TypeTagObjectUnion = _test_assert(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input: any): TypeTagObjectUnion => {
  const __is = (input: any): input is TypeTagObjectUnion => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.value &&
      Number.isFinite(input.value) &&
      3 <= input.value;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.value &&
      3 <= input.value.length &&
      input.value.length <= 7;
    const $iu0 = (input: any): any =>
      (() => {
        if (
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7
        )
          return $io1(input);
        else if (
          "number" === typeof input.value &&
          Number.isFinite(input.value) &&
          3 <= input.value
        )
          return $io0(input);
        else return false;
      })();
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) => "object" === typeof elem && null !== elem && $iu0(elem),
      )
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is TypeTagObjectUnion => {
      const $guard = (typia.createAssert as any).guard;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ("number" === typeof input.value &&
          (Number.isFinite(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            })) &&
          (3 <= input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number & Minimum<3>",
              value: input.value,
            }))) ||
        $guard(_exceptionable, {
          path: _path + ".value",
          expected: "(number & Minimum<3>)",
          value: input.value,
        });
      const $ao1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        ("string" === typeof input.value &&
          (3 <= input.value.length ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string & MinLength<3>",
              value: input.value,
            })) &&
          (input.value.length <= 7 ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string & MaxLength<7>",
              value: input.value,
            }))) ||
        $guard(_exceptionable, {
          path: _path + ".value",
          expected: "(string & MinLength<3> & MaxLength<7>)",
          value: input.value,
        });
      const $au0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            (3 <= input.value.length ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MinLength<3>",
                value: input.value,
              })) &&
            (input.value.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MaxLength<7>",
                value: input.value,
              }))
          )
            return $ao1(input, _path, true && _exceptionable);
          else if (
            "number" === typeof input.value &&
            (3 <= input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number & Minimum<3>",
                value: input.value,
              }))
          )
            return $ao0(input, _path, true && _exceptionable);
          else
            return $guard(_exceptionable, {
              path: _path,
              expected:
                "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
              value: input,
            });
        })();
      return (
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagObjectUnion",
            value: input,
          })) &&
          input.every(
            (elem: any, _index1: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                  value: elem,
                })) &&
                $au0(elem, _path + "[" + _index1 + "]", true)) ||
              $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected:
                  "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                value: elem,
              }),
          )) ||
        $guard(true, {
          path: _path + "",
          expected: "TypeTagObjectUnion",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});