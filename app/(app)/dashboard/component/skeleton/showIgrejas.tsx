export default function ChurchCardSkeleton() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white rounded-xl p-2 animate-pulse">

            <div className="flex flex-col gap-3">
                {/* Nome */}
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-14 bg-slate-300 rounded"></div>
                    <div className="h-4 w-40 bg-slate-200 rounded"></div>
                </div>

                {/* Cidade */}
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-16 bg-slate-300 rounded"></div>
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                </div>
            </div>

            <div className="mt-3 md:mt-0">
                {/* Status */}
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-16 bg-slate-300 rounded"></div>
                    <div className="h-4 w-20 bg-slate-200 rounded"></div>
                </div>
            </div>

        </div>
    );
}