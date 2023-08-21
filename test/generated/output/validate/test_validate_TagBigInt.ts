import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_validate_TagBigInt = _test_validate("TagBigInt")<TagBigInt>(
    TagBigInt,
)((input) =>
    ((input: any): typia.IValidation<TagBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is TagBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                BigInt(0) <= (input as any).ranged &&
                BigInt(100) >= (input as any).ranged &&
                "bigint" === typeof (input as any).minimum &&
                BigInt(0) <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                BigInt(100) >= (input as any).maximum &&
                "bigint" === typeof (input as any).multipleOf &&
                BigInt(0) === (input as any).multipleOf % BigInt(3)
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagBigInt => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "bigint" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "bigint",
                                value: input.value,
                            }),
                        ("bigint" === typeof input.ranged &&
                            (BigInt(0) <= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (BigInt(100) >= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "bigint (@maximum 100)",
                                    value: input.ranged,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "bigint",
                                value: input.ranged,
                            }),
                        ("bigint" === typeof input.minimum &&
                            (BigInt(0) <= input.minimum ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "bigint (@minimum 0)",
                                    value: input.minimum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "bigint",
                                value: input.minimum,
                            }),
                        ("bigint" === typeof input.maximum &&
                            (BigInt(100) >= input.maximum ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "bigint (@maximum 100)",
                                    value: input.maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "bigint",
                                value: input.maximum,
                            }),
                        ("bigint" === typeof input.multipleOf &&
                            (BigInt(0) === input.multipleOf % BigInt(3) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "bigint (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "bigint",
                                value: input.multipleOf,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagBigInt",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    })(input),
);