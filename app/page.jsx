import { getFrameMetadata } from '@coinbase/onchainkit/frame';
// @ts-ignore
import { NEXT_PUBLIC_URL } from './config';
import { NeynarAPIClient } from '@neynar/nodejs-sdk';

// import Call from './call.js';
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story times',
    },
    {
      action: 'tx',
      label: 'Whitelist',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};
const apiKey = 'C4E80F2B-57C8-4F86-9E0B-38335951259B';
const client = new NeynarAPIClient(apiKey);
let hash = '';
async function getData() {
  const sdk = require('api')('@neynar/v2.0#qjwsvluvvw91a');

  sdk
    .cast({
      identifier: 'https%3A%2F%2Fwarpcast.com%2Fkugusha.eth%2F0x4df67767',
      type: 'url',
      api_key: apiKey,
    })
    // .then(({ data }) => console.log('data --> ', data, (hash = data.cast.hash)))

    // .then(() => (hash = data.cast.hash))
    .catch((err) => console.error(err));
  getLikes();
}
console.log('test');
let addressArray = [];
function getLikes() {
  // console.log('hello');
  const sdk = require('api')('@neynar/v2.0#qjwsvluvvw91a');
  sdk

    .reactionsCast({
      hash: hash,
      hash: '0x4df67767111d5e43df1393de142d4d9dda46ca06',

      types: 'likes',
      limit: '10',
      api_key: apiKey,
    })
    // .then(({ data }) => console.log(data))

    .then(({ data }) => {
      for (let i = 0; i < data.reactions.length; i++) {
        // console.log(data.reactions)
        addressArray.push(data.reactions[i].user?.custody_address);
        console.log('+1');
      }
      console.log('addressArrayaddressArrayaddressArray', addressArray);
    })

    .catch((err) => console.error(err));
}
getData();
export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
      <pfkpoezkopfkep></pfkpoezkopfkep>

      {/* <Call /> */}
    </>
  );
}
