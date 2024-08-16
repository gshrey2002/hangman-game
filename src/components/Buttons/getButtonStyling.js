function getStyle(style){
    const style1=" bg-blue-500 border border-blue-700 text-white hover:bg-blue-900 hover:border-blue-900"
    const style2=" bg-red-500 border border-red-700 text-white hover:bg-blue-900 hover:border-blue-900"
    const style3=" bg-gray-500 border border-gray-700 text-white hover:bg-blue-900 hover:border-blue-900"

    if(style==="style1"){
        return style1;
    }else if(style==="style2"){
        return style2;
    }else{
        return style3;
    }


}

export default getStyle