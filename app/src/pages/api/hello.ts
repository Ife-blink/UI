// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { encrypt, fetchMultisigAccount, createMultisig } from '@lunchboxfi/sdk/lib'
import { Keypair } from '@solana/web3.js'
import bs58 from 'bs58'
import { type } from 'os'

type Data = {
  name: string
}

type Mutisig = {
  multisig: string;
  keypairs: Keypair[];
  signature: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // let privatekey : any = Keypair.generate().secretKey
  // privatekey = bs58.encode(privatekey)
  // console.log(privatekey)
  //  const PIN = 5546
  // const en = encrypt(PIN, privatekey)
  // console.log(en)
  let KEYPAIR = [212,243,134,229,121,198,6,168,223,223,58,152,186,16,127,173,23,131,31,195,80,109,186,100,26,205,202,115,233,15,251,176,108,83,169,196,205,75,119,116,36,134,138,127,239,29,174,6,136,197,90,169,127,17,209,224,2,114,74,149,188,176,144,17]

  const multisig = await createMultisig("devnet", KEYPAIR)
    .then((r) => { console.log(r)})
  res.status(200).json({ name: `${multisig}` })
}
