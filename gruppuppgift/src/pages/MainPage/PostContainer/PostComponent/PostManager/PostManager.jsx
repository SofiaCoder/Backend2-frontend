export function PostManager({isEditable, setIsEditable, posts, setPosts, postId}){
  function handleSave() {
    setIsEditable(false);
  }

  function handleEdit() {
    setIsEditable(true)
  }

  function handleDelete(){
    // Fetch to remove by id
    const clonedPosts = structuredClone(posts);
    const removalIndex = clonedPosts.findIndex(post => post._id === postId);
    clonedPosts.splice(removalIndex, 1);
    setPosts(clonedPosts);
  }
  return <div>
    {isEditable ? <p onClick={handleSave}>Save</p> : <p onClick={handleEdit}> Edit</p>}

    <p onClick={handleDelete}>Delete</p>
  </div>
}