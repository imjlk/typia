import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_functional_assertEqualsParameters_ObjectUnionCompositePointer =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )(ObjectUnionCompositePointer)(
    (p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
      (input: ObjectUnionCompositePointer): ObjectUnionCompositePointer => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsParameters as any)
          .errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectUnionCompositePointer => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectUnionCompositePointer => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              $iu0(input.value, true && _exceptionable) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["p1", "p2"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io4 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["p1", "p2", "p3"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io5 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              "object" === typeof input.p4 &&
              null !== input.p4 &&
              $io2(input.p4, true && _exceptionable) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["p1", "p2", "p3", "p4"].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io6 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any, _index2: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["points"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io7 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io6(input.outer, true && _exceptionable) &&
              Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any, _index3: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io6(elem, true && _exceptionable),
              ) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["outer", "inner"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io8 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any, _index4: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              "object" === typeof input.inner &&
              null !== input.inner &&
              $io2(input.inner, true && _exceptionable) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["outer", "inner"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io9 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.centroid &&
              null !== input.centroid &&
              $io2(input.centroid, true && _exceptionable) &&
              "number" === typeof input.radius &&
              Number.isFinite(input.radius) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["centroid", "radius"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
              (() => {
                if (undefined !== input.x)
                  return $io2(input, true && _exceptionable);
                else if (undefined !== input.p4)
                  return $io5(input, true && _exceptionable);
                else if (undefined !== input.points)
                  return $io6(input, true && _exceptionable);
                else if (
                  Array.isArray(input.outer) &&
                  input.outer.every(
                    (elem: any, _index5: number) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      $io2(elem, false && _exceptionable),
                  )
                )
                  return $io8(input, true && _exceptionable);
                else if (
                  "object" === typeof input.outer &&
                  null !== input.outer &&
                  $io6(input.outer, false && _exceptionable)
                )
                  return $io7(input, true && _exceptionable);
                else if (undefined !== input.centroid)
                  return $io9(input, true && _exceptionable);
                else
                  return (() => {
                    if (undefined !== input.p3)
                      return $io4(input, true && _exceptionable);
                    else return $io3(input, true && _exceptionable);
                  })();
              })();
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectUnionCompositePointer => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected:
                        "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected:
                              "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected:
                            "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected:
                        "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.value && null !== input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected:
                        "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected:
                        "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["x", "y"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["p1", "p2"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p3 && null !== input.p3) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["p1", "p2", "p3"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p3 && null !== input.p3) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p4 && null !== input.p4) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p4",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p4,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p4, _path + ".p4", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p4",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.p4,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "p3", "p4"].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.points) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionCompositePointer.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                  input.points.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".points[" + _index2 + "]",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao2(
                          elem,
                          _path + ".points[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".points[" + _index2 + "]",
                          expected: "ObjectUnionCompositePointer.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionCompositePointer.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["points"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.outer && null !== input.outer) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "ObjectUnionCompositePointer.IPolyline",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                  $ao6(
                    input.outer,
                    _path + ".outer",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "ObjectUnionCompositePointer.IPolyline",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.inner) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionCompositePointer.IPolyline>",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                  input.inner.every(
                    (elem: any, _index3: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".inner[" + _index3 + "]",
                            expected: "ObjectUnionCompositePointer.IPolyline",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao6(
                          elem,
                          _path + ".inner[" + _index3 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".inner[" + _index3 + "]",
                          expected: "ObjectUnionCompositePointer.IPolyline",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionCompositePointer.IPolyline>",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["outer", "inner"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.outer) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "Array<ObjectUnionCompositePointer.IPoint>",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                  input.outer.every(
                    (elem: any, _index4: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".outer[" + _index4 + "]",
                            expected: "ObjectUnionCompositePointer.IPoint",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao2(
                          elem,
                          _path + ".outer[" + _index4 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".outer[" + _index4 + "]",
                          expected: "ObjectUnionCompositePointer.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "Array<ObjectUnionCompositePointer.IPoint>",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.inner && null !== input.inner) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                  $ao2(
                    input.inner,
                    _path + ".inner",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["outer", "inner"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao9 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.centroid &&
                  null !== input.centroid) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".centroid",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.centroid,
                    },
                    errorFactory,
                  )) &&
                  $ao2(
                    input.centroid,
                    _path + ".centroid",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".centroid",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: input.centroid,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.radius &&
                  Number.isFinite(input.radius)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".radius",
                      expected: "number",
                      value: input.radius,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["centroid", "radius"].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if (undefined !== input.x)
                    return $ao2(input, _path, true && _exceptionable);
                  else if (undefined !== input.p4)
                    return $ao5(input, _path, true && _exceptionable);
                  else if (undefined !== input.points)
                    return $ao6(input, _path, true && _exceptionable);
                  else if (
                    Array.isArray(input.outer) &&
                    input.outer.every(
                      (elem: any, _index5: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $ao2(
                          elem,
                          _path + ".outer[" + _index5 + "]",
                          false && _exceptionable,
                        ),
                    )
                  )
                    return $ao8(input, _path, true && _exceptionable);
                  else if (
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $ao6(input.outer, _path + ".outer", false && _exceptionable)
                  )
                    return $ao7(input, _path, true && _exceptionable);
                  else if (undefined !== input.centroid)
                    return $ao9(input, _path, true && _exceptionable);
                  else
                    return (() => {
                      if (undefined !== input.p3)
                        return $ao4(input, _path, true && _exceptionable);
                      else return $ao3(input, _path, true && _exceptionable);
                    })();
                })();
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectUnionCompositePointer",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectUnionCompositePointer",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
