import { Check, Clock, Cross } from "akar-icons";
import { FC } from "react";

type propsObject = {
  isVip: boolean;
};

const ServiceCardItem: FC<propsObject> = ({ isVip }) => {
  return (
    <div className={isVip ? "service-card service-card-vip" : "service-card"}>
      <h4>Expresslieferung</h4>
      <ul>
        <li>
          <Check strokeWidth={3} size={12} color="#39B972" />{" "}
          Dienstleistungsname
        </li>
        <li>
          <Cross strokeWidth={3} size={12} color="#A3A3A4" />{" "}
          Dienstleistungsname
        </li>
        <li>
          <Cross strokeWidth={3} size={12} color="#A3A3A4" />{" "}
          Dienstleistungsname
        </li>
        <li>
          <Cross strokeWidth={3} size={12} color="#A3A3A4" />{" "}
          Dienstleistungsname
        </li>
      </ul>
      <span>
        <Clock strokeWidth={3} size={14} color="#00A3FF" /> 3-7 Tage
      </span>
    </div>
  );
};

export default ServiceCardItem;
