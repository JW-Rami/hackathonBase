'use client';
import React from 'react';
// import { NeynarAPIClient } from '@neynar/nodejs-sdk';
const client = new NeynarAPIClient(apiKey);
const sdk = require('api')('@neynar/v2.0#qjwsvluvvw91a');
async function getData() {
  // const sdk = require('api')('@neynar/v2.0#qjwsvluvvw91a');
  // sdk
  //   .cast({
  //     identifier: 'https%3A%2F%2Fwarpcast.com%2Fkugusha.eth%2F0x4df67767',
  //     type: 'url',
  //     api_key: 'C4E80F2B-57C8-4F86-9E0B-38335951259B',
  //   })
  //   .then(({ data }) => console.log(data))
  //   .catch((err) => console.error(err));
  const sdk = require('api')('@neynar/v2.0#qjwsvluvvw91a');

  sdk
    .cast({
      identifier: 'https%3A%2F%2Fwarpcast.com%2Fkugusha.eth%2F0x4df67767',
      type: 'url',
      api_key: apiKey,
    })
    .then(({ data }) => console.log('data --> ', data))

    .then(() => (hash = 'data.cast.hash'), console.log('hashhhhhhhhhhh', hash))
    .catch((err) => console.error(err));
}
getData();
function call() {
  return <button onClick={handleClick}>call</button>;
}

export default call;
