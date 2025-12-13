import StopWatchClient from "../components/StopWatchClient";

export const metadata = {
  title: "ساعة ايقاف",
  description: "تطبيق ساعة ايقاف بسيط لبداية، إيقاف، وإعادة تعيين الوقت.",
};
export default function StopWatch() {
    return <div className="text-center min-h-screen w-screen flex flex-col justify-center items-center">
        <StopWatchClient />
    </div>;
 }