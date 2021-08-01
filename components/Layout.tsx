import React, { FunctionComponent } from 'react';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = (props) => {
    const { children } = props;
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
