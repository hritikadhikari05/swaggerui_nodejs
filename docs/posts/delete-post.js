module.exports = {
  // operation's method.
  delete: {
    tags: ["Post CRUD operations"], // operation's tag
    description: "Deleting a Post", // short desc
    operationId: "deletePost", // unique operation id
    parameters: [
      // expected parameters
      {
        name: "id", // name of param
        in: "path", // location of param
        schema: {
          $ref: "#/components/schemas/id", // id model
        },
        required: true, // mandatory
        description: "Deleting a done Post", // param desc
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Post deleted successfully", // response desc
      },
      // response code
      404: {
        description: "Post not found", // response desc
      },
      // response code
      500: {
        description: "Server error", // response desc
      },
    },
  },
};
