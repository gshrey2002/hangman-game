// import getStyle from "./getButtonStyling"

import getStyle from "./getButtonStyling"

// import getStyle from "./getButtonStyling"
function Button({text,buttontype,style,onClickHandler}){
return (<button 
    onClick={onClickHandler}
    type={buttontype}
className={`px-4 py-2 ${getStyle(style)} rounded-md transition-all`}
>
    Click Me {text}
    </button>)
}

function text(num){
    return num%2===0 ? "even" : "odd"
}
export default Button