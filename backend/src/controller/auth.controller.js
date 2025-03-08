import { User } from "../models/user.model.js"; // Usuario

export const authCallback = async (req, res, next) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        // Comprobar si el usuario ya existe
        const user = await User.findOne({ clerkId: id });

        if (!user) {
            // Inscribirse
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl,
            });
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.log("Error in auth callback", error);
        next(error);
    }
};