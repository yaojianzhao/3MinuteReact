/**
 * Created by yaojianzhao on 2017/9/2.
 */

import React from 'react'

var Hello=React.createClass({
    render:function(){
        return <span>Hello</span>
    }
})

var World=React.createClass({
    render:function(){
        return <span>{this.props.who||'world'}!</span>
    }
})

export default React.createClass({
    render:function(){
        return <div><Hello/><World who="Dave"/></div>
    }
})

// My code before checking out the answer
//
// import React from 'react'
//
// var Hello = React.createClass({
//     render:function(){
//         return <span>Hello</span>
//     }
// })
//
// var World = React.createClass({
//     render:function(){
//         if(this.props.who)
//             return <span>{this.props.who}!</span>
//         else
//             return <span>world!</span>
//     }
// })
//
// export default React.createClass({
//     render:function(){
//         return <div><Hello/><World who="Dave"/></div>
//     }
// })