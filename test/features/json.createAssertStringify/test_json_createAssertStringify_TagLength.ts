import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagLength } from "../../structures/TagLength";

export const test_json_assertStringify_TagLength = _test_json_assertStringify(
    "TagLength",
)<TagLength>(TagLength)(typia.json.createAssertStringify<TagLength>());