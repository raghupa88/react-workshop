import { EmailCard } from '../../../../common/components/EmailCard/EmailCard';
import React from 'react';

export const EmailListView = ({ data, check }) => {
  check();
  return (
    <ul className="grow">
      {data.map((item) => {
        const { id, subject, short_description, from } = item;
        return (
          <EmailCard
            key={id}
            name={from.name}
            email={from.email}
            subject={subject}
            description={short_description}
          />
        );
      })}
    </ul>
  );
};
