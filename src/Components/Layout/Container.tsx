/* 0.1.0

    > JSX not recognized in typescript "jsx":"react-jsx" in tsconfig.json file

*/

import { ReactNode } from "react";



type ContainerProps = {
    children:ReactNode;
    as?: keyof JSX.IntrinsicElements;
    className?:string;
};

export default function Container({
    children,
    as = 'div',
    className='',
}:ContainerProps)
{
    const Tag = as;
    return <Tag className={className}>{children}</Tag>
}
