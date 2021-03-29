import React,{useState,useEffect } from'react'
import styles from './index.less'
const Body = (props) => {
    const menu = [
        {
            name:'app1',
            url:''
        },
        {
            name:'app2',
            url:''
        }
    ]
    return(
        <div className = {styles._basis_main_}>
            <div className={styles.header}>
                {/* <div style={{width:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'yellow',cursor:'pointer'}}>123456</div> */}
                {
                    menu.map(item=>{
                        return (
                            <div style={{width:100,height:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'yellow',cursor:'pointer',marginRight:10}}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className = {styles.bsis_body}>
                <div className = {styles.navBar}></div>
                <div className = {styles.container}>
                    {/* {this.props.children} */}
                    <p style={{color:'#fff'}}>fdhskjafdsadsadsads</p>
                </div>
            </div>
        </div>
    )
}

export default Body;