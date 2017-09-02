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
        return <span>world!</span>
    }
})

export default React.createClass({
    render:function(){
        return <div><Hello/><World/></div>
    }
})


//My code before checking out the answer

//import React from 'react'
// var Hello=<div>Hello</div>
// var World=<div>World</div>
//
// export default React.createClass({
//     render:function(){
//         return <div><Hello/><World/></div>
//     }
// })