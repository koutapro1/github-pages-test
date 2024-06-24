"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://uiux-up-specialist.team-lab.com/api/v1/messages"
      );

      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return <p>{data ? `Your data: ${JSON.stringify(data)}` : "Loading..."}</p>;
}
