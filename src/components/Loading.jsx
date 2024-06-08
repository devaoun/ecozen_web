
export default function Loading({ transparent }) {
    return (
        <>
            <div className={`fixed inset-0 bg-white z z-40 ${transparent ? 'opacity-70' : ''}`}></div>
            <div className="fixed inset-0 flex justify-center items-center z-50">
                Loading...
            </div>
        </>
    )
}
