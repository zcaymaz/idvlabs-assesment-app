import axios from "axios";

export type TRecipe = {
    id: number;
    title: string;
    description: string;
    createDate?: string;
    userId?: number;
    userName?: string;
}

export const getRecipesByUserId = async () => {
    try {
        const res = await axios.get(`https://localhost:7163/api/Recipes/byUserId/${localStorage.getItem('userId')}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllRecipes = async () => {
    try {
        const res = await axios.get('https://localhost:7163/api/Recipes');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getRecipesByRecipeId = async () => {
    try {
        const res = await axios.get(`https://localhost:7163/api/Recipes/${localStorage.getItem('recipeId')}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteRecipe = async (id:number) => {
    try {
        await axios.delete(
            `https://localhost:7163/api/Recipes/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
    } catch (error) {
        console.log(error);
    }
};

export const updateRecipe = async (recipe:TRecipe,id:number) => {
    try {
        console.log(id);
        await axios.put(
            `https://localhost:7163/api/Recipes/${id}`,
            recipe,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
    } catch (error) {
        console.log(error);
    }
};

export const addRecipe = async (recipe:TRecipe) => {
    try {
      await axios.post('https://localhost:7163/api/Recipes', { ...recipe })
      return getAllRecipes();
    } catch (err: any) {
      console.log(err);
    }
  }