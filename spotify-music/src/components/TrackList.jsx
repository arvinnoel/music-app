import { useState } from "react";

const TrackList = ({ tracks = [] }) => {
    const [selectedTrackId, setSelectedTrackId] = useState(null);

    return (
        <div className="mt-4 px-4 md:px-6">

            <div className="grid grid-cols-[32px_1fr_40px] md:grid-cols-[40px_1fr_2fr_2fr_60px] text-gray-400 text-sm border-b border-zinc-700 pb-2 mb-2">
                <span>#</span>
                <span>Title</span>
                <span className="hidden md:block">Album</span>
                <span className="hidden md:block">Artist</span>
                <span className="text-right">⏱</span>
            </div>

            {tracks.map((track, index) => {
                const isSelected = selectedTrackId === track.id;
                return (
                    <div key={track.id} onClick={() => setSelectedTrackId(track.id)} className={`grid grid-cols-[32px_1fr_40px] md:grid-cols-[40px_1fr_2fr_2fr_60px] items-center py-2 rounded cursor-pointer transition
              ${isSelected ? "bg-zinc-700" : "hover:bg-zinc-800"} `}>
                        <span className={`${isSelected ? "text-white" : "text-gray-400"}`} >
                            {index + 1}
                        </span>
                        <div className="flex items-center gap-3 min-w-0">
                            <img src={track.albumImage} alt="" className="w-10 h-10 rounded hidden md:block" />
                            <div className="min-w-0">
                                <p className={`truncate ${isSelected ? "text-green-500" : "text-white"
                                    }`}>{track.title}</p>
                                <p className="text-gray-400 text-sm truncate">
                                    {track.artist}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 hidden md:block truncate">
                            {track.album}
                        </p>
                        <p className="text-gray-400 hidden md:block truncate">
                            {track.artist}
                        </p>
                        <p className="text-gray-400 text-sm text-right">
                            {track.duration}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default TrackList;
