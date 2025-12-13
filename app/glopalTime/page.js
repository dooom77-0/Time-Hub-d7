import GlopalClient from "../components/GlopalClient"
export const metadata = {
    title: "الوقت العالمي",
    description: "اعرض الوقت الحالي في مدن مختلفة حول العالم باستخدام تطبيق الوقت العالمي الخاص بنا.",
}
export default function GlopalTime() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <GlopalClient />
        </div>
    )
 }