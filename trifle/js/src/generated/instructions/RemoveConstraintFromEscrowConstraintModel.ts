/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  RemoveConstraintFromEscrowConstraintModelArgs,
  removeConstraintFromEscrowConstraintModelArgsBeet,
} from '../types/RemoveConstraintFromEscrowConstraintModelArgs';

/**
 * @category Instructions
 * @category RemoveConstraintFromEscrowConstraintModel
 * @category generated
 */
export type RemoveConstraintFromEscrowConstraintModelInstructionArgs = {
  removeConstraintFromEscrowConstraintModelArgs: RemoveConstraintFromEscrowConstraintModelArgs;
};
/**
 * @category Instructions
 * @category RemoveConstraintFromEscrowConstraintModel
 * @category generated
 */
export const RemoveConstraintFromEscrowConstraintModelStruct = new beet.FixableBeetArgsStruct<
  RemoveConstraintFromEscrowConstraintModelInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    [
      'removeConstraintFromEscrowConstraintModelArgs',
      removeConstraintFromEscrowConstraintModelArgsBeet,
    ],
  ],
  'RemoveConstraintFromEscrowConstraintModelInstructionArgs',
);
/**
 * Accounts required by the _RemoveConstraintFromEscrowConstraintModel_ instruction
 *
 * @property [_writable_] constraintModel Constraint model account
 * @property [_writable_, **signer**] payer Wallet paying for the transaction
 * @property [**signer**] updateAuthority Update authority of the constraint model
 * @category Instructions
 * @category RemoveConstraintFromEscrowConstraintModel
 * @category generated
 */
export type RemoveConstraintFromEscrowConstraintModelInstructionAccounts = {
  constraintModel: web3.PublicKey;
  payer: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const removeConstraintFromEscrowConstraintModelInstructionDiscriminator = 7;

/**
 * Creates a _RemoveConstraintFromEscrowConstraintModel_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RemoveConstraintFromEscrowConstraintModel
 * @category generated
 */
export function createRemoveConstraintFromEscrowConstraintModelInstruction(
  accounts: RemoveConstraintFromEscrowConstraintModelInstructionAccounts,
  args: RemoveConstraintFromEscrowConstraintModelInstructionArgs,
  programId = new web3.PublicKey('trifMWutwBxkSuatmpPVnEe7NoE3BJKgjVi8sSyoXWX'),
) {
  const [data] = RemoveConstraintFromEscrowConstraintModelStruct.serialize({
    instructionDiscriminator: removeConstraintFromEscrowConstraintModelInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.constraintModel,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
