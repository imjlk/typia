import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_functional_assertReturn_TupleUnion =
  _test_functional_assertReturn(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      (input: TupleUnion): TupleUnion => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): TupleUnion => {
          const __is = (input: any): input is TupleUnion => {
            const $ip0 = (input: any) => {
              const array = input;
              const tuplePredicators = [
                [
                  (top: any[]): any =>
                    top.length === 3 &&
                    "number" === typeof top[0] &&
                    Number.isFinite(top[0]) &&
                    "string" === typeof top[1] &&
                    "boolean" === typeof top[2],
                  (entire: any[]): any =>
                    entire.length === 3 &&
                    "number" === typeof entire[0] &&
                    Number.isFinite(entire[0]) &&
                    "string" === typeof entire[1] &&
                    "boolean" === typeof entire[2],
                ] as const,
                [
                  (top: any[]): any =>
                    top.length === 2 &&
                    "boolean" === typeof top[0] &&
                    "number" === typeof top[1] &&
                    Number.isFinite(top[1]),
                  (entire: any[]): any =>
                    entire.length === 2 &&
                    "boolean" === typeof entire[0] &&
                    "number" === typeof entire[1] &&
                    Number.isFinite(entire[1]),
                ] as const,
                [
                  (top: any[]): any => top.length === 0,
                  (entire: any[]): any => entire.length === 0,
                ] as const,
              ];
              for (const pred of tuplePredicators)
                if (pred[0](array)) return pred[1](array);
              return false;
            };
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleUnion => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ap0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ) => {
                const array = input;
                const tuplePredicators = [
                  [
                    (top: any[]): any =>
                      top.length === 3 &&
                      "number" === typeof top[0] &&
                      Number.isFinite(top[0]) &&
                      "string" === typeof top[1] &&
                      "boolean" === typeof top[2],
                    (entire: any[]): any =>
                      (entire.length === 3 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path,
                            expected: "[number, string, boolean]",
                            value: entire,
                          },
                          errorFactory,
                        )) &&
                      (("number" === typeof entire[0] &&
                        Number.isFinite(entire[0])) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[0]",
                            expected: "number",
                            value: entire[0],
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof entire[1] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[1]",
                            expected: "string",
                            value: entire[1],
                          },
                          errorFactory,
                        )) &&
                      ("boolean" === typeof entire[2] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[2]",
                            expected: "boolean",
                            value: entire[2],
                          },
                          errorFactory,
                        )),
                  ] as const,
                  [
                    (top: any[]): any =>
                      top.length === 2 &&
                      "boolean" === typeof top[0] &&
                      "number" === typeof top[1] &&
                      Number.isFinite(top[1]),
                    (entire: any[]): any =>
                      (entire.length === 2 ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path,
                            expected: "[boolean, number]",
                            value: entire,
                          },
                          errorFactory,
                        )) &&
                      ("boolean" === typeof entire[0] ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[0]",
                            expected: "boolean",
                            value: entire[0],
                          },
                          errorFactory,
                        )) &&
                      (("number" === typeof entire[1] &&
                        Number.isFinite(entire[1])) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[1]",
                            expected: "number",
                            value: entire[1],
                          },
                          errorFactory,
                        )),
                  ] as const,
                  [
                    (top: any[]): any => top.length === 0,
                    (entire: any[]): any =>
                      entire.length === 0 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path,
                          expected: "[]",
                          value: entire,
                        },
                        errorFactory,
                      ),
                  ] as const,
                ];
                for (const pred of tuplePredicators)
                  if (pred[0](array)) return pred[1](array);
                return $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      "([number, string, boolean] | [boolean, number] | [])",
                    value: input,
                  },
                  errorFactory,
                );
              };
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "([] | [boolean, number] | [number, string, boolean])",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ($ap0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "[number, string, boolean] | [boolean, number] | []",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "([] | [boolean, number] | [number, string, boolean])",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
