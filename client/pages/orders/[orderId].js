import { useState } from 'react';
import { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push('/orders'),
  });
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    const timeId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, [order]);
  const msLeft = new Date(order.expiresAt) - new Date();

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      Time Left to pay: {timeLeft} seconds
      <StripeCheckout
        token={(id) => doRequest({ token: id })}
        stripeKey="pk_test_51K5oUEFmSQlmwOTF1xI4xPTBkhBkWE5R5mzXHPosGC7qtEziv6lkBtB2Vf8swpOXAde0b4zbMAHe5FdwAS1Ika5M00uVFHpH3z"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
