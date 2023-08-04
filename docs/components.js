module.exports = {
  components: {
    schemas: {
      // id model
      id: {
        type: "string", // data type
        description: "An id of a Post", // desc
        example: "tyVgf", // example of an id
      },
      // Post model
      Post: {
        type: "object", // data type
        properties: {
          id: {
            type: "string", // data-type
            description:
              "Post identification number", // desc
            example: "ytyVgh", // example of an id
          },
          title: {
            type: "string", // data-type
            description: "Post's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the Post", // desc
            example: false, // example of a completed value
          },
        },
      },
      // Post input model
      PostInput: {
        type: "object", // data type
        properties: {
          title: {
            type: "string", // data type
            description: "Post's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the Post", // desc
            example: false, // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
