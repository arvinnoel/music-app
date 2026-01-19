const TrackHeader = () => {
    return (
        <div className="px-4 md:px-6 mt-6">
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-[40px_3fr_2fr_2fr_60px] text-gray-400 text-sm border-b border-zinc-700 pb-2">
                <span>#</span>
                <span>Title</span>
                <span className="hidden lg:block">Album</span>
                <span className="hidden lg:block">Artist</span>
                <span className="text-right">⏱</span>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between text-gray-400 text-sm border-b border-zinc-700 pb-2">
                <span>#</span>
                <span>Title</span>
                <span>⏱</span>
            </div>
        </div>
    );
};

export default TrackHeader;
