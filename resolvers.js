const Post= require('./Post')

//resolvers
const resolvers = {
    Query: {
        hello: () => {
            return "Hello world"
        },
        getAll:async()=> {
return await Post.find();
        },
    },
};

module.exports =resolvers;