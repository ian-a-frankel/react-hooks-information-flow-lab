function Filter({item, selectedCategory}) {
    if (selectedCategory === "All") 
        {return true}
    return item.category === selectedCategory
}

export default Filter