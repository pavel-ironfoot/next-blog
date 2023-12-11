import Link from 'next/link';
import './AboutLayout.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'About bla bla',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="about-layout">
            <h1>About Layyout</h1>
            <h4>
                <Link href={"/about/first"}>First</Link>
            </h4>
            <h4>
                <Link href={"/about/second"}>Second</Link>
            </h4>
            <h4>
                <Link href={"/about/third"}>Third</Link>
            </h4>
            <hr />
            {children}
        </div>
    );
}