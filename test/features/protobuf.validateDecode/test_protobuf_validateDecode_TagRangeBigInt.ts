import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_validateDecode_TagRangeBigInt =
    _test_protobuf_validateDecode("TagRangeBigInt")<TagRangeBigInt>(
        TagRangeBigInt,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TagRangeBigInt>(input),
        encode: typia.protobuf.createEncode<TagRangeBigInt>(),
    });