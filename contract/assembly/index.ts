import { PersistentUnorderedMap, ContractPromiseBatch, context, u128 } from "near-sdk-as";

import { Cause } from './model';

const causes = new PersistentUnorderedMap<i32, Cause>("CAUSES");

export function addCause(title: string, description: string, image: string, beneficiary: string): string {
  if (context.sender == 'adriano.testnet') {
    const cause = Cause.addCause({
      title: title,
      description: description,
      image: image,
      beneficiary: beneficiary,
      amount: u128.fromI32(0),
    });

    causes.set(causes.length, cause);
    return 'New cause added successfully';
  } else {
    return 'Error: not contract owner';
  }
}

export function getCause(index: i32): Cause | null {
  return causes.get(index);
}

export function getCauses(): Cause[] | null {
  return causes.values();
}

export function clearCauses(): string {
  if (context.sender == 'adriano.testnet') {
    causes.clear();
    return 'All causes were deleted';
  } else {
    return 'Error: not contract owner';
  }
}

export function supportCause(causeIndex: i32, amount: u128): void {
  const cause = getCause(causeIndex);

  if (cause == null) {
    throw new Error("cause not found");
  }

  ContractPromiseBatch.create(cause.beneficiary).transfer(context.attachedDeposit);

  cause.amount = u128.add(cause.amount, context.attachedDeposit)

  causes.set(causeIndex, cause);
}

// near call social-good.adriano.testnet addCause '{"title": "Inclusive coding for people with visual impairments", "description": "In an increasingly digital future, acquiring the skills to envision, design and build adaptive and assistive technologies should be of easy access to the ones who live with disabilities. Programming can be a very challenging skill to visually impaired people, but with your support we can create tools, devices and technology to make coding more accessible.", "image": "https://cdn.everydaysight.com/wp-content/uploads/2019/04/best-computer-for-blind-people.jpg", "beneficiary": "livia.testnet"}' --accountId adriano.testnet

// near call social-good.adriano.testnet addCause '{"title": "Recycling to offset carbon emissions", "description": "Climate change is the biggest challenge facing our planet today and it will affect each and all of us. Our initiative facilitates collecting, recycling, and safe disposal of e-waste, such as computers, mobile phones and other electronics. Your support can lead to less new material being produced and less CO2 emissions!", "image": "https://media.greenmatters.com/brand-img/MHSH6yZvR/0x0/does-recycling-help-climate-change3-1615515221502.jpg", "beneficiary": "brooklyn.testnet"}' --accountId adriano.testnet

// near call social-good.adriano.testnet addCause '{"title": "Blockchain security in non-profit healthcare", "description": "Our project enables non-profit healthcare institutions implement blockchain technology into their cybersecurity methods. Helps us secure and prevent medical data breaches. It ensures these organizations can put all their effort into taking care of people.", "image": "https://images.idgesg.net/images/idge/imported/imageapi/2022/03/01/10/healthcare_technology_medical_data_by_metamorworks_gettyimages-1127069581_2400x1600-100837041-large-100920574-large.jpg", "beneficiary": "trpr.testnet"}' --accountId adriano.testnet


// export function whoIs(): string {
//   return `${context.sender}`;
// }

// export function isOwner(): string {
//   if (context.sender == 'adriano.testnet') return 'is owner';
//   else return 'not owner'
// }

// export function getCausesCount(): i32 {
//   return causes.length;
// }