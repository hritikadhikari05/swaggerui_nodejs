module.exports = {
  // operation's method
  get: {
    tags: ["Post CRUD operations"], // operation's tag.
    description: "Get a Post", // operation's desc.
    operationId: "getPost", // unique operation id
    parameters: [
      // expected params.
      {
        name: "id", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/id", // data model of the param
        },
        required: true, // Mandatory param
        description: "A single Post id", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Post is obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Post", // Post data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Post is not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};
