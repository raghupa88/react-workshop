import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { EmailListView } from './EmailListView';

export const EmailList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://flipkart-email-mock.now.sh/')
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);
      });
  }, []);

  if (data == null) {
    return;
  }
  return (
    <EmailListView
      data={data}
      check={() => console.log('check called')}
    ></EmailListView>
  );
};
