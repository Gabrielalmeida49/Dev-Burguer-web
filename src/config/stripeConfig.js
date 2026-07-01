import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51TDVqDBkMbCf6oHAZIyw6YEGJB1g0uI95smBU7KT2zv6B7mCJ7uvqBBvSyZuqXXfmoKQGmvLqa5WZy2ajZ2HdQzl002cqFfv29',
);

export default stripePromise;
