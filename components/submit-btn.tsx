import React, { useState } from "react";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async () => {
    setPending(true);
    // Perform form submission logic here
    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPending(false);
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={pending}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
