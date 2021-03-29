import React,{useState,useEffect } from'react'
import { Button } from 'antd';

const Header = (props) => {
    const {
        setName
    } = props
    return(
        <div style={{width:'100%',height:'100%',background:'#FAE5E5'}}>
            <Button onClick={setName}>设置名称</Button>
        </div>
    )
}

export default Header;