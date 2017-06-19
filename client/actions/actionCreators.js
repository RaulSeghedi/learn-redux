// Increment
export function increment(index) {
    return{
        type: 'INCREMENT-LIKES',
        index // or index: index
    }

}

// Add comment
export function addComment(postId, author, comment) {
    return{
        type: 'ADD-COMMENT',
        postId,
        author,
        comment
    }
}

// Remove comment
export function removeComment(postId, index) {
    return{
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}