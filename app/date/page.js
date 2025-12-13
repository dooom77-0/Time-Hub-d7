import DateClient from "../components/DateClient";

export const metadata = {
    title: "التاريخ الحالي",
    description: "عرض التاريخ الحالي"
}
export default function Date() {
    return (<div className="text-center min-h-screen w-screen flex flex-col justify-center items-center">
        <DateClient />
    </div>);
 }