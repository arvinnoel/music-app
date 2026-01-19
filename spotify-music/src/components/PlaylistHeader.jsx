const PlaylistHeader = ({ playlist }) => {
    return (
        <div className="bg-gradient-to-b from-zinc-900 to-black px-4 py-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                <img
                    src={playlist.image}
                    alt="playlist cover"
                    className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 object-cover shadow-lg rounded"
                />
                <div className="text-white text-center md:text-left">
                    <p className="text-xs uppercase text-gray-400">My Playlist</p>

                    <h1 className="text-2xl md:text-4xl font-bold mt-2">
                        {playlist.name}
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        {playlist.description}
                    </p>

                    <p className="text-gray-500 text-xs md:text-sm mt-1">
                        {playlist.owner} • {playlist.tracks.length} songs
                    </p>
                </div>
            </div>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-bold">
                    Play
                </button>
                <button className="p-3 rounded-full hover:bg-zinc-800">❤️</button>
                <button className="p-3 rounded-full hover:bg-zinc-800">⋯</button>
            </div>
        </div>
    );
};

export default PlaylistHeader;
