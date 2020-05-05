import React, { useState, useMemo, useEffect } from 'react'
import { Button } from 'element-react';


/*
* useEffect与useMemo写法类似， 但是执行时间不同，
* useEffect是在componentDidMount之后执行，useMemo是在渲染过程中执行
*
* */

export default () => {
    let [person, setPerson] = useState({name: 'cwp', age: 20});
    const [count] = useState(10);

    let age = useMemo(() => {  //与useEffect类似，第一个参数是个回调函数，第二个参数是监听对象的数组（也是默认不写监听全局）
        console.log('useMemo先执行了');
        return person.age
    }, [count]);   //虽然这样保证了上面回调不会执行，但是下面的useEffect还是打印出来了，是不是意味着页面还是重新渲染了

    useEffect(() => {
        console.log('useEffect后执行')
    })

    function changeState() {
        setPerson({age: 26})
    }

    return(
        <div>
            <span>{age}</span> {/*注意这里是useMemo对象*/}
            <Button type="warning" onClick={changeState}>change state</Button>
        </div>
    )
}