const TrackRow = ({ track, index }) => {
    return (
        <div
            className="group px-4 md:px-6 py-2 hover:bg-zinc-800 rounded cursor-pointer"
        >
            {/* Desktop / Tablet */}
            <div className="hidden md:grid grid-cols-[40px_3fr_2fr_2fr_60px] items-center gap-4">
                <span className="text-gray-400">{index + 1}</span>

                <div className="flex items-center gap-3">
                    <img
                        src={track.albumImage}
                        className="w-10 h-10 rounded"
                        alt=""
                    />
                    <div>
                        <p className="text-white">{track.title}</p>
                        <p className="text-gray-400 text-sm">{track.artist}</p>
                    </div>
                </div>

                <p className="text-gray-400 hidden lg:block">{track.album}</p>
                <p className="text-gray-400 hidden lg:block">{track.artist}</p>
                <p className="text-gray-400 text-right">{track.duration}</p>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-gray-400 w-6">{index + 1}</span>
                    <div>
                        <p className="text-white">{track.title}</p>
                        <p className="text-gray-400 text-sm">{track.artist}</p>
                    </div>
                </div>
                <span className="text-gray-400 text-sm">{track.duration}</span>
            </div>
        </div>
    );
};

export default TrackRow;
