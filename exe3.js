/**
 * Created by yaojianzhao on 2017/9/2.
 */

import React from 'react'

var Hello = React.createClass({
    render:function(){
        return <span>Hello</span>
    }
})

var World = React.createClass({
    propTypes:{
        who: React.PropTypes.string
    },
    render:function(){
        return <span>{this.props.who||'world'}!</span>
    }
})

export default React.createClass({
    render:function(){
        return <div><Hello/><World who="Dave"/></div>
    }
})