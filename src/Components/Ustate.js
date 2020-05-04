import React, { useState } from 'react'
import { Button } from 'element-react';

export default () => {
    const [count, setCount] = useState(10);  //可以设置数字类型
    const [person, setPerson] = useState({ name: 'zzz', age: 18 }); //可以设置对象类型
    const [arr, setArr] = useState([]);  //可以是数组类型，默认空数组
    const [fn, setFn] = useState(() => '函数默认返回值');   //函数类型



    return (
        <div>
            <div>
                <h3>计数： {count}</h3>
                <Button type="success" onClick={() => setCount(34)}>change</Button>
            </div>

<br/><hr/><br/>

            <div>
                <h3>姓名：{ person.name }, 年龄：{ person.age }</h3>
                <Button
                    type="primary"
                    onClick={() => setPerson({name: 'zsq', age: ++person.age})}>改变人物数据
                    {/*注意这里有个坑，不能写person.age++   无效写法 */}
                </Button>
            </div>

<br/><hr/><br/>

           <div>
               <h3>数组数据： { arr }</h3>
               <Button
                   type="primary"
                   onClick={() => setArr([1,2,3,4])}
               >静态设置数组数据</Button>
           </div>

<br/><hr/><br/>

            <div>
                <h3>数组数据： { arr }</h3>
                <Button
                    type="primary"
                    onClick={() => setArr(() => {
                        arr.push(8);  //这里不知道为什么点击一次添加了两个8  ......
                        return [...arr]
                    })}
                >动态添加数组数据</Button>
            </div>
<br/><hr/><br/>

            <div>
                <h3>函数类型返回数据： { fn }</h3>
                <Button
                    type="primary"
                    onClick={() => setFn(() => '变了')}
                >改变函数类型数据</Button>
            </div>

<br/><hr/><br/>

        </div>
    )
}

