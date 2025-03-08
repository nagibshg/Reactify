import { Song } from "../models/song.model.js";

export const getAllsongs = async (req, res, next) => {
    try {
        // -1 = Descendente => más reciente -> más antiguo
        // 1 = Ascendente => más antiguo -> más reciente
        const songs = await Song.find().sort({ createdAt: -1 });
        res.json(songs);
    } catch (error) {
        next(error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
        // Obtención de 6 canciones aleatorias mediante el proceso de agregación de mongodb
        const songs = await Song.aggregate([
            {
                $sample: { size: 6 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]);

        res.json(songs);
    } catch (error) {
        next(error);
    }
};

export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]);

        res.json(songs);
    } catch (error) {
        next(error);
    }
};

export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample: { size: 4 },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ]);

        res.json(songs);
    } catch (error) {
        next(error);
    }
};
