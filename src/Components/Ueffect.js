import React, { useState, useEffect } from 'react'
import { Button } from 'element-react';

//useEffect： 结合了componentDidMount, componentDidUpdate 和 componentWillUnMount 三个生命周期
// 以前在这三个生命周期做的‘副作用’在这里做 比如 （Dom操作， 数据更新， 组件更新，清除定时器，清除绑定事件等）
// useEffect(callBack, arr) 接收两个参数，第一个回调函数， 第二个是监听的数组，比如监听count数据改变，
// 默认不写数组时就是监听全局， 即任意数据改变就执行useEffect回调


export default () => {
    let [count, setCount] = useState(1);
    let [age, setAge] = useState(18);
    let [list, setList] = useState([]);

    useEffect(() => {
        // axios.get(url)
        //     .then(res => {
        //        list = res.data
        //     })

        console.log(count);

        return () => { //组件卸载时执行的回调。 即专门给 componentWillUnMount 写的return函数
            //clearInterval(timer)
        }
    }, [age]);   //比如这里如果指定监听age, 那么下面点击按钮改变count是不会执行useEffect的回调的，
                 // 但是页面数据还是重新渲染了,useMemo可以控制不渲染



    return(
        <div>
            测试useEffect： { count }
            <Button type="primary" onClick={() => setCount(count+1)}>click change</Button>
            <br/><hr/><br/>
        </div>
    )
}

