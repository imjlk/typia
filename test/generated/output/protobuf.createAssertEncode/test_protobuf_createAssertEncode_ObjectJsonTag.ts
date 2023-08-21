import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_assertEncode_ObjectJsonTag =
    _test_protobuf_assertEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): ObjectJsonTag => {
                const __is = (input: any): input is ObjectJsonTag => {
                    const $is_custom = (
                        typia.protobuf.createAssertEncode as any
                    ).is_custom;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).vulnerable &&
                        $is_custom(
                            "deprecated",
                            "string",
                            "",
                            (input as any).vulnerable,
                        ) &&
                        "string" === typeof (input as any).description &&
                        "string" === typeof (input as any).title &&
                        $is_custom(
                            "title",
                            "string",
                            "something",
                            (input as any).title,
                        ) &&
                        "string" === typeof (input as any).complicate_title
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectJsonTag => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $is_custom = (
                            typia.protobuf.createAssertEncode as any
                        ).is_custom;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("string" === typeof input.vulnerable &&
                                ($is_custom(
                                    "deprecated",
                                    "string",
                                    "",
                                    input.vulnerable,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".vulnerable",
                                        expected: "string (@deprecated)",
                                        value: input.vulnerable,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".vulnerable",
                                    expected: "string",
                                    value: input.vulnerable,
                                })) &&
                            ("string" === typeof input.description ||
                                $guard(_exceptionable, {
                                    path: _path + ".description",
                                    expected: "string",
                                    value: input.description,
                                })) &&
                            (("string" === typeof input.title &&
                                ($is_custom(
                                    "title",
                                    "string",
                                    "something",
                                    input.title,
                                ) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "string (@title something)",
                                        value: input.title,
                                    }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".title",
                                    expected: "string",
                                    value: input.title,
                                })) &&
                            ("string" === typeof input.complicate_title ||
                                $guard(_exceptionable, {
                                    path: _path + ".complicate_title",
                                    expected: "string",
                                    value: input.complicate_title,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectJsonTag",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectJsonTag",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: ObjectJsonTag): Uint8Array => {
                const $is_custom = (typia.protobuf.createAssertEncode as any)
                    .is_custom;
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "vulnerable";
                        writer.uint32(10);
                        writer.string(input.vulnerable);
                        // property "description";
                        writer.uint32(18);
                        writer.string(input.description);
                        // property "title";
                        writer.uint32(26);
                        writer.string(input.title);
                        // property "complicate_title";
                        writer.uint32(34);
                        writer.string(input.complicate_title);
                    };
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return encode(assert(input));
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    required string vulnerable = 1;\n    required string description = 2;\n    required string title = 3;\n    required string complicate_title = 4;\n}',
    });