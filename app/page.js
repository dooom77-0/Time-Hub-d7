import ClockClient from "./components/ClockClient";
export const metadata = {
title: "الساعة الحالية",
description: "A simple app to display the current time.",
};
export default function ClockPage() {
  return (
    <main className="flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
      <ClockClient />
    </main>
  );
}
