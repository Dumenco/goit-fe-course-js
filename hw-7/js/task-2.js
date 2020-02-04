const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsItem = ingredients.map(ingredients =>{
      const li = document.createElement('li');
      li.textContent = ingredients
      return li
  });

  let ingredientsList = document.getElementById('ingredients');
  ingredientsList.append(...ingredientsItem)