
export default function Loading({ transparent }) {
    return (
        <>
            <div className={`fixed inset-0 bg-white z z-40 ${transparent ? 'opacity-70' : ''}`}></div>
            <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="border-4 border-blue-500 border-dashed animate-spin w-10 h-10 rounded-full"></div>
            </div>
        </>
    )
}
