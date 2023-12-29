import React, {ReactNode} from 'react';

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="h-full bg-red-500 text-white">
            {children}
        </div>
    );
};

export default AuthLayout;