module.exports = {
  // operation's method
  put: {
    tags: ["Post CRUD operations"], // operation's tag
    description: "Update Post", // short desc
    operationId: "updatePost", // unique operation id
    parameters: [
      // expected params
      {
        name: "id", // name of param
        in: "path", // location of param
        schema: {
          $ref: "#/components/schemas/id", // id model
        },
        required: true, // mandatory
        description: "Id of Post to be updated", // short desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Post updated successfully", // response desc.
      },
      // response code
      404: {
        description: "Post not found", // response desc.
      },
      // response code
      500: {
        description: "Server error", // response desc.
      },
    },
  },
};
