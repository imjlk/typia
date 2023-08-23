import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TagNaN } from "../../../structures/TagNaN";

export const test_protobuf_assertDecode_TagNaN = _test_protobuf_assertDecode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    assertDecode: (input: Uint8Array): typia.Resolved<TagNaN> => {
        const decode = (input: Uint8Array): typia.Resolved<TagNaN> => {
            const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                    ranged: undefined as any,
                    minimum: undefined as any,
                    maximum: undefined as any,
                    multipleOf: undefined as any,
                    typed: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // number;
                            output.value = reader.double();
                            break;
                        case 2:
                            // number;
                            output.ranged = reader.double();
                            break;
                        case 3:
                            // number;
                            output.minimum = reader.double();
                            break;
                        case 4:
                            // number;
                            output.maximum = reader.double();
                            break;
                        case 5:
                            // number;
                            output.multipleOf = reader.double();
                            break;
                        case 6:
                            // number;
                            output.typed = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        };
        const assert = (input: any): TagNaN => {
            const __is = (input: any): input is TagNaN => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "number" === typeof (input as any).value &&
                    Number.isFinite((input as any).value) &&
                    "number" === typeof (input as any).ranged &&
                    0 <= (input as any).ranged &&
                    100 >= (input as any).ranged &&
                    "number" === typeof (input as any).minimum &&
                    Number.isFinite((input as any).minimum) &&
                    0 <= (input as any).minimum &&
                    "number" === typeof (input as any).maximum &&
                    Number.isFinite((input as any).maximum) &&
                    100 >= (input as any).maximum &&
                    "number" === typeof (input as any).multipleOf &&
                    0 === (input as any).multipleOf % 3 &&
                    "number" === typeof (input as any).typed &&
                    Number.isFinite((input as any).typed) &&
                    Math.floor((input as any).typed) === (input as any).typed &&
                    -2147483648 <= (input as any).typed &&
                    (input as any).typed <= 2147483647
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagNaN => {
                    const $guard = (typia.protobuf.createAssertDecode as any)
                        .guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            })) &&
                        (("number" === typeof input.ranged &&
                            (0 <= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@minimum 0)",
                                    value: input.ranged,
                                })) &&
                            (100 >= input.ranged ||
                                $guard(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number (@maximum 100)",
                                    value: input.ranged,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number",
                                value: input.ranged,
                            })) &&
                        (("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum) &&
                            (0 <= input.minimum ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number (@minimum 0)",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            })) &&
                        (("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum) &&
                            (100 >= input.maximum ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number (@maximum 100)",
                                    value: input.maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number",
                                value: input.maximum,
                            })) &&
                        (("number" === typeof input.multipleOf &&
                            (0 === input.multipleOf % 3 ||
                                $guard(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number (@multipleOf 3)",
                                    value: input.multipleOf,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            })) &&
                        (("number" === typeof input.typed &&
                            Number.isFinite(input.typed) &&
                            (Math.floor(input.typed) === input.typed ||
                                $guard(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number (@type int)",
                                    value: input.typed,
                                })) &&
                            ((-2147483648 <= input.typed &&
                                input.typed <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number (@type int)",
                                    value: input.typed,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".typed",
                                expected: "number",
                                value: input.typed,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagNaN",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagNaN",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const output = decode(input);
        return assert(output) as any;
    },
    encode: (input: TagNaN): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                writer.uint32(9);
                writer.double(input.value);
                // property "ranged";
                writer.uint32(17);
                writer.double(input.ranged);
                // property "minimum";
                writer.uint32(25);
                writer.double(input.minimum);
                // property "maximum";
                writer.uint32(33);
                writer.double(input.maximum);
                // property "multipleOf";
                writer.uint32(41);
                writer.double(input.multipleOf);
                // property "typed";
                writer.uint32(48);
                writer.int32(input.typed);
            };
            //TagNaN;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});