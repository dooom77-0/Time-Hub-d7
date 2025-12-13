export default function Loading() {
    return <div className="flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-950"></div>
        <h1 className="text-4xl font-bold mb-10">جاري التحميل...</h1>
    </div>;
}