
import { add } from "..";

describe("test add", () => {
  it("19 + 13 should be 42", () => {
    expect<i32>(add(19, 23)).toBe(42, "19 + 23 is 42");
  });

  it("can log some values to the console", () => {
    log<string>("Hello world!"); // strings!
    log<f64>(3.1415); // floats!
    log<u8>(244); // integers!
    log<u64>(0xffffffff); // long values!
    log<ArrayBuffer>(new ArrayBuffer(50)); // bytes!
  });
});
