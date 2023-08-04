module.exports = {
  // operation's method
  post: {
    tags: ["Post CRUD operations"], // operation's tag
    description: "Create Post", // short desc
    operationId: "createPost", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/PostInput", // Post input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Post created successfully", // response desc
      },
      // response code
      500: {
        description: "Server error", // response desc
      },
    },
  },
};
