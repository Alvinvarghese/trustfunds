"use client";

import { getTransactionsAPI } from "@/axios";
import { toastError } from "@/lib/toast";
import { useState, useEffect } from "react";
import EachTransaction from "./EachTransaction";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTransactionsAPI();
        console.log(res);
        if (res.data.success) {
          setTransactions(res.data.result);
        }
      } catch (err) {
        console.log(err);
        toastError(err?.response?.data?.error || err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-darkgray mt-8 w-full pt-3 text-base font-bold lg:text-2xl">
        Transaction History
      </h1>
      {!transactions && transactions?.length === 0 && (
        <>No transactions to show</>
      )}
      {transactions &&
        transactions.length > 0 &&
        transactions.map((transaction, index) => (
          <EachTransaction
            key={transaction._id}
            data={transaction}
            index={index + 1}
          />
        ))}
    </div>
  );
};

export default TransactionHistory;
