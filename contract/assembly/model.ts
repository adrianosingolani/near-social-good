import { u128, PersistentUnorderedMap } from "near-sdk-as";

@nearBindgen
export class Cause {
  title: string;
  description: string;
  image: string;
  beneficiary: string;
  amount: u128;

  public static addCause(payload: Cause): Cause {
    const cause = new Cause();

    cause.title = payload.title;
    cause.description = payload.description;
    cause.image = payload.image;
    cause.beneficiary = payload.beneficiary;
    cause.amount = payload.amount;

    return cause;
  }
}