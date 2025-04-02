import { ReactNode } from 'react';
import './styles.css';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="app">
            <div className='container wrapper'>
                <Sidebar />
                <div className='body'>
                    <Header />
                    <main className='page'>{children}</main>
                </div>
            </div>
        </div>
    );
}