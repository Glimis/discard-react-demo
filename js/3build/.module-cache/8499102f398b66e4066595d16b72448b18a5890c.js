var a=React.createClass({displayName: "a",
    render: function() {
        return ( React.createElement("div", {className: "commentBox"}, 
            "Hello, world!I am a CommentBox. ")
        );
    }
});

exports.module = a;
