module.exports = React.createClass({displayName: "exports",
    render: function() {
        return ( React.createElement("div", {className: "commentBox"}, 
            "我是组件component,我为component.js带盐")
        );
    }
});
