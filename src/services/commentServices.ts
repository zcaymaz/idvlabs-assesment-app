import axios from "axios";

export type TComment = {
    id: number;
    zComment: string;
    userId: number;
    recipeId: number;
    userName: string;
}

export const addComment = async (comment:TComment) => {
    try {
        await axios.post('https://localhost:7163/api/Comment/byUserAndRecipeId', { ...comment })
        return getComments();
        } catch (err: any) {
        console.log(err);
    }
}

export const getComments = async () => {
    try {
        if (localStorage.getItem('recipeId')) {
            const res = await axios.get(
                `https://localhost:7163/api/Comment/byRecipeId/${localStorage.getItem('recipeId')}`);
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};