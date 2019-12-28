const x = require('./xendit');

const EWallet = x.EWallet;
const ew = new EWallet({});

ew.createOVOPayment({
  externalID: new Date(),
  amount: 1,
  phone: '081234567890',
})
  .then(r => {
    console.log('create OVO payment detail:', r); // eslint-disable-line no-console
    return r;
  })
  .then(({ external_id }) =>
    ew.getOVOPaymentStatusByExtID({ externalID: external_id }),
  )
  .then(r => {
    console.log('OVO payment status detail:', r); // eslint-disable-line no-console
    return r;
  })
  .catch(e => {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });

ew.createDanaPayment({
  externalID: new Date(),
  amount: 1,
  callbackURL: 'http://google.com',
  redirectURL: 'http://google.com',
})
  .then(r => {
    console.log('create dana payment detail:', r); // eslint-disable-line no-console
    return r;
  })
  .then(({ external_id }) =>
    ew.getDanaPaymentStatusByExtID({ externalID: external_id }),
  )
  .then(r => {
    console.log('Dana payment status detail:', r); // eslint-disable-line no-console
    return r;
  })
  .catch(e => {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
