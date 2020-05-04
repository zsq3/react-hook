import React, { useRef } from 'react'
import { Button } from 'element-react';


export default () => {
    const div = useRef(null);
    const divStyle = { "background": "green", "height": "300px"};

    function onHandleClick(){
        console.log(div.current);  //指向dom => div元素
        div.current.style.background = '#' + Math.floor( Math.random() * 0xffffff ).toString(16); //随机色
    }

    return(
        <main>
            <Button type="success" onClick={onHandleClick}>测试useRef</Button><br/>
            <div ref={div} style={divStyle}></div>
        </main>
    )
}