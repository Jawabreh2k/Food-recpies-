import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDish } from "../Redux/actions/dishes";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  InputLabel,
} from "@material-ui/core";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, app } from "../firebase";

const AddDish = () => {
  const [mainDishId, setMainDishId] = useState("");
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async (imageFile) => {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit called");
    e.preventDefault();
    if (
      mainDishId &&
      name.trim() &&
      ingredients.trim() &&
      imageFile &&
      description.trim() &&
      instructions.trim()
    ) {
      console.log("Form validation passed");
      const imageUrl = await uploadImage(imageFile);

      const newDish = {
        mainDishId,
        name,
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        image: imageUrl,
        description,
        instructions: instructions.split(/\r?\n/), // Split instructions by newline
      };
      dispatch(addDish(newDish));
      console.log("Dish dispatched", newDish);
      setName("");
      setIngredients("");
      setImageFile(null);
      setDescription("");
      setMainDishId("");
      setInstructions("");
      navigate("/");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        Add New Dish
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              select
              label="Main Category"
              value={mainDishId}
              onChange={(e) => setMainDishId(e.target.value)}
              SelectProps={{
                native: true,
              }}
              style={{ marginBottom: "1rem" }}
            >
              <option value="1">Lebanese Food</option>
              <option value="2">Italian Food</option>
              <option value="3">Mexican Food</option>
              <option value="4">Chinese Food</option>
            </TextField>
            <TextField
              fullWidth
              label="Recipe Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Ingredients (comma separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <InputLabel htmlFor="image-upload" style={{ marginBottom: "1rem" }}>
              Upload Image
            </InputLabel>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              label="Instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              style={{ marginBottom: "1rem" }}
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Dish
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddDish;
