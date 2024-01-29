import { PaymentDetail } from "@/components/ui/PaymentDetail";

import data from "@/data/common.json";

export const PaymentDetailList: React.FC = () => {
  const { details } = data.paymentView;

  return (
    <div>
      <ul className="payment-details flex flex-col gap-5">
        {details.map((item, idx) => {
          const cn = idx === 2 ? "field-br" : "";

          return (
            <li key={idx}>
              <PaymentDetail
                label={item.label}
                value={item.value}
                valueClassName={cn}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
