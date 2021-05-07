import React,{useState,useEffect } from'react'
import styles from './index.less'
import { history } from 'umi';
const Body = (props) => {
    const menu = [
        {
            name:'app1',
            url:'/app1'
        },
        // {
        //     name:'app2',
        //     url:'/partB'
        // }
    ]
    return(
        <div className = {styles._basis_main_}>
            <div className={styles.header}>
                {/* <div style={{width:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'yellow',cursor:'pointer'}}>123456</div> */}
                {
                    menu.map((item,index)=>{
                        return (
                            <div 
                                style={{width:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'yellow',cursor:'pointer',marginRight:10}}
                                onClick = {()=>{history.push(item.url);}}
                                key = {index}
                            >
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className = {styles.bsis_body}>
                <div className = {styles.navBar}></div>
                <div className = {styles.container} id="content_main">
                    {props.children}
                    {/* <p style={{color:'#fff'}}>fdhskjafdsadsadsads</p> */}
                </div>
            </div>
        </div>
    )
}

export default Body;